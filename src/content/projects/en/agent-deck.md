---
title: Agent Deck
summary: A Windows cockpit for coding agents — several Claude Code, Codex, Gemini and Grok sessions side by side, each in its own terminal and under its own account.
stack: ["Electron", "React", "TypeScript", "node-pty"]
download: https://github.com/clemensjl/agent-deck-releases/releases
image: /images/projects/agent-deck-en.png
imageAlt: >-
  Cover card: Agent Deck, a Windows app built on Electron with React, TypeScript, node-pty and xterm.js. Installer from the public release repository.
order: 3
featured: true
---

Working with several coding agents at once otherwise means juggling a dozen terminal windows and losing track of which agent is waiting on what. Agent Deck pulls that together: every session in its own pane, grouped by project, all visible at the same time.

Each session runs in a real PTY through node-pty and xterm.js — not a reimplemented terminal, but the CLI exactly as it would run in a shell. Sessions get separate account profiles, so multiple logins can run in parallel without signing each other out. Besides Claude Code, Codex, Gemini and Grok run as agents too.

On top of that come the things a plain terminal lacks: when an agent asks a question it shows up as a clickable dialog instead of scrolling past, step-by-step instructions land in their own view, projects can be connected through the GitHub device flow, and a session graph shows what is running where. Updates arrive automatically over separate alpha and stable channels.

The source is private; the installer and update metadata live in a public release repository. Currently at version 2.1.0.
