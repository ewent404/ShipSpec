# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-23T15:02:14.890Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (6.606792ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.191167ms)
✔ startChange writes a richer OpenSpec proposal template (1.836167ms)
✔ runCli dispatches init, start, and status commands (2.123375ms)
✔ runCli supports help and version for an installable CLI (0.278708ms)
✔ runCli skill path prints source and default install target (0.334333ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.597708ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.393125ms)
✔ runSelfTest summarizes command health using an injectable runner (0.482417ms)
✔ runCli examples and self-test print summary output (1.300666ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.331042ms)
✔ runCli desktop prints generated desktop app path (2.137666ms)
✔ package is ready for TypeScript core and npm publishing (0.336458ms)
✔ TypeScript adapters describe ShipSpec integration points (1.297084ms)
✔ runCli adapters lists integration points (0.289333ms)
✔ intake creates a ShipSpec request intake record (1.298459ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.150375ms)
✔ room creates role files for the active ShipSpec change (2.595625ms)
✔ audit reports ShipSpec delivery trail readiness (3.709ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.284125ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.675459ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (380.126292ms)
✔ learnFromChange stores governed lessons and project patterns (72.714416ms)
✔ runCli reflect and learn expose self-improving loop commands (131.763042ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (117.681667ms)
✔ runLoop learns when verification and reflection are ready (394.375583ms)
✔ runCli loop exposes the one-pass self-improvement loop (123.263833ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (194.83125ms)
✔ runCli memory prints memory summary and supports json output (76.913292ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (75.382375ms)
✔ runCli reason prints reasoning path and supports json output (3.614375ms)
✔ generateUiDashboard writes a single-page pixel dashboard (296.187125ms)
✔ generateUiDashboard shows committed files when working tree is clean (351.290917ms)
✔ generateUiDashboard shows ShipSpec audit trail (116.694667ms)
✔ generateUiDashboard shows self-improving loop state (216.504ms)
✔ generateUiDashboard shows adaptive reasoning state (72.050791ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.388417ms)
✔ runCli ui prints generated dashboard path (69.332ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.790209ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.558542ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.314584ms)
✔ doctorWorkspace reports repo readiness checks (28.281541ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.554208ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.483666ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.68ms)
✔ runCli detect and configure print project detection output (1.803542ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.80475ms)
✔ runCli ci prints generated GitHub Actions path (2.496959ms)
✔ getSpecStatus reports active change files and required proposal sections (1.881916ms)
✔ validateChange passes for a generated spec (1.844834ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.114291ms)
✔ validateChange --ready requires verification evidence (1.759417ms)
✔ validateChange --ready passes after verification evidence exists (51.595292ms)
✔ runCli spec and validate print spec gate output (2.897333ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (212.457042ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (86.096291ms)
✔ runCli diff prints review-oriented Git and change status (85.7025ms)
✔ verifyChange runs fast checks by default and writes evidence (53.050584ms)
✔ verifyChange --full includes full-only checks (102.747875ms)
✔ completeChange blocks until verification evidence exists (2.124792ms)
✔ completeChange writes done report after verification evidence exists (76.390292ms)
✔ completeChange includes changed files in done report when Git is available (91.267ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (139.968458ms)
✔ runCli report prints the report path (136.058791ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (207.854292ms)
✔ runCli release prints release handoff path (183.776459ms)
ℹ tests 66
ℹ suites 0
ℹ pass 66
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 4313.402625
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

✔ initWorkspace creates repo-local delivery folders and default workflow (6.617417ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.036459ms)
✔ startChange writes a richer OpenSpec proposal template (1.875292ms)
✔ runCli dispatches init, start, and status commands (1.995959ms)
✔ runCli supports help and version for an installable CLI (0.247917ms)
✔ runCli skill path prints source and default install target (0.208083ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.259208ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.486ms)
✔ runSelfTest summarizes command health using an injectable runner (0.244917ms)
✔ runCli examples and self-test print summary output (1.329084ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.368833ms)
✔ runCli desktop prints generated desktop app path (2.037667ms)
✔ package is ready for TypeScript core and npm publishing (0.413333ms)
✔ TypeScript adapters describe ShipSpec integration points (0.455791ms)
✔ runCli adapters lists integration points (0.182875ms)
✔ intake creates a ShipSpec request intake record (1.498584ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.118584ms)
✔ room creates role files for the active ShipSpec change (3.231ms)
✔ audit reports ShipSpec delivery trail readiness (3.663042ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.2605ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.768041ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (261.152375ms)
✔ learnFromChange stores governed lessons and project patterns (77.785959ms)
✔ runCli reflect and learn expose self-improving loop commands (145.182917ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (127.620584ms)
✔ runLoop learns when verification and reflection are ready (406.01675ms)
✔ runCli loop exposes the one-pass self-improvement loop (116.675042ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (181.237583ms)
✔ runCli memory prints memory summary and supports json output (68.479625ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (67.2875ms)
✔ runCli reason prints reasoning path and supports json output (3.205459ms)
✔ generateUiDashboard writes a single-page pixel dashboard (261.615375ms)
✔ generateUiDashboard shows committed files when working tree is clean (328.924083ms)
✔ generateUiDashboard shows ShipSpec audit trail (68.747416ms)
✔ generateUiDashboard shows self-improving loop state (177.569458ms)
✔ generateUiDashboard shows adaptive reasoning state (78.219375ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.228875ms)
✔ runCli ui prints generated dashboard path (66.60375ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.521667ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.11775ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.280125ms)
✔ doctorWorkspace reports repo readiness checks (28.918583ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.521583ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.443625ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.677083ms)
✔ runCli detect and configure print project detection output (1.656ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.577834ms)
✔ runCli ci prints generated GitHub Actions path (1.462292ms)
✔ getSpecStatus reports active change files and required proposal sections (2.77875ms)
✔ validateChange passes for a generated spec (1.780125ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.883917ms)
✔ validateChange --ready requires verification evidence (1.627ms)
✔ validateChange --ready passes after verification evidence exists (50.890042ms)
✔ runCli spec and validate print spec gate output (2.254125ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (201.792ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (86.837625ms)
✔ runCli diff prints review-oriented Git and change status (83.540625ms)
✔ verifyChange runs fast checks by default and writes evidence (50.717875ms)
✔ verifyChange --full includes full-only checks (101.230042ms)
✔ completeChange blocks until verification evidence exists (4.580084ms)
✔ completeChange writes done report after verification evidence exists (72.456875ms)
✔ completeChange includes changed files in done report when Git is available (90.368917ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (133.971875ms)
✔ runCli report prints the report path (132.057541ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (199.828542ms)
✔ runCli release prints release handoff path (181.961542ms)
ℹ tests 66
ℹ suites 0
ℹ pass 66
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 4013.169667
```

