# ECOS Architecture Update Notes — March 10, 2026

## Purpose

This document records the key architectural updates, clarifications, and superseded assumptions that emerged during the March 10, 2026 ECOS session. It is closer to release notes plus session notes than a conversational transcript.

Use it as:
- a compact changelog
- a decision summary
- a reference for what changed and why

Do **not** use it as the primary operating spec. For that, use the dedicated architecture and brief documents.

---

## Executive Summary

The session produced a meaningful architecture correction:

**ECOS moved from an implicit “Obsidian canonical / GitHub backup” model to an explicit “GitHub canonical / Obsidian local clone” model.**

That shift required:
- revising the phase-brief generator
- revising the Phase 1B exemplar
- clarifying BRAIN vs Obsidian vs GitHub roles
- de-centering mobile Obsidian as a design driver
- reframing iCloud as convenience transport rather than authority

This was not cosmetic. It corrected the system’s exact-form authority model.

---

## Major Decisions

## 1. Architecture B selected
Chosen model:

- **BRAIN** = semantic retrieval / distilled memory / pointers
- **GitHub repository** = canonical exact-form document store
- **Local Obsidian vault** = local structured working clone
- **Git** = synchronization + version history layer
- **iCloud** = optional convenience sync for the local clone

Why this matters:
- assistants can edit the canonical repo directly
- exact-form truth has a clear home
- local Obsidian remains valuable without being mistaken for authority

---

## 2. Mobile Obsidian is not a central requirement
Clarified user preference:
- canonical retrieval matters
- direct mobile editing does not matter much
- mobile Obsidian is occasional convenience, not architectural center

Effect:
- system design should not be distorted around iPhone editing convenience
- iCloud may stay, but not as a first-principles driver

---

## 3. iCloud retained, but narrowed in role
Decision:
- keep local vault in iCloud for now
- assume “Keep Downloaded” on the vault folder
- treat iCloud as convenience transport only

Meaning:
- iCloud is not canonical
- iCloud is not a version-history solution
- iCloud is not semantic retrieval
- iCloud does not determine the ECOS authority model

---

## 4. BRAIN and Obsidian roles clarified
Retrieved from Open Brain and refined in conversation:

- **BRAIN** is for meaning, retrieval, distilled insights, and portable context
- **Obsidian** is for structured local work
- **GitHub** now carries exact-form canonical authority
- **BRAIN summaries are not canonical text**
- managed sync is needed when something needs both exact-form stability and semantic retrieval

---

## 5. Phase brief infrastructure upgraded
Two important prompt assets were revised:

### A. Phase Brief Generator
Updated so every brief must state:
- authoritative layer
- edit origin
- sync direction
- architectural drift risks

### B. Phase 1B exemplar
Rewritten to align with Architecture B:
- canonical GitHub repo
- local Obsidian clone
- explicit authority model
- stronger canonicality language

---

## Superseded Assumptions

The following assumptions should now be treated as outdated:

### Superseded 1
**“Content that needs to be right in exact form lives in Obsidian.”**

Replacement:
**Content that needs to be right in exact form lives in the canonical GitHub repository.**

---

### Superseded 2
**“GitHub is just the remote backup.”**

Replacement:
**GitHub is the canonical exact-form repository and also functions as remote access surface and versioned history host.**

---

### Superseded 3
**“The local vault is the canonical document store under Git.”**

Replacement:
**The local vault is the structured working clone of the canonical repository.**

---

### Superseded 4
**“Because the vault is in iCloud, mobile Obsidian should shape the architecture.”**

Replacement:
**Storage location does not define authority. iCloud may remain for convenience without driving the architecture.**

---

## New Operating Sentences

These are the sentences worth repeating until they become automatic:

1. **BRAIN finds what matters.**
2. **GitHub holds what must be right.**
3. **Obsidian is where I work locally.**
4. **Git keeps those aligned.**
5. **iCloud is convenience, not authority.**

And, for file work specifically:

**GitHub is canonical. Local Obsidian is the working clone.**

---

## Artifacts Created or Identified

This session produced or called for the following core markdown artifacts:

1. **Phase Brief Generator — Revised for Architecture B**
2. **Phase 1B v2 — Canonical GitHub Repo + Local Obsidian Clone Setup**
3. **Canonicality and Sync Model v1**
4. **Obsidian / GitHub / iCloud Tradeoffs**
5. **This architecture update notes document**

These should be treated as the current core artifact set from the session.

---

## Risks Named During the Session

The following risks were surfaced and should remain visible:

- silent confusion about which layer is canonical
- drifting back into local-first assumptions out of habit
- treating BRAIN summaries as if they were exact-form documents
- failing to name sync direction in multi-layer tasks
- overweighting iCloud because of folder location rather than role
- using old prompt assets that still encode the obsolete architecture

---

## Recommended Next Actions

1. Save the revised prompt and exemplar as current governing docs
2. Save the architecture rule docs in the repo / vault
3. Use the revised meta-prompt for future phase briefs
4. Treat older Phase 1B / pre-Architecture-B language as superseded
5. Capture any real setup friction in BRAIN during implementation
6. Move forward with Phase 1B execution using the revised exemplar

---

## Versioning Note

This update should be treated as an architecture-change note, not merely a writing revision.

Suggested interpretation:
- **Previous state:** implicit local-canonical model
- **Current state:** explicit GitHub-canonical model
- **Change type:** architecture clarification + prompt infrastructure update

---

## Carry-Forward Statement

**Do not let stale wording silently reintroduce stale architecture.**
