# Todo — Primal Queen (primalqueen.com)

*Kaynak:* https://primalqueen.com · *Preset:* `default`  
*Tema (storefront):* **Dev By Vasta - Main** · `schema_name`: Sense · `schema_version`: 11.0.0 · `theme_store_id`: null (custom) · shop `3be06b-2.myshopify.com` · theme id `167597408533` · role `main`

**Durum:** Mod A walk yazıldı — resmi 3vp / interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/primalqueen/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/primalqueen/`, `evidence/primalqueen/`, `todo/primalqueen.md`, `candidates/primalqueen-*.md` |

**Kapsam satırı:**  
`Primal Queen · default · Dev By Vasta - Main / Sense 11.0.0 custom · home→PDP→PLP merch→shop-all→search→cart page→content→footer→mobile · 40 obs · 0 yeni şema · leftover: Stamped, sticky CTA, advertorial LPs, Gorgias, 404, empty terms/retail, no predictive search`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + countdown/header/footer/FAQ | [x] JSON | [ ] capture |
| Menu drawer (1440+768+375 hamburger) | [x] JSON | [ ] interact |
| PDP `/products/primal-queen-superfood-organs` | [x] JSON | [ ] + 1 Month |
| PLP `/collections/merch` banner + grid | [x] JSON | [ ] + Hoodies |
| Shop-all `/collections/shop-all` (all redirect) | [x] JSON | [ ] |
| Search `/search?q=beef` | [x] JSON | [ ] |
| Cart `/cart` empty + filled | [x] JSON | [ ] interact |
| Contact Gorgias iframe | [x] host JSON | [ ] · PII yok |
| Clinical study | [x] 3 JSON | [ ] |
| PQ7 / Goddess / Marrow / Bundle LPs | [x] hero/buy/faq | [ ] rest leftover |
| 404 | [x] JSON | [ ] candidate |
| Terms / privacy / retail / reviews / blog | ⛔ leftover | — |
| Predictive search | ⛔ yok | — |
| Cart drawer | ⛔ yok — sayfa | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 4 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 6 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 7 | editorial-timeline | home | [ ] | [x] | reuse | [ ] |
| 8 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 9 | features-multicolumn-2 | home | [ ] | [x] | reuse | [ ] |
| 10 | editorial-rich-text-2 | home | [ ] | [x] | reuse | [ ] |
| 11 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 12–14 | founder / founder2 / overlay | home | [ ] | [x] | reuse | [ ] |
| 15 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 16 | commerce-tools-products-bundle | home | [ ] | [x] | reuse | [ ] |
| 17 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 18 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 19 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | comparison-quick-table | product-detail | [ ] | [x] | reuse | [ ] |
| 21–22 | who-is / not-for | product-detail | [ ] | [x] | reuse | [ ] |
| 23–24 | collection-banner + grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 25–26 | shop-all featured + compare | shop-all | [ ] | [x] | reuse | [ ] |
| 27 | search-results | search | [ ] | [x] | reuse | [ ] |
| 28 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 29 | page-content-main | contact | [ ] | [x] | reuse | [ ] |
| 30–32 | clinical (3) | clinical-study | [ ] | [x] | reuse | [ ] |
| 33–34 | pq7 trust + buy | landing-pq7 | [ ] | [x] | reuse | [ ] |
| 35–36 | goddess hero + founder | landing-goddess | [ ] | [x] | reuse | [ ] |
| 37–38 | marrow buy + faq | landing-marrow | [ ] | [x] | reuse | [ ] |
| 39 | bundle builder | landing-bundle | [ ] | [x] | reuse | [ ] |
| 40 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega / global-menu-drawer | open | hamburger 375+768+1440 |
| cart-page-main | filled | shop-all ATC → /cart |
| product-info-main | changed | 1 Month Supply |
| product-showcase-grid-plp | changed | Hoodies pill |
| faq-collapsible-tabs home | changed | soru tık |

---

## Aday / leftover

[`candidates/primalqueen-leftovers.md`](../candidates/primalqueen-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Menu / cart / FAQ / variant / merch filter interact
- [ ] Newsletter / Gorgias / Loop / partnership — **PII yok**
