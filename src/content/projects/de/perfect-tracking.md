---
title: Perfect Tracking
summary: "Kalorien-Tracker mit österreichischen Lebensmitteln: Daten aus dem Bundeslebensmittelschlüssel und Open Food Facts, Suche mit AT-Synonymen und Plausibilitätsprüfung für jeden Eintrag."
stack: ["Expo", "React Native", "TypeScript", "Supabase"]
preview: perfect-tracking
order: 15
---

Die meisten Kalorien-Tracker kennen kein Semmerl und keinen Leberkäse. Perfect Tracking baut deshalb auf dem Bundeslebensmittelschlüssel 4.0 des Max Rubner-Instituts und den österreichischen und deutschen Einträgen von Open Food Facts auf, ergänzt um kuratierte Einträge wie McDonald's Österreich.

Die Suche versteht österreichische Begriffe und merkt sich zuletzt Gegessenes und Favoriten, die Heute-Ansicht zeigt den Tag auf einen Blick. Jeder Nährwert läuft durch eine Plausibilitätsprüfung, damit etwa eine Makrosumme über 100 Gramm pro 100 Gramm nicht durchrutscht.

Die Daten liegen in Supabase mit Row Level Security, die Registrierung läuft nur per Einladungscode. Ein privates Projekt, der Quellcode ist nicht öffentlich.
