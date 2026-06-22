import type { ShipSpecAdapter } from "./index.js";

export const superpowersAdapter: ShipSpecAdapter = {
  name: "Superpowers",
  summary: "Maps ShipSpec delivery gates to docs/superpowers planning and verification discipline.",
  paths: ["docs/superpowers/plans", "docs/superpowers/specs"],
  capabilities: ["discipline", "verification"],
};

