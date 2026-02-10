# 013 – BCP Print Clean Output

## What was changed

- **Removed all user-facing print instructions**: The tip in the BCP explainer block (“Tip: When you print/save as PDF, turn OFF browser ‘Headers and footers’…”) and the hint next to the Print button (“In the print dialog, turn off Headers and footers…”) were removed. No browser-related instructions are shown to users.
- **Kalvra-controlled print header**: The BCP preview now includes a print-only header (visible only in print/PDF) with: title “Business Continuity Plan (BCP)”, subtitle “Prepared using Kalvra – Operational Decision Intelligence”, and meta line “Generated for: {{Business name}} | Version: v1.0 | Date: {{today}}”. Business name and date come from the intake and generation date.
- **Print isolation**: `@media print` in `assets/styles.css` was updated to hide site header, footer, page title section, BCP explainer section, intake form, print actions/buttons, and the preview placeholder. Only the BCP preview container content is printed. Body and preview use white background and black/dark text for a clean PDF.
- **Page breaks**: Scenario runbook cards and tables use `page-break-inside: avoid` and `break-inside: avoid` so the document prints cleanly across ~2–3 pages without awkward splits.

## Files affected

- `pages/bcp-generator.html` – Removed explainer tip and print hint; updated print banner HTML in JS (title, subtitle, meta).
- `assets/styles.css` – Extended `@media print` to hide page-header, explainer, #site-header, #site-footer, placeholder; added `.bcp-print-banner-subtitle`; enforced white background and dark text; added `break-inside: avoid` to tables and runbook cards.
- `PROJECT_STATUS.md` – One-line status update.

## Why the change was needed

- Showing users instructions to disable browser headers/footers was unprofessional and appeared twice.
- PDF output should be fully controlled by Kalvra (internal header, no browser UI leakage) so users get a professional, clean BCP document without local file paths or browser artifacts.

## How to verify manually

1. Open `pages/bcp-generator.html`. Confirm there is no tip in the explainer and no hint next to the Print / Save as PDF button.
2. Fill the intake and click Generate BCP Preview. Click Print / Save as PDF (or Ctrl+P). In the print preview/PDF, confirm: (a) only the BCP document is shown (no nav, footer, form, or page title); (b) the first block is the Kalvra header with title “Business Continuity Plan (BCP)”, subtitle “Prepared using Kalvra – Operational Decision Intelligence”, and meta line with business name, Version: v1.0, and date; (c) background is white and text is black/dark; (d) runbooks and tables are not split mid-block where possible.
3. Optionally print to PDF and open the file to confirm no local file paths or browser headers/footers appear (browser print settings may still show headers/footers if enabled; the page no longer instructs users to turn them off).

## Remaining risks

- Browsers control whether headers/footers appear in the print dialog; we do not display instructions to users. Clean output relies on printing only the controlled BCP preview container; some browsers may still add margins or UI. No further code changes for this scope.
