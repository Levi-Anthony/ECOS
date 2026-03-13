
# Notebook LM Practical Guide: Prompts, Workflows, and Quick Reference

This is the hands-on companion to the Notebook LM article. Copy-paste prompts, complete workflow examples, and quick-reference material to make your personal knowledge system actually work.

---

## Quick Setup (5 Minutes)

**Step 1: Create your first project**

- Go to [notebooklm.google.com](http://notebooklm.google.com/)
- Click “New notebook”
- Name it something specific (e.g., “Q4 Client Work - Acme Corp” not “Client Notes”)

**Step 2: Add sources**

- Drag files directly onto the page (PDFs, docs, text files)
- Paste URLs for web articles or Google Docs
- Upload transcripts, meeting notes, emails

**Step 3: Start with a scoping question**

- “What are the main topics covered across these sources?”
- “Summarize what each document contains”
- This helps you understand what information is actually available

**Step 4: Ask specific retrieval questions**

- See templates below
- Copy valuable extractions immediately (chats don’t save)

---

## Retrieval Prompt Templates

### Research & Learning

**Understanding a complex topic:**

```
Explain [specific concept] as it appears across these sources. Include which sources emphasize which aspects, and note any contradictions between sources.
```

**Finding patterns:**

```
What common themes appear across all sources about [topic]? List each theme with specific citations showing which documents support it.
```

**Gap identification:**

```
What questions about [topic] are NOT answered by these sources? What information would I need to find elsewhere?
```

**Historical evolution:**

```
Trace how [concept/approach] has changed over time based on the dates of these documents. Show the progression with specific citations.
```

### Client & Project Work

**Client background:**

```
Extract all references to [client name]'s organizational structure, key stakeholders, and decision-making processes. Cite which document each piece of information comes from.
```

**Requirements gathering:**

```
List every specific requirement or constraint mentioned in these documents. Group by category (technical, budget, timeline, stakeholder) and cite sources for each.
```

**Progress tracking:**

```
What deliverables have been completed according to these documents? What's still pending? Provide dates and citations.
```

**Risk identification:**

```
Identify any concerns, blockers, or risks mentioned in these documents. Include the context around each one and which document it came from.
```

### Document Comparison

**Finding contradictions:**

```
Compare what [Document A] says about [topic] versus what [Document B] says. Highlight any contradictions or inconsistencies with specific quotes.
```

**Version tracking:**

```
What changed between the [earlier version] and [later version] of this document? List all substantive differences with citations.
```

**Completeness check:**

```
Based on [template/framework document], what elements are present in [target document] and what's missing? Be specific about gaps.
```

### Source Verification

**Citation audit:**

```
For each major claim in [specific document], identify whether supporting evidence appears in the other sources. Flag claims that aren't corroborated.
```

**Source quality assessment:**

```
Summarize the provenance of each source: author, date, type of document (research paper, blog post, internal memo, etc.), and apparent level of authority.
```

**Quote extraction:**

```
Find the exact quotes from [source] that support [specific claim]. Include enough context to understand what the author meant.
```

---

## Complete Workflow Examples

### Example 1: Learning a Technical Topic

**Context:** You’re learning about RAG systems and have collected 12 articles and 3 research papers.

**Step 1 - In Notebook LM:**

```
What are the main architectural approaches to retrieval-augmented generation described in these sources? For each approach, explain the tradeoffs and cite which sources discuss it.
```

**Notebook LM returns:** Detailed explanation of dense retrieval, sparse retrieval, hybrid approaches with citations to specific papers.

**Step 2 - Copy the response and move to Claude:**

```
Based on this information about RAG architectures:

[paste Notebook LM response]

I'm building a system for technical documentation search with ~10,000 documents that update weekly. Which architectural approach makes the most sense for my use case, and what are the implementation priorities I should focus on first?
```

**Claude now:** Synthesizes the technical info with broader engineering knowledge, recommends specific approach, outlines implementation steps.

---

### Example 2: Client Analysis

**Context:** Six months of client emails, meeting notes, and project documents.

**Step 1 - In Notebook LM:**

```
Extract every instance where the client expressed concerns, hesitations, or blockers about the project. Include the date of each concern and what document it came from.
```

**Notebook LM returns:** Chronological list of concerns with precise citations.

**Step 2 - Save this extraction, then ask:**

```
What decisions has the client made about scope, timeline, or budget? For each decision, note when it was made and whether it's been revisited since.
```

**Notebook LM returns:** Decision timeline with citations.

**Step 3 - Copy both responses to Claude:**

```
Here's a timeline of client concerns and decisions from our project:

[paste concerns]
[paste decisions]

Analyze the pattern: are their concerns being addressed by their decisions, or is there misalignment? What should I raise in our next steering committee meeting to get the project back on track?
```

**Claude now:** Pattern analysis, misalignment identification, specific talking points for the meeting.

---

### Example 3: Competitive Research

**Context:** Analyst reports, competitor websites, recent news articles about 5 competitors.

**Step 1 - In Notebook LM:**

```
For each competitor, extract: their stated strategy, their main product offerings, their target customers, and their pricing model. Cite sources for each piece of information.
```

**Notebook LM returns:** Structured comparison with citations.

**Step 2 - In Notebook LM (follow-up):**

```
Which competitors mention [specific feature/technology] and how do they position it? Include exact quotes where available.
```

**Notebook LM returns:** Feature positioning across competitors.

**Step 3 - Copy both to Claude:**

```
Here's competitive intelligence I've gathered:

[paste competitor strategies]
[paste feature positioning]

Based on this landscape, where are the gaps in what competitors are offering? What positioning would differentiate us without requiring us to compete on [constraint, e.g. price/enterprise features]?
```

**Claude now:** Strategic positioning recommendations based on the competitive landscape you’ve documented.

---

## Good vs Bad Retrieval Prompts

### Research Queries

❌ **Bad:** “What does the research say about AI?”

- Too broad, no guidance on what to retrieve
- Will return surface-level summary

✅ **Good:** “What specific obstacles to AI adoption appear in case studies from companies with 50-500 employees? Include which source each obstacle comes from.”

- Specific scope (case studies, company size)
- Clear output format (obstacles with citations)
- Actionable information

---

❌ **Bad:** “Analyze the implications of these findings.”

- Asking for thinking, not retrieval
- Notebook LM will try but results will be shallow

✅ **Good:** “Extract the three main findings from [specific document] and show where each appears in the other sources (if at all).”

- Clear retrieval task
- Cross-document verification
- Foundation for analysis you’ll do elsewhere

---

### Client Work

❌ **Bad:** “What should I tell the client about progress?”

- Asking for strategic advice, not retrieval
- No grounding in what’s documented

✅ **Good:** “What deliverables were marked complete in the past 30 days? Include dates, who marked them complete, and any notes about acceptance criteria.”

- Specific retrieval of documented facts
- Gives you material to craft the client update

---

❌ **Bad:** “How is the client feeling about the project?”

- Asking for interpretation
- Sentiment analysis from docs won’t be reliable

✅ **Good:** “Find every instance where client stakeholders mentioned timeline concerns. Include the specific concern, who raised it, when, and what response we provided (if documented).”

- Retrieves factual evidence
- You can interpret sentiment from the evidence

---

### Document Comparison

❌ **Bad:** “Which document is better?”

- Subjective judgment call
- Not a retrieval task

✅ **Good:** “Compare the project scope as defined in the original proposal versus the current requirements document. What was added, removed, or changed? Cite specific sections.”

- Objective comparison
- Retrieval of documented changes
- Foundation for quality judgment you’ll make

---

## Handoff Framing Examples

### Simple Context Addition

**What you extracted from Notebook LM:**

> “Three main risks identified: 1) Technical debt in legacy system may slow integration (Engineering memo, March 15), 2) Budget cuts may reduce headcount (Finance email, March 22), 3) Executive sponsor leaves next quarter (Leadership update, March 30)”

