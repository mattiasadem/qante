/**
 * Affordance taraması — component sınırı içinde "kullanıcı ne yapabilir?"
 *
 * Usage:
 *   node scan-affordances.mjs <obs.json> [--vp 1440]
 *   node scan-affordances.mjs --url https://... --selector ".x" --vp 375
 *
 * Taslak adımlar duruma göre: katalog kelimesi, hoverReveal→hover,
 * mobil nav'da boş chevron (yazılı <a> değil). Hâlâ kör koşulmaz —
 * agent eşler / eledikten sonra observation.interactionSteps yazar.
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dismissAllOverlays } from "./dismiss-overlays.mjs";
import { unlockStorefrontPassword } from "./storefront-password.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_URLS = {
  hyper: "https://hyper-theme-demo.myshopify.com/",
  impulse: "https://impulse-theme-fashion.myshopify.com/",
};

function parseArgs(argv) {
  const a = { obsPath: null, url: null, selector: null, vp: "1440" };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--url") a.url = argv[++i];
    else if (argv[i] === "--selector") a.selector = argv[++i];
    else if (argv[i] === "--vp") a.vp = argv[++i];
    else if (!a.obsPath) a.obsPath = argv[i];
  }
  return a;
}

const { obsPath, url: urlArg, selector: selArg, vp } = parseArgs(process.argv);
let obs = {};
if (obsPath) obs = JSON.parse(fs.readFileSync(path.resolve(obsPath), "utf8"));
const selector = selArg || obs.selector;
const url = urlArg || obs.url || DEFAULT_URLS[obs.kaynak] || null;
if (!selector || !url) {
  console.error("selector + url gerekli (obs.json ya da --url/--selector)");
  process.exit(1);
}

const VP = { 375: [375, 812], 768: [768, 1024], 1440: [1440, 1000] }[vp] || [1440, 1000];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: VP[0], height: VP[1] } });

try {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await unlockStorefrontPassword(page, obs, url);
  await page.waitForTimeout(3000);
  await dismissAllOverlays(page);
  const rootLoc = page.locator(selector).first();
  await rootLoc.waitFor({ state: "attached", timeout: 12000 }).catch(() => {});
  await rootLoc.scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(600);

  const report = await page.evaluate((sel) => {
    const all = [...document.querySelectorAll(sel)];
    const root = all[0];
    if (!root) return { error: "selector eşleşmedi" };

    const matchList = all.slice(0, 8).map((el) => {
      const r = el.getBoundingClientRect();
      const heading = (
        el.querySelector("h1, h2, h3, .h2, .h3")?.textContent || ""
      )
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 50);
      return {
        id: (el.id || el.closest("[id]")?.id || "").slice(0, 80),
        heading,
        w: Math.round(r.width),
        h: Math.round(r.height),
      };
    });

    const vis = (el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      const onPage = !!(el.offsetParent || s.position === "fixed" || s.position === "sticky");
      const inView =
        r.width > 2 &&
        r.height > 2 &&
        r.bottom > 0 &&
        r.right > 0 &&
        r.top < innerHeight &&
        r.left < innerWidth;
      return {
        onPage,
        inView,
        opacity: parseFloat(s.opacity),
        w: Math.round(r.width),
        h: Math.round(r.height),
      };
    };
    const clean = (t) => (t || "").replace(/\s+/g, " ").trim().slice(0, 40);
    const cls = (el) => (el.className || "").toString().slice(0, 70);
    const blob = (el) =>
      [
        clean(el.textContent),
        cls(el),
        el.getAttribute("aria-label") || "",
        el.getAttribute("aria-controls") || "",
        el.name || "",
        el.type || "",
        el.id || "",
      ]
        .join(" ")
        .toLowerCase();

    const openerTur = (el) => {
      const b = blob(el);
      if (/cart-drawer|aria-controls=['\"]?cart|controls.*cart/.test(b) || /cart/.test(el.getAttribute("aria-controls") || ""))
        return "cart";
      if (/search|predictive/.test(b)) return "search";
      if (/locale|localization|country|currency|language/.test(b)) return "locale";
      if (/menu-drawer|sidebar-menu|hamburger|toggle menu|navigation menu/.test(b)) return "hamburger";
      if (el.tagName === "SUMMARY" || el.closest("details")) return "mega-or-disclosure";
      if (/mega/.test(b)) return "mega-or-disclosure";
      if (/modal|dialog|quick-view|quickview/.test(b)) return "dialog";
      if (/accordion|aria-expanded/.test(b) && el.tagName !== "INPUT") return "accordion";
      return "other";
    };

    const navigates = (el) => {
      if (el.tagName !== "A") return false;
      const href = el.getAttribute("href") || "";
      return href !== "" && href !== "#" && !href.startsWith("javascript");
    };

    const openerHint = (el) => {
      const details = el.closest("details");
      if (el.tagName === "SUMMARY" && details?.id) return `#${details.id} > summary`;
      const controls = el.getAttribute("aria-controls");
      if (controls && el.tagName !== "DIV") {
        const host = el.closest("[id]")?.id;
        const tag = el.tagName.toLowerCase();
        return host
          ? `#${host} ${tag}[aria-controls='${controls}']`
          : `${tag}[aria-controls='${controls}']`;
      }
      if (el.tagName === "SUMMARY") return "details > summary";
      return null;
    };

    const kartHintOf = (el) => {
      const kart =
        el.closest(".grid-product") ||
        el.closest("[class*='grid-product']") ||
        el.closest("[class*='product-card']") ||
        el.closest("[class*='card']");
      if (!kart) return null;
      if (kart.classList.contains("grid-product") || /grid-product/.test(kart.className))
        return ".grid-product";
      if ([...kart.classList].some((c) => /product-card/.test(c)))
        return "[class*='product-card']";
      return "[class*='card']";
    };

    const katalogSorgu = (() => {
      const stop = new Set([
        "the", "a", "an", "and", "for", "new", "sale", "shop", "view", "all",
        "from", "with", "our", "your", "this", "that", "best", "home", "more",
        "item", "items",
      ]);
      const counts = new Map();
      const order = [];
      document
        .querySelectorAll(
          ".grid-product__title, .product-card__title, .card__heading, [class*='product-title'], [class*='product__title'], .card-information h3, .card-information .h3"
        )
        .forEach((el) => {
          const t = (el.textContent || "").replace(/\s+/g, " ").trim();
          t.split(/[\s–—\-\/]+/).forEach((raw) => {
            const w = raw.toLowerCase().replace(/[^a-zà-ÿ]/g, "");
            if (w.length < 4 || stop.has(w)) return;
            if (!counts.has(w)) order.push(w);
            counts.set(w, (counts.get(w) || 0) + 1);
          });
        });
      if (!order.length) return null;
      return [...order].sort(
        (a, b) => counts.get(b) - counts.get(a) || order.indexOf(a) - order.indexOf(b)
      )[0];
    })();

    const out = {
      inputs: [],
      openers: [],
      hoverReveal: [],
      cartActions: [],
      changers: [],
      navExpanders: [],
      katalogSorgu,
      searchOpenerDisari: null,
      uyari: [],
      matches: matchList,
      _sayac: {},
    };

    if (all.length > 1) {
      out.uyari.push(
        `selector ${all.length} eşleşme. capture-interaction en büyük kutuyu alır — unique id kullan (örn. [id*='featured_collection_xxx']).`
      );
    }
    const rootLooksOverlay = /modal|drawer|dialog|quick-view/.test(
      (root.tagName + " " + (root.className || "")).toLowerCase()
    );

    root.querySelectorAll("input, textarea, select").forEach((el) => {
      if (el.type === "hidden") return;
      const v = vis(el);
      const b = blob(el);
      let rol = "other";
      if (el.tagName === "SELECT") rol = "select";
      else if (el.type === "search" || el.name === "q") rol = "search";
      else if (/email|newsletter/.test(b)) rol = "newsletter";
      else if (/qty|quantity/.test(b)) rol = "quantity";
      out.inputs.push({
        rol,
        tag: el.tagName,
        type: el.type || null,
        name: el.name || null,
        placeholder: el.placeholder || null,
        gorunur: v.onPage && v.inView && v.opacity > 0,
        hint: el.name ? `${el.tagName.toLowerCase()}[name='${el.name}']` : `${el.tagName.toLowerCase()}[type='${el.type || "text"}']`,
      });
    });

    const openerSeen = new Set();
    root.querySelectorAll("[aria-controls], [aria-haspopup], details > summary, [aria-expanded]").forEach((el) => {
      const v = vis(el);
      const tur = openerTur(el);
      const metin = clean(el.textContent) || el.getAttribute("aria-label") || "";
      if (/^close$/i.test(metin.trim()) || /close \(esc\)/i.test(metin)) return;
      const key = tur + (el.getAttribute("aria-controls") || "") + metin;
      if (openerSeen.has(key)) return;
      openerSeen.add(key);
      const controls = el.getAttribute("aria-controls");
      out.openers.push({
        tur,
        tag: el.tagName,
        metin,
        controls,
        navigates: navigates(el),
        gorunur: v.onPage && v.inView && v.opacity > 0,
        hint: openerHint(el),
      });
    });

    root.querySelectorAll("button, a").forEach((el) => {
      const label = blob(el);
      const v = vis(el);
      const rec = {
        tag: el.tagName,
        metin: clean(el.textContent) || el.getAttribute("aria-label") || "",
        cls: cls(el),
        gorunur: v.onPage && v.opacity > 0,
      };

      if (/^close$/i.test(rec.metin.trim()) || /close \(esc\)/i.test(rec.metin)) return;

      if (/quick.?view|quickview|choose options/.test(label) && !/close/.test(label)) {
        out.hoverReveal.push({ ...rec, tur: "quick-view", kartHint: kartHintOf(el) });
        return;
      }
      if (/quick.?add/.test(label)) {
        out.hoverReveal.push({ ...rec, tur: "quick-add", kartHint: kartHintOf(el) });
        return;
      }
      if ((/add to cart|add-to-cart|product-form__submit/.test(label) || el.name === "add") && (el.type === "submit" || el.tagName === "BUTTON")) {
        out.cartActions.push({ ...rec, tur: "add-to-cart", hint: "button[name='add'], button.product-form__submit" });
        return;
      }
      if (/compare/.test(label)) {
        out.cartActions.push({ ...rec, tur: "compare" });
        return;
      }
      if (/wishlist|favorite|favourites?/.test(label)) {
        out.cartActions.push({ ...rec, tur: "wishlist" });
        return;
      }

      // Variant: class/role kanıtı şart — "Popular colors" başlığı variant DEĞİL
      if (/swatch/.test(label) || el.classList.contains("swatch-color") || el.closest("[class*='swatch']")) {
        out.changers.push({ ...rec, tur: "variant" });
        return;
      }
      if (el.name === "plus" || el.name === "minus" || /quantity__button/.test(label)) {
        out.changers.push({ ...rec, tur: "quantity" });
        return;
      }
      if (el.getAttribute("role") === "tab") {
        out.changers.push({ ...rec, tur: "tab" });
        return;
      }
      if (/\bfilter\b|\bsort\b/.test(label) && rec.gorunur) {
        out.changers.push({ ...rec, tur: "filter-sort" });
        return;
      }

      // Hover-reveal: yalnız kart/medya içindeki gizli action — ülke listesi / sidebar kopyası değil
      const inCard = !!el.closest("[class*='card'], [class*='product-card'], [class*='product']");
      if (inCard && (!v.onPage || v.opacity === 0) && /btn|button|action|quick|add|view/.test(label)) {
        out.hoverReveal.push({ ...rec, tur: "gizli-kart-aksiyon" });
      }
    });

    let ikinci = 0;
    const cards = root.querySelectorAll("[class*='product-card'], [class*='card__media'], .card");
    cards.forEach((card) => {
      if (card.querySelectorAll("img").length >= 2) ikinci++;
    });
    if (ikinci) out.hoverReveal.push({ tur: "ikinci-gorsel", metin: `${ikinci} medya kutusunda 2+ img` });

    // has-text tuzağı: kısa nav etiketleri
    const summaries = [...root.querySelectorAll("details > summary")].map((s) => clean(s.textContent)).filter(Boolean);
    if (summaries.some((a) => summaries.some((b) => a !== b && b.toLowerCase().includes(a.toLowerCase())))) {
      out.uyari.push("Nav etiketlerinde has-text alt string tuzağı olabilir (Women⊃Men). :text-is kullan.");
    }

    const gorunurOpener = out.openers.filter((o) => o.gorunur).length;
    if (rootLooksOverlay && gorunurOpener === 0) {
      out.uyari.push(
        "Kapalı overlay: tetikleyici bu selector'da görünmüyor. observation.prepareClick şart — tarama tek başına plan kuramaz."
      );
    }

    const rootIsNav =
      /header|site-header|site-nav|menu-drawer/i.test(
        `${root.id} ${root.className} ${root.tagName}`
      ) ||
      out.openers.some((o) =>
        ["hamburger", "mega-or-disclosure"].includes(o.tur)
      );
    out.rootIsNav = rootIsNav;
    out.rootIsSearch = /search|predictive/i.test(
      `${sel} ${root.tagName} ${root.className} ${root.id}`
    );

    if (rootIsNav) {
      const topLabels = new Set(
        [
          ...document.querySelectorAll(
            "details > summary, a.mobile-nav__link--top-level, .site-nav__link--top-level"
          ),
        ]
          .map((el) => clean(el.textContent).toLowerCase())
          .filter((t) => t.length > 1)
      );
      const expanderScopes = [root];
      document
        .querySelectorAll(
          "#NavDrawer, #MenuDrawer, [id*='NavDrawer'], [id*='MenuDrawer'], [id*='sidebar-menu']"
        )
        .forEach((d) => {
          if (d !== root && !root.contains(d)) expanderScopes.push(d);
        });
      const neighborLabel = (el) => {
        for (const side of [el.previousElementSibling, el.nextElementSibling]) {
          if (!side) continue;
          if (/^(A|SUMMARY)$/.test(side.tagName) && clean(side.textContent).length > 1)
            return side;
          const inner = side.querySelector(":scope > a, :scope > summary");
          if (inner && clean(inner.textContent).length > 1) return inner;
        }
        return null;
      };
      const labelFor = (btn) => {
        let el = neighborLabel(btn);
        if (el) return el;
        const wrap = btn.parentElement;
        if (!wrap) return null;
        el = neighborLabel(wrap);
        if (el) return el;
        return wrap.parentElement?.querySelector(":scope > a, :scope > summary") || null;
      };
      const expSeen = new Set();
      expanderScopes.forEach((scope) => {
        scope.querySelectorAll("button[aria-controls]").forEach((btn) => {
          const clone = btn.cloneNode(true);
          clone.querySelectorAll("svg, .icon, [class*='icon']").forEach((n) => n.remove());
          const text = clean(clone.textContent);
          if (text.length > 1) return;
          const controls = btn.getAttribute("aria-controls") || "";
          if (!controls || /cart|search|predictive/i.test(controls)) return;
          const tur = openerTur(btn);
          if (tur === "hamburger" || tur === "cart" || tur === "search") return;
          const labelEl = labelFor(btn);
          const label = clean(labelEl?.textContent || "");
          if (!label) return;
          if (expSeen.has(controls)) return;
          expSeen.add(controls);
          const host = btn.closest("[id]")?.id;
          const topLevel =
            !!btn.closest("[class*='nav__toggle'], .mobile-nav__toggle") ||
            (/^Linklist-/i.test(controls) && !/^Sublinklist-/i.test(controls)) ||
            /top-level|site-nav__link--has-dropdown/.test(
              (labelEl?.className || "").toString()
            ) ||
            topLabels.has(label.toLowerCase());
          out.navExpanders.push({
            tur: "nav-expander",
            label,
            topLevel,
            controls,
            hint: host
              ? `#${host} button[aria-controls='${controls}']`
              : `button[aria-controls='${controls}']`,
            not: `“${label}” yazısı <a> ise sayfaya gider — bu boş buton akordeon.`,
          });
        });
      });
      out.navExpanders.sort((a, b) => Number(b.topLevel) - Number(a.topLevel));
      const tops = out.navExpanders.filter((e) => e.topLevel);
      out.navExpanders = tops.length ? tops.slice(0, 6) : out.navExpanders.slice(0, 3);
    }

    const searchIcon =
      root.querySelector("a.js-search-header, a[href='/search']") ||
      document.querySelector("a.js-search-header, a[href='/search']");
    if (searchIcon) {
      out.searchOpenerDisari = searchIcon.classList.contains("js-search-header")
        ? "a.js-search-header"
        : "a[href='/search']";
    }

    if (!katalogSorgu) {
      out.uyari.push(
        "Sayfada ürün başlığı yok — arama fill'i yazma, katalog kelimesi uydurma (chair sabit değil)."
      );
    }

    const cap = (arr, n = 12) => (arr.length <= n ? arr : arr.slice(0, n).concat([{ _kesildi: arr.length - n }]));
    out.inputs = cap(out.inputs);
    out.openers = cap(out.openers, 15);
    out.hoverReveal = cap(out.hoverReveal, 10);
    out.cartActions = cap(out.cartActions, 8);
    out.changers = cap(out.changers, 10);

    out._sayac = {
      inputs: out.inputs.filter((x) => !x._kesildi).length,
      openers: out.openers.filter((x) => !x._kesildi).length,
      hoverReveal: out.hoverReveal.filter((x) => !x._kesildi).length,
      cartActions: out.cartActions.filter((x) => !x._kesildi).length,
      changers: out.changers.filter((x) => !x._kesildi).length,
    };
    return out;
  }, selector);

  const suggested = [];
  const push = (s) => suggested.push(s);

  push({
    state: "initial",
    action: "goto",
    value: url,
    capture: false,
    not: "Taban sayfa",
  });
  push({
    state: "initial",
    action: "scrollTo",
    selector,
    capture: true,
    etiket: "ilk-hal",
    not: "Kapalı/ilk hâl",
  });

  const hoverWorth = (report.hoverReveal || []).filter((h) =>
    ["quick-view", "quick-add", "ikinci-gorsel"].includes(h.tur)
  );
  if (hoverWorth.length && !report.rootIsNav) {
    const kart = hoverWorth.find((h) => h.kartHint)?.kartHint;
    push({
      state: "hover",
      action: "hover",
      selector: kart
        ? `${selector} ${kart}`
        : `${selector} .grid-product, ${selector} [class*='product-card']`,
      capture: true,
      etiket: "hover-reveal",
      not: `Kart hover: ${[...new Set(hoverWorth.map((h) => h.tur))].join(", ")} — kartın kendisine hover, gizli butona değil. 375/768 kare initial ile aynıysa hover'ı missingStates'e al.`,
    });
  }

  const searchIn = (report.inputs || []).find((i) => i.rol === "search" && i.tag === "INPUT");
  const searchOpen =
    (report.openers || []).find((o) => o.tur === "search" && o.hint && o.tag !== "INPUT") ||
    (report.searchOpenerDisari
      ? { hint: report.searchOpenerDisari }
      : obs.prepareClick
        ? { hint: obs.prepareClick }
        : null);
  const emitSearch =
    report.rootIsSearch ||
    (!report.rootIsNav && !!searchIn);
  if (searchIn && !emitSearch) {
    (report.uyari ||= []).push(
      "Bu kökte arama input'u var ama component nav/header — search ayrı observation, fill atlandı."
    );
  }
  if (searchIn && emitSearch) {
    if (!searchIn.gorunur) {
      if (searchOpen?.hint) {
        push({
          state: "input",
          action: "click",
          selector: searchOpen.hint,
          capture: false,
          not: "Search input viewport dışında / gizli — önce opener (off-screen offsetParent yetmez)",
        });
      } else {
        (report.uyari ||= []).push(
          "Search input görünür değil ve opener yok. observation.prepareClick yaz, fill'i kör koşma."
        );
      }
    }
    if (report.katalogSorgu) {
      push({
        state: "input",
        action: "fill",
        selector: searchIn.hint || `${selector} input[name='q'], ${selector} input[type='search']`,
        value: report.katalogSorgu,
        capture: true,
        etiket: "arama-sonucu",
        not: `Katalog kelimesi “${report.katalogSorgu}” — chair sabit değil. Sonuç boşsa başka ürün adı dene.`,
      });
    }
  }

  const megas = (report.openers || []).filter(
    (o) => o.tur === "mega-or-disclosure" && o.gorunur && o.hint && !o.navigates
  );
  const ham = (report.openers || []).find((o) => o.tur === "hamburger" && o.hint);
  if (megas.length > 1) {
    (report.uyari ||= []).push(
      `${megas.length} mega opener. İlki önerildi (“${megas[0].metin}”); daha dolu panel için diğerlerini yokla.`
    );
  }
  if (megas[0]?.hint) {
    push({
      state: "open",
      action: "hover",
      selector: megas[0].hint,
      viewports: ham ? ["1440"] : undefined,
      capture: true,
      etiket: "mega-panel-acik",
      not: `Aç: mega “${megas[0].metin}” — details#id > summary (SVG'li text-is timeout). Ürün-id'li QuickView atlandı.`,
    });
  }
  if (ham?.hint) {
    push({
      state: "open",
      action: "click",
      selector: ham.hint,
      viewports: ["375", "768"],
      capture: true,
      etiket: "mobil-menu-acik",
      not: "Hamburger — 768'de de summary gizli olabilir",
    });
  }
  const exp = (report.navExpanders || []).find(
    (e) => e.hint && !e._kesildi && (e.topLevel || report.navExpanders.every((x) => !x.topLevel))
  );
  if (exp?.hint && report.rootIsNav) {
    push({
      state: "changed",
      action: "click",
      selector: exp.hint,
      viewports: ["375", "768"],
      capture: true,
      etiket: "mobil-akordeon-acik",
      not: exp.not || "Boş chevron — yazılı <a> / Shop By Category sayfaya gider, ona basma. PNG'de drawer duruyor mu bak.",
    });
  }

  if (
    obs.prepareClick &&
    !suggested.some((s) => s.action === "click" && s.selector === obs.prepareClick)
  ) {
    push({
      state: "open",
      action: "click",
      selector: obs.prepareClick,
      capture: true,
      etiket: "dialog-acik",
      not: "Observation.prepareClick — overlay tetikleyici component dışında olabilir",
    });
  }

  const atc = (report.cartActions || []).find((c) => c.tur === "add-to-cart");
  if (atc) {
    push({
      state: "filled",
      action: "addToCart",
      selector: atc.hint || `${selector} button[name='add']`,
      capture: false,
      not: "Veri üret; overlay/sayfayı ayrıca dolu çek",
    });
  }

  const ch = (report.changers || []).filter((c) => !c._kesildi && c.gorunur);
  if (ch.length && !report.rootIsNav) {
    const tur = [...new Set(ch.map((c) => c.tur))];
    const sample = ch.find((c) => c.gorunur) || ch[0];
    push({
      state: "changed",
      action: "click",
      selector:
        sample.tur === "variant"
          ? `${selector} .swatch-color, ${selector} [class*='swatch']`
          : sample.tur === "quantity"
            ? `${selector} button[name='plus']`
            : `${selector} [role='tab']`,
      capture: true,
      etiket: "degisti",
      not: `Değiştir: ${tur.join(", ")}`,
    });
  }

  console.log(
    JSON.stringify(
      {
        selector,
        url,
        vp,
        uyari: report.uyari || [],
        matches: report.matches || [],
        sayac: report._sayac,
        katalogSorgu: report.katalogSorgu || null,
        affordances: report.error ? report : {
          inputs: report.inputs,
          openers: report.openers,
          hoverReveal: report.hoverReveal,
          cartActions: report.cartActions,
          changers: report.changers,
          navExpanders: report.navExpanders,
        },
        suggestedSteps: suggested,
      },
      null,
      2
    )
  );
} finally {
  await browser.close();
}
