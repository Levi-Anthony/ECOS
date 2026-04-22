# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-22*

---

## Current Mode
PARK

## Open Loops
- Richard and Evelyn actor seeding — next in queue (run extractions in claude.ai, paste to Claude Code)
- BRAIN backfill via ChatGPT Agent (prompt at ~/ecos/docs/backfill-agent-prompt.md)
- Wave 2 PDF — J1–J4 unresolved; pool 32 Send / 19 Caution / 12 Hold
- iCloud → Google Calendar sync — two options: webcal subscription or add Google account to iOS Calendar
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- supabase.ts Opportunity type: `expected_close_date` vs DB column `close_date` — type cast workaround in /weekly, needs proper fix
- BRAIN-CLEANUP-SPEC.md — not yet symlinked into ~/ecos/docs/ (still Obsidian-only)
- Smoke Test Client (ID: d218d5e5-2033-4593-881d-adced3e43e34) — test artifact, safe to delete
- Claude.ai memories → BRAIN bridge — periodic operation until BRAIN reaches critical mass
- TTC messaging edits — not urgent; resurface daily until finished

## Dispatcher Queue
- Seed Richard and Evelyn (next — paste claude.ai extractions to Claude Code)
- BRAIN backfill via ChatGPT Agent

## Decisions Made This Session
- People-intel smoke test passed: add_person_observation → get_person_card chain confirmed live on Tools 18–22
- Victoria Hermosilla: CRM stub name updated, 21 observations seeded, snapshot compiled (ID: abcb8f89)
- Kate Rosalik: added to CRM (tango domain, administrative_closed), 34 observations seeded, snapshot compiled (ID: 2b1dcc98)
- Kate engagement posture locked: TTC board = full professional engagement (leave baggage at door); non-board = not available for casual conversation, small-group settings, or unstructured one-on-one time
- Kate shared assets (funds, mailing list, website, brand) framed as "parked and sealed" — not stale, not resolved, factored in when relevant
- Life-engine cron running as job 80169030 (7,22,37,52 * * * *, 15-min interval)

## Captures Pending
none

## Next Session Primer
Victoria and Kate are seeded and snapshotted — paste Richard and Evelyn claude.ai extractions to continue actor seeding; the pipeline is proven and fast.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
