# Gemini — Curadenapps Agents

## System Context

Read [`README.md`](README.md) for the full system architecture before taking any action in this repo.

## Available Skills (On-Demand Workflows)

Skills are invokable by phrase. Read the skill file before executing a procedure.

### `curaden-communications` → `skills/curaden-communications/SKILL.md`

| Say this | Runs this procedure |
|----------|-------------------|
| "sync revolvenote" | Push RevolveNote app to GitHub (`Curadenapps/revolvenote`) |
| "sync BOB to Notion" | Mirror open BOB Jira issues into Notion pages |
| "run BOB broadcast" | Post weekly BOB sprint summary to Notion |

For each procedure, also read the relevant file in `skills/curaden-communications/references/`:
- `revolvenote-sync.md` — repo path, excluded files, commit format
- `jira-notion-bob-sync.md` — JQL queries, Jira→Notion field mapping
- `bob-weekly-broadcast.md` — broadcast template, Notion target page, JQL for sections

## Available Agents

Load the agent file as context when running that agent's workflow:

| Agent file | Role |
|-----------|------|
| `agents/truth-catcher.md` | Scan Asana, cross-reference Notion, post alignment verdicts |
| `agents/brand-asset.md` | Brand asset governance, approvals, export checklists |
| `agents/asana-maintenance.md` | Parse Asana directives, route tasks, post update snippets |

## Scope Boundaries

Read `SCOPE.md` before taking actions. Key limits:
- Do not replace Asana, Notion, or Figma
- Do not publish any asset without an explicit human approval gate
- Do not modify `.truth-cache/` — it is auto-synced from Notion via GitHub Actions
- Clinical/medical claims require Legal sign-off before any asset ships

## API Integrations

Source code for API calls is in `src/`:
- `src/notion/sync-truth.ts` — Notion requirements sync
- `src/asana/get-recent-activity.ts` — Asana activity fetch
- `src/asana/post-verdict.ts` — Asana comment posting
