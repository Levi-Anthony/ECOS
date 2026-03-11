# BRAIN vs Obsidian vs GitHub

## Purpose

This document clarifies the division of labor between BRAIN, the canonical GitHub repository, and the local Obsidian vault. It exists to prevent role confusion.

The short version:

**BRAIN is for what needs to be found. GitHub is for what needs to be right. Obsidian is where the right thing gets worked on locally.**

---

## The Core Distinction

There are two different kinds of value in information.

### 1. Meaning value
This is the value of:
- the insight
- the pattern
- the distilled takeaway
- the retrievable summary
- the connection between ideas

This kind of information is often still useful even when you do **not** remember the exact filename, exact wording, or exact context where it first appeared.

That is what **BRAIN** is for.

### 2. Exact-form value
This is the value of:
- the exact wording
- the exact structure
- the exact arrangement of a framework
- the exact prompt text
- the exact current version of a teaching or business document

This kind of information loses value if the wording drifts, the structure changes accidentally, or nobody can tell which version is authoritative.

That is what the **canonical GitHub repository** is for.

### 3. Working value
This is the value of:
- being able to browse, read, edit, compare, and link documents comfortably
- working in a human-friendly interface
- making changes in context

That is what the **local Obsidian vault** is for.

---

## BRAIN

## Role
BRAIN is the semantic retrieval layer.

## Best used for
- atomic insights
- distilled observations
- decision summaries
- cross-session memory
- portable AI context
- shadow entries that summarize or point to canonical documents
- things you want to retrieve later by meaning rather than by file path

## Not best used for
- finalized exact-form prompt docs
- canonical specs
- official framework wording
- current authoritative pricing language
- the latest exact version of a structured teaching document

## Test
Ask:

**Would a distilled version of this still be useful six months from now, even if I don't remember the exact filename?**

If yes, BRAIN probably needs it.

---

## GitHub

## Role
GitHub is the canonical exact-form document layer.

## Best used for
- official prompt documents
- structured framework documents
- class plans whose wording matters
- architecture docs
- business docs with version history
- files assistants may edit directly
- anything where exact wording and visible revision history matter

## Not best used for
- raw insight capture
- broad semantic memory
- meaning-based recall without file/path awareness
- informal temporary thinking that is not ready to be formalized

## Test
Ask:

**Does this need to be right in exact wording or exact structure?**

If yes, it belongs in the canonical repository.

---

## Obsidian

## Role
Obsidian is the local structured working environment.

## Best used for
- reading canonical documents comfortably
- editing locally
- browsing linked material
- drafting and revising in a human-friendly interface
- navigating the corpus as a working environment

## Not best used for
- being mistaken for the ultimate authority layer
- carrying the burden of semantic retrieval on its own
- replacing GitHub as the exact-form system of record
- replacing BRAIN as portable semantic memory

## Test
Ask:

**Am I using this because it is the best place to work, or because I think it is the authority?**

If the second answer appears, stop and correct the model.

---

## The Working Relationship

The clean relationship is:

- **BRAIN** tells you what matters and often where to look
- **GitHub** holds the exact authoritative document
- **Obsidian** is where you interact with that document locally
- **Git** keeps the local working copy aligned with the canonical repo

This gives you:
- meaning retrieval
- exact-form stability
- human-friendly editing
- visible history

without forcing one tool to do all jobs badly.

---

## Example Cases

## Example 1: Prompt document
A harvesting prompt for post-class reflection.

- exact current text matters
- revisions matter
- assistants may need to edit it
- file path matters

**Canonical home:** GitHub  
**Local working environment:** Obsidian  
**Optional semantic shadow:** BRAIN summary of what the prompt is for and when to use it

---

## Example 2: Teaching insight
A realization about how students confuse axis stability with step shape.

- the insight matters more than the original wording
- you may want this retrieved later by meaning
- it may later become part of a framework doc

**Primary home:** BRAIN  
**Possible downstream formalization:** later drafted into a canonical framework doc in GitHub

---

## Example 3: Living framework
A pedagogical framework that keeps evolving.

- exact wording matters
- retrieval by meaning also matters
- change history matters

**Canonical exact-form home:** GitHub  
**Local working environment:** Obsidian  
**Semantic shadow:** BRAIN entry summarizing what the framework is and what problems it solves

---

## Shadow Entries

When something needs both semantic retrieval and exact-form authority, use a shadow model.

That means:
- the exact document lives in GitHub
- the local working copy lives in Obsidian
- BRAIN gets a distilled entry that points back to the canonical document

This prevents:
- burying good ideas inside file trees
- treating summaries as if they are the document
- forcing BRAIN to become a document repository

---

## Common Confusions to Avoid

## Confusion 1
**“If it’s in Obsidian, it must be canonical.”**

Not true. Under the current ECOS model, Obsidian is the local working environment, not the authority layer.

## Confusion 2
**“If GitHub has the file, then I should do all thinking there.”**

Not true. GitHub is where exact-form documents live canonically. It is not where semantic retrieval or reflective synthesis should live.

## Confusion 3
**“If BRAIN summarizes it well enough, that summary is the document.”**

Not true. A summary is a semantic access layer, not an exact-form substitute.

## Confusion 4
**“These are redundant systems.”**

Not really. They are different systems solving different problems:
- BRAIN solves retrieval-by-meaning
- GitHub solves exact-form canonicality
- Obsidian solves local human interaction with structured documents

---

## Decision Shortcuts

Use these quick rules.

### If it needs to be found later by meaning
Put it in **BRAIN**

### If it needs to be right in exact wording
Put it in **GitHub**

### If it needs to be worked on locally in a good human interface
Use **Obsidian**

### If it needs all three
- canonical version in GitHub
- local work in Obsidian
- semantic shadow in BRAIN

---

## Carry-Forward Sentence

**BRAIN finds what matters. GitHub holds what must be right. Obsidian is where I work locally.**
