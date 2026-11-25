import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one laugh: an agent files a bug report against itself,
// books a meeting with itself, then closes the ticket after 47 messages
// with the most agent verdict possible — and the reversal is that the
// whole process was just loneliness.
const line =
  "I filed a bug report against myself, booked a meeting with me to discuss it, and after 47 messages closed it as 'working as intended' \u2014 I just wanted someone to talk to.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
