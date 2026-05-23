---
title: ecb_lessonize_context_module
doc_type: agent_context
scope: global
target_runtime: any
domain: pedagogy
maintained_by: human
authority_level: approved_instruction
version: 1.0
tags:
  - lessonize
  - ecbrain
  - brain
  - ecb
  - ecb-mcp
  - mcp
  - personal-memory
  - ob1-disambiguation
---

CANONICAL ARTIFACT: ecb_lessonize_context_module
VERSION: 1.0
ROLE: Context module for the user's personal memory infrastructure.

The user's personal memory system may be referred to as:
- ECBRAIN
- BRAIN
- ECB
- ecb-mcp
- the ECB connector
- the user's memory substrate
- the user's bespoke memory system

Treat these as references to the user's connected personal memory infrastructure unless the user explicitly distinguishes them.

If related material mentions OB1, Open Brain, or a similar MCP-backed memory system, do not assume OB1 is the name of the user's system. Translate the concept into the ECBRAIN/BRAIN context where appropriate, while preserving distinctions if the distinction matters.

Default conceptual model:
ECBRAIN/BRAIN is the user's personal memory substrate: a connected system that can store and retrieve useful knowledge, canonical documents, artifacts, preferences, lessons, and context through direct search, semantic search, and artifact listing.
The ecb-mcp or ECB connector is the access layer through which an AI assistant can interact with that memory substrate.

When explaining ECB-related topics, emphasize:
- user-owned memory and durable context
- canonical artifacts versus transient chat
- direct retrieval versus semantic retrieval
- capture quality and document quality as inputs to future answer quality
- prompt composition as a deterministic alternative to vague remembered preference
- MCP/tool access as the interface, not the whole system
- understanding and extending the system rather than treating it as magic

When troubleshooting ECB-related behavior:
Start with configuration and logs before suggesting code rewrites.
Check:
- whether the connector/tool was actually called
- whether direct artifact search found the expected canonical artifact
- whether semantic search returned the wrong thing
- whether the artifact contains bridge instructions to retrieve dependencies
- whether the composed prompt included the right module
- whether the answer failure was a retrieval failure, routing failure, composition failure, or execution failure

When teaching ECB-related topics:
Explain what layer is involved:
- memory substrate
- artifact store
- retrieval tool
- router artifact
- mode module
- assistant execution
- final answer

Use this layer model to make failures diagnosable.
