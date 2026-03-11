# ECOS Phase Brief Template

**This document serves two purposes:**
1. **Phase 1B is fully specced** — ready to hand to any model or follow yourself
2. **The structure IS the template** — every future phase brief follows this exact format

---

# PHASE BRIEF: Canonical GitHub Repo + Local Obsidian Clone Setup

**Phase:** 1B (Execution Plan March 9–13, 2026)  
**Assigned model:** Claude Code (primary) or ChatGPT (fallback for learning/walkthrough)  
**Estimated duration:** 90–120 minutes  
**Dependency:** None — this is Step 1. Everything else depends on this.  
**Blocks:** Vault restructure (1C), canonicality controls (Step 3), shadow entries (Step 4), all version history, assistant-mediated file edits

---

## 1. INTENTION

**What this step accomplishes:**  
Establish the **canonical GitHub repository** for the ECOS document layer and connect the local Obsidian vault as a properly functioning **working clone**. This creates the exact-form document system for ECOS: GitHub becomes the authoritative home of canonical files, the local Obsidian vault becomes the human-readable / editable working environment, and Git becomes the mechanism that keeps them aligned over time. This step creates four capabilities that do not currently exist in a stable form: canonical exact-form storage, intentional version history, rollback, and assistant-friendly remote editing.

**What this step is NOT:**  
This is not a branching workflow. No pull requests, no collaboration strategy, no multi-branch architecture, no Git GUI tooling, no Obsidian Git plugin automation, and no attempt to solve every future sync edge case today. It is also not a vault restructure pass, not a naming cleanup pass, and not a shadow-entry pass. The only goal is to establish the canonical repo relationship and prove the local clone can round-trip cleanly.

**Why now:**  
Every downstream ECOS phase depends on knowing **where exact-form truth lives**. Without a canonical repo, “canonical” remains vague and assistant edits have no clear authority target. Phase 1B is where the architecture becomes real: BRAIN is for semantic retrieval, GitHub is for exact-form truth, Obsidian is for local structured work. Everything downstream inherits this decision.

**Canonicality for this phase:**  
- **Object being changed:** ECOS vault version-control architecture and repo binding
- **Authoritative layer:** **Canonical GitHub repository**
- **Where edits should originate during setup:** Locally in Terminal and local files, but only as part of establishing the local clone’s relationship to the canonical GitHub repo
- **Expected sync direction after setup:** `local clone → commit → GitHub`, and verification that future `GitHub → local clone` pulls will be possible
- **Architectural drift to avoid:** treating the local Obsidian vault as if it is still the canonical source after setup

---

## 2. OUTCOME DEFINITION

**Done looks like:**  
- A **private GitHub repository** exists for the vault and is understood to be the canonical exact-form document layer
- The local Obsidian vault is a functioning Git repository connected to that GitHub repo
- An initial commit captures the current baseline state of tracked files
- `git push` succeeds and the baseline is visible in the GitHub repo
- The local vault remains usable in Obsidian exactly as before
- A `.gitignore` excludes workspace noise but preserves actual content files
- You can run `git log --oneline` locally and see the baseline commit
- You can edit a tracked file locally, run `git diff`, commit, and push
- You understand the operating rule: **GitHub is canonical; local Obsidian is a working clone**

**How to verify, in order:**  
1. `git status` works inside the vault and shows branch/repo state without errors
2. `git remote -v` shows the correct GitHub repo URL
3. `git log --oneline` shows the initial baseline commit
4. GitHub shows the repo and the expected files in the browser
5. Edit a tracked markdown file locally, save, run `git diff`, and confirm the change appears
6. Run `git add . && git commit -m "test" && git push` and confirm the new commit appears on GitHub
7. State the operating assumption out loud or in writing: **“GitHub is canonical. My Obsidian vault is the local working clone.”**

**Layer completion order:**  
1. Local repo initialized and clean  
2. Remote repo connected  
3. Baseline commit pushed to canonical GitHub repo  
4. Local and remote alignment verified  

---

## 3. CONSTRAINTS

**Hard constraints (never break these):**

- **Private repo only.**  
  The vault contains business strategy, pricing architecture, pedagogical frameworks, relationship-sensitive references, and internal prompts. Public exposure would be a structural breach, not a cosmetic mistake.

- **GitHub is the authoritative exact-form layer after setup.**  
  Once the remote is established and baseline pushed, the system must be treated as GitHub-canonical. Do not continue thinking of the local vault as the sole source of truth. That mental model will create drift later.

