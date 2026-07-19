# Portfolio jele.at — Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Statisches, zweisprachiges (DE/EN) Portfolio für Clemens Jele mit Astro 5, deploybar auf Vercel, später unter jele.at.

**Architecture:** Astro 5 mit `output: 'static'` und Content Collections (`projects`, `ventures`). Seiten laufen über dynamische `[lang]`-Routen (`/de/...`, `/en/...`); Root `/` macht einen JS-Redirect nach Browser-Sprache. Kein Backend, kein Framework-JS — nur ein Inline-Script für den Redirect.

**Tech Stack:** Astro 5, TypeScript, @astrojs/sitemap, @astrojs/check, @fontsource-variable/inter, Playwright (nur Build-Tooling: Screenshots + OG-Image), Vercel.

**Test-Ansatz:** Statische Site ohne Logik-Layer — kein Unit-Test-Framework. Verifikation pro Task: `npx astro build` fehlerfrei + gezielte `grep`-Assertions auf `dist/` + `npx astro check` für Typen. Abschluss-Verifikation: Playwright-Screenshots aller Seiten in beiden Sprachen (Task 12) und Live-Check nach Deploy (Task 13).

## Global Constraints

- Astro 5, `output: 'static'`, Content Collections — kein Backend, keine DB.
- i18n: Locales `de` + `en`, beide mit URL-Präfix (`/de/...`, `/en/...`). Root `/` = JS-Redirect mit Fallback-Link auf `/de/`.
- Kein Framework-JS außer minimalem Inline-Script für Redirect.
- Keine Emojis in Texten/UI (Icons ok). Kein KI-Ton in Texten.
- Design: Charcoal-Grundton, Grün-Akzent, CJ-Monogramm als Favicon/OG-Logo. Eine feste Theme-Stimmung, kein Dark/Light-Toggle.
- E-Mail-Platzhalter überall: `mailto:#` (bis echte Adresse geliefert).
- hreflang-Paare auf allen Seiten, Sitemap, OG-Image pro Seite, `prefers-reduced-motion` respektiert, sichtbarer Keyboard-Fokus, Ziel Lighthouse 95+.
- Out of Scope: Blog, CMS, Kontaktformular, Analytics, weitere Sprachen.
- Slugs sind in beiden Sprachen identisch (`de/wincleaner.md` + `en/wincleaner.md`), sonst bricht der Sprachumschalter.
- Review-Marker-Konvention: unbestätigte Fakten stehen als `<!-- REVIEW: ... -->`-Kommentar im Markdown/Code. Task 13 verweigert Deploy, solange REVIEW-Marker existieren.

## Dateistruktur (Zielbild)

```
portfolio/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
├── public/
│   ├── favicon.svg              # CJ-Monogramm (Draft, REVIEW: Variante D)
│   ├── robots.txt               # Task 11
│   ├── og-default.png           # generiert in Task 11
│   └── images/projects/*.svg    # Platzhalter-Screenshots
├── scripts/
│   ├── og.mjs                   # OG-Image-Generator (Task 11)
│   └── screenshots.mjs          # Playwright-Screenshots (Task 12)
└── src/
    ├── content.config.ts
    ├── content/
    │   ├── projects/{de,en}/{wincleaner,kina-search,panini-tracker,techcompare}.md
    │   └── ventures/{de,en}/{maerchenfuchs,lifemate}.md
    ├── data/skills.ts
    ├── i18n/{de.ts,en.ts,index.ts}
    ├── layouts/Base.astro
    ├── components/{Header,Footer,LangSwitch,ProjectCard}.astro
    ├── styles/global.css
    └── pages/
        ├── index.astro          # Sprach-Redirect
        ├── 404.astro            # zweisprachig
        └── [lang]/
            ├── index.astro
            ├── about.astro
            ├── startup.astro
            └── projects/
                ├── index.astro
                └── [slug].astro
```

---

### Task 1: Scaffold & Toolchain

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/pages/index.astro` (Minimal-Platzhalter, wird in Task 10 ersetzt)

**Interfaces:**
- Produces: lauffähiges Astro-5-Projekt; `Astro.site` gesetzt (Vercel-URL-Platzhalter); i18n-Config `de`/`en` mit `prefixDefaultLocale: true`.

- [ ] **Step 1: package.json anlegen**

```json
{
  "name": "portfolio",
  "type": "module",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "og": "node scripts/og.mjs",
    "shots": "node scripts/screenshots.mjs"
  }
}
```

- [ ] **Step 2: Dependencies installieren**

Run: `npm install astro@^5 @astrojs/sitemap @fontsource-variable/inter && npm install -D @astrojs/check typescript playwright`
Expected: exit 0, `package-lock.json` entsteht.

Danach: `npx playwright install chromium` (Browser für Task 11/12).

- [ ] **Step 3: astro.config.mjs anlegen**

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REVIEW: nach erstem Vercel-Deploy durch echte URL ersetzen, nach Domainkauf durch https://jele.at
  site: 'https://portfolio-clemensjl.vercel.app',
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
```

- [ ] **Step 4: tsconfig.json anlegen**

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "src/**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 5: .gitignore anlegen**

```
node_modules/
dist/
.astro/
.vercel/
screenshots/
```

- [ ] **Step 6: Minimal-Rootseite anlegen** (`src/pages/index.astro`)

```astro
---
// Platzhalter — wird in Task 10 durch Sprach-Redirect ersetzt.
---
<!doctype html>
<html lang="de">
  <head><meta charset="utf-8" /><title>Clemens Jele</title></head>
  <body><a href="/de/">Deutsch</a></body>
</html>
```

- [ ] **Step 7: Build verifizieren**

