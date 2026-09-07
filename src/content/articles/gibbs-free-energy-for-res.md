---
title: Gibbs Free Energy for Reservoir Engineers 
description: Just Enough to be Dangerous 
author: Leytzher Muro
authorInitials: LM
pubDate: 2026-09-07
readTime: 8 min read
tags:
  - PVT & Thermodynamics
  - Julia
status: published
---
If you are a reservoir engineer, like me, you have probably been working with PVT and Equations of State for years. You know,  bubble points, dew points, flash calculations, Peng–Robinson, all the good stuff.

And yet, if someone asked me, **"Can you explain what Gibbs free energy actually is?"**, I would probably panic and mumble something along the lines of *"the energy available to do useful work…"*

Which sounds reasonably clever.

Until they ask:

**"Okay… but what does that actually mean?"**

And that's probably where I would start looking for the nearest exit.

The funny thing is that Gibbs free energy is sitting underneath a lot of what we do in PVT. Phase equilibrium, fugacity, flash calculations, they all lead back to it.

So I decided to go back and understand it properly. And because I know myself well enough to know that six months from now I'll probably have forgotten half of it, I thought I'd write down what I learn along the way, partly to share it, and partly as a reference for my future self.

I'm not a thermodynamicist, and this isn't meant to be a textbook. I'm a reservoir engineer trying to understand the tools I've been using for years a little more deeply.

And, as it turns out, the basic idea is nowhere near as frightening as I had made it in my head.

## Enthalpy, Entropy and All That…

If you open Appendix A of Phase Behavior of Petroleum Reservoir Fluids by Pedersen, which, by the way, I recommend you read, you are greeted by the definition of Gibbs free energy:


