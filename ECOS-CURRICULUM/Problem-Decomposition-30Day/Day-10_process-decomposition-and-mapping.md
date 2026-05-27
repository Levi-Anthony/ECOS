# Day 10 — Process Decomposition & Process Mapping

> Week 2 · Practice

## Learning objective

Lay a problem out as an ordered sequence of steps and find **where the flow leaks** — locating
the broken step rather than blaming the first symptom you notice.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a process map / funnel of the practice case, with the leak marked).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

When a problem lives in a *sequence* — a workflow, an onboarding, a customer journey, a song
moving from idea to release — the right structure is a process map (Field Manual §2, the
process/stage pattern). You list the ordered steps and, where a population moves through them,
you track how many survive each step. That's a funnel: a sequence with attrition.

The single skill today: **find where the flow leaks, and don't assume it's where it first
appears.** The visible symptom (the empty final step, the angry client at the end) is almost
never the leak — it's downstream of it. A funnel with 80% drop between step 2 and step 3 will
*look* like a step-5 problem because step 5 is where you finally notice the shortage. Mapping
the whole sequence and counting survivors at each step localizes the actual break.

This is *where*, not *why*. The map tells you the leak is between "signed up" and "showed up";
it does not tell you the cause. That's deliberate — locating first, explaining second is the
strong move. (You'll run causal analysis *on the leaking step* on **Day 18**; today you only have
to find it.) Resist diagnosing while you map; mark the leak and stop.

## Practice case

**The decision-maker:** you, deciding where to put one fix in your IT-consulting client
onboarding before you take on two new clients next month. **The tension:** new clients keep
churning inside 90 days and you assume your *service quality* is the problem — but you have no
proof it's the service rather than the start.

**Messy details:** the journey runs *lead → discovery call → proposal sent → signed → kickoff →
first deliverable → 90-day mark*. Discovery calls are plentiful. Proposals go out fast. But a lot
of signed clients wait two-plus weeks for kickoff because you're heads-down on existing work, and
several never got a written scope doc. **Distractor:** the churned clients complain about "slow
support," which points your eye at the *first deliverable* step. **Plausible-but-wrong lens:**
treating it as a pricing/segmentation problem ("we sign the wrong clients") before checking where
they actually drop. **Why it's not obvious:** the complaint surfaces at the deliverable stage,
far downstream of the silent two-week gap after signing where trust quietly dies. **Constraint:**
you can fix exactly one step before the new clients start — no time to overhaul the whole
pipeline.

Map the sequence, count or estimate survivors per step, and mark the real leak.

## Deliverable + Definition of Done

A process map of the onboarding sequence with each step's drop-off noted and the single biggest
leak circled, plus one line on why it's not the step the complaint points to.

**Definition of Done:** the map is a genuine ordered sequence; you've identified one localized
leak with a reason it's the break and not just a symptom; you've answered **which step, if
fixed, would actually change the churn decision** and **which part of the map is tidy but
probably low-value** (a step everyone clears fine); and you can name the decision it improves —
which single onboarding step to fix first.

## Self-check rubric

- [ ] My structure is a real ordered sequence, not a flat list of issues.
- [ ] I marked attrition at each step, not just the endpoint.
- [ ] The leak I circled is upstream of the visible symptom (or I proved it isn't).
- [ ] **What evidence, example, or counterexample would show this structure is incomplete,
      overlapping, or decision-irrelevant?** (Find one and fix it, or confirm none exists.)
- [ ] I can state which step, if fixed, changes the churn decision.
- [ ] I named the step that's tidy but probably low-value (clears fine, no leak).

## Common mistake to watch for

Diagnosing while mapping — jumping to *why* the step leaks before you've confirmed *where*. Worse:
"fixing" the loud final step (more support hours) while the silent post-signing gap keeps killing
trust upstream. Localize first; explain on Day 18.

## When to use / when NOT to use

**Use** a process map when the problem is a sequence with hand-offs or drop-off (Field Manual §2).
**Don't** use it when there's no real order to the thing (a set of independent causes wants a
fishbone) or when the steps cause *each other* in a loop — then the linear map lies and you want a
causal-loop map (Field Manual §6–§7).

## Reflection question

Did mapping the sequence move the leak away from where the complaint pointed? Notice how often the
loud step is downstream of the quiet one that actually broke.

## Optional stretch

Take Case-Bank #6 (tracks take too long to finish) and map the production sequence
*write → arrange → mix → "is it done?" loop*. Find which step is the real stall — and notice the
last one isn't a step at all, it's a loop, which previews why process maps sometimes hand off to
causal analysis.

---
*Calibration:* compare against **Field Manual §2** (process/stage pattern) and Gallery **C5** —
note when a sequence is actually a loop and the linear map starts to lie.
