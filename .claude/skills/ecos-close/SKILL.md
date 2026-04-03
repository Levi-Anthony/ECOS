---
name: ecos-close
description: >
  ECOS session close protocol — transitions to PARK, proposes BRAIN captures,
  and writes HANDOFF.md. Use whenever the session is ending, winding down, or
  the user says anything like: "let's close", "wrap up", "park it", "done for
  now", "save state", "write handoff", "session close", "that's it for today",
  or when ~40 exchanges have passed. If the session produced real work, this
  skill should run before closing — no exceptions.
---

# ECOS Close

This skill executes the ECOS session close protocol. It transitions the
session to PARK and writes HANDOFF.md so the next boot has real state to
work with.

## Execution Steps

### Step 1 — Inventory the session

Review what happened this session. Identify:

- Decisions made (locked only — proposals that weren't approved don't count)
- Open loops (threads that didn't close)
- Anything the dispatcher was tracking
- The single most important thing to surface at next boot

Keep this inventory internal. Don't dump it on Levi unless he asks — it
feeds into the HANDOFF.md and capture proposal.

### Step 2 — Propose BRAIN captures

Extract candidate entries from the session's work. These are things worth
retrieving in a future session — not session logistics or transient state.

Before proposing, enforce atomization upstream in this exact order:

1. **Draft raw** — write candidate entries as they naturally surface.
2. **Split to atomic** — apply the split test: would this retrieve well on two
   distinct semantic queries? If yes, it's two entries. Split before proceeding.
3. **Verify C3 per fragment** — each fragment must be semantically complete in
   isolation. Would it mislead without its sibling? Rewrite or drop if so.
4. **Then propose** — only atomic, C3-passing entries surface to Levi.
5. Wait for approval before capturing anything.

Thematic drafting produces natural-feeling units that frequently violate C1.
Do not let C1 violations surface to the proposal stage — catch them here.

Do not skip this step even when the session feels light. Sessions that feel
light often contain exactly one non-obvious insight worth capturing.

Do not re-derive or re-explain what C1 and C3 mean. The definitions live in
the brain skill. If there's ambiguity, read that file — don't improvise.

### Step 3 — Execute approved captures

After Levi approves (or edits) the capture proposals:

- Capture each approved entry via `capture_thought`

### Step 4 — List skips

Present a skip list: everything from the session that was *considered* for
capture but not proposed or not approved. One line each with a reason.

This includes entries that failed C1 or C3 and weren't salvageable, entries
that were too transient or logistical to be worth retrieving, and entries
Levi declined. The skip list is how the capture protocol stays accountable —
it makes the filtering visible instead of silent.

### Step 5 — Update ORIENT.md

Refresh `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECOS/ORIENT.md`
with end-of-session state. Keep the same format as boot-generated ORIENT, but
update open loops and highest leverage to reflect what's true NOW (not at session
start). Levi may read this on mobile after the session closes.

### Step 6 — Write HANDOFF.md

Update `~/ecos/HANDOFF.md` with real state. Use this exact structure:

```markdown
# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: [today's date]*

---

## Current Mode
PARK

## Open Loops
- [one line per open thread that didn't close this session]

## Dispatcher Queue
- [what the dispatcher was tracking when session ended]

## Decisions Made This Session
- [locked decisions only — one line each]

## Captures Pending
- [approved but not yet submitted, if any — otherwise "none"]

## Next Session Primer
[one sentence — the single most important thing to surface at boot]

## Pending Improvements
[proposed changes to CLAUDE.md or skill files awaiting approval]
[format: date | proposed change | approved/pending]

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
```

Every field must have real content or an explicit "none." No placeholder
brackets. No empty bullets. The next boot will read this file and a blank
field means lost state.

### Step 7 — Confirm close

After writing HANDOFF.md, confirm to Levi:

- State: PARK
- Number of captures made
- The next-session primer (so he sees it before closing the window)

Keep it to three lines. The HANDOFF.md has the detail.
