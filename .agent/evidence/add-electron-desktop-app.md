# Add Electron Desktop App Verification Evidence

Mode: full
Generated: 2026-06-24T13:41:52.159Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.540709ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.149417ms)
✔ startChange writes a richer OpenSpec proposal template (2.086292ms)
✔ runCli dispatches init, start, and status commands (2.341791ms)
✔ runCli quickstart prepares the low-ceremony project path (83.274292ms)
✔ runCli quickstart --light avoids agent ceremony (83.254417ms)
✔ runCli with no args shows the operator guide instead of raw help (3.097958ms)
✔ runCli routes plain text to quickstart (73.9855ms)
✔ runCli share aliases pack (81.501292ms)
✔ runCli ship runs ready verification, validation, and report (123.961667ms)
✔ runCli supports help and version for an installable CLI (0.267583ms)
✔ runCli skill path prints source and default install target (0.224625ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.1625ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.427417ms)
✔ runSelfTest summarizes command health using an injectable runner (0.200541ms)
✔ runCli examples and self-test print summary output (1.532625ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.177875ms)
✔ runCli desktop prints generated desktop app path (0.965041ms)
✔ package is ready for TypeScript core and npm publishing (0.410416ms)
✔ TypeScript adapters describe ShipSpec integration points (1.622042ms)
✔ runCli adapters lists integration points (0.320291ms)
✔ intake creates a ShipSpec request intake record (1.445333ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.080667ms)
✔ room creates role files for the active ShipSpec change (2.926666ms)
✔ audit reports ShipSpec delivery trail readiness (3.413625ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.1955ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.636041ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (396.450041ms)
✔ learnFromChange stores governed lessons and project patterns (78.956125ms)
✔ runCli reflect and learn expose self-improving loop commands (173.339375ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (149.40975ms)
✔ runLoop learns when verification and reflection are ready (433.642834ms)
✔ runCli loop exposes the one-pass self-improvement loop (142.82075ms)
✔ runOperation orchestrates safe delivery control loop (225.463333ms)
✔ runCli operate exposes safe operator command with json output (481.997292ms)
✔ recordDecision stores human decisions for the active change (2.697708ms)
✔ runCli decision records decisions and validates input (2.796042ms)
✔ generateReview writes a decision-aware review checklist (163.559666ms)
✔ runCli review exposes decision-aware review checklist (169.616667ms)
✔ getNextRecommendation guides users with no active change (1.867541ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.736ms)
✔ runCli next prints recommendation and supports json output (3.878083ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (230.208792ms)
✔ generatePlanPrompt includes recorded human decisions (2.981916ms)
✔ runCli prompt prints Plan mode prompt and supports json output (6.692416ms)
✔ generateContextPack writes a portable AI handoff pack (182.032958ms)
✔ runCli pack writes and prints the context pack path (81.862083ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (257.489042ms)
✔ runCli memory prints memory summary and supports json output (128.163625ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (77.775417ms)
✔ runCli reason prints reasoning path and supports json output (3.723833ms)
✔ generateUiDashboard writes a single-page pixel dashboard (318.673708ms)
✔ generateUiDashboard shows committed files when working tree is clean (414.274ms)
✔ generateUiDashboard shows ShipSpec audit trail (85.627083ms)
✔ generateUiDashboard shows self-improving loop state (224.701625ms)
✔ generateUiDashboard shows adaptive reasoning state (71.342083ms)
✔ generateUiDashboard shows operator state (300.747541ms)
✔ generateUiDashboard shows human decisions and review state (242.093291ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.435792ms)
✔ runCli ui prints generated dashboard path (86.142542ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (3.721125ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.043666ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.691584ms)
✔ doctorWorkspace reports repo readiness checks (33.021125ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.847083ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.59175ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (2.17225ms)
✔ runCli detect and configure print project detection output (2.077542ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.89775ms)
✔ runCli ci prints generated GitHub Actions path (1.927792ms)
✔ getSpecStatus reports active change files and required proposal sections (2.468833ms)
✔ validateChange passes for a generated spec (4.290583ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.120709ms)
✔ validateChange --ready requires verification evidence (1.702167ms)
✔ validateChange --ready passes after verification evidence exists (83.024583ms)
✔ runCli spec and validate print spec gate output (5.200416ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (281.615041ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (103.594583ms)
✔ runCli diff prints review-oriented Git and change status (91.28875ms)
✔ verifyChange runs fast checks by default and writes evidence (60.239417ms)
✔ verifyChange --full includes full-only checks (118.783041ms)
✔ completeChange blocks until verification evidence exists (2.361834ms)
✔ completeChange writes done report after verification evidence exists (86.535208ms)
✔ completeChange includes changed files in done report when Git is available (101.157417ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (154.67425ms)
✔ runCli report prints the report path (152.437584ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (213.976708ms)
✔ runCli release prints release handoff path (188.070958ms)
ℹ tests 88
ℹ suites 0
ℹ pass 88
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 7450.501083
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.557375ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.59925ms)
✔ startChange writes a richer OpenSpec proposal template (2.311417ms)
✔ runCli dispatches init, start, and status commands (2.708625ms)
✔ runCli quickstart prepares the low-ceremony project path (92.572084ms)
✔ runCli quickstart --light avoids agent ceremony (83.762834ms)
✔ runCli with no args shows the operator guide instead of raw help (2.99725ms)
✔ runCli routes plain text to quickstart (80.873709ms)
✔ runCli share aliases pack (72.917458ms)
✔ runCli ship runs ready verification, validation, and report (128.54725ms)
✔ runCli supports help and version for an installable CLI (0.331459ms)
✔ runCli skill path prints source and default install target (0.346292ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.619333ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.792958ms)
✔ runSelfTest summarizes command health using an injectable runner (0.293458ms)
✔ runCli examples and self-test print summary output (1.376542ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (2.254042ms)
✔ runCli desktop prints generated desktop app path (1.047709ms)
✔ package is ready for TypeScript core and npm publishing (0.866416ms)
✔ TypeScript adapters describe ShipSpec integration points (0.402167ms)
✔ runCli adapters lists integration points (0.164542ms)
✔ intake creates a ShipSpec request intake record (1.305167ms)
✔ contract creates a delivery contract for the active ShipSpec change (1.979959ms)
✔ room creates role files for the active ShipSpec change (2.954709ms)
✔ audit reports ShipSpec delivery trail readiness (3.599875ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.371333ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (5.316709ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (395.69925ms)
✔ learnFromChange stores governed lessons and project patterns (82.261959ms)
✔ runCli reflect and learn expose self-improving loop commands (172.995083ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (136.437583ms)
✔ runLoop learns when verification and reflection are ready (460.176458ms)
✔ runCli loop exposes the one-pass self-improvement loop (153.773583ms)
✔ runOperation orchestrates safe delivery control loop (217.197375ms)
✔ runCli operate exposes safe operator command with json output (390.687875ms)
✔ recordDecision stores human decisions for the active change (2.454541ms)
✔ runCli decision records decisions and validates input (2.49ms)
✔ generateReview writes a decision-aware review checklist (166.009958ms)
✔ runCli review exposes decision-aware review checklist (165.236916ms)
✔ getNextRecommendation guides users with no active change (1.69975ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.885458ms)
✔ runCli next prints recommendation and supports json output (4.25025ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (210.307875ms)
✔ generatePlanPrompt includes recorded human decisions (3.67ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.624583ms)
✔ generateContextPack writes a portable AI handoff pack (147.730708ms)
✔ runCli pack writes and prints the context pack path (72.027459ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (696.352209ms)
✔ runCli memory prints memory summary and supports json output (204.147875ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (101.085042ms)
✔ runCli reason prints reasoning path and supports json output (14.39ms)
✔ generateUiDashboard writes a single-page pixel dashboard (355.736583ms)
✔ generateUiDashboard shows committed files when working tree is clean (660.872375ms)
✔ generateUiDashboard shows ShipSpec audit trail (83.667333ms)
✔ generateUiDashboard shows self-improving loop state (239.320959ms)
✔ generateUiDashboard shows adaptive reasoning state (74.542125ms)
✔ generateUiDashboard shows operator state (284.178208ms)
✔ generateUiDashboard shows human decisions and review state (250.814ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.20375ms)
✔ runCli ui prints generated dashboard path (74.509208ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.66675ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.818542ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.53375ms)
✔ doctorWorkspace reports repo readiness checks (31.410416ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.680541ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.626375ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.699125ms)
✔ runCli detect and configure print project detection output (1.84975ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.866625ms)
✔ runCli ci prints generated GitHub Actions path (1.4545ms)
✔ getSpecStatus reports active change files and required proposal sections (1.843708ms)
✔ validateChange passes for a generated spec (1.748917ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.053125ms)
✔ validateChange --ready requires verification evidence (1.771916ms)
✔ validateChange --ready passes after verification evidence exists (56.508459ms)
✔ runCli spec and validate print spec gate output (2.440125ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (219.311084ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (92.429ms)
✔ runCli diff prints review-oriented Git and change status (90.935209ms)
✔ verifyChange runs fast checks by default and writes evidence (57.894959ms)
✔ verifyChange --full includes full-only checks (111.912ms)
✔ completeChange blocks until verification evidence exists (1.993458ms)
✔ completeChange writes done report after verification evidence exists (87.779083ms)
✔ completeChange includes changed files in done report when Git is available (97.011791ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (143.019042ms)
✔ runCli report prints the report path (147.181167ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (217.448292ms)
✔ runCli release prints release handoff path (203.687334ms)
ℹ tests 88
ℹ suites 0
ℹ pass 88
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 8034.512667
```

