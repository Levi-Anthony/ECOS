# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-17*

---

## Current Mode
PARK

## Open Loops
- Neil Wave 1.5 (4-year universities / creative writing programs) — delivering TODAY, overdue, highest priority at next boot
- IT MCP tools smoke test — verify log_service_call → get_unbilled_work → create_billing_entry, confirm rows in Supabase
- BRAIN browser smoke test — open /brain, filter, click thought, copy ID, run link_thought_to_contact
- TTC public-facing messaging doc — April 23 festival, imminent but can wait
- PURPOSE.md — unwritten; blocks N2 Heartbeat chain + F3 Boot protocol fix
- Apple Shortcuts N3/N4 — specs written, not built on phone
- Boot protocol amendment — UTC offset awareness + BRAIN-wins-on-conflict rule analyzed but not written to ecos-boot skill file
- BRAIN cleanup Trigger #1 inactive — 20-query baseline retrieval audit not yet run
- BRAIN-CLEANUP-SPEC.md not tracked in ~/ecos git repo — copy to docs/ still open
- RLS on dashboard — deferred Sprint 5
- contact_roles junction table — deferred

## Dispatcher Queue
- Neil Wave 1.5 delivery is the first action. IT smoke test is second. Everything else queues after those two.

## Decisions Made This Session
- BRAIN-CLEANUP-SPEC.md parked — triggers defined (Trigger #1 currently inactive; baseline audit required to activate it)
- Park-cancellation condition locked: if ingest atomization is retroactively applied to pre-baseline entries, cancel manual cleanup entirely
- BRAIN-CLEANUP-SPEC.md v1.2 amendments applied: UUID v4 baseline ID replaced with baseline timestamp (MAX(created_at)); BLOCKER flag added to exception queue row in Open Decisions
- BRAIN-CLEANUP-SPEC.md confirmed at vault ECOS-PROJECTS/BRAIN_Cleanup_SPEC.md — not in ~/ecos repo
- April 3 task list (1721ecc8) fully verified: all five items DONE
- Boot protocol rule identified (not yet applied): BRAIN wins over HANDOFF on thread-level conflicts; "next-day" UTC timestamps within 7h of HANDOFF write time are same-session
- ecos-deep is a building skill, not a reasoning skill — load only when executing architecture changes

## Captures Pending
none — 6 captures fired and confirmed

## Next Session Primer
Neil Wave 1.5 is overdue — deliver today before anything else. Load the neil skill and confirm the contact list and email copy are ready to send.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-17 | Amend ecos-boot skill: add UTC offset correction (MST = UTC-7, fixed) and BRAIN-wins-on-conflict rule for thread-level HANDOFF/BRAIN discrepancies | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
