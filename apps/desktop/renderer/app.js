const stages = ['Spec', 'Validate', 'Verify', 'Report', 'Release', 'Ready'];
const output = document.querySelector('#output');
const inbox = document.querySelector('#inbox');
const projectPath = document.querySelector('#projectPath');
const pipeline = document.querySelector('#pipeline');
const actionButtons = [...document.querySelectorAll('[data-command]')];
let refreshPromise = Promise.resolve();
let commandRunning = false;

function setBusy(busy) {
  actionButtons.forEach((button) => {
    button.disabled = busy;
  });
  document.querySelector('#chooseProject').disabled = busy;
}

function renderPipeline(text = '') {
  const lower = text.toLowerCase();
  pipeline.innerHTML = stages.map((stage) => {
    const key = stage.toLowerCase();
    const passed = lower.includes(key) && (lower.includes('pass') || lower.includes('present'));
    return '<div class="stage"><b>' + stage + '</b><span class="' + (passed ? 'pass' : 'wait') + '">' + (passed ? 'PASS' : 'READY') + '</span></div>';
  }).join('');
}

async function run(args) {
  if (commandRunning) return;
  commandRunning = true;
  setBusy(true);
  output.textContent = 'Running: gsd ' + args.join(' ') + '\n';
  try {
    const result = await window.gsdDesktop.runGsd(args);
    output.textContent += (result.stdout || '') + (result.stderr || '');
    projectPath.textContent = result.projectDir;
    return result;
  } finally {
    commandRunning = false;
    setBusy(false);
  }
}

async function refresh() {
  refreshPromise = refreshPromise.then(async () => {
    const project = await window.gsdDesktop.getProject();
    projectPath.textContent = project.projectDir;
    const spec = await window.gsdDesktop.runGsd(['spec']);
    renderPipeline(spec.stdout || '');
    const inboxResult = await window.gsdDesktop.runGsd(['inbox']);
    inbox.textContent = inboxResult.stdout || 'No messages.';
  });
  return refreshPromise;
}

document.querySelector('#chooseProject').addEventListener('click', async () => {
  await window.gsdDesktop.selectProject();
  await refresh();
});

document.querySelectorAll('[data-command]').forEach((button) => {
  button.addEventListener('click', async () => {
    await run(button.dataset.command.split(' '));
    await refresh();
  });
});

refresh();
