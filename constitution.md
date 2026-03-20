# BOB App Overhaul: Primary Directives & Requirements

## 1. Project Mandate
**Initiative:** BOB App Brand Assets Delivery System
**Core Objective:** Deliver a unified design system (tokens/components), UI asset packs (2D/3D), and GTM kits. Assets must ship once and be reused consistently across the BOB ecosystem.
**Key Context:** - The BOB overhaul introduces a new UX and design system (evaluating 2D → 3D visualization).
- Current visual/CSS inconsistencies are classified as defects and must be resolved by this system.

## 2. Project Scope & Requirements

### In Scope (v1 Milestone)
- **REQ-BA-01:** Establish a comprehensive brand asset taxonomy (icons, logos, typography, color, 3D, templates).
- **REQ-BA-02:** Maintain a single Figma-based "source of truth" library, linked centrally via the App Hub.
- **REQ-BA-03:** Assign clear ownership, due windows, and acceptance criteria for every asset deliverable.
- **REQ-BA-04:** Enforce a strict approval record (who, when, what) for every asset.
- **REQ-BA-05:** Standardize task routing and state tracking across project stages.
- **REQ-BA-06:** Define export and implementation checklists for each asset type.
- **REQ-BA-07:** Establish weekly brand asset status reporting.

### Future Scope (v2 Milestone - DO NOT BUILD YET)
- **REQ-BA-20:** Safe bulk tooling for localization variants (e.g., store screenshots per locale).
- **REQ-BA-21:** GTM automation workflows (email drafts, web kit packaging).
- **REQ-BA-22:** Automated diff detection for Figma library changes.

### Out of Scope (Non-Goals)
- Replacing core infrastructure (Asana, Notion, or Figma).
- Making clinical, medical, or efficacy claims decisions.
- Direct, unapproved publishing to public marketing channels.

## 3. Authorized Asset Taxonomy
Only the following asset types are approved for production in the BOB App overhaul:
* **Brand Logos:** SVG, PNG (responsive variants)
* **UI Icons:** SVG (24x24 base grid, stroke/filled)
* **Typography:** WOFF2, TTF (defined CSS/JSON tokens)
* **Color Tokens:** JSON, CSS variables (light/dark modes)
* **2D Illustrations:** SVG, Lottie (JSON)
* **3D Style Frames:** PNG, GLTF
* **App Store Assets:** PNG, JPEG (device-specific resolutions)
* **Web Assets:** WebP, JPEG (multi-breakpoint)
* **Marketing Templates:** Figma, PSD, MP4

## 4. Governance & Approvals Matrix
All deliverables must pass through these explicit approval gates before implementation or export.

| Asset Domain | Owner (A) | Reviewer (R) | Approver (App) |
| :--- | :--- | :--- | :--- |
| **Design System (Tokens)** | Design Ops | Frontend Lead | Design Lead |
| **App UI (2D/3D)** | UX Designer | Design Lead | Product Lead |
| **GTM & Marketing** | Brand Designer | Marketing Lead | Marketing Lead |
| **Core Brand (Logos)** | Brand Lead | Design Lead | Exec Team |

**Critical Policy:** Any asset, copy, or template containing efficacy, medical, or clinical claims (e.g., "improves gum health") mandates explicit sign-off from Legal/Compliance before it can be approved.
