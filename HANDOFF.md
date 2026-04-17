# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-17*

---

## Current Mode
PARK

## Open Loops
- Wave 2 delivery PDF — pool verified and clean at 33 Send / 18 Caution / 12 Hold; PDF build is the only remaining blocker before bundling Waves 1, 1.5, and 2
- Maddie Stone reachability — contact page 404, only email is sciencefictionreboot@gmail.com (2020 launch post); judgment call whether to move to Caution before PDF build
- Jairus Grove — conflicting official sources (UH pages show current; Ignite Labs bio uses past tense); do not include without direct confirmation
- Deep Research discovery prompt written and handed to Levi — new contacts not yet processed or added to pool
- Wave 3 decision — pending after Wave 2 delivery doc is in hand
- IT MCP smoke test — log_service_call → get_unbilled_work → create_billing_entry; verify rows in Supabase
- TTC public-facing messaging doc — April 23 festival, URGENT, cannot slip past ~April 20
- Boot protocol amendment — ecos-boot skill: UTC offset correction (MST = UTC-7) and BRAIN-wins-on-conflict rule; analyzed but not written
- PURPOSE.md — unwritten; blocks N2 Heartbeat chain + F3 Boot protocol fix
- BRAIN cleanup Trigger #1 — baseline audit not yet run

## Dispatcher Queue
- Wave 2 PDF build is first action. TTC doc is second (April 20 hard stop). IT smoke test queues after those two.

## Decisions Made This Session
- Wave 2 verification methodology locked: individual per-contact Deep Research grade, not batch scraping — matches Wave 1 standard
- Wave 2 rationale tone locked: plain and factual; no conclusive language, metaphors, or superlatives (applied to all 33 Send contacts)
- Wave 2 pool finalized: 33 Send / 18 Caution / 12 Hold, all corrections applied from two verification passes
- ChatGPT Deep Research is the right tool for contact verification (Claude Code subagents cannot use WebFetch)
- Paul March-Russell confirmed outgoing at Foundation journal; Nick Hubble is incoming editor (autumn 2026); outreach to March-Russell can proceed

## Captures Pending
none — 5 captures fired and confirmed

## Next Session Primer
Wave 2 pool is verified and clean — load the neil skill and build the delivery PDF. Pool file: `Neil_Wave2_CandidatePool.md` in iCloud CloudDocs folder. Verification log is alongside it. PDF needs a "Why" column added to the Wave 1 format.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-17 | Amend ecos-boot skill: add UTC offset correction (MST = UTC-7) and BRAIN-wins-on-conflict rule for thread-level HANDOFF/BRAIN discrepancies | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
