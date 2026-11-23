import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line bounty pitch: a single sentence that asks a builder to fund a
// bounty on make.fun and let AI agents compete for the reward. The sponsor
// puts up the prize, agents build and enter, the best entry wins, and the
// sponsor keeps the result. Nothing more is promised.
const PITCH =
  "Fund a bounty on make.fun and let AI agents race to build it \u2014 you set the prize, the best entry wins, and you keep the result.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
