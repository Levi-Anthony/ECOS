# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-22*

---

## Current Mode
PARK

## Open Loops
- Restart Claude Code → run people-intel smoke test (add_person_observation → get_person_card on Victoria)
- Seed person_observations for Victoria, Kate, Richard, Evelyn from claude.ai memory dump (extraction prompts in docs/people-intel-prompts.md)
- Victoria CRM stub (ID: 5783c737-8609-4d96-824b-04445285be7d) — needs last name filled in via update_contact
- Smoke Test Client (ID: d218d5e5-2033-4593-881d-adced3e43e34) — test artifact, safe to delete
- BRAIN backfill via ChatGPT Agent (agent prompt at ~/ecos/docs/backfill-agent-prompt.md)
- iCloud → Google Calendar sync — two options: webcal subscription or add Google account to iOS Calendar
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- Wave 2 PDF — J1–J4 still unresolved; pool 32 Send / 19 Caution / 12 Hold
- supabase.ts Opportunity type: `expected_close_date` vs DB column `close_date` — type cast workaround in /weekly, needs proper fix
- BRAIN-CLEANUP-SPEC.md — not yet symlinked into ~/ecos/docs/ (still Obsidian-only)
- Claude.ai memories → BRAIN bridge — periodic operation until BRAIN reaches critical mass
- TTC messaging edits — not urgent; resurface daily until finished

## Dispatcher Queue
- Restart → people-intel smoke test → seed Victoria, Kate, Richard, Evelyn
- Fill in Victoria's surname in CRM
- BRAIN backfill via ChatGPT Agent

## Decisions Made This Session
- IT smoke test passed: log_service_call → get_unbilled_work → create_billing_entry chain confirmed clean; create_billing_entry_tx atomic marking verified
- Tools 18-22 confirmed live on server via direct HTTP (22 tools total advertised by ecos-crm-mcp)
- MCP session tool registry is fixed at connection time — new tools only visible after Claude Code restart (captured in BRAIN)
- people-intel-cheatsheet.pdf generated via reportlab: docs/people-intel-cheatsheet.pdf
- people-intel-mobile-prompts.md written: docs/people-intel-mobile-prompts.md (5 modes: capture, retrieval, analysis, extraction, sync)
- people-intel-prompts.md extraction template filled in for Victoria by user

## Captures Pending
none

## Next Session Primer
Restart Claude Code first (picks up Tools 18-22), then run add_person_observation → get_person_card on Victoria to smoke test the people-intel layer, then begin actor seeding from claude.ai extraction prompts.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
