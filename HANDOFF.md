# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-06*

---

## Current Mode
PARK

## Open Loops
- Mobile boot eval plan — 6-item rubric not yet built; proof-of-concept only, not validated
- HANDOFF.md sync to ECOS Project unconfirmed — fell to cold start on first mobile test; root cause unknown
- ORIENT.md protocol violation on mobile — asked for paste instead of displaying as text; Project instructions need strengthening
- PURPOSE.md — still unwritten; deferred every session; no blockers
- PAT exposed in session — regenerate ECOS-Claude-MCP token before next session; update ~/.zshrc
- Neil Wave 2 — futurism/tech-prediction list not built; window open since March 21 call
- Dispatcher routing table — identified March 25, still not built
- Obsidian vault restructure — flagged, not started
- Claude Desktop restart needed — GITHUB_PERSONAL_ACCESS_TOKEN set in ~/.zshrc but Desktop not restarted

## Dispatcher Queue
- Mobile boot eval plan is highest-leverage next action — validates or invalidates the architecture before building further on top of it
- BRAIN corpus cleanup: embedding model confirmed (text-embedding-3-small via OpenRouter) — ready for threshold calibration on 30-entry stratified sample

## Decisions Made This Session
- Mobile boot architecture: Option C locked — GitMCP + BRAIN hybrid, three-path HANDOFF resolution
- HANDOFF.md → vault root (symlink at ~/ecos/HANDOFF.md); follows D1 pattern
- ecos-boot: three-path HANDOFF resolution added (Path A/B/C)
- ecos-close: Step 7 added — commit + push HANDOFF.md after every session close
- CLAUDE.md: ORIENT invariant amended for mobile graceful degradation
- GitHub MCP plugin pre-installed (github@claude-plugins-official, March 21) — token-only setup
- Claude.ai Pro plan: no custom MCP servers; Projects workaround implemented
- ECOS Project created on Claude.ai — Levi-Anthony/ECOS synced (Operations/ excluded)
- Project instructions written to auto-trigger ecos-boot
- ~/ecos git initialized (git init)
- GITHUB_PERSONAL_ACCESS_TOKEN set in ~/.zshrc
- Vault committed and pushed (bacbe26): mobile boot architecture + all April 5 session work
- Embedding model confirmed: text-embedding-3-small via OpenRouter (index.ts line 23)
- ecos-close atomization amendment applied (sub-steps 4 & 5 match brain/skill.md)
- brain-capture-protocol.md written to ECOS-PROMPTS/
- BRAIN_Cleanup_SPEC.md: embedding model blocker resolved
- 12 BRAIN captures this session

## Captures Pending
none

## Next Session Primer
Mobile boot is proof-of-concept, not validated — build the 6-item eval plan and fix HANDOFF.md Project sync before calling it done. Then PURPOSE.md.

## Pending Improvements
2026-04-06 | Strengthen ecos-boot Project instructions — ORIENT display-as-text path needs explicit language to prevent paste requests | pending
2026-04-06 | Obsidian vault restructure — ECOS-PROMPTS/ is current home for prompts; Operations Library path doesn't exist | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
