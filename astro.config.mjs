// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tsavo.github.io',
  base: '/thebutterrobot.ai/',
  outDir: './dist',
  build: {
    format: 'file'
  }
});