Run: `npx astro build`
Expected: exit 0, `dist/index.html` existiert.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json .gitignore src/pages/index.astro
git commit -m "feat: Astro-5-Scaffold mit i18n- und Sitemap-Config"
```

---

### Task 2: i18n-Dictionary & Helpers

**Files:**
- Create: `src/i18n/de.ts`, `src/i18n/en.ts`, `src/i18n/index.ts`, `src/data/skills.ts`

**Interfaces:**
- Produces:
  - `type Lang = 'de' | 'en'`
  - `useTranslations(lang: Lang): (key: UiKey) => string`
  - `langStaticPaths: { params: { lang: Lang } }[]` — für `getStaticPaths` aller `[lang]`-Seiten
  - `otherLang(lang: Lang): Lang`
  - `skills: string[]` aus `src/data/skills.ts`

- [ ] **Step 1: src/i18n/de.ts anlegen**

```ts
export default {
  'site.title': 'Clemens Jele',
  'site.description':
    'Softwareentwickler und Schüler an der HTL Mössingerstraße in Klagenfurt. Ich baue praktische Tools: Desktop-Utilities, datenlastige Web-Apps und Automatisierung rund um echte Workflows.',
  'nav.home': 'Start',
  'nav.projects': 'Projekte',
  'nav.startup': 'Startup',
  'nav.about': 'Über mich',
  'hero.tagline':
    'Ich baue praktische Tools: Desktop-Utilities, datenlastige Web-Apps und Automatisierung rund um echte Workflows.',
  'hero.ctaGithub': 'GitHub',
  'hero.ctaEmail': 'E-Mail schreiben',
  'home.featured': 'Ausgewählte Projekte',
  'home.allProjects': 'Alle Projekte ansehen',
  'home.startupTitle': 'JGG Labs',
  'home.startupTeaser':
    'Gemeinsam mit zwei Freunden baue ich Märchenfuchs und Lifemate — zwei Apps, ein kleines Startup.',
  'home.startupCta': 'Mehr zum Startup',
  'home.skills': 'Stack',
  'projects.title': 'Projekte',
  'projects.description': 'Alle Projekte von Clemens Jele: Desktop-Tools, Web-Apps und Automatisierung.',
  'projects.repo': 'Repository',
  'projects.live': 'Live ansehen',
  'projects.stack': 'Stack',
  'projects.backToOverview': 'Zurück zur Übersicht',
  'startup.title': 'Startup — JGG Labs',
  'startup.description': 'JGG Labs: Märchenfuchs und Lifemate — was wir bauen, meine Rolle, aktueller Status.',
  'startup.role': 'Rolle',
  'startup.status': 'Status',
  'about.title': 'Über mich',
  'about.description': 'Clemens Jele — Schüler an der HTL Mössingerstraße in Klagenfurt, Softwareentwickler.',
  'footer.email': 'E-Mail',
  'footer.github': 'GitHub',
  'notfound.title': 'Seite nicht gefunden',
  'notfound.text': 'Diese Seite gibt es nicht (mehr).',
  'notfound.back': 'Zur Startseite',
} as const;
```

- [ ] **Step 2: src/i18n/en.ts anlegen**

```ts
import type de from './de';

const en: Record<keyof typeof de, string> = {
  'site.title': 'Clemens Jele',
  'site.description':
    'Software developer and student at HTL Mössingerstraße in Klagenfurt, Austria. I build practical tools: desktop utilities, data-heavy web apps and automation around real workflows.',
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.startup': 'Startup',
  'nav.about': 'About',
  'hero.tagline':
    'I build practical tools: desktop utilities, data-heavy web apps and automation around real workflows.',
  'hero.ctaGithub': 'GitHub',
  'hero.ctaEmail': 'Send an email',
  'home.featured': 'Featured projects',
  'home.allProjects': 'View all projects',
  'home.startupTitle': 'JGG Labs',
  'home.startupTeaser':
    'Together with two friends I am building Märchenfuchs and Lifemate — two apps, one small startup.',
  'home.startupCta': 'More about the startup',
  'home.skills': 'Stack',
  'projects.title': 'Projects',
  'projects.description': 'All projects by Clemens Jele: desktop tools, web apps and automation.',
  'projects.repo': 'Repository',
  'projects.live': 'View live',
  'projects.stack': 'Stack',
  'projects.backToOverview': 'Back to overview',
  'startup.title': 'Startup — JGG Labs',
  'startup.description': 'JGG Labs: Märchenfuchs and Lifemate — what we build, my role, current status.',
  'startup.role': 'Role',
  'startup.status': 'Status',
  'about.title': 'About me',
  'about.description': 'Clemens Jele — student at HTL Mössingerstraße in Klagenfurt, software developer.',
  'footer.email': 'Email',
  'footer.github': 'GitHub',
  'notfound.title': 'Page not found',
  'notfound.text': 'This page does not exist (anymore).',
  'notfound.back': 'Back to home',
};

export default en;
```

- [ ] **Step 3: src/i18n/index.ts anlegen**

```ts
import de from './de';
import en from './en';

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export type UiKey = keyof typeof de;

const ui: Record<Lang, Record<UiKey, string>> = { de, en };

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}

export const langStaticPaths = [
  { params: { lang: 'de' as Lang } },
  { params: { lang: 'en' as Lang } },
];

export const GITHUB_URL = 'https://github.com/clemensjl';
// REVIEW: echte E-Mail-Adresse eintragen, sobald geliefert.
export const EMAIL_HREF = 'mailto:#';
```

- [ ] **Step 4: src/data/skills.ts anlegen**

```ts
// Quelle: GitHub-Profil-README (Stand 2026-07). Sprachneutral.
export const skills = [
  'TypeScript',
  'C# / .NET',
  'Python',
  'Next.js',
  'Node.js',
  'Astro',
  'Supabase',
  'PostgreSQL',
];
```

- [ ] **Step 5: Typen verifizieren**

Run: `npx astro check`
Expected: `0 errors`. (Fehlende Keys in `en.ts` würden hier als Typfehler auffliegen.)

- [ ] **Step 6: Commit**

```bash
git add src/i18n src/data
git commit -m "feat: i18n-Dictionary (de/en), Helpers und Skills-Liste"
```

---

### Task 3: Design-Foundation — global.css, Favicon, Base-Layout

**Files:**
- Create: `src/styles/global.css`, `public/favicon.svg`, `src/layouts/Base.astro`

**Interfaces:**
- Consumes: `Lang` aus `src/i18n` (Task 2)
- Produces: `Base.astro` mit Props `{ lang: Lang; title: string; description: string; path: string; image?: string }`. `path` = Pfad ohne Sprachpräfix, mit führendem und schließendem Slash (z. B. `/projects/wincleaner/`, Home = `/`). Rendert `<head>` komplett (hreflang, canonical, OG) und `<slot />` im `<body>`. CSS-Klassen: `.container`, `.btn`, `.btn-primary`, `.card`, `.tag`, `.section-title`.

**Hinweis an den Ausführenden:** Vor diesem Task den frontend-design Skill laden (`frontend-design:frontend-design`) und die Tokens/Typografie damit schärfen. Der untenstehende Code ist der abgestimmte Ausgangspunkt (Charcoal + GitHub-Grün, Inter Variable); Richtung beibehalten, Feinschliff erlaubt.

- [ ] **Step 1: src/styles/global.css anlegen**

```css
:root {
  --bg: #16191d;
  --surface: #1e2228;
  --surface-2: #262b33;
  --border: #30363d;
  --text: #e6e9ec;
  --muted: #9aa3ad;
  --accent: #3fb950;
  --accent-dim: #2ea043;
  --radius: 10px;
  --font-sans: 'Inter Variable', system-ui, sans-serif;
  --font-mono: ui-monospace, 'Cascadia Code', Consolas, monospace;
}

* { box-sizing: border-box; }

html {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-text-size-adjust: 100%;
}

body { margin: 0; min-height: 100vh; display: flex; flex-direction: column; }

main { flex: 1; }

h1, h2, h3 { line-height: 1.2; letter-spacing: -0.02em; }

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 2px;
}

.container { max-width: 64rem; margin-inline: auto; padding-inline: 1.25rem; }

