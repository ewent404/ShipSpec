export type AdapterCapability =
  | "spec"
  | "discipline"
  | "automation"
  | "verification"
  | "handoff";

export type ShipSpecAdapter = {
  name: string;
  summary: string;
  paths: string[];
  capabilities: AdapterCapability[];
};

import { githubAdapter } from "./github.js";
import { openspecAdapter } from "./openspec.js";
import { projectScriptsAdapter } from "./project-scripts.js";
import { superpowersAdapter } from "./superpowers.js";

export function listAdapters(): ShipSpecAdapter[] {
  return [openspecAdapter, superpowersAdapter, githubAdapter, projectScriptsAdapter];
}

