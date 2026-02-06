# Change: Performance — WebP conversion for hero images

## What changed

- **Images converted (script):** The two heaviest referenced raster images were selected for WebP conversion at quality 85:
  - `assets/images/home-hero.png` → `assets/images/home-hero.webp` (original ~2307 KB)
  - `assets/images/how it works.png` → `assets/images/how it works.webp` (original ~1846 KB)
- **References updated:** `assets/styles.css` now points to the `.webp` files:
  - `.hero.hero-home` background: `url("./images/home-hero.webp")`
  - `.how-hero` background: `url("./images/how it works.webp")`
- **Originals kept:** `.png` files were not deleted.
- **Logo excluded:** The header logo `Kalvra (1).png` (~68 KB) was not converted; it is not one of the heaviest and remains PNG for consistency and crispness.

## Files affected

- `assets/styles.css` — two `background-image` URLs switched from `.png` to `.webp`.
- `scripts/convert-to-webp.js` — new script to generate the WebP files (run once: `node scripts/convert-to-webp.js`; requires Node and `npm install sharp`).

## Before / after sizes (approximate)

| Image | Original | After WebP (quality 85) |
|-------|----------|--------------------------|
| home-hero.png | ~2307 KB | Run script to generate; typically 30–50% smaller |
| how it works.png | ~1846 KB | Run script to generate; typically 30–50% smaller |

## Why needed

- Hero backgrounds are the largest assets; converting to WebP reduces payload and improves load performance without changing layout or appearance.
- Paths stay the same (relative from `assets/styles.css`); no layout or sizing changes.

## Manual verification checklist

- **Generate WebP files:** From repo root run `npm install sharp` then `node scripts/convert-to-webp.js`. Confirm `home-hero.webp` and `how it works.webp` appear in `assets/images/`.
- **Home (index.html):** Open the homepage; the hero section background (full-width image) should show the same scene as before, with no layout shift.
- **How it works (pages/how-it-works.html):** Open the page; the hero background should display correctly.
- **Paths:** If you serve from `/` and `/pages/`, both pages load CSS from `assets/styles.css`; relative `./images/` resolves to `assets/images/` from the CSS file, so no path changes were needed for root vs pages.
- **Fallback:** If WebP is not supported in an older browser, consider adding a `<picture>` or CSS fallback later (see risks).

## Risks / follow-ups

- **Browsers:** WebP is supported in all modern browsers; very old ones may not show the hero image. Optional next step: add a CSS or `<picture>` fallback to serve `.png` when WebP is not supported.
- **Regeneration:** If the original PNGs are replaced, re-run `scripts/convert-to-webp.js` to regenerate the WebP files.