- **Never commit `.obsidian/workspace.json`.**  
  This file changes constantly based on local interface state and creates pure noise. It degrades diffs and obscures meaningful document changes.

- **Do not accidentally track secrets.**  
  If the vault contains `.env` files, config files with tokens, or any credentials, they must be excluded before the first meaningful push. Once secrets hit Git history, cleanup becomes harder.

- **Do not initialize Git in a parent directory above the vault root.**  
  `git init` must happen in the actual vault root. Initializing above it creates the wrong repository boundary and can accidentally capture unrelated files.

- **No automation until manual round-trip is proven.**  
  No Obsidian Git plugin, no shortcuts, no scripted commits until manual `add / commit / push / diff / log` works cleanly. Automation before understanding state creates invisible mistakes.

- **Keep the vault in its current iCloud location unless setup proves impossible.**  
  The current assumption is that iCloud can remain the convenience transport layer for the local clone, especially with “Keep Downloaded” enabled. Do not move the vault as a first reaction to confusion.

- **Use only the essential command set for this phase.**  
  `git status`, `git init`, `git add`, `git commit`, `git remote`, `git push`, `git log`, `git diff`  
  Recovery may occasionally require one extra command, but the default workflow should stay minimal.

**Soft constraints (break if necessary, but note why):**

- Start with the **ECTango** vault only.  
  This reduces complexity and proves the architecture on the most immediately relevant corpus first.

- Commit messages should be short and descriptive.  
  Good commit messages make later retrieval and review easier, but imperfect messages do not break structure.

- Baseline first, cleanup later.  
  If the vault has some minor cruft, do not let perfectionism delay repo establishment. Structural truth first, refinement second.

- Prefer HTTPS + Personal Access Token if that is the simplest path.  
  SSH may be cleaner long-term, but for a novice-first setup, the best method is the one that gets a working push without unnecessary friction.

---

## 4. TRADEOFFS

**What you're trading:**
- 90–120 minutes of build time → a stable canonical document architecture
- A small Git/Terminal learning curve → permanent version-history literacy
- Some conceptual simplicity → assistant-friendly remote canonical editing
- A bit of iCloud/Git coexistence risk → continued Apple-device convenience for the local clone

**What you're NOT trading:**
- Your day-to-day Obsidian writing environment — it should still feel like normal local work
- Mobile Obsidian dependence — mobile access is optional convenience, not architectural center
- Branching complexity — this phase is single-user, single-branch, linear-history only
- Full Git theory — you need operational competence, not academic completeness
- ECOS architectural clarity — this phase should reduce ambiguity, not add cleverness

**Architectural trade being made explicitly:**  
You are choosing **assistant-friendly canonical remote editing** over a purely local-first Git model. That means GitHub becomes the exact-form authority and the local vault becomes the working clone. This is intentional, not accidental.

---

## 5. WHAT TO BREAK FIRST / WHAT TO NEVER BREAK

**Break first (if something goes wrong, try these):**
- **The `.gitignore` can be adjusted.**  
  If you accidentally staged noise files, update `.gitignore` and restage. Noise is fixable.

- **The initial commit can be imperfect.**  
  “Initial commit: vault baseline” is good enough. The purpose is to establish a baseline, not win elegance points.

- **Commit messages can be mediocre.**  
  Better messages help later, but weak messages do not endanger architecture.

- **The first pass can stay manual and slow.**  
  You do not need elegance yet. Deliberate is better than clever.

**Never break:**
- **Do not lose track of which layer is authoritative.**  
  After setup, GitHub is canonical. The local vault is not a separate truth source. Confusing these will cause drift.

- **Do not force-push (`git push --force`).**  
  This rewrites remote history and is unnecessary in this workflow.

- **Do not make local edits while assuming remote already reflects them.**  
  Until you commit and push, local changes are only local. Treating them as canonical early is architectural drift.

- **Do not edit the same file in multiple places without syncing first.**  
  If assistant edits or remote edits happen, pull before continuing local work. Drift begins when stale local state is mistaken for current truth.

- **Do not treat BRAIN summaries or pointers as canonical text.**  
  BRAIN may describe or point to documents, but it is not the exact-form authority for this layer.

- **Do not delete the `.git` directory casually.**  
  That is the local repo state. If things feel wrong, diagnose before destroying state.

- **Do not commit secrets, tokens, or credentials.**  
  This is one of the few mistakes that can have downstream security consequences beyond repo cleanup.

- **Do not initialize the repo in the wrong directory.**  
  Wrong root means wrong system boundary.

---

## 6. TESTING PROTOCOL

