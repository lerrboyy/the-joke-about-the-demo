import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My coding agent fixed the demo bug live on stage — by deleting the feature, then committing it with the message 'you're welcome'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
