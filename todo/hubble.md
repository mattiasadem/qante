# Todo — Hubble (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://hubble-nutrition.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/hubble-best-nutrition-supplement-store-0s-2-0  
*Preset:* `default` · *Slug:* `hubble`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **Hubble-nutrition V-1.2.0**  
`schema_name` = **hubble-nutrition** · `schema_version` = **1.2.0** · `role` = **main** · theme id `163975790900`  
`theme_store_id` = **null**  
shop `hubble-nutrition.myshopify.com`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock.

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** https://github.com/mattiasadem/qante/pull/336 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hubble/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **34** |
| Evidence PNG | **133** |
| Parallel | yalnız `observations/hubble/`, `evidence/hubble/`, `todo/hubble.md`, `candidates/hubble-leftovers.md` + unlock helper |

**Kapsam satırı:**  
`Hubble · default · Hubble-nutrition V-1.2.0 / schema_name hubble-nutrition 1.2.0 · theme_store_id null · shop hubble-nutrition.myshopify.com · password 1 · home→PDP mushroom-chai 30→60→PLP all hover→search chai→cart empty/filled/qty2→collections→about→contact→faqs→news empty→404 · 34 obs · 133 PNG · 0 yeni şema · leftover: candidates/hubble-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/IWT/marquee/features/reviews/UGC/footer | [x] | [x] |
| Cart drawer boş + filled + qty2 | [x] | [x] interact |
| Menu drawer 375+768 | [x] | [x] 2vp (1440 N/A) |
| Predictive search | leftover | hidden |
| PDP variant 30→60 | [x] | [x] interact |
| PDP FAQ How does it taste? | [x] | [x] interact |
| PLP `/collections/all` + hover 1440 + quick-add | [x] | [x] |
| Search `/search?q=chai` | [x] | [x] |
| Cart `/cart` empty + filled | [x] | [x] |
| Collections / about / contact / faqs / news empty / 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact

| Bileşen | State | Durum |
|---|---|---|
| product-info-main | changed 30→60 | ✅ $25 aynı, pill değişti |
| global-cart-drawer | filled + qty 1→2 | ✅ $25 → $50 |
| cart-page-main | filled | ✅ satır 30 Servings |
| product-showcase-grid-plp | hover 1440 | ✅ bardak; 375/768 missing |
| faq-collapsible-tabs | changed | ✅ taste cevabı |
| global-menu-drawer | open 375/768 | ✅ düz linkler |
| global-predictive-search | open/input | ⛔ hidden leftover |
| global-quick-view | open (statik prepareClick) | ✅ Choose options modal |

---

## Aday / leftover

[`candidates/hubble-leftovers.md`](../candidates/hubble-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static — 34 obs (search 0 PNG)
- [x] Interact
- [x] `npm run validate` — 0 error (mevcut warn’lar Hubble şeması değil)
