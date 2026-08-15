const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ORIGIN = 'https://yilinghijab.com';

function extractSlugs(file) {
  const src = fs.readFileSync(path.join(ROOT, 'src/data', file), 'utf8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
}

const productSlugs = extractSlugs('products.js');
const postSlugs = extractSlugs('posts.js');

const staticPages = [
  { loc: '/', priority: '1.0', freq: 'weekly' },
  { loc: '/products', priority: '0.9', freq: 'weekly' },
  { loc: '/custom-oem', priority: '0.9', freq: 'monthly' },
  { loc: '/about', priority: '0.7', freq: 'monthly' },
  { loc: '/blog', priority: '0.8', freq: 'weekly' },
  { loc: '/faq', priority: '0.6', freq: 'monthly' },
  { loc: '/contact', priority: '0.7', freq: 'monthly' },
  { loc: '/reviews', priority: '0.6', freq: 'monthly' },
  { loc: '/styling-guide', priority: '0.6', freq: 'monthly' },
  { loc: '/shipping', priority: '0.5', freq: 'yearly' },
  { loc: '/returns', priority: '0.5', freq: 'yearly' },
];

const today = new Date().toISOString().slice(0, 10);

const urls = [
  ...staticPages.map(p => ({ ...p, lastmod: today })),
  ...productSlugs.map(s => ({ loc: `/products/${s}`, priority: '0.8', freq: 'monthly', lastmod: today })),
  ...postSlugs.map(s => ({ loc: `/blog/${s}`, priority: '0.7', freq: 'monthly', lastmod: today })),
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
urls.forEach(u => {
  xml += '  <url>\n';
  xml += `    <loc>${ORIGIN}${u.loc}</loc>\n`;
  xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${u.freq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
});
xml += '</urlset>\n';

const out = path.join(ROOT, 'public/sitemap.xml');
fs.writeFileSync(out, xml);

console.log('sitemap written:', out);
console.log('  static :', staticPages.length);
console.log('  product:', productSlugs.length);
console.log('  posts  :', postSlugs.length);
console.log('  total  :', urls.length);
