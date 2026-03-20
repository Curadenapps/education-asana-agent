# THE CONSTITUTION: BOB App Brand Assets & Requirements
**Source of Truth:** Notion (App Hub & Requirements DB)
**Last Synced:** Auto-generated via GitHub Actions

---

## 1. Project Mandate
**What this is:** A brand-asset delivery system for the BOB App overhaul that produces and governs the BOB design system, UI asset packs (2D/3D), and marketing/GTM kits.
**Core Value:** BOB brand assets ship once and are reused consistently, with traceable approvals and clean handoffs from design → implementation → GTM.
**Internal Anchors:** - BOB overhaul requires new UX and new design system; 2D → 3D is under consideration.
- Visual/CSS inconsistencies must be treated as defects.

## 2. Strict Requirements (In-Scope)
*Any Asana request violating or bypassing these must be 🛑 FLAGGED by the Truth Catcher.*

### v1 Requirements (Current Milestone)
- **REQ-BA-01:** Brand asset taxonomy exists (icons, logo, typography, color, illustration/3D, templates, store assets).
- **REQ-BA-02:** One Figma-based "source of truth" library reference exists and is linked from Notion/App Hub.
- **REQ-BA-03:** Every asset deliverable has an owner, due window, and acceptance criteria in Asana.
- **REQ-BA-04:** Every asset deliverable has an approval record (who approved, when, what changed).
- **REQ-BA-05:** Asana hygiene agent posts standardized update snippets and routes tasks to correct Kanban stages.
- **REQ-BA-06:** Export + implementation checklists exist for each asset type.
- **REQ-BA-07:** Weekly "brand asset status" is published automatically with minimal manual editing.

### v2 Requirements (Later/Future Scope)
*Any Asana task demanding these right now must be flagged as Scope Creep.*
- **REQ-BA-20:** Bulk localization variants (store screenshots per locale) with safe bulk tooling.
- **REQ-BA-21:** GTM automation (email drafts, web kit packaging, channel notifications).
- **REQ-BA-22:** Automated "diff detection" for Figma library changes.

### Explicit Non-Goals
*Immediate rejection if requested in Asana:*
- Replacing Asana, Notion, or Figma entirely.
- Making clinical claims decisions autonomously.
- Automated publishing to public marketing surfaces without human gates.

---

## 3. Authorized Asset Taxonomy
The only asset types approved for the BOB App overhaul. If an Asana comment requests an asset type not on this list (e.g., "Can we get a PDF whitepaper?"), it must be flagged.

| Asset Type ID | Human Name | Primary Format(s) |
|---|---|---|
| `logo` | Brand Logos | SVG, PNG |
| `icon` | UI Icons | SVG (24x24 base grid) |
| `typography` | Fonts & Type Tokens | WOFF2, TTF |
| `color` | Color Tokens | JSON, CSS variables |
| `illustration` | 2D UI Illustrations | SVG, Lottie (JSON) |
| `3D` | 3D Style Frames | PNG, GLTF |
| `store_screenshot` | App Store Assets | PNG, JPEG |
| `web_asset` | Website Hero/Banners | WebP, JPEG |
| `template` | Marketing Templates | Figma, PSD, MP4 |

---

## 4. Approval Gates & RACI (Governance)
The agent cannot mark items as "Done" or "Approved" unless the exact required **Approver (App)** has signed off. 

| Asset Domain | Owner (A) | Reviewer (R) | Approver (App) | Consulted (C) |
|---|---|---|---|---|
| **Design System (Tokens)** | Design Ops | Frontend Lead | Design Lead | Product Lead |
| **App UI (2D/3D)** | UX Designer | Design Lead | Product Lead | Marketing Lead |
| **GTM & Marketing** | Brand Designer | Marketing Lead | Marketing Lead | Legal/Compliance |
| **Core Brand (Logos)** | Brand Lead | Design Lead | Exec Team | Legal/Compliance |

### Hard Policy Gates
1. **Clinical Claims (Legal):** Any app store asset or marketing template containing efficacy claims (e.g., "improves gum health") MUST have `legal` approval.
2. **Audit Trail:** Every transition to "Done" requires a standard audit snippet: `[Agent Audit: Approved by {Name} on {Date}. Asset exported to {Link}.]`
