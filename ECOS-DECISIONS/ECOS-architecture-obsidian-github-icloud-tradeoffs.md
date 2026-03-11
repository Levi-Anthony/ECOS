# Obsidian, GitHub, and iCloud Tradeoffs

## Purpose

This note records the reasoning behind keeping the local Obsidian vault in iCloud while using a canonical GitHub repository for exact-form documents. It exists so the decision can be revisited intelligently rather than re-argued from scratch.

This is a decision memo, not a universal recommendation.

---

## The Actual Goal

The central ECOS goal is **canonical retrieval**, not direct mobile editing.

More specifically:
- exact-form documents should have a stable authoritative home
- assistants should be able to create and edit canonical files
- humans should have a comfortable local working environment
- semantic retrieval should remain distinct from exact-form storage
- mobile Obsidian is optional convenience, not a design center

That changes the whole storage conversation.

---

## What Was Initially Overweighted

Early reasoning risked overweighting the fact that the vault currently lived in iCloud. That could have pushed the system toward a false conclusion:

> “Because the vault is in iCloud, mobile Obsidian compatibility must be central.”

That is not the correct driver.

The correct driver is:
- what layer is canonical
- what layer is semantic
- how assistants will edit files
- what kind of sync is actually needed

Once GitHub became canonical, the role of iCloud became much narrower.

---

## Chosen Architecture

The current ECOS arrangement is:

- **BRAIN** = semantic retrieval layer
- **Canonical GitHub repository** = exact-form authority
- **Local Obsidian vault** = local structured working clone
- **Git** = sync/history layer
- **iCloud** = convenience sync transport for the local clone

That means iCloud is part of the user-experience layer, not the authority layer.

---

## Why Keep iCloud Anyway

Even though iCloud is not architecturally central, it still provides value.

## Benefits of keeping iCloud
- local vault remains available across Apple devices
- occasional mobile access remains possible
- no forced migration away from current storage location
- less disruption to current Obsidian habits
- keeps continuity with the present setup while the rest of ECOS stabilizes

## What iCloud is *not* doing in this model
- defining canonical exact-form truth
- replacing Git history
- replacing GitHub as the authoritative repo
- replacing BRAIN as retrieval layer

So iCloud is not meaningless. It is just **narrowly important** rather than structurally central.

---

## “Keep Downloaded” Matters

The key operational condition that makes this arrangement viable is keeping the local vault fully available on disk.

Why this matters:
- Git needs to interact with real local files
- Obsidian is smoother when the vault is fully present
- cloud-only placeholders create confusing or brittle behavior

So the working assumption is:

**If the vault remains in iCloud, “Keep Downloaded” should be enabled for the vault folder.**

That preserves iCloud convenience while reducing the practical risk of local file unavailability.

---

## Main Tradeoff

The real trade is:

**Keep iCloud convenience**  
vs.  
**accept a bit more local sync complexity than a purely local-only vault**

This trade is acceptable because:
- GitHub is canonical
- mobile Obsidian is optional
- local clone behavior is still acceptable if the vault stays downloaded
- the user is not building a high-frequency multi-machine Git workflow

---

## What Is Being Gained

By keeping iCloud:
- you preserve occasional Apple-device continuity
- you avoid unnecessary relocation churn
- you keep open the option of light mobile access
- you avoid treating “remove iCloud” as a premature purity move

---

## What Is Being Risked

By keeping iCloud:
- there is still some coexistence complexity between local repo state and a cloud-synced folder
- there is still some potential confusion if multiple devices interact with the same local clone state carelessly
- it is easier to overestimate the importance of mobile Obsidian if the architecture is not named clearly

These are real, but currently acceptable.

---

## Why Dropbox and Google Drive Were Not Chosen as Better Solutions

Alternative sync layers exist, but they do not solve the core ECOS question better than the current iCloud arrangement.

Why:
- the central question is canonicality, not generic cloud storage
- GitHub already covers exact-form authority and version history
- BRAIN already covers semantic retrieval
- changing cloud transport does not improve the core architecture much
- changing sync providers would add migration overhead without materially improving the chosen model

So the decision was not:
- “Which sync service is best in the abstract?”

It was:
- “Does keeping iCloud materially harm the chosen architecture?”

Current answer: **not enough to justify changing it right now**

---

## Conditions That Would Trigger Reconsideration

Revisit this decision if any of the following become true:

1. **iCloud causes repeated local clone instability**
   - missing files
   - repeated weird sync behavior
   - persistent interference with local Git operations

2. **Multi-machine Git work becomes common**
   - multiple active desktops
   - frequent local Git actions across machines
   - regular conflicts caused by stale local states

3. **Mobile editing becomes much more important than currently expected**
   - direct phone-based canonical editing becomes a real workflow need

4. **A cleaner local-only clone proves clearly better operationally**
   - enough real friction accumulates that iCloud stops being worth it

5. **Assistant workflow changes**
   - if assistant tooling begins to operate directly against local files in a way that makes iCloud a liability

---

## Current Decision

**Keep the local Obsidian vault in iCloud for now, with “Keep Downloaded” enabled, while treating GitHub as the canonical repo and iCloud as convenience transport only.**

That is the current stable choice.

---

## Practical Operating Rule

**Do not reason from storage location to authority.**

Just because the local vault sits in iCloud does not mean:
- iCloud is canonical
- Obsidian mobile is central
- GitHub is secondary only

Authority is defined by architecture, not by where Finder says the folder lives.

---

## Carry-Forward Sentence

**The vault may live in iCloud, but exact-form authority lives in GitHub.**
