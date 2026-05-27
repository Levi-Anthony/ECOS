# Day 16 — When MECE Is the WRONG Lens

> Week 3 · Lens Selection & Sequencing

## Learning objective

Build a clean MECE issue tree on an interdependent problem, then locate exactly where the tidy
boxes *lie* — proving by hand that some problems resist partition.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a MECE issue tree of the spine case — then annotate where it leaks).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

MECE is a hygiene check, not a worldview. It assumes the world cuts into clean, *independent*
boxes — and when the parts feed back on each other, that assumption distorts the problem instead
of clarifying it. Interdependence, feedback, emergence, "wicked" problems: these are the cases
where a flawless partition gives false confidence.

There's a reliable **tell**. When you finish a branch and feel the urge to add a footnote —
*"...which also affects the others"* — that footnote is the feedback the tree can't hold. The
boxes look mutually exclusive on paper, but in reality each one leaks into its neighbors. You can
keep the tree tidy only by *deleting the most important part of the story* — the interaction.

Today is the lived version of Field-Manual §6. You don't just read that MECE can be harmful; you
build the harmful tree and watch it fail in your hands. That experience is what stops the reflex
later: once you've felt a partition lie to you, "is this even a tree-shaped problem?" becomes a
real question instead of a slogan. The repair isn't a better tree — it's a different lens (§7),
which Day 17 supplies.

## Practice case — the Week-3 spine

**ECTango attendance is inconsistent.** Beginner attendance is up after social posts, but repeat
attendance is down; advanced dancers say class energy is lower; the venue wants a predictable
weekly headcount; Levi suspects curriculum sequencing, instructors blame schedule fatigue.

Build a MECE issue tree: *"Why is attendance inconsistent?"* → e.g., **Marketing** /
**Curriculum/sequence** / **Schedule** / **Room energy & retention**. Make it genuinely clean —
no overlaps, full coverage. Then go branch by branch and write the honest footnote: marketing
pulls in beginners *which lowers average skill which lowers room energy which lowers retention
which lowers turnout which the venue then blames on marketing.* Mark every place a branch needs a
"...which also affects the others."

Sequencing questions: **what does MECE reveal** here (coverage — you didn't forget a bucket) and
**what does it hide** (the loop that is the actual story)? **What evidence would make you switch**
— how many footnotes is too many? **What second lens follows?** (Day 17.) **What is lost if you
force this into a clean tree?** Name it concretely.

## Deliverable + Definition of Done

A MECE issue tree of the spine case **plus** an annotation layer marking every branch that needs a
"...which also affects the others" footnote, and one sentence naming what the tree structurally
cannot show.

**Definition of Done:** the tree is genuinely MECE (it passes the §8 hygiene check), yet you can
point to ≥2 cross-branch feedback links it hides; you name the lens you'd switch to and why; and
you state what decision is *harmed* by trusting the tree — i.e., you'd intervene on one box while
the loop quietly undoes it.

## Self-check rubric

- [ ] My issue tree is genuinely MECE — no overlaps, no gaps (I ran the §8 check).
- [ ] I marked ≥2 branches that need a "...which also affects the others" footnote.
- [ ] I named the specific feedback the clean tree deletes.
- [ ] I named the lens I'd switch to (causal loop) and the switch condition.
- [ ] **What evidence would show this structure is incomplete, overlapping, or decision-irrelevant — or that I should switch lenses?**
- [ ] I can state the decision the tree would *harm* if trusted as-is.

## Common mistake to watch for

**Mistaking tidiness for truth.** A perfectly MECE tree feels finished — that satisfaction is the
trap. Clean boxes on an interdependent problem don't mean you understand it; they mean you've
hidden the part you don't. The footnote count, not the neatness, tells you the truth.

## When to use / when NOT to use

**Use** a MECE issue tree on enumerable, well-bounded spaces — ways to cut costs, sources of
revenue, steps in a flow (Field-Manual §5). **Do NOT** use it on interdependent causes, feedback
loops, or emergent/wicked problems (§6). On the spine case, the cross-branch footnotes are the
proof: this is the *wrong* lens to commit to, even though it's a fine first sketch of coverage.

## Reflection question

How satisfying was the clean tree before you wrote the footnotes? Notice that pull toward tidiness
— it's the exact force that will make you trust a partition that's lying to you.

## Optional stretch

Take case #16 from `Case-Bank.md` (festival attendance / volunteer turnout declining). Build a
MECE tree, then count the footnotes. If it reads like the spine case — every box affecting every
other — you've found another loop wearing a tree's clothes.

---
*Calibration:* compare against **Calibration-Gallery → Part C, C5** ("Forcing a tree onto a
loop") and read **Field-Manual §6** (harmful MECE) and **§7** (the alternatives — what to reach
for instead).
