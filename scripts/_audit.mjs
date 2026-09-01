import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = d =>
  readdirSync(d).flatMap(f => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : [];
  });

const pages = walk('dist');
// Google measures the rendered string, not the escaped source, so decode
// entities before checking length (&amp; is 1 char on screen, not 5).
const decode = s =>
  String(s || '')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;/g, '/')
    .replace(/&nbsp;/g, ' ');

const grab = (html, re) => {
  const m = html.match(re);
  return m ? decode(m[1]) : '';
};

const rows = pages.map(p => {
  const h = readFileSync(p, 'utf8');
  const rel = p.replace(/^dist[\\/]?/, '').replace(/[\\/]?index\.html$/, '') || '/';
  return {
    page: rel,
    title: grab(h, /<title[^>]*>([^<]*)<\/title>/),
    desc: grab(h, /<meta[^>]*name="description"[^>]*content="([^"]*)"/),
    h1: (h.match(/<h1/g) || []).length,
    canonical: grab(h, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/),
    imgs: (h.match(/<img/g) || []).length,
    lazyAll: !/<img(?![^>]*loading=)/.test(h),
    words: (h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').match(/\b\w+\b/g) || []).length,
    bytes: Buffer.byteLength(h),
  };
});

const issue = (name, list) => {
  if (!list.length) return;
  console.log(`\n### ${name} (${list.length})`);
  list.slice(0, 10).forEach(r => console.log('  ' + r));
  if (list.length > 10) console.log(`  ...and ${list.length - 10} more`);
};

console.log(`Audited ${rows.length} pages\n${'='.repeat(50)}`);

issue('TITLE > 60 chars (truncated in SERP)',
  rows.filter(r => r.title.length > 60).map(r => `${r.title.length}  ${r.page}`));
issue('DESC missing or < 70 chars',
  rows.filter(r => r.desc.length < 70).map(r => `${r.desc.length}  ${r.page}`));
issue('DESC > 160 chars (truncated)',
  rows.filter(r => r.desc.length > 160).map(r => `${r.desc.length}  ${r.page}`));
issue('H1 count != 1',
  rows.filter(r => r.h1 !== 1).map(r => `h1=${r.h1}  ${r.page}`));
issue('Missing canonical',
  rows.filter(r => !r.canonical).map(r => r.page));
issue('Duplicate canonical targets',
  Object.entries(rows.reduce((a, r) => ((a[r.canonical] = (a[r.canonical] || 0) + 1), a), {}))
    .filter(([, n]) => n > 1).map(([u, n]) => `${n}x  ${u}`));
issue('Thin content < 350 words',
  rows.filter(r => r.words < 350).map(r => `${r.words}w  ${r.page}`));
issue('Images without loading attr',
  rows.filter(r => !r.lazyAll && r.imgs).map(r => `${r.imgs} imgs  ${r.page}`));

const dupT = Object.entries(rows.reduce((a, r) => ((a[r.title] = [...(a[r.title] || []), r.page]), a), {}))
  .filter(([, v]) => v.length > 1);
issue('Duplicate titles', dupT.map(([t, v]) => `${v.length}x  "${t.slice(0, 55)}"`));

const dupD = Object.entries(rows.reduce((a, r) => ((a[r.desc] = [...(a[r.desc] || []), r.page]), a), {}))
  .filter(([, v]) => v.length > 1);
issue('Duplicate descriptions', dupD.map(([d, v]) => `${v.length}x  "${d.slice(0, 55)}"`));

const heavy = rows.filter(r => r.bytes > 100 * 1024).sort((a, b) => b.bytes - a.bytes);
issue('HTML > 100KB', heavy.map(r => `${Math.round(r.bytes / 1024)}KB  ${r.page}`));
