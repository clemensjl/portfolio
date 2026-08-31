---
title: Kern Search
summary: Searchable product database — 75 community spreadsheets aggregated into 40,000+ deduplicated items, plus a web app with accounts, collections and a landed-cost calculator.
stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"]
repo: https://github.com/clemensjl/kern-search
live: https://kern-search.vercel.app
image: /images/projects/kern-search.jpg
order: 2
featured: true
---

The community kept its product data in 75 scattered spreadsheets — impossible to search, full of duplicates. Kern Search collects all of it and turns it into a searchable catalog of more than 40,000 deduplicated items, filterable by category, brand and price.

What started as a static aggregator is now a full web app: Next.js with the App Router, Postgres as the database, login via Auth.js. Users build their own collections, submit missing products through a review flow, and an admin panel moderates it. On top of that: a landed-cost calculator, dark and light mode, German and English, and a PWA mode that works offline.

The crawlers keep running in the background, and an automated link check clears dead links out of the catalog every day. The project was called kina-search until August 2026.
