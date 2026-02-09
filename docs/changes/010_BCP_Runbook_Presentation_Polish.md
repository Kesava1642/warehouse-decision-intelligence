# 010 — BCP Runbook Presentation Polish

## What changed

- **Scenario Runbooks** in the BCP Generator now render as structured **Runbook Cards** instead of paragraph-style text. Each scenario (Fire/Evacuation, Flood/Water ingress, Power outage, IT/Server/Network outage, Health outbreak/virus impact, Site/hub shutdown) has:
  - **Scenario heading (H3)**
  - **Situation** (1 line)
  - **Change / Impact** (1 line)
  - **Triggers** (max 3 bullets)
  - **Actions Required** with four subsections:
    - Operational Actions (4–6 bullets)
    - People & Safety Actions (3–5 bullets)
    - Documentation & Communication (3–4 bullets)
    - Recovery / Return to Normal (2–3 bullets)
  - **RACI mini-table** under each scenario: columns Responsible | Accountable | Consulted | Informed; roles use Kalvra role names only (no names).
- **Preview styling:** Runbook cards use white background, subtle border, border-radius, and clear spacing; section labels (Situation, Change/Impact, Triggers, Actions Required) and sublabels are bold. Preview document text remains #111, headings #0b1220, muted #334155. Tables (including RACI) use border-collapse, readable padding, light gray header row, high-contrast borders.
- **Print:** `page-break-inside: avoid` applied to runbook cards so cards do not break awkwardly mid-card when possible. Existing print behaviour unchanged (hide header/nav/buttons/form; print only preview).

## Files affected

- `pages/bcp-generator.html` — RUNBOOKS data restructured (situation, changeImpact, triggers[], operationalActions[], peopleSafetyActions[], docComms[], recovery[], raci{R,A,C,I}). Render logic replaced with runbook-card HTML and RACI table helper.
- `assets/styles.css` — New rules for `.bcp-preview .runbook-card`, `.runbook-label`, `.runbook-sublabel`, `.runbook-raci`; print rule for `.runbook-card { page-break-inside: avoid }`.

## Why needed

- Runbooks were dense paragraphs; structured cards and bullet sections improve scanability and use during incidents.
- RACI clarifies role ownership per scenario using Kalvra governance terms.
- Print layout needed to avoid splitting a runbook card across a page break.

## How to verify manually

1. Open the BCP Generator page; complete intake and click **Generate BCP Preview**.
2. Confirm **Scenario Runbooks** shows six runbook cards. Each card has: H3 title, Situation, Change/Impact, Triggers (bullets), Actions Required with Operational, People & Safety, Documentation & Communication, Recovery subsections (bullets), and a RACI table (Responsible | Accountable | Consulted | Informed) with role names only.
3. Confirm preview text is black (#111), headings dark (#0b1220), labels bold; cards have border and spacing; RACI table has clear borders and header shading.
4. Click **Print / Save as PDF**. Confirm only the BCP preview prints and runbook cards avoid mid-card page breaks where possible.

## Remaining risks / follow-ups

- Very long runbook content could still force a break; `page-break-inside: avoid` is a hint, not guaranteed on all browsers/print engines.
- RACI values are fixed per scenario; no user customisation in this change.
