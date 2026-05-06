# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-05-06*

---

## Current Mode
PARK

## Infrastructure Status (canonical as of 2026-05-06)

**Active MCP server:** `ecb-mcp` only — 41 tools at `/functions/v1/ecb-mcp`.
- Tool prefix: `mcp__ecb__*`
- Tool count raised from 31→41 this session (7 artifact tools + 3 entity tools added)
- Do not restore old MCP endpoints unless explicitly rolling back.

**New tables (applied 2026-05-06):**
- `canonical_artifacts` + `artifact_versions` + `artifact_chunks` + `artifact_links`
- `entities` + `entity_links`
- `professional_contacts.entity_id` (nullable FK — not yet backfilled)

**New RPC:** `match_artifact_chunks` — defaults to approved complete versions only.

**Deployment status:** ecb-mcp deployment `_2` live, all 200s, 41-tool count assertion passing.

**Smoke test pending:** claude.ai ECB connector needs reconnect to see 41 tools. Run create_artifact → approve_artifact → search_artifacts flow to verify governance gate.

---

## Open Loops

**Immediate:**
- Smoke test artifact/entity tools via claude.ai ECB connector (reconnect first)
- Respond to Alana (now 3 days old)
- Integral space map second half — resume from item after Development Modes (Levi drives)
- C1/C3 BRAIN capture pass from ECOS-integral-space-map.md (blocked until map complete)
- Definitions spec corrections — paste annotated draft (Q2-Q7 blocked until done)

**Background:**
- Richard and Evelyn actor seeding — next in CRM queue
- Wave 2 PDF J1–J4 unresolved (32 Send / 19 Caution / 12 Hold)
- Calls to return: Sena, David Wald Hopkins, Arlene
- TTC messaging edits
- Slack capture end-to-end test
- BRAIN-CLEANUP-SPEC.md — not symlinked into ~/ecos/docs/
- iCloud → Google Calendar sync
- DND Apple Shortcut
- BRAIN backfill via ChatGPT Agent
- Claude.ai memories → BRAIN bridge

**Deferred (from this session's architecture):**
- `extractMetadata` entities array — add `entities: []` parallel to `people: []` in brain.ts
- Contact → entity migration (blocked on identity resolution decisions)
- `compile_entity_snapshot` generalization
- Three deferred map axes: disposition, operational tool vs. orienting concept, recanonization status

---

## Dispatcher Queue
- First: reconnect claude.ai ECB connector → smoke test artifact + entity tools
- Then: resume integral space map annotation from item after Development Modes
- Parallel track when ready: paste annotated definitions draft → corrections → write to disk

## Decisions Made This Session
- **ECB Architectural Expansion (2026-05-06):** Canonical artifacts system, entity substrate, chunk/summary/pointer model — all designed, built, migrated, deployed. Committed `6c4b089`.
- **Two-pointer governance:** `current_version_id` = approved only (set by `approve_artifact`); `latest_version_id` = newest draft. search_artifacts safe-by-default.
- **Entity substrate is additive:** professional_contacts stays intact; entities is the generalized layer underneath. Contacts get nullable `entity_id` FK; backfill is deferred.
- **target_runtime is convention not constraint:** TEXT field, no CHECK — runtimes evolve faster than schema migrations.
- **Chunking pipeline:** code-fence-aware splitter, prefix-before-embedding, fallback chain (paragraph → sliding window).
- **match_artifact_chunks:** defaults to current + approved + complete; include_drafts=true for review mode.

## Captures This Session
- OB1 agent memory authority invariant (evidence→instruction gate)
- Canonical artifacts two-pointer governance design
- Entity substrate additive refactor pattern
- Prefix-before-embedding for semantic self-containment
- Code-fence-aware markdown header splitting
- target_runtime as convention not CHECK constraint

## Next Session Primer
Reconnect claude.ai ECB connector to expose 41 tools, then run the artifact smoke test (create → approve → search); after that, integral space map annotation picks up from item after Development Modes.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
