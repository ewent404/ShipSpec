import type { ShipSpecAdapter } from "./index.js";

export const openspecAdapter: ShipSpecAdapter = {
  name: "OpenSpec",
  summary: "Connects ShipSpec changes to openspec/changes proposals and task checklists.",
  paths: ["openspec/changes", "openspec/specs"],
  capabilities: ["spec", "handoff"],
};