**How to frame it for Claude:**

```
Based on these documented project risks:

[paste extraction]

What's the most critical risk to address first, and what's a concrete mitigation plan I can propose this week?
```

---

### Multi-Source Synthesis

**What you extracted:**

> Multiple sources cover authentication approaches. Source A recommends OAuth 2.0 for flexibility. Source B warns about implementation complexity. Source C shows user confusion rates increase with social login options.

**How to frame it:**

```
I've gathered information about authentication approaches from several sources:

[paste extraction]

Given that we're building for non-technical users who prioritize simplicity over flexibility, which approach makes the most sense? Walk through the tradeoffs specific to our user base.
```

---

### Building on Retrieved Facts

**What you extracted:**

> Client mentioned budget constraints four times in the past month. Specific amounts mentioned: $50K reduction in Q3 (July 12 email), additional $30K cut discussed (Aug 2 meeting), request to reduce scope to fit $200K total budget (Aug 15 call notes).

**How to frame it:**

```
Timeline of client budget constraints:

[paste extraction]

What scope reductions would get us to the $200K target while preserving the highest-value deliverables? Provide a proposal I can present that shows we heard their concerns and adjusted accordingly.
```

---

### Expertise Application

**What you extracted:**

> Case studies show: Company A saw 40% adoption after 3 months with mandatory training. Company B hit 65% adoption with opt-in + champions program. Company C stalled at 15% with email announcements only.

