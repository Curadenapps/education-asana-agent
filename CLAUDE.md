# Claude Code — Curadenapps Agents

## System Context

Read [`README.md`](README.md) for the full system architecture before taking any action in this repo.

## Skills

The following skills are available and will auto-load based on trigger phrases:

- **`skills/curaden-communications/SKILL.md`** — RevolveNote sync, Jira-Notion BOB sync, BOB weekly broadcast

Trigger phrases are defined in each SKILL.md frontmatter. Skills load their own reference files as needed.

## Agents

When running agents from this repo, load the relevant agent file for context:

- [`agents/truth-catcher.md`](agents/truth-catcher.md) — Asana alignment enforcement
- [`agents/brand-asset.md`](agents/brand-asset.md) — Brand asset governance
- [`agents/asana-maintenance.md`](agents/asana-maintenance.md) — Kanban routing and update snippets

## Scope

Before taking any action, check [`SCOPE.md`](SCOPE.md) for hard boundaries.
Never modify `.truth-cache/` directly — it is auto-synced from Notion.

## MCP Tools Available

| Tool prefix | Service |
|-------------|---------|
| `mcp__cba144a5-138f-455b-8987-f84b72c3c4e9__` | Jira / Atlassian |
| `mcp__58bd2daa-0ddc-4a1b-943b-fea8681cc8c6__` | Notion |
| `mcp__607b64a3-ac1e-4636-a7dd-98ed14f34e34__` | Asana |

## Project State

GSD planning docs are in `.planning/`. Run `/gsd:progress` to check current phase.
