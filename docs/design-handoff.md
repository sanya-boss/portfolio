# Handoff: Aleksandr Mežennõi — Portfolio site (Portfolio · About · CV · 404)

## Overview
Personal portfolio for a graphic & web designer from Tallinn. Four pages:
- **Portfolio** (`Portfolio.dc.html`) — landing: hero, tools, experience, education, projects, contacts, hidden Plinko mini-game.
- **About** (`About.dc.html`) — personal story with two photos and contacts.
- **CV** (`CV.dc.html`) — one-page A4 résumé on an "old paper" sheet, printable to PDF.
- **404** (`404.dc.html`) — not-found page; deploy as `404.html` at site root for GitHub Pages.

All pages are trilingual (EN / ET / RU) with a dark/light theme. Language and theme persist across pages via `localStorage` keys `am_lang` (`en|et|ru`, default `en`) and `am_theme` (`dark|light`, default `dark`).

## About the Design Files
The files in this bundle are **design references created in HTML** — working prototypes showing intended look and behavior, **not production code to copy directly**. Recreate them in the target codebase's environment (React/Next.js, Astro, Vue…) using its patterns. If no codebase exists yet, a static-site framework (Astro or Next.js static export) is a good fit; deploy target mentioned by the owner is GitHub Pages.

The `.dc.html` files are "Design Components": open them directly in a browser (they load `support.js`). Markup is in `<x-dc>…</x-dc>`; logic is the `class Component` in the `<script type="text/x-dc">` block (`renderVals()` returns template values; `{{ }}` holes are plain lookups). `<x-import component-from-global-scope="AleksandrMeEnnIDesignSystem_ba8917.X">` mounts a design-system React component from `_ds/.../_ds_bundle.js`.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy and interactions. Recreate pixel-perfectly.

## Design system (bundled in `_ds/aleksandr-me-enn-i-design-system-…/`)
Read `readme.md` there first. Key rules:
- **Colour:** strictly greyscale. Dark: page `#0F0F0F`, card `#151515`, raised `#1A1A1A`, hover `#1F1F1F`; text `#FFFFFF → #EDEDED → #A3A3A3 → #6B6B6B`. Only hue: `--signal-live` green (current-job pulse dot). Primary CTA = white bg, black text. Borders are white-alpha hairlines 6% / 9% / 16% / 48%.
- **Light theme** (applied at runtime by overriding CSS vars on `<html>`): see `LIGHT` object in any page's logic — page `#F2F2F2`, card `#FFFFFF`, raised `#F7F7F7`, text `#0A0A0A / #1A1A1A / #4A4A4A / #6B6B6B`, borders black-alpha 8/12/22/55%, live `#15803D`.
- **Type:** Geist (sans, everything), EB Garamond (section titles, display serif, italic asides). Geist Mono is **disabled site-wide** by owner request: `:root{--font-mono:var(--font-sans) !important}`. Display 36/500/-0.025em; body 15/1.6; meta 12.
- **Layout:** one centered column `--container` (680px), 20px side padding, 64px between sections, ~112px top.
- **Radii:** 4 · 6 · 8 · 12 (cards) · full (dock, icon buttons). Motion: `cubic-bezier(.22,1,.36,1)`; 120ms colour, 200ms small, 420ms height/reveals.
- **Icons:** Lucide via CDN mask (`unpkg.com/lucide-static@0.460.0/icons/<name>.svg`); Claude logo from simple-icons CDN.
- Tokens: `tokens/*.css`; component classes `components/components.css` (`am-*`); React primitives in `_ds_bundle.js`: Button, IconButton, Icon, Tag, Badge, SectionHeader, ListRow, ProjectCard, ExperienceItem, Dock.

## Shared shell (all pages)
- **Desktop (≥900px; CV ≥1000px):** floating frosted pill fixed at left-center (`left:16px`, `surface-overlay` + `blur(14px)`, `shadow-md`). Top→bottom: language buttons ENG / EST / RUS (44×28, gap 6) with a sliding highlight rectangle (measured to the active slot, inset 2px, top item extends 10px up with radius `20 20 7 7`, others 7px; transition transform/radius 420ms); divider; nav IconButtons Portfolio (house) · About (user) · CV (file-text) — current page shown `active`; divider; theme IconButton (sun/moon). IconButtons navigate via `window.location.href` (DS IconButton is a `<button>`, no href).
- **Mobile:** same controls as a horizontal pill fixed bottom-center (`bottom:16px`), 44px touch targets; pages add bottom padding so content isn't covered.
- **Theme toggle:** uses `document.startViewTransition` (380ms) when available.
- **Footer:** hairline + `© 2026 Aleksandr Mežennõi` (meta) + ghost sm Button.