**How to frame it:**

```
Documented adoption results from comparable companies:

[paste extraction]

We're planning our internal rollout for a 200-person non-technical team. Based on these patterns, design a 90-day adoption strategy. Include which elements to borrow from each case study and why.
```

---

## Project Organization Templates

### Client Engagement Structure

**Project name:** `[Client Name] - [Project Name] - [Year]`

**Sources to include:**

- Original proposal and SOW
- Kickoff meeting notes
- Weekly status reports
- Email threads about scope/budget/timeline
- Deliverables and feedback
- Meeting notes from stakeholder reviews

**What to exclude:**

- Internal team discussions (unless they document decisions)
- Unrelated prior projects with this client
- Generic industry research (make separate project)

**Typical queries:**

- Timeline verification
- Requirement extraction
- Risk/concern tracking
- Decision documentation

---

### Research Topic Structure

**Project name:** `[Topic] Research - [Purpose] - [Date]`

**Sources to include:**

- Academic papers on the topic
- Industry analysis and reports
- Technical documentation
- Blog posts from recognized experts
- Case studies

**What to exclude:**

- Tangentially related topics (make new project)
- Sources older than your relevance threshold
- Marketing content without substance

**Typical queries:**

- Consensus and contradictions
- Gap identification
- Historical evolution
- Technical deep-dives

---

### Learning/Onboarding Structure

**Project name:** `Learning: [Topic/System] - [Quarter]`

**Sources to include:**

- Official documentation
- Tutorial walkthroughs
- Architecture overviews
- Common pitfalls/lessons learned
- Examples and templates

**What to exclude:**

- Forum discussions (too much noise)
- Outdated versions of docs
- Promotional material

**Typical queries:**

- Concept explanations
- Implementation examples
- Prerequisite identification
- Best practice extraction

---

## Organizing Across Multiple Projects

Once you have 5-10+ projects, you need structure at the meta level. Here’s how to organize projects so you can find what you need without scrolling through a mess.

### Naming Conventions That Scale

**The pattern that works:**`[Category] - [Specific Name] - [Time/Version]`

**Examples:**

- `Client - Acme Corp - Q4 2024`
- `Research - RAG Systems - Oct 2024`
- `Learning - Python Advanced - 2024`
- `Product - Feature Analysis - Mobile App v2`

**Why this works:**

- Alphabetical sorting groups related projects
- Specificity prevents confusion
- Time markers let you archive systematically
- Version tracking when needed

**What doesn’t work:**

- Generic names (`Notes`, `Research`, `Client Work`)
- Dates first (`2024-10-15 - Client Meeting` - horrible sorting)
- No category (`Acme Corp` vs `Acme Corp Strategy` vs `Acme Q4` - chaos)
- Overly long names that get truncated

### Decision Framework: New Project or Add to Existing?

**Create a NEW project when:**

- Different time scope (Q3 vs Q4, even same client)
- Different objective (research vs implementation)
- Sources won’t be searched together
- Previous project has 50+ sources already
- Topic shift is significant

**Add to EXISTING project when:**

- Same timeframe and objective
- Sources will be queried together frequently
- Project still under 40-50 sources
- Information directly builds on existing context
- You’d reference both sets of sources in same query

**The test:** Would you ever write a query that searches across both sets of sources? If yes, same project. If no, separate projects.

### When to Archive vs Keep Active

**Archive when:**

- Project objective is complete (client engagement ended, research published, learning phase done)
- No queries in past 30 days
- Sources are historical reference only
- You’d recreate the project fresh if you returned to the topic

**Keep active when:**

- Still querying regularly (weekly+)
- Ongoing engagement (active client, continuing research)
- Building knowledge progressively
- Reference material you check frequently

**Archive method:**

- Add `[ARCHIVE]` or `[CLOSED]` prefix to project name
- Keeps them sorted at top or bottom depending on your preference
- Still searchable, clearly marked as historical

### Cross-Cutting Organization

**Problem:** Same client, multiple time periods or workstreams. How do you organize?

**Option 1: Time-based projects**

```
Client - Acme - 2024 Q1
Client - Acme - 2024 Q2
Client - Acme - 2024 Q3
```

**Best for:** Long-term engagements where work evolves significantly quarter to quarter

**Option 2: Workstream-based projects**

```
Client - Acme - Strategy
Client - Acme - Implementation
Client - Acme - Operations
```

