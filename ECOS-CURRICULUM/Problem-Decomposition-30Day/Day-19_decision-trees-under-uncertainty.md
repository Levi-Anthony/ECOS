# Day 19 — Decision Trees & Expected Value Under Uncertainty

> Week 3 · Lens Selection & Sequencing

## Learning objective

Frame a real choice as a decision tree — options branching into uncertain outcomes with rough
probabilities and payoffs — compute expected value, then sanity-check it against risk tolerance
rather than trusting the number blindly.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a go/no-go decision tree on the spine case, Template 5).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

Every lens so far has *explained*. The decision tree **chooses**. You start with the decision
(a square), branch into the options you'd actually take, and under each option branch into the
uncertain outcomes — each with a rough probability and a payoff. Expected value is
**EV = Σ(probability × payoff)**: multiply each outcome's payoff by its odds, sum across the
branch, and you have one comparable number per option. Highest EV usually wins.

The discipline is in two guardrails. First, **EV is not the verdict — risk tolerance is.** A high
EV that includes a worst case you can't survive is a bad bet; always ask "is the worst branch
something I can live with?" before committing. Second — and this is the trap — **fake precision.**
It is tempting to invent crisp numbers (p = 0.62) to make the tree look rigorous. Made-up
probabilities don't become real by being written down; they just launder a guess into a
spreadsheet. The honest move is to use *rough* numbers (low/medium/high, or .7 vs .3), then test
whether the *ranking flips* when you wiggle them. If the recommendation survives plausible
swings in your guesses, the tree is doing real work. If it only holds at exactly p = 0.62, you've
built decoration.

## Practice case — the Week-3 spine

**ECTango attendance is inconsistent.** Beginner attendance is up after social posts, but repeat
attendance is down; advanced dancers say class energy is lower; the venue wants a predictable
weekly headcount; Levi suspects curriculum sequencing, instructors blame schedule fatigue.

The diagnostic lenses (Days 15–18) have run; now Levi must *act*. Frame the go/no-go: the two
live interventions are **(A) re-sequence the curriculum** (split into a protected beginner track
so week-three frustration drops) versus **(B) move/compress the schedule** (the instructors'
fatigue theory). Build a Template-5 tree: each option branches into "works → headcount
stabilizes" vs "doesn't → churn continues," with rough p and payoffs (gained/lost regulars, venue
goodwill). You **can't run a pilot of both** — slots and goodwill are finite — so the tree must
choose one to test first. Compute EV for each, then sanity-check the worst case.

Sequencing questions: **what does the decision lens reveal** (which bet has the better risk-
adjusted payoff *given* a fixed choice) and **what does it hide** (the feedback loop from Day 17
— that the options may interact, and that "works" isn't binary)? **What evidence would make you
switch** back to a causal loop or driver tree? **What lens fed this one** the candidate options?

## Deliverable + Definition of Done

A filled Template-5 decision tree on the spine case: ≥2 options, ≥2 signed outcomes each with
rough p and payoff, an EV per option, a stated choice, and a one-line risk note.

**Definition of Done:** probabilities are explicitly *rough* (not fake-precise) and you tested
whether the ranking survives wiggling them; you named the worst-case outcome and whether it's
survivable; and you can state **the decision it improves** — which single intervention to test
first — plus what the tree hides (the interaction/feedback between options).

## Self-check rubric

- [ ] My tree branches by *option first*, then by uncertain *outcome* — not the reverse.
- [ ] Each outcome has a rough probability and a payoff, and EV = Σ(p × payoff) is computed.
- [ ] I checked whether the ranking flips under plausible swings in my guesses (no fake precision).
- [ ] I named the worst-case branch and judged whether I can live with it (risk tolerance).
- [ ] **What evidence would show this structure is incomplete, overlapping, or decision-irrelevant — or that I should switch lenses?**
- [ ] I can state the intervention this points to and what the decision lens hides.

## Common mistake to watch for

**Fake precision dressed as rigor.** Writing p = 0.62 when you mean "probably" makes the tree
*look* analytical while hiding that the whole result rests on a guess. The tell: the
recommendation only holds at the exact numbers you invented and collapses the moment you round
them. Use rough bands and stress-test the ranking instead.

## When to use / when NOT to use

**Use** a decision tree when you must pick one option among several and the outcomes are
genuinely uncertain but estimable. **Do NOT** use it when there's no real choice to make (you're
still diagnosing — that's a tree/loop's job), or when the payoffs and probabilities are pure
fantasy with no grounding. On the spine case, a decision tree is the *wrong* first lens — running
it before Days 15–18 means choosing between interventions you don't yet understand.

## Reflection question

When you computed EV, did the number tempt you to stop thinking? Notice the pull to let one digit
make the call. The EV ranks the bets; *you* decide whether the worst branch is one you can afford.

## Optional stretch

Take case #3 from `Case-Bank.md` (add a second beginner track vs. deepen the existing one). Build
the decision tree with rough p/payoffs, then wiggle the probabilities — and notice whether your
recommendation is robust or rests on one fragile guess.

---
*Calibration:* compare against **Templates → Template 5** (the filled decision tree: "Move the
under-attended 6pm class?") and the choosing-vs-explaining logic in **Field-Manual §3**
(question 3: "Is there real uncertainty with payoffs I can estimate?").
