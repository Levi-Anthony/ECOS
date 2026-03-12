# PHASE BRIEF: Ecosystem Prompts Doc — BRAIN Rename + Prompt 9 Shadow Sync Step

**Phase:** 2A (Execution Plan March 9–13, 2026)  
**Assigned model:** ChatGPT  
**Estimated duration:** 20–40 minutes  
**Dependency:** Best after Phase 1B and ideally after the folder rename/restructure work, because this is an exact-form document edit that should live in the canonical document layer once Git is active. The execution plan defines Phase 2A as a mechanical text-edit block: rename all “Open Brain” references to “BRAIN” and add a shadow sync step to Prompt 9.  
**Blocks:** Prompt-language consistency, correct downstream naming, weekly review prompt completeness, clean shadow-entry workflow language  
**Relevant folder structure (current):**
- `ECOS-BRIEFS/` = phase briefs
- `ECOS-PROMPTS/` = prompt documents and prompt generators
- `ECOS-ARCHITECTURE/` = architecture specs and sync/canonicality docs
- `ECOS-DECISIONS/` = tradeoff and decision records
- `ECOS-META/` = supporting meta notes

**Primary target document for this phase:** the ecosystem prompts document in `ECOS-PROMPTS/`  
**Expected artifact location after completion:** updated prompt document committed locally, then pushed to the canonical GitHub repo

---

## 1. INTENTION

**What this step accomplishes:**  
This phase updates the **ecosystem prompts document** in `ECOS-PROMPTS/` so its language matches the current ECOS architecture and its weekly review prompt reflects the actual shadow-sync workflow. Specifically, it does two things:
1. replaces legacy references to **“Open Brain”** with **“BRAIN”** everywhere they function as current system naming, and
2. adds a **shadow sync step to Prompt 9** so weekly review behavior explicitly includes updating the BRAIN shadow layer when canonical documents have materially changed.

**What this step is NOT:**  
This is not a rewrite of the ecosystem prompts document. It is not a governance pass, not a restructuring of the prompt set, not a folder reorganization task, not a voice/style rewrite, not a broader three-tier architecture revision, and not the creation of actual shadow entries yet. It is also not permission to re-spec Prompt 9 from scratch. The goal is exact-form correction and one workflow completion step, not conceptual expansion.

**Why now:**  
This happens now because Phase 2A is the light, mechanical cleanup pass that should occur before the heavier architecture revision in Phase 2B and before first shadow entries are created in Phase 4A. If the prompts doc still says “Open Brain” or omits shadow sync in the weekly review flow, downstream work inherits outdated naming and incomplete operating instructions.

**Canonicality for this phase:**
- **Object being changed:** the exact-form **ecosystem prompts document** in `ECOS-PROMPTS/`
- **Authoritative layer:** **Canonical GitHub repository** for the document itself
- **Where edits should originate:** in the **local Obsidian clone**, then committed and pushed
- **Expected sync/update direction after the change:** `local Obsidian clone → commit → GitHub`
- **Architectural drift to avoid:** treating a local text edit as complete while the canonical GitHub document still contains the old wording; or treating a future BRAIN shadow summary of this doc as if it were the canonical prompt text

---

## 2. OUTCOME DEFINITION

**Done looks like:**
- Every intended current-system reference to **“Open Brain”** in the ecosystem prompts document has been changed to **“BRAIN”**
- Prompt 9 contains an explicit **shadow sync step** that tells the user/model to update or create the related shadow representation when weekly review identifies meaningful canonical-doc changes
- No unrelated prompts were substantively rewritten
- The document still reads coherently after the terminology replacement
- The updated document exists in the **local Obsidian clone**
- The same updated document is committed and pushed to the **canonical GitHub repository**
- The user can point to the exact line or section in Prompt 9 where the shadow sync step now exists
- The user can state the operating rule clearly: **the prompts doc is canonical in GitHub; BRAIN may later hold a distilled shadow of it, but not the exact-form authority**

**How to verify, in order:**
1. Open the local ecosystem prompts document in `ECOS-PROMPTS/` and search for `Open Brain`  
   - Result: no remaining current-name references that should now be `BRAIN`