## Screens

### 1. Portfolio
Order: hero → Tools I use? → Story so far → Basics → Selected work → Contact → footer → Plinko.
- **Hero:** two-tone H1 — line 1 greeting (strong), line 2 "Designer from" (subtle) + city in raised chip `.am-hl` ("Tallinn"). Mobile: H1 34px, line 2 forced to one line with JS shrink-to-fit. Lead paragraph with **bold** keywords (`text-strong`, 500). Meta line "Tallinn, Estonia · 59.43°N 24.72°E". CTAs: primary "About me" → About page; "Email" button copies `aleks.mezenn@gmail.com` (copy icon rotates/scales into a check, resets after 1.8s); ghost "CV" → CV page.
- **Tools I use?:** serif H2; paragraph with inline tool Tags (logo glyph + name): Illustrator, Photoshop, Figma, Claude Design, Claude Code, GitHub. "Show all" expands (grid-rows 0fr→1fr, 420ms) a tag list incl. Branding, Print, Graphic/Web design, Packaging, SMM, SEO.
- **Story so far** ("5+ years of hands-on experience."): DS ExperienceItem list (logo 32px, org, tree line to roles). Entries: Freelance (current, pulsing green dot) — Freelance Designer, "Present · Remote · Full-time", expandable detail; Kaitsevägi (white crest logo) — Conscript service 01.2026–08.2026, expandable detail; Snape OÜ (white logo, "FEATURED" outline badge) — Graphic & Brand Designer, "2025 · 6 months · Full-time", detail = 5 bullets + Tools / Areas tag rows; Freelance — 2021–2025 · Remote. Detail opens/closes with height+fade animation. Logos invert to black in light theme.
- **Basics:** label/value rows separated by hairlines: Education (Tallinna Polütehnikum — IT specialist, sub-line grey; Tallinna Vanalinna Kunstikeskuse Disainikool — Media Design, coursework line grey), Languages tags.
- **Selected work** ("My recent projects."): DS ProjectCards (media left / body right; stacked on mobile). Media = muted, looping, autoplay-on-scroll video (IntersectionObserver, 25% threshold; cannot be paused; no filters; 16:9 contain). Body: title, one-line description, tool "stack" (overlapping round chips Ai · Ps · Claude Code · Web Design · Branding Design; on hover the stack spreads and each chip expands to show its label; on mobile all labels shown as flat chips), action button "Visit site ↗" (new tab). Projects: SARLE (sarle.ee), QUEEN OF THE BALTIC (button disabled "Work in progress", dashed), A-MEZTRANS (a-meztrans.ee), BLACK ANTARRA (antarra.ee).
- **Contact:** serif display "Always on the line." + superscript "almost always"; lead; ListRows: email (mailto), phone `+372 5822 6814` (tel), "Tallinn, Estonia" with live Tallinn clock meta `HH:MM · UTC+3` (Intl, tz `Europe/Tallinn`, updates every second). Buttons: "Email" (copy, same as hero), ghost "CV". Mobile: heading one line, shrink-to-fit.
- **Plinko (easter egg, very bottom):** collapsed header row "Plinko — if you suddenly got bored" (aside hidden on mobile) + small score + "Play" button vertically centered. Opening animates height 460ms ease-out-quart while scrolling the page so the panel stays fully in view (24px from viewport bottom). Inside: canvas board (left) + side panel (score 40px with count-up + scale bump, rounds, "Drop the ball" button, "+N points" last hit; +150 shown in gold `oklch(0.84 0.13 85)` / light `oklch(0.58 0.12 80)`). Board: triangular peg rows (top 2 pegs and the two outer bottom pegs removed), 9 bins `150 75 40 25 0 25 40 75 150`, diagonal invisible walls following the triangle, bouncy physics at 0.8 time-scale, spawn randomly between the outermost pegs of the top row (never exactly center). Bin hit: bin dips/springs, ring ripple, floating "+N".
- **Cursor easter eggs (desktop only):** a 180px media card follows the cursor smoothly (lerp 0.18), restarts from frame 1 on each hover: `estonia.gif` over "Tallinn" chip / coordinates / contact city row / "Estonian" tag; `ai-slop.png` over Claude Design / Claude Code tags; `kv-meme.png` over Kaitsevägi org/logo.

