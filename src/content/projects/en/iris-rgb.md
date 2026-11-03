---
title: Iris RGB
summary: "RGB lighting for Windows without an account, ads or telemetry: effects, screen ambient and game integration on top of OpenRGB, with a daemon under 60 MB of RAM."
stack: ["Rust", "Tauri", "OpenRGB"]
order: 12
---

Anyone with RGB hardware from several vendors ends up with one of two options today: a Chromium app that insists on being online and eats memory in the background, or OpenRGB, which drives more than 1,200 devices but leaves effects and screen ambient to plugins. Iris RGB sits right in between.

A small Rust daemon drives the lights; the interface is just a window you can close. The daemon has hard limits: under 60 MB of RAM and under one percent CPU at 60 frames per second. A global limiter checks flash rate and brightness before every output, so no effect flickers more than WCAG 2.3.1 allows.

The project is in early development, and the installer already runs on a real PC. The source is still private; a GPL release is planned.
