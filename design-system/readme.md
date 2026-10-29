# Aleksandr Mežennõi — Design System

Personal brand system for **Aleksandr Mežennõi**, a designer based in **Tallinn, Estonia**. One product surface: a dark, minimal, black-white-grey **portfolio / CV landing page**.

## Sources
No codebase, Figma or brand files were provided. The direction is derived from four reference screenshots (uploaded by the user, stored in `uploads/`):
- `uploads/Opera Снимок_2026-10-08_211712_www.mohitsingh.cloud.png` — social-link button row (www.mohitsingh.cloud)
- `uploads/Opera Снимок_2026-10-08_211644_www.mohitsingh.cloud.png` — full page: serif section titles, inline tool chips, experience tree, project cards
- `uploads/Opera Снимок_2026-10-08_211550_anticode.framer.website.png` — products list, FAQ accordions, contact form, floating left dock (anticode.framer.website)
- `uploads/Opera Снимок_2026-10-08_211534_anticode.framer.website.png` — hero "Hi. I'm … / Designer from [City]", blog/products/stack rows, newsletter capsule

These are *references for mood and patterns*, not this brand's own UI. Everything here is an original system inspired by them. **No logo was supplied** — the name is set in type wherever a mark would go.

## Index
- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `components/components.css` — component classes (`am-*`)
- `components/` — React primitives (see below)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/portfolio/` — click-through landing (Home, Work, Writing, CV, Contact)
- `thumbnail.html`, `SKILL.md`

## Components
- **core/** Icon — Lucide glyph via CDN mask, tinted with currentColor
- **actions/** Button (primary / secondary / ghost · sm / md / lg), IconButton
- **content/** Tag, Badge, SectionHeader, ListRow, Accordion, ProjectCard, ExperienceItem
- **forms/** Input, Textarea, InlineForm
- **navigation/** Dock

Intentional additions: **Icon** — a wrapper so every component draws Lucide glyphs consistently. All components are a from-scratch set (no source inventory existed), sized to what a portfolio needs.

## UI kits
- `ui_kits/portfolio/index.html` — Portfolio landing. Content in `data.js` is placeholder (projects, employers and dates are illustrative).

---

## CONTENT FUNDAMENTALS
- **Voice:** first person, warm, understated. "I", never "we". Talk *to* the visitor as "you" only in CTAs.
- **Openers are greetings:** "Hi, I'm Aleksandr." / "Designer from Tallinn". Short declarative sentences with full stops.
- **Emphasis by weight, not colour:** key words in a paragraph go `--text-strong` + weight 500 against muted body ("I care about **clarity**, quiet interfaces and the **last 5%**").
- **Section titles are conversational and short:** "Selected work", "Story so far", "Tools I reach for", "Let's talk". Questions are fine: "Got a project in mind? Let's make it real."
- **Casing:** sentence case everywhere. Button labels Title-ish single words ("Email", "Resume", "Subscribe"). Badges are mono UPPERCASE ("NEW", "AVAILABLE").
- **Meta is factual and mono:** "Aug 7, 2026", "2024 — Present · Tallinn · Remote". Middle-dot `·` separates facets; em dash `—` for ranges.
- **Light humour allowed, one line max** ("Each one shipped, or taught me why it shouldn't."). No hype words ("revolutionary", "passionate").
- **No emoji.** Location detail (coordinates, temperature superscript "4°") adds a sense of place instead.

## VISUAL FOUNDATIONS
- **Colour:** strictly greyscale. Page `#0F0F0F`, cards `#151515`, raised chips `#1A1A1A`, hover `#1F1F1F`. Text white → `#EDEDED` → `#A3A3A3` → `#6B6B6B`. The only hue is `--signal-live` green for the "available"/current dot. Primary CTA is solid white with black text.
- **Type:** Geist (sans, UI + display), EB Garamond (section titles, editorial display, italics for asides), Geist Mono (dates, meta, project descriptions, badges). Display 36px/500/-0.025em; body 15/1.6; small 13; meta 12 mono. Hero second line drops to `--text-subtle` grey for a two-tone headline.
- **Layout:** one centred column (680px; 560 for forms) with 64px between sections. Generous top whitespace (~96px). Navigation is a floating frosted Dock fixed at left-centre. Footer is a single mono line above a hairline.
- **Backgrounds:** flat near-black. No gradients except: a top `--sheen-top` light-leak on featured media and `--fade-bottom` protection under overlaid captions. Optional subtle 135° hatching for empty image slots.
- **Imagery:** desaturated — `grayscale(1)` at rest, colour on hover. Cool-neutral, contrasty screenshots and B&W portraits. Media always sits inside a 4px-inset frame of the card.
- **Borders:** white-alpha hairlines — 6% (row separators), 9% (default controls/cards), 16% (hover), 48% (focus). Lists are separated by hairlines, not cards.
- **Shadows/elevation:** almost none; depth = border + `inset 0 1px 0 rgba(255,255,255,.05)` top highlight. Real drop shadow only on the floating Dock / overlays.
- **Radii:** 4 (badges) · 6 (tags, sm buttons) · 8 (buttons, inputs, thumbs) · 12 (cards) · 16 · full (dock, icon buttons).
- **Cards:** `--surface-card`, 1px 9% border, 12px radius, 4px internal padding around media, inset highlight. Hover strengthens border only — no lift.
- **Hover:** surfaces step one grey lighter, border to 16%, text links fade to muted. Images regain colour and scale 1.02.
- **Press:** `scale(.97)`, 120ms. **Focus:** 2px white-48% ring offset by page colour.
- **Motion:** ease-out `cubic-bezier(.22,1,.36,1)`; 120ms (colour), 200ms (chevrons, tooltips), 420ms (accordion height, image reveal). No bounces. The live dot has a slow 2s pulse — the only looping animation.
- **Transparency & blur:** only the Dock / sticky overlays use `rgba(15,15,15,.72)` + `blur(14px)`.
- **Inline highlights:** a city or keyword in a headline may sit in a raised chip (`.am-hl`). Tools inside prose become inline Tags.

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) line icons (1.5–2px stroke, rounded caps), loaded from CDN `unpkg.com/lucide-static@0.460.0/icons/<name>.svg` and painted via CSS mask so they inherit `currentColor`. Use the `Icon` component.
- **Substitution flag:** the references use a mix of Lucide-like line icons and brand glyphs; no icon files were provided, so Lucide is the chosen match. Brand icons (figma, framer, dribbble, linkedin, github, instagram) are Lucide's monochrome versions — never full-colour logos.
- **Sizes:** 12 (inline links), 14 (buttons), 16 (icon buttons, dock), 18–20 (row thumbs).
- **Colour:** muted grey at rest, white on hover/active. Never coloured.
- **No emoji.** Unicode used as typographic glyphs only: `·` separators, `—` ranges, `°` superscripts, `→`/`↗` replaced by Lucide arrows in UI.
- **Logo:** none provided — use the name in EB Garamond (see Brand → Wordmark card).

## Fonts
Google Fonts substitutes (no font files supplied): **Geist**, **Geist Mono**, **EB Garamond**, self-hosted in `fonts/` (declared in `tokens/fonts.css`, preloaded in each page head).
