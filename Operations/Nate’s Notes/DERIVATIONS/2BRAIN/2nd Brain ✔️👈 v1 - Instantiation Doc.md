# Second Brain System — CHECKPOINT (Instantiation Doc) v1

_Source of truth: Second Brain Build Guide.docx_  

_Platform translation target: iOS 26.1 + Apple Shortcuts + Notion + OpenAI API_  

_Checkpoint intent: enable a fresh AI assistant to resume the build without guessing_

  

---

  

## 0. What this document is (FACT)

This is a **Checkpoint**: a known-good, resumable project state that encodes:

- original system intent and mechanics (from the guide),

- platform translation decisions (Slack/Zapier → Shortcuts),

- current build position,

- invariants and non-goals that must not be violated.

  

It is **not** a summary, and it is **not** an optimization proposal.

  

---

  

## 1. Original system intent (FACT — guide “Overview / What You’re Building”)

  

From the guide’s opening sections, the system is designed to:

  

- Capture thoughts with **near-zero friction**

- Use **AI classification** to decide *where* a thought belongs

- Route the thought into the correct **Notion database**

- Provide **immediate confirmation** of what happened

- Support **correction (“fix”)** without re-entering data

- Resurface information via **daily/weekly digests**

  

The guide explicitly frames this as:

> “A Slack-powered second brain that thinks *after* you capture, not before.”

  

**Key principle (FACT):**  

Capture should be dumb, fast, and irreversible. Intelligence happens downstream.

  

---

  

## 2. Canonical components (FACT — guide sections “Architecture”, “Zaps”, “Databases”)

  

### 2.1 Entry Surface

**Slack channel** (single channel used as inbox)

- Every message = one capture

- Slack timestamp acts as:

  - ordering mechanism

  - unique ID

  - reference point for fixes

  

### 2.2 Automations (Zapier)

The guide defines **three automations**:

  

#### Zap 1 — Capture & File

Trigger:

- New Slack message in channel

  

Steps:

- Send message text to OpenAI

- Parse JSON classification

- Route to destination Notion DB

- Log metadata

- Reply in Slack with confirmation

  

#### Zap 2 — Fix

Trigger:

- Slack reply starting with `fix:` in the same thread

  

Steps:

- Identify original capture via Slack thread timestamp

- Re-run classification or apply forced category

- Update destination record

- Update log

  

#### Zap 3 — Digest

Trigger:

- Scheduled (daily / weekly)

  

Steps:

- Query Notion DBs

- Summarize with AI

- Deliver summary to Slack DM

  

---

  

## 3. Data model (FACT — guide “Notion Database Setup”)

  

The guide defines **five databases**.

  

### 3.1 People

- Name (Title)

- Context / Notes (Text)

- Last Contacted (Date)

- Follow-up (Text)

- Tags (Multi-select)

  

### 3.2 Projects

- Name (Title)

- Status (Select: Active, Waiting, Someday, Done)

- Next Action (Text)

- Notes (Text)

- Last Updated (Date)

- Tags

  

### 3.3 Ideas

- Name (Title)

- One-liner (Text)

- Notes (Text)

- Created (Date)

- Tags

  

### 3.4 Admin

- Name (Title)

- Due Date (Date)

- Status (Select)

- Notes (Text)

  

### 3.5 Inbox Log (critical)

Purpose: **append-only audit trail**

  

Fields in guide:

- Original Text (Title)

- Filed To (Select)

- Destination Record Name (Text)

- Destination URL (URL)

- Confidence (Number)

- Status (Select: Filed / Needs Review / Fixed)

- Created (Date)

- Slack Thread Timestamp (Text)

- Notion Record ID (Text)

  

---

  

## 4. Classification contract (FACT — guide “AI Prompt / JSON Output”)

  

The OpenAI step is required to return **strict JSON**:

  

