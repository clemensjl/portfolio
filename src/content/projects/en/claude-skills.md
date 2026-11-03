---
title: Agent Skills for Legal Texts
summary: "17 agent skills for Claude Code, Cursor and Codex: legal notice, privacy policy and compliance written for each jurisdiction instead of copied from US templates."
stack: ["Agent Skills", "Markdown"]
repo: https://github.com/clemensjl/claude-skills
image: /images/projects/claude-skills-en.png
order: 8
featured: false
---

Ask a language model for a website's legal notice and you will almost always get German or US law: rules that do not apply in Austria and wording that is simply wrong. This skill collection fixes that with separate rules for each jurisdiction, citing the provisions that actually apply.

Nine `legal-*` skills cover the legal notice (the Impressum that many European sites need), privacy policy and terms for Austria, Germany, Switzerland, France, Italy, the UK, the US, Australia and EU-level law. Four more handle the technical side (cookie consent, vendor review, retention periods, the AI Act), and three cover e-invoicing, Austrian tax law and localization. The newest skill checks apps and websites for missing UX details before they go live.

The content is checked against primary sources, not written from model memory. Where a claim could not be backed up, the skill leaves a visible marker in the draft instead of guessing. Every generated text includes a note that it does not replace legal advice.

Install with `npx skills@latest add clemensjl/claude-skills`. MIT-licensed.
