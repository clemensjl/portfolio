---
title: Iris RGB
summary: "RGB-Beleuchtung für Windows ohne Konto, Werbung und Telemetrie: Effekte, Bildschirm-Ambient und Spiele-Anbindung auf Basis von OpenRGB, mit einem Dienst unter 60 MB Arbeitsspeicher."
stack: ["Rust", "Tauri", "OpenRGB"]
order: 12
---

Wer RGB-Hardware von mehreren Herstellern hat, landet heute bei einer von zwei Lösungen: einer Chromium-App, die immer online sein will und im Hintergrund viel Speicher frisst, oder bei OpenRGB, das zwar über 1.200 Geräte ansteuert, Effekte und Bildschirm-Ambient aber Plugins überlässt. Iris RGB setzt genau dazwischen an.

Die Lichter steuert ein kleiner Dienst in Rust, die Oberfläche ist nur ein Fenster, das man schließen kann. Für den Dienst gelten harte Grenzen: unter 60 MB Arbeitsspeicher, unter einem Prozent CPU bei 60 Bildern pro Sekunde. Ein globaler Begrenzer prüft vor jeder Ausgabe Blinkfrequenz und Helligkeit, damit kein Effekt stärker flackert, als WCAG 2.3.1 erlaubt.

Das Projekt ist in früher Entwicklung, der Installer läuft bereits auf einem echten PC. Der Quellcode ist noch privat, geplant ist eine Veröffentlichung unter GPL.
