# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-13*

---

## Current Mode
PARK

## Open Loops
- Richard Cook pre-meeting conversation — NOT sent; festival April 23 (10 days); draft a 15-20 min request to align on meeting format before board meeting; do today
- Apple Shortcuts N3/N4 — specs written, not yet built on phone; priority order: Capture Thought → Ask BRAIN → TTC Brief
- F3 Boot protocol fix — CLAUDE.md global load reliability; strengthen session close HANDOFF discipline; independent, no dependencies
- N2 Heartbeat — blocked on F3; design as Chief of Staff not Life Engine; build "do not disturb" Shortcut before deploying
- Mobile boot eval plan — 6-item rubric not executed; HANDOFF Project sync root cause unknown
- PURPOSE.md — still unwritten; must exist before Heartbeat is built (Heartbeat surfaces priorities — needs a direction to align them to)
- Neil Wave 2 futurism list — open since March 21; stale
- Dispatcher routing table — identified March 25; still not built
- BRAIN corpus cleanup (O1) — unblocked now that edit/delete tools are live; Week 3

## Dispatcher Queue
- Richard Cook message is highest-leverage action by deadline (April 23 festival); do today, no infrastructure dependency
- Apple Shortcuts build is 20 min on phone; TTC Brief is time-sensitive; specs written — just execute
- F3 boot protocol fix is next Claude Code session — independent, low friction, unlocks Heartbeat

## Decisions Made This Session
- ECOS-build repo created: github.com/Levi-Anthony/ECOS-build (private) — infrastructure code, separate from vault
- Supabase CLI workdir changed from ~/ to ~/ecos; ~/supabase/ contents moved to ~/ecos/supabase/
- open-brain-mcp: 6 tools deployed (added update_thought, delete_thought)
- brain-middleware: 4 HTTP endpoints deployed — POST /capture, POST /search, PUT /edit, DELETE /delete
- All Supabase deployments must use --no-verify-jwt flag
- Hono wildcard routing (*/route) required for Supabase edge functions
- thought_history actual schema confirmed: uses archived_reason/archived_by, actions (array), no version or metadata columns
- GitHub PAT rotated three times; third token is clean and sourced in ~/.zshrc
- Heartbeat must be designed as informational Chief of Staff, not activation trigger

## Captures Pending
none — five captures fired and confirmed landed in BRAIN at session close

## Next Session Primer
Boot, then split two tracks: send Richard Cook the pre-meeting request today (no ECOS dependency, 10 days to April 23), and build the three priority Shortcuts on your phone (specs already written — Capture Thought, Ask BRAIN, TTC Brief, in that order).

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) — keeps ops context out of BRAIN, available at cold start | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
