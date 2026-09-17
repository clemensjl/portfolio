---
title: KernClean
summary: "Disk-cleanup tool for Windows: NTFS fast scan via the USN journal, visual duplicate detection, hard-link deduplication."
stack: ["C#", ".NET 8", "WPF"]
repo: https://github.com/clemensjl/kern-clean
image: /images/projects/kern-clean.png
order: 1
featured: true
preview: kern-clean
---

KernClean cleans up full Windows drives without blindly deleting things. The scan reads the NTFS USN journal directly, which makes it many times faster than a classic directory walk.

Exact duplicates are detected via a SHA-256 hash and deduplicated through hard links: space is freed while every path keeps working. Visually similar images, such as renamed, recompressed or slightly edited variants, are found by a separate perceptual-hash comparison and shown for selection, without being merged automatically. Results end up in an interactive HTML report with a treemap that shows at a glance where the space went.

On top of that: junk and browser cleaning, autostart and service management, reversible privacy tweaks and a clearly marked secure delete. Nothing changes without confirmation, deleted files go to the recycle bin, and larger operations create a restore point first.

A WPF interface and a CLI share the same command registry; GitHub Actions build a self-contained executable from it. The tool was called WinCleaner until August 2026 and now runs under the Kern umbrella.
