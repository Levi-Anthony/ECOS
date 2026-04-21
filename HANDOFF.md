# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-21*

---

## Current Mode
PARK

## Open Loops
- TTC public-facing messaging doc — April 23 festival (2 days out) — MOST URGENT
- BRAIN backfill — agent prompt at ~/ecos/docs/backfill-agent-prompt.md; run via ChatGPT Agent
- iCloud → Google Calendar sync — two options: webcal subscription or add Google account to iOS Calendar
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- Wave 2 PDF — J1–J4 still unresolved; pool 32 Send / 19 Caution / 12 Hold
- IT smoke test — log_service_call → get_unbilled_work → create_billing_entry
- ecos-harvest skill — design validated, not yet formalized into skill file

## Dispatcher Queue
- TTC messaging doc (time-critical — April 23)
- BRAIN backfill (highest leverage one-time task)
- iCloud → Google Calendar sync
- DND Apple Shortcut

## Decisions Made This Session
- Afternoon BRAIN surface suppressed during active Claude Code sessions (behavioral rule, applied consistently)
- CronDelete on auto-fired one-shot returns expected error — handle gracefully, proceed to CronCreate

## Captures Pending
none

## Next Session Primer
TTC messaging doc is 2 days from the April 23 festival — open with that or it will be too late.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-18 | Formalize harvest workflow into ecos-harvest skill file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
