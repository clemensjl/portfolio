---
title: Lifemate
summary: "KI-gestützter Alltags-Companion: Kalender, Fitness, Ernährung, Finanzen und Lernen in einer App."
role: Founder, Entwicklung
status: In Entwicklung, das Backend zieht gerade auf Vercel um
stack: ["Next.js", "React", "TypeScript", "Firebase", "Express"]
live: https://life-mate.tech
order: 2
flagship: 5
variant: left
preview: lifemate
facts:
  - { value: "121", label: "Commits" }
  - { value: "2", label: "Frontends, eine Codebasis" }
story:
  - title: "Der ganze Alltag auf einem Dashboard"
    text: "Tagesüberblick, Ziele, Fitness, Kühlschrank und Gewohnheiten liegen nebeneinander, darüber Rang, Level und XP."
  - title: "Die Woche im Smart Kalender"
    text: "Wochen- und Tagesansicht, dazu eine Energie-Timeline, die Konfliktanzeige für doppelte Termine und Timeboxing für den Tag."
  - title: "Kalorien und Makros"
    text: "Ein Ring zeigt, was vom Tagesziel übrig ist, darunter Protein, Kohlenhydrate und Fett. Mahlzeiten kommen per Suche, Barcode oder Foto dazu."
  - title: "Geld im Blick"
    text: "Einnahmen, Ausgaben und Saldo auf einen Blick. Einträge gehen per Sprachbefehl oder Kassenzettel, ein KI-Finanzberater sucht Sparchancen."
---

Lifemate bündelt die Bereiche, die sonst über fünf Apps verstreut sind (Kalender, Fitness- und Ernährungstracking, Finanzen und Lernnotizen), in einer Oberfläche, mit einer KI-Schicht darüber. Statt Daten nur zu sammeln, hilft Lifemate beim Planen: Trainings- und Ernährungspläne werden generiert und an die eigenen Ziele angepasst.

Der Kern ist inzwischen der Alltags-Motor: Ein Scheduler plant den Tag, Streaks halten Gewohnheiten am Laufen, und ein persistentes Gedächtnis sorgt dafür, dass die App über Sitzungen hinweg weiß, woran man gerade arbeitet. Als PWA funktioniert sie auch offline; die Oberfläche folgt seit dem letzten Redesign einem monochromen Token-System statt zusammengesuchter Farben.

Technisch ist Lifemate ein Monorepo mit zwei Frontends (eine Web-App für Desktop und Mobile, eine Touch-Variante für Tablets und Smart Displays) auf gemeinsamer Codebasis: Next.js und React im Frontend, Express und Firestore im Backend, dazu End-to-End-Tests mit Playwright.

Lifemate ist mein eigenes Projekt bei Racep Labs, von der Architektur bis zum Deployment.

Gerade zieht das Backend von Google Cloud auf Vercel um. Bis das abgeschlossen ist, lässt sich die Oberfläche ansehen, Einträge werden aber noch nicht gespeichert.