.section-title {
  font-size: 1.35rem;
  margin: 3rem 0 1.25rem;
  color: var(--text);
}

.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  background: var(--surface);
  font-weight: 500;
}
.btn:hover { background: var(--surface-2); text-decoration: none; }

.btn-primary {
  background: var(--accent-dim);
  border-color: var(--accent-dim);
  color: #fff;
}
.btn-primary:hover { background: var(--accent); }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  transition: border-color 150ms ease;
}
.card:hover { border-color: var(--accent-dim); }

.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--muted);
  border: 1px solid var(--border);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: public/favicon.svg anlegen**

<!-- REVIEW: durch CJ-Monogramm „Variante D" aus dem GitHub-Auftritt ersetzen — Asset war lokal nicht auffindbar. Bis dahin dieser Draft. -->

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#16191d"/>
  <text x="32" y="43" font-family="ui-monospace, 'Cascadia Code', Consolas, monospace"
        font-size="27" font-weight="700" fill="#3fb950" text-anchor="middle">CJ</text>
</svg>
```

- [ ] **Step 3: src/layouts/Base.astro anlegen**

```astro
---
import '@fontsource-variable/inter';
import '../styles/global.css';
import type { Lang } from '../i18n';

interface Props {
  lang: Lang;
  title: string;
  description: string;
  path: string;
  image?: string;
}

const { lang, title, description, path, image = '/og-default.png' } = Astro.props;
const site = (Astro.site?.href ?? '').replace(/\/$/, '');
---

<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href={`${site}/${lang}${path}`} />
    <link rel="alternate" hreflang="de" href={`${site}/de${path}`} />
    <link rel="alternate" hreflang="en" href={`${site}/en${path}`} />
    <link rel="alternate" hreflang="x-default" href={`${site}/de${path}`} />
    <link rel="sitemap" href="/sitemap-index.xml" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${site}/${lang}${path}`} />
    <meta property="og:image" content={`${site}${image}`} />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 4: Rootseite testweise auf Base umstellen und bauen**

`src/pages/index.astro` bleibt inhaltlich Platzhalter (Task 10 ersetzt ihn), aber Import prüfen: temporär in `src/pages/index.astro` nichts ändern. Stattdessen Build direkt prüfen:

Run: `npx astro build && npx astro check`
Expected: beide exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css public/favicon.svg src/layouts/Base.astro
git commit -m "feat: Design-Tokens, Favicon-Draft und Base-Layout mit SEO-Head"
```

---

### Task 4: Content Collections & Inhalte

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/projects/de/{wincleaner,kina-search,panini-tracker,techcompare}.md` + gleiche Dateinamen unter `en/`
- Create: `src/content/ventures/de/{maerchenfuchs,lifemate}.md` + gleiche unter `en/`
- Create: `public/images/projects/{wincleaner,kina-search,panini-tracker,techcompare}.svg` (Platzhalter)

**Interfaces:**
- Produces: Collections `projects` und `ventures`, abrufbar via `getCollection('projects', (e) => e.id.startsWith('de/'))`. Entry-`id` hat Format `<lang>/<slug>` (z. B. `de/wincleaner`). Schema siehe Step 1.

- [ ] **Step 1: src/content.config.ts anlegen**

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    image: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const ventures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ventures' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    live: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects, ventures };
```

- [ ] **Step 2: Platzhalter-Screenshots anlegen**

Für jeden Slug eine SVG-Datei `public/images/projects/<slug>.svg` nach diesem Muster (Projektname im `<text>` anpassen):

<!-- REVIEW: durch echte Screenshots ersetzen (PNG, 1200×675). -->

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="#1e2228"/>
  <rect x="1" y="1" width="1198" height="673" fill="none" stroke="#30363d" stroke-width="2"/>
  <text x="600" y="350" font-family="ui-monospace, Consolas, monospace" font-size="52"
        fill="#3fb950" text-anchor="middle">WinCleaner</text>
</svg>
```

- [ ] **Step 3: Projekt-Markdown DE anlegen**

`src/content/projects/de/wincleaner.md`:

```markdown
---
title: WinCleaner
summary: Aufräum-Tool für Windows — Duplikat-Erkennung per Perceptual Hashing, NTFS-Schnellscan, Hard-Link-Deduplizierung.
stack: ["C#", ".NET"]
repo: https://github.com/clemensjl/WinCleaner
image: /images/projects/wincleaner.svg
order: 1
featured: true
---

WinCleaner räumt volle Windows-Datenträger auf, ohne blind zu löschen. Statt nur Dateinamen zu vergleichen, erkennt es Duplikate über Perceptual Hashing — auch bei umbenannten oder leicht veränderten Dateien.

Der Scan liest die NTFS-Strukturen direkt und ist dadurch deutlich schneller als ein klassischer Verzeichnis-Walk. Gefundene Duplikate werden nicht gelöscht, sondern per Hard-Link dedupliziert: Der Platz wird frei, alle Pfade funktionieren weiter.

Das Ergebnis landet in einem HTML-Report mit Treemap, der auf einen Blick zeigt, wo der Platz hingeht.
```

`src/content/projects/de/kina-search.md`:

```markdown
---
title: kina-search
summary: Durchsuchbare Produktdatenbank — 75 Community-Spreadsheets zu 100k+ deduplizierten Einträgen aggregiert.
stack: ["Next.js", "TypeScript", "GitHub Actions"]
repo: https://github.com/clemensjl/kina-search
image: /images/projects/kina-search.svg
order: 2
featured: true
---

Die Community pflegte ihre Produktdaten in 75 verstreuten Spreadsheets — unmöglich zu durchsuchen, voller Duplikate. kina-search sammelt alles ein und macht daraus eine durchsuchbare Datenbank mit über 100.000 deduplizierten Einträgen.

Crawler laufen automatisiert über GitHub Actions und halten die Daten aktuell, ohne dass jemand manuell eingreifen muss. Das Frontend ist eine Next.js-App mit schneller Suche über den gesamten Bestand.
```

`src/content/projects/de/panini-tracker.md`:

```markdown
---
title: panini-tracker
summary: Sammel-Tracker für das Panini-Album zur WM 2026 — Single-File-Web-App auf GitHub Pages.
stack: ["JavaScript", "GitHub Pages"]
repo: https://github.com/clemensjl/panini-tracker
image: /images/projects/panini-tracker.svg
order: 3
featured: false
---

Wer das Panini-Album zur WM 2026 sammelt, verliert schnell den Überblick: Welche Sticker fehlen, welche sind doppelt, was kann getauscht werden? panini-tracker beantwortet das mit ein paar Klicks.

Bewusst minimalistisch gebaut: eine einzige HTML-Datei, kein Build-Schritt, gehostet auf GitHub Pages. Der Sammelstand bleibt lokal im Browser.
```

`src/content/projects/de/techcompare.md`:

```markdown
---
title: TechCompare
summary: Vergleichsseite für aktuelle Tech-Produkte — TypeScript, deployt auf Vercel.
stack: ["TypeScript", "Vercel"]
repo: https://github.com/clemensjl/TechCompare
image: /images/projects/techcompare.svg
order: 4
featured: true
---