### 2. About
Back link "← Back to portfolio" (hover: lighter + arrow nudges left 3px). Two-tone H1: "A designer with an interesting background." / "And a cool scrambler motorcycle." (RU: «Дизайнер с интересным бэкграундом. / И на крутом скрэмблер-мотоцикле.»). Paragraph; two photos side by side in a card frame (4px inset, 4:5, cover, full colour — `assets/about-1.jpg`, `about-2.jpg`); two paragraphs; SectionHeader "Outside of work" + paragraph; CTAs primary "See projects" → Portfolio#projects, ghost "CV"; contact block (same as Portfolio); footer with ghost "Portfolio" button. Mobile bottom padding 96px, desktop 32px. Full copy in all three languages lives in the `I18N` object in the file.

### 3. CV (A4, one page)
Built on `doc-page.js` (explicit pagination, `size="a4"`, one `<section class="page">`). Sheet: paper `#EEE5D1` with two radial gradients (light center, darker edges), ink `#2A2218`/`#1E1810`, secondary `#5C4E3A`/`#6B5A44`, hairlines `rgba(42,34,24,.22)`. Header: name EB Garamond 42px one line (EN: "Aleksandr Mezhenny"; ET: "Aleksandr Mežennõi"; RU: «Александр Меженный»), role 15/500 sans, contacts right-aligned; 1.5px rule. Intro paragraph (sans 14/1.6). Two columns (`1fr 196px`, gap 40): Experience with 92px date column; aside: Education, Tools / Areas / Languages as outline pill chips (22px high, 11.5px). Footer: "Tallinn, 2026" right. Below the sheet (screen only): "Download PDF" (window.print) + ghost "To website", contact block, footer "↑ Back to top". Mobile: sheet scaled with CSS `zoom` to fit width (24px top / 16px gaps unscaled). Print: `print-color-adjust: exact`, all screen chrome hidden.

### 4. 404
Same shell (dock with languages, Portfolio/About/CV nav — none active — and theme). Main column fills viewport height, content vertically centred: serif italic 15px "Error" label; huge "404" EB Garamond 400, 168px (112px mobile), line-height .9, -0.04em; two-tone H1 "This page doesn't exist." / "Or it rode off somewhere." (RU «Такой страницы нет. / Или она уехала кататься.», ET «Sellist lehte pole. / Või see sõitis kuhugi minema.»); muted paragraph (max 52ch); buttons primary "Back to portfolio" (house) · ghost "About me" (user) · ghost "CV". Footer: © line left, "=)" right (sans, meta). `<meta name="robots" content="noindex">`.

## Recent detail changes
- Hero meta line "Tallinn, Estonia · 59.43°N 24.72°E" and contact superscript "almost always" are EB Garamond italic 15px (all pages).
- Project card tool stacks are per-card: SARLE = Ai · SMM · Claude Code · Web Design · Branding Design; QUEEN OF THE BALTIC = Ai · Ps · Claude Code · SMM · Web Design · Branding Design; others = Ai · Ps · Claude Code · Web Design · Branding Design. SMM icon: Lucide megaphone.
- About footer button is "Back to top" (scroll to top); contact→footer gap 48px.
- CV mobile dock: Portfolio · About · theme.
- Cursor peek images (desktop hover, follow cursor with easing): Tallinn → estonia.gif; Estonian tag → estonia.gif; English tag → america.png; Kaitsevägi → kv-meme.png; Claude Code/Design tools → ai-slop.png. All preloaded as blobs.

## Interactions summary
- Language switch: re-renders all copy; highlight slides; mobile fit-text recalculated.
- Theme switch: CSS-var swap on `<html>`, view transition, icon spin-in (520ms).
- Smooth anchor scroll respects `prefers-reduced-motion` (all transitions/animations disabled under reduce).
- Icon buttons: hover bg one step lighter, press `scale(.88)`.

## Assets (`assets/`)
- `about-1.jpg`, `about-2.jpg` — owner photos (About).
- `logo-snape.png`, `logo-kaitsevagi.png` — white-on-transparent org logos (inverted in light theme).
- `estonia.gif`, `ai-slop.png`, `kv-meme.png` — cursor-follow easter-egg media.
- **Videos NOT included** (bundle size limit 30 MB): `sarle.mp4`, `queen.mp4`, `ameztrans.mp4`, `antarra.mp4` — screen recordings of each project site (1920×1080, ~5–9 MB each). Place them in `assets/` with these exact names; recommended re-encode to 720p, no audio, ~2–3 MB each. Without them the project cards show the hatched placeholder.

## Files
- `Portfolio.dc.html`, `About.dc.html`, `CV.dc.html` — the designs (open in a browser).
- `support.js` — Design Component runtime (prototype only).
- `doc-page.js` — A4 page shell used by CV (print geometry).
- `image-slot.js` — placeholder component (prototype only).
- `_ds/…` — the bound design system (tokens, component CSS, React bundle, guide).
