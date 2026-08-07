---
title: authcodegenerator
summary: Python-Package für Auth-Codes, die man vorlesen und tippen kann — BOLD-MAPLE-0 statt 483920.
stack: ["Python", "HMAC"]
repo: https://github.com/clemensjl/authcodegenerator
order: 8
featured: false
---

Sechsstellige Zahlencodes sind am Telefon eine Zumutung — man verhört sich, vertippt sich, muss nachfragen. Der Generator erzeugt stattdessen Codes im Format Adjektiv-Nomen-Ziffer, etwa `BOLD-MAPLE-0`. Die Ausgabe ist deterministisch: dasselbe Secret und derselbe Identifier ergeben immer denselben Code, ein optionaler `counter` liefert mehrere Codes pro Identifier.

Darunter läuft HMAC-SHA256 über Identifier und Counter; aus dem Digest werden Adjektiv (81 Wörter), Nomen (118 Wörter) und Ziffer gezogen — 95.580 mögliche Codes. Das reicht für einen merkbaren Challenge-Code, ersetzt aber bewusst kein Secret mit hoher Entropie. Package mit einer öffentlichen Funktion `generate_auth_code(secret, identifier, counter=0)`, pytest-Tests, nur Standardbibliothek, ab Python 3.9, MIT.
