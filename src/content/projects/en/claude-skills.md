---
title: Agent Skills for Legal Texts
summary: "16 agent skills for Claude Code, Cursor and Codex: imprint, privacy policy and compliance per jurisdiction instead of US boilerplate."
stack: ["Agent Skills", "Markdown"]
repo: https://github.com/clemensjl/claude-skills
image: /images/projects/claude-skills-en.png
imageAlt: >-
  Cover card: Agent Skills for Legal Texts, MIT licensed, with skills for Austria, Germany, Switzerland, France, Italy, the UK, the US, Australia and EU-level law. Install via npx skills add clemensjl/claude-skills.
order: 8
featured: false
---

Ask a language model for a website imprint and you reliably get German or US law: statutes that do not apply in Austria and wording that is simply wrong. This skill collection changes that: separate rules per jurisdiction, citing the provisions that actually apply.

Nine `legal-*` skills cover imprint, privacy policy and terms for Austria, Germany, Switzerland, France, Italy, the UK, the US, Australia and EU-level law. Four more cover the technical side (cookie consent, vendor review, retention periods, the AI Act) plus three on e-invoicing, Austrian tax rules and localization.

The content is checked against primary sources rather than written from model memory. Where a statement could not be backed up, the skill leaves a visible marker in the draft instead of guessing; every generated text carries a note that it does not replace legal advice.

Install via `npx skills@latest add clemensjl/claude-skills`, MIT licensed.
