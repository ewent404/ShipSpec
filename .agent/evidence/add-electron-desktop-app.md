# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T09:50:44.560Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (6.985625ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.068375ms)
✔ startChange writes a richer OpenSpec proposal template (2.008542ms)
✔ runCli dispatches init, start, and status commands (2.097958ms)
✔ runCli supports help and version for an installable CLI (0.194375ms)
✔ runCli skill path prints source and default install target (0.262208ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.768917ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.358167ms)
✔ runSelfTest summarizes command health using an injectable runner (0.293959ms)
✔ runCli examples and self-test print summary output (1.354333ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.927916ms)
✔ runCli desktop prints generated desktop app path (0.865291ms)
✔ package is ready for TypeScript core and npm publishing (0.392167ms)
✔ TypeScript adapters describe ShipSpec integration points (0.495666ms)
✔ runCli adapters lists integration points (0.168583ms)
✔ intake creates a ShipSpec request intake record (1.287042ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.098ms)
✔ room creates role files for the active ShipSpec change (2.679875ms)
✔ audit reports ShipSpec delivery trail readiness (3.557708ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.017208ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.29925ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (375.535541ms)
✔ learnFromChange stores governed lessons and project patterns (84.40425ms)
✔ runCli reflect and learn expose self-improving loop commands (186.684291ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (125.007834ms)
✔ runLoop learns when verification and reflection are ready (386.557584ms)
✔ runCli loop exposes the one-pass self-improvement loop (119.352958ms)
✔ runOperation orchestrates safe delivery control loop (192.4065ms)
✔ runCli operate exposes safe operator command with json output (381.536083ms)
✔ recordDecision stores human decisions for the active change (2.810459ms)
✔ runCli decision records decisions and validates input (3.175959ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (196.376792ms)
✔ generatePlanPrompt includes recorded human decisions (2.777875ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.728917ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (197.527125ms)
✔ runCli memory prints memory summary and supports json output (68.11775ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (70.114958ms)
✔ runCli reason prints reasoning path and supports json output (3.328792ms)
✔ generateUiDashboard writes a single-page pixel dashboard (274.752083ms)
✔ generateUiDashboard shows committed files when working tree is clean (340.789084ms)
✔ generateUiDashboard shows ShipSpec audit trail (68.09325ms)
✔ generateUiDashboard shows self-improving loop state (182.594792ms)
✔ generateUiDashboard shows adaptive reasoning state (69.187666ms)
✔ generateUiDashboard shows operator state (252.321583ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.395708ms)
✔ runCli ui prints generated dashboard path (66.046541ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (4.215625ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.571375ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.317291ms)
✔ doctorWorkspace reports repo readiness checks (29.554ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.616791ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.66725ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.116916ms)
✔ runCli detect and configure print project detection output (3.410834ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.747417ms)
✔ runCli ci prints generated GitHub Actions path (1.4355ms)
✔ getSpecStatus reports active change files and required proposal sections (1.93575ms)
✔ validateChange passes for a generated spec (2.067792ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.037834ms)
✔ validateChange --ready requires verification evidence (1.623ms)
✔ validateChange --ready passes after verification evidence exists (56.593208ms)
✔ runCli spec and validate print spec gate output (2.379375ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (206.144917ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (83.918458ms)
✔ runCli diff prints review-oriented Git and change status (83.626875ms)
✔ verifyChange runs fast checks by default and writes evidence (53.895709ms)
✔ verifyChange --full includes full-only checks (104.398834ms)
✔ completeChange blocks until verification evidence exists (2.142375ms)
✔ completeChange writes done report after verification evidence exists (77.112208ms)
✔ completeChange includes changed files in done report when Git is available (92.026667ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (136.603667ms)
✔ runCli report prints the report path (133.238541ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (204.793958ms)
✔ runCli release prints release handoff path (181.961875ms)
ℹ tests 74
ℹ suites 0
ℹ pass 74
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 5262.14075
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

✔ initWorkspace creates repo-local delivery folders and default workflow (6.946125ms)
✔ startChange creates an OpenSpec change, task file, and active status (2.912333ms)
✔ startChange writes a richer OpenSpec proposal template (1.911125ms)
✔ runCli dispatches init, start, and status commands (2.052584ms)
✔ runCli supports help and version for an installable CLI (0.193417ms)
✔ runCli skill path prints source and default install target (0.226042ms)
✔ runCli skill install copies the bundled ShipSpec skill (2.34375ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.411375ms)
✔ runSelfTest summarizes command health using an injectable runner (0.266ms)
✔ runCli examples and self-test print summary output (1.604542ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.17425ms)
✔ runCli desktop prints generated desktop app path (0.919625ms)
✔ package is ready for TypeScript core and npm publishing (0.330958ms)
✔ TypeScript adapters describe ShipSpec integration points (0.415458ms)
✔ runCli adapters lists integration points (0.170792ms)
✔ intake creates a ShipSpec request intake record (1.590292ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.346ms)
✔ room creates role files for the active ShipSpec change (3.175291ms)
✔ audit reports ShipSpec delivery trail readiness (4.0295ms)
✔ deliver prepares intake, spec, contract, room, and validation (4.60325ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.447667ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (242.507ms)
✔ learnFromChange stores governed lessons and project patterns (68.122667ms)
✔ runCli reflect and learn expose self-improving loop commands (129.055375ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (120.970625ms)
✔ runLoop learns when verification and reflection are ready (386.646042ms)
✔ runCli loop exposes the one-pass self-improvement loop (123.669375ms)
✔ runOperation orchestrates safe delivery control loop (191.0235ms)
✔ runCli operate exposes safe operator command with json output (378.886708ms)
✔ recordDecision stores human decisions for the active change (2.88425ms)
✔ runCli decision records decisions and validates input (2.762333ms)
✔ generatePlanPrompt writes Codex Plan mode context from active ShipSpec state (189.709167ms)
✔ generatePlanPrompt includes recorded human decisions (2.58ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.35425ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (191.589875ms)
✔ runCli memory prints memory summary and supports json output (69.781791ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (70.115792ms)
✔ runCli reason prints reasoning path and supports json output (3.403542ms)
✔ generateUiDashboard writes a single-page pixel dashboard (273.068458ms)
✔ generateUiDashboard shows committed files when working tree is clean (338.771208ms)
✔ generateUiDashboard shows ShipSpec audit trail (70.683833ms)
✔ generateUiDashboard shows self-improving loop state (185.269125ms)
✔ generateUiDashboard shows adaptive reasoning state (79.327292ms)
✔ generateUiDashboard shows operator state (256.730166ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.292791ms)
✔ runCli ui prints generated dashboard path (65.492041ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.476667ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.872208ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (4.147583ms)
✔ doctorWorkspace reports repo readiness checks (28.243041ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.66675ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.402125ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.716708ms)
✔ runCli detect and configure print project detection output (1.651209ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.600625ms)
✔ runCli ci prints generated GitHub Actions path (1.619792ms)
✔ getSpecStatus reports active change files and required proposal sections (1.982875ms)
✔ validateChange passes for a generated spec (1.777875ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.8805ms)
✔ validateChange --ready requires verification evidence (1.614917ms)
✔ validateChange --ready passes after verification evidence exists (53.243958ms)
✔ runCli spec and validate print spec gate output (4.561333ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (201.496708ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (83.289875ms)
✔ runCli diff prints review-oriented Git and change status (83.630708ms)
✔ verifyChange runs fast checks by default and writes evidence (52.864041ms)
✔ verifyChange --full includes full-only checks (104.81525ms)
✔ completeChange blocks until verification evidence exists (2.827917ms)
✔ completeChange writes done report after verification evidence exists (76.386958ms)
✔ completeChange includes changed files in done report when Git is available (96.732584ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (136.548666ms)
✔ runCli report prints the report path (136.588791ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (207.956583ms)
✔ runCli release prints release handoff path (182.698667ms)
ℹ tests 74
ℹ suites 0
ℹ pass 74
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 5059.931417
```

