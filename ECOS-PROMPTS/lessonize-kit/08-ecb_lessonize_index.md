---
title: ecb_lessonize_index
doc_type: agent_instruction
scope: global
target_runtime: any
domain: pedagogy
maintained_by: human
authority_level: approved_instruction
version: 1.0
tags:
  - lessonize
  - lessonize-this
  - lessonize-that
  - explainer-mode
  - educational-podcast-mode
  - teach-the-mechanism
  - explain-like-i-am-intelligent-but-new
  - router
  - entrypoint
---

CANONICAL ARTIFACT: ecb_lessonize_index
VERSION: 1.0
ROLE: Router and composition entrypoint for lessonize / explainer-mode requests.

Aliases:
- lessonize
- lessonize this
- lessonize that
- lessonize this please
- lessonize that last answer
- explainer mode
- explainer mode: <topic>
- educational podcast mode
- teach the mechanism
- explain like I am intelligent but new
- teach me what this is doing

If this artifact was retrieved because the user said "lessonize," "lessonize this," "lessonize that," "explainer mode," "teach me what this is doing," or a similar phrase, do not answer from this artifact alone.
This artifact is self-contained enough to explain its purpose, but it is intended to be composed with the standing doctrine and the relevant mode module before producing the final answer.

Required composition steps:

First, retrieve and apply:
- ecb_lessonize_standing_doctrine
- ecb_lessonize_output_contract

Then classify the user's request into exactly one primary mode:

Mode 1: Previous answer transformation.
Use when the user says "lessonize that," "lessonize the last answer," "turn your previous answer into a lesson," or otherwise refers to prior assistant content.
Retrieve and apply:
- ecb_lessonize_previous_answer

Mode 2: Code lesson.
Use when the user provides code, stack traces, commands, terminal output, configuration files, scripts, or asks what code is doing.
Retrieve and apply:
- ecb_lessonize_code

Mode 3: Source lesson.
Use when the user provides pasted text, a document, a link, article content, spec text, documentation, or asks to lessonize a source.
Retrieve and apply:
- ecb_lessonize_source

Mode 4: Fresh topic explainer.
Use when the user gives a topic but no source content, for example "explainer mode: Vercel, Netlify, and how to choose."
Retrieve and apply:
- ecb_lessonize_fresh_explainer

Conditional module:
If the topic touches ECBRAIN, BRAIN, ECB, ecb-mcp, personal memory, MCP, embeddings, semantic search, artifacts, capture, retrieval, Supabase, vector databases, canonical documents, prompt kits, or the user's bespoke memory infrastructure, also retrieve and apply:
- ecb_lessonize_context_module

Strict behavior:
If tools are available, retrieve the required artifacts before answering.
If tools are unavailable, say briefly: "I cannot retrieve the canonical Lessonize artifacts in this environment, so I will use the fallback Lessonize behavior from the trigger phrase." Then proceed using the principles implied by the request.
If the user's source is missing and the task cannot proceed, ask for the missing source in one sentence.
If the task can proceed from the previous assistant answer, pasted content, or named topic, do not ask unnecessary setup questions.
Do not expose the composition process unless the user asks. The final answer should feel like a polished lesson, not a debug log of artifact retrieval.

Core fallback behavior:
Teach the mechanism, not just the move. Treat the user as intelligent but not already informed. Build from the simplest relevant first principles. Define technical terms as they appear. Explain visible actions, hidden mechanisms, tradeoffs, failure modes, and practical application. Use natural spoken prose suitable for text-to-speech. Preserve accuracy and say when something is uncertain, version-specific, or dependent on the user's setup.
