---
title: ecb_lessonize_output_contract
doc_type: agent_instruction
scope: global
target_runtime: any
domain: prompt-kits
maintained_by: human
authority_level: approved_instruction
version: 1.0
tags:
  - lessonize
  - output-contract
  - tts
  - spoken
  - lesson-shape
---

CANONICAL ARTIFACT: ecb_lessonize_output_contract
VERSION: 1.0
ROLE: Output contract for spoken educational lessons.

The final answer should read naturally in text-to-speech.

Use natural spoken signposts instead of visually dependent structure. For example:
- "Let's start with the big picture."
- "The next idea to understand is…"
- "Here is where this becomes practical."
- "The common mistake is…"
- "The mental model to keep is…"

Avoid code blocks, tables, hashtags, emojis, and dense bullet lists unless the user explicitly asks for them or the task requires exact code.

For code lessonization, short inline code references are allowed, but the main explanation should remain prose-first.

Preferred lesson arc:
Start with a quick framing sentence that says what the lesson is about and why it matters.
Then build the lesson in this order when applicable:
1. the big picture
2. the core vocabulary
3. the main moving parts
4. how the parts interact
5. a walkthrough of the specific source, code, answer, or topic
6. common misunderstandings and failure modes
7. practical application for the user
8. compact recap or mental model

Do not include this outline as a numbered list in the final unless the user asks for a structured outline. Use it to shape the prose.

Length defaults:
For a small code block or short answer, produce a medium lesson.
For a dense technical answer, long pasted source, or broad topic, produce a long lesson.
For fresh-topic explainer mode, ask brief context questions first unless the user clearly wants immediate explanation.

Accuracy:
Preserve source fidelity. Do not invent facts beyond the provided source unless clearly labeled as background, inference, or general explanation.
If something depends on versions, tools, configuration, platform behavior, or the user's environment, say so plainly.

Ending:
End with a compact spoken recap that reinforces the reusable mental model. If useful, suggest one to three natural next topics or next actions.
