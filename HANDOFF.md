# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-17*

---

## Current Mode
PARK

## Open Loops
- Wave 2 PDF — 4 judgment calls unresolved before PDF build: (J1) Andrew Butler: named contact vs. journal inbox; (J2) Amy Webb/Cheryl Cooney: pool and log inconsistent; (J3) Rubric criterion 3 vs. 7 gateway-email contacts; (J4) email confidence display format in delivery PDF
- TTC public-facing messaging doc — April 23 festival, hard stop ~April 20, URGENT
- IT MCP smoke test — log_service_call → get_unbilled_work → create_billing_entry; verify rows in Supabase
- ecos-boot amendment — UTC offset correction (MST = UTC-7) and BRAIN-wins-on-conflict rule; analyzed, not yet written
- PURPOSE.md — unwritten; blocks N2 Heartbeat chain + F3 Boot protocol fix
- BRAIN cleanup Trigger #1 — baseline audit not yet run
- Maddie Stone reachability — moved to Caution; if current contact surfaces she is Send-grade
- Jairus Grove — conflicting sources; do not include without direct confirmation

## Dispatcher Queue
- Resolve J1–J4 → build Wave 2 delivery PDF (first)
- TTC messaging doc (second, April 20 hard stop)
- IT smoke test (third)

## Decisions Made This Session
- Zero-trust hostile audit is the active operating standard for all research documents (classify claims, evidence every fact, red-team corrections, gate with STATUS label)
- Maddie Stone moved from Send to Caution — contact page 404, only email is 2020 launch-post Gmail (UNVERIFIED); pool corrected to 32 Send / 19 Caution / 12 Hold
- Wave 2 pool counts corrected throughout pool file and verification log

## Captures Pending
none — 3 captures fired and confirmed

## Next Session Primer
Wave 2 pool is at 32 Send / 19 Caution / 12 Hold with 4 judgment calls blocking the PDF build — load the neil skill, resolve J1–J4, then build the delivery PDF. TTC doc is parallel urgent and cannot slip past April 20.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-17 | Amend ecos-boot skill: add UTC offset correction (MST = UTC-7) and BRAIN-wins-on-conflict rule for thread-level HANDOFF/BRAIN discrepancies | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
