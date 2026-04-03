# ECOS Status Brief
*Plain language. Updated: 2026-04-03*

---

## What ECOS Is

ECOS is your personal operating system — the infrastructure that makes sure
your attention, memory, and action are connected across sessions, devices, and
domains. It runs on two rails:

**Agent rail** — Claude Code on your Mac. Knows your context, runs your domains,
manages your state. Lives at `~/ecos`.

**Human rail** — You, reading plain files in Obsidian on your phone and desktop.
Your context, your check-ins, your purpose. Lives in your Obsidian ECOS vault.

BRAIN is the memory layer both rails share — your semantic database in Supabase,
~1,033 thoughts, queryable by meaning.

---

## What's Working Right Now

**Start a session:**
Open Terminal → `cd ~/ecos && claude` → Claude auto-loads ECOS context.
Then say **"ecos-boot"** (or just start talking — Claude will orient itself).

**Boot sequence gives you:**
- What's active and in motion (from BRAIN)
- The single highest-leverage action available
- A concrete first step
- ORIENT.md written to your Obsidian vault (readable on phone)

**During a session:**
- Ask Claude to work on anything in your domains (tango, Neil, TTC, IT, BRAIN, music)
- Ask Claude to search BRAIN: "search BRAIN for [topic]"
- Ask Claude to capture something: "capture this to BRAIN: [thought]"
  - Claude will propose the capture and wait for your approval before executing
  - You can edit the proposed text before it's captured

**Close a session:**
Say **"let's close"** or **"ecos-close"**.
Claude will: propose BRAIN captures → wait for your approval → execute → write HANDOFF.md → update ORIENT.md.

**On your phone:**
Open Obsidian → ECOS vault → `ORIENT.md` (today's orientation, written at session start/close).

---

## What's NOT Working Yet — Guardrails

**ORIENT.md has placeholder content** until the next boot after today.
The first real ORIENT generates at your next session start.

**PURPOSE.md doesn't exist yet.**
ORIENT generates without your quarterly anchor — it uses BRAIN context instead,
which is good but not as sharp. Fix: write PURPOSE.md in a dedicated session.

**PULSE check-ins aren't wired.**
`PULSE_LOG.md` exists in your Obsidian vault but the iPhone Shortcut isn't built.
You can manually append entries to the file for now — but nothing is automated yet.
Fix: build the PULSE Shortcut (see Action Items).

**You can't edit or delete BRAIN entries yet.**
If something in BRAIN is wrong, outdated, or needs updating — Claude can't fix it.
You have to go to Supabase → Table Editor → find the row → edit manually.
This is the most important gap. Fix: run the Phase 0 database session.

**HANDOFF.md has never been properly written.**
Every session has been a cold start. Once you run ecos-close properly at end of
a session, warm starts begin working. The first close fixes this permanently.

**No dashboard.**
You can't browse or search your BRAIN data visually without chat mediation.
Fix: Phase 2 build (after Phase 0).

**GitHub MCP not connected.**
Claude writes files to your local Obsidian vault (iCloud-synced). It can't
commit to your git repo yet. Files sync to your phone via iCloud — this works.
Canonical git history is not being tracked. Fix: Phase 1 remaining.

---

## Day-to-Day Use (as-is)

**Morning:**
1. `cd ~/ecos && claude`
2. Say "ecos-boot"
3. Claude outputs what's active + highest leverage + writes ORIENT.md
4. Open Obsidian on phone → read ORIENT.md
5. Work

**During the day (manual PULSE until Shortcut is built):**
Open `ECOS/Operations/PULSE_LOG.md` in Obsidian → append:
```
[time]
State: [one word]
Now: [what you're doing]
Record: [done / pivoted / blocked by ___]
Aligned: [yes / realign → ___]

---
```

**Session close:**
Say "let's close" → approve or edit capture proposals → done.

**Capturing a thought mid-session:**
"Capture to BRAIN: [thought]" — Claude proposes, you approve. Never unilateral.

---

## How to Boot Up Next Time

1. Open Terminal
2. `cd ~/ecos && claude`
3. Say **"ecos-boot"**

That's it. Claude reads HANDOFF.md → searches BRAIN → writes ORIENT.md → tells
you what's most important → waits for your direction.

If something seems off or stale: say "cold start" and Claude will run boot fresh
from BRAIN alone, ignoring HANDOFF.md.

---

## Action Items — Priority Order

### Do first (unblocks everything downstream)
**Phase 0 — Supabase schema session** (dedicated, need Supabase open + service key)
- Run 4 SQL blocks from the plan: BRAIN groundwork, thought_history, CRM tables, pulse_log
- After this: BRAIN entries can be corrected; CRM is ready; dashboard can be built

### Do in parallel with or after Phase 0
**Write PURPOSE.md** (writing session, ~45 min with Claude)
- Your quarterly anchor: identity in play, what you're building, why it matters, what would be lost
- Makes every ORIENT sharper and more grounded

**Build PULSE Shortcut** (iPhone, ~20 min)
- Extend "Capture Thought" shortcut to add PULSE option
- 4 fields → appends formatted entry to PULSE_LOG.md in Obsidian vault
- Instructions are in the ecos-pulse skill file

### After Phase 0
**Set up GitHub MCP**
`claude mcp add github` with personal access token → canonical git history resumes

**Phase 2 — Dashboard build** (Next.js + Vercel + Supabase)
- Browse, search, edit, delete BRAIN entries without chat
- PULSE log viewer, CRM view

### Later
- Tango Student Tracker extension
- PULSE+ (AI reflection option on check-ins)
- Retrieval analytics

---

## What To Do Next Session

**Option A (highest leverage):** Phase 0 database session
Open Supabase, have your service key ready, say "let's run Phase 0."
Claude walks you through each SQL block and verifies each one.

**Option B (if you want to write, not build):** PURPOSE.md session
Say "let's write PURPOSE.md." Claude interviews you through the four sections.
No technical prerequisites.

Both are independent. Either is the right next move.

---

*This file lives in your Obsidian ECOS vault. Claude updates ORIENT.md daily.
This STATUS.md is updated manually when the system state changes significantly.*
