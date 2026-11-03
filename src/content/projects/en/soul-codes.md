---
title: Soul Codes App
summary: "A web app for Elite Leaders: name, birth date, birth time and birthplace become a reading across eight systems, from Human Design to astrocartography, in five languages."
stack: ["JavaScript", "Node.js", "SQLite", "Docker"]
role: Client project, built in a team
live: https://soulcodes.app
image: /images/projects/soul-codes.jpg
imageAlt: "Soul Codes App: a reading for a demo person with sections for Human Design, numerology, astrology, astrocartography, Chinese metaphysics, Kabbalah, Maya and the Celtic tree horoscope."
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
    text: "Name, birth date, birth time and birthplace are all it needs. From these the app calculates Human Design, numerology, astrology, astrocartography, Chinese metaphysics, Kabbalah, Maya and the Celtic tree horoscope."
  - title: "The birth chart, calculated in the browser"
    text: "Planet positions are calculated right on the device, so no birth data gets sent anywhere. Tap a symbol or a house to see what it is about."
  - title: "Your own lines on the world map"
    text: "Astrocartography draws the MC, IC, AC and DC lines of every planet on the map, marks the birthplace and shows where several lines cross."
  - title: "One reading, five languages"
    text: "Switch between German, English, Spanish, Portuguese and French at any time, including every interpretation text."
---

The Soul Codes App is the product of Elite Leaders: a consulting app that turns a few birth details into a detailed report across eight systems. It has been live at soulcodes.app since its launch on 15 September 2026, and access is sold in packages through Digistore24.

The reading itself is one very large web file that does all the calculations in the browser. Planet positions come from astronomy-engine, and the interpretation texts are stored as text banks inside the app. In front of it sits a lean Node.js server with no npm dependencies, using SQLite for accounts and packages and running in Docker behind Caddy.

I work on the app and the server as part of the team. My work includes the Spanish, Portuguese and French versions with all interpretation banks, fixes to the astrocartography map, and the search engine setup for the landing page with structured data, a sitemap and IndexNow.

In late October I redesigned the app interface over five rounds: the input form, the report, the language picker and the add-on modules. I also made a chapter-style PDF report with a cover page and a divider page for each system, plus a new app icon.
