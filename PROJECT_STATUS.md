# Project Status

- Header is now single-source via `assets/header.js` and injected into `#site-header` across all pages.
- Footer remains shared via `assets/footer.js` injected into `#site-footer`.
- Dropdown behavior is controlled by `assets/nav.js` only.
- Active nav indicator is applied dynamically from `assets/header.js` across all pages.
- SEO metadata is standardised: titles and meta descriptions use the Kalvra brand; Open Graph tags (og:title, og:description, og:type, og:locale) are set on all pages.
- Non-critical images are lazy-loaded where present (loading="lazy", decoding="async"); header logo remains eager. No content images in static HTML currently.
- Large hero images (home-hero, how it works) were converted to WebP to improve performance; references updated in assets/styles.css. Run `node scripts/convert-to-webp.js` (requires Node and `npm install sharp`) to generate the .webp files.
- Background hero images now use a PNG baseline with optional WebP via `image-set()` so backgrounds show even if WebP files are missing.
- WebP background references were removed so CSS uses PNG-only for hero backgrounds, eliminating 404s (WebP assets not present in repo).
- Added robots.txt and sitemap.xml for deployment/SEO hygiene.
- BCP Generator rework: readable preview (high-contrast, black-on-white), business-context intake (department/role/operating model/critical function/contact method/escalation role), standard scenario runbooks (Fire, Flood, Power, IT/Network, Health outbreak, Site shutdown) with Kalvra roles and time/cost controls; print shows only the BCP document. Open: runbooks are generic; spend cap is placeholder; no DOCX export (Print/PDF only).
- BCP Generator runbooks now render in Situation/Change/Actions format with RACI and improved print-ready styling.
- BCP Generator PDF export now uses print-ready layout and avoids leaking local file paths (via header/footer disable instruction and print-only banner).
- BCP Generator now explains what a BCP is and is promoted on Home for faster discovery.
- BCP Generator now produces clean, professional PDFs without browser headers or user instructions.
- Home page decision-cost cards now use professional warehouse images instead of icon cards; layout remains responsive.

## Open items

- BCP Generator: runbooks are generic; emergency spend cap is placeholder “£X”; no DOCX export (Print/PDF only for MVP).

