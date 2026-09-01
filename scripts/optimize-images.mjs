// Re-encodes oversized images in public/assets/images to web-appropriate
// weight without changing filenames, paths, or visible dimensions.
// Run: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIR = 'public/assets/images';
const MAX_BYTES = 400 * 1024; // target ceiling per image
const MAX_EDGE = 1800; // cap the long edge; retina-safe for a 900px slot

const files = readdirSync(DIR).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));

let before = 0;
let after = 0;
let touched = 0;

for (const file of files) {
  const src = join(DIR, file);
  const size = statSync(src).size;
  before += size;

  if (size <= MAX_BYTES) {
    after += size;
    continue;
  }

  const meta = await sharp(src).metadata();
  const needsResize = Math.max(meta.width, meta.height) > MAX_EDGE;

  // Step quality down until the file fits under the ceiling.
  let out = null;
  for (const quality of [82, 74, 66, 58, 50]) {
    const pipeline = sharp(src).rotate();
    if (needsResize) {
      pipeline.resize({
        width: meta.width >= meta.height ? MAX_EDGE : null,
        height: meta.height > meta.width ? MAX_EDGE : null,
        withoutEnlargement: true,
      });
    }
    const buf = await pipeline.webp({ quality, effort: 6 }).toBuffer();
    out = buf;
    if (buf.length <= MAX_BYTES) break;
  }

  const tmp = src + '.tmp';
  await sharp(out).toFile(tmp);
  unlinkSync(src);
  renameSync(tmp, src);

  const newSize = statSync(src).size;
  after += newSize;
  touched += 1;
  console.log(
    `${file.padEnd(32)} ${String(Math.round(size / 1024)).padStart(5)}KB -> ` +
      `${String(Math.round(newSize / 1024)).padStart(4)}KB` +
      (needsResize ? `  (resized to ${MAX_EDGE}px edge)` : '')
  );
}

const mb = b => (b / 1024 / 1024).toFixed(1);
console.log(
  `\n${touched} files re-encoded. ` +
    `Total ${mb(before)} MB -> ${mb(after)} MB ` +
    `(saved ${mb(before - after)} MB, ${Math.round((1 - after / before) * 100)}%)`
);
