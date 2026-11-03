---
title: KernMind
summary: "A self-hosted second brain: collect notes, bookmarks, images and quotes and search them with AI, using your own API key or fully offline."
stack: ["Next.js", "TypeScript", "SQLite", "Chrome Extension"]
repo: https://github.com/clemensjl/kernmind
live: https://kernmind.vercel.app
image: /images/projects/kernmind.jpg
imageAlt: "KernMind: a grid of cards with saved notes, checklists, products and articles."
order: 4
featured: true
preview: kernmind
---

KernMind is an open alternative to mymind.com: one place for everything you want to remember, from notes, links, images and quotes to colors, products and books. The difference is where the data lives. KernMind runs on your own instance, the database belongs to you, and the AI layer uses your own API key.

You can do more than search what you save. You can ask it questions: the chat answers from your own collection and cites the card each answer comes from. Images are read with OCR, and long articles get a reader mode.

You are not tied to one model. Gemini, OpenAI, Claude, Groq and OpenRouter all work, and if nothing should leave your machine, you can connect a local Ollama model. You capture things with a Chrome extension or a Windows app with a global hotkey, and the whole collection exports to JSON or Markdown in one click.

Deploys in one click to Vercel with Turso as the database, or runs locally with Docker Compose.
