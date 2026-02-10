# 014 – Home Decision Cards Use Images

## What was changed

- Replaced the icon-only visuals on the three home page decision-cost cards under “Why warehouse decisions often cost more than expected” with photographic warehouse images.
- Inserted `<img>` tags at the top of each card (above the H3 title) using the provided image files and added a shared `decision-card-image` class for consistent sizing and presentation.

## Files affected

- `index.html` – Updated the three problem-section cards to use images instead of inline SVG icons.
- `assets/styles.css` – Added `.decision-card-image` styles for consistent card imagery.
- `PROJECT_STATUS.md` – Added a status line describing the change.

## Why the change was needed

- The home page decision-cost cards should visually reflect real warehouse decision scenarios using professional images rather than generic icons, while keeping the existing copy and layout.

## How to verify manually

1. Open `index.html` in a browser.
2. Scroll to the “Why warehouse decisions often cost more than expected” section.
3. Confirm that:
   - The three cards (“Rushed purchases under pressure”, “Supplier-biased recommendations”, “Hidden waste and operational leakage”) now each show a warehouse image at the top of the card.
   - The titles and paragraph text for each card remain unchanged.
   - Images have consistent height and width, align with the card edges, and look correct on desktop and mobile.
4. Resize the browser to mobile widths and confirm the cards stack responsively and the images scale without breaking the layout.

## Remaining risks / follow-ups

- Image files must remain at their current paths/filenames; broken links will result in missing images on the home page.
- Additional tuning (e.g. image compression) can be done later if performance or file size becomes a concern.

