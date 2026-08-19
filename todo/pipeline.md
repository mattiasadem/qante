# Todo — Pipeline (Groupthought / Shopify paid)

*Kaynak:* https://pipeline-theme-fashion.myshopify.com/  
*Preset:* `default` (Fashion / official Theme Store preview)  
*Theme Store:* https://themes.shopify.com/themes/pipeline  
*Tema (storefront, uydurulmadı):* **Pipeline 8.2.0** · `schema_name`: **Pipeline** · `schema_version`: **8.2.0** · `theme_store_id`: **null** · role `main` · id `162762195160`  
*Shop:* `pipeline-theme-fashion.myshopify.com`  
*Not:* `pipeline-theme.myshopify.com` sibling Bright demo — **yürünmedi**.

**Durum:** ✅ Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/215 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pipeline/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **50** |
| Evidence PNG | **197** |
| Parallel | yalnız `observations/pipeline/`, `evidence/pipeline/`, `todo/pipeline.md`, `candidates/pipeline-leftovers.md` |

**Kapsam satırı:**  
`Pipeline · default · Pipeline 8.2.0 / schema_name Pipeline 8.2.0 · theme_store_id null · Fashion Theme Store preview · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 50 obs · 197 PNG · 0 yeni şema · leftover: Bright / hamburger 768 / lookbooks / map / Quick Add / size guide / no countdown-reviews-quiz · PII`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / tabs / splits / bestsellers / look / wayfarer / collections / newsletter / icons / logos / footer | [x] | [x] |
| Header + Shop mega 1440 | [x] | [x] |
| Predictive search `dress` | [x] | [x] 375/768/1440 |
| Cart drawer empty + filled + qty | [x] | [x] 1→2 · $698→$1,396 |
| Mobile hamburger 375 | [x] | [x] 768/1440 inline leftover |
| PDP Andre Luxe Size XS→S | [x] | [x] stok 14→30 · $698 aynı |
| PLP `/collections/fall-2022` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=dress` | [x] | [x] 57 results |
| Cart `/cart` empty + filled + qty | [x] | [x] 1→2 · $698→$1,396 |
| About `/pages/about` | [x] | [x] |
| Contact form (SEND yok) | [x] | [x] |
| News `/blogs/news` + sustainability post | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | Shop mega 3 kolon + Bestselling/New |
| global-predictive-search | initial / input | `dress`: SUGGESTIONS 1 + PRODUCTS 5 + SEARCH FOR 'DRESS' |
| global-menu-drawer | open / changed | 375 liste → Shop drill-down + promo. 768 hamburger 0px |
| global-cart-drawer | initial / filled / changed | boş → qty1 $698 → qty2 $1,396 |
| cart-page-main | initial / filled / changed | boş → qty1 $698 → qty2 $1,396 |
| product-info-main | initial / changed | SIZE XS 14 left → S 30 left · $698 · Description açık |
| faq-collapsible-tabs (contact) | initial / changed | Where do you ship? — We ship worldwide |
| faq-collapsible-tabs (cart) | initial / changed | Shipping options — Standard/Expedited/Overnight |
| product-showcase-tabs | initial / changed | CASHMERE Andre $698 → COTTON Havana $328 |
| media-lookbook-slider | initial / changed | Cei $398 → Adel Pant $368 (hotspot 2) |

---

## Aday / leftover

[`candidates/pipeline-leftovers.md`](../candidates/pipeline-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size
- [x] CRO leftover: FAQ ×2 / fabric tabs / lookbook hotspot / PDP Description
- [x] PNG bak → stateFindings
- [x] `npm run validate`
