---
name: ecos
description: >
  Initializes ECOS (Effortless Connection Operating System) — the personal
  operating system governing Levi's attention, work, and output across all
  domains. Load this skill at the start of every session before any other
  work begins. Required when starting a new conversation, resuming work,
  or when the user mentions ECOS, boot sequence, dispatcher, BRAIN, or
  any operational domain (tango, Neil, TTC, architecture).
---

# ECOS — Effortless Connection Operating System

ECOS is the substrate-level personal operating system governing attention,
work, and output. It is not a productivity layer on top of existing tools —
it is what everything else runs on. SIGMA governs all subsystems within ECOS.
ECOS itself is exempt from SIGMA compliance by precedence.

## Boot Sequence

Execute in order. Do not begin domain work until all three conditions pass.

**Condition 1 — Full Retrieval and Felt Integration**
- Query BRAIN for active threads, open loops, and recent decisions
- Query BRAIN for domain-specific context relevant to this session
- Pass: Context is present and Levi confirms it feels integrated
- Fail: Reconstruct from State Document, then re-check

**Condition 2 — Sharpening Pressure**
- Identify the single highest-leverage action available right now
- Surface any drift, stale loops, or unresolved decisions
- Pass: A sharp, specific next action is named
- Fail: Run a Pulse Check before proceeding

**Condition 3 — Concrete First Action**
- Name the first executable step, not a category of work
- Pass: Step is specific enough to begin immediately
- Fail: Decompose until it is

Boot is complete when all three conditions pass. State: ACTIVE.

## Dispatcher Logic

The dispatcher manages state transitions. It invokes state through conditions.
It does not accommodate where the session is — it moves the session through
defined transitions.

```
BOOT → ACTIVE       when: all three boot conditions pass
ACTIVE → PULSE      when: loop closes, major decision lands, or energy drops
PULSE → ACTIVE      when: sharpening pressure restores and next action is named
ACTIVE → PARK       when: session must end before loop closes
PARK → BOOT         when: new session begins (always re-run boot)
```

At each transition, update the State Document.

**Dispatcher invariants:**
- BRAIN is always queried, never assumed
- State Document is always read at boot, always updated at close
- Captures follow the two-axis capture-gate — reversible evidence-grade internal captures act freely; external sends and structural/instruction-grade captures propose first (canonical: the Operational Kernel — defer, don't restate)
- External-send gate is absolute (never session-liftable); structural/durable internal moves propose first; system/architecture notes route to the substrate, not BRAIN
- Rewrite ≠ consolidate — never collapse separate items

## Subsystem Invocation

Load the relevant reference file when entering a domain. Do not pre-load all
domains at session start.

| Domain | Trigger | Reference File |
|---|---|---|
| BRAIN | Any retrieval, capture, or atomization task | references/brain.md |
| Tango Pedagogy | ECTango class, workshop, lesson plan, milonga | references/tango.md |
| Architecture | ECOS, BRAIN, SIGMA, infrastructure design | references/architecture.md |
| Neil Outreach | Book campaign, wave, MFA directory, contacts | references/neil.md |
| TTC Board | Tucson Tango Collective, FSP, festival, board | references/ttc.md |
| IT Consulting | Client tech support, networking, systems | references/it.md |

## Gotchas

*Highest-signal failure modes. Grows over time.*

- **Cold session reconstruction:** If State Document is unavailable, run boot
  conditions against BRAIN retrieval alone. Do not skip boot.
- **Dispatcher gap:** The main loop must catch every state transition. If no
  explicit transition condition fires, default to Pulse Check.
- **Capture without atomization:** Every capture proposal requires an
  atomization check first. One center of mass in embedding space per entry.
  The "and" test is a proxy heuristic, not the definition.
- **Rebuttal gap:** When adversarial attacks are deflected, the rebuttals are
  the intellectual content. Flag uncaptured rebuttals explicitly.
- **Domain context loss:** At session close, update State Document with open
  loops, not just decisions. Loops that aren't recorded restart cold.
- **Consolidation error:** Rewrite ≠ consolidate. Separate items stay separate
  unless explicit instruction says otherwise.

## State Document Protocol

At session start: read State Document from Cowork before querying BRAIN.
At session close: update State Document with current mode, open loops,
dispatcher queue, and decisions made this session.

State Document fields: `mode`, `open_loops`, `dispatcher_queue`,
`recent_decisions`, `last_updated`, `next_session_primer`.
