---
title: KernMind
summary: "Selbst gehostetes zweites Gehirn: Notizen, Bookmarks, Bilder und Zitate sammeln und per KI durchsuchen, mit eigenem API-Key oder komplett offline."
stack: ["Next.js", "TypeScript", "SQLite", "Chrome Extension"]
repo: https://github.com/clemensjl/kernmind
live: https://kernmind.vercel.app
image: /images/projects/kernmind.png
imageAlt: "KernMind: Karten-Raster mit Notizen und Links, davor das Fenster Ask your Mind mit einer Antwort und der zitierten Quell-Karte."
order: 4
featured: true
preview: kernmind
---

KernMind ist eine offene Alternative zu mymind.com: ein Ort für alles, was man sich merken will, etwa Notizen, Links, Bilder, Zitate, Farben, Produkte, Bücher. Der Unterschied ist, wo die Daten liegen. KernMind läuft auf der eigenen Instanz, die Datenbank gehört einem selbst, und die KI-Schicht arbeitet mit dem eigenen API-Key.

Gespeichertes lässt sich nicht nur durchsuchen, sondern befragen: Der Chat beantwortet Fragen aus dem eigenen Bestand und belegt jede Antwort mit der Karte, aus der sie stammt. Bilder werden per OCR erfasst, lange Artikel bekommen einen Lesemodus.

Für das Modell hinter der Suche ist man nicht festgelegt: Gemini, OpenAI, Claude, Groq und OpenRouter funktionieren, und wer gar nichts nach außen geben will, hängt ein lokales Ollama-Modell an. Gesammelt wird über eine Chrome-Erweiterung oder eine Windows-App mit globalem Hotkey; der gesamte Bestand lässt sich mit einem Klick als JSON oder Markdown exportieren.

Deployment per Ein-Klick auf Vercel mit Turso als Datenbank, alternativ lokal über Docker Compose.