2. Search for `BRAIN`  
   - Result: the intended renamed references are present and consistent
3. Navigate to Prompt 9  
   - Result: a distinct step exists for shadow sync, not merely an implied mention
4. Read Prompt 9 top to bottom once  
   - Result: the new step fits the sequence and does not create ambiguity about whether shadow sync is before or after the weekly review judgment
5. Run Git checks locally  
   - Result: the document shows as modified, then committed cleanly
6. Push to GitHub and open the canonical file there  
   - Result: GitHub reflects the exact same renamed terminology and Prompt 9 shadow step
7. State the layer rule explicitly  
   - Result: “The ecosystem prompts doc is an exact-form canonical document in GitHub; any BRAIN entry derived from it is a shadow, not the source text.”

**Layer completion order:**
1. **Local Obsidian clone** reflects the text edits first
2. **Canonical GitHub repository** reflects the same exact-form edits second
3. Any later **BRAIN shadow entry** happens only after the canonical doc is current

---

## 3. CONSTRAINTS

**Hard constraints (never break these):**

- **The ecosystem prompts document is an exact-form document object, so its authoritative layer is the canonical GitHub repository.**  
  Why: ECOS distinguishes “found” semantic objects from “right” exact-form documents. A prompts doc belongs in the exact-form layer, not in BRAIN as primary authority.

- **Edits should originate in the local Obsidian clone and then be committed/pushed to GitHub.**  
  Why: Obsidian is the human working environment; Git is the sync/history layer; GitHub is the canonical destination. That direction preserves the intended flow of work.

- **The target document should live in `ECOS-PROMPTS/`, not in `ECOS-META/` or `ECOS-BRIEFS/`.**  
  Why: the updated folder structure separates prompt assets from meta notes and from phase briefs. Wrong placement creates retrieval and maintenance confusion.

- **Do not turn this mechanical edit pass into an architecture rewrite.**  
  Why: the execution plan labels these as mechanical text edits and reserves deeper spec revision for Phase 2B.

- **Do not leave ambiguity about shadow sync in Prompt 9.**  
  Why: if the step is implied but not explicit, later models or tired-human execution will skip it.

- **Do not confuse the prompts doc with its future shadow entry.**  
  Why: a BRAIN shadow is a semantic/distilled retrieval object. It is not the canonical source text.

- **If Git is already active for this vault, the phase is not complete until the canonical GitHub repo reflects the change.**  
  Why: otherwise the user has only local state, not canonical exact-form completion.

**Soft constraints (break if necessary, but note why):**

- **Preserve existing structure and wording wherever possible outside the required changes.**  
  Why: this is a cleanup pass, not a writing pass.

- **Keep the added Prompt 9 shadow step short and operational.**  
  Why: long prose in workflow prompts increases execution friction and ambiguity.

- **Prefer one commit for this phase only.**  
  Why: a single focused commit preserves clean history, but multiple commits do not break architecture if needed.

- **If the exact filename differs from expectation, confirm the file by content rather than renaming files impulsively.**  
  Why: this phase is about document content, not file naming or path churn.

---

## 4. TRADEOFFS

**What you’re trading:**
- 20–40 minutes of mechanical cleanup for cleaner system language
- minor local editing effort for long-term naming consistency
- a little caution now for less architectural confusion later
- one manual Prompt 9 update now for fewer skipped shadow-sync steps during weekly review

**What you’re NOT trading:**
- you are not trading architectural freedom for this phase; the architecture itself gets revised in Phase 2B
- you are not trading time into broader prompt redesign
- you are not trading precision for elegance; operational clarity matters more here
- you are not trading canonicality away from GitHub
- you are not trading exact-form documents into BRAIN authority
- you are not trading folder structure again; the current `ECOS-*` naming should be treated as settled for this phase

**Architectural trade being made explicitly:**  
You are accepting a **small manual maintenance burden** in the prompts document so the prompt layer stays aligned with the real ECOS naming and shadow workflow. You are **not** using this phase to solve every future naming or retrieval nuance.

