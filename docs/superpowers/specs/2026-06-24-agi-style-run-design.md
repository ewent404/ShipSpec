# AGI-Style ShipSpec Run Design

## Summary

ShipSpec should move from a command collection into an AGI-style software delivery operator. The first step is a single outcome command:

```bash
gsd run "Add checkout discount"
```

`gsd run` should understand the goal, prepare the delivery state, evaluate readiness, learn from local evidence, and tell the human or AI agent the next best action. It should feel like "goal in, verified handoff out" while staying local, deterministic, and safe.

This design does not claim ShipSpec is AGI. It makes ShipSpec an AGI-style delivery layer around coding agents: goal-driven, adaptive, self-checking, memory-backed, and human-controlled.

## Goals

- Make ShipSpec easier to use by reducing command memory to one primary command.
- Make ShipSpec feel more powerful by turning project state into a clear mission state.
- Prepare implementation prompts and context packs for Codex, Claude, Cursor, Gemini, or humans.
- Use verification, reflection, risk, and memory to recommend the next action.
- Keep the system fast, local, and safe by default.

## Non-Goals

- Do not auto-edit application code in this first version.
- Do not deploy, publish, push, or call external services.
- Do not run infinite loops or recursive agent actions.
- Do not remove the existing explicit commands; advanced users can still use them.
- Do not market the tool as true AGI.

## User Experience

New work starts with:

```bash
gsd run "Add checkout discount"
```

ShipSpec should initialize/configure when needed, start or reuse the active change, validate the spec, generate adaptive reasoning, create an implementation prompt, create a shareable context pack, refresh the UI, and print a compact mission summary.

Continuing work uses:

```bash
gsd run
```

ShipSpec should inspect the active change and current evidence, then choose the safest next stage:

- missing or weak spec: explain what must be clarified
- planning-ready: generate prompt and context pack
- evidence missing: run configured verification when safe
- verification failed: write reflection and next fix direction
- verification passed: generate report and share pack
- ready to ship: say the change is review-ready

Example output:

```text
Mission: add-checkout-discount
Phase: planning-ready
Risk: medium
Next: paste .gsd/prompts/add-checkout-discount.md into your AI coding tool
Pack: .gsd/packs/add-checkout-discount.md
UI: .gsd/ui/index.html
```

## Architecture

`gsd run` should be a small orchestration layer over existing ShipSpec primitives.

Core units:

- Mission classifier: decides whether the request is new work, continuation, small fix, risky change, or ready-to-ship flow.
- Mission state writer: writes `.gsd/missions/<change>.json` and `.gsd/missions/<change>.md`.
- Goal brain: stores the user request, active change, project signals, and acceptance target.
- Reasoning brain: reuses `gsd reason` output and risk summary.
- Evaluator brain: reuses spec validation, verification evidence, readiness validation, and reflection.
- Memory brain: reuses `gsd learn` and `.agent/memory.md` without sending data externally.
- Operator brain: chooses one next action and explains why.

The orchestration should call existing internal functions where possible instead of shelling out to the CLI. This keeps tests fast and behavior deterministic.

## Data Flow

```text
User goal
-> project detection
-> active change/spec state
-> mission state
-> reasoning + risk
-> prompt + context pack
-> verification/reflection when continuing
-> UI refresh
-> one next action
```

Expected files:

- `.gsd/missions/<change>.json`: machine-readable mission state
- `.gsd/missions/<change>.md`: human-readable mission summary
- `.gsd/reasoning/<change>.md`: adaptive reasoning
- `.gsd/prompts/<change>.md`: AI implementation prompt
- `.gsd/packs/<change>.md`: portable context pack
- `.gsd/loops/<change>.md`: verification/reflection/learn loop when applicable
- `.gsd/ui/index.html`: refreshed cockpit

## Safety Rules

- Run at most one controlled loop per `gsd run`.
- Only run local configured verification commands.
- Never deploy, publish, push, delete, or modify external systems.
- Never run destructive commands.
- Warn and stop on high risk when evidence is missing or ready validation fails.
- Prefer generating prompts and packs over automatic code changes.
- Keep all memory local to the repo.

## CLI Behavior

Add:

```bash
gsd run [request]
```

Aliases are intentionally not added in the first version. The point is to make one strong command memorable, not create more names.

`gsd --help` should show `gsd run` in the beginner surface. `gsd help advanced` should keep the existing full command reference.

## Testing

Tests should cover:

- `gsd run "Feature"` initializes a new workspace and creates mission, spec, prompt, pack, reasoning, and UI files.
- `gsd run` with an active change and missing evidence recommends verification or AI implementation.
- `gsd run` with passing evidence generates report/share-ready state.
- high-risk file changes with missing evidence stop before ready/ship claims.
- no external commands are called beyond configured local checks.
- help output includes `gsd run`.

## Rollout

Build this in three steps:

1. Implement `gsd run` as safe mission preparation and continuation.
2. Add mission state to the UI so users see phase, risk, and next action.
3. Let memory improve recommendations from past reports and reflections.

This keeps the AGI-style direction real without making the first implementation too large or risky.
