# AGI-Style Run Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `gsd run [request]` as ShipSpec's safe AGI-style delivery operator command.

**Architecture:** Implement `runMission(root, request, options)` in `src/gsd.mjs` as a thin orchestration layer over existing ShipSpec primitives. It will create local mission state, generate reasoning/prompt/pack/UI artifacts, classify the current phase, and print one clear next action without editing application code or touching external services.

**Tech Stack:** Node.js ESM, built-in `node:test`, existing ShipSpec single-file CLI in `src/gsd.mjs`, existing static UI generator, existing README docs.

## Global Constraints

- Keep the command local, deterministic, and safe by default.
- Do not auto-edit application code in this first version.
- Do not deploy, publish, push, delete, or call external services.
- Run at most one controlled local loop per `gsd run`.
- Use existing internal functions where possible instead of shelling out to `gsd`.
- Do not add aliases for `gsd run` in the first version.
- Preserve existing explicit commands and beginner/advanced help behavior.

---

## File Structure

- Modify `src/gsd.mjs`: add mission orchestration, mission state writing, output formatting, CLI dispatch, and help text.
- Modify `test/gsd.test.mjs`: add TDD coverage for `runMission()` and `runCli(["run", ...])`.
- Modify `README.md`: document the AGI-style `gsd run` command and position it as the primary future-facing path.
- Generated during tests only: `.gsd/missions/<change>.json`, `.gsd/missions/<change>.md`, `.gsd/reasoning/<change>.md`, `.gsd/prompts/<change>.md`, `.gsd/packs/<change>.md`, `.gsd/ui/index.html`.

---

### Task 1: Add Failing Mission Tests

**Files:**
- Modify: `test/gsd.test.mjs`

**Interfaces:**
- Consumes: existing helpers `tempRoot()`, `exists(path)`, `readFile(path, "utf8")`, `runCli()`, `initWorkspace()`, `startChange()`, `verifyChange()`.
- Produces: test expectations for exported function `runMission(root, request = "", options = {})`.

- [ ] **Step 1: Add `runMission` to the imports**

Change the import block in `test/gsd.test.mjs` so it includes `runMission`:

```js
import {
  configureWorkflow,
  completeChange,
  detectProject,
  doctorWorkspace,
  generateExamples,
  generateDesktopApp,
  generateUiDashboard,
  generateAgentInstructions,
  generateCiWorkflow,
  generateRelease,
  generatePlanPrompt,
  generateContextPack,
  generateReasoning,
  generateReview,
  getMemorySummary,
  getNextRecommendation,
  getSpecStatus,
  getDiffSummary,
  getStatus,
  initWorkspace,
  recordDecision,
  runMission,
  runOperation,
  runLoop,
  listAgentMessages,
  postAgentMessage,
  runSelfTest,
  generateReport,
  generateReflection,
  runCli,
  startChange,
  learnFromChange,
  validateChange,
  verifyChange,
} from "../src/gsd.mjs";
```

- [ ] **Step 2: Add a failing test for new mission preparation**

Add this test near the existing operator/quickstart CLI tests:

```js
test("runMission prepares an AGI-style mission for a new request", async () => {
  const root = await tempRoot();

  const result = await runMission(root, "Add Checkout Discount");

  assert.equal(result.ok, true);
  assert.equal(result.activeChange.slug, "add-checkout-discount");
  assert.equal(result.phase, "planning-ready");
  assert.match(result.message, /Mission: add-checkout-discount/);
  assert.match(result.message, /Phase: planning-ready/);
  assert.match(result.message, /Next:/);
  assert.equal(await exists(join(root, ".gsd", "missions", "add-checkout-discount.json")), true);
  assert.equal(await exists(join(root, ".gsd", "missions", "add-checkout-discount.md")), true);
  assert.equal(await exists(join(root, ".gsd", "reasoning", "add-checkout-discount.md")), true);
  assert.equal(await exists(join(root, ".gsd", "prompts", "add-checkout-discount.md")), true);
  assert.equal(await exists(join(root, ".gsd", "packs", "add-checkout-discount.md")), true);
  assert.equal(await exists(join(root, ".gsd", "ui", "index.html")), true);

  const mission = JSON.parse(await readFile(join(root, ".gsd", "missions", "add-checkout-discount.json"), "utf8"));
  assert.equal(mission.slug, "add-checkout-discount");
  assert.equal(mission.phase, "planning-ready");
  assert.equal(mission.safety.externalActions, false);
  assert.equal(mission.artifacts.prompt, ".gsd/prompts/add-checkout-discount.md");
});
```

