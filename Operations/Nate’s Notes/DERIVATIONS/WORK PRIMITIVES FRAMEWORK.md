
Companion Guide: Execution Log, RFCs, and Change Records
(One–Two Page Orientation Sheet)

Purpose
This document explains how day-to-day work, decisions, and committed changes flow through the system.
You do not need prior context to use it.

This framework exists to:
- keep work fast without losing accountability
- make changes legible after the fact
- avoid bureaucracy while preserving safety
- scale cleanly from solo work to teams

────────────────────────────────────────────────────────────
THE THREE CLOCKS OF WORK
────────────────────────────────────────────────────────────

All operational work happens on three different “clocks.”
Confusion happens when they are mixed. This system separates them explicitly.

1) Runtime (What you’re working on now)
2) Commit (What actually changed reality)
3) Observability (What happened over time)

Each clock has its own artifact.

────────────────────────────────────────────────────────────
ARTIFACTS AT A GLANCE
────────────────────────────────────────────────────────────

Action Items
- Purpose: plan and queue work
- Question answered: “What might I do next?”
- Properties:
  - editable
  - reorderable
  - cheap
  - disposable
- Action Items are NOT records of truth.

Execution Log
- Purpose: log what actually happened
- Question answered: “What did I do?”
- Properties:
  - append-only
  - chronological
  - factual
  - lightweight
- Every completed action appears here.
- Some entries link to Change Records.

RFC (Request for Change)
- Purpose: propose and decide before acting
- Question answered: “Should we do this, and how?”
- Used only when:
  - decisions matter
  - tradeoffs exist
  - alignment or approval is needed
- Not every task needs an RFC.

Change Record
- Purpose: durable receipt for a committed reality change
- Question answered: “What changed, why, and who stood behind it?”
- Properties:
  - immutable after approval
  - reviewable without private context
  - includes evidence, approval, rollback
- Only created when reality changes.

Change Log
- Purpose: index and query all Change Records
- Question answered: “What has changed over time?”
- Derived automatically from Change Records.

────────────────────────────────────────────────────────────
THE CORE FLOW (MOST COMMON CASE)
────────────────────────────────────────────────────────────

1) An Action Item exists
   Example:
   - “Update Friday class time on the website”

2) You do the work

3) You log it in the Execution Log
   Example:
   - “Updated Friday class time on website → Change Record CR-2025-014”

4) If the change altered shared reality, you create a Change Record
   - Website copy changed
   - Public calendar updated
   - Policy revised
   - Configuration modified

If no shared reality changed (e.g., sending an email), the flow stops at the Execution Log.

────────────────────────────────────────────────────────────
WHEN AN RFC IS USED
────────────────────────────────────────────────────────────

An RFC is optional and conditional.

Create an RFC BEFORE acting if:
- multiple options exist
- tradeoffs matter
- rollback would be painful
- approval is required
- you want a deliberate pause

Example RFC use:
- “Should we move the entire class schedule earlier?”
- “Which pricing model should we adopt?”
- “Do we deprecate this policy or revise it?”

RFC outcomes:
- Approved → work proceeds → Change Record created after execution
- Rejected → no change
- Abandoned → no change

RFCs do not assert truth. They propose intent.

────────────────────────────────────────────────────────────
CHANGE RECORDS (THE COMMIT BOUNDARY)
────────────────────────────────────────────────────────────

A Change Record is created only when:
- reality changed
- there is a new canonical state
- you would want proof later

Examples that DO need Change Records:
- updating a public schedule
- changing a policy
- modifying a dataset
- altering configuration
- shipping code
- changing ownership or authority

Examples that do NOT need Change Records:
- sending routine emails
- drafting notes
- brainstorming ideas
- private task completion

Change Records are immutable after approval.
Corrections are handled via append-only addenda.

────────────────────────────────────────────────────────────
THE CHANGE CAPSULE (WHY RECORDS STAY FAST)
────────────────────────────────────────────────────────────

Each Change Record contains a “Change Capsule”:
- What changed (1–3 bullets)
- Why (1–2 sentences)
- Impact / blast radius (1 line)
- Risk tier
- Reversibility class

This ensures:
- reviewers understand the change in under 10 seconds
- routine changes remain cheap
- high-risk changes trigger deeper scrutiny automatically

────────────────────────────────────────────────────────────
RISK-BASED SCALING
────────────────────────────────────────────────────────────

Not all changes deserve the same rigor.

Routine changes:
- quick capsule
- simple checks
- basic rollback
- 3–6 minutes to document

High-risk or irreversible changes:
- explicit point of no return
- rollback verification
- monitoring and follow-through
- explicit risk acceptance if needed

The template enforces this automatically based on risk classification.

────────────────────────────────────────────────────────────
HOW EVERYTHING STAYS QUERYABLE
────────────────────────────────────────────────────────────

- Action Items are transient
- Execution Logs capture ALL completed work
- Change Records capture committed changes
- The Change Log indexes Change Records

This means:
- every task is logged
- throughput is measurable
- focus patterns are visible
- reality changes are auditable
- noise does not pollute the commit ledger

────────────────────────────────────────────────────────────
MENTAL MODEL (MEMORIZE THIS)
────────────────────────────────────────────────────────────

Action Items plan work.
Execution Logs log work.
RFCs decide work.
Change Records commit work.

Everything is observable.
Only some things are committed.

────────────────────────────────────────────────────────────
END