TechCompare stellt aktuelle Tech-Produkte nebeneinander und macht Spezifikationen direkt vergleichbar, statt sie aus zig Herstellerseiten zusammenzusuchen.

Gebaut mit TypeScript, deployt auf Vercel.
```

<!-- REVIEW: Live-URLs für kina-search, panini-tracker (GitHub Pages) und TechCompare (Vercel) nachtragen (`live:`-Frontmatter), sobald bestätigt. -->

- [ ] **Step 4: Projekt-Markdown EN anlegen**

Gleiche vier Dateien unter `src/content/projects/en/`, identisches Frontmatter (nur `summary` übersetzt), Body übersetzt. Beispiel `en/wincleaner.md`:

```markdown
---
title: WinCleaner
summary: Disk-cleanup tool for Windows — duplicate detection via perceptual hashing, NTFS fast scan, hard-link deduplication.
stack: ["C#", ".NET"]
repo: https://github.com/clemensjl/WinCleaner
image: /images/projects/wincleaner.svg
order: 1
featured: true
---

WinCleaner cleans up full Windows drives without blindly deleting things. Instead of comparing file names, it detects duplicates via perceptual hashing — even when files were renamed or slightly changed.

The scan reads NTFS structures directly, which makes it much faster than a classic directory walk. Duplicates are not deleted but deduplicated via hard links: space is freed while every path keeps working.

Results end up in an HTML report with a treemap that shows at a glance where the space went.
```

`en/kina-search.md`, `en/panini-tracker.md`, `en/techcompare.md` analog: Frontmatter-Felder `stack`, `repo`, `image`, `order`, `featured` identisch zur DE-Version, `summary` und Body sinngemäß auf Englisch übersetzt (Inhalt wie in Step 3 beschrieben).

- [ ] **Step 5: Ventures-Markdown anlegen**

`src/content/ventures/de/maerchenfuchs.md`:

```markdown
---
title: Märchenfuchs
summary: App für personalisierte Gutenachtgeschichten für Kinder.
role: Mitgründer, Entwicklung
status: In Entwicklung
stack: ["Flutter", "Supabase"]
order: 1
---

Märchenfuchs erzählt Kindern Gutenachtgeschichten, die es so nur einmal gibt: mit dem eigenen Namen, den eigenen Lieblingsthemen, angepasst ans Alter. Eltern stellen ein, die App erzählt.

Wir bauen Märchenfuchs zu dritt als JGG Labs. Ich verantworte die technische Umsetzung — App und Backend.
```

<!-- REVIEW: Rollenbeschreibung und Status von Clemens bestätigen lassen. -->

`src/content/ventures/de/lifemate.md`:

```markdown
---
title: Lifemate
summary: Companion-App für den Alltag.
role: Mitgründer, Entwicklung
status: Frühe Entwicklung
stack: []
order: 2
---

Lifemate ist unser zweites Projekt bei JGG Labs und steckt noch in der frühen Entwicklung.
```

<!-- REVIEW: Lifemate — Beschreibung, Rolle, Status und Stack von Clemens liefern lassen. Aktueller Text ist bewusst knapper Platzhalter. -->

`src/content/ventures/en/maerchenfuchs.md` und `en/lifemate.md`: identisches Frontmatter (nur `summary`, `role`, `status` übersetzt: "Co-founder, development" / "In development" / "Early development"), Body übersetzt.

- [ ] **Step 6: Build + Schema verifizieren**

Run: `npx astro build`
Expected: exit 0. Schema-Verstöße (fehlendes Frontmatter-Feld) würden den Build brechen.

Run (Git Bash): `ls src/content/projects/de src/content/projects/en | sort | uniq -c | grep -v ' 2 '`
Expected: keine Ausgabe (jeder Slug existiert exakt in beiden Sprachen).

- [ ] **Step 7: Commit**

```bash
git add src/content.config.ts src/content public/images
git commit -m "feat: Content Collections mit Projekt- und Venture-Inhalten (de/en)"
```

---

### Task 5: Header, Footer, LangSwitch, ProjectCard

**Files:**
- Create: `src/components/LangSwitch.astro`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/components/ProjectCard.astro`

**Interfaces:**
- Consumes: `Lang`, `useTranslations`, `otherLang`, `languages`, `GITHUB_URL`, `EMAIL_HREF` aus `src/i18n` (Task 2); CSS-Klassen aus Task 3; Projekt-Entry-Shape aus Task 4.
- Produces:
  - `Header.astro` Props `{ lang: Lang }`
  - `Footer.astro` Props `{ lang: Lang; path: string }` (`path` = Pfad ohne Sprachpräfix, wie Base.astro)
  - `LangSwitch.astro` Props `{ lang: Lang; path: string }`
  - `ProjectCard.astro` Props `{ lang: Lang; project: CollectionEntry<'projects'> }`

- [ ] **Step 1: LangSwitch.astro anlegen**

```astro
---
import { languages, otherLang, type Lang } from '../i18n';

interface Props {
  lang: Lang;
  path: string;
}

const { lang, path } = Astro.props;
const target = otherLang(lang);
---

<a href={`/${target}${path}`} hreflang={target} lang={target} rel="alternate">
  {languages[target]}
</a>
```

- [ ] **Step 2: Header.astro anlegen**

```astro
---
import { useTranslations, type Lang } from '../i18n';

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
const items = [
  { href: `/${lang}/`, label: t('nav.home') },
  { href: `/${lang}/projects/`, label: t('nav.projects') },
  { href: `/${lang}/startup/`, label: t('nav.startup') },
  { href: `/${lang}/about/`, label: t('nav.about') },
];
const current = Astro.url.pathname;
---

<header class="container site-header">
  <a class="brand" href={`/${lang}/`}>
    <img src="/favicon.svg" alt="" width="28" height="28" />
    <span>Clemens Jele</span>
  </a>
  <nav aria-label={lang === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
    {items.map((item) => (
      <a href={item.href} aria-current={current === item.href ? 'page' : undefined}>
        {item.label}
      </a>
    ))}
  </nav>
</header>

<style>
  .site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    padding-block: 1.1rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--text);
    font-weight: 600;
  }
  .brand:hover { text-decoration: none; }
  nav { display: flex; gap: 1.1rem; flex-wrap: wrap; }
  nav a { color: var(--muted); }
  nav a:hover { color: var(--text); text-decoration: none; }
  nav a[aria-current='page'] { color: var(--accent); }
</style>
```

- [ ] **Step 3: Footer.astro anlegen**

