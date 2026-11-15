---
title: Claude Skills
summary: "19 Agent Skills für Claude Code, Cursor und Codex: Rechtstexte je Rechtsordnung, Compliance in der Umsetzung und Prüfungen für UX und Design."
stack: ["Agent Skills", "Markdown"]
repo: https://github.com/clemensjl/claude-skills
image: /images/projects/claude-skills.png
category: claude-skills
order: 8
featured: false
---

Agent Skills geben einem Coding-Agenten Fachwissen und feste Regeln mit, die er sonst nicht hat. Die Sammlung deckt zwei Bereiche ab: Recht und Compliance, wo Sprachmodelle zuverlässig deutsches oder US-Recht ausgeben, und Produktqualität, wo sie zuverlässig nach Template aussehen.

Neun `legal-*`-Skills schreiben Impressum, Datenschutzerklärung und AGB für Österreich, Deutschland, die Schweiz, Frankreich, Italien, Großbritannien, die USA, Australien und die EU-Ebene, mit den Paragrafen, die dort tatsächlich gelten. Vier weitere übernehmen die technische Umsetzung (Cookie-Consent, Vendor-Prüfung, Löschfristen, AI Act), drei kümmern sich um E-Rechnung, österreichisches Steuerrecht und korrekte Lokalisierung von Namen, Adressen und Zahlen.

Drei Skills drehen sich um Produktqualität: ein Regelwerk für Bedienbarkeit, Formulare, Barrierefreiheit, Checkout und Kündigung mit Verbotsliste für Dark Patterns, ein Audit auf fehlende UX-Details vor dem Release und ein Skill, der KI-generierte Oberflächen entslopt.

Die rechtlichen Inhalte sind gegen Primärquellen geprüft, nicht aus dem Modellgedächtnis geschrieben. Wo eine Angabe nicht belegt werden konnte, setzt der Skill einen sichtbaren Marker, statt zu raten; jeder erzeugte Text trägt den Hinweis, dass er keine Rechtsberatung ersetzt.

Installation über `npx skills@latest add clemensjl/claude-skills`, MIT-lizenziert, `design-unslop` unter CC BY 4.0.
