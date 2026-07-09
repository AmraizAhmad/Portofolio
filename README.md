# Amraiz Ahmad — Cyber Security Portfolio

A premium, recruiter-ready portfolio for a BS Cyber Security student, built with Next.js 15,
React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready hooks, and a subtle Three.js
particle background. Dark, modern, and free of hacker clichés.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with custom design tokens (see `tailwind.config.ts`)
- **Framer Motion** for scroll reveals and micro-interactions
- **Three.js** for the ambient particle background in the hero
- **Lenis** (`@studio-freight/lenis`) for smooth scrolling
- **Lucide React** + **React Icons** for iconography
- GitHub REST API integration for a live contribution graph + latest repos

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before you deploy

1. Read `public/README-ASSETS.md` and drop in your profile photo, resume PDF, OG image,
   and favicon.
2. Update the site URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
   (currently placeholder `https://amraizahmad.dev`).
3. Wire `app/api/contact/route.ts` to a real email provider (Resend, SendGrid, etc.) —
   it currently logs submissions to the server console.
4. Update `lib/data.ts` with your real project repo names/URLs as they go live —
   this file is the single source of truth for all content shown across the site
   (hero, about, skills, projects, certifications, resume page).

## Project structure

```
app/
  layout.tsx          — fonts, metadata, global providers
  page.tsx            — homepage, assembles all sections
  resume/page.tsx      — standalone ATS-friendly resume
  not-found.tsx        — custom 404
  sitemap.ts, robots.ts, manifest.ts, icon.svg — SEO/PWA basics
  api/contact/route.ts — contact form handler
components/
  layout/              — Navbar, Footer
  sections/            — Hero, Terminal, About, Skills, Projects,
                          Certifications, GitHubShowcase, Contact
  ui/                   — LoadingScreen, CursorGlow, ScrollProgress,
                          ParticleBackground
  providers/            — Lenis smooth scroll provider
lib/
  data.ts              — all site content (single source of truth)
  utils.ts             — cn() class merge helper
```

## Roadmap (architecture is ready for)

- AI chatbot widget (add as a new component in `components/ui/`, mount in `layout.tsx`)
- Blog / CTF write-ups (`app/blog/[slug]/page.tsx` with MDX)
- Hack The Box / TryHackMe stats integration (new section component + API route)
- Admin dashboard + visitor analytics (separate authenticated route group)

## Deployment

Optimized for Vercel — push to GitHub and import the repo at vercel.com/new.
No environment variables are required for the base site to build and run.
