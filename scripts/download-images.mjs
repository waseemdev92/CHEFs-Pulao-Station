// Downloads the restaurant photos (Instagram / Facebook) into public/images
// Run on your own PC:  npm run fetch-images
// NOTE: the source links are signed & expire after a few days - run this right away.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const list = JSON.parse(await readFile(new URL('../src/data/images.json', import.meta.url), 'utf8'));
const outDir = path.resolve('public/images');
await mkdir(outDir, { recursive: true });

let ok = 0;
for (const img of list) {
  try {
    const res = await fetch(img.remote, { headers: { 'user-agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    await writeFile(path.join(outDir, img.file), Buffer.from(await res.arrayBuffer()));
    console.log('saved  ', img.file);
    ok++;
  } catch (e) {
    console.log('FAILED ', img.file, String(e.message || e));
  }
}
console.log(`\nDone: ${ok}/${list.length} images saved to public/images`);
