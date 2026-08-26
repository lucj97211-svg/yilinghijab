/**
 * Google Search Console - Request Indexing via URL Inspection API
 * Uses curl.exe via local proxy (127.0.0.1:7897) to reach Google APIs.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const SITE_URL = 'https://yilinghijab.com/';
const PROXY = 'http://127.0.0.1:7897';
const KEY_FILE = path.join(__dirname, 'gsc-service-account.json');
const POSTS_FILE = path.join(__dirname, '../src/data/posts.js');

function base64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function makeJWT(sa) {
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = base64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: sa.token_uri,
    exp: now + 3600,
    iat: now,
  }));
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${payload}`);
  return `${header}.${payload}.${base64url(sign.sign(sa.private_key))}`;
}

function curlPost(url, body, headers = [], isForm = false) {
  const tmpFile = path.join(require('os').tmpdir(), `gsc-body-${Date.now()}.json`);
  fs.writeFileSync(tmpFile, body, 'utf8');
  const headerArgs = headers.map(h => `-H "${h}"`).join(' ');
  const contentType = isForm ? 'application/x-www-form-urlencoded' : 'application/json';
  const cmd = `curl.exe -s -x ${PROXY} --max-time 20 -X POST "${url}" ${headerArgs} -H "Content-Type: ${contentType}" --data-binary "@${tmpFile}"`;
  try {
    const result = execSync(cmd, { encoding: 'utf8' });
    fs.unlinkSync(tmpFile);
    return result;
  } catch (e) {
    fs.unlinkSync(tmpFile);
    throw e;
  }
}

function getAccessToken(sa) {
  const jwt = makeJWT(sa);
  const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
  const res = curlPost('https://oauth2.googleapis.com/token', body, [], true);
  const parsed = JSON.parse(res);
  if (!parsed.access_token) throw new Error('No access_token: ' + res);
  return parsed.access_token;
}

function requestIndexing(pageUrl, token) {
  const body = JSON.stringify({ url: pageUrl, type: 'URL_UPDATED' });
  const res = curlPost(
    'https://indexing.googleapis.com/v3/urlNotifications:publish',
    body,
    [`Authorization: Bearer ${token}`]
  );
  return { raw: res, parsed: JSON.parse(res) };
}

function main() {
  // Get latest post slug
  const postsContent = fs.readFileSync(POSTS_FILE, 'utf8');
  const slugMatches = [...postsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  if (!slugMatches.length) { console.error('No slugs found'); process.exit(1); }
  const latestSlug = slugMatches[slugMatches.length - 1][1];
  const targetUrl = `${SITE_URL}blog/${latestSlug}`;
  console.log(`Requesting indexing for: ${targetUrl}`);

  const sa = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
  const token = getAccessToken(sa);
  console.log('Access token obtained.');

  const result = requestIndexing(targetUrl, token);
  console.log('Response:', JSON.stringify(result.parsed, null, 2));

  const verdict = result.parsed?.inspectionResult?.indexStatusResult?.verdict;
  if (verdict) {
    console.log(`Index verdict: ${verdict}`);
  }
  console.log(`DONE: ${targetUrl}`);
}

main();
