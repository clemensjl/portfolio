---
title: Agent Deck
summary: "A Windows cockpit for coding agents: run Claude Code, Codex, Gemini CLI, Grok, Antigravity and OpenCode side by side, each session in its own terminal with its own account."
stack: ["Electron", "React", "TypeScript", "node-pty"]
download: https://github.com/clemensjl/agent-deck-releases/releases
image: /images/projects/agent-deck.jpg
imageAlt: "Agent Deck: a session asks a question through a clickable dialog, with the sidebar of demo projects and profiles on the left."
order: 3
featured: true
flagship: 1
variant: right
preview: agent-deck
facts:
  - { value: "4.4.2", label: "current version" }
  - { value: "6", label: "coding agents" }
story:
  - title: "One cockpit for every session"
    text: "Claude Code, Codex, Gemini CLI, Grok, Antigravity and OpenCode run side by side, each session in a real terminal and grouped by project."
  - title: "All of them work at once"
    text: "Every session has its own account profile. The status shows at a glance which ones are working, done or waiting."
  - title: "Questions stop getting buried"
    text: "When an agent needs a decision, it pops up as a clickable dialog inside that session. If a different session is asking, a notice in the top right tells you where to go."
  - title: "One click and it keeps going"
    text: "Your answer goes to the terminal, the agent carries on, and every session is running again."
---

Running several coding agents at once usually means juggling a dozen terminal windows and losing track of which agent is waiting for what. Agent Deck brings it all into one place: every session in its own pane, grouped by project, all visible at the same time.

Each session runs in a real PTY through node-pty and xterm.js. It is not a terminal lookalike but the CLI exactly as it would run in a shell. Sessions get separate account profiles, so several logins can run in parallel without signing each other out. Besides Claude Code, it also runs Codex, Gemini CLI, Grok, Antigravity and OpenCode.

On top of that, it adds what a plain terminal lacks. When an agent asks a question, the question appears in the terminal pane as a clickable dialog instead of scrolling past. Step-by-step instructions get their own view. Projects can be connected through the GitHub device flow, and a graph tab shows the knowledge graph of linked memory-vault notes for the active project. Updates arrive automatically through separate alpha and stable channels.

Version 3.4 added a master mode. One session gets the master role and can list other sessions, look at their screens, give them tasks, start new ones and close the ones that are no longer needed. A human grants the role and takes it back, everything in between is logged, and the supervision view has an emergency stop. There is also a usage display per profile with the rolling 5-hour window and the 7-day window, an ideas tab that files notes into the right folder of the memory vault, and a guided tour on first launch.

Since version 4.4 you choose the model and reasoning effort at launch, pulled live from whatever the CLI currently offers. Agent Deck also updates outdated agent CLIs when it starts.

The source code is private. The installer and update metadata live in a public release repository. Current version: 4.4.2.
