# Curadenapps Agents

Automated agents and invokable skills for Curaden's BOB App and cross-tool workflows.
Works with Claude Code, Gemini CLI, and any model that reads markdown agent definitions.

---

## System Architecture

```
README.md          ← You are here. System overview and entry point.
CLAUDE.md          ← Claude Code instructions (auto-loaded by Claude)
GEMINI.md          ← Gemini CLI instructions (auto-loaded by Gemini)
SCOPE.md           ← Hard boundaries: what this system can and cannot do
│
├── skills/        ← SKILL & SCOPE — invokable on demand by any session
│   └── curaden-communications/
│       ├── SKILL.md            ← Main entry point (3 procedures)
│       └── references/         ← Procedure-level config (JQL, templates, repo details)
│
├── agents/        ← Automated agents — run on schedule or triggered
│   ├── truth-catcher.md        ← Alignment enforcer (Notion vs Asana)
│   ├── brand-asset.md          ← Brand asset governance and delivery
│   └── asana-maintenance.md    ← Asana hygiene, Kanban routing, update snippets
│
├── src/           ← API integrations (Notion sync, Asana read/write)
├── .github/       ← GitHub Actions (CRON: constitution sync, frontier scan)
└── .planning/     ← GSD project planning docs (roadmap, requirements, state)
```

---

## Skill & Scope

Skills are invokable by any Claude or Gemini session. Trigger by phrase — no manual setup.

### `curaden-communications` → [`skills/curaden-communications/SKILL.md`](skills/curaden-communications/SKILL.md)

| Trigger phrase | Procedure | What it does |
|----------------|-----------|-------------|
| "sync revolvenote" | RevolveNote Weekly Sync | Stage + push latest RevolveNote app to `github.com/Curadenapps/revolvenote` |
| "sync BOB to Notion" | Jira-Notion BOB Sync | Mirror all open BOB Jira issues into Notion pages (create or update) |
| "run BOB broadcast" | BOB Weekly Broadcast | Generate weekly sprint summary (Done / In Progress / Blockers) and post to Notion |

Config details for each procedure: [`skills/curaden-communications/references/`](skills/curaden-communications/references/)

---

## Agent Roster

Agents run autonomously on schedule or by explicit invocation. Each has a strictly fenced domain.

| Agent | File | Role | Trigger |
|-------|------|------|---------|
| Truth Catcher | [`agents/truth-catcher.md`](agents/truth-catcher.md) | Alignment enforcer — scans Asana, cross-references Notion, posts 🛑 or ✅ verdicts | Hourly CRON via `.github/workflows/02-scan-frontier.yml` |
| Brand Asset | [`agents/brand-asset.md`](agents/brand-asset.md) | Brand asset governance — taxonomy, approvals, export checklists, weekly status | On demand |
| Asana Maintenance | [`agents/asana-maintenance.md`](agents/asana-maintenance.md) | Kanban routing, update snippets, directive processing | Webhook or polling |

---

## Core Philosophy

| Layer | Tool | Role |
|-------|------|------|
| **The Constitution** | Notion | Immutable strategic requirements and brand guidelines. Source of truth. |
| **The Frontier** | Asana | Execution layer — feedback, comments, tasks, moving parts. |
| **The Engine** | This repo | Bridges the two. Enforces Notion's truth onto Asana's chaos. Stays self-documented. |

The Truth Catcher exists because the gap between strategy (Notion) and execution (Asana) is where scope creep lives.
Skills exist because recurring sync/broadcast workflows should not require human context-switching.

---

## Governance

See [`SCOPE.md`](SCOPE.md) for hard boundaries — what this system can and cannot do.

Key rules:
- Clinical/medical claims require Legal gate before any asset ships
- Truth Catcher cannot take destructive Asana actions — comments only
- `.truth-cache/` is auto-synced from Notion — never edit manually
- Brand assets need `[Agent Audit: Approved by {Name} on {Date}]` before Done transition

---

## Setup

```bash
git clone https://github.com/Curadenapps/curagents.git
cd curagents
npm install
cp .env.example .env   # populate credentials
```

Required environment variables:

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Claude (Truth Catcher, skills) |
| `NOTION_API_KEY` | Constitution sync + BOB broadcast |
| `NOTION_REQUIREMENTS_DB_ID` | Notion requirements database |
| `ASANA_ACCESS_TOKEN` | Frontier scan + Kanban routing |
| `ASANA_PROJECT_GID` | BOB App Asana project |

For model-specific setup: see [`CLAUDE.md`](CLAUDE.md) or [`GEMINI.md`](GEMINI.md).
