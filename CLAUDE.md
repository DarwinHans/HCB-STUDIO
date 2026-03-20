# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Build production bundle to ./dist/
pnpm preview    # Preview production build locally
```

No lint or test commands are configured.

## Architecture

This is a single-page static site for HCB Studio (a barbershop in Valdivia, Chile), built with Astro 6. The page is composed entirely of 10 sequential Astro components in `src/pages/index.astro`.

**Content is centralized in `src/data/site.ts`** — all business content (services, team, testimonials, contact info, SEO metadata, JSON-LD schema) lives here. Components import and render from this file. When updating content, this is the only file that needs to change.

**`src/layouts/BaseLayout.astro`** defines the design system: CSS custom properties (colors, spacing), global component styles (`.btn`, `.card`, `.container`, `.eyebrow`), and font imports. All 10 components inherit from this.

**Component pattern**: Each component in `src/components/` is self-contained with scoped `<style>` blocks. They accept no props — they import directly from `site.ts`.

## Design System

CSS variables (defined in `BaseLayout.astro`):
- `--gold: #d9a12d` — primary accent color
- `--bg: #171311` — dark brown background
- `--text: #f4eee7` — off-white text

Typography: Cormorant Garamond (headings, serif), Manrope (body, sans-serif) via Google Fonts.

Responsive breakpoints: 900px, 700px, 560px, 520px, 420px. Use `clamp()` for fluid sizing.

## Key Details

- Package manager: **pnpm** (Node >=22.12.0)
- Booking integration: AgendaPro (URL in `site.ts` under `booking.url`)
- Production URL: `https://hcbstudio.cl` (set in `astro.config.mjs` for sitemap generation)
- Services accordion uses native `<details>`/`<summary>` HTML elements (no JS needed)