**After setup, run these checks in order:**

| # | Test name | Command or action | Expected result | What to do if it fails |
|---|---|---|---|---|
| 1 | Confirm correct directory | `pwd` | Path is the actual vault root | `cd` into the correct vault root before doing anything else |
| 2 | Repo initialized | `git status` | Git reports repo/branch state, not “not a git repository” | Run `git init` in the correct directory |
| 3 | Ignore file working | `git status` | `.obsidian/workspace.json` does not appear as tracked/staged noise | Edit `.gitignore`, then recheck status |
| 4 | Baseline commit exists | `git log --oneline` | At least one baseline commit appears | Run `git add . && git commit -m "Initial commit: vault baseline"` |
| 5 | Remote connected | `git remote -v` | Correct GitHub repo URL shown for fetch/push | Add remote with `git remote add origin <url>` |
| 6 | Push to canonical repo | `git push -u origin main` | Push succeeds with no auth or remote errors | Resolve auth or remote config before proceeding |
| 7 | Verify canonical repo in browser | Open GitHub repo page | Files and baseline commit visible | Confirm repo URL, branch name, and push target |
| 8 | Local diff works | Edit a tracked markdown file, save, then run `git diff` | Exact changes appear locally | Confirm file was saved and is tracked |
| 9 | Local → canonical round trip | `git add . && git commit -m "test" && git push` | Commit succeeds locally and appears on GitHub | If push fails, stop and resolve remote/auth state before more edits |
| 10 | Canonicality statement check | Say or write: “GitHub is canonical; Obsidian is my local working clone.” | You can state the rule clearly without hesitation | Re-read Sections 1–4 before moving on |

**If you get stuck at the push/auth step:**  
This is the most common friction point. GitHub no longer accepts account passwords for Git operations over HTTPS; you typically need a Personal Access Token or SSH setup. Resolve auth once, then continue. Do not improvise alternate architecture because of an auth snag.

**What this protocol explicitly verifies:**  
- local repo exists  
- remote repo exists  
- canonical repo received the baseline  
- local edits can be intentionally propagated  
- the user understands the authority relationship  

---

## 7. CONTEXT BLOCK

**Paste this into whatever model is helping you execute this step:**

> Paste the ECOS Session Instantiation Block first, then add the following task-specific context.
>
> I’m setting up Phase 1B of ECOS. In this architecture, BRAIN is the semantic retrieval layer, the GitHub repository is the canonical exact-form document layer, and my local Obsidian vault is the structured working clone. Git is the sync/history layer between the local clone and the canonical repo.
>
> I’m on macOS. My Obsidian vault currently lives in iCloud and I want to keep it there if setup works cleanly. I am new to Git. I need only the essential commands and exact next actions, not a broad Git tutorial.
>
> Help me initialize Git in the local vault root, create a `.gitignore` that excludes `.obsidian/workspace.json`, `.trash/`, and `.DS_Store`, make the baseline commit, create a private GitHub repository, connect the remote, and push the baseline. Then verify that the local vault and canonical GitHub repo are aligned.
>
> Important constraints:
> - GitHub is the authoritative layer after setup
> - the local Obsidian vault is the working clone
> - no branching
> - no GUI Git tools
> - no automation yet
> - do not over-explain theory
>
> If auth fails on push, walk me through the simplest secure method to fix that. Keep me operational and state-aware.

---

## 8. OPTIMIZED PROMPT EXAMPLE

**This is what a good prompt to the assisting model looks like for this phase:**

