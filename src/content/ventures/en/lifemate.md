---
title: Lifemate
summary: "An AI-assisted companion for everyday life: calendar, fitness, nutrition, finances and learning in one app."
role: Founder, development
status: In development, backend moving to Vercel
stack: ["Next.js", "React", "TypeScript", "Firebase", "Express"]
live: https://life-mate.tech
order: 2
flagship: 5
variant: left
preview: lifemate
facts:
  - { value: "121", label: "commits" }
  - { value: "2", label: "frontends, one codebase" }
story:
  - title: "Your whole day on one dashboard"
    text: "Daily overview, goals, fitness, fridge and habits side by side, with rank, level and XP at the top."
  - title: "Your week in the Smart Calendar"
    text: "Week and day views, plus an energy timeline, warnings for overlapping events and timeboxing for the day."
  - title: "Calories and macros"
    text: "A ring shows how much of your daily target is left, with protein, carbs and fat below it. Add meals by search, barcode or photo."
  - title: "Money at a glance"
    text: "Income, spending and balance in one view. Add entries by voice or by scanning a receipt, and an AI finance advisor looks for ways to save."
---

Lifemate brings together what is usually spread across five apps (calendar, fitness and nutrition tracking, finances and study notes) in one interface, with an AI layer on top. It does more than collect data. It helps you plan: training and meal plans are generated and adjusted to your own goals.

The core is now the daily routine engine. A scheduler plans your day, streaks keep habits going, and a persistent memory means the app remembers across sessions what you are working on. As a PWA it also works offline. Since the last redesign, the interface follows a monochrome token system instead of a patchwork of one-off colors.

Under the hood, Lifemate is a monorepo with two frontends on one shared codebase: a web app for desktop and mobile, and a touch version for tablets and smart displays. Next.js and React run the front end, Express and Firestore the back end, with end-to-end tests in Playwright.

Lifemate is my own project at Racep Labs, from architecture to deployment.

The backend is currently moving from Google Cloud to Vercel. Until that is done, you can look around the interface, but entries are not saved yet.
