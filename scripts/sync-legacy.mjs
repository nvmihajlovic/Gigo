import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicDir = join(root, 'public');

mkdirSync(publicDir, { recursive: true });

const htmlPages = ['index.html', 'o-nama.html', 'jelovnik.html', 'vinska-karta.html', 'kontakt.html'];
for (const locale of ['', 'en', 'ru']) {
  for (const page of htmlPages) {
    rmSync(join(publicDir, locale, page), { force: true });
  }
}

for (const directory of ['images', 'jelovnik']) {
  cpSync(join(root, directory), join(publicDir, directory), { recursive: true });
}