- [ ] **Step 3: Add a failing test for continuation with passing evidence**

Add this test after the new request test:

```js
test("runMission continues an active change and prepares review when evidence passes", async () => {
  const root = await tempRoot();
  await initWorkspace(root);
  await startChange(root, "Ready Mission");
  await writeFile(
    join(root, ".gsd", "workflow.json"),
    JSON.stringify({ checks: [{ name: "unit", command: "node -e \"process.exit(0)\"", required: true }] }, null, 2),
  );
  await verifyChange(root, { full: true });

  const result = await runMission(root);

  assert.equal(result.ok, true);
  assert.equal(result.phase, "review-ready");
  assert.match(result.message, /Mission: ready-mission/);
  assert.match(result.message, /Phase: review-ready/);
  assert.match(result.message, /Report: \.gsd\/reports\/ready-mission\.md/);
  assert.equal(await exists(join(root, ".gsd", "reports", "ready-mission.md")), true);
  assert.equal(await exists(join(root, ".gsd", "packs", "ready-mission.md")), true);
});
```

- [ ] **Step 4: Add a failing test for the CLI command and help text**

Add this test near `runCli supports help and version for an installable CLI`:

```js
test("runCli supports the AGI-style run command", async () => {
  const root = await tempRoot();

  const result = await runCli(["run", "Add", "Mission", "Mode"], { cwd: root });

  assert.equal(result.exitCode, 0);
  assert.match(result.stdout, /Mission: add-mission-mode/);
  assert.match(result.stdout, /Phase: planning-ready/);

  const help = await runCli(["--help"], { cwd: root });
  assert.equal(help.exitCode, 0);
  assert.match(help.stdout, /gsd run/);

  const advanced = await runCli(["help", "advanced"], { cwd: root });
  assert.equal(advanced.exitCode, 0);
  assert.match(advanced.stdout, /run \[request\]/);
});
```

- [ ] **Step 5: Run the focused tests and verify they fail**

Run:

```bash
npm test -- --test-name-pattern "runMission|AGI-style run"
```

Expected: FAIL because `runMission` is not exported and `gsd run` is not dispatched yet.

- [ ] **Step 6: Commit the failing tests**

```bash
git add test/gsd.test.mjs
git commit -m "test: cover agi-style run mission"
```

---

### Task 2: Implement Mission State and New Request Flow

**Files:**
- Modify: `src/gsd.mjs`

**Interfaces:**
- Consumes: `quickstartProject(root, request, options)`, `getStatus(root)`, `validateChange(root, options)`, `generateReasoning(root)`, `generatePlanPrompt(root)`, `generateContextPack(root)`, `generateUiDashboard(root)`, `getNextRecommendation(root)`, `getRiskSummary(root, next)`, `mkdir()`, `writeFile()`, `join()`.
- Produces: `export async function runMission(root, request = "", options = {})`, `writeMissionState(root, mission)`, `buildMissionMarkdown(mission)`, `formatMissionResult(result)`.

- [ ] **Step 1: Add the exported `runMission` function before `runOperation`**

Insert this function above `export async function runOperation`:

```js
export async function runMission(root, request = "", options = {}) {
  await initWorkspace(root);

  const title = request.trim();
  const initialStatus = await getStatus(root);
  if (!title && !initialStatus.activeChange) {
    return {
      ok: false,
      phase: "needs-request",
      message: "Usage: gsd run <request>",
    };
  }

  const prepared = title ? await quickstartProject(root, title, { light: options.light ?? false }) : null;
  const activeChange = await requireActiveChange(root);
  const specValidation = await validateChange(root, { ready: false });
  const reasoning = specValidation.ok ? await generateReasoning(root) : null;
  const prompt = specValidation.ok ? await generatePlanPrompt(root) : null;
  const pack = specValidation.ok ? await generateContextPack(root) : null;
  const ui = await generateUiDashboard(root);
  const next = await getNextRecommendation(root);
  const risk = await getRiskSummary(root, next);
  const phase = classifyMissionPhase({ specValidation, readyValidation: null, risk, hasRequest: Boolean(title) });

  const mission = buildMissionState({
    activeChange,
    phase,
    request: title || activeChange.title,
    risk,
    next,
    specValidation,
    readyValidation: null,
    artifacts: {
      mission: `.gsd/missions/${activeChange.slug}.md`,
      missionJson: `.gsd/missions/${activeChange.slug}.json`,
      reasoning: reasoning ? `.gsd/reasoning/${activeChange.slug}.md` : null,
      prompt: prompt ? `.gsd/prompts/${activeChange.slug}.md` : null,
      pack: pack ? `.gsd/packs/${activeChange.slug}.md` : null,
      report: null,
      ui: ".gsd/ui/index.html",
    },
  });
  const missionFiles = await writeMissionState(root, mission);

  return {
    ok: specValidation.ok && ui.ok,
    activeChange,
    phase,
    risk,
    next,
    prepared,
    reasoning,
    prompt,
    pack,
    ui,
    mission,
    missionFiles,
    message: formatMissionResult({ mission, pack, report: null }),
  };
}
```

