---
title: OpenPass
summary: A local, end-to-end encrypted password manager with its own sync server, AGPL-licensed, self-hosted, in early alpha.
stack: ["Rust", "SQLite", "TypeScript", "Tauri"]
role: Solo project
image: /images/projects/openpass-en.png
imageAlt: >-
  Cover card: OpenPass, self-hosted under AGPL-3.0, built with Rust, SQLite, Argon2id, XChaCha20 and Tauri. Pre-audit alpha, not released yet.
order: 6
featured: false
---

A password manager is the one application where you have to trust the vendor most and can verify least. OpenPass inverts that: the vault is encrypted on the device, the server only ever sees blobs, and that server is a single Rust binary you run yourself: on a Raspberry Pi, Docker Compose is enough.

The core is the cryptography: Argon2id for key derivation, XChaCha20-Poly1305 for the vault, ed25519 for signatures, each checked against fixed test vectors. Sync works with vector clocks and immutable revisions: a conflict overwrites nothing and keeps both versions instead.

Around it sits a monorepo: a PWA as the web interface, a desktop app via Tauri, a browser extension for Chrome and Firefox that only fills after an explicit command and an exact origin check, plus a password and passphrase generator and a built-in TOTP/HOTP authenticator. Backups are HMAC-signed, and unsigned ones are rejected.

The project deliberately does not call itself 1.0. Native passkey providers, mobile clients, sharing and recovery are tracked as open release gates in the feature matrix, and without an independent security audit OpenPass should not be the only copy of real credentials. Until then it stays a learning project running locally; none of it is published yet.
