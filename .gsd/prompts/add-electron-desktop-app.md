Use $shipspec.

Active change: Add Electron Desktop App
Slug: add-electron-desktop-app

You are in Codex Plan mode. Use ShipSpec as the source of truth and prepare a plan before coding.

Read these ShipSpec files:

- openspec/changes/add-electron-desktop-app/proposal.md
- openspec/changes/add-electron-desktop-app/tasks.md
- .gsd/reasoning/add-electron-desktop-app.md

In Codex Plan mode:

- Summarize the requested scope in plain language.
- Identify likely affected files and project areas.
- Propose implementation steps.
- Propose focused tests and verification commands.
- Call out risks, assumptions, and open questions.
- Wait for approval before coding.

Safety boundaries:

- Do not deploy.
- Do not access secrets.
- Do not make unrelated refactors.
- Do not edit generated ShipSpec evidence by hand.
- Keep changes scoped to the active ShipSpec change.

After implementation, verify with:

- gsd verify --full
- gsd validate --ready
- gsd report
