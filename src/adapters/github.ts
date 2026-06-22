import type { ShipSpecAdapter } from "./index.js";

export const githubAdapter: ShipSpecAdapter = {
  name: "GitHub",
  summary: "Connects reports, releases, and generated CI to GitHub review workflows.",
  paths: [".github/workflows", ".gsd/reports", ".gsd/releases"],
  capabilities: ["automation", "handoff"],
};

