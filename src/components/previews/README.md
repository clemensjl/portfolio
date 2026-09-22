# Projekt-Vorschauen aus echten Screenshots

Jede Vorschau besteht aus vier echten Screenshots der laufenden App, einer pro Geschichtsschritt.
Keine nachgebauten Oberflaechen, keine Mockups.

## Dateien

- Bilder: `public/images/shots/<slug>/0.webp` bis `3.webp`
  - Desktop-Apps und Websites: 1600x1000 (16:10), WebP Qualitaet ~80, moeglichst unter 180 KB
  - Handy-Apps: 780x1688 Hochformat (390x844 bei 2x), ohne Geraeterahmen, den zeichnet die Komponente
- Zuordnung: `src/components/PreviewSlot.astro`, Objekt `registry` (Titel, `layout: 'phone'` fuer
  Hochformat, `bg` als Hintergrundfarbe der echten App hinter den Geraeten)
- Im Content: `preview: <slug>` setzt die Vorschau, `story` liefert die vier Texte zu den Bildern

## Verhalten

`Shots.astro` haelt den bisherigen Vertrag: Wurzel `.pv` mit `data-preview` und `data-step="0..3"`.
Die Showcase-Sektion schaltet `data-step` beim Scrollen, Kacheln mit `data-autoplay` schalten selbst
durch. Desktop blendet die Bilder ineinander, Hochformat schiebt den aktiven Screen in die Mitte.

## Inhalt der Bilder

- Nur echte Oberflaeche: Live-Seite, lokal gestartete App oder vorhandene echte Screenshots aus dem Repo
- Nur Demodaten: keine echten Kundendaten, keine Tokens, keine privaten Sessions oder Pfade
- Die vier Bilder erzaehlen dieselbe Geschichte wie die Textschritte: 0 Ausgangslage, 1 und 2 Kernablauf, 3 Ergebnis