```json

{

  "destination": "people | projects | ideas | admin | needs_review",

  "confidence": 0.0–1.0,

  "data": {

    "...": "destination-specific fields"

  }

}

Routing rules (FACT):

  

- If confidence ≥ threshold (≈0.6): route automatically
- Else: route to Needs Review
- All captures still logged in Inbox Log

  

  

  

  

  

5. Platform translation (INTERPRETATION, faithful to function)

  

  

  

5.1 What is being replaced

  

|   |   |
|---|---|
|Original|Replacement|
|Slack channel|Apple Shortcuts (Action Button + Share Sheet)|
|Zapier|Apple Shortcuts + HTTP actions|
|Slack timestamp|Explicit timestamp written at capture|
|Slack thread|Notion Inbox Log row|
|Slack reply|Shortcuts confirmation (notification/alert/link)|

Invariant preserved: single capture surface → deterministic downstream behavior.

  

  

  

  

6. Current build state (FACT — verified by execution)

  

  

  

6.1 Completed

  

  

Capture Shortcut (Capture)

  

- Invoked by:  
    

- Action Button
- Share Sheet
- Manual run

-   
    
- Capture modes:  
    

- Text (Ask for Input)
- Voice (Dictate Text)

-   
    
- Normalization:  
    

- All paths write to Captured Text

-   
    
- Share Sheet:  
    

- Explicitly enabled via Receive configuration

-   
    
- Tested:  
    

- Text capture ✅
- Voice capture ✅
- Share Sheet capture ✅

-   
    

  

  

  

6.2 In progress

  

  

Inbox Log integration

  

- Notion database created (simplified Phase-1 schema)
- Timestamp generation added:  
    

- Current Date
- Format Date using ISO 8601 (decision made)

-   
    

  

  

  

6.3 Not started

  

  

- OpenAI classification call
- Notion API create-page (Inbox append)
- Routing to destination DBs
- Fix shortcut
- Digest shortcuts

  

  

  

  

  

7. System graph (faithful to guide)

  

flowchart TD

  A[Action Button] --> C[Capture Shortcut]

  B[Share Sheet] --> C

  C --> T[Timestamp + Source]

  T --> L[(Inbox Log)]

  C --> AI[OpenAI Classifier]

  AI --> R[Router]

  R --> P[(People)]

  R --> J[(Projects)]

  R --> I[(Ideas)]

  R --> X[(Admin)]

  R --> N[(Needs Review)]

  R --> L

  

  

  

  

8. Invariants (FACT + enforced by current build)

  

  

- Capture is fast and non-judgmental
- One capture = one immutable log row
- Classification happens after capture
- Misclassification must be fixable
- No silent failure paths

  

  

  

  

  

9. Explicit non-goals (FACT — guide philosophy)

  

  

- No thinking at capture time
- No premature task management
- No UI cleverness that slows capture
- No destructive edits to the log

  

  

  

  

  

10. Open design questions (must be resolved later)

  

  

(These are not solved yet in the guide or build.)

  

1. Fix identifier  
    

- Slack TS → Notion Record ID or local UUID?

3.   
    
4. Confirmation UX  
    

- Notification vs copied link vs silent?

6.   
    
7. Offline capture  
    

- Local buffer + later sync?

9.   
    
10. Digest delivery surface  
    

- Notification, Notes, Messages, or Notion page?

12.   
    

  

  

  

  

  

13. Resume instructions (for AI assistant)

  

  

Resume at Phase B of the build:

  

1. Finalize timestamp + source variables
2. Implement Notion API append to Inbox Log
3. Only then add OpenAI classification
4. Preserve JSON contract and confidence gating
5. Do not modify capture behavior before routing exists

  

  

  

  

  

6. Integrity rule

  

  

If any future assistant cannot answer:

  

“Where did this rule come from in the original guide?”

  

They must stop and ask for the guide again.

  

This checkpoint is invalid without that discipline.

---

  

### Final confirmation

- This artifact is **fully grounded** in the uploaded guide.

- It encodes **intent, architecture, data model, build state, and resume point**.

- It is suitable for **cold AI handoff** without oral history.

  

If you want, next we can:

- **Audit this checkpoint for over- or under-specification**

- Generate a **machine-readable state vector** alongside the human one

- Or resume the build at **Inbox Log append (Step 4)**

  

One-line audit: *Guide referenced directly; interpretations labeled; build state verified; no silent assumptions introduced.*