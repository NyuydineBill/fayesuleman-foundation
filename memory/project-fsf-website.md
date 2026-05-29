---
name: project-fsf-website
description: Faye Suleiman Foundation charity website — Next.js 16, React 19, Tailwind CSS v4, world-class UI design system
metadata:
  type: project
---

Faye Suleiman Foundation (FSF) — charity NGO website built with Next.js 16.2.6, React 19, Tailwind CSS v4.

**Why:** Multi-cause humanitarian org in Cameroon; needs world-class UI to attract international donors and partners.

**Stack:** Next.js 16 App Router, TypeScript, Tailwind v4 (`@import "tailwindcss"` + `@theme inline`), Playfair Display + Inter fonts.

**Design system:** Navy (#0D2137), Gold (#C8932A), Sky (#2E7DC4), Cream (#FAF7F2). Custom utilities: `.hero-text-shadow`, `.caption-shadow`, `.card-hover`, `.grain`. Text muted = #475569 (WCAG AA compliant).

**Pages:** /, /about, /contact, /donate, /impact, /news, /news/[slug], /partners, /programs, /transparency, /volunteer.

**How to apply:** All data lives in `src/lib/data.ts`. Components are in `src/components/`. All pages are static/SSG.
