/**
 * QANTE envanter viewer — lokal, bağımlılıksız.
 *
 *   cd qante/viewer && node server.mjs
 *   → http://localhost:3456
 */

import http from "http";
import { exec } from "child_process";
import { handleRequest, closeInventory, ROOT } from "./app.mjs";

const PORT = Number(process.env.PORT) || 3456;

const server = http.createServer((req, res) => handleRequest(req, res));

server.listen(PORT, () => {
  const href = `http://localhost:${PORT}`;
  console.log(`QANTE viewer → ${href}`);
  console.log(`Root: ${ROOT}`);
  if (process.env.QANTE_NO_OPEN !== "1") {
    const open =
      process.platform === "darwin"
        ? `open ${href}`
        : process.platform === "win32"
          ? `start ${href}`
          : `xdg-open ${href}`;
    exec(open, () => {});
  }
});

process.on("SIGINT", () => {
  closeInventory();
  process.exit(0);
});
