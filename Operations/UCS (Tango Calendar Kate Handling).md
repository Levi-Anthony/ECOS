{
  "meta": {
    "project": "Tucson Tango Calendar",
    "owner": "Levi",
    "last_updated": "2025-11-12",
    "version": "1.0.0" // bump when schema or content meaningfully changes
  },
  "purpose": "Single trusted public hub for Tucson tango events; maintain clarity, inclusiveness, and professional stewardship.",
  "scope": "Calendar completeness, duplication control, public optics, ally relations, private boundary-setting with overlapping organizers.",
  "tone": "Warm, factual, unimpeachable; cooperative in public, firm in private.",
  "stakeholders": [
    { "name": "Kate", "role": "organizer", "relationship": "neutral", "notes": "Duplication originates from her multi-party calendar." },
    { "name": "Joe", "role": "community figure", "relationship": "ally", "notes": "Hosted the thread where clarification was posted." },
    { "name": "Adriana", "role": "community figure", "relationship": "ally", "notes": "Potential follow-up DM to reinforce collaboration." }
  ],
  "facts": [
    "Levi updated his calendar to include Kate’s events through next summer (2025-11-07).",
    "A public explanatory comment was posted on Joe’s thread (2025-11-07).",
    "A private message clarified conditions for future syncing with Kate (2025-11-07)."
  ],
  "assumptions": [
    "Public audiences prefer a single source of truth if tone remains non-territorial.",
    "Kate may limit her calendar to her own events if duplication concerns are clear and non-confrontational.",
    "Ally touchpoints (Joe, Adriana) will reduce rumor/ambiguity."
  ],
  "risks": [
    "Perceived territoriality if messaging appears accusatory.",
    "Re-emergence of duplication without notice.",
    "Narrative drift if engagement is misread or untracked."
  ],
  "decisions": [
    {
      "date": "2025-11-07",
      "decision": "Include Kate’s events manually through next summer.",
      "rationale": "Maximize completeness and neutralize any 'exclusion' narrative."
    },
    {
      "date": "2025-11-07",
      "decision": "Avoid naming individuals in public post.",
      "rationale": "Preserve optics; keep the story about unity and reliability."
    },
    {
      "date": "2025-11-07",
      "decision": "Set syncing condition: only sync calendars that restrict to their own events.",
      "rationale": "Prevent duplication at the source while staying cooperative."
    }
  ],
  "communications": [
    {
      "date": "2025-11-07 (approx.)",
      "channel": "public",
      "summary": "Comment on Joe’s thread: unified calendar purpose; gratitude; clarity; no direct mention of Kate.",
      "related_decisions": ["Avoid naming individuals", "Calendar positioned as reliable/complete"]
    },
    {
      "date": "2025-11-07 (approx.)",
      "channel": "private",
      "summary": "Message to Kate: duplication issue; syncing terms clarified; neutral tone.",
      "related_decisions": ["Sync condition", "Preserve narrative control"]
    },
    {
      "date": "2025-11-08 (planned)",
      "channel": "private",
      "summary": "Optional DMs to Joe and Adriana: collaboration acknowledgment; clarify logistics vs personal.",
      "related_decisions": ["Ally strengthening"]
    }
  ],
  "timeline": [
    { "date": "2025-11-06 (approx.)", "event": "Duplication identified." },
    { "date": "2025-11-07", "event": "Calendar updated with Kate’s events." },
    { "date": "2025-11-07", "event": "Public comment posted (Joe’s thread)." },
    { "date": "2025-11-07", "event": "Private clarification to Kate." },
    { "date": "2025-11-08 (planned)", "event": "Follow-ups to Joe/Adriana." }
  ],
  "next_actions": [
    {
      "action": "Capture engagement metrics on Joe’s post (likes, replies, shares).",
      "priority": "High",
      "owner": "Levi",
      "due": "ASAP",
      "status": "Pending",
      "review_checkpoint": "48h trend review.",
      "notes": "Screenshot and log to archive."
    },
    {
      "action": "Send follow-up DMs to Joe and Adriana if public tone remains neutral/positive.",
      "priority": "Medium",
      "owner": "Levi",
      "due": "After tone check",
      "status": "Planned",
      "review_checkpoint": "Tone scan complete.",
      "notes": "Tailor to each person’s style."
    },
    {
      "action": "Weekly monitor of Kate’s calendar; record overlaps.",
      "priority": "High",
      "owner": "Levi",
      "due": "Weekly (Fridays)",
      "status": "Active",
      "review_checkpoint": "Friday summary.",
      "notes": "Two-minute scan; log in private doc."
    },
    {
      "action": "Archive calendar screenshots/exports (version control).",
      "priority": "Medium",
      "owner": "Levi",
      "due": "Before next public update",
      "status": "In progress",
      "review_checkpoint": "Archive verified.",
      "notes": "Use consistent naming: YYYY-MM-DD_TTC_Archive_v01.png"
    },
    {
      "action": "Optional: short public note reinforcing unity/clarity without naming individuals.",
      "priority": "Low",
      "owner": "Levi",
      "due": "After engagement review",
      "status": "Not started",
      "review_checkpoint": "Post-analysis debrief.",
      "notes": "Only if optics benefit is clear."
    }
  ],
  "artifacts": [
    { "type": "link", "label": "Public thread (Joe)", "href": "" },
    { "type": "file", "label": "Calendar screenshot archive", "href": "" }
  ],
  "privacy_notes": "Do not publish private messages or negotiation specifics. Avoid naming individuals in public posts unless consented.",
  "handoff_instructions": "Load this JSON into a fresh assistant. Execute 'next_actions' in order, report deltas under 'facts' or 'decisions', and maintain tone discipline."
}