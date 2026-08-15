# Todo — Primal Queen (primalqueen.com)

*Kaynak:* https://primalqueen.com · *Preset:* `default`  
*Tema (storefront):* **Dev By Vasta - Main** · `schema_name`: Sense · `schema_version`: 11.0.0 · `theme_store_id`: null (custom) · shop `3be06b-2.myshopify.com` · theme id `167597408533` · role `main`

**Durum:** Mod A walk + resmi 3vp + interact (piksel değişenler) bitti  
**PR:** https://github.com/mattiasadem/qante/pull/28 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/primalqueen/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız primalqueen paths |

**Kapsam satırı:**  
`Primal Queen · default · Dev By Vasta - Main / Sense 11.0.0 custom · home→PDP→PLP merch→shop-all→search→cart page→content→footer→mobile · 38 obs · resmi 3vp + menu/cart/FAQ/PDP/merch1440 interact · leftover: Stamped, sticky CTA, ticker, advertorial LPs, Marrow A/B, Gorgias, 404, empty terms/retail/blog, no predictive search, merch 375/768 filter`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + countdown/header/footer/FAQ | [x] | [x] |
| Menu drawer (1440+768+375 hamburger) | [x] | [x] |
| PDP `/products/primal-queen-superfood-organs` | [x] + 1 Month | [x] |
| PLP `/collections/merch` banner + grid | [x] Hoodies 1440 | [x] · 375/768 filter leftover |
| Shop-all `/collections/shop-all` | [x] | [x] |
| Search `/search?q=beef` | [x] | [x] |
| Cart `/cart` empty + filled | [x] UI ATC | [x] |
| Contact Gorgias iframe | [x] host | [x] · PII yok |
| Clinical study | [x] 3 | [x] |
| PQ7 / Goddess / Bundle LPs | [x] | [x] · A/B suffix selector |
| Marrow `/pages/marrow` | ⛔ A/B redirect | leftover |
| 404 | [x] | [x] candidate |
| Terms / privacy / retail / reviews / blog | ⛔ leftover | — |
| Predictive search | ⛔ yok | — |
| Cart drawer | ⛔ yok — sayfa | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–18 | home chrome + long-form | home | [x] | [x] | reuse | [x] |
| 19–22 | PDP main/compare/who/not-for | product-detail | [x] | [x] | reuse | [x] |
| 23–24 | merch banner + grid | collection | [x] | [x] | reuse | [x] |
| 25–26 | shop-all featured + compare | shop-all | [x] | [x] | reuse | [x] |
| 27 | search-results | search | [x] | [x] | reuse | [x] |
| 28 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 29 | page-content-main | contact | [x] | [x] | reuse | [x] |
| 30–32 | clinical (3) | clinical-study | [x] | [x] | reuse | [x] |
| 33–34 | pq7 trust + buy | landing-pq7 | [x] | [x] | reuse | [x] |
| 35–36 | goddess hero + founder | landing-goddess | [x] | [x] | reuse | [x] |
| 37 | bundle builder | landing-bundle | [x] | [x] | reuse | [x] |
| 38 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega / global-menu-drawer | open | [x] 375+768+1440 |
| cart-page-main | filled | [x] Starter Kit $78 · ATC ui |
| product-info-main | changed | [x] Delivered monthly → $39 ATC |
| product-showcase-grid-plp | changed | [x] 1440 Hoodies 2 kart · 375/768 leftover |
| faq-collapsible-tabs home | changed | [x] 3rd party lab tested açık |

---

## Aday / leftover

[`candidates/primalqueen-leftovers.md`](../candidates/primalqueen-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (38)
- [x] Menu / cart / FAQ / 1-month / merch 1440
- [ ] Merch Hoodies 375/768
- [ ] Cart qty `changed`
- [ ] Newsletter / Gorgias / Loop / partnership — **PII yok / yapılmayacak**
