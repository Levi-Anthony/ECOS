# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-23*

---

## Current Mode
PARK

## Open Loops
- Richard and Evelyn actor seeding — next in queue (run extractions in claude.ai, paste to Claude Code)
- BRAIN backfill via ChatGPT Agent (prompt at ~/ecos/docs/backfill-agent-prompt.md)
- Wave 2 PDF — J1–J4 unresolved; pool 32 Send / 19 Caution / 12 Hold
- iCloud → Google Calendar sync — two options: webcal subscription or add Google account to iOS Calendar
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- BRAIN-CLEANUP-SPEC.md — not yet symlinked into ~/ecos/docs/ (still Obsidian-only)
- Smoke Test Client (ID: d218d5e5-2033-4593-881d-adced3e43e34) — test artifact, safe to delete
- Claude.ai memories → BRAIN bridge — periodic operation until BRAIN reaches critical mass
- TTC messaging edits — resurface next session
- Preview/Development env vars not set on Vercel — only Production has Supabase keys
- Semantic BRAIN search — deferred to next dashboard phase (requires OpenAI API route)

## Dispatcher Queue
- Seed Richard and Evelyn (next — paste claude.ai extractions to Claude Code)
- BRAIN backfill via ChatGPT Agent

## Decisions Made This Session
- Dashboard Phase 4 shipped: /people hub, going cold on /follow-ups, IT unbilled on /weekly, briefings type filter, 11 bug/polish fixes
- Vitest test suite added: 79 tests across 4 files (helpers, aggregations, intel-status, schema-types)
- lib/logic.ts created: all pure functions extracted with injectable clock pattern
- aggregateUnbilled widened to accept undefined (ServiceLog optional field) — production build fix
- Vercel rootDirectory set to apps/crm-dashboard via PATCH API — was root cause of 3 consecutive failed build failures
- Dashboard live and READY on Vercel: crm-dashboard-levi-anthonys-projects.vercel.app
- BRAIN domain colors unified: violet canonical for ecos-architecture across all pages
- STAGE_COLORS, BRAIN_DOMAIN_COLORS, BRAIN_DOMAIN_LABELS centralized to lib/supabase.ts
- Harvest protocol: compose + align before execute (T2 — confirmed as taste signal)
- Instruction expansion: "generalize from one to the next" is standing active instruction (T1)
- 9 BRAIN captures made: C1–C7 + T1 + T2
- 2 vault files written: phase4-audit.md, phase4-plan.md to ECOS-PROJECTS/CRM_Dashboard/

## Captures Pending
none

## Next Session Primer
Victoria and Kate seeded and snapshotted, dashboard Phase 4 complete and live — paste Richard and Evelyn claude.ai extractions to continue actor seeding; the pipeline is proven and fast.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
