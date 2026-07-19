# Portfolio jele.at — Design-Spec

Datum: 2026-07-19 · Status: vom Nutzer freigegeben (Chat)

## Ziel

Persönliches Portfolio für Clemens Jele. Zielgruppe gemischt: Recruiter/Praktikum plus Startup-Auftritt (JGG Labs). Zweisprachig DE/EN. Domain jele.at wird demnächst gekauft; bis dahin Vercel-URL.

## Architektur

- **Astro 5**, rein statische Ausgabe (`output: 'static'`), Content Collections.
- **i18n**: Astro-eingebautes i18n, Locales `de` + `en`, beide mit URL-Präfix (`/de/...`, `/en/...`). Root `/` leitet per Browser-Sprache weiter (JS-Redirect, Fallback-Link auf `/de/`).
- **Repo**: `Documents\Projekte\portfolio` → GitHub `clemensjl/portfolio` (public) → Deploy Vercel.
- **Kein Backend, keine DB, kein Framework-JS** außer minimalem Inline-Script für Redirect/Sprachumschalter.

## Seiten (je DE + EN)

| Route | Inhalt |
|---|---|
| `/` (Root) | Sprach-Redirect |
| `/{lang}/` Home | Hero (Name, Tagline, Foto, CTA GitHub + E-Mail), 3 Featured Projects, Startup-Teaser, Skills-Strip |
| `/{lang}/projects/` | Projekt-Übersicht (Cards) |
| `/{lang}/projects/<slug>/` | Detailseite: Screenshot, Story, Stack, Repo-/Live-Links. Projekte: WinCleaner, kina-search, panini-tracker, TechCompare |
| `/{lang}/startup/` | JGG Labs: Märchenfuchs + Lifemate — was, Rolle, Status |
| `/{lang}/about/` | HTL Mössingerstraße + Jahrgang, Alter, kurzer Werdegang, Interessen |
| 404 | beide Sprachen |

Footer überall: E-Mail, GitHub-Link, Sprachumschalter (verlinkt auf Gegenstück-Seite).

## Content-Modell

- Content Collection `projects`: ein Markdown-File pro Projekt pro Sprache. Frontmatter: `title`, `summary`, `stack[]`, `repo`, `live`, `image`, `order`, `featured`.
- Content Collection `ventures`: analog für Märchenfuchs/Lifemate (`role`, `status` statt `repo`/`live` wo nötig).
- UI-Strings (Nav, Footer, Buttons) in i18n-Dictionary (`src/i18n/de.ts`, `en.ts`).
- Neues Projekt ergänzen = zwei Markdown-Files, sonst nichts.

## Design-Richtung

- Ausarbeitung bei Implementierung über frontend-design Skill.
- Ausgangspunkt: Konsistenz zum GitHub-Auftritt — Charcoal-Grundton, Grün-Akzent, CJ-Monogramm (Variante D) als Favicon und OG-Logo.
- Keine Emojis in Texten/UI (Icons ok).

## Qualität

- hreflang-Paare auf allen Seiten, Sitemap, OG-Image pro Seite.
- Responsive bis Mobile, sichtbarer Keyboard-Fokus, `prefers-reduced-motion` respektiert.
- Ziel Lighthouse 95+ (Performance/A11y/SEO).

## Verifizieren vor „fertig"

`astro build` fehlerfrei + Playwright-Screenshots aller Seiten in beiden Sprachen + Live-Check nach Vercel-Deploy.

## Deploy

- Vercel-Projekt `portfolio`, Prod über `vercel --prod` oder Git-Integration.
- jele.at nach Kauf: Domain in Vercel hinzufügen, DNS beim Registrar (Tutorial dann).

## Offene Inputs (Platzhalter bis geliefert)

- E-Mail-Adresse für Footer/CTA — Platzhalter `mailto:#`.
- Foto — bis dahin CJ-Logo im Hero.
- About-Texte werden gedraftet, Clemens reviewt Fakten (Alter, Jahrgang, Interessen).

## Out of Scope

Blog, CMS, Kontaktformular, Analytics, Dark/Light-Toggle (eine feste Theme-Stimmung), Mehrsprachigkeit über DE/EN hinaus.
