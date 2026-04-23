# ECOS Dashboard — Phase 4 Plan (archived)
*Approved and executed: April 23, 2026*

---

## Context
Phase 3 shipped the dashboard itself. Phase 4 closes the gap between what ECOS knows and what Levi can see: the people-intelligence pipeline had no browseable hub, going-cold contacts were invisible, the weekly review was missing IT financial state, and several bugs caused data to silently not appear.

---

## Evaluation Rubric (5-criterion gate)

| Criterion | Standard |
|---|---|
| Schema alignment | Query uses exact DB column names from migration SQL. No workarounds, no type casts. |
| Pattern consistency | Matches established Tailwind class patterns from existing pages. No new design vocabulary. |
| Intent alignment | Serves an active ECOS operational domain. Not speculative or future-proofing. |
| Two-door principle | Every table writable by MCP agent is readable/scannable by human from dashboard. |
| Lean implementation | No components extracted unless used in 3+ places. No abstractions beyond current need. |

---

## Scope

### Group 1 — Bugs & Polish
1. IT "Last service" → max(service_date) from it_service_logs (was last_contacted)
2. Observation limit 20 → 50
3. Dim administrative_closed contacts (opacity-40)
4. BRAIN ◆N → clickable link to /brain?q=name
5. IT client detail → cross-link to /contacts/[id]
6. Unified BRAIN domain colors (violet canonical for ecos-architecture)
7. STAGE_COLORS deduplicated → lib/supabase.ts

### Group 2 — Enhancements to Existing Pages
8. Weekly Review: IT unbilled section (6th section)
9. Follow-ups: Going Cold section (active, no follow_up_date, >60d or never)
10. Contacts list: ◉N observation count indicator
11. Contact detail: snapshot staleness indicator (>30d or ≥5 new obs)
12. Briefings: type filter pills

### Group 3 — New Page: /people
Three parallel queries + JS merge. Status: unseeded / needs_snap / stale / current.
Staleness thresholds: >30 days old OR ≥5 new observations since compile.
Sorted attention-first. Nav link between Contacts and BRAIN.

### Deferred
- Semantic BRAIN search (requires OpenAI API route)
- Life engine habits/checkins UI
- IT RLS policies (migration needed)
- Component extraction (below 3+ usage threshold)
- Pagination

---

## Execution Order (11 steps)

1. lib/supabase.ts: export STAGE_COLORS, BRAIN_DOMAIN_COLORS, BRAIN_DOMAIN_LABELS
2. layout.tsx: add People nav link
3. it/page.tsx: last service from service_logs
4. contacts/[id]/page.tsx: limit 50, staleness, import STAGE_COLORS
5. it/[id]/page.tsx: cross-link to contact profile
6. page.tsx: dim closed, clickable BRAIN badge, obs count
7. weekly/page.tsx: IT unbilled section, import shared constants
8. follow-ups/page.tsx: going cold section
9. briefings/page.tsx: type filter
10. people/page.tsx: new page (3 parallel queries + merge)
11. Commit + push

---

## Verification Checklist

- [ ] IT last service shows service_date, not last_contacted
- [ ] Kate/Victoria show all 34/21 observations (not truncated at 20)
- [ ] Kate's row is dimmed on contacts list
- [ ] ◆N badge navigates to /brain?q=name
- [ ] IT client detail has "View full contact profile →" link
- [ ] Weekly shows IT unbilled section (amber callout or green clear)
- [ ] Going cold appears on /follow-ups for contacts >60d no follow_up_date
- [ ] ◉N indicator on contacts list for seeded contacts
- [ ] Staleness indicator on Person Card when applicable
- [ ] Briefings type filter changes results
- [ ] /people shows all contacts with correct status chips
- [ ] "People" appears in nav between Contacts and BRAIN
