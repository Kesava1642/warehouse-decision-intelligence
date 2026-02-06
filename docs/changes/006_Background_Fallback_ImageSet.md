# Change: Background fallback with image-set()

## What changed

- Only two `background-image` rules in `assets/styles.css` were updated:
  1. **Home hero** (`.hero.hero-home`): PNG baseline plus `image-set()` with WebP first, then PNG.
  2. **How it works hero** (`.how-hero`): Same pattern—PNG baseline, then `image-set(WebP, PNG)`.

- Each rule now has:
  - `background-image: url("./images/….png");` — baseline so the background always shows (e.g. if WebP is missing or unsupported).
  - `background-image: image-set( url("….webp") type("image/webp"), url("….png") type("image/png") );` — browsers that support `image-set()` and WebP will prefer the WebP; others use the PNG.

- No other CSS rules, refactors, or formatting were changed.

## Why

- If WebP files are not yet generated (or are removed), the previous single-URL rules would 404 and show no background. A PNG baseline plus `image-set()` keeps the background visible in all cases and lets supporting browsers use WebP when available.

## How to verify

- **Home:** Open the homepage; the hero section should show the background image (PNG if WebP is missing, or WebP if present and supported).
- **How it works:** Open `pages/how-it-works.html`; the hero background should show.
- **Fallback:** Temporarily rename or remove the `.webp` files (if they exist); reload Home and How it works and confirm the PNG background still appears.

## Follow-up

- When WebP files are added (e.g. by running `scripts/convert-to-webp.js`), browsers that support `image-set()` and WebP will automatically prefer the WebP variant; no further CSS change is required.
