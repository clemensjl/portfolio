---
title: Perfect Tracking
summary: "A calorie tracker that knows Austrian food: data from the German Federal Food Key and Open Food Facts, search with Austrian synonyms and a plausibility check for every entry."
stack: ["Expo", "React Native", "TypeScript", "Supabase"]
order: 15
---

Most calorie trackers have never heard of a Semmerl or Leberkäse. Perfect Tracking therefore builds on version 4.0 of the German Federal Food Key (BLS) from the Max Rubner Institute and the Austrian and German entries of Open Food Facts, plus curated entries such as McDonald's Austria.

Search understands Austrian terms and remembers recent foods and favorites, and the Today view shows the day at a glance. Every nutrient value goes through a plausibility check, so a macro total above 100 grams per 100 grams never slips through.

Data lives in Supabase with row level security, and sign-up works by invite code only. A private project; the source is not public.
