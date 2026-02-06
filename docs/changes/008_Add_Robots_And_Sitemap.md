# Change: Add robots.txt and sitemap.xml

## What changed

- **robots.txt** was added at the repo root. It allows all user-agents to crawl the site and points to the sitemap URL.
- **sitemap.xml** was added at the repo root. It lists the site index and all 14 pages under `/pages/` in standard `<urlset>` format, with `<loc>` and `<changefreq>monthly</changefreq>` per URL.

## Files added

- `robots.txt` (repo root)
- `sitemap.xml` (repo root)

## Why needed

- **robots.txt:** Tells crawlers the site is open for indexing and where to find the sitemap; good practice for any public site.
- **sitemap.xml:** Gives search engines an explicit list of live URLs, which can improve discovery and indexing for GitHub Pages deployments.

## How to verify

- After pushing to GitHub and with the site live on GitHub Pages:
  - Open `https://kesava1642.github.io/warehouse-decision-intelligence/robots.txt` and confirm it shows `User-agent: *`, `Allow: /`, and the Sitemap line.
  - Open `https://kesava1642.github.io/warehouse-decision-intelligence/sitemap.xml` and confirm it lists the index URL plus all 14 page URLs with `<loc>` and `<changefreq>monthly</changefreq>`.
