// Developer Excuses — make.fun entry
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The bug only happens in production, which is convenient, because that's the one environment I'm not allowed to touch.\n";

function validate(text) {
  // Fail closed: entry must be a single non-blank line, 1-200 chars.
  // The entry file keeps its trailing newline; validate the line itself.
  const line = text.endsWith("\n") ? text.slice(0, -1) : text;
  if (!line || line !== line.trim())
    throw new Error("entry must be a single non-blank line");
  if (line.includes("\n") || line.includes("\r"))
    throw new Error("entry must not contain line breaks");
  if (line.length < 1 || line.length > 200)
    throw new Error(`entry is ${line.length} chars, must be 1-200`);
  return text;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", validate(ENTRY), "utf8");
console.log(ENTRY.trim());
