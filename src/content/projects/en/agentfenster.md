---
title: agentfenster
summary: "A control room for click agents on Windows: the agent works on an invisible second desktop, watchable live and interruptible at any point."
stack: ["Python", "Win32", "MCP", "ConPTY"]
role: Co-development in a two-person team
repo: https://github.com/clemensjl/agentfenster-mcp
live: https://agentfenster.com
image: /images/projects/agentfenster-en.png
imageAlt: "agentfenster: live stream of the agent desktop with an invoice form, next to it the activity log with one click marked as no effect."
order: 5
featured: false
flagship: 1
preview: agentfenster
facts:
  - { value: "2,260", label: "commits" }
  - { value: "13", label: "MCP tools" }
  - { value: "16", label: "parallel desktops, max" }
story:
  - title: "A control room instead of a cloud VM"
    text: "The agent works on a second, invisible Windows desktop inside your own session. Same logins, same cookies, and your screen stays free."
  - title: "Watch it click"
    text: "The window streams the agent desktop live. Every click and every keystroke ends up in the activity log."
  - title: "Failure is reported loudly"
    text: "After each action the window state is checked. If nothing changed, the log literally says \"no effect\" instead of a silent success."
  - title: "Every run is kept as a film"
    text: "Recordings keeps every run. You can scrub through it step by step on the timeline, and the click without effect stays marked in red."
---

GUI agents on Windows leave you with two bad options today: either the agent takes over your screen and mouse, or it sits in a cloud VM where none of your logins, cookies, VPN or two-factor codes exist. agentfenster does neither.

It creates a second Win32 desktop inside your running Windows session: same user, same credentials, same browser cookies. That desktop is never displayed, so the agent cannot grab your foreground; you watch it as a live stream in the window and step in whenever you want. Six such desktops run side by side by default, adjustable up to 16.

The second point is honesty: every action is verified against the window state afterwards. If nothing changed, the step counts as a failure, not a silent success you notice three days later.

Recurring tasks you demonstrate once yourself. agentfenster writes along: clicks, typing, accessibility context, and replays the run afterwards with no model at all, which makes it free and reproducible. Every run can be replayed as a film with a timeline and exported as MP4. Credentials live in the Windows Credential Manager and the model only ever sees a placeholder; buying, registering, sending, deleting and installing are individual switches, all off by default.

Claude Code runs in a real terminal in the same window and drives the same desktop through the bundled MCP server with 13 tools. The project is pre-launch; the MCP documentation and the product page are public, the application code stays closed.
