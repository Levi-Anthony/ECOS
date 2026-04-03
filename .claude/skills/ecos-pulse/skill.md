---
name: ecos-pulse
description: >
  ECOS Pulse Check — periodic state assessment and dispatcher trigger.
  Invoked on a recurring loop via /loop [interval] /ecos-pulse.
  Use to check whether the current session state warrants a transition,
  surface stale loops, or send a proactive briefing via messaging channel.
  This is the daemon layer of ECOS — runs in the background between active
  sessions. Do NOT load for normal working sessions; CLAUDE.md handles those.
disable-model-invocation: false
---

# ECOS Pulse Check

Periodic state assessment. Runs on /loop. Every invocation follows this sequence:

## Pulse Loop

1. **Read HANDOFF.md** — what is the current mode and open loop state?
2. **Check dispatcher** — does any transition condition fire?
   - Loop closed → ACTIVE → PULSE transition due
   - Session exceeded 40 exchanges → PULSE due
   - Stale loop (open loop with no movement in >2 sessions) → surface it
3. **Query BRAIN** — search for anything newly relevant to open loops
4. **Assess** — is there anything worth surfacing right now?
   - If yes: deliver briefing (messaging channel if configured, else inline)
   - If no: do nothing. Silence is better than noise.
5. **Update HANDOFF.md** — record this pulse and any findings

## Briefing Format

Concise. Mobile-friendly. One screen.

```
⚡ ECOS Pulse — [time]
Mode: [current mode]
Open loops: [N]
Highest leverage: [one specific action]
Stale: [any loop with no movement — name it]
```

## Rules

- Do not send a briefing if nothing has changed since the last pulse
- One stale loop surfaced per pulse maximum — don't flood
- Always update HANDOFF.md even if no briefing is sent
- Respect quiet hours if messaging channel is configured (7PM–6AM)

## Delivery Channel

**Primary: Apple Shortcuts webhook**
POST briefings to a Shortcuts webhook URL. The Shortcut handles native iOS
delivery — notification, iMessage to self, spoken via Siri, or any combination.
No third-party bot, no extra account. Set the webhook URL as an environment
variable or store in HANDOFF.md under a `config` field.

```bash
curl -X POST "[YOUR_SHORTCUTS_WEBHOOK_URL]" \
  -H "Content-Type: application/json" \
  -d '{"briefing": "[BRIEFING_TEXT]", "type": "[BRIEFING_TYPE]"}'
```

**Fallback: Telegram**
Use when bidirectional communication is required — check-in responses, habit
confirmations, self-improvement approvals. Requires the Telegram channel plugin
and `--dangerously-skip-permissions`. See OB1 Life Engine recipe for full setup.

**For task assignment from phone → desktop:**
Use Dispatch (Cowork). Not Claude Code. Dispatch is the native mobile → desktop
task handoff layer. Claude Code handles the session; Dispatch handles the remote
control.

**Rule:** Default to Shortcuts. Only use Telegram when the use case genuinely
requires a reply that Claude must act on within a running session.



## Session Continuity

`/loop` is session-scoped — it stops when Claude Code closes. To maintain
the heartbeat across restarts, include this in the skill invocation or
CLAUDE.md session notes:

> "Reset this loop every morning at [wake time]."

This creates a self-rescheduling pattern: the skill instructs Claude to
set a new loop at a defined time, so the heartbeat restores automatically
at the start of each day without manual intervention.

For dynamic interval scheduling (tighter in the morning, wider at night),
see the Life Engine recipe in OB1 — it uses `CronCreate`/`CronDelete` to
reschedule based on time of day. That's the production pattern.


