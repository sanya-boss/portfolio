# Aleksandr Mežennõi — Portfolio

Personal site of a graphic & web designer from Tallinn.
Trilingual (EN / ET / RU), dark & light theme, plain static HTML — no build step.

| Page      | URL       | Source                |
| --------- | --------- | --------------------- |
| Portfolio | `/`       | `index.html`          |
| About     | `/about/` | `about/index.html`    |
| CV (A4)   | `/cv/`    | `cv/index.html`       |

## Structure

```
.
├── index.html              Portfolio — hero, tools, experience, projects, contact, Plinko
├── about/index.html        About — story, photos, contacts
├── cv/index.html           One-page A4 résumé, printable to PDF
│
├── assets/
│   ├── favicon.png
│   ├── images/             About page photos
│   ├── logos/              Organisation logos (Snape, Kaitsevägi)
│   ├── easter-eggs/        Cursor-follow media (estonia.gif, ai-slop.png, kv-meme.png)
│   └── video/              Project screen recordings (see video/README.md)
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
- The CV page has a **Download PDF** button — it prints the A4 sheet.
