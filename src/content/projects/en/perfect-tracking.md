---
title: Perfect Tracking
summary: "A calorie tracker that knows Austrian food: data from the German Federal Food Key and Open Food Facts, search that understands Austrian food names and a plausibility check on every entry."
stack: ["Expo", "React Native", "TypeScript", "Supabase"]
preview: perfect-tracking
order: 15
---

Most calorie trackers have never heard of a Semmerl, the Austrian bread roll, or of Leberkäse. So Perfect Tracking builds on version 4.0 of the German Federal Food Key (BLS) from the Max Rubner Institute and on the Austrian and German entries in Open Food Facts, plus curated entries such as McDonald's Austria.

Search understands Austrian food names and remembers what you ate recently and your favorites. The Today view shows the whole day at a glance. Every nutrient value goes through a plausibility check, so a macro total above 100 grams per 100 grams, for example, never slips through.

Data is stored in Supabase with row level security, and you can only sign up with an invite code. It is a private project, and the source code is not public.
