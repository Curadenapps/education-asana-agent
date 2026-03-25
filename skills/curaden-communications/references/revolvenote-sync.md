# RevolveNote Sync — Reference

Details for Procedure 1 of `curaden-communications`.

## Repository

| Field | Value |
|-------|-------|
| Local path | `C:/Users/Dunne/revolvenote` |
| Remote (primary) | `https://github.com/Curadenapps/revolvenote` |
| Remote (personal) | `https://github.com/DunneWorks/revolvenote` |
| Default branch | `main` |

To navigate to the repo before running git commands:
```bash
cd "C:/Users/Dunne/revolvenote"
```

## Remotes Setup

Check current remotes before pushing:
```bash
git remote -v
```

If `curadenapps` remote is missing, add it:
```bash
git remote add curadenapps https://github.com/Curadenapps/revolvenote.git
```

Push to Curadenapps:
```bash
git push curadenapps main
```

## Excluded Files / Directories

Do NOT stage or commit these — they contain secrets or are environment-specific:

```
.env
.env.local
.env.production
google-services.json
GoogleService-Info.plist
android/local.properties
ios/App/App/GoogleService-Info.plist
node_modules/
dist/
.angular/cache/
capacitor.config.ts  # Only if it contains secrets
```

Use `.gitignore` to verify — if a file is already ignored, `git add -A` won't include it.

## Commit Message Format

```
sync: weekly revolvenote sync YYYY-MM-DD
```

Example:
```
sync: weekly revolvenote sync 2026-03-25
```

For manual/on-demand syncs triggered outside the schedule:
```
sync: on-demand revolvenote sync YYYY-MM-DD
```

## What to Check Before Pushing

1. Run `git status` to preview what will be staged
2. If `package-lock.json` changed but no packages were added, include it — it reflects dependency resolution
3. If only build artifacts changed (`dist/`), these should be gitignored and won't appear
4. If the diff is unexpectedly large (>50 files), ask the user to confirm before pushing

## Typical Changed Files

Expected files in a normal weekly sync:

- `src/app/**/*.ts` — component and service changes
- `src/app/**/*.html` — template changes
- `src/assets/**` — updated assets
- `angular.json` — build config changes
- `package.json` / `package-lock.json` — dependency updates
- `capacitor.config.json` — mobile config (not `.ts`)

## Post-Sync

After a successful push, optionally update the `deploy-on-github-request` pattern if needed.
The sync does NOT create an IMPLEMENTATION PLAN.md — that's handled by the `deploy-on-github-request` skill separately.
