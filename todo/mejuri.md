# Todo — Mejuri (mejuri.com)

*Kaynak:* https://mejuri.com/ · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` **yok**. Custom headless storefront; yalnız `customerPrivacy` + `trackingConsent` (`@shopify/consent-tracking-api` v0.2). `#shopify-section-*` yok. `data-testid` tabanlı React UI.

**Durum:** Mod A walk + resmi 3vp kapandı  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/mejuri/default/` |
| Capture | resmi `capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **54** |
| Validator | 65 şema · 0 error · 0 warn |
| Parallel | yalnız `observations/mejuri/`, `evidence/mejuri/`, `todo/mejuri.md`, `candidates/mejuri-leftovers.md` |

**Kapsam satırı:**  
`Mejuri · default · custom headless (Shopify.theme yok) · home→PDP→PLP→search→cart-drawer→blog→footer · 18 obs · 54 PNG · 0 yeni şema · leftover: candidates/mejuri-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ resmi |
| Search overlay / cart drawer / mobile menu | ✅ | ✅ |
| PDP Tube Huggie Hoops | ✅ | ✅ |
| PLP `/collections/shop-all` | ✅ | ✅ |
| Search `/search?q=hoop` + modal | ✅ | ✅ (modal 1440; /search kırık) |
| Blog list `/blog` | ✅ | ✅ |
| FAQ `/faq/top-faqs` | ✅ | ✅ |
| About `/company/about-us` | ✅ | ✅ |
| Blog post detail | ⛔ 404 | leftover |
| Newsletter / login / checkout | ⛔ PII yok | — |

---

## Bileşen roster (18)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 4 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 6 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 7 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 8 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 9 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 10 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 11 | product-info-tabs | product-detail | [x] | [x] | reuse | [x] |
| 12 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 13 | collection-nav-slider | collection | [x] | [x] | reuse | [x] |
| 14 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 15 | search-results | search | [x] | [x] | reuse | [x] |
| 16 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 17 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 18 | editorial-image-with-text-overlay | about-brand | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/mejuri-leftovers.md`](../candidates/mejuri-leftovers.md)

---

## Evidence backlog (bilinçli açık)

- [x] Claiming 18 obs resmi 3vp
- [x] Overlay / cart / menu / search modal
- [ ] Blog post detail — leftover (404)
- [ ] Newsletter / login / checkout — **yapılmayacak** (PII)
