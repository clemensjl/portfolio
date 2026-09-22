---
title: Agent Deck
summary: "Windows-Cockpit für Coding-Agenten: Claude Code, Codex, Grok, Antigravity und OpenCode parallel in Sessions, jede in ihrem eigenen Terminal und mit eigenem Account."
stack: ["Electron", "React", "TypeScript", "node-pty"]
download: https://github.com/clemensjl/agent-deck-releases/releases
image: /images/projects/agent-deck.jpg
imageAlt: "Agent Deck: eine Session stellt eine Zwischenfrage als klickbaren Dialog, links die Seitenleiste mit Demo-Projekten und Profilen."
order: 3
featured: true
flagship: 1
variant: right
preview: agent-deck
facts:
  - { value: "1.788", label: "Tests in 93 Dateien" }
  - { value: "5", label: "Coding-Agenten" }
  - { value: "3.5.0", label: "aktuelle Version" }
story:
  - title: "Ein Cockpit für alle Sessions"
    text: "Claude Code, Codex, Grok, Antigravity und OpenCode laufen nebeneinander, jede Session in einem echten Terminal und nach Projekt sortiert."
  - title: "Alle arbeiten gleichzeitig"
    text: "Jede Session hat ihr eigenes Account-Profil. Der Status zeigt auf einen Blick, wer arbeitet, wer fertig ist und wer wartet."
  - title: "Rückfragen gehen nicht mehr unter"
    text: "Braucht ein Agent eine Entscheidung, erscheint sie als klickbarer Dialog direkt im Fenster der Session. Fragt gerade eine andere, zeigt ein Hinweis oben rechts, wohin man springen muss."
  - title: "Ein Klick, und es geht weiter"
    text: "Die Antwort landet im Terminal, der Agent arbeitet weiter, und alle Sessions laufen wieder."
---

Wer mit mehreren Coding-Agenten gleichzeitig arbeitet, jongliert sonst ein Dutzend Terminalfenster und verliert den Faden, welcher Agent gerade worauf wartet. Agent Deck fasst das zusammen: jede Session in einem eigenen Pane, sortiert nach Projekt, alle gleichzeitig im Blick.

Jede Session läuft in einem echten PTY über node-pty und xterm.js: kein nachgebautes Terminal, sondern die CLI so, wie sie im Terminal auch laufen würde. Sessions bekommen getrennte Account-Profile, sodass mehrere Zugänge parallel nutzbar sind, ohne sich gegenseitig auszuloggen. Neben Claude Code laufen auch Codex, Grok, Antigravity und OpenCode als Agenten.

Dazu kommt, was im reinen Terminal fehlt: Rückfragen eines Agenten erscheinen inline im Terminal-Pane als klickbarer Dialog statt im Textstrom unterzugehen, Schritt-für-Schritt-Anleitungen landen in einer eigenen Ansicht, Projekte lassen sich über den GitHub-Device-Flow direkt anbinden, und ein Graph-Tab visualisiert den Wissensgraph der verknüpften Memory-Vault-Notizen zum aktiven Projekt. Updates kommen automatisch über einen getrennten Alpha- und Stable-Kanal.

Seit Version 3.4 gibt es den Master-Modus: Eine Session bekommt die Rolle Master und kann andere Sessions auflisten, in ihre Bildschirme sehen, ihnen Aufträge geben, neue starten und nicht mehr gebrauchte schließen. Ein Mensch vergibt die Rolle und nimmt sie wieder weg, alles dazwischen steht im Protokoll, und die Aufsicht hat einen Not-Aus. Dazu kommen eine Kontingent-Anzeige pro Profil mit dem gleitenden 5-Stunden-Fenster und dem 7-Tage-Fenster, ein Ideen-Tab, der Einfälle in den passenden Ordner des Memory-Vaults einsortiert, und eine geführte Einführung beim ersten Start.

Der Quellcode ist privat; der Installer und die Update-Metadaten liegen in einem öffentlichen Release-Repo. Aktuell bei Version 3.5.0, abgesichert durch 1.788 Tests in 93 Dateien.
