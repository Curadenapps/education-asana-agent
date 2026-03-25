# Curadenapps / Agents

Claude Code skills and agent orchestration for Curaden's BOB App and cross-tool workflows. Built on the **Get Shit Done (GSD)** framework with Claude Code subagents.

---

## Skills

### [`curaden-communications`](skills/curaden-communications/SKILL.md)

Single invokable skill covering three recurring workflows:

| Trigger | What it does |
|---------|-------------|
| "sync revolvenote" | Push RevolveNote app to `github.com/Curadenapps/revolvenote` |
| "sync BOB to Notion" | Mirror open BOB Jira issues into Notion pages |
| "run BOB broadcast" | Post weekly BOB sprint summary to Notion |

**Entry point:** [`skills/curaden-communications/SKILL.md`](skills/curaden-communications/SKILL.md)
**Config details:** [`skills/curaden-communications/references/`](skills/curaden-communications/references/)

---

## Core Philosophy: The Constitution vs. The Frontier

To prevent scope creep and maintain alignment during the BOB App redesign:

- **Notion is the Constitution:** Holds the immutable strategic requirements and brand guidelines.
- **Asana is the Frontier:** The execution layer where feedback, comments, and moving parts happen.
- **This Repository is the Engine:** Bridges the two, enforcing Notion's truth onto Asana's chaos while keeping itself documented.

---

## The Dual-Agent Ecosystem

### 1. The Truth Catcher (`truth-catcher.md`)

**Role:** Project Alignment Enforcer & Auditor.
Scans recent Asana activity and cross-references it against the authorized Notion requirements. If a request violates the roadmap, the agent posts a `🛑` rejection comment on the task.

### 2. The Docs Agent (`docs-agent.md`)

**Role:** Automated Technical Writer.
Reads the codebase and maintains the `docs/` directory so API integrations, webhook logic, and operational playbooks are always up to date. Strictly fenced from modifying `src/` via `.claude/hooks/docs-only-writes.sh`.

---

## Architecture

```text
curagents/
├── skills/
│   └── curaden-communications/   # Invokable Claude skill (3 procedures)
│       ├── SKILL.md
│       └── references/
├── .claude/
│   ├── agents/
│   │   ├── truth-catcher.md
│   │   └── docs-agent.md
│   └── hooks/
│       ├── block-truth-edits.sh
│       └── docs-only-writes.sh
├── .github/
│   └── workflows/
│       ├── 01-sync-constitution.yml   # CRON: Notion → .truth-cache/
│       └── 02-scan-frontier.yml       # CRON: Truth Catcher Asana audit
├── src/
│   ├── notion/sync-truth.ts
│   └── asana/
│       ├── get-recent-activity.ts
│       └── post-verdict.ts
├── .truth-cache/                      # ⚠️ Auto-synced from Notion. DO NOT EDIT.
└── .planning/                         # GSD project planning docs
```

---

## Setup

```bash
git clone https://github.com/Curadenapps/curagents.git
cd curagents
npm install
```

Copy `.env.example` → `.env` and populate:

```
NOTION_API_KEY=
NOTION_REQUIREMENTS_DB_ID=
ASANA_ACCESS_TOKEN=
ASANA_PROJECT_GID=
ANTHROPIC_API_KEY=
```