- [ ] **Step 2: Add mission helper functions near the other formatter helpers**

Add these helpers near `formatOperatorGuide`:

```js
function classifyMissionPhase({ specValidation, readyValidation, risk, hasRequest }) {
  if (!specValidation.ok) return "needs-spec";
  if (risk.level === "high" && readyValidation && !readyValidation.ok) return "blocked-high-risk";
  if (readyValidation?.ok) return "review-ready";
  if (hasRequest) return "planning-ready";
  return "implementation-ready";
}

function buildMissionState({ activeChange, phase, request, risk, next, specValidation, readyValidation, artifacts }) {
  return {
    title: activeChange.title,
    slug: activeChange.slug,
    request,
    phase,
    risk,
    nextAction: {
      command: next.command,
      reason: next.reason,
      otherCommands: next.otherCommands ?? [],
    },
    validation: {
      spec: specValidation.ok ? "pass" : "fail",
      ready: readyValidation ? (readyValidation.ok ? "pass" : "fail") : "not-run",
      errors: [...specValidation.errors, ...(readyValidation?.errors ?? [])],
    },
    artifacts,
    safety: {
      localOnly: true,
      externalActions: false,
      destructiveActions: false,
      deployment: false,
      maxLoops: 1,
    },
    generatedAt: new Date().toISOString(),
  };
}

async function writeMissionState(root, mission) {
  const missionDir = join(root, ".gsd", "missions");
  const jsonPath = join(missionDir, `${mission.slug}.json`);
  const markdownPath = join(missionDir, `${mission.slug}.md`);

  await mkdir(missionDir, { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(mission, null, 2)}\n`);
  await writeFile(markdownPath, buildMissionMarkdown(mission));

  return { jsonPath, markdownPath };
}

function buildMissionMarkdown(mission) {
  return [
    `# Mission: ${mission.title}`,
    "",
    `Slug: ${mission.slug}`,
    `Phase: ${mission.phase}`,
    `Risk: ${mission.risk.level}`,
    `Generated: ${mission.generatedAt}`,
    "",
    "## Goal",
    "",
    mission.request,
    "",
    "## Next Action",
    "",
    `- Command: ${mission.nextAction.command}`,
    `- Reason: ${mission.nextAction.reason}`,
    "",
    "## Risk Reasons",
    "",
    ...formatBulletList(mission.risk.reasons, "No risk reasons."),
    "",
    "## Artifacts",
    "",
    ...formatArtifactList(mission.artifacts),
    "",
    "## Safety",
    "",
    "- Local files only.",
    "- No external services called.",
    "- No destructive commands run.",
    "- No deployment attempted.",
    "- One controlled loop maximum per run.",
    "",
  ].join("\n");
}

function formatArtifactList(artifacts) {
  return Object.entries(artifacts)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `- ${key}: ${value}`);
}

