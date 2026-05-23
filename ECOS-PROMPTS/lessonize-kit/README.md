# ECB Lessonize Prompt Kit v1.0

These eight markdown files mirror the canonical artifacts stored in BRAIN
(the `canonical_artifacts` table, accessed via `mcp__ecb__*` tools).

The runtime source of truth is BRAIN. These files exist for human editing,
git history, off-MCP readability, and pasting into platforms without ECB
connectivity.

## Editing protocol

1. Edit the relevant markdown file in this directory.
2. Call `update_artifact(artifact_id, body=<new body>, change_note=<why>)`
   against BRAIN to create a new draft version.
3. Once the new draft reads correctly via `get_artifact`, call
   `approve_artifact(artifact_id, version_id, "approved_instruction")` to
   promote it to the current version. Searches only return current+approved
   by default, so until the new version is approved, the old one keeps
   serving traffic — safe by design.

Do not edit a file in this directory without syncing to BRAIN. Drift between
the mirror and BRAIN is the failure mode this protocol is preventing.

## Files (install order)

| # | File | BRAIN title | Role |
|---|---|---|---|
| 1 | `01-ecb_lessonize_standing_doctrine.md` | `ecb_lessonize_standing_doctrine` | Teaching philosophy |
| 2 | `02-ecb_lessonize_output_contract.md` | `ecb_lessonize_output_contract` | Output shape for spoken lessons |
| 3 | `03-ecb_lessonize_context_module.md` | `ecb_lessonize_context_module` | ECBRAIN/BRAIN framing (conditional) |
| 4 | `04-ecb_lessonize_previous_answer.md` | `ecb_lessonize_previous_answer` | Mode module: re-teach prior answer |
| 5 | `05-ecb_lessonize_code.md` | `ecb_lessonize_code` | Mode module: code lessons |
| 6 | `06-ecb_lessonize_source.md` | `ecb_lessonize_source` | Mode module: source/link lessons |
| 7 | `07-ecb_lessonize_fresh_explainer.md` | `ecb_lessonize_fresh_explainer` | Mode module: fresh-topic explainer |
| 8 | `08-ecb_lessonize_index.md` | `ecb_lessonize_index` | Router/entrypoint |

Index is installed last because it references the other seven by name.

## Triggering the kit

Saying any of these to an assistant with ECB access should retrieve the
index and route into the kit:

- "lessonize"
- "lessonize this" / "lessonize that" / "lessonize this please"
- "lessonize that last answer"
- "explainer mode" / "explainer mode: <topic>"
- "teach the mechanism"
- "explain like I am intelligent but new"

The single highest-value alias is just `lessonize`.

## Portable export (v0)

For a platform that cannot reach BRAIN, concatenate the relevant files:

```
# Code-mode lesson (no ECB context)
cat 01-*.md 02-*.md 05-*.md

# Fresh-topic lesson touching ECB
cat 01-*.md 02-*.md 03-*.md 07-*.md
```

A proper composer (mode selection, header wrapping, optional context module)
is planned for v1.1.
