import { readFileSync } from 'node:fs';

const src = readFileSync('src/data/posts.js', 'utf8');
const blocks = [...src.matchAll(/\n  \{[\s\S]*?\n  \},/g)].map(m => m[0]);

const get = (b, k) => {
  const m = b.match(new RegExp(`\\n\\s{4}${k}:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
  return m ? m[1] : null;
};

console.log(`posts parsed: ${blocks.length}\n`);
for (const b of blocks) {
  const slug = get(b, 'slug');
  const mt = get(b, 'metaTitle');
  const md = get(b, 'metaDescription');
  const ex = get(b, 'excerpt');
  const effT = mt ? `${mt} | Yiling` : `${get(b, 'title')} | Yiling Hijab`;
  const effD = md || ex || '';
  const flag = (effT.length > 60 ? 'T' : '-') + (effD.length > 158 ? 'D' : '-');
  if (flag !== '--') {
    console.log(`[${flag}] ${slug}`);
    console.log(`     T(${effT.length}) ${effT}`);
    console.log(`     D(${effD.length}) ${effD.slice(0, 110)}`);
  }
}
