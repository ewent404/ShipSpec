# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T11:14:17.786Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.375958ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.046667ms)
✔ startChange writes a richer OpenSpec proposal template (1.889917ms)
✔ runCli dispatches init, start, and status commands (2.705334ms)
✔ runCli supports help and version for an installable CLI (0.265084ms)
✔ runCli skill path prints source and default install target (0.2755ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.834458ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.461583ms)
✔ runSelfTest summarizes command health using an injectable runner (0.255917ms)
✔ runCli examples and self-test print summary output (1.739792ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.811792ms)
✔ runCli desktop prints generated desktop app path (0.938583ms)
✔ package is ready for TypeScript core and npm publishing (0.314541ms)
✔ TypeScript adapters describe ShipSpec integration points (1.089625ms)
✔ runCli adapters lists integration points (0.157ms)
✔ intake creates a ShipSpec request intake record (1.387083ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.10175ms)
✔ room creates role files for the active ShipSpec change (2.709833ms)
✔ audit reports ShipSpec delivery trail readiness (3.648542ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.20775ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.773625ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (396.491834ms)
✔ learnFromChange stores governed lessons and project patterns (70.965958ms)
✔ runCli reflect and learn expose self-improving loop commands (139.527333ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (129.016958ms)
✔ runLoop learns when verification and reflection are ready (436.493167ms)
✔ runCli loop exposes the one-pass self-improvement loop (124.461583ms)
✔ runOperation orchestrates safe delivery control loop (203.792541ms)
✔ runCli operate exposes safe operator command with json output (391.671417ms)
✔ recordDecision stores human decisions for the active change (2.896208ms)
✔ runCli decision records decisions and validates input (2.292458ms)
✔ generateReview writes a decision-aware review checklist (143.512833ms)
✔ runCli review exposes decision-aware review checklist (140.279833ms)
✔ getNextRecommendation guides users with no active change (1.465375ms)
✔ getNextRecommendation guides active changes through missing artifacts (6.850834ms)
✔ runCli next prints recommendation and supports json output (3.490042ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (213.168625ms)
✔ generatePlanPrompt includes recorded human decisions (3.710042ms)
✔ runCli prompt prints Plan mode prompt and supports json output (4.695959ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (186.456292ms)
✔ runCli memory prints memory summary and supports json output (68.352ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (70.16975ms)
✔ runCli reason prints reasoning path and supports json output (3.700625ms)
✔ generateUiDashboard writes a single-page pixel dashboard (292.485ms)
✔ generateUiDashboard shows committed files when working tree is clean (359.424208ms)
✔ generateUiDashboard shows ShipSpec audit trail (75.080875ms)
✔ generateUiDashboard shows self-improving loop state (195.649ms)
✔ generateUiDashboard shows adaptive reasoning state (72.652459ms)
✔ generateUiDashboard shows operator state (268.044417ms)
✔ generateUiDashboard shows human decisions and review state (192.376584ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.280458ms)
✔ runCli ui prints generated dashboard path (73.321917ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.875208ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.582ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.353667ms)
✔ doctorWorkspace reports repo readiness checks (30.458166ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.537791ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.449833ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.667292ms)
✔ runCli detect and configure print project detection output (1.641875ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.825084ms)
✔ runCli ci prints generated GitHub Actions path (1.567542ms)
✔ getSpecStatus reports active change files and required proposal sections (1.731375ms)
✔ validateChange passes for a generated spec (1.864875ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.828541ms)
✔ validateChange --ready requires verification evidence (1.781542ms)
✔ validateChange --ready passes after verification evidence exists (56.251ms)
✔ runCli spec and validate print spec gate output (2.571292ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (214.335458ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (87.584375ms)
✔ runCli diff prints review-oriented Git and change status (85.6735ms)
✔ verifyChange runs fast checks by default and writes evidence (57.23575ms)
✔ verifyChange --full includes full-only checks (109.430667ms)
✔ completeChange blocks until verification evidence exists (2.300792ms)
✔ completeChange writes done report after verification evidence exists (81.797459ms)
✔ completeChange includes changed files in done report when Git is available (99.531916ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (140.011917ms)
✔ runCli report prints the report path (142.663542ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (211.115208ms)
✔ runCli release prints release handoff path (195.025083ms)
ℹ tests 80
ℹ suites 0
ℹ pass 80
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 5952.626875
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

✔ initWorkspace creates repo-local delivery folders and default workflow (9.84525ms)
✔ startChange creates an OpenSpec change, task file, and active status (5.073917ms)
✔ startChange writes a richer OpenSpec proposal template (4.089084ms)
✔ runCli dispatches init, start, and status commands (3.095167ms)
✔ runCli supports help and version for an installable CLI (0.411708ms)
✔ runCli skill path prints source and default install target (0.455833ms)
✔ runCli skill install copies the bundled ShipSpec skill (4.171291ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.993916ms)
✔ runSelfTest summarizes command health using an injectable runner (0.316125ms)
✔ runCli examples and self-test print summary output (1.762166ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (4.488625ms)
✔ runCli desktop prints generated desktop app path (1.291959ms)
✔ package is ready for TypeScript core and npm publishing (0.487542ms)
✔ TypeScript adapters describe ShipSpec integration points (0.627334ms)
✔ runCli adapters lists integration points (0.357875ms)
✔ intake creates a ShipSpec request intake record (1.63775ms)
✔ contract creates a delivery contract for the active ShipSpec change (4.012958ms)
✔ room creates role files for the active ShipSpec change (5.330458ms)
✔ audit reports ShipSpec delivery trail readiness (5.08575ms)
✔ deliver prepares intake, spec, contract, room, and validation (5.910833ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.128083ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (444.349ms)
✔ learnFromChange stores governed lessons and project patterns (87.767708ms)
✔ runCli reflect and learn expose self-improving loop commands (166.7995ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (146.99325ms)
✔ runLoop learns when verification and reflection are ready (476.08825ms)
✔ runCli loop exposes the one-pass self-improvement loop (147.969709ms)
✔ runOperation orchestrates safe delivery control loop (246.816583ms)
✔ runCli operate exposes safe operator command with json output (488.519916ms)
✔ recordDecision stores human decisions for the active change (2.790833ms)
✔ runCli decision records decisions and validates input (2.671417ms)
✔ generateReview writes a decision-aware review checklist (170.52325ms)
✔ runCli review exposes decision-aware review checklist (162.832417ms)
✔ getNextRecommendation guides users with no active change (1.609834ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.550042ms)
✔ runCli next prints recommendation and supports json output (3.704709ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (221.953875ms)
✔ generatePlanPrompt includes recorded human decisions (3.328167ms)
✔ runCli prompt prints Plan mode prompt and supports json output (6.34925ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (226.909417ms)
✔ runCli memory prints memory summary and supports json output (78.455958ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (78.276542ms)
✔ runCli reason prints reasoning path and supports json output (3.930291ms)
✔ generateUiDashboard writes a single-page pixel dashboard (335.695583ms)
✔ generateUiDashboard shows committed files when working tree is clean (406.979ms)
✔ generateUiDashboard shows ShipSpec audit trail (88.956416ms)
✔ generateUiDashboard shows self-improving loop state (215.844417ms)
✔ generateUiDashboard shows adaptive reasoning state (86.398959ms)
✔ generateUiDashboard shows operator state (366.911ms)
✔ generateUiDashboard shows human decisions and review state (215.284583ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.129833ms)
✔ runCli ui prints generated dashboard path (75.770292ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (4.067959ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.894667ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.458417ms)
✔ doctorWorkspace reports repo readiness checks (31.668125ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.655959ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.555791ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.111458ms)
✔ runCli detect and configure print project detection output (1.535292ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.632709ms)
✔ runCli ci prints generated GitHub Actions path (1.591458ms)
✔ getSpecStatus reports active change files and required proposal sections (1.82375ms)
✔ validateChange passes for a generated spec (1.678834ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.93975ms)
✔ validateChange --ready requires verification evidence (1.704291ms)
✔ validateChange --ready passes after verification evidence exists (56.965292ms)
✔ runCli spec and validate print spec gate output (2.862791ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (221.064083ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (91.605042ms)
✔ runCli diff prints review-oriented Git and change status (98.470792ms)
✔ verifyChange runs fast checks by default and writes evidence (60.011ms)
✔ verifyChange --full includes full-only checks (116.378083ms)
✔ completeChange blocks until verification evidence exists (2.013417ms)
✔ completeChange writes done report after verification evidence exists (79.724041ms)
✔ completeChange includes changed files in done report when Git is available (99.959917ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (144.849667ms)
✔ runCli report prints the report path (142.155208ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (213.9645ms)
✔ runCli release prints release handoff path (191.39275ms)
ℹ tests 80
ℹ suites 0
ℹ pass 80
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6725.22025
```

