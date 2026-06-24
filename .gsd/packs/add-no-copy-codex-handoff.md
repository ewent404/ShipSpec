# ShipSpec Context Pack

Use this as a compact, agent-neutral handoff for implementation, review, or follow-up planning.

## Active Change

- Title: Add no-copy Codex handoff
- Slug: add-no-copy-codex-handoff
- Branch: codex/no-copy-codex-handoff

## Spec Files

- Proposal: openspec/changes/add-no-copy-codex-handoff/proposal.md
- Tasks: openspec/changes/add-no-copy-codex-handoff/tasks.md
- Acceptance criteria: present
- Verification plan: present

## Validation

- Spec validation: pass
- Ready validation: pass

## Changed Files

- README.md
- skills/shipspec/SKILL.md
- src/gsd.mjs
- test/gsd.test.mjs

## Evidence Summary

- Evidence file: .agent/evidence/add-no-copy-codex-handoff.md
- Verified: lint passed
- Verified: unit passed
- Verified: typecheck passed
- Verified: e2e passed
- Skipped: None
- Risk: No verification risks detected from configured checks.

## Risk

- Level: medium
- verification skipped checks
- next action pending: gsd operate

## Human Decisions

- No recorded human decisions.

## Next Action

- Command: gsd operate
- Reason: Operation report is missing for the active change.
- Also useful: gsd prompt
- Also useful: gsd verify --full
- Also useful: gsd ui

## Review Report

- .gsd/reports/add-no-copy-codex-handoff.md

## AI Instructions

- Read the spec files before proposing changes.
- Use the changed files and evidence summary to focus review.
- Call out missing verification, skipped checks, and risky affected areas.
- Keep implementation scoped to the active change.
- Do not deploy or access secrets from this pack.
