# ORIENT
*Wednesday, April 16 2026 — updated at session close*

**Mode:** PARK

**Today's work:** CRM/GUI phase — both doors shipped. ecos-crm-mcp (12 tools, live) + Vercel dashboard (Next.js 14, 3 views, builds clean). 4 schema fix migrations applied.

**Highest leverage at next boot:** Deploy the Vercel dashboard and wire ecos-crm into Claude Code MCP — two commands, CRM is fully operational.

**Open loops (don't let these go cold):**
- Vercel deployment — code at apps/crm-dashboard, needs GitHub push + Vercel project + env vars
- ecos-crm MCP not yet wired into Claude Code (connect command in DEPLOY.md)
- F3 Boot protocol fix — blocks N2 Heartbeat
- PURPOSE.md — still unwritten, blocks Heartbeat design
- Neil Wave 2 futurism list — stale since March 21

**Constraints:** RLS deferred to Sprint 4. Dashboard is read-only v1. contact_roles junction table is accepted debt (Sprint 4 data migration).
