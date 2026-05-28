# Session Reentry Record — Problem-Decomposition Curriculum Session

> **What this is.** A reentry record, not a recap. It exists so that a competent worker —
> human or AI, on any platform or repo — arriving with *zero* conversation history can resume
> this work correctly. Structure derived from first principles (see §0); it deliberately does
> **not** adopt the existing FIBERR template, Two-Door, or AQAL definitions as canon — those
> were sandboxed and used only to cross-check the derivation.
>
> `artifact_type: reentry_record` · `session_case_study: true` · authored 2026-05-28
>
> **Correction 2026-05-28 (mid-session):** D4 was rewritten from "two representations
> (human prose + machine block)" to "dual legibility — one well-structured artifact
> navigable by both audiences" after Levi flagged the original framing as conflating
> dual legibility with duplicated content. §8 is retained as an *optional* structured
> summary, **not** as a doctrinal mirror. Atom `00a7304d` superseded by a corrected
> capture; formal REST archive/patch queued for next session.

---

## 0. Operational Value Definition (the bar this record must clear)

This record has operational value **iff** a competent worker arriving cold can resume the work
correctly without:
1. re-deriving the reasoning behind choices,
2. reconstructing hidden assumptions,
3. re-litigating already-settled questions, or
4. mistaking a summary for executable live state.

If it reads nicely but cannot be *acted on* under those four conditions, it has failed. This
section is a **scope contract**, not the deliverable — the deliverable is §§1–8.

---

## 1. State / Facts  *(dated; each marked Confirmed or Inferred)*

- **[Confirmed, 2026-05-28]** The 30-day problem-decomposition curriculum is authored and
  committed: commit `0dfa63c`, 38 files (~3,985 insertions) under
  `ECOS-CURRICULUM/Problem-Decomposition-30Day/` on `Levi-Anthony/ECOS` branch `main`.
- **[Confirmed]** The curriculum content is a *training gym* (produce → inspect → repair →
  apply a structure to a decision-relevant problem), not a framework encyclopedia. Load-bearing
  days: 5, 14, 18, 21, 26, 30; spine = Week-3 recurring ECTango-attendance case.
- **[Confirmed]** No reentry state followed that work: `HANDOFF.md` is frozen at **2026-05-06**
  (mode PARK, entirely about an ECB-architecture session — zero mention of the curriculum);
  `STATUS.md` is from **2026-04-03**. There was no reentry record for the curriculum session
  until this one.
- **[Confirmed]** This container is the **vault** repo `Levi-Anthony/ECOS`. Working branch
  `claude/problem-decomposition-training-TzYtV` is even with `main`, clean tree, no stash.
- **[Confirmed]** `Levi-Anthony/ECOS-build` is a *separate* infra repo (edge functions,
  migrations, Supabase). It is not referenced anywhere in the vault. "Vault = thinking, infra =
  doing."
- **[Inferred]** The desktop clone's divergence (seen at `dd4e6c7`, lacking `0dfa63c`) is a
  local-sync/wrong-repo issue, not a content loss in `origin`. Unverified until Levi runs the
  desktop check in §4.

---

## 2. Decisions + Rationale  *(the causal "why" — first-class, not emergent)*

Each: **Decision / Why / Evidence / Alternatives rejected / Risk-if-wrong / Reentry instruction.**