---

## 5. BREAK FIRST / NEVER BREAK

**Break first (if something goes wrong, let these bend first):**
- **Exact phrasing of the new Prompt 9 step can be revised once or twice.**  
  The key requirement is that the step exists and is operationally clear.

- **Commit-message elegance can break first.**  
  A basic message like `Update ecosystem prompts: BRAIN rename + Prompt 9 shadow sync` is enough.

- **Minor prose smoothing can wait.**  
  If the core rename and step insertion are correct, style polishing is optional.

- **One or two legacy references can be reviewed manually if search/replace feels risky.**  
  Slower is acceptable here; wrong global replacement is worse than manual verification.

**Never break:**
- **Do not leave the canonical layer stale while assuming the work is done.**  
  Failure mode: the local clone has the corrected prompts doc, GitHub still has the legacy version. That creates immediate document-layer drift.

- **Do not treat a BRAIN summary or shadow note as if it updates the prompts doc.**  
  Failure mode: BRAIN reflects the new terminology, but the canonical prompt document still says “Open Brain.” That is semantic/exact-form confusion.

- **Do not add a shadow-sync step that obscures timing or direction.**  
  Failure mode: Prompt 9 says to “sync shadow” without making clear that the canonical document is the source and BRAIN is the shadow destination.

- **Do not perform blind global replacement without checking context.**  
  Failure mode: historical references, quoted text, or intentionally preserved legacy wording get overwritten incorrectly.

- **Do not expand the phase into broader prompt governance changes.**  
  Failure mode: the user spends the whole block rewriting prompt philosophy and never completes the intended exact-form correction.

- **Do not move the document out of `ECOS-PROMPTS/` as part of this phase.**  
  Failure mode: content gets corrected but path stability breaks, creating downstream reference drift.

- **Do not edit GitHub pathing, file structure, or document identity without tracking downstream references.**  
  Failure mode: the canonical doc moves or renames informally and later references break.

---

## 6. TESTING PROTOCOL

| # | Test name | Command or action | Expected result | What to do if it fails |
|---|---|---|---|---|
| 1 | Open correct file | Open the ecosystem prompts document in the local Obsidian clone under `ECOS-PROMPTS/` | You are editing the intended canonical-source document, not a copy | Stop and locate the correct file before making changes |
| 2 | Legacy-term scan | Search the document for `Open Brain` | All legacy instances are visible for review | If search returns nothing but you expected hits, confirm you opened the right file/version |
| 3 | Controlled rename pass | Replace intended current-system instances of `Open Brain` with `BRAIN` | Legacy naming is removed where appropriate | Undo any replacement that changed quoted history or non-current references incorrectly |
| 4 | Prompt 9 insertion | Navigate to Prompt 9 and add the shadow sync step | Prompt 9 now explicitly includes a shadow-sync action | If the step feels vague, rewrite it to state source and destination more clearly |
| 5 | Sequence coherence check | Read Prompt 9 in order | The weekly review flow still makes sense and shadow sync happens in a clear place in the sequence | Reposition the new step so it follows review judgment rather than floating ambiguously |
| 6 | Whole-doc skim | Skim the rest of the doc once | No unrelated section was accidentally altered | Restore accidental edits before committing |
| 7 | Local diff check | Run `git diff -- <path-to-prompts-doc>` or inspect version history in editor | Diff shows only the intended renames and Prompt 9 addition | Revert noise or unrelated edits and recheck |
| 8 | Local status check | Run `git status` | Only the intended file(s) are modified/staged for this phase | Unstage unrelated files before committing |
| 9 | Commit phase changes | `git add <path-to-prompts-doc> && git commit -m "Update ecosystem prompts: BRAIN rename + Prompt 9 shadow sync"` | Commit succeeds and history is clean | If commit fails, resolve Git state before editing more |
| 10 | Push to canonical layer | `git push` | GitHub receives the update successfully | Stop and fix remote/auth state before declaring the phase done |
| 11 | Canonical verification | Open the file in GitHub | The canonical document matches the local edited version exactly | If GitHub is stale, do not move on; resolve the push/sync issue |
| 12 | Authority check | State: “Canonical prompts text lives in GitHub; BRAIN gets a shadow later if needed.” | You can articulate the layer rule clearly | Re-read Sections 1–3 before proceeding |

