---
title: Claude Skills
summary: "19 agent skills for Claude Code, Cursor and Codex: legal texts for each jurisdiction, compliance in the code and checks for UX and design."
stack: ["Agent Skills", "Markdown"]
repo: https://github.com/clemensjl/claude-skills
image: /images/projects/claude-skills-en.png
category: claude-skills
order: 8
featured: false
---

Agent skills give a coding agent domain knowledge and fixed rules it would not have otherwise. This collection covers two areas: law and compliance, where language models reliably fall back to German or US law, and product quality, where they reliably produce something that looks like a template.

Nine `legal-*` skills write the legal notice (the Impressum many European sites need), privacy policy and terms for Austria, Germany, Switzerland, France, Italy, the UK, the US, Australia and EU-level law, citing the provisions that actually apply. Four more handle the technical side (cookie consent, vendor review, retention periods, the AI Act), and three cover e-invoicing, Austrian tax law and correct localization of names, addresses and numbers.

Three skills are about product quality: a rulebook for usability, forms, accessibility, checkout and cancellation with a list of banned dark patterns, an audit for missing UX details before release, and a skill that de-slops AI-generated interfaces.

The legal content is checked against primary sources, not written from model memory. Where a claim could not be backed up, the skill leaves a visible marker instead of guessing. Every generated text includes a note that it does not replace legal advice.

Install with `npx skills@latest add clemensjl/claude-skills`. MIT-licensed, `design-unslop` under CC BY 4.0.
