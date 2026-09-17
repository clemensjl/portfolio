import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // jele.at ist die Hauptadresse; portfolio.jele.at und www leiten per vercel.json hierher um
  site: 'https://jele.at',
  output: 'static',
  trailingSlash: 'always',
  // Acht kleine Komponenten-Stylesheets blockierten sonst einzeln das Rendern (Mobile-LCP).
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de', en: 'en' },
      },
      // nur Sprachseiten indizieren — Root-Redirect und 404 bleiben draußen
      filter: (page) => /\/(de|en)\//.test(page) && !page.includes('/lab/'),
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
