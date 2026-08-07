---
title: authcodegenerator
summary: Python package for auth codes you can read aloud and type — BOLD-MAPLE-0 instead of 483920.
stack: ["Python", "HMAC"]
repo: https://github.com/clemensjl/authcodegenerator
order: 8
featured: false
---

Six-digit numeric codes are a pain over the phone — you mishear them, mistype them, have to ask again. This generator produces codes in an adjective-noun-digit format instead, like `BOLD-MAPLE-0`. Output is deterministic: the same secret and identifier always yield the same code, and an optional `counter` issues multiple codes per identifier.

Underneath it runs HMAC-SHA256 over identifier and counter; slices of the digest pick the adjective (81 words), the noun (118 words) and the digit — 95,580 possible codes. Enough for a memorable challenge code, but deliberately not a replacement for a high-entropy secret. Packaged around a single public function, `generate_auth_code(secret, identifier, counter=0)`, with pytest tests, standard library only, Python 3.9+, MIT.
