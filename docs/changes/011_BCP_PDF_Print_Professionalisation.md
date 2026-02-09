# 011 — BCP PDF Print Professionalisation

## What changed

- **Print dialog instruction:** A short hint was added near the "Print / Save as PDF" button: "In the print dialog, turn **off** Headers and footers to remove local file paths." This instructs users to disable browser headers/footers so the PDF does not show local file paths or page URLs.
- **Print-only banner:** A banner is now rendered inside the BCP preview (as the first element of the generated content) and is hidden on screen and shown only when printing. It includes: document title "Business Continuity Plan (BCP)", Business / Site, Version v1.0, Date Generated (locale date), and "Prepared by: Incident Lead". This gives the PDF a professional header without relying on browser header options.
- **BCP Summary block:** A compact "BCP Summary" table (max 6 rows) was added before Scenario Runbooks, reusing existing intake data: Business type, Department, Role, Operating model, Primary contact method, Escalation role. No new intake questions were added.
- **Print styling:** `@media print` in `assets/styles.css` was updated: all UI (nav, header, footer, form, buttons, hint) is hidden; only the preview container prints. Print typography: body ~11pt, H1 ~16–18pt, H2 ~13pt, H3 ~12pt. Spacing tightened; tables use strong borders and padding. Runbook cards and tables use `page-break-inside: avoid` / `break-inside: avoid` to reduce awkward mid-card or mid-row breaks. Section numbering was adjusted (e.g. Scenario Runbooks became 5, then 6–8 for Time & Cost, Return to Normal, Review & Testing).
- **Printed content:** The printed preview does not include the webpage title "Kalvra | BCP Generator"; the print-only banner is the only header in the PDF content.

## Files affected

- `pages/bcp-generator.html` — Print hint markup; `renderPreview` now builds print banner (with business/site, version, date, prepared by), BCP Summary table from form data, and prepends the banner to the HTML. Inline style for `.bcp-print-hint` and `.bcp-print-banner { display: none }`.
- `assets/styles.css` — Print-only display for `.bcp-print-banner`, print typography and spacing, table borders/padding, `page-break-inside: avoid` / `break-inside: avoid` for runbook cards and tables. `.bcp-print-hint` hidden in print.

## Why needed

- Exported PDFs were showing browser headers/footers (local file path, page title), which looks unprofessional for a client deliverable. Users need a clear instruction to turn those off, and the document needs a proper in-content header (the print-only banner).
- Print layout needed to look like a deliverable (typography, spacing, table clarity) and avoid bad page breaks.

## How to verify manually

1. Open the BCP Generator, complete the intake, and click **Generate BCP Preview**.
2. Confirm the hint appears above the Print button: "In the print dialog, turn **off** Headers and footers to remove local file paths."
3. Confirm the preview does not show the print banner on screen (it is hidden).
4. Confirm "4) BCP Summary" appears before Scenario Runbooks with six rows (business type, department, role, operating model, primary contact method, escalation role).
5. Click **Print / Save as PDF**. In the print dialog, disable Headers and footers, then print or save as PDF.
6. In the PDF, confirm: the first visible content is the banner "Business Continuity Plan (BCP)" with Business/Site, Version, Date Generated, Prepared by: Incident Lead; no "Kalvra | BCP Generator" in the body; typography and spacing look professional; runbook cards and tables do not break awkwardly where possible.

## Remaining risks / follow-ups

- Browsers control header/footer visibility; the instruction is advisory. Some print drivers may still add watermarks or paths.
- Long runbooks or large tables can still force breaks despite `page-break-inside: avoid` (browser-dependent).
