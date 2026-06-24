# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T11:06:27.208Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (8.599125ms)
✔ startChange creates an OpenSpec change, task file, and active status (4.367875ms)
✔ startChange writes a richer OpenSpec proposal template (2.456875ms)
✔ runCli dispatches init, start, and status commands (3.225916ms)
✔ runCli supports help and version for an installable CLI (0.390458ms)
✔ runCli skill path prints source and default install target (0.323334ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.543208ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (2.293834ms)
✔ runSelfTest summarizes command health using an injectable runner (0.341ms)
✔ runCli examples and self-test print summary output (1.899292ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.767917ms)
✔ runCli desktop prints generated desktop app path (1.202875ms)
✔ package is ready for TypeScript core and npm publishing (0.377416ms)
✔ TypeScript adapters describe ShipSpec integration points (1.538ms)
✔ runCli adapters lists integration points (0.258333ms)
✔ intake creates a ShipSpec request intake record (1.976042ms)
✔ contract creates a delivery contract for the active ShipSpec change (3.190583ms)
✔ room creates role files for the active ShipSpec change (11.295166ms)
✔ audit reports ShipSpec delivery trail readiness (19.642375ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.903708ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.826958ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (428.335375ms)
✔ learnFromChange stores governed lessons and project patterns (89.772125ms)
✔ runCli reflect and learn expose self-improving loop commands (185.135542ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (147.260291ms)
✔ runLoop learns when verification and reflection are ready (492.616084ms)
✔ runCli loop exposes the one-pass self-improvement loop (155.4175ms)
✔ runOperation orchestrates safe delivery control loop (228.792ms)
✔ runCli operate exposes safe operator command with json output (484.076292ms)
✔ recordDecision stores human decisions for the active change (3.484666ms)
✔ runCli decision records decisions and validates input (4.354917ms)
✔ generateReview writes a decision-aware review checklist (171.213834ms)
✔ runCli review exposes decision-aware review checklist (154.087542ms)
✔ getNextRecommendation guides users with no active change (1.729167ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.49175ms)
✔ runCli next prints recommendation and supports json output (4.547958ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (235.985541ms)
✔ generatePlanPrompt includes recorded human decisions (3.491667ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.990709ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (222.738166ms)
✔ runCli memory prints memory summary and supports json output (85.31175ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (80.20825ms)
✔ runCli reason prints reasoning path and supports json output (6.184375ms)
✔ generateUiDashboard writes a single-page pixel dashboard (334.48375ms)
✔ generateUiDashboard shows committed files when working tree is clean (549.944875ms)
✔ generateUiDashboard shows ShipSpec audit trail (95.87775ms)
✔ generateUiDashboard shows self-improving loop state (261.287666ms)
✔ generateUiDashboard shows adaptive reasoning state (99.810875ms)
✔ generateUiDashboard shows operator state (342.985209ms)
✔ generateUiDashboard shows human decisions and review state (297.032375ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.808167ms)
✔ runCli ui prints generated dashboard path (87.071084ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.02175ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.189792ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.799875ms)
✔ doctorWorkspace reports repo readiness checks (33.714583ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.75875ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.453375ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.661ms)
✔ runCli detect and configure print project detection output (1.777333ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (2.112375ms)
✔ runCli ci prints generated GitHub Actions path (2.147667ms)
✔ getSpecStatus reports active change files and required proposal sections (2.116416ms)
✔ validateChange passes for a generated spec (2.061042ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.11575ms)
✔ validateChange --ready requires verification evidence (2.182584ms)
✔ validateChange --ready passes after verification evidence exists (62.02975ms)
✔ runCli spec and validate print spec gate output (5.003792ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (236.199584ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (100.52ms)
✔ runCli diff prints review-oriented Git and change status (101.432792ms)
✔ verifyChange runs fast checks by default and writes evidence (59.150833ms)
✔ verifyChange --full includes full-only checks (116.939ms)
✔ completeChange blocks until verification evidence exists (2.671333ms)
✔ completeChange writes done report after verification evidence exists (85.445208ms)
✔ completeChange includes changed files in done report when Git is available (107.5015ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (170.07575ms)
✔ runCli report prints the report path (162.092166ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (252.840583ms)
✔ runCli release prints release handoff path (220.988667ms)
ℹ tests 80
ℹ suites 0
ℹ pass 80
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 7203.82275
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

✔ initWorkspace creates repo-local delivery folders and default workflow (8.355334ms)
✔ startChange creates an OpenSpec change, task file, and active status (4.042959ms)
✔ startChange writes a richer OpenSpec proposal template (2.216834ms)
✔ runCli dispatches init, start, and status commands (2.380625ms)
✔ runCli supports help and version for an installable CLI (0.2215ms)
✔ runCli skill path prints source and default install target (0.414875ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.96675ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (5.51525ms)
✔ runSelfTest summarizes command health using an injectable runner (0.445708ms)
✔ runCli examples and self-test print summary output (1.637209ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.3215ms)
✔ runCli desktop prints generated desktop app path (1.580083ms)
✔ package is ready for TypeScript core and npm publishing (0.346667ms)
✔ TypeScript adapters describe ShipSpec integration points (0.783375ms)
✔ runCli adapters lists integration points (0.26475ms)
✔ intake creates a ShipSpec request intake record (1.459209ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.386167ms)
✔ room creates role files for the active ShipSpec change (3.719292ms)
✔ audit reports ShipSpec delivery trail readiness (4.269959ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.54375ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.385291ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (442.7915ms)
✔ learnFromChange stores governed lessons and project patterns (90.8255ms)
✔ runCli reflect and learn expose self-improving loop commands (171.668709ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (147.103333ms)
✔ runLoop learns when verification and reflection are ready (483.547208ms)
✔ runCli loop exposes the one-pass self-improvement loop (137.915375ms)
✔ runOperation orchestrates safe delivery control loop (233.423959ms)
✔ runCli operate exposes safe operator command with json output (453.961875ms)
✔ recordDecision stores human decisions for the active change (3.280291ms)
✔ runCli decision records decisions and validates input (2.697416ms)
✔ generateReview writes a decision-aware review checklist (167.774542ms)
✔ runCli review exposes decision-aware review checklist (154.156459ms)
✔ getNextRecommendation guides users with no active change (1.800459ms)
✔ getNextRecommendation guides active changes through missing artifacts (5.03825ms)
✔ runCli next prints recommendation and supports json output (3.990167ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (235.350958ms)
✔ generatePlanPrompt includes recorded human decisions (3.399584ms)
✔ runCli prompt prints Plan mode prompt and supports json output (5.150708ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (217.69275ms)
✔ runCli memory prints memory summary and supports json output (86.571084ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (86.991958ms)
✔ runCli reason prints reasoning path and supports json output (4.662958ms)
✔ generateUiDashboard writes a single-page pixel dashboard (329.445875ms)
✔ generateUiDashboard shows committed files when working tree is clean (433.313083ms)
✔ generateUiDashboard shows ShipSpec audit trail (91.63975ms)
✔ generateUiDashboard shows self-improving loop state (239.595292ms)
✔ generateUiDashboard shows adaptive reasoning state (92.802875ms)
✔ generateUiDashboard shows operator state (332.6915ms)
✔ generateUiDashboard shows human decisions and review state (231.94375ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.507833ms)
✔ runCli ui prints generated dashboard path (83.200875ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.333708ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.962958ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.702542ms)
✔ doctorWorkspace reports repo readiness checks (34.887792ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (1.116583ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.629292ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.467709ms)
✔ runCli detect and configure print project detection output (2.019167ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.880417ms)
✔ runCli ci prints generated GitHub Actions path (3.811208ms)
✔ getSpecStatus reports active change files and required proposal sections (1.916666ms)
✔ validateChange passes for a generated spec (2.229625ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.567083ms)
✔ validateChange --ready requires verification evidence (1.693625ms)
✔ validateChange --ready passes after verification evidence exists (62.525291ms)
✔ runCli spec and validate print spec gate output (2.657417ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (253.534083ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (98.5755ms)
✔ runCli diff prints review-oriented Git and change status (104.305666ms)
✔ verifyChange runs fast checks by default and writes evidence (64.610042ms)
✔ verifyChange --full includes full-only checks (123.200417ms)
✔ completeChange blocks until verification evidence exists (3.009917ms)
✔ completeChange writes done report after verification evidence exists (87.575041ms)
✔ completeChange includes changed files in done report when Git is available (105.85475ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (162.006625ms)
✔ runCli report prints the report path (169.266958ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (244.143458ms)
✔ runCli release prints release handoff path (225.6475ms)
ℹ tests 80
ℹ suites 0
ℹ pass 80
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6910.884333
```

