# Add no-copy Codex handoff

## Intent

Add no-copy Codex handoff

## Problem

- Users currently need to open or copy long prompt/context files after `gsd run`.
- Long copy/paste handoffs are fragile and make Codex usage feel heavier than the new mission flow.

## User Value

- Developers can give Codex one short instruction while ShipSpec keeps long context in repo files.
- The handoff becomes easier to remember: `gsd run "<goal>"`, then `gsd codex`.

## Scope

- Add a `gsd codex` command that prints a short no-copy Codex handoff for the active change.
- The handoff must list the local ShipSpec files Codex should read instead of asking the user to paste long context.
- Include the active mission, prompt, pack, proposal, and tasks paths when they exist.
- Update `gsd run` output to point users at `gsd codex`.
- Update help, README, and the bundled ShipSpec skill.

## Out Of Scope

- Do not launch Codex or external applications.
- Do not call external APIs or services.
- Do not auto-edit application code.
- Do not remove `gsd prompt`, `gsd pack`, or `gsd share`.

## Acceptance Criteria

- [ ] `gsd codex` prints a compact handoff containing `Use $shipspec`.
- [ ] `gsd codex` lists `.gsd/current.json`, mission, prompt, pack, proposal, and tasks paths for the active change when present.
- [ ] `gsd codex` tells Codex not to ask for pasted long context.
- [ ] `gsd run` output includes `Codex: gsd codex`.
- [ ] Help, README, and bundled skill mention the no-copy handoff.
- [ ] Existing prompt, pack, share, and run behavior remains compatible.
- [ ] Verification evidence is recorded before the change is marked done.

## Verification Plan

- Run `gsd verify` during development.
- Run `gsd verify --full` before release or review.

## Human Review Questions

- Is the scope correct?
- Are there any risky edge cases or constraints the agent should know?
