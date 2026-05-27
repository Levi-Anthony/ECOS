# Calibration Gallery

The cure for confident bad habits. Self-study fails when you can't tell whether your work is
any good. This file gives you a standard to compare against: model-answer snippets for the
early days, strong-vs-weak samples for the high-leverage days, and a bad→better→why appendix.

**How to use:** do the day's exercise *first*, on your own. Only then open the matching entry
here. Compare structure, not wording. Ask: did I miss a branch? overlap? cut at the wrong
grain? build something tidy but useless?

---

## Part A — Model-answer snippets (Days 1–14)

### Day 2 — MECE expense categories
*Strong (by function, MECE):* Housing · Food · Transport · Health · Discretionary · Savings.
Every dollar lands in exactly one. *Common slip:* adding "Amazon" as a category — that's a
*vendor*, not a function, so it overlaps every other bucket.

### Day 3 — Two cuts of the same problem ("grow studio revenue")
*Algebraic cut:* Revenue = students × avg. monthly spend × months retained.
*Segment cut:* Beginners · Intermediates · Privates · Workshops.
Both are valid and MECE; they reveal different levers. That's the lesson — the cut you choose
decides what you'll see.

### Day 4 — Issue tree, "why is the coffee shop losing money?"
```
Losing money
├── Revenue too low
│   ├── Too few customers (traffic? conversion?)
│   └── Low spend per customer (price? attach-rate?)
└── Costs too high
    ├── Fixed (rent, salaried staff)
    └── Variable (ingredients, hourly labor, waste)
```
*Strong because:* algebraic cut, MECE, two levels, every branch measurable.

### Day 8 — Profit decomposition
Profit = Revenue − Cost; Revenue = Volume × Price; Cost = Fixed + Variable. The strong version
keeps drilling only the branch that's actually moving — don't expand all branches equally,
expand toward the anomaly.

### Day 11 — 5 Whys (network slows each afternoon)
Slow → bandwidth saturates → backups run at 2pm → scheduled during business hours →
nobody owned the schedule. *Root cause is ownership, not bandwidth.* Weak versions stop at
"bandwidth" (a symptom) and buy more bandwidth that doesn't fix it.

### Day 14 — Picking the cut for two cases
*Operational (fulfillment delay):* process map — it's a sequence that breaks somewhere.
*Strategic (where to grow):* issue tree or where-to-play options — it's about choosing a
direction. Naming *why* each lens fits is the graded part.

---

## Part B — Strong vs. weak samples (high-leverage days)

### Day 5 — Auditing a broken structure
**Weak structure given:** "Reasons students quit: too expensive / too far / too hard / lost
interest / found another studio."
**The audit:**
- *Overlap:* "too hard" and "lost interest" blur — hard often *causes* lost interest.
- *Gap:* nothing for "life changed" (moved, schedule, money) — a huge real bucket.
- *Wrong grain:* "found another studio" is one specific exit, not a category.
**Strong fix (by stage + driver):** Never engaged · Engaged but barrier (cost/distance/time) ·
Engaged but experience (too hard / not fun) · Left for life reasons · Left for a competitor.

### Day 18 — Same problem, two lenses (attendance)
**Process map (strong for locating the break):**
`see promo → sign up → show up first time → return`. Reveals you lose people between
"sign up" and "show up."
**Causal loop (strong for explaining the spiral):**
`turnout → room energy → retention → turnout (R)`. Reveals *why* a dip compounds.
**The calibration point:** neither is "right." The process map localizes; the loop explains.
A strong analyst runs the process map first, then the loop on the leaky step.

### Day 21 — A two-lens-plausible case
**Problem:** "Client churn after 90 days."
**Weak answer:** "Use a fishbone." (Picks one tool, stops.)
**Strong answer:** "Start with a *process map* of onboarding to find where trust breaks; if
churn turns out to compound (unhappy clients → less engagement → worse results → more churn),
switch to a *causal loop*. Segment by client type throughout." Sequencing + a switch
condition is the strong marker.

### Day 26 — Pressure-test / first-principles
**Weak:** "I double-checked my recommendation; looks fine."
**Strong:** "What would have to be true for this to fail? (1) The trial period is too short to
see effects — likely. (2) Assumes traffic is the cause; first-principles check: do empty slots
actually correlate with commute times? If not, the whole structure rests on a bad assumption."

### Day 30 — Then vs. now
**Strong retrospective** lays Day-1 pre-test attempts beside Day-30 re-dos and names the
specific change: "Day 1 I brainstormed a flat list; Day 30 I picked a lens on purpose, checked
MECE, and pruned to decision-relevant branches."

---

## Part C — Bad → better → why (appendix)

### C1. The flat list
- **Bad:** "Ways to grow revenue: marketing, social media, referrals, ads, partnerships,
  events, email…" (a brainstorm, not a structure).
- **Better:** Revenue = new customers × spend + retained customers × spend. Marketing/ads/
  referrals all sit under "new customers"; email/events under "retain & spend."
- **Why better:** the algebraic cut shows these aren't peers — it groups tactics under the
  lever they pull, so you can see which lever is actually weak.

### C2. The overlap
- **Bad:** "Customers: cheap / loyal / online / local." (A customer can be all four.)
- **Better:** pick *one* axis — e.g., by tenure: new · returning · lapsed.
- **Why better:** one axis = mutually exclusive. Mixed axes guarantee double-counting.

### C3. The bottomless tree
- **Bad:** a tree drilled to seven levels of detail you can never measure.
- **Better:** stop at the level where you can gather evidence; mark deeper branches "TBD if
  needed."
- **Why better:** structure exists to guide analysis, not to be admired. Depth past evidence
  is wasted effort.

### C4. "Looks structured but isn't useful" (the trap to watch for)
- **Bad:** a flawlessly MECE tree of "types of marketing channels" when the real question is
  "why did profit drop?" Tidy, exhaustive, mutually exclusive — and it changes no decision
  because marketing channels weren't the problem.
- **Better:** start from the question (profit) with a driver tree; only branch into channels
  if the revenue branch points there.
- **Why better:** MECE is a hygiene check, not a goal. A structure that doesn't serve the
  actual decision is decoration, no matter how clean.

### C5. Forcing a tree onto a loop
- **Bad:** "Causes of low attendance: marketing, energy, retention" as three independent
  branches.
- **Better:** a causal loop — turnout → energy → retention → turnout — because these *cause
  each other*.
- **Why better:** the tree hides the feedback that *is* the story. When branches need
  "...which also affects the others" footnotes, switch to a loop.
