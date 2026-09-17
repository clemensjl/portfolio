---
title: Agent Deck
summary: "Windows-Cockpit für Coding-Agenten: Claude Code, Codex, Grok, Antigravity und OpenCode parallel in Sessions, jede in ihrem eigenen Terminal und mit eigenem Account."
stack: ["Electron", "React", "TypeScript", "node-pty"]
download: https://github.com/clemensjl/agent-deck-releases/releases
image: /images/projects/agent-deck.png
imageAlt: "Agent Deck: Seitenleiste mit Projekten und vier Terminal-Panes mit parallel laufenden Coding-Agenten, in einem Pane eine Zwischenfrage als klickbarer Dialog."
order: 3
featured: true
flagship: 4
preview: agent-deck
facts:
  - { value: "5", label: "Coding-Agenten" }
  - { value: "3.3.0", label: "aktuelle Version" }
  - { value: "105", label: "Commits" }
story:
  - title: "Ein Cockpit für alle Sessions"
    text: "Claude Code, Codex, Grok, Antigravity und OpenCode laufen nebeneinander, jede Session in einem echten Terminal und nach Projekt sortiert."
  - title: "Alle arbeiten gleichzeitig"
    text: "Jede Session hat ihr eigenes Account-Profil. Der Status zeigt auf einen Blick, wer arbeitet, wer fertig ist und wer wartet."
  - title: "Rückfragen gehen nicht mehr unter"
    text: "Braucht ein Agent eine Entscheidung, erscheint sie als klickbarer Dialog direkt im Pane, und die Seitenleiste markiert die wartende Session."
  - title: "Ein Klick, und es geht weiter"
    text: "Die Antwort landet im Terminal, der Agent arbeitet weiter, und alle Sessions laufen wieder."
---

Wer mit mehreren Coding-Agenten gleichzeitig arbeitet, jongliert sonst ein Dutzend Terminalfenster und verliert den Faden, welcher Agent gerade worauf wartet. Agent Deck fasst das zusammen: jede Session in einem eigenen Pane, sortiert nach Projekt, alle gleichzeitig im Blick.

Jede Session läuft in einem echten PTY über node-pty und xterm.js: kein nachgebautes Terminal, sondern die CLI so, wie sie im Terminal auch laufen würde. Sessions bekommen getrennte Account-Profile, sodass mehrere Zugänge parallel nutzbar sind, ohne sich gegenseitig auszuloggen. Neben Claude Code laufen auch Codex, Grok, Antigravity und OpenCode als Agenten.

Dazu kommt, was im reinen Terminal fehlt: Rückfragen eines Agenten erscheinen inline im Terminal-Pane als klickbarer Dialog statt im Textstrom unterzugehen, Schritt-für-Schritt-Anleitungen landen in einer eigenen Ansicht, Projekte lassen sich über den GitHub-Device-Flow direkt anbinden, und ein Graph-Tab visualisiert den Wissensgraph der verknüpften Memory-Vault-Notizen zum aktiven Projekt. Updates kommen automatisch über einen getrennten Alpha- und Stable-Kanal.

Der Quellcode ist privat; der Installer und die Update-Metadaten liegen in einem öffentlichen Release-Repo. Aktuell bei Version 3.3.0.
