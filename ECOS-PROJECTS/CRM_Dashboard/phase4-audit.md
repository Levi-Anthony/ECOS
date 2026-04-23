# ECOS Dashboard — Phase 4 Audit
*April 23, 2026 — generated at session close*

---

## What the build delivers per page

| Page | What it shows |
|---|---|
| `/` Contacts | Full contact table, domain filter pills, follow-up heat (red = overdue, amber = within 7d), BRAIN link count (◆N, clickable → /brain?q=name), observation count (◉N), admin_closed contacts dimmed |
| `/contacts/[id]` | Header, opportunities (close_date), BRAIN links, Person Card (snapshot + staleness indicator), Observations grouped by type (limit 50), interaction timeline |
| `/people` | People Intel hub — seeding status per contact (Unseeded/Needs Snapshot/Stale/Current), obs breakdown (facts/interp/strategies), snapshot age + new-obs-since delta, filter pills |
| `/brain` | Filterable thought list — domain, type, horizon, signal_type, keyword search, sort by newest or most-retrieved, cap 100 |
| `/brain/[id]` | Full content, all metadata, topics, people, action_items, thought ID |
| `/it` | Active IT clients, 3-stat header, unbilled callout, last service date from service_logs |
| `/it/[id]` | Contact header, open follow-ups, invoices, service log timeline, cross-link to /contacts/[id] |
| `/follow-ups` | Overdue (red), Going Cold (amber — no follow_up_date + >60d or never), upcoming 14d by domain |
| `/weekly` | BRAIN activity by domain, open loops, follow-ups this week, active opportunities, IT unbilled, Life Engine briefing stats |
| `/briefings` | 14-day log by day with type filter pills, response rate stats |

---

## What's working correctly

- Person Card + Observations pipeline live (Victoria: 21 obs, Kate: 34 obs)
- close_date column aligned across type, queries, and display
- Life Engine briefing log reading from life_engine_briefings correctly
- IT unbilled aggregation accurate — last service reads from service_logs not last_contacted
- BRAIN filter combinations additive and URL-stateful
- Going cold query: active + no follow_up_date + last_contacted > 60d or NULL
- BRAIN domain colors unified (violet canonical for ecos-architecture, no more slate inconsistency)
- STAGE_COLORS, BRAIN_DOMAIN_COLORS, BRAIN_DOMAIN_LABELS centralized in lib/supabase.ts
- All pure logic in lib/logic.ts with injectable clock — 79 unit tests passing
- Vercel rootDirectory set to apps/crm-dashboard — deployment READY

---

## Bugs fixed this session

| Bug | Fix |
|---|---|
| Opportunity close_date column mismatch | Renamed type field and all queries to close_date |
| PersonObservation missing source + updated_at | Added to type |
| PersonSnapshot missing source_observation_ids + source_thought_ids | Added to type |
| IT "Last service" used last_contacted | Now reads max(service_date) from it_service_logs |
| Observation limit 20 | Raised to 50 |
| admin_closed contacts indistinct | opacity-40 on tr |
| BRAIN ◆N not clickable | Wrapped in <a href="/brain?q=name"> |
| STAGE_COLORS defined twice | Centralized to lib/supabase.ts |
| aggregateUnbilled undefined vs null | Widened to ?: number \| null |
| Vercel rootDirectory unset | Set via PATCH API |

---

## Missing by explicit intent (identified in audit, now built)

- ✅ People Intel hub (/people)
- ✅ Going cold detection (/follow-ups)
- ✅ IT unbilled on weekly review
- ✅ IT last service from service_logs
- ✅ Snapshot staleness indicator
- ✅ Observation limit raised
- ✅ Dim administrative_closed contacts
- ✅ BRAIN badge clickable
- ✅ IT↔Contact cross-link
- ✅ Briefings type filter
- ✅ Observation count indicator (◉N) on contacts list

---

## Missing by inferred intent (identified in audit, deferred)

| Item | Status | Rationale |
|---|---|---|
| Semantic BRAIN search | Deferred | Requires OpenAI API route — new infrastructure dependency |
| Life engine habits/checkins UI | Deferred | No operational urgency |
| IT RLS policies | Deferred | Migration needed, not dashboard change |
| Component extraction (/components/) | Deferred | Not at 3+ usage threshold yet |
| Pagination (BRAIN cap 100, contacts all) | Deferred | No performance issue at current volume |
| Preview/Development env vars on Vercel | Gap | Only Production has SUPABASE keys |
| @vercel/analytics + speed-insights | Gap | Not instrumented |
| life_engine_evolution UI | Deferred | No urgency |

---

## Priority stack at close (items still open)

1. People Intel hub seeding — Richard and Evelyn next in queue (pipeline proven)
2. BRAIN backfill via ChatGPT Agent
3. Wave 2 PDF — J1–J4 unresolved (32 Send / 19 Caution / 12 Hold)
4. Semantic BRAIN search (next dashboard phase)
5. Preview/Dev env vars on Vercel
6. Analytics instrumentation

---

## Test suite summary

- Framework: Vitest 4.1.5
- Files: 4 (`helpers.test.ts`, `aggregations.test.ts`, `intel-status.test.ts`, `schema-types.test.ts`)
- Tests: 79 passing
- Coverage: lib/logic.ts (pure functions only)
- Run: `npm test` | `npm run test:watch` | `npm run test:coverage`

Pure logic in `lib/logic.ts`: isOverdue, isFollowUpSoon, relativeAge, formatTime, formatDayLabel, weekLabel, coldContactThreshold, aggregateObsCounts, aggregateLastService, aggregateUnbilled, computeStaleness, computeIntelStatus
