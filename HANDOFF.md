# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-18*

---

## Current Mode
PARK

## Open Loops
- N2 morning briefing not yet verified — test at 6 AM in --dangerously-skip-permissions session; run /life-engine manually if cron doesn't fire
- CronCreate UTC offset risk — reschedule logic uses MST time, CronCreate may interpret as UTC; watch morning run result
- life_engine_state cron_job_id upsert — may not have persisted from smoke test; verify after morning run
- iOS Calendar → Google Calendar sync — iCloud personal events invisible to Heartbeat until synced (Option A: webcal subscription; Option B: add Google account to iOS Calendar)
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- Wave 2 PDF — J1–J4 still unresolved; pool 32 Send / 19 Caution / 12 Hold
- TTC public-facing messaging doc — April 23 festival
- BRAIN backfill — agent prompt ready at ~/ecos/docs/backfill-agent-prompt.md; run via ChatGPT Agent
- IT smoke test — log_service_call → get_unbilled_work → create_billing_entry
- ecos-harvest skill — design validated, not yet formalized into skill file

## Dispatcher Queue
- Verify N2 Telegram delivery (6 AM test)
- Sync iCloud calendar to Google Calendar
- BRAIN backfill (highest leverage — one-time, permanently upgrades retrieval)
- Resolve Wave 2 J1–J4 → build PDF

## Decisions Made This Session
- PURPOSE.md written (Q2 2026) — N2 Heartbeat chain + F3 Boot protocol fix now unblocked
- ECOS delivery architecture revised: Telegram primary (bidirectional), Apple Shortcuts for PULSE_LOG only (outbound)
- iOS Action Button can dispatch to Telegram hooks — layers, not parallel systems
- Habit tracking: life_engine tables created, activation deferred to follow-on session
- N2 Heartbeat built: migration applied, life-engine skill written, ecos-pulse skill updated
- Telegram bot @ECOSPulse_bot paired (chat_id: 8354177213), bun v1.3.12 installed
- Luci's songs and TDJ_Tool captured to BRAIN (both were active but uncaptured)
- Curly apostrophe (U+2019) in vault path 'Nate's Notes' — use python3 to access

## Captures Pending
none

## Next Session Primer
Check whether the 6 AM cron fired and Telegram delivery worked — if yes, N2 is live; if not, fix the UTC offset in the reschedule logic and verify life_engine_state upsert.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-18 | Formalize harvest workflow into ecos-harvest skill file | pending
2026-04-18 | Fix CronCreate UTC offset in life-engine reschedule logic | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
