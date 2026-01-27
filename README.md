# Warehouse Decision Intelligence

Independent decision intelligence for UK warehouse equipment, consumables, waste savings, and business continuity.

## Overview

Warehouse Decision Intelligence helps UK warehouses make better decisions about equipment purchases, consumables spending, waste management, and business continuity—before suppliers get involved.

This is a decision-first service. We analyse your situation, form a recommendation, and only then connect you with suppliers who match your decided requirements. The goal is to reduce unnecessary spend, avoid wrong equipment choices, and help warehouses recover faster after disruptions.

**Current status:** UK Pilot (early access)

## What Problem It Solves

Warehouse managers face costly decisions under pressure:

- **Rushed purchases** — When equipment fails, decisions get made fast. Speed often wins over suitability.
- **Supplier-biased advice** — Suppliers recommend what they sell, not necessarily what you need.
- **Hidden waste** — Consumable overuse, poor layouts, and inefficient processes drain budgets quietly.
- **No independent view** — Most advice comes from people who benefit from your purchase.

We provide independent decision logic that separates the decision from the sale.

## What's in the MVP

This repository contains a static website demonstrating the Warehouse Decision Intelligence concept:

- **Decision-first approach** — Clear explanation of how we work
- **Interactive demo** — Form-based decision tool showing how recommendations are generated
- **Lead capture** — Early access request form for the UK pilot
- **Framework documentation** — 5-stage warehouse lifecycle decision model
- **Use cases** — Four realistic warehouse decision scenarios
- **Trust & neutrality** — Transparent explanation of how we handle suppliers and commissions

The demo uses placeholder supplier data. The full service will include verified UK suppliers and human review.

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `index.html` | Overview, problem/solution, CTAs |
| How It Works | `pages/how-it-works.html` | Detailed explanation of the service |
| Framework | `pages/framework.html` | 5-stage warehouse lifecycle model |
| Decision Demo | `pages/decision-demo.html` | Interactive recommendation tool |
| Use Cases | `pages/use-cases.html` | Four warehouse decision scenarios |
| Early Access | `pages/early-access.html` | UK pilot signup with pricing |
| Trust | `pages/trust.html` | Independence and neutrality policy |

## How to Run Locally

This is a static HTML/CSS/JS site with no build process or dependencies.

### Option 1: Open directly
```
Open index.html in any modern browser
```

### Option 2: Local server (recommended for accurate paths)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### File structure
```
warehouse-decision-intelligence/
├── index.html
├── README.md
├── assets/
│   ├── styles.css
│   ├── app.js
│   └── favicon.svg
└── pages/
    ├── how-it-works.html
    ├── framework.html
    ├── decision-demo.html
    ├── use-cases.html
    ├── early-access.html
    └── trust.html
```

## Roadmap

### Phase 1: Validation (Current)
- Static MVP website demonstrating the concept
- UK pilot signup for early access
- Manual decision assessments for pilot participants
- Gather feedback on pricing and service scope

### Phase 2: Pilot Delivery
- Deliver paid decision assessments to pilot customers
- Build verified UK supplier directory
- Refine decision frameworks based on real cases
- Establish referral/commission model with suppliers

### Phase 3: Scale
- Automate parts of the decision process
- Expand equipment and consumables categories
- Add self-service assessment options
- Grow supplier network and geographic coverage

## Technology

- HTML5, CSS3, vanilla JavaScript
- No frameworks or build tools
- No external dependencies
- Responsive design (mobile, tablet, desktop)

## Contact

For questions about the service or early access:

- Email: hello@example.com (placeholder)
- Website: [Open index.html locally]

---

**Note:** This is an early-stage business project. Supplier names in the demo are placeholders. No fake testimonials, metrics, or traction claims are included.
