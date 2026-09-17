---
title: Kern Search
summary: "Durchsuchbare Produktdatenbank: 79 Community-Spreadsheets zu über 40.000 deduplizierten Artikeln aggregiert, dazu eine Web-App mit Accounts, Sammlungen und Endpreisrechner."
stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"]
repo: https://github.com/clemensjl/kern-search
live: https://kern-search.vercel.app
image: /images/projects/kern-search.jpg
order: 2
featured: true
flagship: 4
variant: stage
preview: kern-search
facts:
  - { value: "40.139", label: "Artikel" }
  - { value: "79", label: "Quellen" }
story:
  - title: "79 Spreadsheets, ein Suchfeld"
    text: "Die Community pflegte ihre Produktdaten in verstreuten Tabellen. Kern Search führt sie zu einem deduplizierten Verzeichnis zusammen."
  - title: "Tippen, und die Liste schrumpft"
    text: "Die Volltextsuche filtert den gesamten Bestand live. Die Trefferzahl fällt mit jedem Buchstaben."
  - title: "Filtern und sortieren"
    text: "Kategorien, geprüfte Artikel und die Sortierung nach Preis verdichten die Liste auf das, was man wirklich sucht."
  - title: "Was kostet es am Ende wirklich?"
    text: "Der Endpreisrechner schätzt Versand, Gebühren und Einfuhrumsatzsteuer und zeigt, woher die Preisspanne kommt."
---

Die Community pflegte ihre Produktdaten in 79 verstreuten Spreadsheets, unmöglich zu durchsuchen und voller Duplikate. Kern Search sammelt alles ein und macht daraus ein durchsuchbares Verzeichnis mit über 40.000 deduplizierten Artikeln, gefiltert nach Kategorie, Marke und Preis.

Aus dem statischen Aggregator ist inzwischen eine vollständige Web-App geworden: Next.js mit App Router, Postgres als Datenbank, Login über Auth.js. Nutzer legen eigene Sammlungen an, reichen fehlende Produkte über einen Submit-Flow ein, ein Admin-Panel moderiert das Ganze. Dazu Endpreisrechner, Dark- und Light-Mode, Deutsch und Englisch sowie ein PWA-Modus, der offline funktioniert.

Im Hintergrund laufen die Crawler weiter und ein automatisierter Linkcheck räumt tote Links täglich aus dem Bestand. Das Projekt hieß bis August 2026 kina-search.
