# Requirements: Curaden Communications Automation

**Defined:** 2026-03-25
**Core Value:** Any Claude session can run Curaden's 3 cross-tool sync/broadcast workflows with a single trigger phrase

## v1 Requirements

### Skill Invocation

- [ ] **SKILL-01**: Claude can trigger RevolveNote weekly sync by saying "run revolvenote sync", "sync revolvenote", "push revolvenote to GitHub", or similar
- [ ] **SKILL-02**: Claude can trigger Jira→Notion BOB sync by saying "sync BOB to Notion", "run jira notion sync", "sync BOB issues", or similar
- [ ] **SKILL-03**: Claude can trigger BOB weekly broadcast by saying "run BOB broadcast", "send weekly BOB update", "post BOB status", or similar

### RevolveNote Sync

- [ ] **RNOTE-01**: Skill stages all modified RevolveNote files for commit
- [ ] **RNOTE-02**: Skill creates a timestamped commit (format: `sync: weekly revolvenote sync [YYYY-MM-DD]`)
- [ ] **RNOTE-03**: Skill pushes to `github.com/Curadenapps/revolvenote` (main branch)
- [ ] **RNOTE-04**: Skill reports list of changed files and push confirmation to user

### Jira-Notion BOB Sync

- [ ] **JIRA-01**: Skill queries all open BOB project issues from Jira using JQL
- [ ] **JIRA-02**: For each Jira issue, skill searches Notion for a matching page by issue key
- [ ] **JIRA-03**: If no Notion page exists for an issue, skill creates one with title, status, priority, and assignee
- [ ] **JIRA-04**: If a Notion page exists, skill updates status and priority fields
- [ ] **JIRA-05**: Skill reports count of created and updated Notion pages on completion

### BOB Weekly Broadcast

- [ ] **BROAD-01**: Skill queries Jira for BOB issues closed/resolved in the last 7 days (Done)
- [ ] **BROAD-02**: Skill queries Jira for BOB issues currently In Progress
- [ ] **BROAD-03**: Skill queries Jira for BOB issues flagged as blocked or high-priority open
- [ ] **BROAD-04**: Skill formats results as a structured broadcast (Done / In Progress / Blockers sections)
- [ ] **BROAD-05**: Skill creates a new Notion page in the designated BOB broadcast space with the formatted content
- [ ] **BROAD-06**: Skill returns the URL of the created Notion broadcast page

### Packaging

- [ ] **PKG-01**: All 3 procedures live in a single `skills/curaden-communications/` folder
- [ ] **PKG-02**: Detailed JQL patterns live in `references/jira-notion-bob-sync.md`
- [ ] **PKG-03**: Broadcast template lives in `references/bob-weekly-broadcast.md`
- [ ] **PKG-04**: RevolveNote sync details (repo path, excluded files) live in `references/revolvenote-sync.md`
- [ ] **PKG-05**: Skill is committed and pushed to `github.com/Curadenapps/Agents`

## v2 Requirements

### Enhancements

- **RNOTE-V2-01**: Sync also updates a Notion "RevolveNote Releases" page with changelog
- **JIRA-V2-01**: Two-way sync — Notion status changes propagate back to Jira
- **BROAD-V2-01**: Broadcast delivered to Slack channel in addition to Notion
- **BROAD-V2-02**: Broadcast includes sprint velocity and burndown metrics

## Out of Scope

| Feature | Reason |
|---------|--------|
| Automated scheduling via Claude Code | claude.ai handles scheduling; this skill handles on-demand invocation |
| Slack/email delivery for v1 broadcasts | Notion page is the broadcast target; delivery channel expansion is v2 |
| Two-way Notion→Jira sync | Jira is source of truth; risk of conflicts not worth v1 complexity |
| RevolveNote Notion sync | App code lives on GitHub; notes sync is a separate concern |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SKILL-01 | Phase 2 | Pending |
| SKILL-02 | Phase 3 | Pending |
| SKILL-03 | Phase 4 | Pending |
| RNOTE-01 | Phase 2 | Pending |
| RNOTE-02 | Phase 2 | Pending |
| RNOTE-03 | Phase 2 | Pending |
| RNOTE-04 | Phase 2 | Pending |
| JIRA-01 | Phase 3 | Pending |
| JIRA-02 | Phase 3 | Pending |
| JIRA-03 | Phase 3 | Pending |
| JIRA-04 | Phase 3 | Pending |
| JIRA-05 | Phase 3 | Pending |
| BROAD-01 | Phase 4 | Pending |
| BROAD-02 | Phase 4 | Pending |
| BROAD-03 | Phase 4 | Pending |
| BROAD-04 | Phase 4 | Pending |
| BROAD-05 | Phase 4 | Pending |
| BROAD-06 | Phase 4 | Pending |
| PKG-01 | Phase 1 | Pending |
| PKG-02 | Phase 3 | Pending |
| PKG-03 | Phase 4 | Pending |
| PKG-04 | Phase 2 | Pending |
| PKG-05 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 23 total
- Mapped to phases: 23
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-25*
*Last updated: 2026-03-25 after initial definition*
