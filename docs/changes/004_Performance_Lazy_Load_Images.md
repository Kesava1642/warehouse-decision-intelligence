# Change: Performance — lazy load images

## What changed

- All listed HTML files and the shared header were scanned for `<img>` tags.
- **Finding:** The only `<img>` in the project is the header logo (class `brand-logo`) injected by `assets/header.js`. No static HTML page contains an `<img>` tag; content uses inline SVGs and favicon `<link>` only.
- The header logo was **not** given `loading="lazy"` or `decoding="async"` so it continues to load immediately (above-the-fold, critical).
- **Standard for future:** When adding below-the-fold or non-critical content images, use `loading="lazy"` and `decoding="async"`, and add `width` and `height` where the intrinsic size is known to reduce CLS. Do not add lazy loading to the header logo or hero/above-the-fold images.

## Files affected

- None (no `<img>` tags were present in the listed HTML files to modify).
- `PROJECT_STATUS.md` — noted the lazy-load standard and current state.

## Why needed

- Lazy-loading non-critical images improves initial load and performance; the header logo stays eager for LCP and branding.
- Documenting the pattern ensures future content images are added with lazy loading and dimensions where possible.

## Manual verification checklist

- Open Home and one internal page (e.g. How it works or Framework).
- Confirm the header logo loads immediately (no lazy delay).
- Confirm there are no below-the-fold content images yet; when such images are added, confirm they load when scrolled into view.
- Run Lighthouse Performance before/after if available (baseline established; little change expected until content images exist).

## Risks / follow-ups

- **Next step:** If large image assets are added later and still dominate payload or LCP, consider image compression, modern formats (e.g. WebP/AVIF), and responsive `srcset`/sizes.
