/**
 * @deprecated Use: node capture-observation.mjs ../observations/hyper/default/home/hero-slideshow.json
 * Thin wrapper — geriye uyumluluk.
 */
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const obs = path.resolve(
  __dirname,
  "../observations/hyper/default/home/hero-slideshow.json"
);
const child = spawn(
  process.execPath,
  [path.join(__dirname, "capture-observation.mjs"), obs],
  { stdio: "inherit" }
);
child.on("exit", (code) => process.exit(code ?? 1));
