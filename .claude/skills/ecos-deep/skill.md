---
name: ecos-deep
description: >
  Load for ECOS architecture sessions — designing, modifying, or stress-testing
  ECOS infrastructure, BRAIN, SIGMA, dispatcher logic, skill files, or the
  HANDOFF protocol. Use when Levi mentions ECOS internals, SIGMA naming,
  BRAIN architecture, or asks to work on the operating system itself.
  Do NOT load for normal working sessions — CLAUDE.md handles those.
disable-model-invocation: false
---

# ECOS Architecture Reference

## Layer Map

```
ECOS (container — flagship name, exempt from SIGMA)
├── CLAUDE.md          always-loaded boot substrate (≤120 lines hard ceiling)
├── HANDOFF.md         live state document — written at close, read at boot
├── SIGMA              constitutional naming standard for all subsystems
├── BRAIN              semantic memory (Thoughts + Documents)
│   ├── Supabase/pgvector database
│   ├── Open Brain MCP interface
│   ├── GitHub canonical read/write layer
│   └── Obsidian structured working clone
├── .claude/skills/    domain behavioral modules, loaded on demand
└── .claude/rules/     scoped rules by glob pattern (overflow from CLAUDE.md)
```

## SIGMA Standard

Stratified Integral Governance Meta-Architecture. Every letter maps to a real
term from a real discipline. Governs all subsystem naming within ECOS.
ECOS brand expansion ("Effortless Connection Operating System") is public-facing
alias only — not constitutional definition, not in internal architecture docs.
ECOS SIGMA-compliant expansion: in progress.
- E: "Emergent" — current candidate
- OS: "Operating System" — compound term candidate
Full expansion not yet locked.

## Locked Decisions

- Two-tier content model: Thoughts + Documents (collapsed March 13)
- GitHub as canonical read/write layer; Obsidian as structured working clone
- Architecture B as settled infrastructure
- SIGMA as governing naming standard
- Conformal mapping as correct cross-domain vocabulary (angle preservation,
  not fractal self-similarity)
- HANDOFF.md replaces Cowork as primary live state layer for v1
- Cowork remains the target for scheduled/persistent state in v2

## BRAIN Retrieval Protocol

- Threshold 0.38–0.42 broad; tighter for domain-specific
- Parallel multi-vector searches for cross-domain insight
- Pre-capture dedup non-negotiable
- `list_thoughts(type="task")` for action items, not semantic search
- Double-window pattern for comparative period retrieval
- Minimum boot retrieval: active threads + open loops + recent decisions

## AQAL Quadrant Distribution (~1,033 entries)

- UL: strongest, most entries
- UR: tightest intra-cluster coherence in tango pedagogy
- LL: weakest
- Bridge entries at moderate similarity across distant quadrant searches
  are the geometric signature of cross-domain insight

## Atomization Standard

One center of mass in embedding space per entry. The "and" test is a proxy
heuristic pointing at the geometry — not the definition. Correct question:
does this entry land in one place on retrieval?

## Gotchas

- **CLAUDE.md overflow:** When approaching 120 lines, move rules to
  `.claude/rules/` not to skill files. Skill files are domain modules, not
  rule overflow buckets.
- **HANDOFF.md staleness:** Timestamp is required. If last_updated is >3 days,
  treat as cold start regardless of content.
- **Cowork dependency risk:** Cowork is confirmed architecture, unconfirmed
  behavior. Do not make Cowork load-bearing until tested in actual workflow.
- **MCP context tax:** Open Brain MCP tax is justified — it's the memory store.
  Audit other MCPs in session for unjustified context overhead.
- **Rebuttal gap:** When adversarial attacks are deflected, the rebuttals are
  the intellectual content. Flag uncaptured rebuttals explicitly.
- **Reference file drift:** Domain reference files encode BRAIN content.
  BRAIN is canonical. Reference files must be flagged for review when
  BRAIN receives major updates in their domain.
- **Domain routing is not exhaustive:** If a new domain is added, update
  CLAUDE.md routing table and create corresponding skill file.
  No versioning currently — manual process.
