---
title: agentfenster
summary: "Kontrollraum für Klick-Agenten unter Windows: der Agent arbeitet auf einem unsichtbaren zweiten Desktop, live beobachtbar und jederzeit übernehmbar."
stack: ["Python", "Win32", "MCP", "ConPTY"]
role: Mitentwicklung im Zweierteam
repo: https://github.com/clemensjl/agentfenster-mcp
live: https://agentfenster.com
image: /images/projects/agentfenster.png
imageAlt: "agentfenster: Livestream des Agent-Desktops mit einem Rechnungsformular, daneben das Aktivitätsprotokoll mit einem als no effect markierten Klick."
order: 5
featured: false
flagship: 2
variant: left
preview: agentfenster
facts:
  - { value: "2.260", label: "Commits" }
  - { value: "13", label: "MCP-Werkzeuge" }
  - { value: "16", label: "Desktops parallel, maximal" }
story:
  - title: "Ein Kontrollraum statt einer Cloud-VM"
    text: "Der Agent arbeitet auf einem zweiten, unsichtbaren Windows-Desktop in der eigenen Sitzung. Gleiche Logins, gleiche Cookies, und der Bildschirm bleibt frei."
  - title: "Zusehen, während er klickt"
    text: "Im Fenster läuft der Livestream des Agent-Desktops. Jeder Klick und jede Eingabe landet im Aktivitätsprotokoll."
  - title: "Scheitern wird laut gemeldet"
    text: "Nach jeder Aktion wird der Fensterzustand geprüft. Hat sich nichts geändert, steht im Protokoll wörtlich \"no effect\" statt eines stillen Erfolgs."
  - title: "Jeder Lauf bleibt als Film"
    text: "Recordings hält jeden Lauf fest. Auf der Zeitleiste lässt er sich Schritt für Schritt abspielen, und der wirkungslose Klick bleibt rot markiert."
---

GUI-Agenten unter Windows lassen einem bisher zwei schlechte Optionen: Entweder der Agent übernimmt Bildschirm und Maus, oder er sitzt in einer Cloud-VM, in der keine Logins, Cookies, kein VPN und keine Zwei-Faktor-Codes existieren. agentfenster macht weder das eine noch das andere.

Es legt einen zweiten Win32-Desktop innerhalb der laufenden Windows-Sitzung an: gleicher Benutzer, gleiche Zugangsdaten, gleiche Browser-Cookies. Der Desktop wird nie angezeigt, also kann der Agent den Vordergrund nicht an sich reißen; man sieht ihn als Livestream im Fenster und greift ein, wann man will. Standardmäßig laufen sechs solcher Desktops nebeneinander, einstellbar bis 16.

Der zweite Punkt ist die Ehrlichkeit: Jede Aktion wird danach gegen den Fensterzustand geprüft. Hat sich nichts verändert, gilt der Schritt als fehlgeschlagen, nicht als stiller Erfolg, den man drei Tage später bemerkt.

Wiederkehrende Aufgaben macht man einmal selbst vor. agentfenster schreibt mit: Klicks, Eingaben, Bedienhilfen-Kontext, und spielt den Ablauf danach ohne Modell nach, was ihn kostenlos und reproduzierbar macht. Jeder Lauf lässt sich als Film mit Zeitleiste abspielen und als MP4 exportieren. Zugangsdaten liegen im Windows Credential Manager, das Modell sieht nur einen Platzhalter; kaufen, registrieren, senden, löschen und installieren sind einzelne Schalter, alle standardmäßig aus.

Claude Code läuft in einem echten Terminal im selben Fenster und steuert denselben Desktop über den mitgelieferten MCP-Server mit 13 Werkzeugen. Das Projekt steht vor dem Start; öffentlich sind die MCP-Dokumentation und die Produktseite, der Anwendungscode bleibt geschlossen.
