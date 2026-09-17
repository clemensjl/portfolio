# jele.at

Persönliche Website von Clemens Jele.

Seit dem Redesign 2026 ist [jele.at](https://jele.at) selbst das Portfolio (Repo-Root, Astro 5, statisch, de/en). `portfolio.jele.at` und `www.jele.at` leiten per `vercel.json` mit 301 dorthin um, Pfade bleiben erhalten.

## Portfolio

- Content Collections (`src/content/projects`, `src/content/ventures`): neues Projekt = zwei Markdown-Dateien (de/en), sonst nichts
- Die Startseite ist das Portfolio: Einträge mit `flagship`, `preview`, `facts` und `story` (genau vier Schritte) bekommen eine eigene Scroll-Sektion mit gepinnter Vorschau (`src/components/Showcase.astro`)
- Vorschauen sind handgebaute Mini-UIs der echten Produkte in `src/components/previews/`; der Vertrag (cqw-Einheiten, `data-step` 0 bis 3, `.is-live`, Reduced Motion) steht in `src/components/previews/README.md`, neue Komponenten werden in `src/components/PreviewSlot.astro` registriert
- Labor-Seiten unter `/lab/<name>/` zeigen jede Vorschau in drei Breiten mit Schritt-Schaltern (noindex, nicht in der Sitemap)
- Bewegung ohne Bibliothek: `src/scripts/motion.ts` (IntersectionObserver, kein scroll-Listener) plus CSS scroll-driven animations hinter `@supports`
- Wichtig: um eine Vorschau (`.pv`, Size-Container) nie ein Grid oder Flex legen, das sie vermisst. Das hat das erste Layout von 1 s auf 11 s getrieben (siehe Kommentar an `.pin-inner`)
- i18n über `[lang]`-Routen mit gemeinsamem Dictionary (`src/i18n`)
- SEO: hreflang-Paare, Sitemap, OG-Image pro Seite

## Befehle

```sh
npm run dev        # Dev-Server
npm run build      # Statischer Build nach dist/
npm run shots      # Playwright-Screenshots aller Seiten (Desktop + Mobile)
npm run og         # OG-Default-Image neu generieren
npm run covers     # Cover-Karten für Projekte ohne Vorschau (OpenPass, Agent Skills)
npm run previews   # Projekt- und OG-Bilder aus den Vorschauen (braucht Dev-Server auf Port 4400)
```

Deploy: Vercel, Projekt `portfolio` mit den Domains `jele.at`, `www.jele.at` und `portfolio.jele.at`.

## Offen

- **Rollenangabe bei OpenPass** (`role: Eigenentwicklung`) ist ungeprüft gesetzt — das lokale Repo hat noch keinen Commit, also gibt es keine Autorenschaft zum Belegen. Bestätigen oder korrigieren.
