# Todo — Pipeline (Groupthought / Shopify paid)

*Kaynak:* https://pipeline-theme-fashion.myshopify.com/  
*Preset:* `default` (Fashion / official Theme Store preview)  
*Theme Store:* https://themes.shopify.com/themes/pipeline  
*Tema (storefront, uydurulmadı):* **Pipeline 8.2.0** · `schema_name`: **Pipeline** · `schema_version`: **8.2.0** · `theme_store_id`: **null** · role `main` · id `162762195160`  
*Shop:* `pipeline-theme-fashion.myshopify.com`  
*Not:* `pipeline-theme.myshopify.com` sibling Bright demo — **yürünmedi**.

**Durum:** ⬜ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pipeline/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **50** (yazıldı; evidence bekleniyor) |
| Parallel | yalnız `observations/pipeline/`, `evidence/pipeline/`, `todo/pipeline.md`, `candidates/pipeline-leftovers.md` |

**Kapsam satırı:**  
`Pipeline · default · Pipeline 8.2.0 / schema_name Pipeline 8.2.0 · theme_store_id null · Fashion Theme Store preview · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 50 obs · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / tabs / splits / bestsellers / look / wayfarer / collections / newsletter / icons / logos / footer | [x] roster | [ ] |
| Header + Shop mega 1440 | [x] roster | [ ] |
| Predictive search `dress` | [x] roster | [ ] |
| Cart drawer empty + filled + qty | [x] roster | [ ] |
| Mobile hamburger 375 | [x] roster | [ ] 768 leftover |
| PDP Andre Luxe Size XS→S | [x] roster | [ ] |
| PLP `/collections/fall-2022` | [x] roster | [ ] |
| Collections index `/collections` | [x] roster | [ ] |
| Search `/search?q=dress` | [x] roster | [ ] |
| Cart `/cart` empty + filled + qty | [x] roster | [ ] |
| About `/pages/about` | [x] roster | [ ] |
| Contact form (SEND yok) | [x] roster | [ ] |
| News `/blogs/news` + sustainability post | [x] roster | [ ] |
| 404 | [x] roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | Shop mega 3 kolon + Bestselling/New — capture bekleniyor |
| global-predictive-search | initial / input | `dress` — capture bekleniyor |
| global-menu-drawer | open / changed | 375 Shop expand — 768 hamburger 0×0 leftover |
| global-cart-drawer | initial / filled / changed | empty + Andre $698 + qty |
| cart-page-main | initial / filled / changed | empty + filled + qty |
| product-info-main | initial / changed | Size XS→S |

---

## Aday / leftover

[`candidates/pipeline-leftovers.md`](../candidates/pipeline-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
