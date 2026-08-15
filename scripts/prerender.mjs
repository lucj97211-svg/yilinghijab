import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const vite = await createServer({
  root: ROOT,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

const { render } = await vite.ssrLoadModule('/src/entry-ssr.jsx');
const { default: products } = await vite.ssrLoadModule('/src/data/products.js');
const { default: posts } = await vite.ssrLoadModule('/src/data/posts.js');

const routes = [
  '/', '/products', '/custom-oem', '/about', '/blog',
  '/faq', '/contact', '/reviews', '/styling-guide', '/shipping', '/returns',
  ...products.map(p => `/products/${p.slug}`),
  ...posts.map(p => `/blog/${p.slug}`),
];

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

let ok = 0;
const failed = [];

for (const route of routes) {
  try {
    const { html, head } = render(route);

    let out = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    // swap the SEO-HEAD placeholder block with per-page helmet tags
    out = out.replace(
      /<!--SEO-HEAD-->[\s\S]*?<!--\/SEO-HEAD-->/,
      head
    );

    const dir = route === '/' ? DIST : path.join(DIST, route.slice(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), out);
    ok++;
  } catch (e) {
    failed.push(`${route} -> ${e.message.slice(0, 110)}`);
  }
}

await vite.close();

console.log(`prerendered: ${ok}/${routes.length}`);
if (failed.length) {
  console.log('failed:');
  failed.slice(0, 5).forEach(f => console.log('  ', f));
}
