# Day 9 — Customer / Market Segmentation Cuts

> Week 2 · Practice

## Learning objective

Split a population along **one** attribute axis so the groups are mutually exclusive, and use
the cut to expose a segment story that the aggregate number hides.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a one-axis segmentation of the practice case's population).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

Segmentation answers a different question than the profit tree. The profit tree asks *which
driver moved*; segmentation asks *which group behaves differently*. You reach for it when an
average is lying to you — when one blended number conceals two populations moving in opposite
directions (Field Manual §2, the segmentation pattern).

The one rule that makes or breaks a segmentation: **cut on a single axis at a time.** Mixing
axes is the classic overlap failure — "beginners / women / Tuesday students / online sign-ups"
isn't a segmentation, it's four overlapping lists; a person can be all four (Field Manual §2;
Calibration Gallery C2). Pick *one* characteristic — tenure, skill level, acquisition channel,
spend tier — and every member of the population lands in exactly one bucket.

The second move is to pick the axis on which **behavior actually differs**. A MECE cut by eye
color is clean and useless. The good axis is the one where, once you split, the groups tell
visibly different stories — one is fine, one is bleeding. That contrast is the entire payoff:
it relocates the problem from "the studio is shrinking" to "*returning intermediates* are
leaving while beginners grow," which points to a completely different fix.

## Practice case

**The decision-maker:** you, deciding which student group to spend a limited retention push on
before summer. **The tension:** total ECTango enrollment is flat month over month, so on the
surface nothing's wrong — but cash and class energy both feel worse.

**Messy details:** beginner intakes are up (good social-media quarter). The Tuesday intermediate
class has thinned. Private-lesson bookings are steady. A blended "enrollment is flat" headline
sits on top of all of it. **Distractor:** the strong beginner numbers make "we're growing, relax"
tempting. **Plausible-but-wrong lens:** segment by *night of the week* — feels concrete, but the
night isn't the actor; the *type of student* is, and one type spans several nights. **Why it's
not obvious:** the aggregate is flat, so the offsetting movements (beginners up, intermediates
down) cancel and hide the story. **Constraint:** the retention budget is one weekend of your time
and must be committed this week — you can't run a semester-long study first.

Cut the student population on one axis that makes the offsetting movement visible.

## Deliverable + Definition of Done

A one-axis segmentation of the student base (3–5 groups) with the per-group trend noted, plus a
one-line statement of the segment story the aggregate hid.

**Definition of Done:** every student lands in exactly one group (single axis, no overlap); the
cut surfaces a group moving against the average; you've answered **which segment would actually
change where the retention push goes** and **which part of the cut is tidy but probably
low-value** (e.g., a segment that's stable and large but irrelevant to the decision); and you can
name the decision it improves — which group to save first.

## Self-check rubric

- [ ] I cut on a single attribute axis — no mixed axes, no overlap.
- [ ] My groups are collectively exhaustive (every student has a home).
- [ ] The cut surfaces a segment moving against the blended average.
- [ ] **What evidence, example, or counterexample would show this structure is incomplete,
      overlapping, or decision-irrelevant?** (Find one and fix it, or confirm none exists.)
- [ ] I can state which segment changes where the retention push goes.
- [ ] I named the segment that's tidy but probably low-value to the decision.

## Common mistake to watch for

Mixing axes mid-cut (level + night + channel in one list). The instant a student could fall in
two groups, you've lost mutual exclusivity and the contrast becomes uninterpretable. One axis.

## When to use / when NOT to use

**Use** segmentation when behavior differs across groups and a blended number is hiding it.
**Don't** segment when the problem is a single driver or a sequence — slicing a funnel into
demographics before finding *where* it leaks just multiplies your work (that's Day 10's lens).
And don't segment on an axis where the groups behave identically; clean but flat is useless.

## Reflection question

Which axis did you reach for first — and was it the one where behavior actually differs, or just
the one that was easiest to measure? Those are rarely the same axis.

## Optional stretch

Take Case-Bank #11 (client churn after 90 days) and segment clients by type *and separately* by
acquisition channel. Two single-axis cuts, run side by side, beat one mixed cut — and they often
disagree about who's churning. That disagreement is the insight.

---
*Calibration:* no dedicated gallery entry — compare against **Case-Bank #2 and #11** (SEG-tagged)
and **Field Manual §2** (the segmentation pattern), plus Gallery **C2** for the mixed-axis trap.
