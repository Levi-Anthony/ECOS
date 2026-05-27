# Day 4 — Issue Trees / Logic Trees

> Week 1 · Foundations

## Learning objective

Build a top-down issue tree that breaks a question into MECE sub-questions, two to three levels
deep, stopping where you could actually gather evidence.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (an issue tree for the practice case below).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

An **issue tree** turns one big question into a branching set of smaller questions. The
question sits at the top; each level breaks the level above into MECE pieces; you stop drilling
when a branch is small enough to answer with evidence you can get.

Two disciplines make a tree useful rather than decorative:
- **Pick the cut before you branch.** Decide *how* you're slicing (algebraic, process, segment,
  framework — Day 3) at each level. A tree that changes its slicing logic halfway down produces
  overlaps.
- **Stop at the evidence line.** The tree exists to guide analysis, not to be admired. The
  moment a branch is answerable by a number you can pull or a question you can ask, stop.

The payoff: an issue tree converts "ugh, where do I even start?" into a short list of concrete,
answerable sub-questions — and shows you which one to chase first.

## Practice case

**"Why is the coffee shop losing money?"** Build a two-level issue tree. Start from an
algebraic cut (money = revenue − cost), then break each side once more. Mark which single
branch you'd investigate first and why.

## Deliverable + Definition of Done

A two-level issue tree with a one-line note on your cut logic.

**Definition of Done:** 2–4 first-level branches under one consistent cut, each broken once
more, every leaf answerable with obtainable evidence, and you've named the one branch you'd
chase first — i.e., **the structure tells you where to start, which is the decision it
improves.**

## Self-check rubric

- [ ] My first-level branches are MECE under a single cut.
- [ ] The tree is 2–3 levels — deep enough to be useful, not bottomless.
- [ ] Every leaf is answerable with evidence I could realistically get.
- [ ] **What evidence or counterexample would show a branch is overlapping, missing, or
      decision-irrelevant?** (Check and fix.)
- [ ] I named the branch I'd investigate first and why.

## Common mistake to watch for

The **mixed-cut tree**: slicing by "revenue vs. cost" at level 1, then by "morning vs. evening"
under revenue but "staff vs. rent" under cost — fine *if* each parent keeps one cut, but
beginners often blend cuts within a level, creating overlaps. One cut per level.

## When to use / when NOT to use

**Use** issue trees when the space is cleanly enumerable and you want full, no-blind-spot
coverage. **Don't** force one onto a problem driven by feedback loops or a single live decision
— those want a causal map or a decision tree (you'll meet both in Week 3).

## Reflection question

Did building the tree change what you *thought* the problem was? Often the act of structuring
relocates the real question.

## Optional stretch

Rebuild the same tree from a *different* top-level cut (e.g., by customer segment instead of
algebraically). Which tree would you rather hand to someone investigating the problem, and why?

---
*Calibration:* compare against **Day 4** in `Calibration-Gallery.md` (Part A).
