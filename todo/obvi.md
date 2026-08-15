# Todo — Obvi (myobvi.com)

*Kaynak:* https://myobvi.com · *Preset:* default · *Tema:* Platter custom

**Durum:** ✅ kalan canlı şablonlar kapandı (bundle public; 404'ler kayıtlı)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/obvi/default/` |
| Capture | `capture-observation.mjs` + `capture-interaction.mjs` (375 / 768 / 1440) |
| Yeni batch | `scripts/run-obvi-remaining.mjs` |
| Validate | `npm run validate` → **65 temiz · 0 error · 0 warn** |
| PR #1 | merged (quiz iframe) — bu tur ayrı draft, **main'e merge yok** |

---

## Kalan şablon checklist (2026-08-15 walk)

| # | Şablon | URL | Durum | Observation | 3vp |
|---|---|---|---|---|---|
| 1 | Search results | `/search?q=collagen` | ✅ | `search/search-results` | ✅ mevcut |
| 2 | Blog list | `/blogs/news` | ✅ | `blog-list/blog-list-main-3` | ✅ yeni |
| 3 | Article | `/blogs/news/benefits-of-using-a-detox-supplement-…` | ✅ | `blog-post-main-3` + overlay hero | ✅ yeni |
| 4 | Recipes list | `/blogs/recipes` | ✅ | `blog-list-main-2` (aynı şablon) | ✅ mevcut |
| 5 | Recipe post | `/blogs/recipes/dark-chocolate-sea-salt-collagen-bites` | ✅ | `blog-post-main-2` | ✅ mevcut |
| 6 | Our Story | `/pages/about-us-1` | ✅ | editorial + marquee + polaroids | ✅ |
| 7 | How To Start | `/pages/how-to-start` | ✅ | `page-content-main` + cards | ✅ |
| 8 | Bundle builder | `/pages/bundle-builder` | ✅ public | `bundle/commerce-tools-products-bundle` | ✅ yeni |
| 9 | Collagen PLP | `/collections/collagen-protein-powder` | ✅ | `product-showcase-grid-plp-3` + tabs-3 | ✅ yeni |
| 10 | Mobile 375 drawer | home hamburger | ✅ | `home/global-menu-drawer` | ✅ 375+768 (1440 N/A) |
| 11 | Rewards | `/pages/obvis-rewards-program` | 🟡 candidate | `candidates/obvi-rewards-loyalty.md` | embed — şema yok |
| 12 | 404'ler | aşağıda | ⛔ | todo only | — |

---

## 404 blockers (şema yok)

| URL | Durum |
|---|---|
| `/pages/join-obvi-community` | 404 |
| `/pages/bundler` | 404 (çalışan bundle: `/pages/bundle-builder`) |
| `/pages/wholesale-inquiries` | 404 |
| `/pages/tracking` | 404 |

---

## Şema kararları

| Soru | Karar |
|---|---|
| Bundle yeni tip mi? | **Hayır** — `commerce-tools-products-bundle` uyuyor. Sticky tray + progress = delta. |
| Our Story page-content-main? | **Hayır tutmaz** — hero + ticker + polaroids mevcut editorial/marquee. |
| Recipe ayrı şema? | **Hayır** — blog-post-main; ingredients gövde kopyası. |
| Rewards points engine? | **İcat etme** — candidate. |

---

## Yeni şema (tüm Obvi)

| schemaId | Not |
|---|---|
| product-finder-quiz | Önceki tur (quiz iframe) |

Bu tur: **0 yeni şema**.

---

## Açık iş

- Rewards embed — candidate
- Scratch-card — hâlâ yok
- 404 URL'ler düzelince retest
