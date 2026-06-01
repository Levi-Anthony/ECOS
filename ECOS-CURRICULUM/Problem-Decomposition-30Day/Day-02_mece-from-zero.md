# Day 2 — MECE From Zero

> Week 1 · Foundations

## Learning objective

Understand MECE well enough to build a simple MECE list from scratch and test whether any list is clean enough to reason from.

## Minimum Viable Rep — 25 minutes

1. Build the MECE expense breakdown below.
2. Test it against ten real purchases.
3. Name one defect: overlap, gap, mixed axis, or weak “Other.”
4. Repair one branch.
5. Write one sentence: “This structure helps because…”

## Concept lesson

**MECE** = **M**utually **E**xclusive, **C**ollectively **E**xhaustive.

It is the basic quality test for any breakdown.

- **Mutually Exclusive:** the categories do not overlap. Nothing should belong in two buckets at once.
- **Collectively Exhaustive:** the categories cover the full space. Nothing real should fall through.

Use **the drawer test**:

If a sock could go in two drawers, your labels overlap. That means the structure is not mutually exclusive.

If a sock fits no drawer, your labels have a gap. That means the structure is not collectively exhaustive.

A MECE set gives every sock exactly one home.

Why this matters: overlap makes you double-count and argue in circles. Gaps make you miss the real answer because it lived in a bucket nobody drew. MECE catches both before they cost you.

The trick to *building* MECE, not just testing it, is to pick **one organizing principle** and cut along it consistently.

Mixing principles is the #1 source of bad structure. Do not put “by region,” “by product,” “by customer,” “by vendor,” and “by size” on the same level. One axis at a time.

## Tiny example

Bad mixed-axis expense list:

- Rent
- Food
- Amazon
- Big purchases
- Subscriptions
- Travel

This is not MECE because the buckets answer different questions.

“Food,” “rent,” “subscriptions,” and “travel” are mostly expense functions. “Amazon” is a vendor. “Big purchases” is an amount. A single purchase could be a big Amazon purchase, an Amazon subscription, or food bought through Amazon.

The categories overlap because the list mixes axes.

Better function-based expense list:

- Housing
- Food & groceries
- Transportation
- Health & personal care
- Work & education
- Entertainment & subscriptions
- Savings, debt, taxes, and fees

This is cleaner because every bucket answers the same question:

> What life function did this expense serve?

That does not mean the list is perfect. It means the list has a consistent cut, so now you can test and improve it.

## Practice case

Categorize your **monthly expenses** into a MECE set of 5–7 buckets.

Use one organizing principle. For this exercise, use **function**: what purpose did the expense serve?

Then test your structure with ten actual recent purchases.

For each purchase, ask:

1. Does this fit exactly one bucket?
2. Does it fit more than one bucket?
3. Does it fit no bucket?
4. Does the bucket name tell me something useful?

Any purchase that fits two buckets shows **overlap**.

Any purchase that fits no bucket shows a **gap**.

Any purchase that technically fits but feels unhelpful may show a **weak category**.

## Deliverable + Definition of Done

A MECE expense breakdown plus a ten-purchase filing test.

**Definition of Done:** all ten test purchases file into exactly one bucket each; any purchase that initially fit two buckets or none has been used to repair the structure; and the final buckets all use one organizing principle.

## Self-check rubric

- [ ] My categories use one consistent organizing principle.
- [ ] No purchase fits two categories.
- [ ] Every purchase has a home.
- [ ] Any “Other / unclear” bucket is empty or contains only rare edge cases.
- [ ] If “Other / unclear” holds more than ~10% of purchases, I repaired the structure.
- [ ] I found at least one possible counterexample, edge case, or ambiguity and tested whether the structure survived it.
- [ ] I can explain the structure in one sentence: “This structure helps because…”

## Common mistake to watch for

The most common mistake is sneaking in a **vendor**, **amount**, or **importance level** as a category alongside function categories.

Bad examples:

- Amazon
- Big purchases
- Random stuff
- Important expenses
- Monthly expenses
- Emergency expenses

These may be useful tags, but they are not the same kind of category as “housing,” “food,” or “transportation.”

If two buckets answer different questions, you have probably mixed axes.

Examples:

- “What kind of expense is this?” → function
- “Where did I buy it?” → vendor
- “How much did it cost?” → amount
- “How often does it happen?” → frequency
- “How urgent is it?” → priority

Each of those can be a valid organizing principle. The mistake is using more than one at the same level.

## When to use / when NOT to use

Use the MECE test on any list you will reason from, explain, compare, or make decisions with.

Do not obsess over perfect MECE during a throwaway brainstorm. Early brainstorming can be messy. But once you start using a list to think clearly, prioritize, assign work, diagnose a problem, or make a decision, test the structure.

Also remember: MECE is **necessary but not sufficient**.

A list can be MECE and still useless.

For example, you could divide expenses by first letter of vendor name: A–F, G–L, M–R, S–Z. That could be mutually exclusive and collectively exhaustive, but it would not help much with budgeting decisions.

That is why Day 6 will focus on usefulness and decision-relevance.

## Reflection question

When you sorted your ten purchases, did you discover an organizing principle you did not start with?

What does that say about choosing the cut *before* you start listing?

## Optional stretch

Build a MECE breakdown of something from your work.

Choose one:

- Types of clients
- Sources of studio revenue
- Stages of a track’s production
- Reasons a project gets delayed
- Ways a customer discovers you
- Types of work you do in a normal week

Then run the same filing test on ten real examples.

---
*Calibration:* compare against **Day 2** in `Calibration-Gallery.md` (Part A).