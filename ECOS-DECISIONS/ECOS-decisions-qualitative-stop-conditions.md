# Qualitative Stop Conditions
*ECOS · Prompt Engineering*  
Version 1.0 — March 2026

---

# Framework

## The Principle

Never tell an AI how many items to produce.  
Instead, define the conditions under which extraction is **complete** and the conditions under which it should **stop**.

Let **material quality determine quantity** — not a count.

---

## Keep Extracting Until

### Exhaustion Condition

- Each pass has been fully reviewed and **no new category yields an additional item**.
- Remaining candidates **fail the standalone test**.
- Remaining candidates **fail the generalization test**.

---

## Stop Before

### Distortion Conditions

- Capturing nuance that **only made sense in the moment**.
- **Splitting one solid entry into two thin ones** to increase count.
- **Padding with surface mentions** where no substantive intelligence was actually present.

---

# Tests

Every candidate entry must pass **both tests**.  
Failing either is sufficient reason to drop it.

---

## The Standalone Test

Would this entry be **useful retrieved cold**, with no other context?

If it requires the conversation to make sense, it **fails**.

---

## The Generalization Test

Does this connect to **anything active beyond this specific conversation**?

If it's purely situational with **no living relevance**, it **fails**.

---

# Rationale

## Why Numbers Fail

Numerical targets create a **perverse incentive**:

The AI optimizes for **hitting the number** rather than for **quality of material**.

---

# Usage

## Apply Wherever You'd Write a Count

Any prompt instruction that says:

> “Aim for X–Y items”

is a candidate for replacement with **qualitative stop conditions**.