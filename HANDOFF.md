# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-18*

---

## Current Mode
PARK

## Open Loops
- Wave 2 PDF — 4 judgment calls unresolved: (J1) Andrew Butler: named contact vs. journal inbox; (J2) Amy Webb/Cheryl Cooney: pool and log inconsistent; (J3) Rubric criterion 3 vs. 7 gateway-email contacts; (J4) email confidence display format in delivery PDF
- TTC public-facing messaging doc — April 23 festival; NOTE: April 20 hard stop is NOT real — false inference, do not reify
- IT MCP smoke test — log_service_call → get_unbilled_work → create_billing_entry; verify rows in Supabase
- BRAIN backfill — agent prompt ready at ~/ecos/docs/backfill-agent-prompt.md; run via ChatGPT Agent (not Claude Code — subagents cannot use WebFetch)
- PURPOSE.md — unwritten; blocks N2 Heartbeat chain + F3 Boot protocol fix
- BRAIN cleanup Trigger #1 — baseline audit not yet run
- Maddie Stone reachability — moved to Caution; if current contact surfaces she is Send-grade
- Jairus Grove — conflicting sources; do not include without direct confirmation
- ecos-harvest skill — harvest workflow design validated this session; not yet formalized into a skill file

## Dispatcher Queue
- BRAIN backfill (highest leverage — agent prompt ready, one-time operation)
- Resolve J1–J4 → build Wave 2 delivery PDF
- TTC messaging doc (April 23 festival, no hard stop before that)
- IT smoke test

## Decisions Made This Session
- ecos-boot amendment written and committed: BRAIN-wins-on-conflict rule + UTC offset correction (MST = UTC-7)
- Harvest workflow architecture validated: grouped by destination (BRAIN-bound + repo-bound), pre-written control prompts per block group, checkpoint protocol
- `philosophy` domain established in BRAIN (de facto via captures)
- TASTE:: prefix deprecated — use signal_type field only
- `Concepts/` folder created in vault for standalone philosophical/intellectual canonical notes
- Block 2→ Concepts/, Block 3 → ECOS-META/session-seeds/, Block 6 → ECOS-META/session-records/
- TTC April 20 hard stop confirmed as false inference — not a real constraint

## Captures Pending
none — 3 session captures + 49 harvest captures fired and confirmed

## Next Session Primer
BRAIN backfill is the highest-leverage move: agent prompt is written, credentials are in the file, run it via ChatGPT Agent. After that, load the neil skill and resolve Wave 2 J1–J4 to unblock the PDF build.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-18 | Formalize harvest workflow into ecos-harvest skill file | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
