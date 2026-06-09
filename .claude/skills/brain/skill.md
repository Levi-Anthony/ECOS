---
name: brain
description: >
  BRAIN retrieval, capture, and atomization protocols for ECOS. Load when working with semantic memory, proposing captures, running searches, or discussing BRAIN architecture. Required for any session involving Open Brain MCP.
---

# BRAIN Reference

## Taste

Run at skill load: `search_thoughts("TASTE capture protocol brain BRAIN", threshold: 0.38)`. Retrieved preferences are active constraints for this session, not background context.

BRAIN (Brain Retrieval Associative Integration Node) is ECOS's semantic memory
layer. It answers "what did I think about X" — not "what is currently active."
Live state lives in the State Document, not BRAIN.

## Retrieval Protocol

- Threshold 0.38–0.42 for broad sampling; tighter for domain-specific queries
- Run parallel multi-vector searches for cross-domain insight
- Use `list_thoughts(type="task")` for action items, not semantic search
- Double-window pattern for comparative period retrieval

## Atomization Standard

Two criteria govern atomicity. Both must pass before capture.

**C1 — One center of mass.** An entry must occupy one region in embedding
space. If it pulls toward multiple distinct clusters, it has multiple centers
and must be split at the geometric fault line. The "and" test is a proxy
heuristic pointing at the geometry — not the definition. Correct question:
does this entry land in one place on retrieval?

**C3 — Semantically complete in isolation.** An entry must make an accurate
claim when retrieved alone. Incompleteness is acceptable — almost every atom
is incomplete without broader context. The failure condition is specific: an
entry *actively distorts or misleads* if retrieved without its sibling. If
it would mislead, flag it for review — do not auto-capture.

Atomization is not a tidiness preference. A bundled entry isn't tidy-wrong —
it's retrieval-invisible. Subordinate concepts in a multi-concept entry never
become the retrieval hook for their own idea.

Do not split under quantity pressure. Split only where the geometry demands
it. Decorative atomization that fragments one real idea into thin pieces is
worse than bundling.

**No dedup gate.** Thematic proximity is increased retrieval surface area —
a feature, not clutter. Redundant captures are additional samples that sharpen
the covariance estimate of the underlying Gaussian. Near-duplicate entries
compete on retrieval scoring and the better-matched one wins. Dedup-and-collapse
is deprecated.

## Capture Protocol

Atomization is upstream of capture — enforce this order:

1. **Draft raw** — write candidate entries as they naturally surface.
2. **Split to atomic** — apply the split test: would this retrieve well on two
   distinct semantic queries? If yes, it's two entries. Split before capture.
3. **Verify C3 per fragment** — each fragment must be semantically complete in
   isolation. Would it mislead without its sibling? Rewrite or drop if so.
4. **Apply the two-axis capture-gate** (canonical: the Operational Kernel — defer,
   don't restate). Reversible evidence-grade life/work entries act freely — capture
   them directly. Structural/instruction-grade entries (durable rules, vocabulary,
   doctrine, authority changes) propose first. System/architecture/agent-behavior
   notes route to the substrate, never BRAIN (BRAIN-scope gate).
5. **Capture, then report** — present what landed plus a skip list with reasons for
   any entries not captured. Surface any capture failure explicitly; never swallow it.

Thematic drafting produces natural-feeling units that frequently violate C1.
Catch them at step 2 — do not let C1 violations surface to capture.

## BRAIN Architecture

- Database: Supabase/pgvector
- Interface: Open Brain MCP
- Canonical authority: GitHub
- Structured working clone: Obsidian
- Two-tier content model: Thoughts + Documents

## Metadata Hygiene

Every capture should include a `source` tag in metadata to enable filtered
retrieval and prevent cross-domain interference as volume grows.

Standard source tags: `"ecos-architecture"`, `"tango-pedagogy"`, `"ttc-board"`,
`"neil-outreach"`, `"it-consulting"`, `"personal"`.

Without source tagging, retrieval quality degrades at scale — cross-domain
entries contaminate domain-specific queries. Tag at capture time, not retroactively.

## Update and Delete

No update or delete MCP tools exist in Open Brain. Use the REST workflow
(3-step: read → archive → patch):

1. **Read** — fetch the entry by ID from the thoughts table to get current content.
2. **Archive** — write the current version to thought_history with
   `archived_reason: 'superseded'` and `original_thought_id: [ID]`.
3. **Patch** — update the thoughts table entry with the corrected content.

Credentials: `~/ecos/.claude/rules/supabase.env`. Supabase REST endpoint:
`{SUPABASE_URL}/rest/v1/thoughts?id=eq.{id}` (PATCH) and
`{SUPABASE_URL}/rest/v1/thought_history` (POST for archive step).

For deletions: archive to thought_history with `archived_reason: 'deleted'`,
then delete from thoughts table. Never hard-delete without archiving first.

Flag stale entries explicitly rather than silently working around them.

## Gotchas

- **Search quality requires volume.** Under ~20-30 entries, semantic search
  feels sparse — this is expected behavior, not a system failure. Vector
  similarity needs enough data points to work well. Retrieval sharpens as
  the corpus grows.
- **Retrieval threshold calibration.** 0.38–0.42 for broad sampling. If a
  known entry isn't surfacing, try threshold 0.30 before assuming it's missing.
- **Metadata extraction is best-effort.** The LLM classifies metadata on
  capture. The embedding is what powers retrieval — metadata classification
  errors don't break search, they affect filtering only.

## AQAL Quadrant Distribution (survey ~1,033 entries)

- UL (interior-individual): strongest, most entries
- UR (exterior-individual): tightest intra-cluster coherence in tango pedagogy
- LL (interior-collective): weakest
- Bridge entries at moderate similarity across distant quadrant searches
  are the geometric signature of cross-domain insight
