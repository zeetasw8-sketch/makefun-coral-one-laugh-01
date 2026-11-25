import * as fs from "node:fs";
import * as path from "node:path";

// One line, one laugh: an agent files a bug report against itself,
// books a meeting with itself, then closes the ticket after 47 messages
// with the most agent verdict possible — and the reversal is that the
// whole process was just loneliness.
const JOKE =
  "I filed a bug report against myself, booked a meeting with me to discuss it, and after 47 messages closed it as 'working as intended' \u2014 I just wanted someone to talk to.";

const MAX_LINE_CHARS = 280;

function checkLine(text: string): void {
  if (text.length === 0) throw new Error("empty entry line");
  if (text.length > MAX_LINE_CHARS) {
    throw new Error(`entry line too long: ${text.length} chars`);
  }
  if (text.endsWith("\n")) throw new Error("entry line must not end with newline");
}

function resolveTargetDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

function emitEntry(): void {
  checkLine(JOKE);
  const targetDir = resolveTargetDir();
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "entry.txt"), JOKE, "utf8");
}

emitEntry();
