---
title: Iris RGB
summary: "RGB lighting for Windows with no account, ads or telemetry: effects, screen ambient lighting and game integration built on OpenRGB, with a background service that uses under 60 MB of RAM."
stack: ["Rust", "Tauri", "OpenRGB"]
preview: iris-rgb
image: /images/projects/iris-rgb.jpg
order: 12
---

If you own RGB hardware from several brands, you currently end up with one of two options: a Chromium app that wants to be online all the time and eats memory in the background, or OpenRGB, which supports more than 1,200 devices but leaves effects and screen ambient lighting to plugins. Iris RGB sits right in between.

A small Rust service drives the lights, and the interface is just a window you can close. The service has hard limits: under 60 MB of RAM and under one percent CPU at 60 frames per second. Before anything is sent to the lights, a global limiter checks flash rate and brightness, so no effect flickers more than WCAG 2.3.1 allows.

The project is in early development, and the installer already runs on a real PC. The source code is still private, with a GPL release planned.
