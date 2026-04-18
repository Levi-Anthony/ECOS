# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-18*

---

## Current Mode
PARK

## Open Loops
- N2 morning briefing requires session open overnight — accepted constraint per Nate's canonical design; tmux or restart-at-boot are the two options
- iOS Calendar → Google Calendar sync — iCloud personal events invisible to Heartbeat (Option A: webcal subscription; Option B: add Google account to iOS Calendar)
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- Wave 2 PDF — J1–J4 still unresolved; pool 32 Send / 19 Caution / 12 Hold
- TTC public-facing messaging doc — April 23 festival (4 days out)
- BRAIN backfill — agent prompt ready at ~/ecos/docs/backfill-agent-prompt.md; run via ChatGPT Agent
- IT smoke test — log_service_call → get_unbilled_work → create_billing_entry
- ecos-harvest skill — design validated, not yet formalized into skill file

## Dispatcher Queue
- TTC messaging doc (time-sensitive — April 23)
- BRAIN backfill (highest leverage — one-time)
- iCloud → Google Calendar sync
- DND Apple Shortcut

## Decisions Made This Session
- CronCreate uses local time natively — no UTC conversion needed (confirmed from tool docs + live test)
- CronCreate jobs are session-only — `durable: true` does not persist to disk in current environment
- Root cause of missed 6 AM briefing: previous session ended, killing the cron job (not a UTC error)
- Nate's Life Engine canonical design: `/loop 30m /life-engine` is the foundation; CronCreate dynamic scheduling is an optimization layer inside the skill
- Overnight persistence: accepted constraint per OB1 canonical design — keep session open (tmux) or restart in the morning
- life-engine SKILL.md updated to match Nate's spec: `recurring: true` with `*/interval * * * *` for active hours
- Status line configured to show context usage percentage

## Captures Pending
none

## Next Session Primer
TTC messaging doc is 4 days from the April 23 festival — this is the most time-sensitive open loop; BRAIN backfill is highest leverage if TTC is handled.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-18 | Formalize harvest workflow into ecos-harvest skill file | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
