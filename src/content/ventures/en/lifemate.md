---
title: Lifemate
summary: "An AI-assisted companion for everyday life: calendar, fitness, nutrition, finances and learning in one app."
role: Founder, development
status: In development, pre-launch
stack: ["Next.js", "React", "TypeScript", "Firebase", "Express"]
live: https://life-mate.tech
order: 2
flagship: 5
preview: lifemate
facts:
  - { value: "121", label: "commits" }
  - { value: "2", label: "frontends, one codebase" }
story:
  - title: "Your whole day on one dashboard"
    text: "Goals, fitness, calories and finances sit side by side, with rank, level and streak above them."
  - title: "Workout ticked off"
    text: "One entry is enough and the figures roll to their new value like an odometer. The streak grows and XP is added."
  - title: "Meal logged"
    text: "Calories and spending change in the same moment. What is left is shown right next to them."
  - title: "The coach sums up"
    text: "The AI life coach reviews the week and makes one concrete suggestion. That earns XP and the next level."
---

Lifemate bundles the areas otherwise scattered across five apps (calendar, fitness and nutrition tracking, finances and study notes) in one interface, with an AI layer on top. Instead of only collecting data, Lifemate helps with planning: training and nutrition plans are generated and adjusted to your own goals.

The core by now is the daily-routine engine: a scheduler lays out the day, streaks keep habits going, and a persistent memory means the app knows across sessions what you are currently working on. As a PWA it works offline too; since the last redesign the interface follows a monochrome token system instead of assembled one-off colors.

Technically Lifemate is a monorepo with two frontends (a web app for desktop and mobile, a touch variant for tablets and smart displays) on a shared codebase: Next.js and React on the front end, Express and Firestore on the back end, plus end-to-end tests with Playwright.

Lifemate is my own project at Racep Labs, from architecture to deployment.
