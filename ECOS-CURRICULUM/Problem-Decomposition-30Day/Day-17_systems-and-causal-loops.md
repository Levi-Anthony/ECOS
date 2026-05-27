# Day 17 — Systems Thinking & Causal-Loop Maps

> Week 3 · Lens Selection & Sequencing

## Learning objective

Map an interdependent problem as stocks, flows, and labeled reinforcing/balancing loops, and
identify the single leverage point where a small push changes the most.

## Minimum Viable Rep — 25 minutes
1. Produce the structure (a causal-loop map of the spine case, Template 4).
2. Score it using the rubric.
3. Name one defect.
4. Repair one branch.
5. Write one sentence: "This structure helps because…"

## Concept lesson

Where MECE failed yesterday, the **causal-loop map** picks up. It drops the assumption of clean,
independent boxes and instead draws variables connected by arrows — "+" if A *increases* B, "−" if
A *decreases* B — then traces those arrows until they loop back to where they started. A loop that
amplifies itself is **reinforcing (R)**: it snowballs, virtuous or vicious. A loop that
self-corrects is **balancing (B)**: it pushes back toward a set point.

Two ideas sharpen the picture. **Stocks** are what accumulate (your pool of regulars, the studio's
reputation); **flows** raise or lower them (new beginners in, lapsed dancers out). Stocks have
inertia — they don't snap back the instant you change a flow, which is why interventions feel
delayed. And the payoff of the whole lens is the **leverage point**: in a loop, not all variables
are equal. A small, well-placed push on the right node can flip a vicious spiral into a virtuous
one, while hammering the wrong node just spends energy. The map's job is to find that node.

This is the lens for "everything affects everything; it's a vicious cycle." Its danger is the
opposite of MECE's: adding loops for show on a genuinely linear problem. Use it only when the
feedback is real.

## Practice case — the Week-3 spine

**ECTango attendance is inconsistent.** Beginner attendance is up after social posts, but repeat
attendance is down; advanced dancers say class energy is lower; the venue wants a predictable
weekly headcount; Levi suspects curriculum sequencing, instructors blame schedule fatigue.

Build the loop (Template 4). A strong starting spine: `turnout --(+)--> room energy --(+)-->
retention --(+)--> turnout` — a reinforcing loop (R) that runs virtuous or vicious depending on
direction. Extend it: `social posts --(+)--> beginner inflow`, but `beginner inflow --(−)-->
average room skill --(−)--> advanced dancers' energy` — feeding back into the same R loop. Mark
the stock (your pool of regulars) and the flows. Then name the **leverage point**: where does the
smallest push most change the spiral's direction?

Sequencing questions: **what does the loop reveal** (why a dip compounds; why pumping beginners in
backfires) and **what does it hide** (the *magnitude* of each link, and the specific step where the
journey leaks)? **What evidence would make you switch** to a process map or driver tree? **What
lens preceded this** (Day 16's failed tree)? **What would be lost** if you forced this back into a
clean MECE tree?

## Deliverable + Definition of Done

A filled Template-4 causal-loop map: ≥4 variables, signed links, at least one labeled R or B loop,
the stock named, and one leverage point identified.

**Definition of Done:** the map closes at least one real loop (not a tree in disguise); every link
is signed +/−; the loop is correctly labeled R or B; and you can name the leverage point and **the
decision it improves** — which intervention exploits the loop rather than fighting it — plus what
the loop hides (magnitudes, the leaky step).

## Self-check rubric

- [ ] Every link is signed (+/−) and at least one loop closes back on itself.
- [ ] I labeled each loop R or B correctly (does it snowball or self-correct?).
- [ ] I named the stock that accumulates and the flows that change it.
- [ ] I identified a leverage point and said why a push there moves the most.
- [ ] **What evidence would show this structure is incomplete, overlapping, or decision-irrelevant — or that I should switch lenses?**
- [ ] I can state the intervention this improves and what the loop hides.

## Common mistake to watch for

**Drawing a fishbone and calling it a loop.** If your arrows all point *into* one effect and none
point back out, you built a cause list, not a feedback structure. A real causal loop has at least
one path that returns to its origin — that return arrow is the whole point.

## When to use / when NOT to use

**Use** a causal-loop map when causes feed back on each other and the problem is dynamic — vicious
or virtuous cycles, slow-building or slow-draining stocks. **Do NOT** use it when the system is
genuinely linear (you're adding complexity for show), or when you need to *locate* a break in a
sequence — that's a process map's job (Day 18). The loop explains *why*; it won't tell you *where*.

## Reflection question

Once you saw the R loop, did "pump in more beginners" stop looking like a fix? Notice how the loop
reframed an obvious lever as the thing *driving* the problem. That reversal is systems thinking
earning its keep.

## Optional stretch

Take case #11 from `Case-Bank.md` (client churn after 90 days — possible trust spiral). Map it:
`unhappy client --(−)--> engagement --(−)--> results --(−)--> satisfaction --(−)--> ...`. Find the
leverage point, and notice it's the same move as the spine case in a different domain.

---
*Calibration:* compare against **Calibration-Gallery → Part B, Day 18** (the causal-loop sample:
`turnout → room energy → retention → turnout (R)`) and **Templates → Template 4** (the filled
causal-loop map).
