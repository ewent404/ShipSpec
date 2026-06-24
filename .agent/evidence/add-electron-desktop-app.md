# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T11:25:23.385Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.796291ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.570583ms)
✔ startChange writes a richer OpenSpec proposal template (2.0235ms)
✔ runCli dispatches init, start, and status commands (2.427959ms)
✔ runCli quickstart prepares the low-ceremony project path (104.627667ms)
✔ runCli supports help and version for an installable CLI (0.503125ms)
✔ runCli skill path prints source and default install target (0.423583ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.220958ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (2.325625ms)
✔ runSelfTest summarizes command health using an injectable runner (0.423208ms)
✔ runCli examples and self-test print summary output (1.732667ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.950542ms)
✔ runCli desktop prints generated desktop app path (1.118875ms)
✔ package is ready for TypeScript core and npm publishing (0.384334ms)
✔ TypeScript adapters describe ShipSpec integration points (0.593959ms)
✔ runCli adapters lists integration points (0.425625ms)
✔ intake creates a ShipSpec request intake record (1.62525ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.241708ms)
✔ room creates role files for the active ShipSpec change (2.898875ms)
✔ audit reports ShipSpec delivery trail readiness (4.573708ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.300708ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.891625ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (426.138875ms)
✔ learnFromChange stores governed lessons and project patterns (91.442417ms)
✔ runCli reflect and learn expose self-improving loop commands (179.704125ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (150.761791ms)
✔ runLoop learns when verification and reflection are ready (482.415875ms)
✔ runCli loop exposes the one-pass self-improvement loop (145.029917ms)
✔ runOperation orchestrates safe delivery control loop (228.098834ms)
✔ runCli operate exposes safe operator command with json output (464.736333ms)
✔ recordDecision stores human decisions for the active change (3.985542ms)
✔ runCli decision records decisions and validates input (2.540417ms)
✔ generateReview writes a decision-aware review checklist (161.3915ms)
✔ runCli review exposes decision-aware review checklist (161.000875ms)
✔ getNextRecommendation guides users with no active change (1.736959ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.8885ms)
✔ runCli next prints recommendation and supports json output (3.753917ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (234.205458ms)
✔ generatePlanPrompt includes recorded human decisions (3.275875ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.560417ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (220.889667ms)
✔ runCli memory prints memory summary and supports json output (87.133792ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (85.086834ms)
✔ runCli reason prints reasoning path and supports json output (3.867791ms)
✔ generateUiDashboard writes a single-page pixel dashboard (330.775125ms)
✔ generateUiDashboard shows committed files when working tree is clean (403.626291ms)
✔ generateUiDashboard shows ShipSpec audit trail (88.862791ms)
✔ generateUiDashboard shows self-improving loop state (244.000083ms)
✔ generateUiDashboard shows adaptive reasoning state (96.507708ms)
✔ generateUiDashboard shows operator state (352.248458ms)
✔ generateUiDashboard shows human decisions and review state (234.556375ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.382625ms)
✔ runCli ui prints generated dashboard path (84.867083ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.39675ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.092ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.878833ms)
✔ doctorWorkspace reports repo readiness checks (34.909417ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.759792ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.540875ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.961166ms)
✔ runCli detect and configure print project detection output (2.190875ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (5.291584ms)
✔ runCli ci prints generated GitHub Actions path (1.858625ms)
✔ getSpecStatus reports active change files and required proposal sections (2.340458ms)
✔ validateChange passes for a generated spec (2.352917ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.39075ms)
✔ validateChange --ready requires verification evidence (2.607459ms)
✔ validateChange --ready passes after verification evidence exists (64.06675ms)
✔ runCli spec and validate print spec gate output (3.737917ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (243.712166ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (100.278458ms)
✔ runCli diff prints review-oriented Git and change status (102.6165ms)
✔ verifyChange runs fast checks by default and writes evidence (65.602417ms)
✔ verifyChange --full includes full-only checks (115.545208ms)
✔ completeChange blocks until verification evidence exists (2.380791ms)
✔ completeChange writes done report after verification evidence exists (88.33225ms)
✔ completeChange includes changed files in done report when Git is available (112.286125ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (161.076042ms)
✔ runCli report prints the report path (151.489333ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (242.696416ms)
✔ runCli release prints release handoff path (209.335833ms)
ℹ tests 81
ℹ suites 0
ℹ pass 81
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6970.226125
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.624041ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.26325ms)
✔ startChange writes a richer OpenSpec proposal template (1.841708ms)
✔ runCli dispatches init, start, and status commands (2.078959ms)
✔ runCli quickstart prepares the low-ceremony project path (90.064041ms)
✔ runCli supports help and version for an installable CLI (0.362042ms)
✔ runCli skill path prints source and default install target (0.289708ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.225333ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.560083ms)
✔ runSelfTest summarizes command health using an injectable runner (0.316542ms)
✔ runCli examples and self-test print summary output (1.474041ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.9855ms)
✔ runCli desktop prints generated desktop app path (1.235959ms)
✔ package is ready for TypeScript core and npm publishing (0.352334ms)
✔ TypeScript adapters describe ShipSpec integration points (0.436792ms)
✔ runCli adapters lists integration points (0.18075ms)
✔ intake creates a ShipSpec request intake record (1.457125ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.064ms)
✔ room creates role files for the active ShipSpec change (2.902833ms)
✔ audit reports ShipSpec delivery trail readiness (4.04175ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.509583ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.843ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (421.128791ms)
✔ learnFromChange stores governed lessons and project patterns (88.322542ms)
✔ runCli reflect and learn expose self-improving loop commands (172.113458ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (148.0615ms)
✔ runLoop learns when verification and reflection are ready (480.999666ms)
✔ runCli loop exposes the one-pass self-improvement loop (142.226333ms)
✔ runOperation orchestrates safe delivery control loop (235.631834ms)
✔ runCli operate exposes safe operator command with json output (454.016584ms)
✔ recordDecision stores human decisions for the active change (3.745209ms)
✔ runCli decision records decisions and validates input (2.563917ms)
✔ generateReview writes a decision-aware review checklist (164.333708ms)
✔ runCli review exposes decision-aware review checklist (155.079ms)
✔ getNextRecommendation guides users with no active change (2.347ms)
✔ getNextRecommendation guides active changes through missing artifacts (5.481667ms)
✔ runCli next prints recommendation and supports json output (3.695167ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (236.426834ms)
✔ generatePlanPrompt includes recorded human decisions (7.251625ms)
✔ runCli prompt prints Plan mode prompt and supports json output (6.931333ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (217.811292ms)
✔ runCli memory prints memory summary and supports json output (84.953083ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (85.520333ms)
✔ runCli reason prints reasoning path and supports json output (3.914709ms)
✔ generateUiDashboard writes a single-page pixel dashboard (331.685875ms)
✔ generateUiDashboard shows committed files when working tree is clean (412.950209ms)
✔ generateUiDashboard shows ShipSpec audit trail (79.500875ms)
✔ generateUiDashboard shows self-improving loop state (234.068459ms)
✔ generateUiDashboard shows adaptive reasoning state (93.103958ms)
✔ generateUiDashboard shows operator state (331.5745ms)
✔ generateUiDashboard shows human decisions and review state (235.109167ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.448167ms)
✔ runCli ui prints generated dashboard path (89.848709ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.082417ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.625958ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.070375ms)
✔ doctorWorkspace reports repo readiness checks (35.322875ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.872542ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.5ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.952416ms)
✔ runCli detect and configure print project detection output (2.46625ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.995291ms)
✔ runCli ci prints generated GitHub Actions path (3.244792ms)
✔ getSpecStatus reports active change files and required proposal sections (1.933042ms)
✔ validateChange passes for a generated spec (1.904459ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.09875ms)
✔ validateChange --ready requires verification evidence (1.835ms)
✔ validateChange --ready passes after verification evidence exists (60.993541ms)
✔ runCli spec and validate print spec gate output (2.945208ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (247.088916ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (102.748542ms)
✔ runCli diff prints review-oriented Git and change status (101.411042ms)
✔ verifyChange runs fast checks by default and writes evidence (64.579042ms)
✔ verifyChange --full includes full-only checks (123.47625ms)
✔ completeChange blocks until verification evidence exists (2.684ms)
✔ completeChange writes done report after verification evidence exists (89.590917ms)
✔ completeChange includes changed files in done report when Git is available (107.515959ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (162.115542ms)
✔ runCli report prints the report path (164.734583ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (241.750083ms)
✔ runCli release prints release handoff path (224.634334ms)
ℹ tests 81
ℹ suites 0
ℹ pass 81
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6931.188167
```