```astro
---
import LangSwitch from './LangSwitch.astro';
import { useTranslations, EMAIL_HREF, GITHUB_URL, type Lang } from '../i18n';

interface Props {
  lang: Lang;
  path: string;
}

const { lang, path } = Astro.props;
const t = useTranslations(lang);
---

<footer>
  <div class="container inner">
    <div class="links">
      <a href={EMAIL_HREF}>{t('footer.email')}</a>
      <a href={GITHUB_URL} rel="me noopener">{t('footer.github')}</a>
    </div>
    <LangSwitch lang={lang} path={path} />
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--border);
    margin-top: 4rem;
    color: var(--muted);
  }
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding-block: 1.5rem;
  }
  .links { display: flex; gap: 1.1rem; }
</style>
```

- [ ] **Step 4: ProjectCard.astro anlegen**

```astro
---
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

interface Props {
  lang: Lang;
  project: CollectionEntry<'projects'>;
}

const { lang, project } = Astro.props;
const slug = project.id.split('/')[1];
---

<a class="card project-card" href={`/${lang}/projects/${slug}/`}>
  <h3>{project.data.title}</h3>
  <p>{project.data.summary}</p>
  <div class="tags">
    {project.data.stack.map((s) => <span class="tag">{s}</span>)}
  </div>
</a>

<style>
  .project-card { display: block; color: var(--text); }
  .project-card:hover { text-decoration: none; }
  .project-card h3 { margin: 0 0 0.4rem; color: var(--accent); }
  .project-card p { margin: 0 0 0.9rem; color: var(--muted); }
  .tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
</style>
```

- [ ] **Step 5: Build + Typen verifizieren**

Run: `npx astro build && npx astro check`
Expected: beide exit 0.

- [ ] **Step 6: Commit**

```bash
git add src/components
git commit -m "feat: Header, Footer, Sprachumschalter und ProjectCard"
```

---

### Task 6: Home-Seite

**Files:**
- Create: `src/pages/[lang]/index.astro`

**Interfaces:**
- Consumes: `Base.astro` (Task 3), `Header`/`Footer`/`ProjectCard` (Task 5), `useTranslations`/`langStaticPaths`/`GITHUB_URL`/`EMAIL_HREF` (Task 2), `skills` (Task 2), Collections (Task 4).

- [ ] **Step 1: src/pages/[lang]/index.astro anlegen**

```astro
---
import { getCollection } from 'astro:content';
import Base from '../../layouts/Base.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import ProjectCard from '../../components/ProjectCard.astro';
import { useTranslations, langStaticPaths, GITHUB_URL, EMAIL_HREF, type Lang } from '../../i18n';
import { skills } from '../../data/skills';

export const getStaticPaths = () => langStaticPaths;

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);

const featured = (
  await getCollection('projects', (p) => p.id.startsWith(`${lang}/`) && p.data.featured)
).sort((a, b) => a.data.order - b.data.order);
---

<Base lang={lang} title={t('site.title')} description={t('site.description')} path="/">
  <Header lang={lang} />
  <main class="container">
    <section class="hero">
      <img src="/favicon.svg" alt="" width="88" height="88" />
      <!-- REVIEW: Foto einsetzen, sobald geliefert (ersetzt das Logo). -->
      <h1>Clemens Jele</h1>
      <p class="tagline">{t('hero.tagline')}</p>
      <div class="cta">
        <a class="btn btn-primary" href={GITHUB_URL} rel="me noopener">{t('hero.ctaGithub')}</a>
        <a class="btn" href={EMAIL_HREF}>{t('hero.ctaEmail')}</a>
      </div>
    </section>

    <h2 class="section-title">{t('home.featured')}</h2>
    <div class="grid">
      {featured.map((p) => <ProjectCard lang={lang} project={p} />)}
    </div>
    <p><a href={`/${lang}/projects/`}>{t('home.allProjects')}</a></p>

    <h2 class="section-title">{t('home.startupTitle')}</h2>
    <div class="card">
      <p>{t('home.startupTeaser')}</p>
      <a class="btn" href={`/${lang}/startup/`}>{t('home.startupCta')}</a>
    </div>

    <h2 class="section-title">{t('home.skills')}</h2>
    <div class="skills">
      {skills.map((s) => <span class="tag">{s}</span>)}
    </div>
  </main>
  <Footer lang={lang} path="/" />
</Base>

<style>
  .hero { text-align: center; padding-block: 3.5rem 1rem; }
  .hero h1 { font-size: clamp(2rem, 6vw, 3rem); margin: 1rem 0 0.5rem; }
  .tagline { color: var(--muted); max-width: 38rem; margin-inline: auto; }
  .cta { display: flex; gap: 0.8rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap; }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 1rem;
  }
  .skills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
</style>
```

- [ ] **Step 2: Build + Assertions**

Run: `npx astro build`
Expected: exit 0, `dist/de/index.html` und `dist/en/index.html` existieren.

Run (Git Bash):
```bash
grep -l "Ausgewählte Projekte" dist/de/index.html && grep -l "Featured projects" dist/en/index.html && grep -o 'hreflang' dist/de/index.html | wc -l
```
Expected: beide Dateien matchen; hreflang-Count = 4 (3 Link-Tags im Head + 1 Sprachumschalter im Footer). Hinweis: Astro komprimiert HTML auf wenige Zeilen, darum `grep -o | wc -l` statt `grep -c`.

- [ ] **Step 3: Commit**

```bash
git add "src/pages/[lang]/index.astro"
git commit -m "feat: Home mit Hero, Featured Projects, Startup-Teaser und Skills"
```

---

### Task 7: Projekt-Übersicht & Detailseiten

**Files:**
- Create: `src/pages/[lang]/projects/index.astro`, `src/pages/[lang]/projects/[slug].astro`

**Interfaces:**
- Consumes: wie Task 6; zusätzlich `render` aus `astro:content` für die Detailseite.

- [ ] **Step 1: Übersicht anlegen** (`src/pages/[lang]/projects/index.astro`)

```astro
---
import { getCollection } from 'astro:content';
import Base from '../../../layouts/Base.astro';
import Header from '../../../components/Header.astro';
import Footer from '../../../components/Footer.astro';
import ProjectCard from '../../../components/ProjectCard.astro';
import { useTranslations, langStaticPaths, type Lang } from '../../../i18n';

export const getStaticPaths = () => langStaticPaths;

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);

const projects = (await getCollection('projects', (p) => p.id.startsWith(`${lang}/`))).sort(
  (a, b) => a.data.order - b.data.order
);
---

<Base
  lang={lang}
  title={`${t('projects.title')} — Clemens Jele`}
  description={t('projects.description')}
  path="/projects/"
>
  <Header lang={lang} />
  <main class="container">
    <h1>{t('projects.title')}</h1>
    <div class="grid">
      {projects.map((p) => <ProjectCard lang={lang} project={p} />)}
    </div>
  </main>
  <Footer lang={lang} path="/projects/" />
</Base>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 1rem;
  }
</style>
```

- [ ] **Step 2: Detailseite anlegen** (`src/pages/[lang]/projects/[slug].astro`)

