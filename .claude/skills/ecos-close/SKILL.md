---
name: ecos-close
description: >
  ECOS session close protocol — transitions to PARK, proposes BRAIN captures,
  and saves a handoff snapshot to ECB. Use whenever the session is ending, winding down, or
  the user says anything like: "let's close", "wrap up", "park it", "done for
  now", "save state", "write handoff", "session close", "that's it for today",
  or when ~40 exchanges have passed. If the session produced real work, this
  skill should run before closing — no exceptions.
---

# ECOS Close

This skill executes the ECOS session close protocol. It transitions the
session to PARK and saves a handoff snapshot to ECB so the next boot has real
state to work with.

## Execution Steps

### Step 1 — Inventory the session

Review what happened this session. Identify:

- Decisions made (locked only — proposals that weren't approved don't count)
- Open loops (threads that didn't close)
- Anything the dispatcher was tracking
- The single most important thing to surface at next boot

Keep this inventory internal. Don't dump it on Levi unless he asks — it
feeds into the handoff snapshot and capture proposal.

### Step 2 — Atomize + capture session learnings

Extract candidate entries from the session's work. These are things worth
retrieving in a future session — not session logistics or transient state.

Enforce atomization upstream, then apply the capture-gate, in this exact order:

1. **Draft raw** — write candidate entries as they naturally surface.
2. **Split to atomic** — apply the split test: would this retrieve well on two
   distinct semantic queries? If yes, it's two entries. Split before proceeding.
3. **Verify C3 per fragment** — each fragment must be semantically complete in
   isolation. Would it mislead without its sibling? Rewrite or drop if so.
4. **Apply the two-axis capture-gate** (canonical: the Operational Kernel — defer,
   don't restate). Reversible evidence-grade life/work entries act freely. Structural/
   instruction-grade entries (durable rules, vocabulary, doctrine, authority changes)
   propose first. System/architecture notes route to the substrate, never BRAIN.

Thematic drafting produces natural-feeling units that frequently violate C1.
Do not let C1 violations surface — catch them here.

Do not skip this step even when the session feels light. Sessions that feel
light often contain exactly one non-obvious insight worth capturing.

Do not re-derive or re-explain what C1 and C3 mean. The definitions live in
the brain skill. If there's ambiguity, read that file — don't improvise.

### Step 3 — Execute captures

- Capture reversible evidence-grade life/work entries directly via `capture_thought` (act-freely — no approval gate).
- For any structural/instruction-grade entries staged in Step 2, capture only after Levi approves (or edits) them.
- Surface any capture failure explicitly; never report success blind.

### Step 4 — List skips

Present a skip list: everything from the session that was *considered* for
capture but not proposed or not approved. One line each with a reason.

This includes entries that failed C1 or C3 and weren't salvageable, entries
that were too transient or logistical to be worth retrieving, and entries
Levi declined. The skip list is how the capture protocol stays accountable —
it makes the filtering visible instead of silent.

### Step 5 — Optional ORIENT.md export (human-facing)

Best-effort only — not the source of truth. If file tools are available, refresh
`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECOS/ORIENT.md` with
end-of-session state so Levi can read it on mobile. Keep the same format as
boot-generated ORIENT, updating open loops and highest leverage to reflect
what's true NOW. Skip silently if unavailable — never block close on it.

### Step 6 — Save the handoff snapshot to ECB

Compile end-of-session state and call `save_handoff_snapshot` with it, then
`append_handoff_event` for the close event (`state_change` → PARK). This is the
record the next boot reads via `get_boot_context`. Include:

- **Current mode:** PARK
- **Open loops:** one line per thread that didn't close this session
- **Dispatcher queue:** what the dispatcher was tracking when the session ended
- **Decisions made this session:** locked decisions only
- **Captures pending:** approved but not yet submitted, if any — otherwise "none"
- **Next session primer:** the single most important thing to surface at boot
- **Pending improvements:** proposed changes to CLAUDE.md / skill files / canonical
  artifacts awaiting approval (date | proposed change | approved/pending)

Every field must have real content or an explicit "none." A blank field means
lost state at next boot.

### Step 7 — Optional vault export (human-facing)

The snapshot in ECB is the record; the next boot reads it via `get_boot_context`
on any client, so no git push is required for continuity. Only if Levi has asked
for a readable vault copy, write `HANDOFF.md` to the vault as a best-effort
export. Never block close on an export or push failure.

### Step 8 — Confirm close

After saving the snapshot, confirm to Levi:

- State: PARK
- Number of captures made
- The next-session primer (so he sees it before closing the window)

Keep it to three lines. The snapshot has the detail.
