// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wopr.pages.dev',
  outDir: './dist',
  build: {
    format: 'file'
  }
});
