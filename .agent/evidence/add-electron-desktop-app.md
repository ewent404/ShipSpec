# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-23T17:31:07.374Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.361042ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.60175ms)
✔ startChange writes a richer OpenSpec proposal template (2.399958ms)
✔ runCli dispatches init, start, and status commands (3.187875ms)
✔ runCli supports help and version for an installable CLI (0.27025ms)
✔ runCli skill path prints source and default install target (0.328125ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.123125ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.770542ms)
✔ runSelfTest summarizes command health using an injectable runner (0.26125ms)
✔ runCli examples and self-test print summary output (2.702417ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (3.938875ms)
✔ runCli desktop prints generated desktop app path (11.521291ms)
✔ package is ready for TypeScript core and npm publishing (0.727667ms)
✔ TypeScript adapters describe ShipSpec integration points (1.374125ms)
✔ runCli adapters lists integration points (0.313459ms)
✔ intake creates a ShipSpec request intake record (1.908416ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.979417ms)
✔ room creates role files for the active ShipSpec change (9.093083ms)
✔ audit reports ShipSpec delivery trail readiness (4.543ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.67275ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.259334ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (455.458875ms)
✔ learnFromChange stores governed lessons and project patterns (85.10925ms)
✔ runCli reflect and learn expose self-improving loop commands (168.355ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (144.031917ms)
✔ runLoop learns when verification and reflection are ready (469.095125ms)
✔ runCli loop exposes the one-pass self-improvement loop (140.457667ms)
✔ runOperation orchestrates safe delivery control loop (231.441458ms)
✔ runCli operate exposes safe operator command with json output (526.802291ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (235.696792ms)
✔ runCli prompt prints Plan mode prompt and supports json output (4.91975ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (234.594708ms)
✔ runCli memory prints memory summary and supports json output (88.927792ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (89.894625ms)
✔ runCli reason prints reasoning path and supports json output (3.9455ms)
✔ generateUiDashboard writes a single-page pixel dashboard (426.964666ms)
✔ generateUiDashboard shows committed files when working tree is clean (421.871375ms)
✔ generateUiDashboard shows ShipSpec audit trail (83.853125ms)
✔ generateUiDashboard shows self-improving loop state (213.351667ms)
✔ generateUiDashboard shows adaptive reasoning state (87.60525ms)
✔ generateUiDashboard shows operator state (306.299625ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.21475ms)
✔ runCli ui prints generated dashboard path (89.236334ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (4.383ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.900958ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.784542ms)
✔ doctorWorkspace reports repo readiness checks (39.197917ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.639208ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.47625ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.943917ms)
✔ runCli detect and configure print project detection output (2.398833ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (4.0785ms)
✔ runCli ci prints generated GitHub Actions path (2.048167ms)
✔ getSpecStatus reports active change files and required proposal sections (2.259834ms)
✔ validateChange passes for a generated spec (2.321708ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.142583ms)
✔ validateChange --ready requires verification evidence (2.180541ms)
✔ validateChange --ready passes after verification evidence exists (80.056583ms)
✔ runCli spec and validate print spec gate output (5.81475ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (314.426958ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (122.704ms)
✔ runCli diff prints review-oriented Git and change status (105.233208ms)
✔ verifyChange runs fast checks by default and writes evidence (61.264041ms)
✔ verifyChange --full includes full-only checks (111.183375ms)
✔ completeChange blocks until verification evidence exists (2.964459ms)
✔ completeChange writes done report after verification evidence exists (81.527167ms)
✔ completeChange includes changed files in done report when Git is available (100.862083ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (150.737416ms)
✔ runCli report prints the report path (151.764292ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (235.8075ms)
✔ runCli release prints release handoff path (209.727375ms)
ℹ tests 71
ℹ suites 0
ℹ pass 71
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6497.761209
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.407916ms)
✔ startChange creates an OpenSpec change, task file, and active status (21.810042ms)
✔ startChange writes a richer OpenSpec proposal template (2.235791ms)
✔ runCli dispatches init, start, and status commands (2.190708ms)
✔ runCli supports help and version for an installable CLI (0.1995ms)
✔ runCli skill path prints source and default install target (0.256542ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.763958ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.522917ms)
✔ runSelfTest summarizes command health using an injectable runner (0.23775ms)
✔ runCli examples and self-test print summary output (1.552375ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.506667ms)
✔ runCli desktop prints generated desktop app path (1.28625ms)
✔ package is ready for TypeScript core and npm publishing (0.622709ms)
✔ TypeScript adapters describe ShipSpec integration points (0.529458ms)
✔ runCli adapters lists integration points (0.232542ms)
✔ intake creates a ShipSpec request intake record (1.508208ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.530292ms)
✔ room creates role files for the active ShipSpec change (2.929667ms)
✔ audit reports ShipSpec delivery trail readiness (4.009459ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.382875ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.975291ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (287.462625ms)
✔ learnFromChange stores governed lessons and project patterns (80.764375ms)
✔ runCli reflect and learn expose self-improving loop commands (155.587917ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (134.058542ms)
✔ runLoop learns when verification and reflection are ready (437.830084ms)
✔ runCli loop exposes the one-pass self-improvement loop (130.784042ms)
✔ runOperation orchestrates safe delivery control loop (212.869167ms)
✔ runCli operate exposes safe operator command with json output (422.503917ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (208.604792ms)
✔ runCli prompt prints Plan mode prompt and supports json output (4.393375ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (204.690083ms)
✔ runCli memory prints memory summary and supports json output (76.43175ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (76.011916ms)
✔ runCli reason prints reasoning path and supports json output (3.512417ms)
✔ generateUiDashboard writes a single-page pixel dashboard (301.842958ms)
✔ generateUiDashboard shows committed files when working tree is clean (388.87475ms)
✔ generateUiDashboard shows ShipSpec audit trail (76.70075ms)
✔ generateUiDashboard shows self-improving loop state (207.695041ms)
✔ generateUiDashboard shows adaptive reasoning state (77.7995ms)
✔ generateUiDashboard shows operator state (292.428583ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.450333ms)
✔ runCli ui prints generated dashboard path (74.094042ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (5.204584ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.707625ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.644833ms)
✔ doctorWorkspace reports repo readiness checks (31.9075ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.711ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.783667ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.983166ms)
✔ runCli detect and configure print project detection output (1.719916ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.657916ms)
✔ runCli ci prints generated GitHub Actions path (1.599584ms)
✔ getSpecStatus reports active change files and required proposal sections (1.960041ms)
✔ validateChange passes for a generated spec (2.064125ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.902042ms)
✔ validateChange --ready requires verification evidence (1.596833ms)
✔ validateChange --ready passes after verification evidence exists (57.755667ms)
✔ runCli spec and validate print spec gate output (2.921833ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (231.031958ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (97.537375ms)
✔ runCli diff prints review-oriented Git and change status (97.622833ms)
✔ verifyChange runs fast checks by default and writes evidence (58.390917ms)
✔ verifyChange --full includes full-only checks (114.169583ms)
✔ completeChange blocks until verification evidence exists (2.403042ms)
✔ completeChange writes done report after verification evidence exists (83.522875ms)
✔ completeChange includes changed files in done report when Git is available (100.593583ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (151.639875ms)
✔ runCli report prints the report path (163.809417ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (238.988791ms)
✔ runCli release prints release handoff path (257.64475ms)
ℹ tests 71
ℹ suites 0
ℹ pass 71
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 5735.578
```

