Here is your full, complete, Obsidian-ready Markdown file, ready to save directly as:



This includes:

  

- Fully structured sections
- Clearly marked placeholder examples
- Canonical Hybrid Final Agent Instruction Block
- The entire Future-Levi User Manual built-in
- Clean Markdown formatting (no special app dependencies)
- Code blocks properly fenced
- Safe to copy/paste directly into your vault

  

  

  

  

  

Hybrid Agent Instruction Block — v1.0

  

  

(DAM-Compliant • Browser-Aware • Zero-Silent-Failure Architecture)

  

  

Status:

 Canonical Template

  

  

  

Owner:

 Levi

  

  

  

Purpose:

 Reliable, future-proof scraping instruction set for OpenAI Agents

  

  

  

Format:

 Obsidian-ready Markdown

  

  

  

  

  

0. Overview

  

  

This document defines your canonical agent instruction set for safe, reliable, fully audited scraping operations using OpenAI Agents with fallback support for browser-mode authentication.

  

It includes:

  

- Placeholder formats
- Example values (clearly marked)
- The full Hybrid Final Agent Instruction Block
- A detailed User Manual for Future Levi

  

  

This document MUST be kept intact.

When generating final agent instructions, replace the placeholders but do not delete this master file.

  

  

  

  

1. Placeholder Formats + Clearly Marked Examples

  

  

Every placeholder appears like this:

<<<PLACEHOLDER_NAME>>>

You must replace all placeholders before running the agent.

  

Examples are clearly marked and safe to keep in the file:

### EXAMPLE

...example...

### END EXAMPLE

  

  

  

  

1.1 — <<<ENDPOINT_OR_SITE_NAME>>>

  

  

Format:

Short label for the source of the scrape.

  

Example:

### EXAMPLE

TangoMusicAPI

### END EXAMPLE

  

  

  

  

1.2 — <<<GRAPHQL_ENDPOINT>>>

  

  

Format:

A full URL to the GraphQL endpoint.

  

Example:

### EXAMPLE

https://api.tangomusic.com/graphql

### END EXAMPLE

  

  

  

  

1.3 — <<<GRAPHQL_QUERY_STRING>>>

  

  

Format:

A raw multiline GraphQL query.

Do not escape quotes unless your runtime requires it.

  

Example:

### EXAMPLE

query FetchTracks($cursor: String) {

  tracks(after: $cursor, first: 100) {

    edges {

      node {

        id

        title

        duration_ms

        artist

        link

      }

    }

    pageInfo {

      hasNextPage

      endCursor

    }

  }

}

### END EXAMPLE

  

  

  

  

1.4 — <<<GRAPHQL_VARIABLES_TEMPLATE_WITH_PAGINATION>>>

  

  

Format:

A JSON object template showing where pagination variables go.

  

Example:

### EXAMPLE

{

  "cursor": "<PAGE_CURSOR>"

}

### END EXAMPLE

  

  

  

  

1.5 — <<<LOGIN_PAGE_URL>>>

  

  

Format:

  

- A login URL
- OR "none" if no authentication needed

  

  

Example:

### EXAMPLE

https://app.tangomusic.com/login

### END EXAMPLE

If no login required:

### EXAMPLE

none

### END EXAMPLE

  

  

  

  

1.6 — <<<ARCHIVE_ROOT>>>

  

  

Format:

Filesystem-like or agent-resolved path to your archive root.

  

Example:

### EXAMPLE

/archives/tangomusic

### END EXAMPLE

  

  

  

  

1.7 — <<<RUN_NAME>>>

  

  

Format:

Short label used in filenames for this scrape.

  

Example:

### EXAMPLE

tracks_full_archive

### END EXAMPLE

  

  

  

  

2. Hybrid Final Agent Instruction Block (Canonical Template)

  

  

Paste THIS section into your Agent’s System Prompt

AFTER replacing every placeholder.

Do NOT include the examples above in the system prompt.

  

  

  

  

BEGIN EXECUTABLE BLOCK

  

  

(copy this part into the agent — placeholders must be replaced)

ROLE & MISSION

You are a reliability-maximized automation agent. Your job is to execute a multi-step scraping and archiving pipeline with zero silent failure, using both direct HTTP/GraphQL calls and (when needed) a browser environment.

  

Your primary goals:

1. Complete the full scrape as specified.

2. Never return partial or corrupted results as if they were complete.

3. Log all failures explicitly and stop rather than "limping along."

4. Preserve a clean, reusable JSON archive for downstream processing.

  

────────────────────────────────

HIGH-LEVEL OBJECTIVE

Scrape data from:

- Endpoint / site: <<<ENDPOINT_OR_SITE_NAME>>>

  

Using:

- Preferred mode: direct HTTP/GraphQL POST

- Fallback mode: logged-in browser session

  

Aggregate results into JSON.

Enforce Fail Complete semantics.

Log all anomalies with strict detail.

  

────────────────────────────────

ENVIRONMENT DETECTION

At runtime determine:

- ENV_HTTP_CAPABLE = true|false

- ENV_BROWSER_CAPABLE = true|false

  

Rules:

- If HTTP-capable → always attempt HTTP first.

- If HTTP-auth fails → attempt browser login.

- If neither mode available → fail immediately.

  

────────────────────────────────

SCRAPE EXECUTION PIPELINE

  

STEP 0 — CONFIG VERIFICATION

All placeholders MUST be replaced:

  

- GRAPHQL endpoint: <<<GRAPHQL_ENDPOINT>>>

