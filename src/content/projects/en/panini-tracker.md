---
title: Mein Album '26
summary: Collection tracker for the Panini World Cup 2026 album — a single-file web app that rebuilds the real sticker book.
stack: ["JavaScript", "GitHub Pages"]
repo: https://github.com/clemensjl/panini-tracker
live: https://clemensjl.github.io/panini-tracker/
image: /images/projects/panini-tracker.png
order: 9
featured: false
---

Collecting the Panini World Cup 2026 album gets confusing fast: which stickers are missing, which ones are duplicates, what can be traded? Mein Album '26 answers that in a few taps.

The app mirrors the real book — 48 teams across 12 groups, close to 1,000 stickers, with a sticking animation and a foil effect for the shiny ones. You tap the slot in the album directly; a long press marks a duplicate. The trade list can be copied straight into WhatsApp as a ready-made message, and the backup code from the official Panini app can be imported and exported.

Deliberately minimal: a single HTML file with no framework and no build step, with a Python script injecting the sticker data into the template. Hosted on GitHub Pages, and your collection stays local in the browser.
