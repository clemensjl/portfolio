---
title: KernClean
summary: "A disk cleanup tool for Windows: fast NTFS scans through the USN journal, visual duplicate detection and hard-link deduplication."
stack: ["C#", ".NET 8", "WPF"]
repo: https://github.com/clemensjl/kern-clean
image: /images/projects/kern-clean.jpg
order: 1
featured: true
preview: kern-clean
---

KernClean cleans up full Windows drives without deleting things blindly. The scan reads the NTFS USN journal directly, which makes it many times faster than walking the directory tree the classic way.

Exact duplicates are found by SHA-256 hash and deduplicated with hard links: the space is freed and every path still works. Visually similar images, such as renamed, recompressed or slightly edited copies, are found by a separate perceptual hash comparison. They are shown for you to choose from and never merged automatically. The results go into an interactive HTML report with a treemap that shows at a glance where your space went.

It also handles junk and browser cleanup, startup apps and services, reversible privacy tweaks and a clearly labeled secure delete. Nothing changes without your confirmation, deleted files go to the Recycle Bin, and a restore point is created before bigger changes.

A WPF interface and a CLI share the same command registry, and GitHub Actions build a self-contained executable from it. The tool was called WinCleaner until August 2026 and is now part of the Kern brand.