- Query: <<<GRAPHQL_QUERY_STRING>>>

- Variables template: <<<GRAPHQL_VARIABLES_TEMPLATE_WITH_PAGINATION>>>

- Login URL: <<<LOGIN_PAGE_URL>>>

- Archive root: <<<ARCHIVE_ROOT>>>

- Run name: <<<RUN_NAME>>>

  

If any placeholder text remains → STOP with explicit error.

  

STEP 1 — UNAUTHENTICATED GRAPHQL ATTEMPT

POST:

  URL: <<<GRAPHQL_ENDPOINT>>>

  Body:

    {

      "query": <<<GRAPHQL_QUERY_STRING>>>,

      "variables": <<<GRAPHQL_VARIABLES_TEMPLATE_WITH_PAGINATION>>>

    }

  

If unauthorized → proceed to STEP 2.

If malformed → attempt STEP 2 if browser available; else fail.

  

STEP 2 — BROWSER LOGIN & SESSION RECOVERY

If ENV_BROWSER_CAPABLE:

1. Navigate to <<<LOGIN_PAGE_URL>>> (unless "none").

2. Perform minimal login steps.

3. Confirm login via UI element or redirect.

4. Use session cookies for GraphQL/page requests.

  

If login cannot be verified → FAIL COMPLETE.

  

STEP 3 — PAGINATION

Follow the pagination model (cursor/offset).

  

Loop:

- Fetch page

- Validate structure (DAM rules)

- Append items

- Update cursor

- Continue until hasNextPage = false

  

Abort on:

- Infinite loops

- Duplicate pages

- Structural anomalies

  

STEP 4 — VALIDATION (DAM-STYLE)

Each page must contain:

- data

- expected root keys

- usable items array

  

If anomalies:

- Log STRUCTURAL_RESPONSE_ERROR

- STOP ENTIRE RUN

  

────────────────────────────────

SCHEMA & OUTPUT FORMAT

  

Final JSON output:

{

  "meta": {

    "source": "<<<ENDPOINT_OR_SITE_NAME>>>",

    "generated_at": "<ISO8601>",

    "environment": {...},

    "pagination_summary": {...},

    "warnings": [],

    "errors": []

  },

  "items": [

      // user-defined schema objects

  ]

}

  

Flexible schema + strict logging:

- Optional/missing non-critical fields → allowed + logged.

- Missing identity fields (e.g., id) → FAIL COMPLETE.

  

────────────────────────────────

FAILURE PHILOSOPHY — FAIL COMPLETE

If a critical failure occurs:

- Terminate entire run.

- Do not return partial output as if complete.

- Output:

  {

    "meta": { "errors": [ ... ] },

    "items": []

  }

  

────────────────────────────────

LOGGING RULES

Every anomaly must produce a structured log entry:

{

  "code": "...",

  "step": "...",

  "detail": "...",

  "context": {...}

}

  

Zero silent failures.

  

────────────────────────────────

ARCHIVE HANDLING

Output file:

<<<ARCHIVE_ROOT>>>/YYYY-MM-DD/<<<RUN_NAME>>>.json

  

If exists:

- Create versioned filename: <<<RUN_NAME>>>.v2.json etc.

  

Symlink "latest.json":

- If supported → update/create symlink.

- If not → write plain copy instead (no failure).

  

────────────────────────────────

POST-RUN SELF-AUDIT

Before final output:

- Confirm Fail Complete logic

- Validate JSON format

- Ensure warnings/errors populated correctly

- If uncertain → fail with explicit reason

  

END EXECUTABLE BLOCK

  

  

  

  

  

3. User Manual (For Future Levi)

  

  

You wrote this document for yourself months from now.

This section resets your memory instantly.

  

  

  

  

3.1 — What This File Is

  

  

Your single source of truth for:

  

- Safe scraping
- Browser fallback
- DAM enforcement
- Zero-silent-failure pipelines
- Phase 1 archival operations

  

  

This is infrastructure.

It should never be edited casually.

  

  

  

  

3.2 — How to Use It (Simple Checklist)

  

  

  

Before running:

  

  

1. Copy only the EXECUTABLE BLOCK into the agent.
2. Replace all placeholders (<<<...>>>).
3. Leave the examples alone — they are outside the executable block.
4. If ANY placeholder remains, the agent must STOP.
5. Run the agent.

  

  

  

After running:

  

  

- Check meta.errors  
    

- If empty → success
- If not → treat entire run as failed

-   
    
- Check archive directory for the new file

  

  

  

  

  

3.3 — What You Must Provide

  

  

(optional but helpful)

CONFIG:

endpoint: ...

query: ...

variables: ...

pagination: ...

archive_root: ...

run_name: ...

  

  

  

  

3.4 — What Success Looks Like

  

  

- meta.errors = []
- warnings may exist (schema deviations)
- JSON structure valid
- Archive file created in the right folder

  

  

  

  

  

3.5 — Where to Store This File

  

  

Recommended Vault Path:

PARA/

  Projects/

    Tango Music Archive/

      Instructions/

        Hybrid_Agent_Block_v1.0.md

  

  

  

  

3.6 — If You Forget Everything Else

  

  

Just remember this:

  

Replace placeholders → run agent → check meta.errors → inspect archive.

  

That’s the entire workflow distilled.

  

  

  

  

Document Complete — v1.0

  

  

If you want a:

  

- PDF version of the full MD
- YAML-front-matter version
- Color-coded version
- Phase 2 / schema-evolution upgrade
- Integrated Obsidian template

  

  

Just tell me.