---
title: Lifemate
summary: "An AI-assisted companion for everyday life: calendar, fitness, nutrition, finances and learning in one app."
role: Founder, development
status: In development, the backend is moving to Vercel
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
  - title: "Everyday life on one dashboard"
    text: "Daily overview, goals, fitness, fridge and habits side by side, with rank, level and XP on top."
  - title: "The week in Smart Calendar"
    text: "Week and day views, plus an energy timeline, conflict warnings for overlapping events and timeboxing for the day."
  - title: "Calories and macros"
    text: "A ring shows what is left of the daily target, with protein, carbs and fat below. Meals are added by search, barcode or photo."
  - title: "Money at a glance"
    text: "Income, spending and balance at a glance. Entries go in by voice command or receipt scan, and an AI finance advisor looks for savings."
---

Lifemate bundles the areas otherwise scattered across five apps (calendar, fitness and nutrition tracking, finances and study notes) in one interface, with an AI layer on top. Instead of only collecting data, Lifemate helps with planning: training and nutrition plans are generated and adjusted to your own goals.

The core by now is the daily-routine engine: a scheduler lays out the day, streaks keep habits going, and a persistent memory means the app knows across sessions what you are currently working on. As a PWA it works offline too; since the last redesign the interface follows a monochrome token system instead of assembled one-off colors.

Technically Lifemate is a monorepo with two frontends (a web app for desktop and mobile, a touch variant for tablets and smart displays) on a shared codebase: Next.js and React on the front end, Express and Firestore on the back end, plus end-to-end tests with Playwright.

Lifemate is my own project at Racep Labs, from architecture to deployment.

The backend is currently moving from Google Cloud to Vercel. Until that is done you can look around the interface, but entries are not saved yet.
