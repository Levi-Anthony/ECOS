# Day 5 — Testing a Structure: Overlaps, Gaps & False Categories

> Week 1 · Foundations · *load-bearing · correction loop*

## Learning objective

Take any decomposition, find its overlaps, gaps, and false categories on purpose, and **repair
it** into a structure you'd trust to carry analysis.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (audit + rebuild the practice case below).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

Building a structure is half the job. The defects that sink your analysis are invisible until
you hunt them on purpose — and finding them is worthless unless you then **repair**. Three to
hunt:

- **Overlaps (not mutually exclusive):** an item could sit in two branches. Tell: you catch
  yourself saying "well, that kind of belongs in both." Cost: double-counting and circular
  arguments.
- **Gaps (not collectively exhaustive):** a real case has no home. Tell: a counterexample you
  can't file. Cost: the true answer hides in the bucket you never drew.
- **False categories:** a branch that *sounds* clean but is actually one specific instance
  dressed up as a category (listing "our main competitor" as a peer of "all other reasons").

The audit is a *deliberate adversarial pass*: don't admire your tree — attack it. For each
branch ask, "What real example breaks this?" The fastest way to find a gap is to brainstorm
actual cases and try to file each; the one that won't file names your missing branch. Then —
and this is today's real skill — **repair by changing the organizing principle**, not by
bolting on more buckets. A clean rebuild usually picks one axis (e.g., *stage of
disengagement*) so branches fall out mutually exclusive by construction.

## Practice case

A deliberately — but *plausibly* — broken decomposition. **"Reasons a student quits the
studio":** *too expensive · too far to travel · classes are too hard · lost interest · found
another studio.*

It looks reasonable at a glance. Audit it before reading the rubric: find ≥1 overlap, ≥1 gap,
and the false category, then rebuild it clean.

## Deliverable + Definition of Done

A written audit **and** a repaired structure.
- **Audit:** name ≥1 overlap, ≥1 gap, and ≥1 false category, each with a one-line reason.
- **Repair:** a rebuilt set of branches that passes the master checklist (Field Manual §8).

**Definition of Done:** no two branches a single real example could fall into (ME); a home for
every quit-reason you can brainstorm (CE); no branch that's secretly a single instance; and you
can name **what decision the repaired structure improves** (e.g., which retention lever to test
first).

## Self-check rubric

- [ ] I found a genuine overlap and explained *why* the items blur.
- [ ] I found a gap by brainstorming a real case that wouldn't file.
- [ ] I identified the false category.
- [ ] **What real example would show my rebuilt structure is still incomplete, overlapping, or
      decision-irrelevant?** (Find one and fix it, or confirm none exists.)
- [ ] My branches sit at the same level of abstraction, under one organizing principle.
- [ ] I can state the decision this structure improves.

## Common mistake to watch for

Repairing by *adding more branches*. More buckets usually means more overlap. The fix is almost
always a **new organizing principle**, not a patch to the old list.

## When to use / when NOT to use

**Use** this audit on *every* structure before trusting it — two minutes, saves hours.
**Don't** treat passing the audit as the finish line: a structure can be flawlessly MECE and
still useless (Day 6). MECE is hygiene, not value.

## Reflection question

Which defect do you produce most — overlaps, gaps, or false categories? What does that reveal
about how your mind reaches for structure under time pressure?

## Optional stretch

Run the full audit on a structure you built on Day 3 or 4. Then audit a *real* artifact from
your work — a budget, a project plan, a class curriculum. Real artifacts hide the best defects.

---
*Calibration:* compare your audit and rebuild against **Day 5** in `Calibration-Gallery.md`
(Part B). Compare structure, not wording.
