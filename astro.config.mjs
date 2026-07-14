import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://m1davp.github.io',
  integrations: [sitemap()],
  image: {
    domains: ['flagcdn.com'],
  },
});
