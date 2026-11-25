// Monday, Reviewed in One Line — one-line review entry, written fresh for this bounty.
import { mkdirSync, writeFileSync } from "node:fs";
const ENTRY = "Monday: great concept, " + "terrible execution — would not recommend, " + "yet somehow back every week.";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const tooShort = ENTRY.length < 1;
const tooLong = ENTRY.length > 200;
if (tooShort || tooLong) {
  console.error("entry length out of range");
  process.exit(1);
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(targetDir + "/entry.txt", ENTRY, "utf8");
