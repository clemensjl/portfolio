---
title: AgentShot
summary: "A screenshot tool for Windows 11 with a second mode for coding agents: marks become data records with the UI element, recognized text and page URL instead of one large image."
stack: ["Rust", "Tauri", "Svelte", "TypeScript"]
role: My own version, merged into Agent Labs' AgentShot
order: 14
---

In normal mode AgentShot behaves like a good screenshot tool: a hotkey freezes the screen, you pick an area, a window or a single UI element, annotate, redact, and copy, save or pin the result.

The second mode is built for coding agents. Instead of a full-screen image it produces a small data package: every mark becomes a numbered record, enriched with the UI element underneath, the text recognized by OCR and, for browsers, the cleaned page URL. The agent gets a short text and a few small crops it understands much faster than one large image.

Everything runs locally, without telemetry. I built this version; Philipp built the native Agent Labs version, and parts of mine went into it. The source is private.
