---
title: authcodegenerator
summary: "A Python package for auth codes you can read out loud and type: BOLD-MAPLE-0 instead of 483920."
stack: ["Python", "HMAC"]
repo: https://github.com/clemensjl/authcodegenerator
image: /images/projects/authcodegenerator.png
order: 11
featured: false
---

Six-digit codes are a pain over the phone: you mishear them, mistype them and have to ask again. This generator makes codes in an adjective-noun-digit format instead, such as `BOLD-MAPLE-0`. The output is deterministic. The same secret and identifier always give the same code, and an optional `counter` issues several codes per identifier.

Under the hood it runs HMAC-SHA256 over the identifier and counter. Parts of the digest pick the adjective (81 words), the noun (118 words) and the digit, for 95,580 possible codes. That is enough for a memorable challenge code, but it is deliberately not a replacement for a high-entropy secret. The package has one public function, `generate_auth_code(secret, identifier, counter=0)`, comes with pytest tests, uses only the standard library, needs Python 3.9 or later and is MIT-licensed.
