---
title: Agent Deck
summary: "A Windows cockpit for coding agents: Claude Code, Codex, Grok, Antigravity and OpenCode sessions side by side, each in its own terminal and under its own account."
stack: ["Electron", "React", "TypeScript", "node-pty"]
download: https://github.com/clemensjl/agent-deck-releases/releases
image: /images/projects/agent-deck-en.png
imageAlt: "Agent Deck: sidebar with projects and four terminal panes running coding agents in parallel, one pane showing a question as a clickable dialog."
order: 3
featured: true
flagship: 1
variant: right
preview: agent-deck
facts:
  - { value: "1,788", label: "tests in 93 files" }
  - { value: "5", label: "coding agents" }
  - { value: "3.5.0", label: "current version" }
story:
  - title: "One cockpit for every session"
    text: "Claude Code, Codex, Grok, Antigravity and OpenCode run side by side, each session in a real terminal and sorted by project."
  - title: "Everyone works at once"
    text: "Each session has its own account profile. The status shows at a glance who is working, who is done and who is waiting."
  - title: "Questions no longer get lost"
    text: "When an agent needs a decision, it appears as a clickable dialog right inside the pane, and the sidebar flags the waiting session."
  - title: "One click and it moves on"
    text: "The answer lands in the terminal, the agent continues, and every session is running again."
---

Working with several coding agents at once otherwise means juggling a dozen terminal windows and losing track of which agent is waiting on what. Agent Deck pulls that together: every session in its own pane, grouped by project, all visible at the same time.

Each session runs in a real PTY through node-pty and xterm.js: not a reimplemented terminal, but the CLI exactly as it would run in a shell. Sessions get separate account profiles, so multiple logins can run in parallel without signing each other out. Besides Claude Code, Codex, Grok, Antigravity and OpenCode run as agents too.

On top of that come the things a plain terminal lacks: when an agent asks a question, it shows up inline in the terminal pane as a clickable dialog instead of scrolling past, step-by-step instructions land in their own view, projects can be connected through the GitHub device flow, and a graph tab visualizes the knowledge graph of linked memory-vault notes for the active project. Updates arrive automatically over separate alpha and stable channels.

Since version 3.4 there is a master mode: one session gets the master role and can list other sessions, look at their screens, give them tasks, start new ones and close those no longer needed. A human grants the role and takes it away again, everything in between is logged, and the supervision view has an emergency stop. On top of that come a quota display per profile with the rolling 5-hour window and the 7-day window, an ideas tab that files thoughts into the matching folder of the memory vault, and a guided tour on first launch.

The source is private; the installer and update metadata live in a public release repository. Currently at version 3.5.0, backed by 1,788 tests in 93 files.
