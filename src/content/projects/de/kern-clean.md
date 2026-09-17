---
title: KernClean
summary: "Aufräum-Tool für Windows: NTFS-Schnellscan über das USN-Journal, visuelle Duplikaterkennung, Hard-Link-Deduplizierung."
stack: ["C#", ".NET 8", "WPF"]
repo: https://github.com/clemensjl/kern-clean
image: /images/projects/kern-clean.png
order: 1
featured: true
preview: kern-clean
---

KernClean räumt volle Windows-Datenträger auf, ohne blind zu löschen. Der Scan liest das NTFS-USN-Journal direkt aus und ist dadurch um ein Vielfaches schneller als ein klassischer Verzeichnis-Walk.

Exakte Duplikate erkennt es über einen SHA-256-Hash und dedupliziert sie per Hard-Link: Der Platz wird frei, alle Pfade funktionieren weiter. Visuell ähnliche Bilder, etwa umbenannte, neu komprimierte oder leicht veränderte Varianten, findet ein separater Vergleich per Perceptual Hash und zeigt sie zur Auswahl an, ohne sie automatisch zusammenzulegen. Das Ergebnis landet in einem interaktiven HTML-Report mit Treemap, der auf einen Blick zeigt, wo der Platz hingeht.

Dazu kommen Junk- und Browser-Cleaning, Autostart- und Dienste-Verwaltung, umkehrbare Privacy-Tweaks und ein bewusst deutlich gekennzeichnetes Secure Delete. Nichts wird ohne Bestätigung verändert, Gelöschtes geht in den Papierkorb, vor größeren Eingriffen entsteht ein Wiederherstellungspunkt.

Es gibt eine WPF-Oberfläche und eine CLI auf derselben Command-Registry; die GitHub Actions bauen daraus eine self-contained Exe. Das Tool hieß bis August 2026 WinCleaner und läuft seither unter der Dachmarke Kern.
