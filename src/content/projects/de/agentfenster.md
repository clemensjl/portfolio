---
title: agentfenster
summary: Kontrollraum für Klick-Agenten unter Windows — der Agent arbeitet auf einem unsichtbaren zweiten Desktop, live beobachtbar und jederzeit übernehmbar.
stack: ["Python", "Win32", "MCP", "ConPTY"]
role: Mitentwicklung im Zweierteam
repo: https://github.com/clemensjl/agentfenster-mcp
live: https://agentfenster.com
image: /images/projects/agentfenster.png
imageAlt: >-
  Cover-Karte: agentfenster für Windows, vor dem Start, gebaut mit Python, Win32, MCP, ConPTY und Record-and-Replay. MCP-Server mit elf Werkzeugen.
order: 5
featured: false
---

GUI-Agenten unter Windows lassen einem bisher zwei schlechte Optionen: Entweder der Agent übernimmt Bildschirm und Maus, oder er sitzt in einer Cloud-VM, in der keine Logins, Cookies, kein VPN und keine Zwei-Faktor-Codes existieren. agentfenster macht weder das eine noch das andere.

Es legt einen zweiten Win32-Desktop innerhalb der laufenden Windows-Sitzung an — gleicher Benutzer, gleiche Zugangsdaten, gleiche Browser-Cookies. Der Desktop wird nie angezeigt, also kann der Agent den Vordergrund nicht an sich reißen; man sieht ihn als Livestream im Fenster und greift ein, wann man will. Bis zu sechs solcher Desktops laufen nebeneinander.

Der zweite Punkt ist die Ehrlichkeit: Jede Aktion wird danach gegen den Fensterzustand geprüft. Hat sich nichts verändert, gilt der Schritt als fehlgeschlagen — statt als stiller Erfolg, den man drei Tage später bemerkt.

Wiederkehrende Aufgaben macht man einmal selbst vor. agentfenster schreibt mit — Klicks, Eingaben, Bedienhilfen-Kontext — und spielt den Ablauf danach ohne Modell nach, was ihn kostenlos und reproduzierbar macht. Jeder Lauf lässt sich als Film mit Zeitleiste abspielen und als MP4 exportieren. Zugangsdaten liegen im Windows Credential Manager, das Modell sieht nur einen Platzhalter; kaufen, registrieren, senden, löschen und installieren sind einzelne Schalter, alle standardmäßig aus.

Claude Code läuft in einem echten Terminal im selben Fenster und steuert denselben Desktop über den mitgelieferten MCP-Server mit elf Werkzeugen. Das Projekt steht vor dem Start; öffentlich sind die MCP-Dokumentation und die Produktseite, der Anwendungscode bleibt geschlossen.
