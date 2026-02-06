# Change: Remove WebP refs from backgrounds

## What changed

- In `assets/styles.css`, the two hero background rules that used `image-set()` were simplified to PNG-only:
  1. **Home hero** (`.hero.hero-home`): Removed the `background-image: image-set(...)` block; kept `background-image: url("./images/home-hero.png");`.
  2. **How it works** (`.how-hero`): Removed the `image-set(...)` block; kept `background-image: url("./images/how it works.png");`.
- No other CSS was modified.

## Why

- WebP files for these backgrounds are not present in the repo. Referencing them caused 404s in the Network tab. Using PNG-only removes those failed requests and keeps the backgrounds visible.

## How to verify

- **Network:** Open DevTools → Network, reload Home and How it works. Confirm there are no 404s for `home-hero.webp` or `how it works.webp`.
- **Visual:** Home and How it works hero sections still show the background image (PNG).

## Follow-up

- If WebP assets are added later, `image-set()` or separate WebP rules can be reintroduced to serve WebP when available.