**Best for:** Multiple parallel workstreams with distinct source sets

**Option 3: Hybrid**

```
Client - Acme - Strategy - Q4 2024
Client - Acme - Implementation - Q4 2024
```

**Best for:** Complex engagements with both dimensions mattering

**The key:** Be consistent. Pick one pattern and stick with it for all clients/projects of that type.

### Example Organization Schemas

### Consultant’s Structure

**Active Projects:**

```
Client - [Company A] - [Current Quarter]
Client - [Company B] - [Current Quarter]
Research - Industry Trends - [Current Year]
Research - Competitive Intel - [Current Quarter]
Learning - [New Tool/Method] - [Current Period]
Internal - Case Studies - [Current Year]
Internal - Methodology - Evergreen
```

**Archive marker:** Add `[ARCHIVE-YYYY]` when complete **Total active projects:** Typically 8-12 **Query pattern:** Frequent client queries, periodic research queries, occasional learning queries

---

### Researcher’s Structure

**Active Projects:**

```
Research - [Topic A] - Primary Sources
Research - [Topic A] - Literature Review
Research - [Topic B] - Primary Sources
Research - [Topic B] - Literature Review
Methods - [Specific Approach] - [Year]
Writing - [Paper Title] - Drafts and Notes
Teaching - [Course Name] - [Semester]
```

**Archive marker:** Move to `[PUBLISHED-YYYY]` or `[COMPLETE-YYYY]`**Total active projects:** 10-15 during active research phase **Query pattern:** Deep dives into primary sources, cross-referencing literature reviews, methods validation

---

### Product Manager’s Structure

**Active Projects:**

```
Product - [Feature Name] - Requirements
Product - [Feature Name] - User Research
Competitive - [Product Category] - [Quarter]
Customers - Feedback - [Quarter]
Customers - [Segment A] - Ongoing
Customers - [Segment B] - Ongoing
Strategy - Roadmap - [Year]
Strategy - Market Analysis - [Quarter]
Internal - Team Docs - [Quarter]
```

**Archive marker:** `[SHIPPED-YYYY-QQ]` for completed features, `[ARCHIVED-YYYY-QQ]` for others **Total active projects:**12-18 **Query pattern:** Frequent feature and customer queries, periodic competitive and strategy queries

---

### Entrepreneur/Founder Structure

**Active Projects:**

```
Fundraising - Pitch Deck - Current Round
Fundraising - Investor Research - [Year]
Product - Strategy - [Year]
Product - User Feedback - Ongoing
Market - Competitive Analysis - [Quarter]
Market - TAM/SAM Research - [Year]
Operations - Team Hiring - [Quarter]
Operations - Vendor Research - Ongoing
Learning - [Skill/Topic] - [Period]
```

**Archive marker:** `[CLOSED-YYYY]` for completed initiatives **Total active projects:** 10-15 **Query pattern:** Intense focus on current initiatives (fundraising, product), periodic strategy queries

---

### Project Size Guidelines

**Ideal project size:** 15-50 sources

- Enough depth for meaningful retrieval
- Not so many that noise degrades quality
- Can scan source list to remember what’s in there

**Warning signs of project bloat:**

- 75+ sources
- Can’t remember what half the sources are
- Retrieval returns too many loosely related results
- Takes 30+ seconds to scroll through source list

**When you hit 50-60 sources:**

- Split by sub-topic if possible
- Archive old sources that are no longer relevant
- Consider whether you’re trying to solve multiple problems in one project

**When you hit 100+ sources:**

- You definitely need to split
- Probably 3-4 focused projects hidden in there
- Retrieval quality has likely degraded significantly

### Meta-Organization Tips

**Use prefixes for quick filtering:**

- All client work starts with `Client -`
- All research starts with `Research -`
- All learning starts with `Learning -`
- Easy to scan, easy to find

**Keep “Templates” project:**

- Store your best prompt templates as text files
- Reference them when starting new projects
- Evolves as you learn what works

**Quarterly review:**

- Archive completed projects
- Merge underused projects
- Split bloated projects
- Update naming for consistency

**Don’t over-organize:**

- The goal is to find things quickly, not create a perfect taxonomy
- 15 well-organized projects beats 50 perfectly categorized projects
- Organization is in service of retrieval, not an end in itself

---

## Common Pitfalls (With Examples)

### Pitfall 1: Asking for Thinking Instead of Retrieval

**What you asked:**

> “Should we pivot our strategy based on these competitor moves?”

**What happened:** Notebook LM gave a shallow answer because it’s not built to synthesize strategy. The response felt generic and unhelpful.

**What to do instead:**