function formatMissionResult({ mission }) {
  const lines = [
    `Mission: ${mission.slug}`,
    `Phase: ${mission.phase}`,
    `Risk: ${mission.risk.level}`,
    `Next: ${mission.nextAction.command}`,
    `Why: ${mission.nextAction.reason}`,
    `Mission file: ${mission.artifacts.mission}`,
  ];

  if (mission.artifacts.prompt) lines.push(`Prompt: ${mission.artifacts.prompt}`);
  if (mission.artifacts.pack) lines.push(`Pack: ${mission.artifacts.pack}`);
  if (mission.artifacts.report) lines.push(`Report: ${mission.artifacts.report}`);
  if (mission.artifacts.ui) lines.push(`UI: ${mission.artifacts.ui}`);

  return lines.join("\n");
}
```

- [ ] **Step 3: Run focused tests**

Run:

```bash
npm test -- --test-name-pattern "runMission prepares"
```

Expected: PASS for the new mission preparation test. Other `runMission`/CLI tests may still fail until later tasks.

- [ ] **Step 4: Commit the mission preparation implementation**

```bash
git add src/gsd.mjs
git commit -m "feat: prepare agi-style missions"
```

---

### Task 3: Add Continuation Behavior for Evidence and Review

**Files:**
- Modify: `src/gsd.mjs`

**Interfaces:**
- Consumes: `validateChange(root, { ready: true })`, `generateReport(root)`, `generateContextPack(root)`, `generateReflection(root)`, `readEvidenceSummary(root, slug)`.
- Produces: review-ready mission phase and report artifact when ready validation passes.

- [ ] **Step 1: Update `runMission` to evaluate ready state on continuation**

Replace the section after `const specValidation = await validateChange(root, { ready: false });` with:

```js
  const readyValidation = title ? null : await validateChange(root, { ready: true });
  const reasoning = specValidation.ok ? await generateReasoning(root) : null;
  const prompt = specValidation.ok ? await generatePlanPrompt(root) : null;
  let pack = specValidation.ok ? await generateContextPack(root) : null;
  const report = readyValidation?.ok ? await generateReport(root) : null;
  if (report?.ok) pack = await generateContextPack(root);
  const reflection = !title && readyValidation && !readyValidation.ok ? await generateReflection(root) : null;
  const ui = await generateUiDashboard(root);
  const next = await getNextRecommendation(root);
  const risk = await getRiskSummary(root, next);
  const phase = classifyMissionPhase({ specValidation, readyValidation, risk, hasRequest: Boolean(title) });
```

Update the mission artifacts in the same function:

```js
    artifacts: {
      mission: `.gsd/missions/${activeChange.slug}.md`,
      missionJson: `.gsd/missions/${activeChange.slug}.json`,
      reasoning: reasoning ? `.gsd/reasoning/${activeChange.slug}.md` : null,
      prompt: prompt ? `.gsd/prompts/${activeChange.slug}.md` : null,
      pack: pack ? `.gsd/packs/${activeChange.slug}.md` : null,
      report: report?.ok ? `.gsd/reports/${activeChange.slug}.md` : null,
      reflection: reflection ? `.gsd/reflections/${activeChange.slug}.md` : null,
      ui: ".gsd/ui/index.html",
    },
```

Include `readyValidation`, `report`, and `reflection` in the returned object:

```js
    readyValidation,
    report,
    reflection,
```

- [ ] **Step 2: Run the continuation test**

Run:

```bash
npm test -- --test-name-pattern "runMission continues"
```

Expected: PASS and `.gsd/reports/ready-mission.md` exists.

- [ ] **Step 3: Run all mission focused tests**

Run:

```bash
npm test -- --test-name-pattern "runMission|AGI-style run"
```

Expected: only the CLI/help test should still fail until Task 4.

- [ ] **Step 4: Commit continuation behavior**

```bash
git add src/gsd.mjs
git commit -m "feat: continue run missions"
```

---

### Task 4: Wire the CLI, Help, README, and Skill

**Files:**
- Modify: `src/gsd.mjs`
- Modify: `README.md`
- Modify: `skills/shipspec/SKILL.md`

**Interfaces:**
- Consumes: `runMission(root, request, options)`.
- Produces: `gsd run [request]` CLI command and documented primary usage.

- [ ] **Step 1: Add CLI dispatch for `gsd run`**

In `runCli`, insert this block after the `quickstart` command block:

```js
    if (command === "run") {
      const result = await runMission(cwd, rest.join(" "));
      return cliResult(result.ok ? 0 : 1, `${result.message}\n`);
    }
```

- [ ] **Step 2: Update beginner help**

In `beginnerUsage()`, add `gsd run <request>` under `Main:` so the section reads:

```text
Main:
  gsd
  gsd run <request>
  gsd "Feature request"
  gsd fix <small fix>
  gsd ship
  gsd share
  gsd ask
  gsd ui
```

- [ ] **Step 3: Update advanced help**

In `usage()`, add `run [request]` under `Daily path:` so the section reads:

```text
Daily path:
  init
  run [request]
  "feature request"
  quickstart [--light] <feature>
  configure
  start <change title>
  next [--json]
  ui
```

- [ ] **Step 4: Update the operator guide command menu**

In `formatOperatorGuide`, insert this line under `"Main commands:"`:

```js
    "- gsd run <request>      AGI-style delivery operator",
