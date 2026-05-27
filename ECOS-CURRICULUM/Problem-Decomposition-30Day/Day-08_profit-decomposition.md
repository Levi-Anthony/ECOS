# Day 8 — Profit / Financial Decomposition (the Workhorse)

> Week 2 · Practice

## Learning objective

Break a moving financial number into its algebraic drivers, then **drill only the branch
that's actually moving** — so the structure points at one lever, not a tidy map of all of them.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a profit/margin issue tree for the practice case).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

The profit tree is the most reusable structure in this whole program because it's *algebraic* —
the branches are forced by arithmetic, so they're MECE by construction:

```
Profit = Revenue − Cost
Revenue = Price × Volume
Cost = Fixed + Variable
```

That's the skeleton. The skill is **not** expanding all four leaves equally. A beginner draws
the full symmetric tree, feels organized, and learns nothing. A strong analyst expands *toward
the anomaly* — you watch where the number actually moved and drill only that branch. If revenue
is flat and variable cost jumped, you ignore the price/volume branch and decompose variable cost
until you hit the line item you can act on. The tree is a flashlight, not a wall map: you point
it at the dark corner, not the whole room.

So the move is two-step. First, the algebra gives you a complete, non-overlapping frame. Second,
**asymmetry** — let the data tell you which single branch deserves three more levels and which
deserve none. Expanding evenly is the most common way to build a beautiful, useless profit tree.

## Practice case

**The decision-maker:** you, deciding whether to cut your IT-consulting rate to win back hours,
or hold the rate and fix something else. **The tension:** your monthly take-home from consulting
dropped ~25% this quarter and a client just asked for a discount to renew.

**Messy details:** billable hours are roughly flat. You added a paid SaaS monitoring tool
(+$140/mo) you pass through at cost. One large client moved from a flat retainer to hourly and
now disputes line items, so two invoices went partly unpaid. Your effective hourly *rate* on
paper is unchanged. **Distractor:** the discount request makes "price is too high" feel like the
story. **Plausible-but-wrong lens:** segmenting clients by industry — interesting, but it
doesn't explain a *quarter-over-quarter drop*. **Why it's not obvious:** the rate looks fine and
hours look fine, so the leak hides in *realized* vs. *billed* revenue and in a cost line you
forgot you added. **Constraint:** you can't "just track everything for another quarter" — the
renewal decision is due in two weeks.

Build the profit tree, then drill only the branch the numbers actually move.

## Deliverable + Definition of Done

A profit issue tree (Template 1) with **one** branch drilled 2–3 levels deep and the others left
shallow, plus a one-line note on which branch you chose and why.

**Definition of Done:** the top split is algebraic and MECE; exactly one branch is expanded to a
line item you can act on; you've answered **which branch would actually change the
renewal decision** (rate vs. realized-revenue vs. cost) and **which part of the tree is tidy but
probably low-value** (likely the industry segmentation or the untouched price branch); and you
can name the decision it improves — hold the rate vs. cut it vs. fix collections.

## Self-check rubric

- [ ] My top split is algebraic (Profit = Revenue − Cost) and MECE by construction.
- [ ] I expanded only the branch the data actually moves — not all of them equally.
- [ ] I reached a line item concrete enough to act on (not "costs").
- [ ] **What evidence, example, or counterexample would show this structure is incomplete,
      overlapping, or decision-irrelevant?** (Find one and fix it, or confirm none exists.)
- [ ] I can state which branch would change the renewal decision.
- [ ] I named the part of the tree that's tidy but probably low-value.

## Common mistake to watch for

Expanding every branch to the same depth. A symmetric profit tree *looks* rigorous and steers
nothing. Let the anomaly pull the depth; starve the branches that didn't move.

## When to use / when NOT to use

**Use** the profit tree whenever the thing you care about is a number with known additive or
multiplicative drivers — revenue, margin, cost, headcount, hours. **Don't** force it on problems
that aren't algebraic (why is class *energy* low?) or where the drivers feed back on each other —
that's a causal loop (Field Manual §6–§7), not a tree.

## Reflection question

When you looked at the dropped number, did you reach first for the *most visible* branch (the
discount request) or the one the data actually implicated? What pulled your attention?

## Optional stretch

Take Case-Bank #5 (pricing the workshop series: Revenue = seats × price × sessions) and build
the tree the *other* direction — as a planning lever instead of a diagnosis. Notice the algebra
is identical; only the question changed.

---
*Calibration:* compare your tree against **Day 8** in `Calibration-Gallery.md` (Part A) — note
the "expand toward the anomaly, not symmetrically" point.
