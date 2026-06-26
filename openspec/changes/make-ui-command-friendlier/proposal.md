# Make UI command friendlier

## Intent

Make UI command friendlier

## Problem

- `gsd ui` writes `.gsd/ui/index.html` but does not clearly tell users how to view it.
- New users expect the command to open the dashboard or provide an obvious next command.
- `gsd run "Feature"` already generates the UI, but it does not advertise the friendlier open path.

## User Value

- Developers can start a mission and see the Command Center with fewer remembered steps.
- The CLI feels like a product flow instead of a file generator.
- The current two-command flow remains available for terminal-only users.

## Scope

- Update `gsd ui` output to say the ShipSpec Command Center is ready, show the UI path, show `open .gsd/ui/index.html`, and mention `gsd ui --open`.
- Add `gsd ui --open` to generate the UI and open it with the operating system default browser.
- Add `gsd run --open "Feature"` to start or continue the mission and open the dashboard after generation.
- Update `gsd run` output to show `Open dashboard: gsd ui --open`.
- Update README and tests for the friendlier flow.

## Out Of Scope

- Redesigning the dashboard layout.
- Adding a long-running watch mode.
- Adding platform-specific GUI dependencies.

## Acceptance Criteria

- [ ] `gsd ui` prints a friendly Command Center ready message and open instructions.
- [ ] `gsd ui --open` invokes an opener after generating the dashboard.
- [ ] `gsd run --open "Feature"` starts or continues the mission and opens the dashboard.
- [ ] Existing `gsd run "Feature"` behavior still works without opening anything.
- [ ] Verification evidence is recorded before the change is marked done.

## Verification Plan

- Run `gsd verify` during development.
- Run `gsd verify --full` before release or review.

## Human Review Questions

- Is the scope correct?
- Are there any risky edge cases or constraints the agent should know?
