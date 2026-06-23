# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-23T16:26:07.077Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (8.500417ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.818125ms)
✔ startChange writes a richer OpenSpec proposal template (2.743583ms)
✔ runCli dispatches init, start, and status commands (2.6605ms)
✔ runCli supports help and version for an installable CLI (0.422125ms)
✔ runCli skill path prints source and default install target (0.248ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.820583ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (2.058042ms)
✔ runSelfTest summarizes command health using an injectable runner (0.404416ms)
✔ runCli examples and self-test print summary output (1.713791ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.899458ms)
✔ runCli desktop prints generated desktop app path (2.312958ms)
✔ package is ready for TypeScript core and npm publishing (0.596875ms)
✔ TypeScript adapters describe ShipSpec integration points (1.474792ms)
✔ runCli adapters lists integration points (0.310625ms)
✔ intake creates a ShipSpec request intake record (1.788625ms)
✔ contract creates a delivery contract for the active ShipSpec change (4.025708ms)
✔ room creates role files for the active ShipSpec change (3.393583ms)
✔ audit reports ShipSpec delivery trail readiness (5.62525ms)
✔ deliver prepares intake, spec, contract, room, and validation (5.169917ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.858708ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (470.741084ms)
✔ learnFromChange stores governed lessons and project patterns (87.952084ms)
✔ runCli reflect and learn expose self-improving loop commands (189.38ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (149.913084ms)
✔ runLoop learns when verification and reflection are ready (536.861291ms)
✔ runCli loop exposes the one-pass self-improvement loop (153.070042ms)
✔ runOperation orchestrates safe delivery control loop (279.531208ms)
✔ runCli operate exposes safe operator command with json output (519.208375ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (227.436791ms)
✔ runCli memory prints memory summary and supports json output (84.338875ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (85.706334ms)
✔ runCli reason prints reasoning path and supports json output (3.846208ms)
✔ generateUiDashboard writes a single-page pixel dashboard (344.2195ms)
✔ generateUiDashboard shows committed files when working tree is clean (428.840791ms)
✔ generateUiDashboard shows ShipSpec audit trail (86.303667ms)
✔ generateUiDashboard shows self-improving loop state (228.381208ms)
✔ generateUiDashboard shows adaptive reasoning state (90.052208ms)
✔ generateUiDashboard shows operator state (310.900958ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.652917ms)
✔ runCli ui prints generated dashboard path (85.218083ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.684875ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.572084ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.943208ms)
✔ doctorWorkspace reports repo readiness checks (36.274875ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.74625ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.690417ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.098708ms)
✔ runCli detect and configure print project detection output (2.443959ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.960834ms)
✔ runCli ci prints generated GitHub Actions path (1.74ms)
✔ getSpecStatus reports active change files and required proposal sections (2.18275ms)
✔ validateChange passes for a generated spec (2.492083ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.137917ms)
✔ validateChange --ready requires verification evidence (2.019625ms)
✔ validateChange --ready passes after verification evidence exists (62.233125ms)
✔ runCli spec and validate print spec gate output (3.1925ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (251.005583ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (104.488125ms)
✔ runCli diff prints review-oriented Git and change status (107.615125ms)
✔ verifyChange runs fast checks by default and writes evidence (68.143208ms)
✔ verifyChange --full includes full-only checks (118.061583ms)
✔ completeChange blocks until verification evidence exists (2.271ms)
✔ completeChange writes done report after verification evidence exists (88.871625ms)
✔ completeChange includes changed files in done report when Git is available (108.579ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (170.680208ms)
✔ runCli report prints the report path (170.60475ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (263.543875ms)
✔ runCli release prints release handoff path (236.304375ms)
ℹ tests 69
ℹ suites 0
ℹ pass 69
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6353.141958
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.604667ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.164709ms)
✔ startChange writes a richer OpenSpec proposal template (2.100833ms)
✔ runCli dispatches init, start, and status commands (2.102917ms)
✔ runCli supports help and version for an installable CLI (0.22275ms)
✔ runCli skill path prints source and default install target (0.359208ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.05725ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.6605ms)
✔ runSelfTest summarizes command health using an injectable runner (0.293833ms)
✔ runCli examples and self-test print summary output (1.4195ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.379667ms)
✔ runCli desktop prints generated desktop app path (1.887791ms)
✔ package is ready for TypeScript core and npm publishing (0.427167ms)
✔ TypeScript adapters describe ShipSpec integration points (0.6595ms)
✔ runCli adapters lists integration points (0.480041ms)
✔ intake creates a ShipSpec request intake record (1.405875ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.419041ms)
✔ room creates role files for the active ShipSpec change (2.969125ms)
✔ audit reports ShipSpec delivery trail readiness (4.088792ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.348375ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.940625ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (404.898ms)
✔ learnFromChange stores governed lessons and project patterns (85.380375ms)
✔ runCli reflect and learn expose self-improving loop commands (167.676917ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (145.544375ms)
✔ runLoop learns when verification and reflection are ready (513.270875ms)
✔ runCli loop exposes the one-pass self-improvement loop (143.109916ms)
✔ runOperation orchestrates safe delivery control loop (229.60425ms)
✔ runCli operate exposes safe operator command with json output (467.639875ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (236.391208ms)
✔ runCli memory prints memory summary and supports json output (90.654792ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (89.606417ms)
✔ runCli reason prints reasoning path and supports json output (4.579416ms)
✔ generateUiDashboard writes a single-page pixel dashboard (358.321375ms)
✔ generateUiDashboard shows committed files when working tree is clean (431.487375ms)
✔ generateUiDashboard shows ShipSpec audit trail (85.723875ms)
✔ generateUiDashboard shows self-improving loop state (231.950375ms)
✔ generateUiDashboard shows adaptive reasoning state (90.698167ms)
✔ generateUiDashboard shows operator state (315.148041ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.507084ms)
✔ runCli ui prints generated dashboard path (85.510209ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.536458ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (8.989709ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (6.310333ms)
✔ doctorWorkspace reports repo readiness checks (35.962083ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.676333ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.767208ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.271584ms)
✔ runCli detect and configure print project detection output (2.031625ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (2.196292ms)
✔ runCli ci prints generated GitHub Actions path (1.73125ms)
✔ getSpecStatus reports active change files and required proposal sections (2.268208ms)
✔ validateChange passes for a generated spec (2.556708ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.062583ms)
✔ validateChange --ready requires verification evidence (2.102334ms)
✔ validateChange --ready passes after verification evidence exists (62.015625ms)
✔ runCli spec and validate print spec gate output (2.677084ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (252.488667ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (105.81725ms)
✔ runCli diff prints review-oriented Git and change status (107.075708ms)
✔ verifyChange runs fast checks by default and writes evidence (64.837667ms)
✔ verifyChange --full includes full-only checks (118.123083ms)
✔ completeChange blocks until verification evidence exists (2.247917ms)
✔ completeChange writes done report after verification evidence exists (86.883292ms)
✔ completeChange includes changed files in done report when Git is available (113.98525ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (165.552167ms)
✔ runCli report prints the report path (164.2105ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (257.988125ms)
✔ runCli release prints release handoff path (224.89775ms)
ℹ tests 69
ℹ suites 0
ℹ pass 69
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 6126.468375
```