```

- [ ] **Step 5: Update README positioning**

In `README.md`, change the "Try It In Two Minutes" command block to:

```bash
gsd run "Add user profile page"
open .gsd/ui/index.html
```

Add this paragraph below that block:

```md
`gsd run` is the AGI-style operator path: it turns a goal into mission state, reasoning, risk, an AI-ready prompt, a context pack, and a refreshed dashboard. Run `gsd run` again later to continue from the current ShipSpec state.
```

Update "Commands To Remember" so the list includes:

```bash
gsd
gsd run "Feature request"
gsd ship
gsd share
gsd ui
```

Update the table row for `gsd run "Feature request"`:

```md
| `gsd run "Feature request"` | Start or continue an AGI-style delivery mission with reasoning, risk, prompt, pack, and UI artifacts. |
```

- [ ] **Step 6: Update the bundled Codex skill**

In `skills/shipspec/SKILL.md`, add this after the initial workflow commands:

````md
For the goal-driven path, prefer:

```bash
gsd run "<user request or ticket title>"
```

`gsd run` prepares or continues the local mission, generates reasoning, prompt, context pack, risk, and UI artifacts, and prints the next best action.
````

- [ ] **Step 7: Run CLI/help focused tests**

Run:

```bash
npm test -- --test-name-pattern "runCli supports the AGI-style run command|help and version"
```

Expected: PASS.

- [ ] **Step 8: Commit CLI and docs**

```bash
git add src/gsd.mjs README.md skills/shipspec/SKILL.md
git commit -m "feat: expose agi-style run command"
```

---

### Task 5: Full Verification and ShipSpec Handoff

**Files:**
- Modify only if verification exposes a necessary fix: `src/gsd.mjs`, `test/gsd.test.mjs`, `README.md`, `skills/shipspec/SKILL.md`
- Generated evidence: `.agent/evidence/add-electron-desktop-app.md`
- Generated report: `.gsd/reports/add-electron-desktop-app.md`

**Interfaces:**
- Consumes: all previous tasks.
- Produces: verified and review-ready implementation.

- [ ] **Step 1: Run all tests**

Run:

```bash
npm test
```

Expected: all tests pass.

- [ ] **Step 2: Run lint**

Run:

```bash
npm run lint
```

Expected: command exits 0.

- [ ] **Step 3: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: command exits 0.

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: command exits 0.

- [ ] **Step 5: Run ShipSpec full verification**

Run:

```bash
node bin/gsd.mjs verify --full
```

Expected: `PASS lint`, `PASS unit`, `PASS typecheck`, and `PASS e2e`.

- [ ] **Step 6: Run ShipSpec ready validation**

Run:

```bash
node bin/gsd.mjs validate --ready
```

Expected: `Spec validation passed`.

- [ ] **Step 7: Refresh the review report**

Run:

```bash
node bin/gsd.mjs report
```

Expected: `.gsd/reports/add-electron-desktop-app.md` is written.

- [ ] **Step 8: Inspect final diff**

Run:

```bash
git diff --stat
git diff -- src/gsd.mjs test/gsd.test.mjs README.md skills/shipspec/SKILL.md
```

Expected: diff only contains `gsd run` implementation, tests, docs, skill update, and refreshed ShipSpec evidence/report.

- [ ] **Step 9: Commit verification updates**

```bash
git add src/gsd.mjs test/gsd.test.mjs README.md skills/shipspec/SKILL.md .agent/evidence/add-electron-desktop-app.md .gsd/reports/add-electron-desktop-app.md
git commit -m "feat: add agi-style run operator"
```

- [ ] **Step 10: Push**

```bash
git push
```

Expected: branch pushes to `shipspec-dev/ShipSpec`.

---

## Self-Review

- Spec coverage: covered `gsd run [request]`, mission JSON/Markdown, reasoning, prompt, pack, UI, continuation, risk, safety, help, README, and tests.
- Placeholder scan: no unresolved placeholder tokens or vague test steps remain.
- Type consistency: `runMission(root, request = "", options = {})`, `classifyMissionPhase(...)`, `buildMissionState(...)`, `writeMissionState(...)`, `buildMissionMarkdown(...)`, and `formatMissionResult(...)` are named consistently across tasks.
- Scope check: this plan implements the small-to-medium first AGI-style slice only. It does not add auto-code editing, deployments, external services, or multi-agent execution.
