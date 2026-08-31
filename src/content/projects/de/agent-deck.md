---
title: Agent Deck
summary: Windows-Cockpit für Coding-Agenten — mehrere Claude-Code-, Codex-, Gemini- und Grok-Sessions parallel, jede in ihrem eigenen Terminal und mit eigenem Account.
stack: ["Electron", "React", "TypeScript", "node-pty"]
download: https://github.com/clemensjl/agent-deck-releases/releases
image: /images/projects/agent-deck.png
imageAlt: >-
  Cover-Karte: Agent Deck, Windows-App auf Electron-Basis, gebaut mit Electron, React, TypeScript, node-pty und xterm.js. Installer über das öffentliche Release-Repo.
order: 3
featured: true
---

Wer mit mehreren Coding-Agenten gleichzeitig arbeitet, jongliert sonst ein Dutzend Terminalfenster und verliert den Faden, welcher Agent gerade worauf wartet. Agent Deck fasst das zusammen: jede Session in einem eigenen Pane, sortiert nach Projekt, alle gleichzeitig im Blick.

Jede Session läuft in einem echten PTY über node-pty und xterm.js — kein nachgebautes Terminal, sondern die CLI so, wie sie im Terminal auch laufen würde. Sessions bekommen getrennte Account-Profile, sodass mehrere Zugänge parallel nutzbar sind, ohne sich gegenseitig auszuloggen. Neben Claude Code laufen auch Codex, Gemini und Grok als Agenten.

Dazu kommt, was im reinen Terminal fehlt: Rückfragen eines Agenten werden als klickbarer Dialog angezeigt statt im Textstrom unterzugehen, Schritt-für-Schritt-Anleitungen landen in einer eigenen Ansicht, Projekte lassen sich über den GitHub-Device-Flow direkt anbinden, und ein Session-Graph zeigt, was gerade wo läuft. Updates kommen automatisch über einen getrennten Alpha- und Stable-Kanal.

Der Quellcode ist privat; der Installer und die Update-Metadaten liegen in einem öffentlichen Release-Repo. Aktuell bei Version 2.1.0.
