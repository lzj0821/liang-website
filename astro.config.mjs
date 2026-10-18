// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://liangzhenjie.cn',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
