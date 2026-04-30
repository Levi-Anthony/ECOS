# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-30*

---

## Current Mode
PARK

## Open Loops
- Richard and Evelyn actor seeding — next in queue (run extractions in claude.ai, paste to Claude Code)
- BRAIN backfill via ChatGPT Agent (prompt at ~/ecos/docs/backfill-agent-prompt.md)
- Wave 2 PDF — J1–J4 unresolved; pool 32 Send / 19 Caution / 12 Hold
- iCloud → Google Calendar sync — two options: webcal subscription or add Google account to iOS Calendar
- DND Apple Shortcut — not built; required before Heartbeat goes to full production
- BRAIN-CLEANUP-SPEC.md — not yet symlinked into ~/ecos/docs/ (still Obsidian-only)
- Smoke Test Client (ID: d218d5e5-2033-4593-881d-adced3e43e34) — test artifact, safe to delete
- Claude.ai memories → BRAIN bridge — periodic operation until BRAIN reaches critical mass
- TTC messaging edits — resurface next session
- Semantic BRAIN search — deferred to next dashboard phase (requires OpenAI API route)
- C3 BRAIN capture flagged needs_split — atomize into two entries next session if retrieval misses

## Dispatcher Queue
- Seed Richard and Evelyn (next — paste claude.ai extractions to Claude Code)
- BRAIN backfill via ChatGPT Agent

## Decisions Made This Session
- ecos-crm-mcp CORS fix: added hono/cors middleware before auth handler; root cause was verify_jwt=false bypassing Supabase gateway CORS handling
- close_date bug fixed in ecos-crm-mcp (8 locations, was expected_close_date); deployed
- Vercel Preview + Development env vars set (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- ecos-crm-mcp live as claude.ai custom connector — full MCP parity between Claude Code and mobile
- MCP auth pattern locked: x-brain-key header (Claude Code) + ?key= query param (claude.ai) — both must be supported in every ECOS MCP server
- OB1 spec confirmed: multiple MCPs are compliant; constraint is remote-only (Edge Functions), not count
- CRM architecture assessed: relationship_domain is single-value enum (schema gap for multi-role contacts); BRAIN semantic search is de facto cross-domain integration layer
- 3 BRAIN captures made: CORS/verify_jwt pattern, claude.ai MCP auth constraint, CRM single-domain schema gap

## Captures Pending
none

## Next Session Primer
ecos-crm-mcp is live on claude.ai and all infrastructure gaps are closed — paste Richard and Evelyn claude.ai extractions to begin actor seeding; the pipeline is warm and both clients are ready.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending
2026-04-20 | Add 8AM–11AM gap window to life-engine SKILL.md as formally documented silent window | pending
2026-04-20 | Add CronDelete one-shot error handling note to life-engine SKILL.md Gotchas | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
