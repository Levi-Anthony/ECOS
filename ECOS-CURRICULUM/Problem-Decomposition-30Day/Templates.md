# Templates — Copy, Paste, Fill In

Six reusable templates. Each has a 2-line "how to use" and a tiny filled example. Copy the
block into your daily note and replace the brackets. Trees are plain indented text so they
read anywhere (paper, phone, Obsidian).

---

## 1. Issue / logic tree (MECE breakdown)

**How to use:** Put the question at the top. Break it into 2–5 MECE sub-questions. Go down
1–3 levels — stop where you could gather evidence. Run the §8 master checklist on it.

```
QUESTION: [the question you're answering]
├── Branch A: [sub-question]
│   ├── A1: [sub-sub-question]
│   └── A2: [sub-sub-question]
├── Branch B: [sub-question]
└── Branch C: [sub-question]
Cut logic: [why this cut — algebraic / process / segment / framework]
MECE check: ME? [y/n]  CE? [y/n]  Useful? [y/n]
```

*Filled example:*
```
QUESTION: Why is studio profit down this quarter?
├── Revenue down?
│   ├── Fewer students?  (new vs. returning)
│   └── Lower revenue per student?  (price vs. frequency)
└── Costs up?
    ├── Fixed (rent, insurance)?
    └── Variable (subs, materials)?
Cut logic: algebraic (Profit = Revenue − Cost)
MECE check: ME? y  CE? y  Useful? y
```

---

## 2. Hypothesis tree

**How to use:** State your best-guess answer at the top. List the claims that must ALL be
true for it to hold. Under each, note the evidence that would confirm or kill it. You're
trying to *disprove* fast, not decorate the hunch.

```
HYPOTHESIS: [your best guess at the answer]
Must be true:
├── Claim 1: [...]   → Test: [data/observation]   → Verdict: [ ]
├── Claim 2: [...]   → Test: [data/observation]   → Verdict: [ ]
└── Claim 3: [...]   → Test: [data/observation]   → Verdict: [ ]
Kill criterion: [what single finding would make me abandon this hypothesis]
```

*Filled example:*
```
HYPOTHESIS: Attendance dips because the 6pm slot collides with rush-hour traffic.
├── Claim: 6pm classes are emptier than 7:30pm ones  → Test: attendance logs → [ ]
├── Claim: empties correlate with commute distance   → Test: student zip codes → [ ]
└── Claim: a time change would recover them          → Test: trial week → [ ]
Kill criterion: 6pm and 7:30pm attendance are equal.
```

---

## 3. Analysis plan

**How to use:** For a structure you've built, list what evidence each branch needs, where
you'd get it, and how much effort it is. Turns a tree into a work plan.

```
STRUCTURE BRANCH | QUESTION IT ANSWERS | EVIDENCE NEEDED | SOURCE | EFFORT (L/M/H) | PRIORITY
[branch] | [...] | [...] | [...] | [ ] | [ ]
[branch] | [...] | [...] | [...] | [ ] | [ ]
```

*Filled example:*
```
Returning-student churn | Did regulars stop coming? | attendance by student over 6 mo | sign-in sheet | L | High
Price sensitivity | Did the price rise drive them off? | exit reasons | quick survey | M | Med
```

---

## 4. Causal-loop map

**How to use:** List the key variables. Draw arrows: "+" if A increases B, "−" if A
decreases B. Trace loops back to a starting variable. Label each loop **R** (reinforcing,
snowballs) or **B** (balancing, self-corrects).

```
Variables: [V1], [V2], [V3], ...
Links:
  [V1] --(+)--> [V2]
  [V2] --(+)--> [V3]
  [V3] --(−)--> [V1]
Loops:
  Loop 1 (R/B): [V1 → V2 → V3 → V1] — [one line on what it does]
Leverage point: [the variable where a small push changes the most]
```

*Filled example:*
```
Variables: turnout, room energy, retention
  turnout    --(+)--> room energy
  room energy--(+)--> retention
  retention  --(+)--> turnout
Loop 1 (R): turnout → energy → retention → turnout — a virtuous (or vicious) spiral
Leverage point: protect early turnout so the spiral runs the right way
```

---

## 5. Decision tree (under uncertainty)

**How to use:** Start with the decision (a square). Branch into options. For each option,
branch into uncertain outcomes with rough probabilities and payoffs. Expected value =
Σ(probability × payoff). Pick the highest EV — then sanity-check against risk tolerance.

```
DECISION: [the choice]
├── Option A
│   ├── Outcome A1 (p=__, payoff=__)
│   └── Outcome A2 (p=__, payoff=__)   → EV(A) = __
└── Option B
    ├── Outcome B1 (p=__, payoff=__)
    └── Outcome B2 (p=__, payoff=__)   → EV(B) = __
Choice: [highest EV]   Risk note: [worst case I can live with?]
```

*Filled example:*
```
DECISION: Move the under-attended 6pm class?
├── Keep 6pm
│   ├── stays low (p=.7, payoff=−$200/mo)
│   └── recovers   (p=.3, payoff=+$0)     → EV = −$140
└── Move to 7:30pm
    ├── recovers   (p=.6, payoff=+$150)
    └── loses regulars (p=.4, payoff=−$100) → EV = +$50
Choice: move it.   Risk note: worst case −$100/mo, survivable.
```

---

## 6. Executive summary (SCQA + pyramid)

**How to use:** Lead with the answer. SCQA frames *why this matters*; the pyramid stacks
your one governing message on top of 3 supporting reasons, each backed by evidence. Every
heading is a complete sentence (an "action title").

```
SITUATION: [the stable context everyone agrees on]
COMPLICATION: [what changed / the tension]
QUESTION: [the question that raises]
ANSWER (governing message): [your recommendation, in one sentence]

Because:
  1. [Supporting reason — full sentence] — evidence: [...]
  2. [Supporting reason — full sentence] — evidence: [...]
  3. [Supporting reason — full sentence] — evidence: [...]
Next step: [the single action you're asking for]
```

*Filled example:*
```
SITUATION: The studio runs five weekly classes at steady cost.
COMPLICATION: 6pm attendance has fallen 40% over two months.
QUESTION: What should we do about the 6pm slot?
ANSWER: Move the 6pm beginner class to 7:30pm for a 4-week trial.
Because:
  1. 6pm collides with rush hour — evidence: empties track commute distance.
  2. 7:30pm has spare capacity and higher show-rates — evidence: attendance logs.
  3. The trial is reversible and cheap — evidence: no contract or room cost change.
Next step: approve a 4-week trial starting next Monday.
```
