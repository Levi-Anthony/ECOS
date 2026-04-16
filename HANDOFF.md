# HANDOFF.md
*ECOS live state document — v0.1*
*Written by Claude at session close. Read by Claude at session start before querying BRAIN.*
*Delete entries older than 3 sessions. Last updated: 2026-04-16*

---

## Current Mode
PARK

## Open Loops
- IT MCP tools smoke test not done in-session — verify log_service_call → get_unbilled_work → create_billing_entry via Claude, confirm rows in Supabase Dashboard
- BRAIN browser smoke test not done — open /brain, filter, click thought, copy ID, run link_thought_to_contact
- PURPOSE.md — still unwritten; blocks N2 Heartbeat chain
- F3 Boot protocol fix — still pending; blocks N2 Heartbeat
- N2 Heartbeat — blocked on F3 + PURPOSE.md
- Apple Shortcuts N3/N4 — specs written, not built on phone
- Neil Wave 2 futurism list — stale since March 21, staleness risk rising
- Sprint 3c dedup audit — lowest priority, unlocked
- ~5 TTC entries from April 10 still tagged immediate — minor cleanup
- TTC board context stale — handle in its own chat
- RLS on dashboard — deferred Sprint 5
- contact_roles junction table — deferred

## Dispatcher Queue
- Sprint 4 fully deployed. Next: smoke test IT tools + BRAIN browser (mechanical verification). Then PURPOSE.md or Neil Wave 2 — whichever Levi names first.

## Decisions Made This Session
- Sprint 4 shipped: BRAIN Browser (/brain, /brain/[id]) + IT Client Tracker (/it, /it/[id]) added to ECOS Dashboard
- BRAIN browser is read-only by design — no capture form (single-funnel rule, March 2026)
- IT clients = professional_contacts WHERE relationship_domain='it', no separate table
- create_billing_entry_tx Postgres RPC handles billing atomicity — INSERT + UPDATE billed=true in single transaction
- Nav consolidated: ECOS · Contacts · BRAIN · IT · Follow-ups
- ecos-crm-mcp redeployed at 17 tools (12 CRM + 5 IT)
- Migration 20260416000003_it_client_tracker.sql applied to production
- Vercel prod deploy: https://crm-dashboard-smoky-two.vercel.app

## Captures Pending
none — 4 captures fired and confirmed at session close

## Next Session Primer
Sprint 4 fully deployed. First action: smoke test IT MCP tools (log a service call, pull unbilled, create billing entry). Then choose PURPOSE.md vs Neil Wave 2.

## Pending Improvements
2026-04-13 | Add optional "Infrastructure Reference" section to HANDOFF.md template in ecos-close skill (middleware URL, deploy command, project ref) | pending
2026-04-16 | Document pulse_log live schema in a reference migration or schema snapshot file | pending

---
*ECOS State Document — plain markdown, no infrastructure dependency.*
*Boot order: read this file first, then query BRAIN. External state before internal enrichment.*
