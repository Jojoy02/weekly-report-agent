# Architecture

```text
Source / Target Documents
        ↓
Skill Layer
Trigger · Instruction · Fallback · Reference · Evaluation
        ↓
Runtime
Parser · Context Builder · LLM · Validator · Commit Gate
        ↓
Governance
Candidate Rule → Holdout → Regression → Human Approval → Active Rule
```

Dify / LLM / MCP 属于 Runtime，不是 Skill 架构本体。
