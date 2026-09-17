# Vertrag fuer Projekt-Vorschauen (Preview-Komponenten)

Jede Vorschau ist eine in sich geschlossene Astro-Komponente, die die echte Oberflaeche eines
Produkts als lebendige Mini-UI nachbaut (HTML/CSS/SVG, minimal JS). Kein Screenshot, kein Canvas,
keine externen Requests, keine neuen npm-Pakete.

## Datei und Props

- Pfad: `src/components/previews/<PascalName>.astro`
- Props: `{ lang: 'de' | 'en' }`. Alle sichtbaren Texte zweisprachig ueber ein lokales Objekt
  `const T = { de: {...}, en: {...} }[lang]`. Produkt-UI-Texte duerfen in der Originalsprache der
  echten App bleiben, wenn die App nur eine Sprache hat.

## Wurzelelement

```astro
<div class="pv pv-<name>" data-preview data-step="0" role="img" aria-label={T.aria}>
  ...
</div>
```

- `role="img"` + `aria-label`: ein Satz, der beschreibt, was die Vorschau zeigt. Alles darin ist
  fuer Screenreader damit verborgen, also keine fokussierbaren Elemente (kein button, a, input;
  stattdessen div/span).
- Die globale Klasse `.pv` (kommt aus global.css, NICHT selbst definieren) setzt:
  `container-type: inline-size; aspect-ratio: 16 / 10; position: relative; overflow: hidden;
  border-radius: var(--radius-lg); isolation: isolate;`
  Handy-Apps duerfen im 16:10-Rahmen ein oder zwei Geraete-Rahmen zeigen.
- ALLE Innenmasse in `cqw` (Container-Query-Einheiten: 1cqw = 1 % der Vorschau-Breite), auch
  font-size, padding, gap, border-radius. Die Vorschau muss von 320 px bis 1100 px Breite identisch
  proportioniert aussehen. Mindestschrift so waehlen, dass bei 640 px Breite Kerntexte lesbar sind
  (ca. 1.5cqw aufwaerts); reine Textur-Texte duerfen kleiner sein.
- Farben, Schriften, Radien der ECHTEN App verwenden (aus dem DNA-Bericht), als lokale Custom
  Properties auf der Wurzel (`--pv-bg` usw.). Nicht die Portfolio-Tokens verwenden, ausser fuer
  den aeusseren Rahmen. Schrift: System-Stacks oder die Portfolio-Variablen `var(--font-sans)`,
  `var(--font-mono)`; keine neuen Webfonts laden.

## Zustaende: data-step und .is-live

Die Seite steuert zwei Dinge von aussen, die Komponente reagiert nur per CSS (bevorzugt):

1. `data-step="0|1|2|3"` auf der Wurzel. Die Showcase-Sektion setzt den Wert, waehrend der Leser
   an den zugehoerigen Textschritten vorbeiscrollt. Jede Vorschau definiert GENAU 4 Schritte
   (0 bis 3), die die Geschichte des Produkts erzaehlen: 0 = Ausgangslage, 1 und 2 = Kernablauf,
   3 = Ergebnis. Schrittwechsel per CSS-`transition` auf `transform`/`opacity`/`clip-path`
   (200 bis 500 ms, `var(--ease-out)`), vorwaerts UND rueckwaerts stimmig, denn der Leser scrollt
   auch zurueck. Jeder Schritt muss auch als Standbild sinnvoll sein.
2. Klasse `.is-live` auf der Wurzel, solange die Vorschau im Viewport ist. Endlos-Animationen
   (Cursor-Blinken, Stream-Rauschen, Pulsieren) laufen NUR unter `.pv.is-live ...`, sonst
   `animation-play-state: paused` bzw. gar nicht definiert. Hoechstens 2 bis 3 gleichzeitige
   Dauer-Animationen.

Ohne JS und ohne gesetzte Attribute (`data-step="0"`, kein `.is-live`) muss die Vorschau ein
vollstaendiges, gutes Standbild sein.

Zusaetzlich in der Komponente dokumentieren (Kommentar im Frontmatter): ein Satz pro Schritt,
was er zeigt. Die Seite braucht das fuer die Textschritte.

## Bewegung

- Nur `transform`, `opacity`, `clip-path`, `filter` sparsam. Keine Layout-Eigenschaften animieren.
- Easing: `var(--ease-out)` = cubic-bezier(0.22, 1, 0.36, 1) fuer Eintritte,
  `var(--ease-in-out)` = cubic-bezier(0.65, 0, 0.35, 1) fuer Bewegungen auf der Flaeche.
  Nie `linear` fuer raeumliche Bewegung, nie `ease-in` fuer Eintritte. Nichts von scale(0) aus
  einblenden (Start bei 0.94 bis 0.97 + opacity).
- `@media (prefers-reduced-motion: reduce)`: alle Dauer-Animationen aus, Schrittwechsel ohne
  Bewegung (nur opacity, kurz). Global existiert bereits eine Regel, die Dauern auf 0.01ms setzt;
  die Vorschau muss damit korrekt aussehen (Endzustaende muessen ohne Animation stimmen, also
  Endzustand im Basis-CSS, Animation nur `from`).
- JS nur, wenn CSS nicht reicht (z. B. getippter Text). Dann: `<script>` in der Komponente,
  `document.querySelectorAll('.pv-<name>')`, per MutationObserver auf `class`/`data-step`
  reagieren, Timer stoppen wenn `.is-live` fehlt, `matchMedia('(prefers-reduced-motion: reduce)')`
  respektieren. Kein scroll-Listener, kein requestAnimationFrame-Dauerlauf.

## Inhalt

- Echte Texte, echte Labels, echte Zahlen aus dem DNA-Bericht. Nichts erfinden, keine
  Fantasie-Versionen, keine Personennamen ausser wenn belegt.
- Keine Emojis. Kein Gedankenstrich (weder — noch –) in sichtbarem Text.
- Icons: einfache geometrische Inline-SVGs sind in Ordnung, wenn sie die echte App nachbilden;
  echtes Logo-SVG verwenden, falls im DNA-Bericht vorhanden.

## Test-Seite

Jede Vorschau bekommt eine Labor-Seite `src/pages/lab/<name>.astro` (noindex), die die Komponente
in drei Breiten (1000 px, 640 px, 340 px) zeigt und unter jeder vier Buttons hat, die `data-step`
setzen, plus einen Umschalter fuer `.is-live`. Vorlage: `src/pages/lab/_template.md` (falls
vorhanden) bzw. die Labor-Seite einer bereits existierenden Vorschau kopieren.
Pruefung mit Playwright (im Projekt installiert): Screenshots aller 4 Schritte in 1000 px und
340 px nach `<scratchpad>/shots/<name>-step<N>-<breite>.png` und selbst ansehen (Read-Tool).
