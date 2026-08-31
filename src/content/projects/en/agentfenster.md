---
title: agentfenster
summary: A control room for click agents on Windows — the agent works on an invisible second desktop, watchable live and interruptible at any point.
stack: ["Python", "Win32", "MCP", "ConPTY"]
role: Co-development in a two-person team
repo: https://github.com/clemensjl/agentfenster-mcp
live: https://agentfenster.com
image: /images/projects/agentfenster-en.png
imageAlt: >-
  Cover card: agentfenster for Windows, pre-launch, built with Python, Win32, MCP, ConPTY and record-and-replay. MCP server with eleven tools.
order: 5
featured: false
---

GUI agents on Windows leave you with two bad options today: either the agent takes over your screen and mouse, or it sits in a cloud VM where none of your logins, cookies, VPN or two-factor codes exist. agentfenster does neither.

It creates a second Win32 desktop inside your running Windows session — same user, same credentials, same browser cookies. That desktop is never displayed, so the agent cannot grab your foreground; you watch it as a live stream in the window and step in whenever you want. Up to six such desktops run side by side.

The second point is honesty: every action is verified against the window state afterwards. If nothing changed, the step counts as a failure — instead of a silent success you notice three days later.

Recurring tasks you demonstrate once yourself. agentfenster writes along — clicks, typing, accessibility context — and replays the run afterwards with no model at all, which makes it free and reproducible. Every run can be replayed as a film with a timeline and exported as MP4. Credentials live in the Windows Credential Manager and the model only ever sees a placeholder; buying, registering, sending, deleting and installing are individual switches, all off by default.

Claude Code runs in a real terminal in the same window and drives the same desktop through the bundled MCP server with eleven tools. The project is pre-launch; the MCP documentation and the product page are public, the application code stays closed.
