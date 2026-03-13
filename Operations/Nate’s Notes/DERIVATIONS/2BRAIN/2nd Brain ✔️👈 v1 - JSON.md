{
  "project": {
    "name": "Second Brain Capture \u2192 Classify \u2192 Route System",
    "checkpoint_id": "SB-CHECKPOINT-v1",
    "checkpoint_date": "2026-01-14",
    "source_of_truth": {
      "type": "document",
      "filename": "Second Brain Build Guide.docx",
      "authority": "canonical"
    },
    "purpose": {
      "primary": "Zero-friction capture with deferred AI classification and deterministic routing",
      "secondary": [
        "Replace Slack-based inbox with Apple-native tooling",
        "Preserve auditability and fixability",
        "Enable scheduled resurfacing"
      ]
    }
  },
  "platform": {
    "os": "iOS",
    "version": "26.1",
    "automation_engine": "Apple Shortcuts",
    "external_services": [
      { "name": "Notion", "role": "Primary data store" },
      { "name": "OpenAI", "role": "Classification and summarization" }
    ],
    "excluded_services": ["Slack", "Zapier"]
  },
  "core_loop": [
    { "step": "capture", "description": "User records raw thought without categorization" },
    { "step": "classify", "description": "AI determines destination and structure" },
    { "step": "route", "description": "Write to correct Notion database" },
    { "step": "confirm", "description": "Immediate feedback to user" },
    { "step": "fix", "description": "Correct misclassification without re-entry" },
    { "step": "resurface", "description": "Scheduled summaries and reminders" }
  ],
  "components": {
    "entry_surfaces": [
      { "type": "Action Button", "status": "implemented" },
      { "type": "Share Sheet", "status": "implemented" },
      { "type": "Manual Run", "status": "implemented" }
    ],
    "shortcuts": {
      "capture": {
        "name": "Capture",
        "status": "implemented",
        "inputs": ["text", "voice", "share_sheet"],
        "normalization": { "output_variable": "Captured Text" },
        "guarantees": [
          "single capture produces single record",
          "no classification at capture time"
        ]
      },
      "fix": {
        "name": "Fix",
        "status": "not_started",
        "intent": "Override or correct previous classification"
      },
      "digest": {
        "name": "Digest",
        "status": "not_started",
        "intent": "Scheduled resurfacing of stored information"
      }
    }
  },
  "data_model": {
    "notion_databases": {
      "people": { "status": "defined_in_guide" },
      "projects": { "status": "defined_in_guide" },
      "ideas": { "status": "defined_in_guide" },
      "admin": { "status": "defined_in_guide" },
      "inbox_log": {
        "status": "partially_implemented",
        "role": "Append-only audit ledger",
        "schema_phase": {
          "current": "Phase 1 (minimal)",
          "canonical": "Guide-defined full schema"
        }
      }
    }
  },
  "classification": {
    "engine": "OpenAI",
    "contract": {
      "format": "strict_json",
      "fields": {
        "destination": {
          "allowed_values": ["people", "projects", "ideas", "admin", "needs_review"]
        },
        "confidence": { "range": [0.0, 1.0] },
        "data": { "type": "object" }
      }
    },
    "routing_rules": {
      "confidence_threshold": 0.6,
      "low_confidence_path": "needs_review"
    }
  },
  "timestamps": {
    "source": "System-generated",
    "method": "Current Date",
    "format": "ISO 8601",
    "purpose": ["Ordering", "Audit trail", "Slack timestamp replacement"]
  },
  "invariants": {
    "must_hold": [
      "Capture is fast and non-judgmental",
      "Append-only logging",
      "Classification happens after capture",
      "Every capture is logged",
      "Misclassification must be fixable"
    ],
    "must_not": [
      "Require user categorization at capture",
      "Silently drop captures",
      "Optimize capture UI for cleverness"
    ]
  },
  "non_goals": {
    "explicit": [
      "Task management",
      "Project planning",
      "Review workflows",
      "Smart capture UI"
    ]
  },
  "current_state": {
    "capture_layer": "complete",
    "inbox_log": {
      "database_created": true,
      "api_append": false
    },
    "classification_layer": "not_started",
    "routing_layer": "not_started",
    "fix_layer": "not_started",
    "digest_layer": "not_started"
  },
  "resume_point": {
    "phase": "B",
    "name": "Inbox Log Append",
    "next_actions": [
      "Finalize timestamp + source variables",
      "Implement Notion API Create Page into Inbox Log",
      "Verify append-only behavior",
      "Only then add OpenAI classification"
    ]
  },
  "open_questions": [
    "Identifier to replace Slack thread timestamp (Notion ID vs UUID)",
    "User confirmation UX (alert vs notification vs link)",
    "Offline capture fallback strategy",
    "Digest delivery surface"
  ],
  "integrity_rule": {
    "enforcement": [
      "If assistant cannot trace a rule to the guide, stop and ask for guide"
    ],
    "violation_result": "Checkpoint invalid"
  }
}