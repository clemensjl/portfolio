# jele.at

Persönliche Website von Clemens Jele — zwei Deployments aus einem Repo:

| Site | Pfad | Stack |
|---|---|---|
| [portfolio.jele.at](https://portfolio.jele.at) | Repo-Root | Astro 5, statisch, zweisprachig (de/en) |
| [jele.at](https://jele.at) | `home/` | Statisches HTML, kein Build |

## Portfolio

- Content Collections (`src/content/projects`, `src/content/ventures`) — neues Projekt = zwei Markdown-Dateien (de/en), sonst nichts
- i18n über `[lang]`-Routen mit gemeinsamem Dictionary (`src/i18n`)
- SEO: hreflang-Paare, Sitemap, OG-Image pro Seite

## Befehle

```sh
npm run dev        # Dev-Server
npm run build      # Statischer Build nach dist/
npm run shots      # Playwright-Screenshots aller Seiten (Desktop + Mobile)
npm run og         # OG-Default-Image neu generieren
```

Deploy: Vercel (Projekte `portfolio` und `jele-home`).
