# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T10:46:19.172Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.7615ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.213541ms)
✔ startChange writes a richer OpenSpec proposal template (2.109125ms)
✔ runCli dispatches init, start, and status commands (2.302166ms)
✔ runCli supports help and version for an installable CLI (0.273959ms)
✔ runCli skill path prints source and default install target (0.273ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.850125ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.700042ms)
✔ runSelfTest summarizes command health using an injectable runner (0.273416ms)
✔ runCli examples and self-test print summary output (1.591167ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.453167ms)
✔ runCli desktop prints generated desktop app path (1.120542ms)
✔ package is ready for TypeScript core and npm publishing (0.318833ms)
✔ TypeScript adapters describe ShipSpec integration points (0.463084ms)
✔ runCli adapters lists integration points (0.183208ms)
✔ intake creates a ShipSpec request intake record (1.562667ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.5745ms)
✔ room creates role files for the active ShipSpec change (3.165792ms)
✔ audit reports ShipSpec delivery trail readiness (4.072958ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.602166ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.709208ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (408.248958ms)
✔ learnFromChange stores governed lessons and project patterns (91.146833ms)
✔ runCli reflect and learn expose self-improving loop commands (171.095041ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (147.740167ms)
✔ runLoop learns when verification and reflection are ready (463.296666ms)
✔ runCli loop exposes the one-pass self-improvement loop (139.827792ms)
✔ runOperation orchestrates safe delivery control loop (230.552ms)
✔ runCli operate exposes safe operator command with json output (444.036166ms)
✔ recordDecision stores human decisions for the active change (3.09775ms)
✔ runCli decision records decisions and validates input (2.566458ms)
✔ generateReview writes a decision-aware review checklist (155.586541ms)
✔ runCli review exposes decision-aware review checklist (159.955333ms)
✔ getNextRecommendation guides users with no active change (1.961542ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.623667ms)
✔ runCli next prints recommendation and supports json output (3.369084ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (225.7415ms)
✔ generatePlanPrompt includes recorded human decisions (2.807875ms)
✔ runCli prompt prints Plan mode prompt and supports json output (4.481958ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (212.413125ms)
✔ runCli memory prints memory summary and supports json output (84.678125ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (83.592083ms)
✔ runCli reason prints reasoning path and supports json output (4.124541ms)
✔ generateUiDashboard writes a single-page pixel dashboard (315.425208ms)
✔ generateUiDashboard shows committed files when working tree is clean (394.816792ms)
✔ generateUiDashboard shows ShipSpec audit trail (82.636084ms)
✔ generateUiDashboard shows self-improving loop state (227.856042ms)
✔ generateUiDashboard shows adaptive reasoning state (92.077333ms)
✔ generateUiDashboard shows operator state (321.371208ms)
✔ generateUiDashboard shows human decisions and review state (230.419791ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.746125ms)
✔ runCli ui prints generated dashboard path (86.168875ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.307084ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.150417ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.025958ms)
✔ doctorWorkspace reports repo readiness checks (36.005125ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.753625ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.502292ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.954958ms)
✔ runCli detect and configure print project detection output (1.993416ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.962458ms)
✔ runCli ci prints generated GitHub Actions path (1.604959ms)
✔ getSpecStatus reports active change files and required proposal sections (2.390042ms)
✔ validateChange passes for a generated spec (2.091875ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.13375ms)
✔ validateChange --ready requires verification evidence (2.376625ms)
✔ validateChange --ready passes after verification evidence exists (62.341208ms)
✔ runCli spec and validate print spec gate output (3.580166ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (245.977334ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (91.2955ms)
✔ runCli diff prints review-oriented Git and change status (102.378709ms)
✔ verifyChange runs fast checks by default and writes evidence (65.375458ms)
✔ verifyChange --full includes full-only checks (119.642916ms)
✔ completeChange blocks until verification evidence exists (3.008625ms)
✔ completeChange writes done report after verification evidence exists (87.749833ms)
✔ completeChange includes changed files in done report when Git is available (103.123875ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (155.6455ms)
✔ runCli report prints the report path (160.614666ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (238.765875ms)
✔ runCli release prints release handoff path (221.151917ms)
ℹ tests 80
ℹ suites 0
ℹ pass 80
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6670.68075
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.455208ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.193333ms)
✔ startChange writes a richer OpenSpec proposal template (1.953792ms)
✔ runCli dispatches init, start, and status commands (2.160917ms)
✔ runCli supports help and version for an installable CLI (0.2295ms)
✔ runCli skill path prints source and default install target (0.262875ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.759208ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.4595ms)
✔ runSelfTest summarizes command health using an injectable runner (0.266417ms)
✔ runCli examples and self-test print summary output (1.348333ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.236458ms)
✔ runCli desktop prints generated desktop app path (1.061625ms)
✔ package is ready for TypeScript core and npm publishing (0.38ms)
✔ TypeScript adapters describe ShipSpec integration points (0.432333ms)
✔ runCli adapters lists integration points (0.164791ms)
✔ intake creates a ShipSpec request intake record (1.358ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.088708ms)
✔ room creates role files for the active ShipSpec change (2.923208ms)
✔ audit reports ShipSpec delivery trail readiness (3.72475ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.919084ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.932ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (377.597667ms)
✔ learnFromChange stores governed lessons and project patterns (82.288833ms)
✔ runCli reflect and learn expose self-improving loop commands (166.478791ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (148.903583ms)
✔ runLoop learns when verification and reflection are ready (494.752167ms)
✔ runCli loop exposes the one-pass self-improvement loop (148.935375ms)
✔ runOperation orchestrates safe delivery control loop (240.51125ms)
✔ runCli operate exposes safe operator command with json output (460.235958ms)
✔ recordDecision stores human decisions for the active change (2.499125ms)
✔ runCli decision records decisions and validates input (2.364875ms)
✔ generateReview writes a decision-aware review checklist (164.1295ms)
✔ runCli review exposes decision-aware review checklist (160.848291ms)
✔ getNextRecommendation guides users with no active change (1.789291ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.938417ms)
✔ runCli next prints recommendation and supports json output (3.6535ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (229.826916ms)
✔ generatePlanPrompt includes recorded human decisions (2.854375ms)
✔ runCli prompt prints Plan mode prompt and supports json output (4.934625ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (227.701416ms)
✔ runCli memory prints memory summary and supports json output (85.244958ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (86.9555ms)
✔ runCli reason prints reasoning path and supports json output (3.63ms)
✔ generateUiDashboard writes a single-page pixel dashboard (346.872875ms)
✔ generateUiDashboard shows committed files when working tree is clean (465.68125ms)
✔ generateUiDashboard shows ShipSpec audit trail (97.935417ms)
✔ generateUiDashboard shows self-improving loop state (240.599667ms)
✔ generateUiDashboard shows adaptive reasoning state (91.849041ms)
✔ generateUiDashboard shows operator state (335.173125ms)
✔ generateUiDashboard shows human decisions and review state (244.466292ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.573916ms)
✔ runCli ui prints generated dashboard path (95.094042ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.951042ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (6.149083ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.002084ms)
✔ doctorWorkspace reports repo readiness checks (39.787875ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.806084ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.629708ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.456292ms)
✔ runCli detect and configure print project detection output (2.186833ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.779709ms)
✔ runCli ci prints generated GitHub Actions path (1.832333ms)
✔ getSpecStatus reports active change files and required proposal sections (2.283417ms)
✔ validateChange passes for a generated spec (2.174625ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.174958ms)
✔ validateChange --ready requires verification evidence (2.02425ms)
✔ validateChange --ready passes after verification evidence exists (62.652791ms)
✔ runCli spec and validate print spec gate output (3.18725ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (269.618625ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (106.8715ms)
✔ runCli diff prints review-oriented Git and change status (105.071875ms)
✔ verifyChange runs fast checks by default and writes evidence (59.462041ms)
✔ verifyChange --full includes full-only checks (113.463792ms)
✔ completeChange blocks until verification evidence exists (2.653792ms)
✔ completeChange writes done report after verification evidence exists (88.298209ms)
✔ completeChange includes changed files in done report when Git is available (109.301083ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (161.132042ms)
✔ runCli report prints the report path (153.3105ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (241.099084ms)
✔ runCli release prints release handoff path (219.737291ms)
ℹ tests 80
ℹ suites 0
ℹ pass 80
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6928.625625
```

