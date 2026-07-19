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

<!-- REVIEW: Platzhalter-SVG durch echten Screenshot ersetzen (PNG, 1200x675). -->
