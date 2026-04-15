# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-15*

---

## Current Mode
PARK

## Open Loops
- CRM/GUI phase — next major build; Nate's docs to be shared at session start before any design work
- Sprint 3c: dedup audit — lowest priority, now unlocked since backfill is complete
- Apple Shortcuts N3/N4 — Capture Thought → Ask BRAIN → TTC Brief; specs written, not built on phone
- F3 Boot protocol fix — CLAUDE.md global load reliability; blocks N2 Heartbeat
- N2 Heartbeat — blocked on F3; design as Chief of Staff not Life Engine
- PURPOSE.md — still unwritten; must exist before Heartbeat is built
- Neil Wave 2 futurism list — open since March 21, stale
- Dispatcher routing table — identified March 25, not built
- ~5 TTC entries from April 10 still tagged `immediate` — minor cleanup, low priority
- TTC board context stale — handle in its own chat with fresh context

## Dispatcher Queue
- CRM/GUI phase is highest-leverage next build — load Nate's docs, design relationship intelligence schema with multi-role membership, build Supabase tables + Vercel UI as one move

## Decisions Made This Session
- Sprint 3a backfill complete: ~1378 corpus entries classified with domain/horizon/signal_type/confidence via Python script + OpenRouter Haiku
- Sprint 3b: base schema migration committed (`20260101000001_base_schema.sql`) — cold-start rebuild now possible
- MCP UUID fix deployed: search_thoughts and list_thoughts now expose entry IDs, enabling direct use of update_thought/delete_thought from chat clients
- Post-backfill audit remediation: 3 neil-outreach misclassifications fixed (→ tango-pedagogy/ecos-architecture), 28 stale TTC immediate entries downgraded to project
- CRM design direction locked: relationship intelligence system (not standard CRM), multi-role membership schema required, OB1 professional-crm is starting point needing customization, schema + Vercel UI are one move
- OpenRouter Haiku model ID: `anthropic/claude-haiku-4.5` (dots, not dashes)

## Captures Pending
none — 4 captures fired and confirmed at session close

## Next Session Primer
CRM/GUI phase: load Nate's docs first, then design the relationship intelligence schema — multi-role membership, Supabase tables, Vercel human door — as one integrated build.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