```astro
---
import { getCollection, render } from 'astro:content';
import Base from '../../../layouts/Base.astro';
import Header from '../../../components/Header.astro';
import Footer from '../../../components/Footer.astro';
import { useTranslations, type Lang } from '../../../i18n';

export async function getStaticPaths() {
  const entries = await getCollection('projects');
  return entries.map((entry) => {
    const [lang, slug] = entry.id.split('/');
    return { params: { lang, slug }, props: { entry } };
  });
}

const { entry } = Astro.props;
const lang = Astro.params.lang as Lang;
const slug = Astro.params.slug as string;
const t = useTranslations(lang);
const { Content } = await render(entry);
---

<Base
  lang={lang}
  title={`${entry.data.title} — Clemens Jele`}
  description={entry.data.summary}
  path={`/projects/${slug}/`}
  image={entry.data.image}
>
  <Header lang={lang} />
  <main class="container">
    <p><a href={`/${lang}/projects/`}>← {t('projects.backToOverview')}</a></p>
    <h1>{entry.data.title}</h1>
    <p class="summary">{entry.data.summary}</p>
    <img class="shot" src={entry.data.image} alt={`Screenshot: ${entry.data.title}`} width="1200" height="675" />
    <div class="meta">
      <h2>{t('projects.stack')}</h2>
      <div class="tags">{entry.data.stack.map((s) => <span class="tag">{s}</span>)}</div>
      <div class="links">
        {entry.data.repo && <a class="btn" href={entry.data.repo} rel="noopener">{t('projects.repo')}</a>}
        {entry.data.live && <a class="btn btn-primary" href={entry.data.live} rel="noopener">{t('projects.live')}</a>}
      </div>
    </div>
    <article class="prose">
      <Content />
    </article>
  </main>
  <Footer lang={lang} path={`/projects/${slug}/`} />
</Base>

<style>
  .summary { color: var(--muted); max-width: 44rem; }
  .shot {
    width: 100%;
    height: auto;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    margin-block: 1rem;
  }
  .meta h2 { font-size: 1rem; color: var(--muted); margin-bottom: 0.5rem; }
  .tags { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem; }
  .links { display: flex; gap: 0.8rem; flex-wrap: wrap; }
  .prose { max-width: 44rem; margin-top: 2rem; }
  .prose :global(p) { color: var(--text); }
</style>
```

- [ ] **Step 3: Build + Assertions**

Run: `npx astro build`
Expected: exit 0.

Run (Git Bash):
```bash
for l in de en; do for s in wincleaner kina-search panini-tracker techcompare; do
  test -f "dist/$l/projects/$s/index.html" || echo "FEHLT: $l/$s"
done; done
```
Expected: keine Ausgabe.

- [ ] **Step 4: Commit**

```bash
git add "src/pages/[lang]/projects"
git commit -m "feat: Projekt-Übersicht und Detailseiten"
```

---

### Task 8: Startup-Seite

**Files:**
- Create: `src/pages/[lang]/startup.astro`

**Interfaces:**
- Consumes: Collection `ventures` (Task 4), sonst wie Task 6.

- [ ] **Step 1: src/pages/[lang]/startup.astro anlegen**

```astro
---
import { getCollection, render } from 'astro:content';
import Base from '../../layouts/Base.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { useTranslations, langStaticPaths, type Lang } from '../../i18n';

export const getStaticPaths = () => langStaticPaths;

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);

const entries = (await getCollection('ventures', (v) => v.id.startsWith(`${lang}/`))).sort(
  (a, b) => a.data.order - b.data.order
);
const ventures = await Promise.all(
  entries.map(async (entry) => ({ entry, Content: (await render(entry)).Content }))
);
---

<Base lang={lang} title={t('startup.title')} description={t('startup.description')} path="/startup/">
  <Header lang={lang} />
  <main class="container">
    <h1>{t('startup.title')}</h1>
    <p class="intro">{t('home.startupTeaser')}</p>
    {ventures.map(({ entry, Content }) => (
      <section class="card venture">
        <h2>{entry.data.title}</h2>
        <p class="summary">{entry.data.summary}</p>
        <dl>
          <dt>{t('startup.role')}</dt>
          <dd>{entry.data.role}</dd>
          <dt>{t('startup.status')}</dt>
          <dd>{entry.data.status}</dd>
        </dl>
        {entry.data.stack.length > 0 && (
          <div class="tags">{entry.data.stack.map((s) => <span class="tag">{s}</span>)}</div>
        )}
        <div class="body"><Content /></div>
      </section>
    ))}
  </main>
  <Footer lang={lang} path="/startup/" />
</Base>

<style>
  .intro { color: var(--muted); max-width: 44rem; }
  .venture { margin-block: 1.25rem; }
  .venture h2 { margin-top: 0; color: var(--accent); }
  .summary { color: var(--muted); }
  dl { display: grid; grid-template-columns: max-content 1fr; gap: 0.25rem 1rem; margin-block: 0.75rem; }
  dt { color: var(--muted); }
  dd { margin: 0; }
  .tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
  .body { max-width: 44rem; }
</style>
```

- [ ] **Step 2: Build + Assertions**

Run: `npx astro build`
Expected: exit 0.

Run (Git Bash): `grep -l "Märchenfuchs" dist/de/startup/index.html && grep -l "Lifemate" dist/en/startup/index.html`
Expected: beide Dateien matchen.

- [ ] **Step 3: Commit**

```bash
git add "src/pages/[lang]/startup.astro"
git commit -m "feat: Startup-Seite mit Ventures aus Content Collection"
```

---

### Task 9: About-Seite

**Files:**
- Create: `src/pages/[lang]/about.astro`

**Interfaces:**
- Consumes: wie Task 6 (kein Collection-Zugriff; Texte inline, da nur eine Seite).

- [ ] **Step 1: src/pages/[lang]/about.astro anlegen**

```astro
---
import Base from '../../layouts/Base.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { useTranslations, langStaticPaths, type Lang } from '../../i18n';

export const getStaticPaths = () => langStaticPaths;

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);

// REVIEW: Fakten von Clemens bestätigen lassen — Jahrgang/Abteilung an der HTL,
// Alter, Interessen. Aktuelle Texte sind Drafts auf Basis des GitHub-Profils.
const paragraphs: Record<Lang, string[]> = {
  de: [
    'Ich bin Clemens Jele, Schüler an der HTL Mössingerstraße in Klagenfurt und Softwareentwickler.',
    'Angefangen hat es mit kleinen Tools für den eigenen Rechner — daraus wurden Desktop-Utilities wie WinCleaner, datenlastige Web-Apps wie kina-search und Automatisierung rund um echte Workflows. Mich interessiert Software, die ein konkretes Problem löst und danach einfach läuft.',
    'Neben der Schule baue ich mit zwei Freunden als JGG Labs an Märchenfuchs und Lifemate.',
  ],
  en: [
    'I am Clemens Jele, a student at HTL Mössingerstraße in Klagenfurt, Austria, and a software developer.',
    'It started with small tools for my own machine — which turned into desktop utilities like WinCleaner, data-heavy web apps like kina-search and automation around real workflows. I care about software that solves a concrete problem and then just keeps running.',
    'Outside of school I am building Märchenfuchs and Lifemate with two friends as JGG Labs.',
  ],
};
---

<Base lang={lang} title={`${t('about.title')} — Clemens Jele`} description={t('about.description')} path="/about/">
  <Header lang={lang} />
  <main class="container">
    <h1>{t('about.title')}</h1>
    <div class="prose">
      {paragraphs[lang].map((p) => <p>{p}</p>)}
    </div>
  </main>
  <Footer lang={lang} path="/about/" />
</Base>

<style>
  .prose { max-width: 44rem; }
</style>
```

