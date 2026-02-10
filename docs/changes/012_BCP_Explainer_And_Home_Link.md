# 012 – BCP Explainer and Home Link

## What was changed

- **BCP Generator page**: Added a “BCP explainer” block directly under the page title and subtitle, above the Intake/Preview grid. The block includes: “What is a BCP?”, “Who this is for” (bullets), “What this generator produces” (bullets), and a small tip about turning off browser headers/footers when printing/saving as PDF.
- **Home page**: Updated the existing BCP Generator card in the “What you receive” section with the requested title, description, and link text; link URL remains `pages/bcp-generator.html`.
- **Navigation**: Confirmed the Services dropdown already includes “BCP Generator” linking to `pages/bcp-generator.html`; no duplicate added.
- **Styling**: Added scoped styles in `assets/styles.css` for the BCP explainer (`.bcp-explainer-section`, `.bcp-explainer`, `.bcp-explainer-tip`) so the block uses a subtle dark panel consistent with the site theme, with readable spacing and aligned bullets.

## Files affected

- `pages/bcp-generator.html` – New explainer section markup.
- `index.html` – Updated BCP card copy and link text.
- `assets/styles.css` – New styles for the BCP explainer block.
- `PROJECT_STATUS.md` – One-line status update.

## Why the change was needed

- Users need to understand what a BCP is and who/what the generator is for before using the intake.
- BCP Generator should be easy to find from the Home page and from the Services menu for faster discovery.

## How to verify manually

1. **BCP Generator page**: Open `pages/bcp-generator.html`. Confirm the explainer block appears under the title/subtitle and above the Intake/Preview grid, with correct headings, paragraphs, bullet lists, and tip. Check that the block uses the same container width as the rest of the page and that bullets and headings look correct.
2. **Home page**: Open `index.html`. In “What you receive”, find the BCP Generator card. Confirm title is “BCP Generator”, description matches the requested text, and link text is “Open BCP Generator →” linking to `pages/bcp-generator.html`. Confirm the card grid layout and spacing are unchanged.
3. **Navigation**: Open any page; click “Services ▾”. Confirm one “BCP Generator” item exists and points to `pages/bcp-generator.html`.

## Remaining risks / follow-ups

- None specific to this change. Existing BCP Generator open items (generic runbooks, placeholder spend cap, no DOCX export) remain as before.
