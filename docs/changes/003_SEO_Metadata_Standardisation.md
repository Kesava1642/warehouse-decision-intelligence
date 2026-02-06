# Change: SEO metadata standardisation

## What changed

- All pages now use **Kalvra** in `<title>`, `<meta name="description">`, and Open Graph tags instead of "Warehouse Decision Intelligence".
- Title format: `Kalvra | [Page name]`.
- Descriptions are honest and pilot-focused: service-led decision support, incident coordination, no SaaS claims.
- Open Graph tags added or aligned on every page: `og:title`, `og:description`, `og:type` (website), `og:locale` (en_GB).
- Favicon and stylesheet paths unchanged: `assets/` on index, `../assets/` on pages.

## Files affected

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
- `PROJECT_STATUS.md`

## Why needed

- Consistent brand in search results and when links are shared (e.g. social, messaging).
- Clear, accurate descriptions that reflect the service-led pilot and decision-support offer.
- Single standard for titles and OG tags so future pages can follow the same pattern.

## How to verify manually

1. **Home** — `index.html`: title "Kalvra | Operational clarity when things go wrong"; description mentions service-led decision support, UK warehouses, diagnose incidents.
2. **How it works** — `pages/how-it-works.html`: title "Kalvra | How it works"; description mentions 4-step process, service-led pilot.
3. **Framework** — `pages/framework.html`: title "Kalvra | Decision framework"; description mentions structured method, constraints, risk, urgency.
4. **Trust** — `pages/trust.html`: title "Kalvra | Trust & credibility"; description mentions boundaries, disclaimers, not a repair or contracting party.
5. **Pilot access** — `pages/early-access.html`: title "Kalvra | Pilot access"; description mentions UK pilot, scope, timelines, evidence.

In browser dev tools or "View source", confirm each page has `og:title`, `og:description`, `og:type`, and `og:locale` in `<head>`.

## Risks / follow-ups

- If page names or positioning change, update titles and descriptions so they stay accurate and within typical length (e.g. descriptions ~150–160 characters where possible).
- Adding new pages: use the same `Kalvra | [Page name]` title pattern and include all four OG tags.
