---
title: Soul Codes App
summary: "Web-App für Elite Leaders: aus Name, Geburtsdatum, Uhrzeit und Ort entsteht eine Auswertung über acht Systeme, von Human Design bis Astrocartographie, in fünf Sprachen."
stack: ["JavaScript", "Node.js", "SQLite", "Docker"]
role: Kundenprojekt, Entwicklung im Team
live: https://soulcodes.app
image: /images/projects/soul-codes.jpg
imageAlt: "Soul Codes App: Auswertung einer Demo-Person mit den Bereichen Human Design, Numerologie, Astrologie, Astrocartographie, chinesische Metaphysik, Kabbala, Maya und keltisches Baumhoroskop."
order: 2
featured: true
flagship: 4
variant: stage
preview: soul-codes
facts:
  - { value: "8", label: "Systeme" }
  - { value: "5", label: "Sprachen" }
story:
  - title: "Vier Angaben, acht Systeme"
    text: "Name, Geburtsdatum, Uhrzeit und Ort genügen. Daraus rechnet die App Human Design, Numerologie, Astrologie, Astrocartographie, chinesische Metaphysik, Kabbala, Maya und das keltische Baumhoroskop."
  - title: "Das Geburtschart, im Browser berechnet"
    text: "Die Planetenpositionen entstehen direkt auf dem Gerät, ohne dass Geburtsdaten verschickt werden. Ein Tipp auf ein Symbol oder ein Haus erklärt, worum es dort geht."
  - title: "Die eigenen Linien auf der Weltkarte"
    text: "Die Astrocartographie legt für jeden Planeten MC, IC, AC und DC über die Karte, markiert den Geburtsort und zeigt, wo sich mehrere Linien kreuzen."
  - title: "Eine Auswertung, fünf Sprachen"
    text: "Deutsch, Englisch, Spanisch, Portugiesisch und Französisch lassen sich jederzeit umschalten, samt allen Deutungstexten."
---

Die Soul Codes App ist das Produkt von Elite Leaders: eine Beratungs-App, die aus wenigen Geburtsangaben einen ausführlichen Report über acht Systeme erstellt. Seit dem Start am 15. September 2026 läuft sie auf soulcodes.app, der Zugang wird in Paketen über Digistore24 verkauft.

Die Auswertung selbst ist eine einzige, sehr große Web-Datei, die alles im Browser berechnet. Planetenpositionen kommen aus astronomy-engine, die Deutungstexte liegen als Textbanken in der App. Davor steht ein schlanker Node.js-Server ohne npm-Abhängigkeiten, mit SQLite für Konten und Pakete, betrieben in Docker hinter Caddy.

Ich arbeite im Team mit an der App und am Server. Von mir stammen unter anderem die spanische, portugiesische und französische Fassung mit allen Deutungsbanken, Korrekturen an der Astrocartographie-Karte und die Suchmaschinen-Anbindung der Startseite mit strukturierten Daten, Sitemap und IndexNow.