- [ ] **Step 2: Build + Assertions**

Run: `npx astro build`
Expected: exit 0.

Run (Git Bash): `grep -l "HTL Mössingerstraße" dist/de/about/index.html dist/en/about/index.html`
Expected: beide Dateien matchen.

- [ ] **Step 3: Commit**

```bash
git add "src/pages/[lang]/about.astro"
git commit -m "feat: About-Seite (Text-Drafts, Fakten-Review offen)"
```

---

### Task 10: Root-Redirect & 404

**Files:**
- Modify: `src/pages/index.astro` (Platzhalter aus Task 1 komplett ersetzen)
- Create: `src/pages/404.astro`

**Interfaces:**
- Consumes: `useTranslations` (Task 2), `global.css` (Task 3).

- [ ] **Step 1: src/pages/index.astro ersetzen**

```astro
---
import '../styles/global.css';
---

<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Clemens Jele</title>
    <meta name="robots" content="noindex" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <script is:inline>
      var first = (navigator.languages && navigator.languages[0]) || navigator.language || 'de';
      var target = first.toLowerCase().indexOf('de') === 0 ? 'de' : 'en';
      location.replace('/' + target + '/');
    </script>
    <noscript><meta http-equiv="refresh" content="0; url=/de/" /></noscript>
  </head>
  <body>
    <p style="padding: 2rem; text-align: center">
      <a href="/de/">Deutsch</a> · <a href="/en/">English</a>
    </p>
  </body>
</html>
```

- [ ] **Step 2: src/pages/404.astro anlegen** (eine Datei, beide Sprachen — Vercel liefert `404.html` für alle Pfade)

```astro
---
import '../styles/global.css';
import { useTranslations } from '../i18n';

const de = useTranslations('de');
const en = useTranslations('en');
---

<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>404 — Clemens Jele</title>
    <meta name="robots" content="noindex" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <main class="container notfound">
      <h1>404</h1>
      <section>
        <h2>{de('notfound.title')}</h2>
        <p>{de('notfound.text')}</p>
        <a class="btn" href="/de/">{de('notfound.back')}</a>
      </section>
      <section lang="en">
        <h2>{en('notfound.title')}</h2>
        <p>{en('notfound.text')}</p>
        <a class="btn" href="/en/">{en('notfound.back')}</a>
      </section>
    </main>
  </body>
</html>

<style>
  .notfound { text-align: center; padding-block: 4rem; }
  .notfound h1 { font-size: 4rem; color: var(--accent); margin-bottom: 0; }
  .notfound section { margin-top: 2.5rem; }
</style>
```

- [ ] **Step 3: Build + Assertions**

Run: `npx astro build`
Expected: exit 0.

