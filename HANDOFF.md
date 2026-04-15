# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-15*

---

## Current Mode
PARK

## Open Loops
- Sprint 3a backfill: AGENT READY — paste `ecos/docs/backfill-agent-prompt.md` into ChatGPT Agent and run; ~28 batches to clear full corpus
- Sprint 3b: add base `thoughts` table CREATE to migrations (cold-start rebuild still incomplete)
- Sprint 3c: dedup audit (lowest priority, run after backfill completes)
- Apple Shortcuts N3/N4 — Capture Thought → Ask BRAIN → TTC Brief; specs written, not built on phone
- F3 Boot protocol fix — CLAUDE.md global load reliability
- N2 Heartbeat — blocked on F3; design as Chief of Staff not Life Engine
- PURPOSE.md — still unwritten; must exist before Heartbeat is built
- Neil Wave 2 futurism list — open since March 21, stale
- Dispatcher routing table — identified March 25, not built

## Dispatcher Queue
- Sprint 3a backfill is highest-leverage next action — agent is ready, no infrastructure dependency, just execute
- N3 Capture Thought shortcut is next after that — 20 min on phone, specs written

## Decisions Made This Session
- Sprint 2 deployed: domain/horizon/signal_type/confidence added to extractMetadata prompt; filter support added to search_thoughts (post-query) and list_thoughts (JSONB contains) in both MCP and middleware
- Sprint 4 deployed: extractMetadata wrapped in try/catch — never throws; metadata_fallback: true flags degraded captures; getEmbedding failure stays hard error
- Sprint 3 backfill agentic workflow built: GET /backfill/next + PATCH /backfill/apply endpoints live; patch_thought_metadata RPC deployed; agent classifies entries itself, no re-embedding
- Sprint sequencing locked: 4 → 3a → 3b → 3c
- "Embedding model ID blocker" for Sprint 3 was overstated — metadata backfill doesn't require re-embedding

## Captures Pending
none — 5 captures fired and confirmed at session close

## Next Session Primer
Run the Sprint 3a backfill: open `ecos/docs/backfill-agent-prompt.md`, paste into ChatGPT Agent, run to completion. Then build N3 Capture Thought shortcut on phone.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
