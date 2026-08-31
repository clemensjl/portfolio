---
title: KernClean
summary: Aufräum-Tool für Windows — NTFS-Schnellscan über das USN-Journal, visuelle Duplikaterkennung, Hard-Link-Deduplizierung.
stack: ["C#", ".NET 8", "WPF"]
repo: https://github.com/clemensjl/kern-clean
image: /images/projects/kern-clean.png
order: 1
featured: true
---

KernClean räumt volle Windows-Datenträger auf, ohne blind zu löschen. Statt nur Dateinamen zu vergleichen, erkennt es Duplikate über einen visuellen Hash — auch bei umbenannten, neu komprimierten oder leicht veränderten Bildern.

Der Scan liest das NTFS-USN-Journal direkt aus und ist dadurch um ein Vielfaches schneller als ein klassischer Verzeichnis-Walk. Gefundene Duplikate werden nicht gelöscht, sondern per Hard-Link dedupliziert: Der Platz wird frei, alle Pfade funktionieren weiter. Das Ergebnis landet in einem interaktiven HTML-Report mit Treemap, der auf einen Blick zeigt, wo der Platz hingeht.

Dazu kommen Junk- und Browser-Cleaning, Autostart- und Dienste-Verwaltung, umkehrbare Privacy-Tweaks und ein bewusst deutlich gekennzeichnetes Secure Delete. Nichts wird ohne Bestätigung verändert, Gelöschtes geht in den Papierkorb, vor größeren Eingriffen entsteht ein Wiederherstellungspunkt.

Es gibt eine WPF-Oberfläche und eine CLI auf derselben Command-Registry; die GitHub Actions bauen daraus eine self-contained Exe. Das Tool hieß bis August 2026 WinCleaner und läuft seither unter der Dachmarke Kern.