> “What specific moves did competitors make in the past quarter? For each move, note the competitor, the action, the stated rationale (if documented), and the source.”

Then take that extraction to Claude for the strategic analysis.

---

### Pitfall 2: Project Bloat

**What happened:** Started with “AI Research” project. Added every AI article you read for three months. Now have 200+ sources about everything from prompt engineering to hardware architecture to AI policy.

**The problem:** Retrieval quality degrades. Too much noise. Questions return surface-level answers from too many unrelated sources.

**How to fix:** Split into focused projects:

- “Prompt Engineering Techniques”
- “AI Hardware & Infrastructure”
- “AI Policy & Governance”
- “LLM Application Patterns”

Each project now has 20-40 highly relevant sources. Retrieval is precise again.

---

### Pitfall 3: Not Copying Out Important Extractions

**What happened:** Had a great conversation that extracted exactly the information you needed. Closed the tab. Came back the next day. Chat is gone. Had to recreate the query.

**The problem:** Notebook LM doesn’t save chats. Ephemeral by design.

**How to prevent:**

- Keep a running “Extractions” document outside Notebook LM
- Create an “Archive” project where you save important responses as new sources
- Copy valuable responses immediately to wherever you’re working (doc, thinking LLM, notes)
- Don’t rely on being able to revisit the conversation

---

### Pitfall 4: Vague Retrieval Prompts

**What you asked:**

> “What’s in these documents about the project?”

**What happened:** Got a generic summary that didn’t help you solve your actual problem.

**What to do instead:** Be specific about what you’re looking for:

> “Find every mention of timeline delays or schedule changes. Include the original date, new date, reason given for the change, and which document it came from.”

Now you have actionable information, not a summary.

---

### Pitfall 5: Ignoring Citations

**What happened:** Notebook LM told you “The client approved the timeline changes.” You acted on this. Turns out it was one stakeholder expressing personal opinion in an email, not formal approval.

**The problem:** Didn’t click through to verify the citation and understand the context.

**How to prevent:** Always click through on important claims. Check:

- Who said it (stakeholder level matters)
- When they said it (outdated information?)
- Context (was it a decision or a suggestion?)
- Format (formal approval vs casual mention?)

The citations are there for a reason. Use them.

---

### Pitfall 6: Using Notebook LM as Your Final Output Tool

**What you asked:**

> “Write an executive summary of our project status for the client.”

**What happened:** Got a bland, generic summary that didn’t have your voice or strategic framing.

**The problem:** Notebook LM is retrieval-focused, not creation-focused. It won’t write well.

**What to do instead:** Use Notebook LM to extract the facts:

> “What deliverables were completed, what’s in progress, what’s blocked? Include dates and specifics from the project documents.”

Then take that extraction to Claude:

> “Based on these project facts: [paste extraction]. Write an executive summary for the client that shows progress while addressing the budget concerns they raised last month. Use a confident, partnership-oriented tone.”

Now you’re using each tool for what it’s good at.

---

## When These Prompts Won’t Work

**If you have thousands of sources:** These prompts assume project-based organization with dozens to hundreds of sources. At thousands of sources, you need custom retrieval infrastructure.

**If your sources are highly technical code:** Notebook LM handles code-containing documents but isn’t optimized for code search. For large codebases, use IDE-native tools.

**If you need real-time information:** Notebook LM only knows what’s in your uploaded sources. For current events or rapidly changing information, use web search tools.

**If you need to execute on the information:** These prompts help you retrieve and think. For building, coding, creating artifacts, you’ll need tools beyond retrieval.

---

## Quick Reference: When to Use What

**Use Notebook LM when:**

- You need accurate information from specific documents
- You want to verify what’s actually documented vs what you remember
- You’re searching across project-scoped sources (dozens to hundreds)
- Citations and provenance matter
- You’re in the “gather information” phase

**Move to Claude/ChatGPT when:**

- You need to synthesize across multiple concepts
- You want strategic recommendations or creative solutions
- You’re building something (code, documents, plans)
- You need reasoning about implications and tradeoffs
- You’re in the “think” or “create” phase

**Use both when:**

- You need accurate retrieval AND sophisticated thinking
- Workflow: Retrieve → Extract → Hand off → Think → Create

---

## Next Steps

1. **Pick one real project** you’re working on right now
2. **Create a Notebook LM project** with 10-20 relevant sources
3. **Ask 3 specific retrieval questions** using the templates above
4. **Copy the best extraction** and move it to Claude with a thinking prompt
5. **Notice the difference** between retrieval quality and thinking quality

The system works when you stop trying to make one tool do everything.