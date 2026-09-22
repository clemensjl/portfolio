---
title: Soul Codes App
summary: "Web app for Elite Leaders: name, date, time and place of birth turn into a reading across eight systems, from Human Design to astrocartography, in five languages."
stack: ["JavaScript", "Node.js", "SQLite", "Docker"]
role: Client project, team development
live: https://soulcodes.app
image: /images/projects/soul-codes.jpg
imageAlt: "Soul Codes App: reading for a demo person with the sections Human Design, numerology, astrology, astrocartography, Chinese metaphysics, Kabbalah, Maya and Celtic tree horoscope."
order: 2
featured: true
flagship: 4
variant: stage
preview: soul-codes
facts:
  - { value: "8", label: "systems" }
  - { value: "5", label: "languages" }
story:
  - title: "Four inputs, eight systems"
    text: "Name, date, time and place of birth are enough. From them the app calculates Human Design, numerology, astrology, astrocartography, Chinese metaphysics, Kabbalah, Maya and the Celtic tree horoscope."
  - title: "The birth chart, calculated in the browser"
    text: "Planet positions are computed on the device itself, so no birth data leaves it. Tapping a symbol or a house explains what it stands for."
  - title: "Your own lines on the world map"
    text: "Astrocartography draws MC, IC, AC and DC for every planet across the map, marks the place of birth and shows where several lines cross."
  - title: "One reading, five languages"
    text: "German, English, Spanish, Portuguese and French can be switched at any time, including every interpretation text."
---

The Soul Codes App is the product of Elite Leaders: a consulting app that turns a few birth details into an extensive report across eight systems. It has been live on soulcodes.app since its launch on 15 September 2026, with access sold in packages through Digistore24.

The reading itself is a single, very large web file that calculates everything in the browser. Planet positions come from astronomy-engine, the interpretation texts ship as text banks inside the app. In front of it sits a lean Node.js server without any npm dependencies, with SQLite for accounts and packages, running in Docker behind Caddy.

I work on the app and the server as part of the team. My contributions include the Spanish, Portuguese and French versions with all interpretation banks, fixes to the astrocartography map and the search engine setup of the landing page with structured data, sitemap and IndexNow.
