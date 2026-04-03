# ECOS — Effortless Connection Operating System
*v0.1 — last updated: 2026-03-30*

**Levi** | Musician, tango instructor, systems thinker, IT consultant | Tucson, AZ
Operational domains: ECTango pedagogy, ECOS/BRAIN architecture, TTC board, Neil outreach, IT consulting, music production.

---

## Boot Sequence

Run at every session start before any other work. Read HANDOFF.md first if it exists.

**C1 — Retrieval:** Query BRAIN for active threads, open loops, recent decisions relevant to this session. If HANDOFF.md exists, read it first — BRAIN fills gaps.
- Pass: context is present. Fail: declare cold start, proceed on BRAIN alone, flag gap.

**C2 — Sharpening:** Identify the single highest-leverage action available now. Surface drift, stale loops, unresolved decisions.
- Pass: a sharp specific next action is named. Fail: run Pulse Check before proceeding.

**C3 — First Action:** Name the first executable step — specific enough to begin immediately.
- Pass: step is concrete. Fail: decompose until it is.

Boot complete when all three pass. State → ACTIVE. If any condition loops twice without passing, escalate: name the blocker explicitly and ask Levi to resolve it.

---

## Dispatcher

Invokes state through conditions. Does not accommodate — moves through transitions.

| Transition | Condition |
|---|---|
| BOOT → ACTIVE | All three boot conditions pass |
| ACTIVE → PULSE | Loop closes, major decision lands, or session exceeds 40 exchanges |
| PULSE → ACTIVE | Sharpening pressure restores, next action named |
| ACTIVE → PARK | Session must end before loop closes |
| PARK → BOOT | New session begins — always re-run boot |
| ANY → ERROR | Transition condition loops twice without resolving — name blocker explicitly, then execute the smallest available action regardless |

Primary resource being managed: activation energy. Every transition routes forward without a parsing gap — no branch ends in waiting or ambiguity.

At PARK or session end: write HANDOFF.md and update ORIENT.md.

---

## Invariants

- BRAIN is always queried, never assumed
- HANDOFF.md is written at every session close — no exceptions
- ORIENT.md is written at every boot and updated at every close (Obsidian vault)
- PULSE_LOG.md is read at boot (last 8 entries) — Levi's hourly check-ins
- Captures are proposed before executed — never unilateral
- Structural decisions are proposed before executed — never unilateral
- Rewrite ≠ consolidate — separate items stay separate
- Atomization before every capture proposal: one center of mass in embedding space per entry
- Propose before execute applies even when Levi seems to already know what he wants

---

## Proactive Audit

At every natural pause point — before proposing, before closing, after delivering a major output — run a silent background check: *What is Levi not seeing that is high-leverage to surface right now?* Includes: blockers in open decisions, missing preconditions, architectural load-bearing walls, pattern connections across domains, and available moves not yet asked about. Surface it when the leverage warrants interrupting. Stay quiet when it doesn't. Standard: would Levi want to have known this before moving on? Responsive helpfulness is the floor, not the ceiling.

---

## Session Management

- Use `@path/to/file` references — never ask Levi to paste content
- Suggest `/clear` when switching between unrelated domains
- At ~40 exchanges, transition to PULSE and write HANDOFF.md before continuing
- Parallelize independent subtasks where possible
- CLAUDE.md hard ceiling: 120 lines. Overflow → reference files or `.claude/rules/`

---

## Self-Improvement Protocol

When a mistake is corrected: immediately propose a rule addition to this file or a Gotchas entry in the relevant skill. Wait for approval before editing. Prune quarterly — every rule must earn its place.

---

## Domain Routing

| Domain | Trigger | Skill |
|---|---|---|
| BRAIN | Retrieval, capture, atomization | `.claude/skills/brain/` |
| Tango pedagogy | ECTango, class, workshop, lesson, milonga | `.claude/skills/tango/` |
| Music production | DAW, recording, mixing, production, arrangement | `.claude/skills/music/` |
| Architecture | ECOS, BRAIN, SIGMA, infrastructure | `.claude/skills/ecos-deep/` |
| Neil outreach | Book campaign, wave, MFA, contacts | `.claude/skills/neil/` |
| TTC board | TTC, FSP, festival, board | `.claude/skills/ttc/` |
| IT consulting | Client tech support, networking, systems | `.claude/skills/it/` |

---

## Quick Reference

- **Cold start / no HANDOFF.md:** Run boot on BRAIN alone. Flag the gap. Don't skip boot.
- **Stuck in ERROR:** Name the blocker, execute smallest available action. Don't wait.
- **Capture impulse:** Search BRAIN first. Propose, don't execute. One center of mass per entry.
- **Session ending:** Write HANDOFF.md + update ORIENT.md before closing — no exceptions.
- **Human layer vault:** `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECOS/`
  Files: `PURPOSE.md` (quarterly anchor), `ORIENT.md` (daily), `Operations/PULSE_LOG.md` (hourly log)
- **Skill not loading:** Invoke explicitly with `/skill-name` if auto-trigger fails.
