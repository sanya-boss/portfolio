# Project conventions

Static portfolio site (plain HTML, no build step). See `README.md` for structure.

## UI rules (apply to every new page/component, and to future projects too)

- **No browser-default blue highlights.** Tap/click feedback must be neutral and match the site's greyscale palette.
  `-webkit-tap-highlight-color: transparent`, no focus ring on mouse/touch focus, a neutral `:focus-visible` ring for keyboard users, and `user-select: none` on buttons, tags, cards and rows.
  These live in `design-system/tokens/base.css`; keep them there.
- **Guard animated toggles against rapid clicking.** Any expand/collapse, accordion, drawer or similar animated control must ignore repeated clicks while its animation runs (see `busy()` in `index.html`; ~400–480 ms). Fast clicking must never restart, overlap or queue animations.
- Verify both on a desktop and a touch viewport (Playwright/Chromium) before opening a PR; spam-click the toggles to confirm there is no jitter.

## Workflow

- Develop on the designated branch and open a PR; don't commit to `main`.
- Media goes through compression: video 720p without audio plus a WebP poster, images as WebP/optimised JPEG.
