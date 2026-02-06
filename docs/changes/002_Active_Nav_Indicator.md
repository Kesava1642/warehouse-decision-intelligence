# Change: Active Nav Indicator

## What changed

- After injecting the header, `assets/header.js` now sets the `active` class on the current page’s nav link.
- Current page is derived from `window.location.pathname`, with normalization for GitHub Pages (e.g. `/warehouse-decision-intelligence/` or `/warehouse-decision-intelligence/pages/framework.html`).
- Only top-level nav **links** (`a.nav-link`) are considered; dropdown summaries (“Services”, “Pilot”) are never marked active.

## Files affected

- `assets/header.js` — added `setActiveNavLink()` and call it after injection.
- `PROJECT_STATUS.md` — noted the new behavior.

## Why needed

- One place to maintain active-state logic instead of per-page markup.
- Correct “current page” highlight on both local paths and GitHub Pages base path.
- Consistent UX across all pages without editing each HTML file.

## How to verify manually

1. **Home** — Open `index.html` (or `https://.../warehouse-decision-intelligence/`). “Home” in the nav should show as active.
2. **How it works** — Open `pages/how-it-works.html`. “How it works” should be active.
3. **Framework** — Open `pages/framework.html`. “Framework” should be active.
4. **Trust** — Open `pages/trust.html`. “Trust” should be active.
5. **Early access** — Open `pages/early-access.html`. “Pilot access” lives inside the Pilot dropdown (not a top-level `a.nav-link`), so no top-level nav link is marked active on this page. Confirm no incorrect active state.

Repeat on `decision-demo.html` and `services.html` to confirm “Decision demo” and no top-level active (Services is a dropdown) respectively.

## Risks / follow-ups

- **URL structure:** If paths or filenames change (e.g. new segment, different base path), update the “current page” logic in `setActiveNavLink()` so the active indicator still matches.
- **Dropdown items:** Current implementation does not set `active` on links inside dropdown panels; add matching for those in `header.js` if you want sub-pages (e.g. “Pilot access”) to show an active state.