### D1 — Treat this as a derivation exercise; sandbox all found definitions
- **Decision:** Derive the reentry-artifact structure from first principles. Found definitions
  (FIBERR, Two-Door, AQAL, the advisor's `F/I/B/E/R/R`) are information/evidence, never canon.
- **Why:** Applying a found structure risks inheriting its blind spots (e.g., a project-state
  ledger that never makes rationale first-class) without ever testing whether it fits *this*
  need.
- **Evidence:** The retrieved canonical FIBERR organizes state but has no rationale section; the
  external advisor's sketch openly admits it couldn't find the real ECOS definitions.
- **Alternatives rejected:** Reuse the canonical FIBERR template as the spine (would smuggle in
  the very gap we're trying to close); adopt the advisor's `F/I/B/E/R/R` (incomplete, and
  collides with the existing FIBERR name).
- **Risk-if-wrong:** A derivation done carelessly can reinvent a worse wheel. Mitigated by
  cross-checking the derivation against the sandboxed material (convergence = confidence).
- **Reentry instruction:** Before editing this record's structure, re-read §0 and re-derive;
  do not "upgrade" it by importing a template.

### D2 — Rationale must be a first-class section, not emergent from structure
- **Decision:** A reentry record carries an explicit Decisions+Rationale section (this §2).
- **Why:** Structure (MECE / shelves / AQAL / a state ledger) can *classify* context but does
  not *guarantee* a future agent can recover the causal reason a choice was made. The system
  remembers the shape of the work while losing why the shape mattered.
- **Evidence:** The found FIBERR preserves Tactical State / Next Actions / Linked Material but
  has no rationale unit; this session's own failure was loss of reentry context, not loss of
  artifacts.
- **Alternatives rejected:** Let rationale stay implicit inside state/notes (the status quo
  that failed).
- **Risk-if-wrong:** Rationale sections bloat into chain-of-thought dumps. Mitigated by D3/§7
  (evidence, not reasoning traces; compact atoms).
- **Reentry instruction:** When a future agent asks "why are we doing it this way?", the answer
  must already live here; if it doesn't, that's a defect to fix, not infer.

### D3 — Capture rationale as evidence, not instruction (no stored chain-of-thought)
- **Decision:** Memory records *what was decided and why*, plus lessons/constraints/failures —
  not the model's reasoning trace, and not standing commands.
- **Why:** Session-authored memory shouldn't arrogate authority the session didn't have;
  evidence lets the future worker decide.
- **Evidence:** Agent-memory guidance (start as evidence, not instruction); convergent with
  ECOS "propose, never execute unilaterally."
- **Alternatives rejected:** Store directives ("always do X") or full reasoning transcripts.
- **Risk-if-wrong:** Under-specified evidence forces re-derivation. Mitigated by §2's six fields.
- **Reentry instruction:** Read these as findings you may override with cause, not as orders.

### D4 — Dual legibility: one well-structured artifact, navigable by both human and agent (corrected 2026-05-28)
- **Decision:** Write a single artifact whose *structure* — clear sections, addressable
  units, complete sentences, explicit references — is legible and navigable to whoever
  arrives, human or agent. The atomic thoughts shed to BRAIN (§7 / D5) are the
  machine-retrievable layer; the artifact does **not** require a parallel machine-readable
  mirror. §8 below is retained as an *optional* structured summary for tooling that
  prefers explicit fields — not as a doctrinal mirror.
- **Why:** The reentry agent's type is unknown, but the canonical response is *not*
  "duplicate content in two formats." Dual legibility (Open Brain standard, thought
  `b06540db`) means one entry written well enough that both audiences can find, navigate,
  and parse it — "a note for a smart colleague who wasn't in the room" satisfies both
  simultaneously. Two-Door (thought `e741ab2c`) refers to *access mechanism* — both an
  MCP/API door and a visual/scannable door reach the same data — not to content
  duplication. The prior framing here conflated access-paths with content-mirrors and
  overstated the doctrinal requirement.
- **Evidence:** Thoughts `b06540db` (dual-legibility standard) and `e741ab2c` (Two-Door
  principle); Levi's explicit correction 2026-05-28.
- **Alternatives rejected:** "Two-block format with strict prose↔JSON mirror" (the prior,
  incorrect formulation — overstated; introduces drift risk without doctrinal warrant).
  Unstructured prose blob (fails navigability for both audiences).
- **Risk-if-wrong:** Reverting to undisciplined prose (hard to navigate) or to duplicated
  blocks (drift). Mitigated by clean section headings, addressable units, and
  atom-shedding to BRAIN.
- **Reentry instruction:** Structure the artifact for navigability by both audiences. If
  you find yourself authoring a parallel JSON mirror, ask whether you are propagating the
  old misreading.

### D5 — Durable memory = atoms shed from the source doc, not the whole doc stored
- **Decision:** This record is the *source document*; durable memory (§7) is a set of
  self-contained atoms extracted from it. The blob is never stored as one memory unit.
- **Why:** A monolithic document is retrieval-invisible at scale — a blurred embedding won't
  surface on a narrow query like "why split the repos."
- **Evidence:** Convergent with found atomization standard (one center of mass; complete in
  isolation) and the advisor's atomic-thoughts guidance.
- **Alternatives rejected:** Store the entire record as one memory entry.
- **Risk-if-wrong:** Over-atomization fragments one idea into noise. Mitigated by the
  completeness check (each atom must stand alone and make one claim).
- **Reentry instruction:** Capture atoms (§7) individually; keep the source doc as a reference,
  not a memory unit.

### D6 — Working name "Session Reentry Record (SRR)"; relationship to FIBERR left open
- **Decision:** Do not name this a FIBERR or assume it is one.
- **Why:** The derived structure differs from the canonical FIBERR (which lacks first-class
  rationale and a locational map); silently reusing the name would corrupt an existing
  vocabulary item.
- **Evidence:** §0 derivation vs the retrieved FIBERR template sections.
- **Alternatives rejected:** Call it a FIBERR (name collision); redefine FIBERR to this (high
  blast radius across the existing template + field-tested instance + BRAIN thoughts).
- **Risk-if-wrong:** Two near-synonyms proliferate. Mitigated by flagging this as an explicit
  open decision (§3).
- **Reentry instruction:** Treat "SRR vs FIBERR" reconciliation as an open question owned by
  Levi; do not resolve it by fiat.

### D7 — This record lives in the vault repo (`ECOS`), not `ECOS-build`
- **Decision:** Commit the record to `ECOS-PROJECTS/` in the vault.
- **Why:** Vault = thinking/documents (this record is a document); infra repo is for code.
- **Evidence:** The repo-split fact in §1/§4.
- **Alternatives rejected:** `ECOS-build` (wrong purpose); a scratch location (not durable).
- **Risk-if-wrong:** Low. Mitigated by the locational map (§4) making the home explicit.
- **Reentry instruction:** Keep reentry records under `ECOS-PROJECTS/`.

---

## 3. Boundaries

**Settled (do not re-open):** derivation-over-adoption (D1); rationale is first-class (D2);
evidence-not-instruction (D3); two representations (D4); atoms-not-blob (D5); vault is the home
(D7).

**Open (genuinely undecided):**
- **SRR ↔ FIBERR reconciliation** (D6) — variant, distinct primitive, or supersession? Owner: Levi.
- **Canonical home** — does the durable record also live in ECB as an artifact, or is the
  repo-markdown + atoms sufficient? Not assumed; offered as a proposal (§5).
- **Template promotion** — should "Decisions+Rationale" become a standard section for future
  reentry records / FIBERRs? Deferred to Levi.

**In scope:** the reentry record for *this* curriculum session, the repo diagnosis, the proposed
atoms. **Out of scope (stated, not imported):** the unrelated open loops in the stale
`HANDOFF.md` (ECB smoke test, Neil Wave 2, TTC, CRM call-backs) — they belong to other projects.

**Known unknowns:** desktop clone state (§4); whether `c677c5b8` already covers the repo-split
atom well enough to skip a new capture.

---

## 4. Locational Map

| Thing | Where |
|---|---|
| Vault repo (this) | `Levi-Anthony/ECOS` — thinking/documents; curriculum + skills live here |
| Infra repo | `Levi-Anthony/ECOS-build` — edge functions, migrations, Supabase (separate) |
| This session's work | `ECOS-CURRICULUM/Problem-Decomposition-30Day/` (38 files, commit `0dfa63c`, on `main`) |
| This record | `ECOS-PROJECTS/Session-Reentry-Record_problem-decomposition.md` (branch `claude/problem-decomposition-training-TzYtV`) |
| Stale handoff | `HANDOFF.md` (2026-05-06), `STATUS.md` (2026-04-03) — do not trust as current |
| Memory layer | BRAIN / Open Brain (Supabase + MCP) — durable atoms go here *after approval* |

**Desktop reconciliation (Levi to run there — this container cannot reach the desktop):**
```
git remote -v
git fetch origin
git merge-base --is-ancestor dd4e6c7 origin/main && echo "behind" || echo "diverged/other-repo"
```
If `dd4e6c7` is not an ancestor of `origin/main`, the desktop clone is a different repo (likely
`ECOS-build`) or a diverged branch — that is the source of the "crossed-up" feeling.

---

## 5. Open Loops · Next Actions · Do-Not

**Next actions (ordered):**
1. Commit + push this record to the working branch.
2. Decide SRR↔FIBERR reconciliation (§3) — Levi.
3. Review the proposed atoms (§7); approve/edit/skip; *then* capture to BRAIN with a skip list.
4. Decide whether a canonical ECB artifact mirror is wanted (§3 "canonical home").

**Open loops:** desktop repo reconciliation (§4); template-promotion question (§3).

**Do-Not:**
- Do **not** capture any §7 atom to BRAIN before Levi approves it.
- Do **not** rename this to "FIBERR" or redefine FIBERR without Levi's explicit decision.
- Do **not** edit/trust `HANDOFF.md` / `STATUS.md` as current state.
- Do **not** import this structure from a template; re-derive (§0/D1) if revising.

---

## 6. Risks / Failure Modes

- **§8 mistaken for a doctrinal mirror rather than an optional structured summary** → see corrected D4; prose + structure already satisfies dual legibility, §8 is tactical convenience.
- **§2 bloats into chain-of-thought** → keep to the six fields; evidence not traces (D3).
- **Atoms over-fragmented or context-distorting** → each must stand alone, one claim (D5).
- **The record itself goes stale** like `HANDOFF.md` did → it is dated; treat as cold start if
  the State (§1) is older than the work it describes.
- **SRR/FIBERR name ambiguity** spreads before reconciliation → §3 flags it as owned-open.

---

## 7. Atomic Memory — PROPOSED for BRAIN (not captured; awaiting approval)

Each atom is self-contained (one claim, sensible retrieved cold). Proposed with rationale; a
skip list follows. **No `capture_thought` call until Levi approves.**

1. *(decision)* "A reentry record must make decision rationale a first-class section, because
   structure can classify context but cannot guarantee a future agent recovers the causal *why*
   behind a choice." — stands alone; core reusable principle.
2. *(framework)* "Session-authored agent memory should be recorded as evidence (decisions,
   lessons, constraints, failures, next steps, source refs), not as standing instruction or
   stored chain-of-thought." — reusable across sessions.
3. *(framework)* "Durable memory should be atoms shed from a bounded source document, never the
   whole document stored as one unit — a monolithic embedding is retrieval-invisible to narrow
   queries." — storage-layer principle.
4. *(observation)* "The 30-day problem-decomposition curriculum was committed to Levi-Anthony/
   ECOS main (0dfa63c) while HANDOFF.md remained at the 2026-05-06 ECB-architecture state —
   demonstrating that filesystem-markdown handoff drifts out of sync with shipped work."
   — overlaps existing thought `b323e241`; per no-dedup-gate, keep as a sharper sample.
5. *(struct)* "To design an artifact that lets a future worker resume after a session ends,
   build it section by section. Each section answers one specific thing the worker cannot
   recover from the session alone: the current state of the work; why each decision was
   made; what is settled and what is still open; where the files and records live; what is
   queued next; and what could silently go wrong. One section per recovery gap — no more,
   no fewer. The artifact then carries exactly what the session itself would not preserve."
   — the derivation method, standalone and reusable.

**Skip list (proposed NOT to capture, with reason):**
- Repo split (`ECOS`=vault / `ECOS-build`=infra): already captured as `c677c5b8`; skip unless a
  sharpened restatement is wanted.
- SRR working name: ephemeral until the §3 reconciliation lands; capture after, not now.

---

## 8. Structured summary (optional — for tooling that prefers explicit fields; NOT a doctrinal mirror)

```json
{
  "artifact_type": "reentry_record",
  "session_case_study": true,
  "authored": "2026-05-28",
  "working_name": "Session Reentry Record (SRR)",
  "spine_origin": "first_principles_derivation",
  "sandboxed_not_applied": ["FIBERR_template", "Two-Door_canon", "AQAL", "advisor_FIBERR_sketch"],
  "operational_value_test": [
    "resume without re-deriving reasoning",
    "resume without reconstructing hidden assumptions",
    "resume without re-litigating settled questions",
    "do not mistake summary for executable state"
  ],
  "state": {
    "work_shipped": {"commit": "0dfa63c", "files": 38, "path": "ECOS-CURRICULUM/Problem-Decomposition-30Day/", "branch_of_record": "main", "confidence": "confirmed"},
    "reentry_state_before": {"handoff_md": "2026-05-06", "status_md": "2026-04-03", "record_for_curriculum": "none", "confidence": "confirmed"},
    "container_repo": "Levi-Anthony/ECOS",
    "working_branch": "claude/problem-decomposition-training-TzYtV",
    "desktop_divergence": {"seen_at": "dd4e6c7", "missing": "0dfa63c", "confidence": "inferred"}
  },
  "decisions": [
    {"id": "D1", "decision": "Derive structure from first principles; sandbox found definitions", "why": "applying a found structure inherits its blind spots untested", "evidence": ["canonical FIBERR lacks a rationale section", "advisor admits it lacked the real definitions"], "alternatives_rejected": ["reuse FIBERR template as spine", "adopt advisor F/I/B/E/R/R"], "risk": "careless derivation reinvents a worse wheel", "reentry_instruction": "re-derive before restructuring; do not import a template"},
    {"id": "D2", "decision": "Rationale is a first-class section", "why": "structure classifies context but does not guarantee recovery of causal why", "evidence": ["FIBERR preserves state not rationale", "this session's failure was lost reentry context not lost artifacts"], "alternatives_rejected": ["leave rationale implicit (the status quo that failed)"], "risk": "rationale bloats into chain-of-thought", "reentry_instruction": "answers to 'why this way' must live here, not be inferred"},
    {"id": "D3", "decision": "Record rationale as evidence, not instruction", "why": "session memory should not issue commands it lacks authority for", "evidence": ["agent-memory guidance: evidence over instruction", "ECOS propose-not-execute"], "alternatives_rejected": ["store directives", "store full reasoning transcripts"], "risk": "under-specified evidence forces re-derivation", "reentry_instruction": "treat as overridable findings, not orders"},
    {"id": "D4", "decision": "Dual legibility: one well-structured artifact navigable by both human and agent (not duplicated representations)", "why": "Open Brain dual-legibility standard b06540db says one well-written entry satisfies both audiences; Two-Door e741ab2c is about access mechanism not content duplication; prior 'two representations' framing was a misreading", "evidence": ["thought b06540db (dual legibility)", "thought e741ab2c (Two-Door)", "Levi correction 2026-05-28"], "alternatives_rejected": ["two-block prose+JSON mirror (prior incorrect formulation)", "unstructured prose blob"], "risk": "reverting to undisciplined prose or to duplicated-block drift", "reentry_instruction": "structure for navigability by both audiences; if writing a parallel JSON mirror, check whether propagating the old misreading"},
    {"id": "D5", "decision": "Durable memory = atoms shed from source doc", "why": "a monolithic doc is retrieval-invisible at scale", "evidence": ["atomization standard", "advisor atomic-thoughts"], "alternatives_rejected": ["store whole record as one memory unit"], "risk": "over-atomization fragments one idea", "reentry_instruction": "capture atoms individually; keep doc as reference"},
    {"id": "D6", "decision": "Name it SRR; leave SRR-vs-FIBERR open", "why": "derived structure differs from canonical FIBERR; reusing the name corrupts vocabulary", "evidence": ["derivation vs FIBERR template sections"], "alternatives_rejected": ["call it FIBERR", "redefine FIBERR"], "risk": "near-synonyms proliferate", "reentry_instruction": "reconciliation owned by Levi"},
    {"id": "D7", "decision": "Record lives in vault repo ECOS under ECOS-PROJECTS/", "why": "vault = documents; this is a document", "evidence": ["repo split fact"], "alternatives_rejected": ["ECOS-build", "scratch location"], "risk": "low", "reentry_instruction": "keep reentry records under ECOS-PROJECTS/"}
  ],
  "boundaries": {
    "settled": ["D1", "D2", "D3", "D4", "D5", "D7"],
    "open": ["SRR vs FIBERR reconciliation", "canonical ECB home", "template promotion of rationale section"],
    "in_scope": ["reentry record for this session", "repo diagnosis", "proposed atoms"],
    "out_of_scope": ["unrelated open loops in stale HANDOFF.md"],
    "known_unknowns": ["desktop clone state", "whether c677c5b8 already covers repo-split atom"]
  },
  "next_actions": [
    "commit + push this record",
    "Levi: decide SRR vs FIBERR",
    "review proposed atoms, then capture with skip list",
    "decide whether an ECB artifact mirror is wanted"
  ],
  "do_not": [
    "capture any atom before approval",
    "rename to FIBERR or redefine FIBERR without explicit decision",
    "trust HANDOFF.md / STATUS.md as current",
    "import structure from a template instead of re-deriving"
  ],
  "risks": [
    "prose/json drift", "section-2 chain-of-thought bloat", "atom over-fragmentation",
    "this record itself going stale", "SRR/FIBERR name ambiguity spreading"
  ],
  "proposed_atoms": [
    {"signal": "decision", "claim": "a reentry record must make decision rationale first-class because structure classifies context but cannot guarantee recovery of causal why"},
    {"signal": "framework", "claim": "session-authored memory should be evidence (decisions/lessons/constraints/failures/next-steps/source-refs), not instruction or chain-of-thought"},
    {"signal": "framework", "claim": "durable memory is atoms shed from a bounded source document, never the whole document stored as one unit"},
    {"signal": "observation", "claim": "curriculum shipped to ECOS main (0dfa63c) while HANDOFF.md stayed at 2026-05-06, showing filesystem-markdown handoff drifts from shipped work", "overlaps": "b323e241"},
    {"signal": "struct", "claim": "To design an artifact that lets a future worker resume after a session ends, build it section by section. Each section answers one specific thing the worker cannot recover from the session alone: the current state of the work; why each decision was made; what is settled and what is still open; where the files and records live; what is queued next; and what could silently go wrong. One section per recovery gap — no more, no fewer. The artifact then carries exactly what the session itself would not preserve."}
  ],
  "capture_status": "PROPOSED_ONLY_AWAITING_APPROVAL"
}
```

---

*Reentry order: read §0 (the bar) → §1 (what's true now) → §2 (why) → §3 (edges) → §4 (where) →
§5 (what next / what not) → §6 (what could break). §8 is an *optional* structured summary;
use it if your tooling prefers explicit fields, but the prose above already satisfies dual
legibility. §7 captures only after Levi approves.*
