# Day 26 — Pressure-Testing & First-Principles Teardown

> Week 4 · Synthesis & Transfer · *load-bearing · correction loop*

## Learning objective

Red-team your own recommendation: name what would have to be true, find the disconfirming
evidence, trace second-order effects, strip it to first principles — and produce one repaired
recommendation.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (pressure-test a recommendation — yours from Week 4, or the worked one
   below).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch (i.e., revise the recommendation).
5. Write one sentence: "This structure helps because…"

## Concept lesson

A polished recommendation is dangerous precisely because it's persuasive. Pressure-testing is
the discipline of attacking your *own* conclusion before reality does. Four moves, and a
non-negotiable standard: **generic risk-listing doesn't count.**

- **What would have to be true?** Name the load-bearing assumptions your recommendation rests
  on. If one is false, the recommendation collapses.
- **Disconfirming evidence:** for the key assumption, state the *specific* observation that
  would prove you wrong — and the fastest test to get it.
- **Second-order effects:** if you act, what happens *next*? Who responds, and how does the
  system push back?
- **First-principles teardown:** strip the inherited framing. What do you actually *know*? What
  are you assuming because "that's how it's done"? Rebuild from fundamentals and see if you'd
  reach the same place.

*Bad pressure test:* "Risks: it might not work, costs could rise, people may dislike it." *Good
pressure test:* "This assumes inconsistent attendance is driven by second-visit drop-off, not
awareness. If records show most beginners never attend even once after inquiring, the problem is
top-of-funnel and the recommendation is wrong. Fastest disconfirming test: compare
inquiry→first-visit vs. first-visit→second-visit conversion over the last 8 weeks."

## Practice case

Take a recommendation you produced this week (Day 24/25), or this one: *"Move the under-attended
6pm beginner class to 7:30pm for a 4-week trial to recover attendance."* Run all four moves on
it, then write the repaired recommendation.

## Deliverable + Definition of Done

A pressure-test covering all four moves + one repaired recommendation.

**Definition of Done:** you've named ≥1 load-bearing assumption with a *specific* disconfirming
observation and the test to get it (not a vague risk); traced ≥1 second-order effect; done a
genuine first-principles pass; and the repaired recommendation reflects what you found —
**naming the decision it now improves and what evidence would change your mind.**

## Self-check rubric

- [ ] I named the load-bearing assumption(s), not just generic risks.
- [ ] For the key assumption I gave a *specific* disconfirming observation **and** the test.
- [ ] I traced at least one second-order effect.
- [ ] I did a real first-principles teardown (challenged an inherited assumption).
- [ ] **What single finding would make me abandon this recommendation entirely?** (State it.)
- [ ] My repaired recommendation actually changed in response to the test.

## Common mistake to watch for

**Generic risk theater:** a tidy bullet list of vague risks ("market conditions," "execution
risk") that names nothing testable. If a risk doesn't come with a specific observation that
would confirm it, it's decoration. Pressure-testing must be *disconfirmable.*

## When to use / when NOT to use

**Use** pressure-testing on any recommendation before you act on it — especially irreversible or
reputation-sensitive ones. **Don't** use it to talk yourself out of every action; the goal is a
*repaired* recommendation you'd still stand behind, not paralysis.

## Reflection question

Was your first instinct to *defend* your recommendation or to *break* it? The defensive instinct
is exactly what pressure-testing has to override.

## Optional stretch

Run a first-principles teardown on a belief you hold about one of your domains ("students need 8
weeks to reach the milonga floor"). Strip it to what you actually know. Does it survive?

---
*Calibration:* compare against **Day 26** in `Calibration-Gallery.md` (Part B) — the
generic-risk-list vs. real-pressure-test pair.
