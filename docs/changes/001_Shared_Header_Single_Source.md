## Change: Shared Header Single Source

### What changed

- Introduced a shared header injection script at `assets/header.js`.
- Replaced static `<header>` blocks in all main pages with a placeholder `<div id="site-header"></div>`.
- Updated all page bottoms so `assets/header.js` is loaded before `assets/nav.js`, alongside the existing shared footer and app scripts.

### Files affected

- `assets/header.js` (new)
- `index.html`
- `pages/about.html`
- `pages/business-model.html`
- `pages/decision-demo.html`
- `pages/early-access.html`
- `pages/framework.html`
- `pages/how-it-works.html`
- `pages/privacy.html`
- `pages/refunds.html`
- `pages/services.html`
- `pages/terms.html`
- `pages/transport-board.html`
- `pages/trust.html`
- `pages/use-cases.html`
- `pages/validation.html`

### Why this change was needed

- To ensure the header markup (logo, navigation, dropdowns, and CTA) is maintained in a single source of truth instead of being duplicated across many HTML files.
- To keep runtime behavior consistent between the homepage and all `/pages/*` routes while simplifying future edits to the header.
- To mirror the existing shared-footer pattern (`assets/footer.js`) for the header without introducing network fetches or partial files.

### How to verify manually

1. **Open key pages in a browser (served over HTTP, not `file://`):**
   - `index.html`
   - `pages/how-it-works.html`
   - `pages/services.html`
   - `pages/transport-board.html`
   - `pages/early-access.html`
   - `pages/trust.html`
2. **Check header rendering:**
   - Logo appears top-left and links to the homepage.
   - Navigation items match between all pages (Home, How it works, Framework, Business model, Decision demo, Services/Pilot dropdowns, Trust, Contact us).
   - Header visually matches previous design (spacing, logo size, CTA style).
3. **Test dropdown behavior (desktop):**
   - Hover over `Services` and `Pilot` to open dropdowns.
   - Moving the mouse away closes the dropdown after a short delay.
   - Clicking outside the header closes any open dropdown.
   - Only one dropdown is open at a time.
4. **Test dropdown behavior (mobile / touch):**
   - Tapping `Services` or `Pilot` toggles the dropdown open/closed.
   - Opening one dropdown closes the other.
5. **Verify links work from both root and `/pages/`:**
   - From the homepage, use the nav to go into a `/pages/*` URL and back.
   - From any `/pages/*` page, use the logo and `Home` link to return to the homepage.

### Risks / follow-ups

- Header and footer injection occur via inline `innerHTML`, not via network fetch, so there are no `file://` fetch issues when opening static files directly in the browser; behavior is purely DOM-based.
- Any future structural change to the header should be made in `assets/header.js` only; the placeholders (`<div id="site-header"></div>`) should remain unchanged.
- If a future partials/templating system is introduced (e.g., `assets/partials/header.html` plus a loader), this script can be refactored or replaced to read from that partial, reusing the existing `basePath` / `pagesPath` pattern.

