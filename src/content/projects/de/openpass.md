---
title: OpenPass
summary: Lokaler, ende-zu-ende-verschlüsselter Passwort-Manager mit eigenem Sync-Server, AGPL-lizenziert, selbst gehostet, in früher Alpha.
stack: ["Rust", "SQLite", "TypeScript", "Tauri"]
role: Eigenentwicklung
image: /images/projects/openpass.png
imageAlt: >-
  Cover-Karte: OpenPass, selbst gehostet unter AGPL-3.0, gebaut mit Rust, SQLite, Argon2id, XChaCha20 und Tauri. Pre-Audit-Alpha, noch nicht veröffentlicht.
order: 6
featured: false
---

Passwort-Manager sind die eine Anwendung, bei der man dem Anbieter am meisten vertrauen muss und am wenigsten nachsehen kann. OpenPass dreht das um: Der Tresor wird auf dem Gerät verschlüsselt, der Server sieht nur Blobs, und der Server ist ein einzelnes Rust-Binary, das man selbst betreibt: Auf einem Raspberry Pi genügt Docker Compose.

Der Kern ist die Kryptografie: Argon2id für die Schlüsselableitung, XChaCha20-Poly1305 für den Tresor, ed25519 für Signaturen, jeweils gegen feste Testvektoren geprüft. Die Synchronisation arbeitet mit Vektor-Uhren und unveränderlichen Revisionen: ein Konflikt überschreibt nichts, sondern behält beide Stände.

Drumherum liegt ein Monorepo: eine PWA als Weboberfläche, eine Desktop-App über Tauri, eine Browser-Erweiterung für Chrome und Firefox, die nur nach ausdrücklichem Befehl und exakter Origin-Prüfung ausfüllt, dazu Generator für Passwörter und Passphrasen sowie ein eingebauter TOTP/HOTP-Authenticator. Backups sind HMAC-signiert, unsignierte werden abgelehnt.

Das Projekt nennt sich bewusst nicht 1.0. Native Passkey-Provider, mobile Clients, Sharing und Wiederherstellung stehen als offene Freigabestufen in der Feature-Matrix, und ohne unabhängiges Sicherheitsaudit sollte OpenPass nicht die einzige Kopie echter Zugangsdaten sein. Bis dahin bleibt es ein Lernprojekt, das lokal läuft; nichts davon ist bisher veröffentlicht.
