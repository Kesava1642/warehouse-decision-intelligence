# BCP — Lean Template Structure

## Document Control

| Field | Value |
|-------|--------|
| Document title | Business Continuity Plan — [Organisation/Site] |
| Version | 1.0 |
| Owner | [Role/Name] |
| Last review | [Date] |
| Next review | [Date] |

---

## Purpose & Activation

- **Purpose:** Short, executable plan to maintain or restore critical activities during a disruption.
- **Scope:** [Sites/departments covered]
- **When to use:** Activation when predefined triggers are met.

| Level | Trigger | Owner |
|-------|---------|--------|
| L1 | [e.g. Single site/system down, contained] | Incident Lead |
| L2 | [e.g. Multi-site or major supplier failure] | Incident Lead + Ops Lead |
| L3 | [e.g. Widespread or safety-critical] | Full governance team |

---

## Governance (Kalvra roles)

| Role | Responsibility |
|------|-----------------|
| Incident Lead | Overall coordination, activation, stand-down |
| Ops Lead | Critical activities, resources, recovery |
| IT/Systems | Systems, data, tech recovery |
| People/Safety | Staff welfare, safety, attendance |
| Comms | Internal and external messaging, approvals |
| Supplier/Vendor | Key supplier contact, alternatives |

---

## Critical Activities & Targets

| Activity | Owner Role | MTD | RTO | Minimum Resources | Dependencies |
|----------|------------|-----|-----|-------------------|--------------|
| [Activity 1] | [Role] | [hours] | [hours] | [e.g. systems, people] | [e.g. systems, suppliers] |
| [Activity 2] | [Role] | | | | |
| [Activity 3] | [Role] | | | | |

*MTD = Maximum Tolerable Downtime | RTO = Recovery Time Objective*

---

## Key Disruption Scenarios

| Scenario | Impact | Immediate Action | Continuity Method |
|----------|--------|------------------|--------------------|
| [e.g. Power loss] | [Brief impact] | [First steps] | [Workaround/backup] |
| [e.g. Key system down] | | | |
| [e.g. Key person unavailable] | | | |
| [e.g. Supplier failure] | | | |
| [e.g. Site access denied] | | | |
| [e.g. Data/IT outage] | | | |

*(6–8 scenarios)*

---

## First 60-minute checklist

- [ ] Activate BCP (confirm level L1/L2/L3)
- [ ] Incident Lead notified and coordinating
- [ ] Key contacts (governance roles) informed
- [ ] Critical activities assessed (can continue / degraded / stopped)
- [ ] First comms (internal) sent per Communications Plan
- [ ] External comms (if required) approved and sent
- [ ] Next check-in time agreed
- [ ] Log decisions and actions

---

## Continuity Options

- [ ] Use backup system / site
- [ ] Redirect to alternative supplier
- [ ] Manual workaround (document)
- [ ] Reduced service / priority only
- [ ] Stand down non-critical work
- [ ] Other: _______________

---

## Communications Plan

| Audience | Message owner | Cadence | Approval |
|----------|---------------|---------|----------|
| Internal (staff) | Comms | [e.g. Every 2 hours] | Incident Lead |
| Clients / customers | Comms | [As agreed] | Incident Lead / Ops Lead |
| Suppliers | Supplier/Vendor role | [As needed] | Ops Lead |
| Board / senior | Comms | [e.g. Daily summary] | Incident Lead |

---

## Return to Normal

- Define stand-down criteria (when incident is contained/resolved).
- Incident Lead announces stand-down and handback to BAU.
- Capture lessons learned and update BCP if needed.
- Schedule post-incident review.

---

## Review & Testing

- **Review:** [e.g. Annual or after major change]
- **Testing:** [e.g. Table-top 1x per year, key scenarios]
- **Owner:** [Role] to schedule and document.
