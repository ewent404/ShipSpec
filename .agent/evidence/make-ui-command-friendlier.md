# Make UI command friendlier Verification Evidence

Mode: full
Generated: 2026-06-26T08:02:00.052Z

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

✔ initWorkspace creates repo-local delivery folders and default workflow (9.1665ms)
✔ startChange creates an OpenSpec change, task file, and active status (15.399875ms)
✔ startChange writes a richer OpenSpec proposal template (2.602291ms)
✔ runCli dispatches init, start, and status commands (2.57825ms)
✔ runCli quickstart prepares the low-ceremony project path (91.031917ms)
✔ runCli quickstart --light avoids agent ceremony (87.476459ms)
✔ runMission prepares an AGI-style mission for a new request (387.635541ms)
✔ runMission continues an active change and prepares review when evidence passes (517.043708ms)
✔ runCli with no args shows the operator guide instead of raw help (79.783625ms)
✔ runCli routes plain text to quickstart (85.508541ms)
✔ runCli share aliases pack (78.177666ms)
✔ runCli ask aliases share (87.69675ms)
✔ runCli fix aliases light quickstart (84.909625ms)
✔ runCli ship runs ready verification, validation, and report (213.199542ms)
✔ runCli supports help and version for an installable CLI (1.034209ms)
✔ runCli clean previews safe dummy ShipSpec artifacts without deleting them (23.851583ms)
✔ runCli clean --apply removes only safe dummy ShipSpec artifacts (20.270042ms)
✔ runCli clean reports when nothing is safe to clean and appears only in advanced help (2.767167ms)
✔ runCli supports the AGI-style run command (419.372833ms)
✔ runCli skill path prints source and default install target (0.328333ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.426167ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.492ms)
✔ runSelfTest summarizes command health using an injectable runner (0.212ms)
✔ runCli examples and self-test print summary output (1.27375ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.308209ms)
✔ runCli desktop prints generated desktop app path (0.916916ms)
✔ package is ready for TypeScript core and npm publishing (0.454791ms)
✔ TypeScript adapters describe ShipSpec integration points (1.326209ms)
✔ runCli adapters lists integration points (0.228125ms)
✔ intake creates a ShipSpec request intake record (1.896417ms)
✔ contract creates a delivery contract for the active ShipSpec change (2.98625ms)
✔ room creates role files for the active ShipSpec change (2.981416ms)
✔ audit reports ShipSpec delivery trail readiness (3.438291ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.26725ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.635666ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (427.010708ms)
✔ learnFromChange stores governed lessons and project patterns (152.3185ms)
✔ learnFromChange writes structured smart memory from local ShipSpec artifacts (451.982792ms)
✔ runCli reflect and learn expose self-improving loop commands (208.252166ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (160.836417ms)
✔ runLoop learns when verification and reflection are ready (569.606584ms)
✔ runCli loop exposes the one-pass self-improvement loop (132.399958ms)
✔ runOperation orchestrates safe delivery control loop (236.732292ms)
✔ runCli operate exposes safe operator command with json output (456.704667ms)
✔ recordDecision stores human decisions for the active change (2.764584ms)
✔ runCli decision records decisions and validates input (2.669167ms)
✔ generateReview writes a decision-aware review checklist (167.3515ms)
✔ runCli review exposes decision-aware review checklist (153.862708ms)
✔ getNextRecommendation guides users with no active change (1.416875ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.274583ms)
✔ runCli next prints recommendation and supports json output (3.319083ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (223.337792ms)
✔ generatePlanPrompt includes recorded human decisions (2.875459ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.420459ms)
✔ generateCodexHandoff prints a compact no-copy handoff from mission files (358.691334ms)
✔ runCli codex prints no-copy handoff and appears in help (474.231042ms)
✔ generateContextPack writes a portable AI handoff pack (163.229083ms)
✔ generateContextPack flags high-risk auth changes without full proof (121.812167ms)
✔ runCli pack writes and prints the context pack path (79.742458ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (320.306125ms)
✔ runCli memory prints memory summary, smart memory, and supports json output (411.436208ms)
✔ generateCodexHandoff includes smart memory for the next feature (878.918666ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (151.350584ms)
✔ runCli reason prints reasoning path and supports json output (4.904833ms)
✔ generateUiDashboard writes a single-page pixel dashboard (313.057542ms)
✔ generateUiDashboard shows committed files when working tree is clean (397.745125ms)
✔ generateUiDashboard shows ShipSpec audit trail (91.779167ms)
✔ generateUiDashboard shows self-improving loop state (224.672959ms)
✔ generateUiDashboard shows adaptive reasoning state (88.163625ms)
✔ generateUiDashboard shows operator state (329.866334ms)
✔ generateUiDashboard shows human decisions and review state (228.284417ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.156667ms)
✔ runCli ui prints generated dashboard path (76.032584ms)
✔ runCli ui --open opens the generated dashboard (79.35275ms)
✔ runCli run --open starts a mission and opens the dashboard (363.595667ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.734167ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (4.983791ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.562917ms)
✔ doctorWorkspace reports repo readiness checks (34.85525ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.684416ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.444208ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.898291ms)
✔ runCli detect and configure print project detection output (1.886542ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (3.521584ms)
✔ runCli ci prints generated GitHub Actions path (1.562167ms)
✔ getSpecStatus reports active change files and required proposal sections (1.947625ms)
✔ validateChange passes for a generated spec (1.946708ms)
✔ validateChange fails when proposal is missing acceptance criteria (2.00925ms)
✔ validateChange --ready requires verification evidence (1.7425ms)
✔ validateChange --ready passes after verification evidence exists (60.009166ms)
✔ runCli spec and validate print spec gate output (2.823375ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (239.014ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (159.585667ms)
✔ runCli diff prints review-oriented Git and change status (93.465083ms)
✔ verifyChange runs fast checks by default and writes evidence (59.301291ms)
✔ verifyChange --full includes full-only checks (119.646083ms)
✔ completeChange blocks until verification evidence exists (2.341416ms)
✔ completeChange writes done report after verification evidence exists (88.1065ms)
✔ completeChange includes changed files in done report when Git is available (102.81175ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (162.173458ms)
✔ runCli report prints the report path (158.866709ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (315.325709ms)
✔ runCli release prints release handoff path (251.543125ms)
ℹ tests 103
ℹ suites 0
ℹ pass 103
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 12740.838916
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

✔ initWorkspace creates repo-local delivery folders and default workflow (7.840291ms)
✔ startChange creates an OpenSpec change, task file, and active status (3.051709ms)
✔ startChange writes a richer OpenSpec proposal template (2.357042ms)
✔ runCli dispatches init, start, and status commands (2.403958ms)
✔ runCli quickstart prepares the low-ceremony project path (89.326625ms)
✔ runCli quickstart --light avoids agent ceremony (84.592583ms)
✔ runMission prepares an AGI-style mission for a new request (326.378ms)
✔ runMission continues an active change and prepares review when evidence passes (472.365417ms)
✔ runCli with no args shows the operator guide instead of raw help (77.935208ms)
✔ runCli routes plain text to quickstart (81.924667ms)
✔ runCli share aliases pack (75.788833ms)
✔ runCli ask aliases share (78.859708ms)
✔ runCli fix aliases light quickstart (79.657667ms)
✔ runCli ship runs ready verification, validation, and report (205.436375ms)
✔ runCli supports help and version for an installable CLI (0.255792ms)
✔ runCli clean previews safe dummy ShipSpec artifacts without deleting them (18.262167ms)
✔ runCli clean --apply removes only safe dummy ShipSpec artifacts (10.680375ms)
✔ runCli clean reports when nothing is safe to clean and appears only in advanced help (3.047417ms)
✔ runCli supports the AGI-style run command (300.222333ms)
✔ runCli skill path prints source and default install target (0.379375ms)
✔ runCli skill install copies the bundled ShipSpec skill (3.021042ms)
✔ generateExamples creates a node-basic example project with ShipSpec artifacts (1.709125ms)
✔ runSelfTest summarizes command health using an injectable runner (0.244209ms)
✔ runCli examples and self-test print summary output (1.304958ms)
✔ generateDesktopApp writes an Electron desktop wrapper around the CLI (1.37575ms)
✔ runCli desktop prints generated desktop app path (0.952416ms)
✔ package is ready for TypeScript core and npm publishing (0.318042ms)
✔ TypeScript adapters describe ShipSpec integration points (0.386167ms)
✔ runCli adapters lists integration points (0.167334ms)
✔ intake creates a ShipSpec request intake record (1.333042ms)
✔ contract creates a delivery contract for the active ShipSpec change (1.8375ms)
✔ room creates role files for the active ShipSpec change (2.683875ms)
✔ audit reports ShipSpec delivery trail readiness (3.969542ms)
✔ deliver prepares intake, spec, contract, room, and validation (3.02875ms)
✔ deliver --adaptive prepares reasoning with the ShipSpec package (4.057791ms)
✔ generateReflection writes lightweight readiness critique without leaking evidence output (372.901833ms)
✔ learnFromChange stores governed lessons and project patterns (141.5245ms)
✔ learnFromChange writes structured smart memory from local ShipSpec artifacts (467.238875ms)
✔ runCli reflect and learn expose self-improving loop commands (243.753042ms)
✔ runLoop runs one safe verification and reflection pass without learning when gaps remain (147.210958ms)
✔ runLoop learns when verification and reflection are ready (534.605625ms)
✔ runCli loop exposes the one-pass self-improvement loop (138.2565ms)
✔ runOperation orchestrates safe delivery control loop (223.739875ms)
✔ runCli operate exposes safe operator command with json output (447.079708ms)
✔ recordDecision stores human decisions for the active change (2.457833ms)
✔ runCli decision records decisions and validates input (2.293958ms)
✔ generateReview writes a decision-aware review checklist (156.383542ms)
✔ runCli review exposes decision-aware review checklist (151.085458ms)
✔ getNextRecommendation guides users with no active change (1.325042ms)
✔ getNextRecommendation guides active changes through missing artifacts (4.252583ms)
✔ runCli next prints recommendation and supports json output (4.940917ms)
✔ generatePlanPrompt writes AI planning context from active ShipSpec state (217.239958ms)
✔ generatePlanPrompt includes recorded human decisions (2.657292ms)
✔ runCli prompt prints Plan mode prompt and supports json output (3.628625ms)
✔ generateCodexHandoff prints a compact no-copy handoff from mission files (321.692875ms)
✔ runCli codex prints no-copy handoff and appears in help (576.940625ms)
✔ generateContextPack writes a portable AI handoff pack (202.6115ms)
✔ generateContextPack flags high-risk auth changes without full proof (112.109125ms)
✔ runCli pack writes and prints the context pack path (107.215625ms)
✔ getMemorySummary reads lessons, patterns, reflections, and loop actions (292.638542ms)
✔ runCli memory prints memory summary, smart memory, and supports json output (391.921041ms)
✔ generateCodexHandoff includes smart memory for the next feature (711.396ms)
✔ generateReasoning writes adaptive local reasoning from spec, memory, and project signals (151.025709ms)
✔ runCli reason prints reasoning path and supports json output (3.682125ms)
✔ generateUiDashboard writes a single-page pixel dashboard (313.489875ms)
✔ generateUiDashboard shows committed files when working tree is clean (447.846083ms)
✔ generateUiDashboard shows ShipSpec audit trail (87.2945ms)
✔ generateUiDashboard shows self-improving loop state (218.073583ms)
✔ generateUiDashboard shows adaptive reasoning state (90.541917ms)
✔ generateUiDashboard shows operator state (299.045208ms)
✔ generateUiDashboard shows human decisions and review state (213.064375ms)
✔ generateDesktopApp writes a renderer that serializes command refreshes (1.217334ms)
✔ runCli ui prints generated dashboard path (112.32225ms)
✔ runCli ui --open opens the generated dashboard (80.50975ms)
✔ runCli run --open starts a mission and opens the dashboard (351.488916ms)
✔ generateAgentInstructions creates cross-agent rules, roles, and message board folders (2.859542ms)
✔ postAgentMessage writes a role-scoped message and listAgentMessages returns newest messages (5.127917ms)
✔ runCli agents, message, and inbox expose the multi-agent coordination flow (3.843959ms)
✔ doctorWorkspace reports repo readiness checks (34.016041ms)
✔ detectProject identifies npm, Next, Vitest, and Playwright from package metadata (0.603875ms)
✔ detectProject identifies Vite and Cypress when those dependencies exist (0.425125ms)
✔ configureWorkflow writes checks only for available scripts and marks e2e fullOnly (1.83525ms)
✔ runCli detect and configure print project detection output (4.00175ms)
✔ generateCiWorkflow writes GitHub Actions workflow from configured checks (1.893209ms)
✔ runCli ci prints generated GitHub Actions path (1.447375ms)
✔ getSpecStatus reports active change files and required proposal sections (1.759459ms)
✔ validateChange passes for a generated spec (1.869084ms)
✔ validateChange fails when proposal is missing acceptance criteria (1.8925ms)
✔ validateChange --ready requires verification evidence (1.802208ms)
✔ validateChange --ready passes after verification evidence exists (62.769875ms)
✔ runCli spec and validate print spec gate output (2.651959ms)
✔ getDiffSummary reports branch, staged files, unstaged files, commits, and evidence (251.649917ms)
✔ getDiffSummary scopes Git status to the project folder inside a parent repository (97.8625ms)
✔ runCli diff prints review-oriented Git and change status (94.681375ms)
✔ verifyChange runs fast checks by default and writes evidence (65.434917ms)
✔ verifyChange --full includes full-only checks (123.559792ms)
✔ completeChange blocks until verification evidence exists (2.166167ms)
✔ completeChange writes done report after verification evidence exists (97.498208ms)
✔ completeChange includes changed files in done report when Git is available (115.877833ms)
✔ generateReport writes a PR-ready markdown report with evidence and changed files (156.367959ms)
✔ runCli report prints the report path (197.157ms)
✔ generateRelease writes release handoff with validation, evidence, report, changed files, and messages (232.015916ms)
✔ runCli release prints release handoff path (203.619042ms)
ℹ tests 103
ℹ suites 0
ℹ pass 103
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 12162.701459
```

