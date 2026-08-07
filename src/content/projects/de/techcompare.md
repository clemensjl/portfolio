---
title: TechCompare
summary: Vergleichsseite für 196 Tech-Produkte — die Tabelle kürt pro Spec-Zeile einen Sieger, statt nur Werte nebeneinanderzustellen.
stack: ["TypeScript", "Vite", "Vercel"]
repo: https://github.com/clemensjl/TechCompare
live: https://tech-compare-j1k5.vercel.app
image: /images/projects/techcompare.png
order: 5
featured: true
---

Drei Schritte: Kategorie wählen, Produkte auswählen, Tabelle lesen. Der Unterschied zu einer gewöhnlichen Gegenüberstellung liegt darin, dass die Tabelle mitrechnet. Sie bewertet jede Spec-Zeile — Sieger nur dort, wo sich die Werte tatsächlich unterscheiden, bei Gleichstand werden alle markiert. Das numerische Parsing kommt auch mit Angaben wie „IP68 (6 m)" zurecht. Je Produktspalte zählt eine Bilanz mit Balken die gewonnenen Zeilen, eine Verdict-Zeile benennt den Gesamtsieger, und die Spec-Gruppen dienen als Zwischenüberschriften.

Die Datenbasis umfasst 196 Produkte mit vollständiger Spec-Abdeckung: Wo ein Wert fehlt, steht der Grund dafür statt einer Lücke. Das Glassmorphism-Template ist einem Spec-Sheet-Look gewichen — eine Akzentfarbe, Dark Mode mit kontrastgeprüften Tokens, Monospace mit Tabellenziffern in den Spec-Spalten. Dazu eine Barrierefreiheits-Überarbeitung: Der Produktpicker ist ein echter Dialog mit Focus-Trap und Fokusrückgabe, ergänzt um Skip-Link, `aria-pressed`-Buttons, eine sparsam dosierte Live-Region, 24-px-Ziele, Reduced-Motion-Support und ein „Best"-Label, das nicht allein über Farbe funktioniert. TypeScript und Vite, der Build fährt `tsc --noEmit` mit; deployt auf Vercel.
