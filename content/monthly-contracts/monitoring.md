---
title: "Monitoring"
date: 2025-04-15T17:09:20+06:00
description: "Device visibility and remote support over a private Nebula mesh VPN—managed with Nebula Commander and ControlR, without exposing support traffic to the public internet."
layout: page
---

[Back to Monthly Contracts](/monthly-contracts/)

Small problems are cheaper when you catch them early. This add-on gives The Bearded Tek a clear view of the computers covered under your plan and a secure way to connect when you need support—not ad-hoc screen-sharing apps, but a consistent, professional setup.

We start with a private mesh, not the public internet. Covered systems join a [Nebula](https://github.com/slackhq/nebula) mesh VPN that we design and operate with [Nebula Commander](https://nebulacommander.com). Monitoring and remote-assistance traffic stays on that encrypted overlay between your machines and our infrastructure, so customer data involved in support and monitoring is not exposed on the open internet.

On top of that mesh we run [ControlR](https://controlr.app/), an open-source, self-hostable remote access and monitoring platform ([source on GitHub](https://github.com/bitbound/controlr)). A small agent runs on each covered device; it reaches our ControlR deployment through the private network path above. Sessions remain deliberate, logged, and governed by your agreement—not a random remote tool of the week.

## What this covers

- A Nebula mesh VPN layer, built and maintained with [Nebula Commander](https://nebulacommander.com), so support and monitoring connectivity uses private overlay addresses instead of publishing your desktops to the public internet
- A central ControlR dashboard view of covered machines so we can see which systems are online, reachable, and reporting in—useful for spotting an offline workstation or server before the whole office is stuck
- Secure remote diagnostics when appropriate: terminal access, remote logs, and other ControlR features we enable for your environment, so many issues can be triaged without waiting for a truck roll
- Remote hands-on help when your plan includes it: desktop control, file access, and related tools through the same stack, coordinated with you instead of piecing together one-off apps
- Device organization (tags, access rules, and roles as needed) so the right people can be helped without exposing every machine to everyone

## How it works

We enroll each covered PC, Mac, or Linux system (where applicable) into the mesh using Nebula Commander, then install and maintain the ControlR agent so it communicates over that VPN to our ControlR deployment. You approve the scope—who we can access, when, and for what—when we set up or renew the plan. When something looks off or you call in, we already have a sanctioned, mesh-backed path to check logs, run diagnostics, or take control under those terms.

## Good fit for

- Businesses that rely on a handful of critical computers and want their IT provider to see problems sooner
- Teams tired of “download this quick-support link every time” who want a stable, documented remote support channel—and care that support traffic stays off the public internet

## Not included

- Round-the-clock network operations center (NOC) staffing unless we contract for it separately
- Security operations center (SOC)–style threat hunting or full managed detection and response
- Deep application performance monitoring (APM) for custom software without a separate scope of work
- Anything outside the devices, mesh membership, and access paths defined in your agreement

[Back to Monthly Contracts](/monthly-contracts/)