**What this protocol explicitly verifies:**
- the correct document object was edited
- rename changes were controlled rather than blind
- Prompt 9 now contains the missing operational step
- local and canonical versions match
- no silent drift was introduced between the local clone and GitHub

---

## 7. CONTEXT BLOCK

> Paste the ECOS Session Instantiation Block first, then add the following task-specific context.
>
> I’m executing ECOS Phase 2A. I need a mechanical edit pass on the ecosystem prompts document in `ECOS-PROMPTS/`. This document is an exact-form document object, so the authoritative layer is the canonical GitHub repository. I work locally in my Obsidian clone, and edits should originate there and then flow `local clone → commit → GitHub`.
>
> The required changes are narrow: replace current-system references to “Open Brain” with “BRAIN” throughout the ecosystem prompts doc, and add an explicit shadow sync step to Prompt 9 (weekly review). The shadow step should make clear that if the canonical document set changed in a meaningful way, the corresponding BRAIN shadow should be updated or created. Do not redesign the whole prompt set.
>
> I’m novice-to-intermediate in Git, so keep Git guidance operational and minimal. I need exact next actions, wording help if the Prompt 9 step needs tightening, and a final verification checklist. I do not need a broad architecture lecture or a rewrite of unrelated prompts.
>
> Important constraints:
> - the prompts doc is canonical in GitHub
> - the local Obsidian clone is where edits begin
> - BRAIN is not the exact-form authority for this document
> - the file belongs in `ECOS-PROMPTS/`
> - avoid broad rewrites
> - verify local and canonical versions match before calling the phase done

---

## 8. OPTIMIZED PROMPT EXAMPLE

> I’m in the local Obsidian clone editing the ecosystem prompts doc in `ECOS-PROMPTS/`. I already changed most instances of “Open Brain” to “BRAIN,” and now I’m at Prompt 9. In ECOS this doc is canonical in GitHub, but edits originate locally and then get committed/pushed. I need help writing one clean shadow-sync step for Prompt 9 that makes the direction explicit: canonical docs change first, then the related BRAIN shadow gets updated if needed. Give me 2–3 tight wording options, then tell me how to verify I didn’t create ambiguity in the sequence.

**Why this works:**  
It states what is already done, where the user currently is, what help is needed next, and which layer is authoritative. It prevents the model from drifting into a full rewrite or confusing BRAIN with the canonical prompts doc.

---

## 9. COUNTER-EXAMPLE

> Fix my prompt doc so it matches the new ECOS system.

**Why this fails, line by line:**
- **“Fix”** is undefined. The model does not know whether this means naming cleanup, architecture revision, or rewriting.
- **“my prompt doc”** does not identify the ecosystem prompts document in `ECOS-PROMPTS/` as the specific object being changed.
- **“matches the new ECOS system”** is too broad. The model may start changing terminology, structure, workflows, tone, and logic far beyond Phase 2A.
- It does not say that the required edits are only:  
  1. rename “Open Brain” to “BRAIN”  
  2. add a shadow sync step to Prompt 9
- It does not specify that the document is an exact-form object with **GitHub as canonical**
- It does not say edits originate in the **local Obsidian clone**
- It does not say the expected flow is `local clone → commit → GitHub`
- It does not warn against confusing a future BRAIN shadow entry with the actual prompt document
- It does not mention the current folder structure, so the model may point to the wrong file family or assume old locations

**Architectural failure in the bad prompt:**  
It hides canonicality, edit origin, sync direction, and current file placement. A model could easily produce revised text in-chat, leave the local/canonical file untouched, and still appear helpful while creating real ECOS drift.

---

## 10. RECOVERY PROTOCOL

