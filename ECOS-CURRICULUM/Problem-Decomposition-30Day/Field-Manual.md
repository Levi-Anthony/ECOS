# Field Manual — Structured Problem Decomposition

> Your desk reference. Keep it open while you work. The daily lessons teach one idea at a
> time; this file is where the whole toolkit lives so you can look anything up later.

## Table of contents

1. [MECE, explained for beginners](#1-mece-explained-for-beginners)
2. [The reusable decomposition pattern library](#2-the-reusable-decomposition-pattern-library)
3. [Decision guide: choosing the right structuring tool](#3-decision-guide-choosing-the-right-structuring-tool)
4. [Weak vs. strong decompositions](#4-weak-vs-strong-decompositions)
5. [Where MECE is useful](#5-where-mece-is-useful)
6. [Where forcing MECE is harmful](#6-where-forcing-mece-is-harmful)
7. [Alternatives to MECE — and when to reach for them](#7-alternatives-to-mece--and-when-to-reach-for-them)
8. [The master checklist](#8-the-master-checklist)

---

## 1. MECE, explained for beginners

**MECE** = **M**utually **E**xclusive, **C**ollectively **E**xhaustive. It is a quality test
for any list or breakdown.

- **Mutually Exclusive (ME):** the categories don't overlap. Nothing belongs in two buckets
  at once. Overlap means you'll double-count and argue in circles.
- **Collectively Exhaustive (CE):** the categories cover everything. Nothing important falls
  through the gaps. Gaps mean you'll miss the real answer because it lives in a bucket you
  never made.

**The drawer test.** Imagine sorting socks into labeled drawers. If a sock could go into two
drawers, your labels overlap (not ME). If a sock fits *no* drawer, your labels have a gap
(not CE). A MECE set of drawers has exactly one correct home for every sock.

**Worked example — "reasons a customer didn't buy":**
- *Not MECE:* "price too high / didn't trust us / bought from a competitor" — overlaps (you
  can distrust *and* find it pricey) and has gaps (what about "didn't know we existed"?).
- *MECE (by stage):* never heard of us → heard but didn't consider → considered but chose
  another → wanted to but couldn't complete the purchase. Every lost customer sits in exactly
  one stage.

MECE is not the goal. It's a **hygiene check** you run on a structure you've already chosen
for another reason (see §3). A breakdown can be perfectly MECE and still useless (see §4).

---

## 2. The reusable decomposition pattern library

Patterns you can reach for. Each has a one-line "use when."

| Pattern | What it is | Use when |
|---|---|---|
| **Algebraic / formula tree** | Break a metric into the factors that multiply or add to it (Profit = Revenue − Cost; Revenue = Price × Volume) | The thing you care about is a number with known drivers |
| **Process / stage** | Split by the steps something passes through, in order | The problem lives in a sequence (a funnel, a workflow, a customer journey) |
| **Segmentation / attribute** | Split a population by a characteristic (customer type, region, product line) | Behavior or performance differs across groups |
| **2×2 matrix** | Two binary axes → four quadrants | You're comparing options on two dimensions, or prioritizing |
| **Funnel / conversion** | Sequential stages where you lose some at each step | Tracking drop-off from a large pool to a small outcome |
| **Stock-and-flow** | What accumulates (stock) and what raises/lowers it (flows) | Something builds up or drains over time |
| **Stakeholder / power-interest grid** | Map actors by influence and interest; note their incentives | Outcomes depend on what people choose to do |
| **5 Whys** | Ask "why?" repeatedly to walk from symptom to root cause | A single recurring problem with a causal chain |
| **Fishbone (Ishikawa)** | Group candidate causes into families (people, process, tools, environment…) | Brainstorming many possible causes of one effect |
| **Hypothesis tree** | State a likely answer, then break it into the sub-claims that must be true | You can guess the answer and want to test it fast |
| **Issue / logic tree** | Top-down MECE breakdown of a question into sub-questions | The space is cleanly enumerable and you want full coverage |
| **Decision tree** | Branch by choices and uncertain outcomes, with payoffs | Choosing among options under uncertainty |
| **Causal-loop / systems map** | Nodes connected by reinforcing and balancing loops | Causes feed back on each other; the system is dynamic |

---

## 3. Decision guide: choosing the right structuring tool

This is the heart of the program. Don't memorize tools — learn the **diagnostic questions**
that point to one.

### Diagnostic questions (ask in order)

1. **Am I explaining/diagnosing, or choosing?**
   - *Explaining a cause* → issue tree, driver tree, 5 Whys, fishbone, causal map.
   - *Choosing among options* → decision tree, 2×2, weighted-factor model.
2. **Is there feedback / circular causality?** (Does A worsen B, which worsens A?)
   - *Yes* → causal-loop / systems map. A clean tree will lie to you here.
   - *No* → a tree-shaped tool is fine.
3. **Is there real uncertainty with payoffs I can estimate?**
   - *Yes* → decision tree with expected value.
4. **Can I cleanly enumerate the space without overlap?**
   - *Yes* → MECE issue tree.
   - *No (messy, interdependent)* → causal map, or a hypothesis tree to stay focused.
5. **Do I already have a likely answer I want to test quickly?**
   - *Yes* → hypothesis tree (lead with the answer, test the load-bearing claims).
6. **Does my audience want a recommendation or an exploration?**
   - *Recommendation* → drive toward a decision tree / pyramid synthesis.
   - *Exploration* → an issue tree or systems map is fine to leave open.

### Symptom → lens table

| Symptom in the problem | Reach for |
|---|---|
| "It's a number that's moving and I don't know why" | Algebraic/driver tree |
| "Different groups behave differently" | Segmentation |
| "It breaks somewhere in a sequence" | Process map / funnel |
| "The same problem keeps coming back" | 5 Whys / fishbone |
| "Everything affects everything; it's a vicious cycle" | Causal-loop map |
| "I must pick one option and I'm unsure of outcomes" | Decision tree |
| "I have a hunch and limited time" | Hypothesis tree |
| "I need full coverage and no blind spots" | MECE issue tree |
| "People's choices drive the outcome" | Stakeholder/incentive map |

> **Often the answer is a *sequence* of lenses.** A common move: map the process to find
> *where* it breaks, then switch to a causal loop if the breakage turns out to be
> self-reinforcing. Picking one lens for life is the beginner mistake; sequencing them is the
> skill.

---

## 4. Weak vs. strong decompositions

Three things separate a strong structure from a weak one. (Paired examples live in
`Calibration-Gallery.md`.)

1. **MECE-clean** — no overlaps, no gaps (the hygiene check from §1).
2. **Useful / decision-relevant** — every branch, if you learned the answer, would change
   what you'd do. A tree can be flawlessly MECE and still change no decision. That is the
   *"looks structured but isn't"* trap: tidy boxes that don't move you toward an action.
3. **Cut at the right grain** — branches are at the same level of abstraction (don't mix
   "marketing" with "the Tuesday 6pm class's flyer"), and you stopped at the depth where
   you can actually gather evidence.

**Quick contrast:**
- *Weak:* "Why is revenue down? → bad luck / the economy / it's complicated." Vague,
  not actionable, mixes levels.
- *Strong:* "Revenue = customers × avg. purchase. Customers down or spend down? → if
  customers: new vs. returning? → if returning: which segment churned?" Each branch is
  measurable and points to a different fix.

---

## 5. Where MECE is useful

- **Enumerable, well-bounded spaces.** "Ways to cut costs in the studio," "sources of
  revenue," "steps in the onboarding flow."
- **Sizing and prioritization.** When you want to be sure you didn't miss a big bucket
  before deciding where to focus.
- **Communicating coverage.** A MECE structure reassures an audience you looked everywhere.
- **Diagnostics with clean drivers.** Profit/financial trees, conversion funnels.

In these cases MECE prevents the two classic failures: arguing about double-counted items,
and missing the real answer because it lived in a bucket nobody drew.

---

## 6. Where forcing MECE is harmful

MECE assumes the world can be cut into clean, independent boxes. When it can't, forcing it
*distorts* the problem:

- **Interdependent causes.** "Why are classes under-attended?" Marketing, pricing, schedule,
  and energy in the room all influence each other. Clean boxes hide the interactions that
  are the actual story.
- **Feedback loops / dynamics.** Low turnout → low energy → lower retention → lower turnout.
  A tree shows a snapshot; the truth is a loop (use §7's causal map).
- **Emergent / "wicked" problems.** Community culture, brand, trust — these arise from many
  interacting parts and have no clean partition. A MECE tree gives false confidence.
- **Novel problems with no precedent.** When you don't yet know the categories, forcing a
  partition locks in bad ones. Reason from first principles first, *then* structure.

**The tell:** if your branches keep needing "...and this affects that" footnotes, MECE is
the wrong lens.

---

## 7. Alternatives to MECE — and when to reach for them

| Instead of forcing MECE… | Use | Because |
|---|---|---|
| …on interdependent causes | **Causal-loop / systems map** | Captures feedback the tree hides |
| …on a choice under uncertainty | **Decision tree** | Weighs options by probability × payoff |
| …when time is short and you have a hunch | **Hypothesis tree** | Tests the answer instead of mapping everything |
| …on a sequence that breaks | **Process map / funnel** | Localizes *where* it fails |
| …on a people-driven outcome | **Stakeholder / incentive map** | Surfaces who acts and why |
| …on a brand-new problem | **First-principles reasoning** | Rebuilds from fundamentals before categorizing |

**First-principles reasoning (the deep alternative):** strip the problem to facts you're sure
are true, drop inherited assumptions, and rebuild. Ask: "What do I actually *know*? What am I
assuming because that's how it's always been done? If I started fresh, how would I build the
answer?" Use it when the standard categories feel borrowed or stale. (Practiced on Day 26.)

---

## 8. The master checklist

Run this on *any* structure before you trust it. (Templates restate it; this is the canonical version.)

- [ ] **Mutually exclusive?** Could any item belong in two branches? Fix the overlap.
- [ ] **Collectively exhaustive?** Is there a real case with no home? Add the missing branch
      (an "other" bucket ≤ ~10% is a tolerable catch-all; bigger means a missing category).
- [ ] **Useful?** If I resolved each branch, would it change a decision? Prune dead branches.
- [ ] **Decision-relevant?** Does this structure serve the actual question being asked?
- [ ] **Same grain?** Are branches at one consistent level of abstraction?
- [ ] **Right lens?** Did I check §3 — is a tree even the right shape, or is this a loop /
      decision / process?
- [ ] **Hidden assumptions?** What must be true for this cut to make sense? Name it.
- [ ] **False categories?** Did I invent a bucket that sounds clean but doesn't exist in
      reality?

> If a structure passes all eight, it's ready to carry analysis. If it fails one, you've
> found exactly what to fix — that's the checklist doing its job.
