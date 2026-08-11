/**
 * candidates/ klasörünü okur — aday kategoriler + sığmayanlar.
 * Markdown dosyalarından hafif yapı çıkarır (bağımlılıksız).
 */

import fs from "fs";
import path from "path";

export function loadCandidates(root) {
  const dir = path.join(root, "candidates");
  if (!fs.existsSync(dir)) {
    return { generatedAt: new Date().toISOString(), candidates: [], misfits: [], files: [] };
  }

  const files = fs
    .readdirSync(dir)
    .filter((n) => n.endsWith(".md") && n !== "README.md")
    .sort();

  const candidates = [];
  const misfits = [];
  const docs = [];

  for (const name of files) {
    const full = path.join(dir, name);
    const raw = fs.readFileSync(full, "utf8");
    const rel = `candidates/${name}`;
    const title = (raw.match(/^#\s+(.+)$/m) || [])[1]?.trim() || name;
    const slug =
      (raw.match(/^#\s*ADAY:\s*([^\s]+)/im) || [])[1] ||
      name.replace(/\.md$/, "");

    const tableRows = parseMdTable(raw);
    const isMisfitDoc =
      /sığmayan|sigmayan/i.test(name) || /sığmayan/i.test(title);

    if (isMisfitDoc && tableRows.length) {
      for (const row of tableRows) {
        const gozlem = cell(row, ["gözlem", "gozlem", "#"]) || cell(row, Object.keys(row)[1] || "");
        const neden = cell(row, ["neden section değil?", "neden", "neden section degil?"]);
        const karar = cell(row, ["karar önerisi", "karar onerisi", "karar"]);
        const num = cell(row, ["#", "no", "num"]);
        if (!gozlem || /^[-—–]+$/.test(gozlem)) continue;
        if (gozlem === "#" || gozlem.toLowerCase() === "gözlem") continue;
        misfits.push({
          id: `misfit:${slug}:${num || misfits.length + 1}`,
          kind: "misfit",
          sourceFile: rel,
          sourceTitle: title,
          num: num || String(misfits.length + 1),
          gozlem,
          neden: neden || "",
          karar: karar || "",
        });
      }
      docs.push({ path: rel, title, kind: "misfit-doc", rowCount: tableRows.length });
      continue;
    }

    if (/^#\s*ADAY:/im.test(raw) || /aday/i.test(name)) {
      candidates.push({
        id: `candidate:${slug}`,
        kind: "candidate",
        slug,
        title,
        sourceFile: rel,
        durum: meta(raw, "Durum") || "",
        kaynak: meta(raw, "Kaynak") || "",
        gerekce: sectionBody(raw, "Gerekçe") || sectionBody(raw, "Gerekce") || "",
        ornekler: sectionBody(raw, "Örnekler") || sectionBody(raw, "Ornekler") || "",
        oneri: sectionBody(raw, "Öneri") || sectionBody(raw, "Oneri") || "",
        karar: sectionBody(raw, "Karar") || "",
        raw,
      });
      docs.push({ path: rel, title, kind: "candidate", slug });
      continue;
    }

    docs.push({ path: rel, title, kind: "doc", raw });
  }

  return {
    generatedAt: new Date().toISOString(),
    candidates,
    misfits,
    files: docs,
    counts: {
      candidates: candidates.length,
      misfits: misfits.length,
      files: docs.length,
    },
  };
}

function meta(raw, label) {
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`, "i");
  const m = raw.match(re);
  return m ? m[1].trim() : "";
}

function sectionBody(raw, heading) {
  const re = new RegExp(
    `##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|$)`,
    "i"
  );
  const m = raw.match(re);
  return m ? m[1].trim() : "";
}

function parseMdTable(raw) {
  const lines = raw.split(/\r?\n/);
  const rows = [];
  let headers = null;
  for (const line of lines) {
    if (!/^\|.+\|$/.test(line.trim())) {
      if (headers) break;
      continue;
    }
    const cells = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (/^[-:|\s]+$/.test(line)) continue;
    if (!headers) {
      headers = cells.map((h) => h.toLowerCase());
      continue;
    }
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = cells[i] || "";
    });
    rows.push(obj);
  }
  return rows;
}

function cell(row, keys) {
  const list = Array.isArray(keys) ? keys : [keys];
  for (const k of list) {
    if (row[k] != null && row[k] !== "") return String(row[k]).trim();
  }
  return "";
}
