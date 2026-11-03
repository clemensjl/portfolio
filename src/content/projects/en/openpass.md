---
title: OpenPass
summary: "A local, end-to-end encrypted password manager with its own sync server. AGPL-licensed, self-hosted, early alpha."
stack: ["Rust", "SQLite", "TypeScript", "Tauri"]
role: Solo project
image: /images/projects/openpass-en.png
order: 6
featured: false
---

A password manager is the one app where you have to trust the vendor the most and can check the least. OpenPass flips that around. The vault is encrypted on your device, the server only ever sees encrypted blobs, and that server is a single Rust binary you run yourself. On a Raspberry Pi, Docker Compose is all you need.

The core is the cryptography: Argon2id for key derivation, XChaCha20-Poly1305 for the vault and ed25519 for signatures, each tested against fixed test vectors. Sync uses vector clocks and immutable revisions, so a conflict never overwrites anything. Both versions are kept instead.

Around that sits a monorepo: a PWA as the web interface, a desktop app built with Tauri, and a browser extension for Chrome and Firefox that only fills in a login after an explicit command and an exact origin check. There is also a generator for passwords and passphrases and a built-in TOTP/HOTP authenticator. Backups are signed with HMAC, and unsigned ones are rejected.

The project deliberately does not call itself 1.0. Native passkey providers, mobile clients, sharing and recovery are listed as open release gates in the feature matrix, and without an independent security audit, OpenPass should not hold the only copy of real credentials. Until then it stays a learning project that runs locally. Nothing has been published yet.
