---
title: Mein Album '26
summary: "A collection tracker for the Panini World Cup 2026 album: a single-file web app that recreates the real sticker book."
stack: ["JavaScript", "GitHub Pages"]
repo: https://github.com/clemensjl/panini-tracker
live: https://clemensjl.github.io/panini-tracker/
image: /images/projects/panini-tracker.png
order: 9
featured: false
---

Collecting the Panini World Cup 2026 album gets confusing fast: which stickers are still missing, which ones you have twice, what you can trade. Mein Album '26 sorts that out in a few taps.

The app mirrors the real book: 48 teams in 12 groups and close to 1,000 stickers, with a sticking animation and a foil effect for the shiny ones. You tap the slot in the album directly, and a long press marks a duplicate. The trade list copies into WhatsApp as a ready-to-send message, and the backup code from the official Panini app can be imported and exported.

It is kept deliberately simple: a single HTML file with no framework and no build step, and a Python script that injects the sticker data into the template. It is hosted on GitHub Pages, and your collection stays stored locally in the browser.
