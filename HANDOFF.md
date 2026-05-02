# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-05-01*

---

## Current Mode
PARK

## Open Loops
- **Definitions spec sprint in progress** — Map components draft partially complete; Q2-Q7 unanswered (see Dispatcher Queue)
- Four session artifacts not on disk — integral-space-audit.md, conversation-handoff.md, definitions-seed.md, dispatcher-seed.md exist only in prior claude.ai conversation; paste or reconstruct from BRAIN at next architecture session
- Ontology spec not started — follows completion of definitions document
- Richard and Evelyn actor seeding — next in queue (paste claude.ai extractions to Claude Code)
- BRAIN backfill via ChatGPT Agent
- Wave 2 PDF — J1–J4 unresolved (32 Send / 19 Caution / 12 Hold)
- iCloud → Google Calendar sync — two options: webcal subscription or add Google account to iOS Calendar
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- BRAIN-CLEANUP-SPEC.md — not yet symlinked into ~/ecos/docs/ (still Obsidian-only)
- Smoke Test Client (ID: d218d5e5-2033-4593-881d-adced3e43e34) — test artifact, safe to delete
- Claude.ai memories → BRAIN bridge — periodic operation until BRAIN reaches critical mass
- TTC messaging edits — resurface next session
- Semantic BRAIN search — deferred to next dashboard phase (requires OpenAI API route)
- C3 BRAIN capture flagged needs_split — atomize into two entries next session if retrieval misses

## Dispatcher Queue
- Definitions spec sprint: answer Q2-Q7 to complete Map components section
  - Q2: Shadow vector — what's the referent? Named pattern? Relational field? Shadow dimension of a line?
  - Q3: Constraint — concrete example from Levi's map (prevents collapse into "non-negotiable value")
  - Q4: Taste signature — unified or domain-specific?
  - Q5: Magnetic connection — CRM, BRAIN, or both?
  - Q6: Rhythm "currently active" — map layer, operator state, or separate layer?
  - Q7: Developmental verb naming — alternatives to Wilber's "movements"?
- After Q2-Q7: complete Map components definitions, move to ontology spec

## Decisions Made This Session
- ECOS ontology entity structure: Line, Practice, and Operational commitment are separate first-class entities (Option A). Domain-view (all three as analytic lenses on a single domain) is a composed/emergent view, not fundamental.
- Domain grouping mechanism (lightweight tag or label) may be needed to link related entities without making "Domain" first-class — pending architectural question for ontology spec.
- Dispatcher spec explicitly deferred until definitions + ontology complete. Tentative five-mode structure (Surfacing, Capture, Retrieval, Synthesis, Review) held lightly — may be architecturally overloaded; may need reconceptualization once map entities are known.
- Sequencing locked: definitions → ontology → map. Dispatcher follows ontology; does not precede it.

## Captures Pending
none

## Next Session Primer
Definitions spec sprint is active — Map components draft in hand, answers to Q2-Q7 needed to finish it, then ontology spec follows.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
