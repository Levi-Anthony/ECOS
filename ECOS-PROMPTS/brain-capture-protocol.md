# BRAIN Capture Protocol
*Canonical reference — last updated 2026-04-05*
*Target location when vault restructures: Operations Library/Prompts & Frameworks/*

---

## Atomization Standard

Two criteria govern atomicity. Both must pass before capture.

**C1 — One center of mass.** An entry must occupy one region in embedding space. If it pulls toward multiple distinct clusters, it has multiple centers and must be split at the geometric fault line. The "and" test is a proxy heuristic pointing at the geometry — not the definition. Correct question: does this entry land in one place on retrieval?

**C3 — Semantically complete in isolation.** An entry must make an accurate claim when retrieved alone. Incompleteness is acceptable — almost every atom is incomplete without broader context. The failure condition is specific: an entry *actively distorts or misleads* if retrieved without its sibling. If it would mislead, flag it for review — do not auto-capture.

Atomization is not a tidiness preference. A bundled entry isn't tidy-wrong — it's retrieval-invisible. Subordinate concepts in a multi-concept entry never become the retrieval hook for their own idea.

Do not split under quantity pressure. Split only where the geometry demands it. Decorative atomization that fragments one real idea into thin pieces is worse than bundling.

**No dedup gate.** Thematic proximity is increased retrieval surface area — a feature, not clutter. Redundant captures are additional samples that sharpen the covariance estimate of the underlying Gaussian. Near-duplicate entries compete on retrieval scoring and the better-matched one wins. Dedup-and-collapse is deprecated.

**Pre-submission survival test.** At some point in the capture pipeline — whether during drafting, MCP processing, or edge function handling — entries may be paraphrased or restructured. The source of rewriting is not always clear. Before submitting, verify each entry would survive aggressive rewriting without loss of meaning. Embed meaning structurally; do not rely on specific phrasing. Note: original submitted text must always be stored and recallable (BRAIN invariant) — but submitted entries should be strong enough to remain useful even if only a rewritten version surfaces in retrieval.

---

## Capture Protocol

Atomization is upstream of proposal — enforce this order:

1. **Draft raw** — write candidate entries as they naturally surface.
2. **Split to atomic** — apply the split test: would this retrieve well on two distinct semantic queries? If yes, it's two entries. Split before proposing.
3. **Verify C3 per fragment** — each fragment must be semantically complete in isolation. Would it mislead without its sibling? Rewrite or drop if so.
4. **Propose** with a one-line rationale per entry (which criterion was non-obvious and why it passes). Never capture unilaterally.
5. **After approval:** capture, then present a skip list with reasons for any entries not captured.

Thematic drafting produces natural-feeling units that frequently violate C1. Catch them at step 2 — do not let C1 violations surface to the proposal stage.

---

## Taste Harvest Protocol

Run at session close to identify TASTE:: capture candidates. Five phases:

1. **Signal scan** — review the session for corrections, rejections, rewrites, expressed dissatisfaction. One-offs are skipped; recurring patterns are candidates.
2. **Pattern test** — check recurrence across sessions. If already in BRAIN as a TASTE:: entry, note reinforcement or propose an update rather than a duplicate.
3. **Draft in Prompt 4 format:**
   - Preference Name
   - Domain
   - Reject *(specific and observable)*
   - Want *(specific and observable)*
   - Type
4. **Atomicity check** — one preference per entry. Split if two distinguishable preferences are present.
5. **Propose with skip list** — capture only on explicit approval.

### Taste Architecture

Accumulated TASTE:: entries in BRAIN are the **Pattern Buffer** — the raw material of the taste profile. The taste profile itself is not maintained by hand; it is replicated on demand from the buffer via the **Replicator Protocol**. These are two distinct operations: harvesting adds to the buffer, replication assembles the profile.

---

## When Each Protocol Runs

| Protocol | When |
|---|---|
| Capture Protocol | Any time a candidate entry is ready to propose |
| Taste Harvest | At session close — scan for taste signal before writing HANDOFF.md |
| Replicator Protocol | On demand — when a full taste profile is needed |
