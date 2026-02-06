# Project Status

- Header is now single-source via `assets/header.js` and injected into `#site-header` across all pages.
- Footer remains shared via `assets/footer.js` injected into `#site-footer`.
- Dropdown behavior is controlled by `assets/nav.js` only.
- Active nav indicator is applied dynamically from `assets/header.js` across all pages.
- SEO metadata is standardised: titles and meta descriptions use the Kalvra brand; Open Graph tags (og:title, og:description, og:type, og:locale) are set on all pages.
- Non-critical images are lazy-loaded where present (loading="lazy", decoding="async"); header logo remains eager. No content images in static HTML currently.

## Open items

- (None.)

