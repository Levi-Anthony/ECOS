# Day 11 — Root-Cause: 5 Whys + Fishbone

> Week 2 · Practice

## Learning objective

Walk a recurring symptom back to a cause you can **act on** using 5 Whys, and use a fishbone to
make sure you searched the right *families* of cause before committing — stopping at an actionable
root, not a deeper symptom.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a 5 Whys chain plus a fishbone of cause families for the practice case).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

Two root-cause tools, used together. **5 Whys** is a vertical walk: state the symptom, ask "why?",
answer, ask "why?" of the answer, and keep going until you hit something you can actually change.
**Fishbone (Ishikawa)** is a horizontal sweep: before you commit to one chain, group candidate
causes into families — people, process, tools, environment, materials — so you don't tunnel down
the first plausible chain and miss a whole category (Field-Manual §2, the 5-Whys and fishbone
patterns).

The discipline that separates a real root cause from theater is the **stop rule: stop at a cause
you can act on, not at a symptom.** "The network is slow → because bandwidth saturates" feels like
an answer, but bandwidth saturation is a *symptom* — you can buy more and the slowdown returns.
Keep asking why until you reach an owner, a policy, a default setting, a missing decision — something
a person could change tomorrow. Stop too early and you "fix" a symptom; the problem recurs and you
blame bad luck.

The two tools guard different failures. 5 Whys guards *stopping too shallow* (mistaking a symptom
for a root). Fishbone guards *starting too narrow* (walking the wrong chain because you never
considered the other families). Sweep families first, then walk the most promising chain to an
actionable root.

## Practice case

**Priya, the office manager at a 40-person client of yours, calls you again** (Case-Bank #9,
enriched). "The network slows to a crawl every afternoon around 2pm. The staff are furious, and my
boss wants me to approve a $4k bandwidth upgrade from the ISP this week — but you told me last time
that might not fix it." Messy details: it's only afternoons; mornings are fine; it started roughly
when a new file server went in; a few users stream music but IT already throttled that. **Distractor:**
the music streaming — visible, annoying, already half-addressed, and a tempting culprit.
**Plausible-but-wrong lens:** "it's a bandwidth capacity problem, buy more" — the symptom dressed as
a root. **Why it's not obvious:** the real trigger (a backup job scheduled at 2pm, saturating the
link during business hours, scheduled by nobody who owns the calendar) is invisible from the
help-desk seat. **Constraint:** Priya needs a recommendation before the $4k purchase order goes
through Friday — and she can't run a week-long packet capture first.

Walk the 5 Whys to an actionable root, and sweep a fishbone to confirm you didn't tunnel.

## Deliverable + Definition of Done

A 5 Whys chain (symptom → actionable root) plus a fishbone of 4–6 cause families with candidates in
each, and a one-line recommendation on the $4k purchase.

**Definition of Done:** the 5 Whys ends at something Priya can *change* (an owner/schedule/policy),
not a symptom like "bandwidth saturates"; the fishbone shows you considered at least one family the
5-Whys chain didn't walk; you can name **which cause, if true, would actually change the purchase
decision** and **which fishbone branch is tidy but probably low-value** here (e.g., the music
streaming, already handled). State the decision it improves.

## Self-check rubric

- [ ] My 5 Whys chain ends at an *actionable* cause (owner, schedule, default, policy), not a symptom.
- [ ] My fishbone groups causes into families and includes a family the 5-Whys chain skipped.
- [ ] I can point to where a weak version would have stopped (at "bandwidth") and why that's a symptom.
- [ ] **Which cause, if true, would actually change the decision — and which fishbone branch is tidy but probably low-value?**
- [ ] **What evidence, example, or counterexample would show this structure is incomplete, overlapping, or decision-irrelevant?**
- [ ] I can state the decision this structure improves (the $4k recommendation).

## Common mistake to watch for

**Stopping at a symptom that *feels* like a root.** "Bandwidth saturates" ends the inquiry because
it sounds technical and final — but it's the thing to explain, not the explanation. The tell: your
"root cause" is something you'd *buy your way past* rather than *assign an owner to*. Keep asking why.

## When to use / when NOT to use

**Use** for a single recurring problem with a traceable causal chain. **Don't** use 5 Whys on a
problem with **feedback loops** — a linear chain will lie when causes feed back on each other (use a
causal-loop map, Field-Manual §6–§7). And don't trust a single 5-Whys chain without the fishbone
sweep; the neat chain is often the wrong family.

## Reflection question

Where did *you* want to stop — and was it at a symptom you could throw money at, or a root you'd have
to assign someone to own? The urge to stop early usually points exactly at the symptom.

## Optional stretch

Run the same pair on Case-Bank #12 (scope creep eats margins) or #8 (mix sounds thin on small
speakers). Notice #12 forces a *people/incentive* family the technical-minded fishbone tends to
skip entirely.

---
*Calibration:* compare against **Day 11** in `Calibration-Gallery.md` (Part A) — the chain that
ends at *ownership of the schedule*, not at *bandwidth* (the symptom weak versions buy their way past).
