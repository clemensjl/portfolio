---
title: AgentShot
summary: "Screenshot-Tool für Windows 11 mit zweitem Modus für Coding-Agenten: Markierungen werden zu Datensätzen mit UI-Element, erkanntem Text und Seiten-URL statt zu einem großen Bild."
stack: ["Rust", "Tauri", "Svelte", "TypeScript"]
role: Eigene Version, eingeflossen in AgentShot von Agent Labs
order: 14
---

Im normalen Modus verhält sich AgentShot wie ein gutes Screenshot-Tool: Ein Hotkey friert den Bildschirm ein, man wählt einen Bereich, ein Fenster oder ein einzelnes UI-Element, markiert, schwärzt und kopiert, speichert oder pinnt das Ergebnis.

Der zweite Modus ist für Coding-Agenten gedacht. Statt eines Vollbilds entsteht ein kleines Datenpaket: Jede Markierung wird ein nummerierter Datensatz, ergänzt um das UI-Element darunter, den per OCR erkannten Text und bei Browsern die bereinigte Seiten-URL. Der Agent bekommt einen kurzen Text und ein paar kleine Ausschnitte, die er viel schneller versteht als ein großes Bild.

Alles läuft lokal, ohne Telemetrie. Ich habe diese Version gebaut, Philipp die native Fassung von Agent Labs; Teile meiner Version sind dort eingeflossen. Der Quellcode ist privat.