| Severity | Symptom | Action |
|---|---|---|
| Minor | One or two rename instances feel context-sensitive | Stop global replacement. Review each instance manually and keep only the intended current-system renames |
| Minor | The new Prompt 9 step sounds clunky | Keep the step, tighten the wording, and prioritize operational clarity over elegance |
| Medium | You’re unsure whether a line should say `BRAIN` or preserve `Open Brain` as a historical reference | Don’t guess. Mark that line, preserve the ambiguous instance temporarily, and finish the clearly correct changes first |
| Medium | Prompt 9 now feels sequence-ambiguous | Read the prompt in order and explicitly anchor the new step after the review judgment and before completion/handoff |
| Medium | Git shows unrelated file changes | Unstage or discard unrelated changes before committing this phase so the commit remains phase-specific |
| Serious | You edited the local file but are no longer sure whether GitHub already has a newer version | Stop editing. Check `git status`, `git log --oneline -n 5`, and the GitHub file view. Determine which layer is current before proceeding |
| Serious | You may have edited a copy or duplicate of the prompts doc rather than the active canonical-source file | Stop. Identify the file path, compare against the canonical repo path in `ECOS-PROMPTS/`, and move changes into the correct document before committing |
| Serious | You pushed changes but now suspect the Prompt 9 step is wrong | Do not patch impulsively in multiple places. Confirm the canonical GitHub version, make one corrective local edit in the proper file, then commit/push a clean fix |
| Critical | You are confused about whether the document or its future BRAIN shadow is the real source | Stop. Re-establish authority: the exact-form prompts doc is canonical in GitHub; BRAIN only receives a distilled shadow after the canonical doc is current |
| Critical | You’ve spent more than 15 minutes stuck on any single issue | Stop. Capture what happened via BRAIN (iOS Shortcut), move to the next task, and return with a fresh session. Don’t let one problem consume your build day. |

**Recovery rule:**  
Before any serious recovery action, determine which layer is authoritative for the object being changed. In this phase, that means confirming the current state of the **canonical GitHub document** before making more edits.

---

## 11. SUCCESS HANDOFF

**What you now have:**
- an updated **ecosystem prompts document** in `ECOS-PROMPTS/` with current **BRAIN** naming
- a completed Prompt 9 sequence that explicitly includes **shadow sync**
- a canonical exact-form version of that document in **GitHub**
- a clean local-to-canonical edit trail for this specific prompt-layer correction

**What this unlocks in the execution plan:**
- **Phase 2B: Three-tier architecture spec v0.2 revision + DAM test** now proceeds with cleaner terminology and less naming drag
- **Phase 4A: Shadow entry creation** now has a prompt-layer document whose own workflow already acknowledges shadow sync, reducing inconsistency when the first shadow entries are created
- **Phase 5A / 5B catch-up and governance review** now inherit a corrected prompt document rather than needing to revisit this small but foundational cleanup later

**What to carry forward:**
- note any ambiguous legacy naming instances that were not obviously mechanical
- capture any friction about how Prompt 9 should phrase shadow-sync timing
- carry forward this operating assumption explicitly:  
  **The ecosystem prompts document is an exact-form canonical document in GitHub. Edits begin locally in Obsidian and flow to GitHub through Git. Any BRAIN representation of that document is a shadow, not the source text.**
- carry forward the updated folder assumption:  
  **prompt documents live in `ECOS-PROMPTS/`; phase briefs live in `ECOS-BRIEFS/`; architecture docs live in `ECOS-ARCHITECTURE/`.**

---

## Self-contained reference notes

This brief assumes the current ECOS operating structure is:
- **BRAIN** helps find what matters
- **GitHub** holds what must be right
- **Obsidian** is where humans work locally
- **Git** keeps those aligned
- **iCloud**, if used, is convenience infrastructure rather than authority

It also assumes the current folder naming scheme is already in force:
- `ECOS-ARCHITECTURE/`
- `ECOS-BRIEFS/`
- `ECOS-DECISIONS/`
- `ECOS-META/`
- `ECOS-PROMPTS/`

This is a **self-contained phase brief**. It is written so another model or a tired human can execute Phase 2A without needing to inspect earlier conversation context first.
