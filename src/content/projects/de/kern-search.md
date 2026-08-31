---
title: Kern Search
summary: Durchsuchbare Produktdatenbank — 75 Community-Spreadsheets zu über 40.000 deduplizierten Artikeln aggregiert, dazu eine Web-App mit Accounts, Sammlungen und Endpreisrechner.
stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"]
repo: https://github.com/clemensjl/kern-search
live: https://kern-search.vercel.app
image: /images/projects/kern-search.jpg
order: 2
featured: true
---

Die Community pflegte ihre Produktdaten in 75 verstreuten Spreadsheets — unmöglich zu durchsuchen, voller Duplikate. Kern Search sammelt alles ein und macht daraus ein durchsuchbares Verzeichnis mit über 40.000 deduplizierten Artikeln, gefiltert nach Kategorie, Marke und Preis.

Aus dem statischen Aggregator ist inzwischen eine vollständige Web-App geworden: Next.js mit App Router, Postgres als Datenbank, Login über Auth.js. Nutzer legen eigene Sammlungen an, reichen fehlende Produkte über einen Submit-Flow ein, ein Admin-Panel moderiert das Ganze. Dazu Endpreisrechner, Dark- und Light-Mode, Deutsch und Englisch sowie ein PWA-Modus, der offline funktioniert.

Im Hintergrund laufen die Crawler weiter und ein automatisierter Linkcheck räumt tote Links täglich aus dem Bestand. Das Projekt hieß bis August 2026 kina-search.
