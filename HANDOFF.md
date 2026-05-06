# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-05-06*

---

## Current Mode
PARK

## Infrastructure Status (canonical as of 2026-05-06)

**Active MCP server:** `ecb-mcp` only — single consolidated 31-tool server at `/functions/v1/ecb-mcp`.
- Tool prefix: `mcp__ecb__*`
- Do not restore old MCP endpoints unless explicitly rolling back.

**Active non-MCP functions (do not delete):**
- `brain-middleware` — iOS Shortcut capture path (`source=ios_shortcut`); active and verified.
- `ingest-thought` — Slack capture; deployed, not production-tested this session.
- `quick-capture` — scaffold/deferred; do not use for production capture unless explicitly implemented later.

**Retired (deleted 2026-05-06):**
- `open-brain-mcp` — deleted from Supabase and source.
- `ecos-mcp` — deleted from Supabase and source.
- `ecos-crm-mcp` — deleted from Supabase (no source folder existed).

**Claude.ai connectors:**
- ECB connector: active, 31 tools, smoke-tested.
- Open Brain connector: retired.
- ECOS CRM connector: retired.

---

## Open Loops

**Architecture — immediate:**
- Integral space map second half — physical document ready; resume from item after Development Modes (Levi drives, one item at a time)
- C1/C3 compliant BRAIN capture pass from ECOS-integral-space-map.md — dedicated session after map complete; capture from disk file, not conversation memory
- Three deferred axes for subsequent architecture session: (1) Operational Tool vs. Orienting Concept, (2) Disposition field, (3) Recanonization status field
- Definitions spec corrections — paste annotated definitions draft; Q2-Q7 blocked until done
- Vagal States — needs its own Inputs Layer entry
- Integral Psychographic UI — SIGMA naming procedure required before next design pass
- Development Modes (💎👁️) — ingestion pass needed; currently highest-priority 💎👁️ item
- Specific Level Schemas — individual evaluation pass needed
- Shadow theory decision — 3-2-1 as baseline

**Architecture — background:**
- Ontology spec not started (follows definitions completion)
- Four session artifacts not on disk — integral-space-audit.md, conversation-handoff.md, definitions-seed.md, dispatcher-seed.md (trapped in prior claude.ai session)
- Disposition axis second coding pass — after disposition axis resolves

**Operations:**
- Richard and Evelyn actor seeding — next in CRM queue
- BRAIN backfill via ChatGPT Agent
- Wave 2 PDF J1–J4 unresolved (32 Send / 19 Caution / 12 Hold)
- iCloud → Google Calendar sync
- DND Apple Shortcut — not built; required before Heartbeat full production
- BRAIN-CLEANUP-SPEC.md — not symlinked into ~/ecos/docs/
- Smoke Test Client (ID: d218d5e5-2033-4593-881d-adced3e43e34) — safe to delete
- Claude.ai memories → BRAIN bridge — periodic operation
- TTC messaging edits — resurface next session
- Calls to return: Sena, David Wald Hopkins, Arlene
- Respond to Alana
- Slack capture end-to-end test — send a real Slack message, verify `original_content` populated in `thoughts` row

---

## Dispatcher Queue
- Next session: resume integral space map annotation from next item after Development Modes
- After map complete: dedicated C1/C3 BRAIN capture pass from ECOS-integral-space-map.md
- Parallel track: paste annotated definitions draft → corrections → write to disk → Q2-Q7 → ontology spec

## Decisions Made This Session
- **Phase 9 complete (2026-05-06):** Deleted open-brain-mcp, ecos-mcp, ecos-crm-mcp from Supabase and source. All 7 proof conditions verified. Config.toml cleaned. Old source folders removed. Old endpoints return HTTP 404.
- **Phase 10 complete (2026-05-06):** BRAIN architecture consolidation record captured. HANDOFF.md updated. Repo committed (a0db8c6).
- **ecb-mcp is the sole active MCP server.** 31 tools. All references to `mcp__open-brain__*`, `mcp__ecos-mcp__*`, `mcp__ecos-crm__*` are obsolete.
- **Claude.ai ECB connector migrated and smoke-tested.** Legacy Open Brain and ECOS CRM connectors retired.
- **Non-CLI clients cleared:** Claude Desktop and ChatGPT marked not active production dependencies.

## Captures This Session
- `40e913cf` — ECOS MCP architecture consolidation completed 2026-05-06; ecb-mcp sole server, retired endpoints, preserved functions.
- `[A]` — `claude mcp list` prints full URLs including ?key= query-param secrets; use header auth to avoid exposure.
- `[B]` — TASTE bidirectional link is asymmetric: taste_preferences.thought_id is a column FK; reverse link lives in thoughts.metadata (JSONB), not a column.
- `[C]` — Proof-before-destroy protocol: multi-gate fresh-session verification before authorizing infrastructure deletion.

## Next Session Primer
Infrastructure is fully resolved — boot on BRAIN alone, use `mcp__ecb__*` only, and go straight to integral space map annotation from the item after Development Modes.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
