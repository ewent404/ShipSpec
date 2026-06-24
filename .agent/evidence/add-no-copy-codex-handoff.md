# Add no-copy Codex handoff Verification Evidence

Mode: full
Generated: 2026-06-24T15:30:32.011Z

## Summary

Verified:
- lint passed
- unit passed
- typecheck passed
- e2e passed

Skipped:
- None

Risk:
- No verification risks detected from configured checks.

## Checks

### lint

Command: `npm run lint`
Result: pass
Required: yes

```text
> shipspec@0.4.0 lint
> node --check src/gsd.mjs && node --check bin/gsd.mjs && node --check test/gsd.test.mjs
```

### unit

Command: `npm test`
Result: pass
Required: yes

```text
> shipspec@0.4.0 test
> node --test

✔ initWorkspace creates repo-local delivery folders and default workflow (7.7025ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.262958ms)
✔ startChange writes a richer OpenSpec proposal template (1.951917ms)
✔ runCli dispatches init, start, and status commands (4.048375ms)
✔ runCli quickstart prepares the low-ceremony project path (86.134583ms)
✔ runCli quickstart --light avoids agent ceremony (76.435792ms)
✔ runMission prepares an AGI-style mission for a new request (309.302083ms)
✔ runMission continues an active change and prepares review when evidence passes (436.907958ms)
✔ runCli with no args shows the operator guide instead of raw help (76.979875ms)
✔ runCli routes plain text to quickstart (83.849459ms)
✔ runCli share aliases pack (70.61175ms)
✔ runCli ask aliases share (73.367667ms)
✔ runCli fix aliases light quickstart (76.006875ms)
✔ runCli ship runs ready verification, validation, and report (124.955583ms)
✔ runCli supports help and version for an installable CLI (0.285542ms)
✔ runCli supports the AGI-style run command (290.475666ms)
✔ runCli skill path prints source and default install target (0.311958ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.929208ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.328291ms)
✔ runSelfTest summarizes command health using an injectable runner (0.237291ms)
✔ runCli examples and self-test print summary output (1.160084ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.294667ms)
✔ runCli desktop prints generated desktop app path (1.247375ms)
✔ package is ready for TypeScript core and npm publishing (0.298542ms)
✔ TypeScript adapters describe ShipSpec integration points (0.325458ms)
✔ runCli adapters lists integration points (0.157625ms)
✔ intake creates a ShipSpec request intake record (1.417666ms)
✔ contract creates a delivery contract for the active ShipSpec change (1.863125ms)
✔ room creates role files for the active ShipSpec change (3.179416ms)
✔ audit reports ShipSpec delivery trail readiness (3.133792ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.273833ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (3.979125ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (372.258459ms)
✔ learnFromChange stores governed lessons and project patterns (72.137375ms)
✔ runCli reflect and learn expose self-improving loop commands (138.524667ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (123.871875ms)
✔ runLoop learns when verification and reflection are ready (407.462ms)
✔ runCli loop exposes the one-pass self-improvement loop (126.7685ms)
✔ runOperation orchestrates safe delivery control loop (200.5885ms)
✔ runCli operate exposes safe operator command with json output (399.26ms)
✔ recordDecision stores human decisions for the active change (2.786042ms)
✔ runCli decision records decisions and validates input (2.244958ms)
✔ generateReview writes a decision-aware review checklist (145.594083ms)
✔ runCli review exposes decision-aware review checklist (132.441792ms)
✔ getNextRecommendation guides users with no active change (1.619083ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.652708ms)
✔ runCli next prints recommendation and supports json output (3.211292ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (202.698875ms)
✔ generatePlanPrompt includes recorded human decisions (2.808208ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.341916ms)
✔ generateCodexHandoff prints a compact no-copy handoff from mission files (299.315959ms)
✔ runCli codex prints no-copy handoff and appears in help (310.238583ms)
✔ generateContextPack writes a portable AI handoff pack (159.553917ms)
✔ generateContextPack flags high-risk auth changes without full proof (97.920417ms)
✔ runCli pack writes and prints the context pack path (77.385916ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (201.66175ms)
✔ runCli memory prints memory summary and supports json output (72.473583ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (70.015833ms)
✔ runCli reason prints reasoning path and supports json output (3.296875ms)
✔ generateUiDashboard writes a single-page pixel dashboard (297.861041ms)
✔ generateUiDashboard shows committed files when working tree is clean (351.006417ms)
✔ generateUiDashboard shows ShipSpec audit trail (76.986125ms)
✔ generateUiDashboard shows self-improving loop state (193.667625ms)
✔ generateUiDashboard shows adaptive reasoning state (74.09825ms)
✔ generateUiDashboard shows operator state (268.323041ms)
✔ generateUiDashboard shows human decisions and review state (193.3235ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.248167ms)
✔ runCli ui prints generated dashboard path (72.773583ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.249708ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.714458ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.351167ms)
✔ doctorWorkspace reports repo readiness checks (30.262167ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.73925ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.424708ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.624083ms)
✔ runCli detect and configure print project detection output (1.713167ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.5795ms)
✔ runCli ci prints generated GitHub Actions path (1.500916ms)
✔ getSpecStatus reports active change files and required proposal sections (1.950666ms)
✔ validateChange passes for a generated spec (1.987042ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.962333ms)
✔ validateChange --ready requires verification evidence (1.658ms)
✔ validateChange --ready passes after verification evidence exists (56.401ms)
✔ runCli spec and validate print spec gate output (2.415167ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (214.023375ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (89.587708ms)
✔ runCli diff prints review-oriented Git and change status (86.611708ms)
✔ verifyChange runs fast checks by default and writes evidence (55.651292ms)
✔ verifyChange --full includes full-only checks (114.999416ms)
✔ completeChange blocks until verification evidence exists (2.422375ms)
✔ completeChange writes done report after verification evidence exists (81.086833ms)
✔ completeChange includes changed files in done report when Git is available (97.072667ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (145.558ms)
✔ runCli report prints the report path (142.094375ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (228.164333ms)
✔ runCli release prints release handoff path (204.746125ms)
ℹ tests 96
ℹ suites 0
ℹ pass 96
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 8583.319458
```

