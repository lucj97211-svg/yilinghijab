// Generates public/sitemap.xml from the real product + blog data sources.
// Run: node scripts/gen-sitemap.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://yilinghijab.com';
const today = new Date().toISOString().slice(0, 10);

const slugsFrom = file =>
  [...readFileSync(resolve(root, file), 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const productSlugs = slugsFrom('src/data/products.js');
const postSlugs = slugsFrom('src/data/posts.js');

const staticPages = [
  ['/', 'weekly', '1.0'],
  ['/products', 'weekly', '0.9'],
  ['/custom-oem', 'monthly', '0.9'],
  ['/blog', 'weekly', '0.8'],
  ['/about', 'monthly', '0.7'],
  ['/contact', 'monthly', '0.7'],
  ['/faq', 'monthly', '0.6'],
  ['/reviews', 'monthly', '0.6'],
  ['/styling-guide', 'monthly', '0.6'],
  ['/shipping', 'yearly', '0.5'],
  ['/returns', 'yearly', '0.5'],
];

const entries = [
  ...staticPages.map(([p, f, pr]) => [p, f, pr]),
  ...productSlugs.map(s => [`/products/${s}`, 'monthly', '0.8']),
  ...postSlugs.map(s => [`/blog/${s}`, 'monthly', '0.7']),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ([loc, changefreq, priority]) => `  <url>
    <loc>${ORIGIN}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(
  `sitemap.xml written: ${entries.length} URLs ` +
    `(${staticPages.length} static, ${productSlugs.length} products, ${postSlugs.length} posts)`
);
