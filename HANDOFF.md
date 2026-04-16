# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-16*

---

## Current Mode
PARK

## Open Loops
- Vercel deployment — dashboard code at apps/crm-dashboard, needs GitHub push + Vercel project setup + env vars (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY), root dir = apps/crm-dashboard
- ecos-crm MCP not wired into Claude Code — connect command in DEPLOY.md, key in ~/.claude.json x-brain-key
- F3 Boot protocol fix — CLAUDE.md global load reliability; blocks N2 Heartbeat
- N2 Heartbeat — blocked on F3 + PURPOSE.md
- PURPOSE.md — still unwritten; must exist before Heartbeat is built
- Apple Shortcuts N3/N4 — specs written, not built on phone
- Neil Wave 2 futurism list — stale since March 21
- Sprint 3c dedup audit — lowest priority, unlocked
- ~5 TTC entries from April 10 still tagged immediate — minor cleanup
- TTC board context stale — handle in its own chat

## Dispatcher Queue
- Two commands complete the CRM stack: (1) push repo + connect Vercel, (2) wire ecos-crm MCP. Both are mechanical — no design work needed. Do these before any new feature work.

## Decisions Made This Session
- CRM/GUI phase shipped: ecos-crm-mcp (12 tools, live at lqbrzoicorehwidkdhoi) + Vercel dashboard (3 views, builds clean)
- ECOS_USER_ID = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" — fixed UUID for all CRM tables (no Supabase auth users exist)
- taste_preferences Branch A confirmed (table was absent from Supabase; new schema created)
- pulse_log live schema is a pulse diary (state/now_doing/record columns), not a user-keyed event log — snapshot migration was a no-op
- live professional_contacts has extra columns: linkedin_url, how_we_met, community_role, music_role, outreach_wave, billing_notes
- contact_interactions: summary is NOT NULL, notes→follow_up_notes+follow_up_needed, user_id is UUID
- opportunities: close_date→expected_close_date, user_id is UUID
- relationship_domain and interaction_type CHECK constraints expanded via migrations (20260416000001, 20260416000002)
- Dashboard v1: read-only, RLS deferred Sprint 4, secure at Vercel platform level
- contact_roles junction table deferred Sprint 4 (accepted migration debt)
- BRAIN↔CRM bridge live: thought_links JSONB[] on contacts, link_thought_to_contact + get_linked_thoughts

## Captures Pending
none — 6 captures fired and confirmed at session close

## Next Session Primer
Deploy the Vercel dashboard and wire ecos-crm into Claude Code — two mechanical steps, CRM fully operational.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
