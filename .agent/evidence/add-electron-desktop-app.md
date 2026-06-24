# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T10:15:21.939Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.766ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.878334ms)
✔ startChange writes a richer OpenSpec proposal template (2.621375ms)
✔ runCli dispatches init, start, and status commands (2.430833ms)
✔ runCli supports help and version for an installable CLI (0.285417ms)
✔ runCli skill path prints source and default install target (0.316625ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.881292ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.707459ms)
✔ runSelfTest summarizes command health using an injectable runner (0.268958ms)
✔ runCli examples and self-test print summary output (1.490334ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.205041ms)
✔ runCli desktop prints generated desktop app path (1.304875ms)
✔ package is ready for TypeScript core and npm publishing (0.429958ms)
✔ TypeScript adapters describe ShipSpec integration points (1.220959ms)
✔ runCli adapters lists integration points (0.194791ms)
✔ intake creates a ShipSpec request intake record (1.600333ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.07575ms)
✔ room creates role files for the active ShipSpec change (3.786459ms)
✔ audit reports ShipSpec delivery trail readiness (4.553417ms)
✔ deliver prepares intake, spec, contract, room, and validation (5.134709ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.80175ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (426.480584ms)
✔ learnFromChange stores governed lessons and project patterns (86.418292ms)
✔ runCli reflect and learn expose self-improving loop commands (163.929458ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (142.765042ms)
✔ runLoop learns when verification and reflection are ready (453.25475ms)
✔ runCli loop exposes the one-pass self-improvement loop (133.400459ms)
✔ runOperation orchestrates safe delivery control loop (214.571ms)
✔ runCli operate exposes safe operator command with json output (424.476708ms)
✔ recordDecision stores human decisions for the active change (2.494875ms)
✔ runCli decision records decisions and validates input (2.422167ms)
✔ generateReview writes a decision-aware review checklist (156.816541ms)
✔ runCli review exposes decision-aware review checklist (152.24225ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (212.10075ms)
✔ generatePlanPrompt includes recorded human decisions (4.387292ms)
✔ runCli prompt prints Plan mode prompt and supports json output (4.996042ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (211.65825ms)
✔ runCli memory prints memory summary and supports json output (76.611083ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (79.758708ms)
✔ runCli reason prints reasoning path and supports json output (3.924208ms)
✔ generateUiDashboard writes a single-page pixel dashboard (308.301542ms)
✔ generateUiDashboard shows committed files when working tree is clean (383.393708ms)
✔ generateUiDashboard shows ShipSpec audit trail (75.960583ms)
✔ generateUiDashboard shows self-improving loop state (210.004125ms)
✔ generateUiDashboard shows adaptive reasoning state (77.780833ms)
✔ generateUiDashboard shows operator state (311.134583ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.470541ms)
✔ runCli ui prints generated dashboard path (82.250167ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.527791ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (7.030542ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.37925ms)
✔ doctorWorkspace reports repo readiness checks (34.138208ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (1.0525ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.661167ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.982042ms)
✔ runCli detect and configure print project detection output (1.770125ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.701375ms)
✔ runCli ci prints generated GitHub Actions path (2.18475ms)
✔ getSpecStatus reports active change files and required proposal sections (2.066ms)
✔ validateChange passes for a generated spec (1.899083ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.748917ms)
✔ validateChange --ready requires verification evidence (1.813458ms)
✔ validateChange --ready passes after verification evidence exists (67.251417ms)
✔ runCli spec and validate print spec gate output (2.730542ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (245.303833ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (102.1655ms)
✔ runCli diff prints review-oriented Git and change status (103.10125ms)
✔ verifyChange runs fast checks by default and writes evidence (58.824541ms)
✔ verifyChange --full includes full-only checks (114.905834ms)
✔ completeChange blocks until verification evidence exists (2.153125ms)
✔ completeChange writes done report after verification evidence exists (82.344125ms)
✔ completeChange includes changed files in done report when Git is available (102.0595ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (151.191458ms)
✔ runCli report prints the report path (158.976666ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (255.130375ms)
✔ runCli release prints release handoff path (219.192791ms)
ℹ tests 76
ℹ suites 0
ℹ pass 76
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6283.31675
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.32325ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.448292ms)
✔ startChange writes a richer OpenSpec proposal template (2.246666ms)
✔ runCli dispatches init, start, and status commands (2.044458ms)
✔ runCli supports help and version for an installable CLI (0.233417ms)
✔ runCli skill path prints source and default install target (0.237167ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.15925ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.601084ms)
✔ runSelfTest summarizes command health using an injectable runner (0.431ms)
✔ runCli examples and self-test print summary output (1.445166ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.17925ms)
✔ runCli desktop prints generated desktop app path (1.175541ms)
✔ package is ready for TypeScript core and npm publishing (0.498333ms)
✔ TypeScript adapters describe ShipSpec integration points (0.588583ms)
✔ runCli adapters lists integration points (0.207458ms)
✔ intake creates a ShipSpec request intake record (1.520208ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.393083ms)
✔ room creates role files for the active ShipSpec change (3.150625ms)
✔ audit reports ShipSpec delivery trail readiness (4.017917ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.063833ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.201625ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (408.609916ms)
✔ learnFromChange stores governed lessons and project patterns (78.490583ms)
✔ runCli reflect and learn expose self-improving loop commands (150.00425ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (134.451333ms)
✔ runLoop learns when verification and reflection are ready (474.501209ms)
✔ runCli loop exposes the one-pass self-improvement loop (141.954125ms)
✔ runOperation orchestrates safe delivery control loop (232.217625ms)
✔ runCli operate exposes safe operator command with json output (447.882875ms)
✔ recordDecision stores human decisions for the active change (2.515917ms)
✔ runCli decision records decisions and validates input (2.974ms)
✔ generateReview writes a decision-aware review checklist (158.850125ms)
✔ runCli review exposes decision-aware review checklist (151.007375ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (219.604125ms)
✔ generatePlanPrompt includes recorded human decisions (3.456916ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.405042ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (215.5335ms)
✔ runCli memory prints memory summary and supports json output (79.044334ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (78.041791ms)
✔ runCli reason prints reasoning path and supports json output (3.711625ms)
✔ generateUiDashboard writes a single-page pixel dashboard (311.736875ms)
✔ generateUiDashboard shows committed files when working tree is clean (388.939375ms)
✔ generateUiDashboard shows ShipSpec audit trail (80.562333ms)
✔ generateUiDashboard shows self-improving loop state (210.17675ms)
✔ generateUiDashboard shows adaptive reasoning state (80.960583ms)
✔ generateUiDashboard shows operator state (288.18675ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.102ms)
✔ runCli ui prints generated dashboard path (79.842709ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.232583ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (6.44525ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.976625ms)
✔ doctorWorkspace reports repo readiness checks (34.228916ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.603458ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.470833ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.069041ms)
✔ runCli detect and configure print project detection output (2.243542ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.727791ms)
✔ runCli ci prints generated GitHub Actions path (1.462459ms)
✔ getSpecStatus reports active change files and required proposal sections (2.078458ms)
✔ validateChange passes for a generated spec (1.775417ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.765375ms)
✔ validateChange --ready requires verification evidence (1.674417ms)
✔ validateChange --ready passes after verification evidence exists (60.601834ms)
✔ runCli spec and validate print spec gate output (2.711208ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (234.173ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (110.884042ms)
✔ runCli diff prints review-oriented Git and change status (136.223041ms)
✔ verifyChange runs fast checks by default and writes evidence (63.641833ms)
✔ verifyChange --full includes full-only checks (128.789333ms)
✔ completeChange blocks until verification evidence exists (2.031334ms)
✔ completeChange writes done report after verification evidence exists (89.421459ms)
✔ completeChange includes changed files in done report when Git is available (113.171042ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (162.472875ms)
✔ runCli report prints the report path (174.84925ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (253.976875ms)
✔ runCli release prints release handoff path (210.966083ms)
ℹ tests 76
ℹ suites 0
ℹ pass 76
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6380.251042
```

