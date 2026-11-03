---
title: AgentShot
summary: "A screenshot tool for Windows 11 with a second mode for coding agents: instead of one big image, each mark becomes a record with the UI element, the recognized text and the page URL."
stack: ["Rust", "Tauri", "Svelte", "TypeScript"]
role: My own version, which fed into AgentShot by Agent Labs
preview: agentshot
image: /images/projects/agentshot.jpg
order: 14
---

In normal mode AgentShot works like a good screenshot tool. A hotkey freezes the screen, you select an area, a window or a single UI element, annotate and redact it, then copy, save or pin the result.

The second mode is built for coding agents. Instead of a full-screen image, it produces a small data package. Each mark becomes a numbered record with the UI element underneath it, the text found by OCR and, in browsers, the cleaned-up page URL. The agent gets a short text and a few small crops, which it understands much faster than one big image.

Everything runs locally, with no telemetry. I built this version, Philipp built the native Agent Labs version, and parts of mine went into his. The source code is private.
