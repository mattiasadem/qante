/**
 * Envanter tutarsızlık kuralları.
 * severity: error (kırık) · warn (eksik) · info (dikkat)
 */

import { VIEWPORTS } from "./inventory.mjs";

const TOKENISH =
  /(renk|color|font|type|spacing|bosluk|boşluk|padding|margin|radius|shadow|golge|gölge|size|boyut)/i;

export function runHealth(inv) {
  const issues = [];
  const add = (severity, rule, message, ref) =>
    issues.push({ severity, rule, message, ...ref });

  for (const p of inv.parseErrors) {
    add("error", "json-parse", `JSON okunamadı: ${p.error}`, { path: p.path });
  }

  for (const o of inv.observations) {
    if (!o.schemaId) {
      add("error", "missing-schema-id", "observation.schemaId boş", {
        path: o.path,
        observationId: o.observationId,
      });
    } else if (!inv.schemaById.has(o.schemaId)) {
      add(
        "error",
        "orphan-observation",
        `schemaId "${o.schemaId}" için sections/ altında şema yok`,
        { path: o.path, observationId: o.observationId, schemaId: o.schemaId }
      );
    }

    if (!o.selector) {
      if (o.capture?.blocked) {
        add(
          "info",
          "capture-blocked",
          o.capture.blockedReason ||
            "Capture blokeli — selector/demo bekleniyor",
          {
            path: o.path,
            observationId: o.observationId,
            schemaId: o.schemaId,
          }
        );
      } else {
        add("error", "no-selector", "selector boş — capture çalışmaz", {
          path: o.path,
          observationId: o.observationId,
          schemaId: o.schemaId,
        });
      }
    }

    for (const e of o.evidence) {
      if (!e.exists) {
        add("error", "evidence-file-missing", `Evidence diskte yok: ${e.path}`, {
          path: o.path,
          observationId: o.observationId,
          schemaId: o.schemaId,
        });
      }
    }

    if (o.evidenceStatus === "none") {
      if (o.capture?.blocked) {
        add(
          "info",
          "evidence-blocked",
          "Evidence yok — capture blokeli (demo/selector bekleniyor)",
          {
            path: o.path,
            observationId: o.observationId,
            schemaId: o.schemaId,
          }
        );
      } else {
        add("warn", "no-evidence", "Hiç evidence yok (capture çalıştırılmalı)", {
          path: o.path,
          observationId: o.observationId,
          schemaId: o.schemaId,
          fix: captureCmd(o.path),
        });
      }
    } else if (o.evidenceStatus === "partial") {
      add(
        "warn",
        "partial-viewports",
        `Eksik viewport: ${o.missingViewports.join(", ")} (hedef ${VIEWPORTS.join("/")})`,
        {
          path: o.path,
          observationId: o.observationId,
          schemaId: o.schemaId,
          fix: captureCmd(o.path),
        }
      );
    }

    const expected = [o.kaynak, o.preset, o.sayfa, o.schemaId]
      .filter(Boolean)
      .join(".");
    if (o.observationId && expected && o.observationId !== expected) {
      add(
        "warn",
        "observation-id-mismatch",
        `observationId "${o.observationId}" beklenen "${expected}" ile uyuşmuyor`,
        { path: o.path, observationId: o.observationId, schemaId: o.schemaId }
      );
    }

    const pathParts = o.path.split("/");
    // observations/{kaynak}/{preset}/{sayfa}/{file}.json
    if (pathParts.length >= 5) {
      const [, kaynak, preset, sayfa] = pathParts;
      if (
        (o.kaynak && o.kaynak !== kaynak) ||
        (o.preset && o.preset !== preset) ||
        (o.sayfa && o.sayfa !== sayfa)
      ) {
        add(
          "warn",
          "path-field-mismatch",
          `Dosya yolu (${kaynak}/${preset}/${sayfa}) ile alanlar uyuşmuyor`,
          { path: o.path, observationId: o.observationId, schemaId: o.schemaId }
        );
      }
    }

    if (
      o.sayfa &&
      inv.taxonomy.pageTypes.length &&
      !inv.taxonomy.pageTypes.includes(o.sayfa)
    ) {
      add(
        "info",
        "page-not-in-taxonomy",
        `sayfa "${o.sayfa}" taksonomi pageTypes içinde değil`,
        { path: o.path, observationId: o.observationId, schemaId: o.schemaId }
      );
    }
  }

  for (const s of inv.schemas) {
    const obs = inv.obsBySchema.get(s.id) || [];
    if (obs.length === 0) {
      add("warn", "schema-unobserved", "Şemaya bağlı gözlem yok", {
        path: s.path,
        schemaId: s.id,
      });
    }

    const kat = s.kategori || "";
    if (
      kat &&
      inv.taxonomy.categories.length &&
      !inv.taxonomy.categories.includes(kat)
    ) {
      add(
        "warn",
        "category-not-in-taxonomy",
        `kategori "${kat}" taksonomide yok → candidates/ + candidateQueue`,
        { path: s.path, schemaId: s.id }
      );
    }
    if (!kat && !s.tur) {
      add("warn", "no-category", "kategori (veya tur) boş", {
        path: s.path,
        schemaId: s.id,
      });
    }

    const tokenish = s.styleKnobKeys.filter((k) => TOKENISH.test(k));
    if (tokenish.length) {
      add(
        "error",
        "token-in-styleknobs",
        `styleKnobs token gibi anahtar içeriyor: ${tokenish.join(", ")} — renk/font/spacing şemaya girmez`,
        { path: s.path, schemaId: s.id }
      );
    }

    if (s.slotCount === 0) {
      add("info", "no-slots", "slots boş", { path: s.path, schemaId: s.id });
    }

    const platformish = JSON.stringify(s.data.dataBindings || []).match(
      /shopify|ikas|woocommerce|magento/i
    );
    if (platformish) {
      add(
        "warn",
        "platform-name-in-binding",
        `dataBindings platform adı içeriyor (${platformish[0]}) — soyut DataSource kullan`,
        { path: s.path, schemaId: s.id }
      );
    }
  }

  const bySeverity = { error: 0, warn: 0, info: 0 };
  for (const i of issues) bySeverity[i.severity]++;

  const byRule = {};
  for (const i of issues) byRule[i.rule] = (byRule[i.rule] || 0) + 1;

  return {
    generatedAt: inv.generatedAt,
    total: issues.length,
    bySeverity,
    byRule,
    issues: issues.sort(
      (a, b) =>
        severityRank(a.severity) - severityRank(b.severity) ||
        a.rule.localeCompare(b.rule)
    ),
  };
}

function severityRank(s) {
  return s === "error" ? 0 : s === "warn" ? 1 : 2;
}

function captureCmd(observationPath) {
  return `cd qante/scripts && node capture-observation.mjs ../${observationPath}`;
}
