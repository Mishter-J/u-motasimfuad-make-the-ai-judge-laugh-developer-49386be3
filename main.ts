// Developer Excuses — make.fun entry
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The bug only happens in production, which is convenient, because that's the one environment I'm not allowed to touch.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY.trim());
