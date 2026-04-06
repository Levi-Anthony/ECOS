# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-03*

---

## Current Mode
PARK

## Open Loops
- PURPOSE.md — not written; every session defers it; quarterly anchor still missing
- GitHub MCP — now unblocked (git established this session); setup still pending
- BRAIN corpus cleanup — spec v1.1 ready; embedding model exact confirmation needed before execution begins
- Neil Wave 2 — futurism/tech-prediction list not built; window open since March 21 call
- Dispatcher routing table — identified March 25, still not built
- brain-capture-protocol.md — Obsidian path deferred (restructure pending); content fully in BRAIN
- Obsidian vault restructure — flagged as needed; not started

## Dispatcher Queue
- Corpus cleanup: next step is confirm embedding model (ada-002 vs text-embedding-3-small), then run threshold calibration on 30-entry stratified sample

## Decisions Made This Session
- D1: Skill files canonical home → vault repo (github.com/Levi-Anthony/ECOS), ~/ecos uses symlinks
- D2: brain-capture-protocol.md vault path → deferred pending Obsidian restructure
- ecos-boot: 5-call parallel structure locked (4 semantic + 1 recency sweep)
- BRAIN cleanup spec v1.1 approved and committed to vault
- Existing BRAIN embeddings confirmed vector(1536)
- Proactive Audit amendment applied to CLAUDE.md
- ecos-close and brain/skill.md atomization protocols aligned (upstream enforcement order)
- brain/skill.md Update/Delete section rewritten with REST workflow
- Taste instantiation built: ecos-boot 6th call loads universal TASTE:: entries; brain/tango/neil/ecos-deep each query domain-specific taste at skill load
- 10 BRAIN captures this session (7 architectural + 3 taste entries)

## Captures Pending
none

## Next Session Primer
PURPOSE.md has been the highest-leverage deferred item for multiple sessions — no tech prereqs, pure writing, unlocks quarterly anchor for all planning. Write it before touching anything else.

## Pending Improvements
2026-04-03 | Set up GitHub MCP (git now established; this is unblocked) | pending
2026-04-03 | Confirm exact BRAIN embedding model (ada-002 vs text-embedding-3-small) before corpus cleanup execution | pending
2026-04-03 | Obsidian vault restructure — Operations Library path doesn't exist; ECOS-PROMPTS/ is current home for prompts but may need reorganization | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
