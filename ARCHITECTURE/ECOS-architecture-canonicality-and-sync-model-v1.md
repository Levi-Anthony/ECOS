# ECOS Canonicality and Sync Model v1

## Purpose

This document defines the current ECOS authority model: where different kinds of information live, which layer is authoritative for which object types, and how changes are expected to move between layers. Its job is to prevent silent architectural drift.

This is a short operating spec, not a full philosophy document.

---

## Core Rule

**BRAIN helps find what matters. GitHub holds what must be right. Obsidian is where humans work locally. Git keeps those aligned. iCloud, if used, is convenience infrastructure, not authority.**

That sentence is the system in miniature.

---

## Layer Roles

## 1. BRAIN
**Role:** semantic retrieval layer

Use BRAIN for:
- distilled insights
- semantic memory
- cross-session retrieval
- pattern recognition
- shadow entries that summarize or point to canonical docs
- observations worth preserving in portable form

Do **not** use BRAIN as the exact-form authority for:
- finalized prompts
- canonical frameworks
- exact pricing language
- repository path structure
- operational docs where wording matters

**Authority type:** meaning-level authority, not exact-form authority

---

## 2. Canonical GitHub Repository
**Role:** exact-form canonical document layer

Use the canonical GitHub repository for:
- prompts in their exact working form
- frameworks whose wording matters
- structured documentation
- specs
- canonical teaching documents
- business docs where version history matters
- any file assistants may need to edit directly in the exact authoritative layer

This is the system of record for exact-form documents.

**Authority type:** exact-form authority

---

## 3. Local Obsidian Vault
**Role:** structured working clone / local human interface

Use the local Obsidian vault for:
- browsing the document corpus
- local reading and editing
- link-based navigation
- drafting and refinement in a comfortable human environment
- local staging before commit/push

The local Obsidian vault is **not** a separate truth source. It is a working copy of the canonical repository.

**Authority type:** local working state only

---

## 4. Git
**Role:** synchronization and version-history layer

Git provides:
- commit history
- diffs
- rollback
- explicit synchronization between local clone and canonical repo

Git does not determine meaning.  
Git does not replace BRAIN.  
Git does not replace Obsidian as the human working interface.  
Git does not replace GitHub as the canonical remote layer.

**Authority type:** transport/history mechanism, not content authority

---

## 5. iCloud
**Role:** convenience sync transport for the local clone across Apple devices

iCloud may keep the local Obsidian clone accessible on Apple hardware. It may be useful for occasional mobile access or continuity across machines.

iCloud is **not**:
- the canonical document store
- the version-history layer
- the semantic retrieval layer
- the authoritative sync model for exact-form governance

**Authority type:** none; transport only

---

## Object Types and Their Proper Home

## Objects that belong in BRAIN
- atomic observations
- distilled lessons
- recurring insights
- decision summaries
- semantic pointers to docs
- things likely to be retrieved later by meaning rather than filename

## Objects that belong in the canonical GitHub repo
- exact-form prompt docs
- official framework language
- canonical class plans
- structured architecture specs
- business documents where wording matters
- any file whose change history should be visible as diffs/commits

## Objects that may exist in both
- living frameworks
- key system docs
- architecture documents

In these cases:
- exact-form version lives in GitHub
- semantic shadow or summary lives in BRAIN

---

## Default Change Flows

These are the standard sync/update patterns.

## A. Local work into canonical repo
Use when working in Obsidian locally.

Flow:
`local Obsidian clone → git add/commit → git push → canonical GitHub repo`

Meaning:
- edit locally
- commit intentionally
- push to update authority

## B. Remote assistant edit into local clone
Use when an assistant edits the repo directly.

Flow:
`canonical GitHub repo → git pull → local Obsidian clone`

Meaning:
- GitHub changes first
- local clone must pull before further local editing

## C. Canonical doc into BRAIN shadow
Use when a meaningful document needs semantic retrieval.

Flow:
`canonical GitHub doc → summary/shadow entry → BRAIN`

Meaning:
- exact-form doc remains in GitHub
- BRAIN stores the retrievable abstraction

## D. BRAIN insight into canonical document
Use when an insight needs to become formalized.

Flow:
`BRAIN insight → deliberate drafting/editing → local clone or GitHub → canonical GitHub repo`

Meaning:
- BRAIN may inspire a document change
- BRAIN itself does not silently become exact-form truth

---

## Drift Risks

These are the main ways the architecture can quietly degrade.

## 1. Local-canonical drift
Treating the local Obsidian vault as if it were still the authoritative source after the repo is established.

Failure mode:
- local changes assumed canonical before push
- stale local files treated as current truth

## 2. Remote-stale drift
Continuing local work after remote/assistant edits without pulling first.

Failure mode:
- merge conflicts
- overwriting newer canonical state
- confusion about which wording is current

## 3. BRAIN-canonical confusion
Treating a BRAIN summary, note, or shadow entry as if it were the exact authoritative document.

Failure mode:
- quoting summaries as canonical language
- editing the abstraction instead of the document

## 4. Path/reference drift
Changing canonical repo paths without updating references in related docs or BRAIN shadows.

Failure mode:
- broken pointers
- retrieval still works conceptually but lands nowhere useful

## 5. iCloud-authority confusion
Assuming that because the vault syncs through iCloud, iCloud is part of exact-form governance.

Failure mode:
- treating sync convenience as canonicality
- over-weighting mobile/app behavior in system design

---

## Operating Assumptions

Unless explicitly superseded, ECOS should assume:

1. **GitHub is canonical for exact-form documents.**
2. **Local Obsidian is the working clone.**
3. **BRAIN is semantic retrieval, not exact-form storage.**
4. **Every multi-layer task should name authoritative layer and sync direction.**
5. **If authority is unclear, stop editing until the active state is clarified.**

---

## Decision Test

When deciding where something belongs, ask:

### Question 1
**Does this need to be found later by meaning, even if I don’t remember the exact name?**
- If yes, BRAIN probably needs a version of it.

### Question 2
**Does this need to be right in exact wording or structured form?**
- If yes, the canonical GitHub repo is probably the right home.

### Question 3
**Am I working on it locally because Obsidian is the best interface, or because I think local is authoritative?**
- If the second answer appears, stop and correct the model.

### Question 4
**Will another layer need to be updated after this change?**
- If yes, name the sync direction explicitly before proceeding.

---

## Current Stable Sentence

**BRAIN finds what matters. GitHub holds what must be right. Obsidian is where I work locally. Git keeps those aligned. iCloud is convenience, not authority.**
