# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T13:47:28.388Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (14.844833ms)
✔ startChange creates an OpenSpec change, task file, and active status (5.502583ms)
✔ startChange writes a richer OpenSpec proposal template (2.121333ms)
✔ runCli dispatches init, start, and status commands (2.363042ms)
✔ runCli quickstart prepares the low-ceremony project path (85.276375ms)
✔ runCli quickstart --light avoids agent ceremony (74.051ms)
✔ runCli with no args shows the operator guide instead of raw help (2.875542ms)
✔ runCli routes plain text to quickstart (69.941333ms)
✔ runCli share aliases pack (68.559458ms)
✔ runCli ask aliases share (68.376625ms)
✔ runCli fix aliases light quickstart (75.203292ms)
✔ runCli ship runs ready verification, validation, and report (138.113833ms)
✔ runCli supports help and version for an installable CLI (0.342291ms)
✔ runCli skill path prints source and default install target (0.4145ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.700458ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.62ms)
✔ runSelfTest summarizes command health using an injectable runner (0.217041ms)
✔ runCli examples and self-test print summary output (1.390541ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.528958ms)
✔ runCli desktop prints generated desktop app path (0.968916ms)
✔ package is ready for TypeScript core and npm publishing (0.549958ms)
✔ TypeScript adapters describe ShipSpec integration points (0.50425ms)
✔ runCli adapters lists integration points (0.350792ms)
✔ intake creates a ShipSpec request intake record (1.565667ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.095833ms)
✔ room creates role files for the active ShipSpec change (2.951ms)
✔ audit reports ShipSpec delivery trail readiness (4.631208ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.109458ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.676917ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (409.105584ms)
✔ learnFromChange stores governed lessons and project patterns (81.392375ms)
✔ runCli reflect and learn expose self-improving loop commands (141.034209ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (122.381125ms)
✔ runLoop learns when verification and reflection are ready (425.086917ms)
✔ runCli loop exposes the one-pass self-improvement loop (120.849416ms)
✔ runOperation orchestrates safe delivery control loop (200.684041ms)
✔ runCli operate exposes safe operator command with json output (483.859167ms)
✔ recordDecision stores human decisions for the active change (2.196167ms)
✔ runCli decision records decisions and validates input (2.359333ms)
✔ generateReview writes a decision-aware review checklist (150.339875ms)
✔ runCli review exposes decision-aware review checklist (137.337667ms)
✔ getNextRecommendation guides users with no active change (1.7765ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.40825ms)
✔ runCli next prints recommendation and supports json output (3.311709ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (202.185125ms)
✔ generatePlanPrompt includes recorded human decisions (2.980833ms)
✔ runCli prompt prints Plan mode prompt and supports json output (6.252166ms)
✔ generateContextPack writes a portable AI handoff pack (153.752583ms)
✔ runCli pack writes and prints the context pack path (75.06275ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (192.042708ms)
✔ runCli memory prints memory summary and supports json output (74.504792ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (72.154917ms)
✔ runCli reason prints reasoning path and supports json output (3.942083ms)
✔ generateUiDashboard writes a single-page pixel dashboard (290.425042ms)
✔ generateUiDashboard shows committed files when working tree is clean (371.488292ms)
✔ generateUiDashboard shows ShipSpec audit trail (81.008416ms)
✔ generateUiDashboard shows self-improving loop state (239.724167ms)
✔ generateUiDashboard shows adaptive reasoning state (88.51475ms)
✔ generateUiDashboard shows operator state (290.309583ms)
✔ generateUiDashboard shows human decisions and review state (192.816833ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.315ms)
✔ runCli ui prints generated dashboard path (67.437958ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.418708ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.180709ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.684584ms)
✔ doctorWorkspace reports repo readiness checks (28.103041ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.627666ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.36675ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.775375ms)
✔ runCli detect and configure print project detection output (1.721458ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.525ms)
✔ runCli ci prints generated GitHub Actions path (1.493875ms)
✔ getSpecStatus reports active change files and required proposal sections (1.80975ms)
✔ validateChange passes for a generated spec (3.373875ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.810084ms)
✔ validateChange --ready requires verification evidence (3.453583ms)
✔ validateChange --ready passes after verification evidence exists (55.821166ms)
✔ runCli spec and validate print spec gate output (2.846416ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (217.442542ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (90.039125ms)
✔ runCli diff prints review-oriented Git and change status (85.653583ms)
✔ verifyChange runs fast checks by default and writes evidence (56.383584ms)
✔ verifyChange --full includes full-only checks (115.695291ms)
✔ completeChange blocks until verification evidence exists (2.094125ms)
✔ completeChange writes done report after verification evidence exists (88.305417ms)
✔ completeChange includes changed files in done report when Git is available (118.553958ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (209.123625ms)
✔ runCli report prints the report path (148.437833ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (213.168291ms)
✔ runCli release prints release handoff path (202.003292ms)
ℹ tests 90
ℹ suites 0
ℹ pass 90
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 7117.840625
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

✔ initWorkspace creates repo-local delivery folders and default workflow (8.050084ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.438333ms)
✔ startChange writes a richer OpenSpec proposal template (1.880375ms)
✔ runCli dispatches init, start, and status commands (2.547917ms)
✔ runCli quickstart prepares the low-ceremony project path (93.007625ms)
✔ runCli quickstart --light avoids agent ceremony (82.321667ms)
✔ runCli with no args shows the operator guide instead of raw help (2.834958ms)
✔ runCli routes plain text to quickstart (78.495167ms)
✔ runCli share aliases pack (68.678291ms)
✔ runCli ask aliases share (71.237542ms)
✔ runCli fix aliases light quickstart (72.622666ms)
✔ runCli ship runs ready verification, validation, and report (125.569583ms)
✔ runCli supports help and version for an installable CLI (0.269083ms)
✔ runCli skill path prints source and default install target (0.21525ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.006167ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (2.115292ms)
✔ runSelfTest summarizes command health using an injectable runner (0.346542ms)
✔ runCli examples and self-test print summary output (1.280833ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.342084ms)
✔ runCli desktop prints generated desktop app path (0.836041ms)
✔ package is ready for TypeScript core and npm publishing (0.381292ms)
✔ TypeScript adapters describe ShipSpec integration points (0.349292ms)
✔ runCli adapters lists integration points (0.162834ms)
✔ intake creates a ShipSpec request intake record (1.314042ms)
✔ contract creates a delivery contract for the active ShipSpec change (1.881375ms)
✔ room creates role files for the active ShipSpec change (2.836375ms)
✔ audit reports ShipSpec delivery trail readiness (4.706875ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.192541ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.502542ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (445.999917ms)
✔ learnFromChange stores governed lessons and project patterns (81.38275ms)
✔ runCli reflect and learn expose self-improving loop commands (146.149209ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (133.370667ms)
✔ runLoop learns when verification and reflection are ready (413.046583ms)
✔ runCli loop exposes the one-pass self-improvement loop (124.401125ms)
✔ runOperation orchestrates safe delivery control loop (244.829125ms)
✔ runCli operate exposes safe operator command with json output (403.622542ms)
✔ recordDecision stores human decisions for the active change (2.236667ms)
✔ runCli decision records decisions and validates input (2.1805ms)
✔ generateReview writes a decision-aware review checklist (144.41325ms)
✔ runCli review exposes decision-aware review checklist (133.444959ms)
✔ getNextRecommendation guides users with no active change (1.597583ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.267041ms)
✔ runCli next prints recommendation and supports json output (2.995417ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (199.273792ms)
✔ generatePlanPrompt includes recorded human decisions (2.850625ms)
✔ runCli prompt prints Plan mode prompt and supports json output (5.6555ms)
✔ generateContextPack writes a portable AI handoff pack (149.223291ms)
✔ runCli pack writes and prints the context pack path (86.700625ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (210.836291ms)
✔ runCli memory prints memory summary and supports json output (70.184ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (72.294625ms)
✔ runCli reason prints reasoning path and supports json output (4.126375ms)
✔ generateUiDashboard writes a single-page pixel dashboard (283.78125ms)
✔ generateUiDashboard shows committed files when working tree is clean (361.900125ms)
✔ generateUiDashboard shows ShipSpec audit trail (71.954ms)
✔ generateUiDashboard shows self-improving loop state (189.79575ms)
✔ generateUiDashboard shows adaptive reasoning state (70.545041ms)
✔ generateUiDashboard shows operator state (268.630875ms)
✔ generateUiDashboard shows human decisions and review state (193.962083ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.201542ms)
✔ runCli ui prints generated dashboard path (68.980292ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.643834ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.36975ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.587916ms)
✔ doctorWorkspace reports repo readiness checks (29.8135ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.621792ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.385834ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.565167ms)
✔ runCli detect and configure print project detection output (1.847792ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.597625ms)
✔ runCli ci prints generated GitHub Actions path (1.403042ms)
✔ getSpecStatus reports active change files and required proposal sections (1.950792ms)
✔ validateChange passes for a generated spec (3.531042ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.883375ms)
✔ validateChange --ready requires verification evidence (1.755291ms)
✔ validateChange --ready passes after verification evidence exists (56.673042ms)
✔ runCli spec and validate print spec gate output (2.870667ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (212.674583ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (86.14475ms)
✔ runCli diff prints review-oriented Git and change status (86.872375ms)
✔ verifyChange runs fast checks by default and writes evidence (57.075583ms)
✔ verifyChange --full includes full-only checks (110.090291ms)
✔ completeChange blocks until verification evidence exists (1.944459ms)
✔ completeChange writes done report after verification evidence exists (79.676625ms)
✔ completeChange includes changed files in done report when Git is available (98.379042ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (143.29075ms)
✔ runCli report prints the report path (140.392416ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (217.882625ms)
✔ runCli release prints release handoff path (184.585792ms)
ℹ tests 90
ℹ suites 0
ℹ pass 90
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6866.015667
```

