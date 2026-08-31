---
title: Lifemate
summary: KI-gestützter Alltags-Companion — Kalender, Fitness, Ernährung, Finanzen und Lernen in einer App.
role: Founder, Entwicklung
status: In Entwicklung — vor dem Livegang
stack: ["Next.js", "React", "TypeScript", "Firebase", "Express"]
live: https://life-mate.tech
order: 2
---

Lifemate bündelt die Bereiche, die sonst über fünf Apps verstreut sind: Kalender, Fitness- und Ernährungstracking, Finanzen und Lernnotizen — in einer Oberfläche, mit einer KI-Schicht darüber. Statt Daten nur zu sammeln, hilft Lifemate beim Planen: Trainings- und Ernährungspläne werden generiert und an die eigenen Ziele angepasst.

Der Kern ist inzwischen der Alltags-Motor: Ein Scheduler plant den Tag, Streaks halten Gewohnheiten am Laufen, und ein persistentes Gedächtnis sorgt dafür, dass die App über Sitzungen hinweg weiß, woran man gerade arbeitet. Als PWA funktioniert sie auch offline; die Oberfläche folgt seit dem letzten Redesign einem monochromen Token-System statt zusammengesuchter Farben.

Technisch ist Lifemate ein Monorepo mit zwei Frontends — eine Web-App für Desktop und Mobile, eine Touch-Variante für Tablets und Smart Displays — auf gemeinsamer Codebasis: Next.js und React im Frontend, Express und Firestore im Backend, dazu End-to-End-Tests mit Playwright.

Lifemate ist mein eigenes Projekt bei Racep Labs — von der Architektur bis zum Deployment.