### typecheck

Command: `npm run typecheck`
Result: pass
Required: yes

```text
> shipspec@0.4.0 typecheck
> tsc --noEmit && node --check src/gsd.mjs && node --check bin/gsd.mjs && node --check test/gsd.test.mjs
```

### e2e

Command: `npm run test:e2e`
Result: pass
Required: no

```text
> shipspec@0.4.0 test:e2e
> node --test

✔ initWorkspace creates repo-local delivery folders and default workflow (6.889666ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.131041ms)
✔ startChange writes a richer OpenSpec proposal template (1.863958ms)
✔ runCli dispatches init, start, and status commands (2.096708ms)
✔ runCli quickstart prepares the low-ceremony project path (81.604375ms)
✔ runCli quickstart --light avoids agent ceremony (72.912209ms)
✔ runMission prepares an AGI-style mission for a new request (294.163042ms)
✔ runMission continues an active change and prepares review when evidence passes (409.099417ms)
✔ runCli with no args shows the operator guide instead of raw help (68.586083ms)
✔ runCli routes plain text to quickstart (76.32625ms)
✔ runCli share aliases pack (73.167625ms)
✔ runCli ask aliases share (71.408ms)
✔ runCli fix aliases light quickstart (76.173125ms)
✔ runCli ship runs ready verification, validation, and report (132.067875ms)
✔ runCli supports help and version for an installable CLI (0.285208ms)
✔ runCli supports the AGI-style run command (289.428ms)
✔ runCli skill path prints source and default install target (0.333ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.8205ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.342792ms)
✔ runSelfTest summarizes command health using an injectable runner (0.210834ms)
✔ runCli examples and self-test print summary output (1.138667ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.165208ms)
✔ runCli desktop prints generated desktop app path (0.971875ms)
✔ package is ready for TypeScript core and npm publishing (0.257042ms)
✔ TypeScript adapters describe ShipSpec integration points (0.366625ms)
✔ runCli adapters lists integration points (0.198167ms)
✔ intake creates a ShipSpec request intake record (1.319667ms)
✔ contract creates a delivery contract for the active ShipSpec change (1.837709ms)
✔ room creates role files for the active ShipSpec change (4.494958ms)
✔ audit reports ShipSpec delivery trail readiness (3.437375ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.143042ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.049792ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (374.432875ms)
✔ learnFromChange stores governed lessons and project patterns (67.228584ms)
✔ runCli reflect and learn expose self-improving loop commands (141.188958ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (123.354583ms)
✔ runLoop learns when verification and reflection are ready (410.191875ms)
✔ runCli loop exposes the one-pass self-improvement loop (132.374125ms)
✔ runOperation orchestrates safe delivery control loop (218.488917ms)
✔ runCli operate exposes safe operator command with json output (427.336208ms)
✔ recordDecision stores human decisions for the active change (3.058041ms)
✔ runCli decision records decisions and validates input (5.554792ms)
✔ generateReview writes a decision-aware review checklist (152.446333ms)
✔ runCli review exposes decision-aware review checklist (138.551542ms)
✔ getNextRecommendation guides users with no active change (1.631917ms)
✔ getNextRecommendation guides active changes through missing artifacts (3.895666ms)
✔ runCli next prints recommendation and supports json output (3.528334ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (201.483166ms)
✔ generatePlanPrompt includes recorded human decisions (2.733167ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.663ms)
✔ generateCodexHandoff prints a compact no-copy handoff from mission files (288.803042ms)
✔ runCli codex prints no-copy handoff and appears in help (287.387417ms)
✔ generateContextPack writes a portable AI handoff pack (165.764166ms)
✔ generateContextPack flags high-risk auth changes without full proof (89.531667ms)
✔ runCli pack writes and prints the context pack path (70.413042ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (198.276875ms)
✔ runCli memory prints memory summary and supports json output (74.21825ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (74.096125ms)
✔ runCli reason prints reasoning path and supports json output (5.981125ms)
✔ generateUiDashboard writes a single-page pixel dashboard (291.425459ms)
✔ generateUiDashboard shows committed files when working tree is clean (359.69775ms)
✔ generateUiDashboard shows ShipSpec audit trail (83.648458ms)
✔ generateUiDashboard shows self-improving loop state (198.143875ms)
✔ generateUiDashboard shows adaptive reasoning state (70.152209ms)
✔ generateUiDashboard shows operator state (280.922792ms)
✔ generateUiDashboard shows human decisions and review state (196.537834ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.324083ms)
✔ runCli ui prints generated dashboard path (79.939958ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.813125ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.698292ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.768458ms)
✔ doctorWorkspace reports repo readiness checks (34.864ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.706125ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.578625ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.140375ms)
✔ runCli detect and configure print project detection output (1.929542ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.926458ms)
✔ runCli ci prints generated GitHub Actions path (1.503875ms)
✔ getSpecStatus reports active change files and required proposal sections (2.137667ms)
✔ validateChange passes for a generated spec (1.881208ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.108334ms)
✔ validateChange --ready requires verification evidence (2.162292ms)
✔ validateChange --ready passes after verification evidence exists (59.371584ms)
✔ runCli spec and validate print spec gate output (2.730333ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (234.703416ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (96.45375ms)
✔ runCli diff prints review-oriented Git and change status (95.351875ms)
✔ verifyChange runs fast checks by default and writes evidence (57.953959ms)
✔ verifyChange --full includes full-only checks (116.361167ms)
✔ completeChange blocks until verification evidence exists (2.525458ms)
✔ completeChange writes done report after verification evidence exists (84.466958ms)
✔ completeChange includes changed files in done report when Git is available (98.567416ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (143.434666ms)
✔ runCli report prints the report path (142.458458ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (214.909625ms)
✔ runCli release prints release handoff path (191.115583ms)
ℹ tests 96
ℹ suites 0
ℹ pass 96
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 8610.079958
```

