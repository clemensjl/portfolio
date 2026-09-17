---
title: KernMind
summary: "A self-hosted second brain: collect notes, bookmarks, images and quotes and search them with AI, using your own API key or fully offline."
stack: ["Next.js", "TypeScript", "SQLite", "Chrome Extension"]
repo: https://github.com/clemensjl/kernmind
live: https://kernmind.vercel.app
image: /images/projects/kernmind-en.png
imageAlt: "KernMind: card grid with notes and links, in front of it the Ask your Mind window with an answer and the cited source card."
order: 4
featured: true
preview: kernmind
---

KernMind is an open alternative to mymind.com: one place for everything worth remembering, such as notes, links, images, quotes, colors, products, books. The difference is where the data lives. KernMind runs on your own instance, the database is yours, and the AI layer works with your own API key.

What you save is not just searchable but answerable: the chat answers questions from your own collection and cites the card each answer came from. Images are read via OCR, long articles get a reader mode.

You are not locked into one model: Gemini, OpenAI, Claude, Groq and OpenRouter all work, and anyone who wants nothing leaving the machine can point it at a local Ollama model. Capture happens through a Chrome extension or a Windows app with a global hotkey; the whole collection exports to JSON or Markdown in one click.

One-click deployment on Vercel with Turso as the database, or locally via Docker Compose.
