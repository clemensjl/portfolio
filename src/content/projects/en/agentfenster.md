---
title: agentfenster
summary: "A control room for agents that click through Windows apps: the agent works on an invisible second desktop that you can watch live and take over at any time."
stack: ["Python", "Win32", "MCP", "ConPTY"]
role: Co-developer in a team of two
repo: https://github.com/clemensjl/agentfenster-mcp
live: https://agentfenster.com
image: /images/projects/agentfenster.jpg
imageAlt: "agentfenster: live view of the agent desktop filling in a customer form, with the activity log next to it."
order: 5
featured: false
flagship: 2
variant: left
preview: agentfenster
facts:
  - { value: "2,400", label: "commits" }
  - { value: "13", label: "MCP tools" }
  - { value: "16", label: "parallel desktops, max" }
story:
  - title: "A control room instead of a cloud VM"
    text: "The agent works on a second, invisible Windows desktop inside your own session. Same logins, same cookies, and your screen stays free for you."
  - title: "Watch it click"
    text: "The window shows a live stream of the agent desktop. Every click and every keystroke goes into the activity log."
  - title: "Several agents, one view"
    text: "Each agent gets its own invisible desktop. One overview shows every open run, and your own mouse and windows stay untouched."
  - title: "Every run saved as a film"
    text: "Recordings keeps every run. You can step through it on the timeline, and a task you showed once replays without a single model call."
---

GUI agents on Windows have left you with two bad options so far. Either the agent takes over your screen and mouse, or it runs in a cloud VM that has none of your logins, cookies, VPN or two-factor codes. agentfenster does neither.

It creates a second Win32 desktop inside your running Windows session: same user, same credentials, same browser cookies. That desktop is never shown on screen, so the agent cannot steal focus from you. You watch it as a live stream in the window and step in whenever you like. Six of these desktops run side by side by default, and you can raise that to 16.

The second point is honesty. After every action, agentfenster checks the window state. If nothing changed, the step counts as failed, not as a silent success you only notice three days later.

For recurring tasks, you show it once. agentfenster records the clicks, the typing and the accessibility context, then replays the run without any model at all, which makes it free and reproducible. Every run can be played back as a film with a timeline and exported as MP4. Credentials stay in the Windows Credential Manager, and the model only ever sees a placeholder. Buying, signing up, sending, deleting and installing each have their own switch, and all of them are off by default.

Claude Code runs in a real terminal in the same window and controls the same desktop through the bundled MCP server with 13 tools. The project has not launched yet. The MCP documentation and the product page are public, while the application code stays closed.
