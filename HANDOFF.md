# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-05-23*

---

## Current Mode
PARK

## Infrastructure Status (canonical as of 2026-05-23)

**Active MCP server:** `ecb-mcp` — 41 tools at `/functions/v1/ecb-mcp`. Full end-to-end flow validated this session (create_artifact → approve_artifact → search_artifacts → update_artifact → approve_artifact, 9 successful cycles). The smoke-test open loop from 2026-05-06 HANDOFF is **closed**.

**New BRAIN domain:** `prompt-kits` — established this session as the home for reusable composable instruction systems. Distinct from `pedagogy` (reserved for Levi's actual teaching practice — tango, ECTango). First inhabitant: ECB Lessonize Prompt Kit v1.0.

**Direct SQL caveat:** `update_artifact` is body-only — metadata fields (`domain`, `title`, `doc_type`, `summary`, `tags`, `source_path`) require direct `execute_sql` UPDATE on `canonical_artifacts`. Documented as a captured thought this session.

**Branch:** `claude/lessonize-prompt-kit-KdcZV` (2 commits: install `d3bb5c8`, domain refactor `93afb69`). Pushed.

---

## Open Loops

**Immediate (this session):**
- Live end-to-end test of Lessonize Kit in a fresh session — Levi to validate by pasting a small code snippet and saying "lessonize this please"; confirm retrieval routes to `ecb_lessonize_index` + composes correctly
- Portable composer v1.1 — planned in `/root/.claude/plans/you-are-not-asking-fluffy-harbor.md` Future Work section; not yet built

**Carry-forward (prior HANDOFF, still open):**
- Respond to Alana (now ~20 days old — escalating priority)
- Integral space map second half — resume from item after Development Modes (Levi drives)
- C1/C3 BRAIN capture pass from ECOS-integral-space-map.md (blocked until map complete)
- Definitions spec corrections — paste annotated draft (Q2-Q7 blocked until done)
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

**Deferred (from prior architecture session):**
- `extractMetadata` entities array — add `entities: []` parallel to `people: []` in brain.ts
- Contact → entity migration (blocked on identity resolution decisions)
- `compile_entity_snapshot` generalization
- Three deferred map axes: disposition, operational tool vs. orienting concept, recanonization status

---

## Dispatcher Queue
- First: Levi runs live end-to-end test of Lessonize Kit in fresh session
- Then: integral space map annotation resumes from item after Development Modes
- Parallel: paste annotated definitions draft → corrections → write to disk
- Background: respond to Alana (priority elevated by age)

## Decisions Made This Session
- **ECB Lessonize Prompt Kit v1.0 installed:** 8 canonical artifacts in BRAIN (`ecb_lessonize_index` + `_standing_doctrine` + `_output_contract` + `_context_module` + 4 mode modules `_previous_answer`/`_code`/`_source`/`_fresh_explainer`); all `approved_instruction`, `scope=global`, `target_runtime=any`, `domain=prompt-kits`, unified `ecb_lessonize_*` prefix. Filesystem mirror at `ECOS-PROMPTS/lessonize-kit/` with YAML front matter.
- **New BRAIN domain `prompt-kits`:** distinct from `pedagogy` (Levi's pedagogy stays protected). Free-text field, no migration needed.
- **Legacy "Spoken Educational Lesson Transform Prompt" artifact superseded:** in-body SUPERSEDED header pointing at new kit + `authority_level` demoted to `evidence` via `approve_artifact`.
- **Routed prompt-kit pattern adopted as ECOS architectural standard:** router artifact + mode modules + standing doctrine + output contract + conditional context module. Lets each piece evolve independently. First instance is Lessonize; future kits go in `domain=prompt-kits`.
- **CLAUDE.md Quick Reference updated** (one bullet) — points lessonize trigger at the index artifact. Still within 120-line ceiling.
- **`ECOS-META/ECOS-meta-explainer-mode-note.md` marked superseded** (filesystem) — preserved as historical first sketch of the doctrine.

## Captures This Session
- `search_artifacts` filters on version approval, not authority_level (default search returns evidence-level chunks)
- Routed prompt-kit architecture pattern (router + sub-artifacts + shared prefix naming)
- Aliases-as-indexed-body-text retrieval technique
- BRAIN canonical + filesystem mirror coexistence pattern for prompt artifacts
- Supersede-via-in-body-header procedure (header + update_artifact + approve_artifact)
- `update_artifact` body-only constraint (metadata fields require direct SQL UPDATE)

## Captures Pending
none

## Next Session Primer
The Lessonize Kit (`ecb_lessonize_index` + 7 sub-artifacts under `domain=prompt-kits`) is live and approved in BRAIN. Highest-leverage first action next session: validate end-to-end. Paste a small code snippet, say "lessonize this please", and confirm the assistant retrieves `ecb_lessonize_index` and produces a TTS-friendly code lesson composed from doctrine + output contract + `ecb_lessonize_code`. If routing doesn't land, adjust the `Aliases:` block in `ecb_lessonize_index` body via `update_artifact`.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending
2026-05-23 | Document `update_artifact` body-only constraint in ecb-mcp tool docs (metadata fields require direct SQL UPDATE) | pending
2026-05-23 | Build portable Lessonize composer v1.1 (mode selection, optional context module, header wrapping, previous-answer handling) — plan stub at `/root/.claude/plans/you-are-not-asking-fluffy-harbor.md` | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
