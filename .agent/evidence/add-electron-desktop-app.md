# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-23T13:56:49.718Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (6.853625ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.103958ms)
✔ startChange writes a richer OpenSpec proposal template (1.921708ms)
✔ runCli dispatches init, start, and status commands (2.2775ms)
✔ runCli supports help and version for an installable CLI (0.250084ms)
✔ runCli skill path prints source and default install target (0.240542ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.636916ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.39025ms)
✔ runSelfTest summarizes command health using an injectable runner (0.300666ms)
✔ runCli examples and self-test print summary output (1.362083ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.294917ms)
✔ runCli desktop prints generated desktop app path (0.921875ms)
✔ package is ready for TypeScript core and npm publishing (0.316167ms)
✔ TypeScript adapters describe ShipSpec integration points (1.793459ms)
✔ runCli adapters lists integration points (0.1875ms)
✔ intake creates a ShipSpec request intake record (1.434083ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.023708ms)
✔ room creates role files for the active ShipSpec change (2.6625ms)
✔ audit reports ShipSpec delivery trail readiness (3.598625ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.427834ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (377.090875ms)
✔ learnFromChange stores governed lessons and project patterns (74.668833ms)
✔ runCli reflect and learn expose self-improving loop commands (144.46125ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (131.507291ms)
✔ runLoop learns when verification and reflection are ready (427.21225ms)
✔ runCli loop exposes the one-pass self-improvement loop (128.580625ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (200.646041ms)
✔ runCli memory prints memory summary and supports json output (75.757375ms)
✔ generateUiDashboard writes a single-page pixel dashboard (298.073334ms)
✔ generateUiDashboard shows committed files when working tree is clean (385.57075ms)
✔ generateUiDashboard shows ShipSpec audit trail (81.268708ms)
✔ generateUiDashboard shows self-improving loop state (215.297084ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.29125ms)
✔ runCli ui prints generated dashboard path (76.535791ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.304ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.101833ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.466791ms)
✔ doctorWorkspace reports repo readiness checks (32.7645ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.866ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (1.72875ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.612ms)
✔ runCli detect and configure print project detection output (2.058375ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.769084ms)
✔ runCli ci prints generated GitHub Actions path (1.398125ms)
✔ getSpecStatus reports active change files and required proposal sections (1.986042ms)
✔ validateChange passes for a generated spec (1.923125ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.294208ms)
✔ validateChange --ready requires verification evidence (1.746958ms)
✔ validateChange --ready passes after verification evidence exists (57.284708ms)
✔ runCli spec and validate print spec gate output (2.826083ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (231.4865ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (91.119708ms)
✔ runCli diff prints review-oriented Git and change status (90.903ms)
✔ verifyChange runs fast checks by default and writes evidence (55.941ms)
✔ verifyChange --full includes full-only checks (109.568ms)
✔ completeChange blocks until verification evidence exists (3.811334ms)
✔ completeChange writes done report after verification evidence exists (80.447458ms)
✔ completeChange includes changed files in done report when Git is available (100.803917ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (142.693417ms)
✔ runCli report prints the report path (142.522917ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (216.912958ms)
✔ runCli release prints release handoff path (190.838583ms)
ℹ tests 62
ℹ suites 0
ℹ pass 62
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 4331.47
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

✔ initWorkspace creates repo-local delivery folders and default workflow (6.748667ms)
✔ startChange creates an OpenSpec change, task file, and active status (2.914042ms)
✔ startChange writes a richer OpenSpec proposal template (2.075791ms)
✔ runCli dispatches init, start, and status commands (1.928ms)
✔ runCli supports help and version for an installable CLI (0.218791ms)
✔ runCli skill path prints source and default install target (0.222833ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.301208ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.340917ms)
✔ runSelfTest summarizes command health using an injectable runner (0.249958ms)
✔ runCli examples and self-test print summary output (1.357166ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.417792ms)
✔ runCli desktop prints generated desktop app path (0.878125ms)
✔ package is ready for TypeScript core and npm publishing (0.972958ms)
✔ TypeScript adapters describe ShipSpec integration points (0.40325ms)
✔ runCli adapters lists integration points (0.183334ms)
✔ intake creates a ShipSpec request intake record (1.286166ms)
✔ contract creates a delivery contract for the active ShipSpec change (1.969209ms)
✔ room creates role files for the active ShipSpec change (2.622708ms)
✔ audit reports ShipSpec delivery trail readiness (3.507583ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.438917ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (263.489917ms)
✔ learnFromChange stores governed lessons and project patterns (73.192792ms)
✔ runCli reflect and learn expose self-improving loop commands (144.414209ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (126.561292ms)
✔ runLoop learns when verification and reflection are ready (421.891542ms)
✔ runCli loop exposes the one-pass self-improvement loop (138.525583ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (213.447958ms)
✔ runCli memory prints memory summary and supports json output (81.119875ms)
✔ generateUiDashboard writes a single-page pixel dashboard (318.40525ms)
✔ generateUiDashboard shows committed files when working tree is clean (367.735667ms)
✔ generateUiDashboard shows ShipSpec audit trail (75.04025ms)
✔ generateUiDashboard shows self-improving loop state (205.17975ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.027083ms)
✔ runCli ui prints generated dashboard path (68.078042ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.977ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.774334ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.384333ms)
✔ doctorWorkspace reports repo readiness checks (29.323209ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.65575ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.453208ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.81825ms)
✔ runCli detect and configure print project detection output (1.742917ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.795167ms)
✔ runCli ci prints generated GitHub Actions path (1.39275ms)
✔ getSpecStatus reports active change files and required proposal sections (1.925417ms)
✔ validateChange passes for a generated spec (1.72425ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.908875ms)
✔ validateChange --ready requires verification evidence (1.8405ms)
✔ validateChange --ready passes after verification evidence exists (57.186625ms)
✔ runCli spec and validate print spec gate output (2.381375ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (215.01ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (86.799708ms)
✔ runCli diff prints review-oriented Git and change status (87.091125ms)
✔ verifyChange runs fast checks by default and writes evidence (55.10225ms)
✔ verifyChange --full includes full-only checks (108.526916ms)
✔ completeChange blocks until verification evidence exists (2.513917ms)
✔ completeChange writes done report after verification evidence exists (82.740916ms)
✔ completeChange includes changed files in done report when Git is available (99.298458ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (147.955375ms)
✔ runCli report prints the report path (141.613084ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (216.702917ms)
✔ runCli release prints release handoff path (191.96025ms)
ℹ tests 62
ℹ suites 0
ℹ pass 62
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 4173.626625
```