Run (Git Bash): `grep -l "location.replace" dist/index.html && grep -l "Page not found" dist/404.html && grep -l "Seite nicht gefunden" dist/404.html`
Expected: alle drei matchen.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro src/pages/404.astro
git commit -m "feat: Sprach-Redirect auf Root und zweisprachige 404-Seite"
```

---

### Task 11: SEO-Finish — OG-Image, robots.txt, Sitemap-Verify

**Files:**
- Create: `scripts/og.mjs`, `public/robots.txt`
- Generiert: `public/og-default.png`

**Interfaces:**
- Consumes: Playwright (Task 1), Design-Tokens (Task 3).
- Produces: `public/og-default.png` (1200×630) — Default-`image` von `Base.astro`.

- [ ] **Step 1: scripts/og.mjs anlegen**

```js
import { chromium } from 'playwright';

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  body {
    margin: 0; width: 1200px; height: 630px;
    background: #16191d; color: #e6e9ec;
    font-family: 'Segoe UI', system-ui, sans-serif;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 90px; box-sizing: border-box;
  }
  .mark {
    font-family: Consolas, monospace; font-size: 44px; font-weight: 700;
    color: #3fb950; border: 3px solid #3fb950; border-radius: 18px;
    width: 84px; height: 84px; display: flex; align-items: center;
    justify-content: center; margin-bottom: 40px;
  }
  h1 { font-size: 72px; margin: 0 0 16px; letter-spacing: -2px; }
  p { font-size: 32px; margin: 0; color: #9aa3ad; }
</style></head>
<body>
  <div class="mark">CJ</div>
  <h1>Clemens Jele</h1>
  <p>Desktop-Utilities · Web-Apps · Automatisierung</p>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.screenshot({ path: 'public/og-default.png' });
await browser.close();
console.log('public/og-default.png geschrieben');
```

- [ ] **Step 2: OG-Image generieren**

Run: `npm run og`
Expected: `public/og-default.png geschrieben`; Datei existiert, ~1200×630.

- [ ] **Step 3: public/robots.txt anlegen**

```
User-agent: *
Allow: /

Sitemap: https://portfolio-clemensjl.vercel.app/sitemap-index.xml
```

<!-- REVIEW: Sitemap-URL zusammen mit `site` in astro.config.mjs aktualisieren (Vercel-URL, später jele.at). -->

- [ ] **Step 4: Build + Sitemap-Assertions**

Run: `npx astro build`
Expected: exit 0, `dist/sitemap-index.xml` existiert.

Run (Git Bash): `grep -c "<url>" dist/sitemap-0.xml`
Expected: 16 (8 Routen × 2 Sprachen: home, projects, 4 Detailseiten, startup, about — Root-Redirect und 404 nicht enthalten).

Run (Git Bash): `grep -l 'og-default.png' dist/de/index.html && grep -l 'wincleaner.svg' dist/de/projects/wincleaner/index.html`
Expected: beide matchen (Default-OG auf Home, Projekt-Bild als OG auf Detailseite).

- [ ] **Step 5: Commit**

```bash
git add scripts/og.mjs public/robots.txt public/og-default.png
git commit -m "feat: OG-Default-Image, robots.txt und Sitemap-Verifikation"
```

---

### Task 12: Playwright-Screenshots aller Seiten

**Files:**
- Create: `scripts/screenshots.mjs`
- Generiert: `screenshots/*.png` (gitignored)

**Interfaces:**
- Consumes: gebautes `dist/` (alle vorherigen Tasks), Playwright.

- [ ] **Step 1: scripts/screenshots.mjs anlegen**

```js
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const PORT = 4321;
const BASE = `http://localhost:${PORT}`;
const routes = [
  '/',
  '/404.html',
  '/de/', '/en/',
  '/de/projects/', '/en/projects/',
  '/de/projects/wincleaner/', '/en/projects/wincleaner/',
  '/de/projects/kina-search/', '/en/projects/kina-search/',
  '/de/projects/panini-tracker/', '/en/projects/panini-tracker/',
  '/de/projects/techcompare/', '/en/projects/techcompare/',
  '/de/startup/', '/en/startup/',
  '/de/about/', '/en/about/',
];
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  shell: true,
  stdio: 'ignore',
});

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(BASE + '/de/');
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Preview-Server nicht erreichbar');
}

try {
  await waitForServer();
  mkdirSync('screenshots', { recursive: true });
  const browser = await chromium.launch();
  for (const [device, viewport] of Object.entries(viewports)) {
    const page = await browser.newPage({ viewport });
    for (const route of routes) {
      const name = (route === '/' ? 'root' : route.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, ''));
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `screenshots/${device}-${name}.png`, fullPage: true });
      console.log(`OK ${device} ${route}`);
    }
    await page.close();
  }
  await browser.close();
} finally {
  server.kill();
}
```

Hinweis: Route `/` leitet per JS weiter — der Screenshot zeigt danach die Zielseite; das ist der gewollte Redirect-Nachweis.

- [ ] **Step 2: Build + Screenshots ausführen**

Run: `npx astro build && npm run shots`
Expected: 18 Routen × 2 Viewports = 36 `OK`-Zeilen, exit 0, `screenshots/` enthält 36 PNGs.

- [ ] **Step 3: Screenshots sichten**

Alle PNGs mit dem Read-Tool öffnen und prüfen: kein Layout-Bruch auf Mobile, Texte in korrekter Sprache, Fokus auf Design-Konsistenz (Charcoal/Grün). Gefundene Probleme sofort fixen und Step 2 wiederholen.

- [ ] **Step 4: Commit**

```bash
git add scripts/screenshots.mjs
git commit -m "feat: Playwright-Screenshot-Script für alle Seiten (de/en, Desktop/Mobile)"
```

---

### Task 13: GitHub-Push, Vercel-Deploy, Live-Check

**Files:**
- Modify: `astro.config.mjs` (`site` auf echte Vercel-URL), `public/robots.txt` (Sitemap-URL)

**Interfaces:**
- Consumes: alles Vorherige; `gh` CLI ist authentifiziert (verifiziert am 2026-07-19).

- [ ] **Step 1: REVIEW-Marker-Gate**

Run (Git Bash): `grep -rn "REVIEW" src public astro.config.mjs --include="*" | grep -v node_modules`
Expected für Prod-Freigabe: nur noch Marker, die Clemens explizit als „später" freigegeben hat (Foto, Variante-D-Monogramm, Live-URLs). E-Mail-Adresse und About-Fakten MÜSSEN vor Deploy geklärt sein — sonst hier stoppen und die offenen Inputs bei Clemens einfordern (Blocker-Liste am Planende).

- [ ] **Step 2: GitHub-Repo anlegen und pushen**

Run:
```bash
gh repo create clemensjl/portfolio --public --source . --remote origin --push
```
Expected: Repo `https://github.com/clemensjl/portfolio` existiert, `main` gepusht.

- [ ] **Step 3: Vercel-Deploy** — **[DU MUSST MACHEN, falls Vercel-CLI nicht eingeloggt]**

Erst prüfen: `npx vercel whoami` — wenn eingeloggt, weiter mit Deploy.

Falls nicht eingeloggt, Tutorial für Clemens:
1. Terminal: `! npx vercel login` — E-Mail-Methode wählen, Link in der Mail bestätigen.
2. Danach übernehme ich wieder.

Deploy:
```bash
npx vercel link --yes --project portfolio
npx vercel --prod
```
Expected: Deploy-URL wird ausgegeben (z. B. `https://portfolio-<hash>.vercel.app`, Prod-Alias `https://portfolio-<scope>.vercel.app`).

- [ ] **Step 4: site-URL nachziehen**

Die echte Prod-URL in `astro.config.mjs` (`site:`) und `public/robots.txt` (Sitemap-Zeile) eintragen, dann:

```bash
npx astro build
git add astro.config.mjs public/robots.txt
git commit -m "chore: Prod-URL in site-Config und robots.txt"
git push
npx vercel --prod
```
Expected: zweiter Deploy mit korrekten canonical/hreflang/OG-URLs.

- [ ] **Step 5: Live-Check**

Mit Playwright (oder WebFetch) gegen die Prod-URL:
- `/` leitet auf `/de/` oder `/en/` weiter.
- `/de/`, `/en/`, `/de/projects/wincleaner/`, `/en/about/` liefern HTTP 200 und korrekten Inhalt.
- `/sitemap-index.xml` und `/robots.txt` liefern 200.
- Nicht-existenter Pfad liefert die zweisprachige 404.

Zusätzlich Lighthouse gegen die Prod-URL (chrome-devtools MCP `lighthouse_audit` auf `/de/`): Ziel Performance/A11y/SEO ≥ 95. Bei Verfehlung: größte Posten fixen, erneut deployen.

- [ ] **Step 6: Abschluss-Commit (falls Fixes anfielen) und Ergebnis melden**

Prod-URL, Lighthouse-Werte und offene REVIEW-Punkte an Clemens melden.

**Nach Domainkauf jele.at (separater Mini-Task, Tutorial dann):** Domain in Vercel-Projekt hinzufügen (`npx vercel domains add jele.at` oder Dashboard), DNS beim Registrar auf Vercel zeigen, danach `site: 'https://jele.at'` setzen, neu deployen.

---

## Offene Inputs (Blocker bei Clemens)

1. **E-Mail-Adresse** für Footer/CTA — bis dahin `mailto:#` (`EMAIL_HREF` in `src/i18n/index.ts`). Vor Prod-Deploy Pflicht.
2. **About-Fakten**: Jahrgang/Abteilung an der HTL, Alter, Interessen — Drafts in `src/pages/[lang]/about.astro` reviewen. Vor Prod-Deploy Pflicht.
3. **Foto** für Hero — bis dahin CJ-Logo. Kann nach Launch nachgereicht werden.
4. **CJ-Monogramm Variante D** — Original-Asset liefern (lokal nicht auffindbar); Draft-SVG ist Platzhalter. Kann nach Launch nachgereicht werden.
5. **Lifemate**: Beschreibung, Rolle, Status, Stack — aktueller Text ist Minimal-Platzhalter.
6. **Live-URLs** für kina-search, panini-tracker, TechCompare — `live:`-Frontmatter nachtragen.
7. **Rolle/Status Märchenfuchs** bestätigen ("Mitgründer, Entwicklung" / "In Entwicklung").