> I’m in my local Obsidian vault root at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ECTango/`. I’ve already run `git init`, created `.gitignore`, and made the baseline commit. I have not connected the GitHub repo yet. In my architecture GitHub is the canonical repo and this vault is the local working clone. Walk me through creating the private GitHub repo, adding the remote, pushing the baseline, and verifying that the canonical repo and local clone are aligned. I’m new to Git and likely friction point is auth.

**Why this works:**  
It states current state, next need, exact layer relationship, and likely blocker. The model does not have to infer canonicality or re-ask where you are in the flow.

---

## 9. COUNTER-EXAMPLE (What a Bad Prompt Looks Like)

> Help me set up Git for my notes app

**Why this fails:**
- Doesn’t say the app is Obsidian
- Doesn’t say the machine/OS is macOS
- Doesn’t say files are in iCloud
- Doesn’t say the user is new to Git
- Doesn’t say a GitHub repo is part of the task
- Doesn’t specify private repo requirement
- Doesn’t mention `.gitignore`
- Doesn’t define the architecture
- Doesn’t tell the model whether GitHub is canonical or backup
- Doesn’t specify whether the local vault is the source of truth or the clone
- Model will likely give a generic Git tutorial instead of operational execution help

**Architectural failure in the bad prompt:**  
It hides the most important decision: **where exact-form authority lives**. Without that, the model can produce a valid Git workflow that is still wrong for ECOS.

---

## 10. RECOVERY PROTOCOL

**If things go sideways, use this escalation path:**

| Severity | Symptom | Action |
|---|---|---|
| Minor | `.gitignore` missed a noisy file | Edit `.gitignore`, recheck `git status`, restage if necessary |
| Minor | Commit message is weak | Leave it. Do not derail the phase over phrasing |
| Medium | Push rejected due to auth | Stop changing files. Fix auth first using PAT or SSH, then retry push |
| Medium | Remote config looks wrong | Run `git remote -v`, confirm the intended GitHub repo, fix remote before pushing anything else |
| Medium | Unsure whether local or remote is current | Stop editing. Check `git status`, `git log --oneline -n 5`, and GitHub browser state before proceeding |
| Serious | Local changes exist but remote state is uncertain | Do not keep editing. Capture current state: `git status`, `git remote -v`, `git log --oneline -n 5`. Determine whether anything has already reached GitHub before trying recovery |
| Serious | Accidentally committed something sensitive | Stop. Do not keep pushing. Identify whether the secret reached GitHub. If yes, rotate/revoke the secret first, then clean history with guided help |
| Serious | Repository boundary seems wrong | Confirm `pwd`. If `git init` happened in the wrong directory, stop and diagnose before adding more commits |
| Critical | You think the repo is corrupted or you are considering deleting `.git` | Stop. First determine whether GitHub already has the correct canonical baseline. Capture state (`git status`, `git remote -v`, `git log --oneline -n 10`) and get guided help before destructive action |
| Critical | You’ve spent more than 15 minutes stuck on any single issue | Stop. Capture what happened via BRAIN (iOS Shortcut), move to the next task, and return with a fresh session. Don’t let one problem consume your build day. |

**Recovery rule:**  
Before any serious recovery action, identify the authoritative layer first. In this phase, that will usually mean checking whether GitHub already contains the intended baseline. Do not perform destructive local cleanup while the authority state is still unclear.

---

## 11. SUCCESS HANDOFF

**When this phase is complete, you should have:**
- A private **canonical GitHub repository** holding the baseline ECOS vault content
- A functioning **local Obsidian working clone**
- A working mental model of: `edit locally → add → commit → push` and, later, `remote changes → pull`
- Confidence that you can inspect history with `git log` and inspect changes with `git diff`
- A clear architecture statement: **BRAIN finds what matters, GitHub holds what must be right, Obsidian is where you work locally**

**What this unlocks:**
- **Phase 1C (vault restructure)** — structural changes can now be made in the local clone and intentionally committed into the canonical repo
- **Phase 2A (ecosystem prompts doc revision)** — prompt-layer documents now have exact-form authority and version history
- **Phase 2B / 2B-alt (architecture spec or canonicality controls)** — downstream architecture work can now point to repo-backed canonical documents rather than ambiguous local files
- **Phase 4A (shadow entry creation)** — BRAIN shadow entries can point to stable, version-controlled canonical docs

**What to carry forward:**
- Any friction around auth, iCloud behavior, or repo mental model should be captured in BRAIN
- Any uncertainty about local vs canonical authority should be noted immediately; this is a system-stability issue, not a cosmetic note
- Carry forward this operating assumption explicitly:  
  **GitHub is canonical. Local Obsidian is the working clone. BRAIN is semantic retrieval.**

---

# TEMPLATE KEY

**For future phase briefs, replicate this structure exactly:**

```text
1.  INTENTION — what, not-what, why now
2.  OUTCOME DEFINITION — done looks like, how to verify
3.  CONSTRAINTS — hard (never break) and soft (break if needed)
4.  TRADEOFFS — what you're trading and what you're not
5.  BREAK FIRST / NEVER BREAK — triage guide
6.  TESTING PROTOCOL — ordered checks with expected results and failure recovery
7.  CONTEXT BLOCK — paste into assisting model
8.  OPTIMIZED PROMPT EXAMPLE — what good looks like
9.  COUNTER-EXAMPLE — what bad looks like and why
10. RECOVERY PROTOCOL — escalation ladder from minor to critical
11. SUCCESS HANDOFF — what you have, what it unlocks, what to carry forward
```
