// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ocean-log.dev',
  integrations: [
    react(),
    mdx({
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
      },
    }),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});