---
title: WinCleaner
summary: Disk-cleanup tool for Windows — duplicate detection via perceptual hashing, NTFS fast scan, hard-link deduplication.
stack: ["C#", ".NET"]
repo: https://github.com/clemensjl/WinCleaner
image: /images/projects/wincleaner.svg
order: 1
featured: true
---

WinCleaner cleans up full Windows drives without blindly deleting things. Instead of comparing file names, it detects duplicates via perceptual hashing — even when files were renamed or slightly changed.

The scan reads NTFS structures directly, which makes it much faster than a classic directory walk. Duplicates are not deleted but deduplicated via hard links: space is freed while every path keeps working.

Results end up in an HTML report with a treemap that shows at a glance where the space went.
