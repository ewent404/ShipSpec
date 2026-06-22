import type { ShipSpecAdapter } from "./index.js";

export const projectScriptsAdapter: ShipSpecAdapter = {
  name: "Project scripts",
  summary: "Connects package.json scripts to ShipSpec verification commands.",
  paths: ["package.json scripts", ".gsd/workflow.json"],
  capabilities: ["verification", "automation"],
};
