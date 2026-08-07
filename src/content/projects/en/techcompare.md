---
title: TechCompare
summary: Comparison site for 196 tech products — the table picks a winner per spec row instead of just lining up values.
stack: ["TypeScript", "Vite", "Vercel"]
repo: https://github.com/clemensjl/TechCompare
live: https://tech-compare-j1k5.vercel.app
image: /images/projects/techcompare.png
order: 5
featured: true
---

Three steps: pick a category, pick the products, read the table. What sets it apart from an ordinary side-by-side is that the table does the reasoning. It ranks every spec row — winners only where the values actually differ, ties marked across the board. The numeric parsing holds up against entries like "IP68 (6 m)". Each product column carries a tally with a bar counting the rows it won, a verdict line names the overall leader, and the spec groups double as section headings.

The dataset covers 196 products with complete spec coverage: where a value is missing, the reason is stated instead of leaving a gap. The glassmorphism template gave way to a spec-sheet look — one accent color, dark mode with contrast-checked tokens, monospace with tabular numerals in the spec columns. Alongside it, an accessibility overhaul: the product picker is a real dialog with a focus trap and focus return, plus a skip link, `aria-pressed` buttons, a sparingly used live region, 24px targets, reduced-motion support, and a "Best" label that does not rely on color alone. TypeScript and Vite, with `tsc --noEmit` running as part of the build; deployed on Vercel.
