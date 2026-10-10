# Aleksandr Mežennõi — Portfolio

Personal site of a graphic & web designer from Tallinn.
Trilingual (EN / ET / RU), dark & light theme, plain static HTML — no build step.

| Page      | URL       | Source                |
| --------- | --------- | --------------------- |
| Portfolio | `/`       | `index.html`          |
| About     | `/about/` | `about/index.html`    |
| CV (A4)   | `/cv/`    | `cv/index.html`       |
| Not found | any other | `404.html`            |

## Structure

```
.
├── index.html              Portfolio — hero, tools, experience, projects, contact, Plinko
├── about/index.html        About — story, photos, contacts
├── cv/index.html           One-page A4 résumé, printable to PDF
├── 404.html                Not-found page (GitHub Pages serves it for any missing URL)
├── sitemap.xml             Page list for Google Search Console
│
├── assets/
│   ├── favicon.png · apple-touch-icon.png
│   ├── og-image.jpg        1200×630 link preview (Telegram, LinkedIn, X…)
│   ├── cv/                 Ready-made CV PDFs: EN · ET · RU
│   ├── images/             About page photos
│   ├── logos/              Organisation logos (Snape, Kaitsevägi)
│   ├── easter-eggs/        Cursor-follow media (estonia.webp, ai-slop.webp, kv-meme.webp)
│   └── video/              Project screen recordings + posters/ (see video/README.md)
│
├── design-system/          Tokens, component CSS and React primitives (am-*)
│   ├── tokens/             colors · typography · spacing · effects · fonts · base
│   ├── components/
│   ├── styles.css
│   ├── _ds_bundle.js
│   └── readme.md           Design-system guide
│
├── lib/                    Page runtime
│   ├── support.js          Design Component runtime
│   ├── doc-page.js         A4 page shell (CV)
│   └── image-slot.js       Image placeholder component
│
└── docs/
    └── design-handoff.md   Full design spec: layout, copy, interactions
```

## Run locally

Pages use directory URLs, so serve the folder instead of opening files directly:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Hosted on GitHub Pages from the repository root (`.nojekyll` keeps the `_ds_bundle.js` file served as-is).

## Notes

- Language and theme persist across pages via `localStorage` keys `am_lang` (`en|et|ru`) and `am_theme` (`dark|light`).
- Fonts (Geist, EB Garamond), React and Lucide icons load from public CDNs.
- The CV page's **Download PDF** button downloads `assets/cv/Mezhenny-CV-{EN|ET|RU}.pdf` for the current language.
- SEO and link-preview tags (`description`, `og:*`, `twitter:*`, `canonical`) live in each page's static `<head>`, so crawlers and messengers see them without running JavaScript. Absolute URLs point to `https://sanya-boss.github.io/portfolio/` — update them (and `sitemap.xml`) if the site moves to a custom domain.
