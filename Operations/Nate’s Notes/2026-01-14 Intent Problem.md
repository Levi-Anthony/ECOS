# The Intent Problem Prompt Kit

This kit gives you the tools to implement the ideas from the article. One core pattern, different depths depending on what you need.

**The pattern:** Intent → Check → Receipt. Show what the AI thinks you mean. Pause before actions that matter. Keep a record of what happened and why.

**One thing to know upfront:** This won't magically make unsafe tools safe. It gives you the pattern. Real safety requires the system to honor it—if your AI can execute without asking, you need platform-level gates, not just better prompts.

---

## THE 60-SECOND INSTALL

Paste this into any AI you use—in custom instructions, at the start of a conversation, or wherever your tool accepts guidance:

```
Before taking any action that sends a message, changes a file, affects other people, or can't be easily undone:

1. Show me what you think I'm asking for:
   - What "done" looks like
   - What you won't do
   - Where you're uncertain

2. If you're uncertain, ask one clarifying question or show me two options.

3. Wait for my confirmation before acting.

You can draft things freely. Confirmation is only for actions that change something real.

```

That's it. This forces a pause when the agent follows instructions. It won't enforce anything by itself—but it gives you the right pattern to build on.

---

## THE 5-MINUTE HABIT

Once you're using the install, add this: before any task that matters, ask the AI to show you an intent doc.

### The Intent Doc

Four lines. Scannable in five seconds.

**Task:** [what you asked for]

**Who/What:** [who's affected, what's being changed—and who or what is explicitly excluded]

**Boundaries:** [what the AI will not do, including anything in draft or marked sensitive]

**If uncertain:** [what the AI should do when it's not sure—ask you, flag it, stop]

### Example

You say: "Share the project update with the team."

Before acting, the AI shows:

**Task:** Share the Q1 project update

**Who:** Marketing core team (Jamie, Sam, Alex, Taylor). Excluding extended stakeholders and exec sponsors—they get a separate version after Friday.

**Boundaries:** Summary and timeline only. Excluding budget section, anything marked draft, anything tagged sensitive.

**If uncertain:** Flag follow-up questions for me. Don't answer on my behalf.

If something's wrong—wrong people, wrong content, wrong timing—you see it before it happens.

### The Rule

**No outbound actions without confirmation.**

If the AI is about to send something, post something, or contact someone, you see the intent doc first. Every time.

---

## THE 20-MINUTE UPGRADE

Once the habit is in place, decide when to require a checkpoint and when to let things run.

### The Three Buckets

**Let it run:** Drafts, summaries, research, organizing things for your review. If the interpretation is off, you'll see it and fix it. No damage done.

**Checkpoint by default:** Anything that touches other people or shared systems. Emails, messages, calendar invites, changes to shared files. A misread here affects someone besides you.

**Always confirm:** Anything you can't easily undo. Deleting without backup, sending at scale, spending money, changes to live systems. You see the intent doc before it executes, no exceptions.

### Making It Stick

The three buckets only work if you're consistent. Write them down. If you're on a team, agree on them together so everyone's working from the same rules.

---

## FOR TEAMS AND BUILDERS

If you're deploying AI inside a team or product, you need more than habits—you need infrastructure. This section gives you the prompts to build it.

### The Audit Prompt

Use this to evaluate where your current AI usage is exposed.

```
I want to audit how we use AI for intent-related risks.

CONTEXT:
- What we use AI for: [describe]
- What actions it can take: [list]
- Who's affected: [internal team, customers, external contacts]
- Current safeguards: [any confirmations or logging in place]

Work through:

1. Where does AI act without showing its interpretation first?
2. What actions can't be undone? Is there a checkpoint for each?
3. What requests commonly have more than one valid interpretation?
4. What implicit rules should it follow that aren't written down?
   (Examples: don't contact people who've opted out, don't schedule over protected time, don't share draft work externally)
5. If something went wrong, could we point to a documented rule it violated?

Output:
- Specific risks, ranked by likelihood × impact
- Top 3 fixes in priority order

```

### The Disambiguation Prompt

Use this when a request could mean more than one thing.

```
When you detect my request has multiple valid interpretations:

1. Identify the two with the biggest difference in outcome.

2. Show me both:
   - What would happen with each
   - The key tradeoff or risk

3. Default to the safer one. I'll actively choose the riskier path if that's what I want.

4. If both paths carry real risk, don't offer options. Instead ask:
   "I need one clarification before proceeding: [single most important question]"

```

**Example:**

You say: "Follow up with everyone who hasn't replied."

The AI shows:

_Two interpretations:_

_(A) Recent contacts only_ Follow up with contacts from the last 30 days who haven't replied. Safe—these are active conversations.

_(B) Everyone in the system_ Follow up with all contacts who ever went quiet, including people from months ago. Risk—some may have asked to be left alone or are no longer relevant.

_Default: (A) Recent contacts only_

### The Receipt Prompt

Use this so you can reconstruct what happened if something goes wrong.

```
Before you execute this action, create a record:

- What I asked for (verbatim)
- What you understood (the intent doc)
- What you're about to do, specifically
- What you're choosing not to do, and why
- Where you were uncertain and how that got resolved
- What could go wrong if your interpretation is off

Format it so someone else could read it and understand exactly what happened.

```

**Why this matters:** When someone asks "why did 200 customers get that email?"—you can show exactly what was asked, what the AI thought it meant, and who approved it. The failure becomes traceable.

### Quick Verification

Six things to check:

- [ ] AI shows its understanding before high-stakes actions
- [ ] Assumed boundaries are flagged, not silently applied
- [ ] Ambiguous requests surface options before the AI picks one
- [ ] Irreversible actions always require explicit confirmation
- [ ] Every confirmed action leaves a record of interpretation + approval
- [ ] The team agrees on what requires a checkpoint

---

## QUICK REFERENCE

**60-second install:** Paste the prompt. Forces the AI to show its understanding before acting.

**5-minute habit:** Use the intent doc template. No outbound actions without confirmation.

**20-minute upgrade:** Apply the three buckets—let it run, checkpoint by default, always confirm.

**For teams:** Audit prompt, disambiguation prompt, receipt prompt, verification check.

**The pattern:** Intent → Check → Receipt. Same idea at every level.

---

_The goal isn't to slow everything down. It's to see what the AI thinks you mean—before it acts on a guess._