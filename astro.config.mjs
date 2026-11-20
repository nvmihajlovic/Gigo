import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.restoran-gigo.co.rs',
  build: {
    format: 'file',
  },
  publicDir: './public'
});
