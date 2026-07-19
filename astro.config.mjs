import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REVIEW: nach Domainkauf durch https://jele.at ersetzen (auch in public/robots.txt)
  site: 'https://portfolio-clemens-jeles-projects.vercel.app',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de', en: 'en' },
      },
      // nur Sprachseiten indizieren — Root-Redirect und 404 bleiben draußen
      filter: (page) => /\/(de|en)\//.test(page),
    }),
  ],
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
