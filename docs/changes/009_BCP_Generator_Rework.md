# 009 — BCP Generator Rework

## What changed

- **Preview readability:** BCP preview (document card) now uses high-contrast text (#111, headings #0b1220), visible table borders (#cbd5e1), and darker placeholder/secondary text (#334155). Rest of site remains dark theme; only the preview is black-on-white.
- **Print:** Print CSS (in `assets/styles.css`) hides header, nav, footer, form, and buttons; only the BCP preview area prints, with sensible page margins.
- **Intake:** Replaced questions 7–12 with business-context questions (no staff count, critical activities, key systems, top risks, or comms channels). New fields: Department (select), Your role (text), Primary operating model (select), Primary critical function (select), Primary contact method during incidents (select), Escalation contact role (text). Kept 1–5 (Business name, Business type, Primary location, Number of sites, Nearest alternative hub).
- **BCP generation:** Removed user risk selection and activity/systems tables. Generated BCP now always includes: Document Control, Purpose & Activation (standard triggers + L1/L2/L3), Governance (Kalvra roles), **Scenario Runbooks** (six fixed scenarios: Fire/Evacuation, Flood/Water ingress, Power outage, IT/Server/Network outage, Health outbreak/virus impact, Site/hub shutdown). Each runbook has: Triggers, First 60 min (Safety + Control + Comms), Next 24 hours, Recovery/Return to normal, Who to inform (role-based). Added **Time & Cost Controls** (bullets, placeholders). Then Return to Normal and Review & Testing. Kept within ~2–3 printed pages.

## Files affected

- `pages/bcp-generator.html` — Form fields 6–11 replaced; inline styles updated for preview contrast; generation logic rewritten (getFormData, renderPreview, RUNBOOKS).
- `assets/styles.css` — New section: BCP preview high-contrast variables and rules; `@media print` for BCP (hide UI, print preview only, @page margins).

## Why needed

- Preview was low contrast and hard to read; print included nav/footer/form.
- Intake asked for risk/system/staff detail that didn’t suit a universal BCP; business-context questions suit any business.
- BCP needed standard scenario runbooks (no user risk selection) and Kalvra governance/roles plus time/cost controls.

## How to verify manually

1. Open `pages/bcp-generator.html` (or live BCP Generator page).
2. Confirm intake shows 11 fields (1–5 unchanged, 6–11 as Department, Your role, Operating model, Critical function, Contact method, Escalation role). No staff count, activities table, key systems, top risks, or staff/customer comms.
3. Fill form and click **Generate BCP Preview**. Confirm preview is black text on white, headings dark (#0b1220), tables with visible borders.
4. Confirm BCP includes: Document Control, Purpose & Activation, Governance, Scenario Runbooks (all six), Time & Cost Controls, Return to Normal, Review & Testing. No “Critical Activities” or “Key Disruption Scenarios” from user selection.
5. Click **Print / Save as PDF**. Confirm only the BCP document prints (no header, footer, form, buttons).
6. Confirm rest of site (e.g. index, other pages) still uses existing dark theme.

## Remaining risks / follow-ups

- Runbooks are generic; organisations may want to add site-specific triggers or contacts (out of scope for this change).
- Emergency spend cap is placeholder “£X”; should be set locally per organisation.
- No DOCX export; Print/PDF only for MVP.
