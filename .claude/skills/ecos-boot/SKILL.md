---
name: ecos-boot
description: >
  Executable ECOS boot sequence — reads HANDOFF.md, queries BRAIN in parallel,
  and outputs the single highest-leverage action with a concrete first step.
  Use this skill whenever the user says anything like: "boot", "start",
  "cold start", "resume", "pick up where I left off", "what's hot",
  "what should I work on", "what's next", "begin session", "start session",
  "where were we", "catch me up", or opens a new conversation in the ~/ecos
  workspace. If in doubt, use this skill — it's fast and non-destructive.
---

# ECOS Boot

This skill executes the ECOS boot sequence. It is the first thing that runs
in any session. The goal: get from zero context to a sharp, executable next
action as fast as possible.

## Execution Steps

### Step 1 — Read State Documents

Read in parallel:
- `~/ecos/HANDOFF.md` — agent state layer (mode, open loops, decisions)
- Last 8 entries of `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECOS/Operations/PULSE_LOG.md` — Levi's hourly check-ins since last session
- `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECOS/PURPOSE.md` — quarterly anchor (if it exists; skip silently if not yet written)

Determine whether this is a **warm start** or **cold start**:

- **Warm start**: HANDOFF.md has real content — a mode, open loops, decisions,
  a next-session primer. Extract the current focus domain and any open loops.
- **Cold start**: HANDOFF.md is blank or still contains placeholder values
  like `[MODE]`, `[DATE]`, empty bullet points. This means no prior session
  wrote state. That's fine — BRAIN still has context.

### Step 2 — Query BRAIN (five calls, in parallel)

Fire all five calls in the same tool-use turn. Do not wait for one before
starting the next. Use threshold 0.38 for the four `search_thoughts` calls.

| Call | Query / Parameters | Purpose |
|---|---|---|
| `search_thoughts` | `active threads open loops recent decisions` | Recover live state — what's in motion, what's unresolved |
| `search_thoughts` | `locked architecture decisions ECOS BRAIN SIGMA` | Load structural constraints — what's been decided and must not be revisited |
| `search_thoughts` | Domain-specific query (see below) | Deepen context on the current focus area |
| `search_thoughts` | `task list pending next Claude Code session delegated actions` | Surface explicitly flagged task handoffs — missed by the active-threads query |
| `list_thoughts` | `days: 3, limit: 20` | Recency sweep — surfaces recent captures regardless of semantic content or tagging |
| `search_thoughts` | `TASTE preference all sessions universal` | Load universal behavioral constraints active every session |

**Choosing the domain query:**

- If HANDOFF.md names a current focus domain or next-session primer, derive
  the query from that. Examples:
  - Primer says "Neil Wave 2 outreach" → query: `"Neil Wave 2 outreach futurism contacts status"`
  - Open loop says "TTC festival planning" → query: `"TTC festival planning timeline decisions"`
- If HANDOFF.md is blank (cold start), use: `"recent work highest priority active domain"`

### Step 3 — Synthesize and Output

After all five calls return, synthesize everything into this exact output
format. Be concise — this is a launchpad, not a briefing document.

**Taste:** Scan TASTE:: entries from the universal query. These are active behavioral constraints for this session — not context, not background. Let them shape how you engage, not just what you produce.

**Recency sweep:** Scan the `list_thoughts` results first. Any entry captured
in the last 48 hours gets explicit attention — surface it even if no semantic
query hit it. Entries from 48h–3 days ago fold into synthesis only if clearly
relevant to the current session focus. The recency sweep is the fallback for
anything semantic search misses.

```
## ECOS Boot

**State:** [BOOT → ACTIVE | COLD START → ACTIVE]

**Context recovered:**
- [2-4 bullet points: the most important active threads, open loops, or
  recent decisions from BRAIN results. One line each. No fluff.]

**Highest-leverage action:**
[One sentence. The single thing that moves the most value right now.
 This is a judgment call — weigh urgency, impact, and momentum.]

**First step:**
[One sentence. A concrete, immediately executable action — not a category
 of work. "Draft the Wave 2 email to Kevin Kelly" not "Continue Neil outreach".]

**Constraints in play:**
- [1-2 locked decisions or architectural constraints relevant to the
  current focus. Omit if nothing is relevant.]
```

### What "highest-leverage" means

This is the core judgment the boot sequence exists to make. Consider:

- **Urgency**: Is there a deadline, a waiting dependency, or time-sensitive window?
- **Impact**: Which action moves the most value per unit of effort?
- **Momentum**: Is something already in motion that would be cheap to advance
  vs. expensive to restart later?
- **Staleness risk**: Will an open loop go cold if not touched this session?

When multiple candidates are close, prefer the one that unblocks other work.

### After Boot — Write ORIENT.md

After delivering boot output, write today's ORIENT.md to the Obsidian vault:
`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECOS/ORIENT.md`

ORIENT format (overwrite the file each time):
```markdown
# ORIENT
*[Day, Date — generated at [TIME]]*

**Mode:** [one word/phrase — BUILD / TEACH / MAINTAIN / RECOVER / etc.]

**Today's focus:** [one domain or project]

**Open loops (don't let these go cold):**
- [loop 1]
- [loop 2]
- [loop 3 max]

**Highest leverage:** [one sentence — specific action]

**Constraints:** [energy state, time blocks, hard commitments today]
```

Include a MOMENTUM section (in motion / closes this week / stale / win to protect)
on Sundays. Include a STRATEGY section (active domains / what's building / what
would be lost) on the 1st of each month.

Once ORIENT is written, you're in ACTIVE state. Wait for Levi to confirm
direction or redirect. Do not begin domain work unprompted — the boot output
is a proposal, not a commitment.

If Levi says something like "yeah, go" or "do it" — load the relevant domain
skill from `~/ecos/.claude/skills/` and begin.

## Edge Cases

- **BRAIN returns nothing useful**: Fall back to HANDOFF.md content alone.
  If both are empty, say so plainly and ask Levi what's on his mind.
- **Multiple domains competing**: Name both in the context summary, but still
  pick one highest-leverage action. Levi can redirect.
- **HANDOFF.md has stale data**: Use it as a starting point but weight BRAIN
  results more heavily — they may be more current.
