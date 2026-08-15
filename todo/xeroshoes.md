# Todo — Xero Shoes (xeroshoes.com)

*Kaynak:* https://xeroshoes.com · *Preset:* `default`  
*Tema (vitrinde görülen):* **xeroshoes-com-theme/main** · `schema_name`: Feel the World · `schema_version`: 1.2.0 · `theme_store_id`: null (custom) · shop `shopxeroshoes.myshopify.com` · theme id `151676485810` · role `main`  
*Footer copyright:* “Feel the World” (uydurulmadı)

**Durum:** Mod A walk kapandı — 48 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/34 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/xeroshoes/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/xeroshoes/`, `evidence/xeroshoes/`, `todo/xeroshoes.md`, `candidates/xeroshoes-*.md` |

**Kapsam satırı:**  
`Xero Shoes · default · xeroshoes-com-theme/main (Feel the World 1.2.0, custom) · home→PDP→PLP→search→cart→content→footer→mobile · 48 obs · 0 yeni şema · leftover: Stamped/Gorgias/quick-view/404/why-barefoot/Bought Together`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/tabs/collections | ✅ | ✅ |
| Mega Men 1440 / search `prio` / cart drawer empty+filled / mobile menu | ✅ interact | ✅ (menu 1440 N/A · search 375 N/A) |
| PDP `/products/prio-men` + WOMEN | ✅ | ✅ |
| PLP `/collections/mens` | ✅ | ✅ |
| Search `/search?q=hfs` (6 results) | ✅ | ✅ |
| Cart `/cart` boş + drawer dolu | ✅ | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| Contact `/pages/contact` (form yok) | ✅ | ✅ |
| Stores `/pages/stores` | ✅ | ✅ |
| Help Center Gorgias iframe | ✅ parent | ✅ leftover embed |
| Blog `/blogs/blog` + flat-feet post | ✅ | ✅ |
| Policy privacy | ✅ | ✅ |
| Warranty / returns / sizing | ✅ | ✅ |
| Shoe finder Digioh + Beginner | ✅ | ✅ PII dur |
| Xero Circle | ✅ form gönderilmedi | ✅ |
| 404 | ⛔ aday + parent | ✅ |
| Newsletter / claim / Circle submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + Men mega | [x] | reuse | [x] |
| 3 | promo-announcement-bar.2 | home teaser | [x] 768+1440 | [x] 375 0px | reuse | [x] |
| 4 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-tabs | home | [x] + BEST SELLERS | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7 | features-multicolumn | home SEO | [x] | [x] | reuse | [x] |
| 8 | features-multicolumn.2 | home Natural | [x] | [x] | reuse | [x] |
| 9 | collection-nav-image-cards.2 | home activity | [x] | [x] | reuse | [x] |
| 10 | editorial-image-with-text | home X1/Mesa | [x] | [x] | reuse | [x] |
| 11 | editorial-image-with-text.2 | home community | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 13 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 14 | global-predictive-search | home | [x] 768+1440 prio | [x] 375 N/A | reuse | [x] |
| 15 | global-menu-drawer | home | [x] 375+768 | [x] 1440 N/A | reuse | [x] |
| 16 | global-quick-view | home | [x] kapalı kare | leftover | reuse | [x] |
| 17 | navigation-breadcrumbs | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-info-main | product-detail | [x] + WOMEN | [x] | reuse | [x] |
| 19 | product-info-tabs | product-detail | [x] | [x] | reuse | [x] |
| 20 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 21 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 22 | faq-collapsible-tabs | product-detail | [x] + waterproof | [x] | reuse | [x] |
| 23 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 24 | collection-nav-tabs | collection | [x] | [x] | reuse | [x] |
| 25 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 26 | faq-collapsible-tabs | collection | [x] | [x] | reuse | [x] |
| 27 | search-results | search | [x] | [x] | reuse | [x] |
| 28 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 29–31 | about (3) | about-brand | [x] | [x] | reuse | [x] |
| 32–33 | contact + stores | contact | [x] | [x] | reuse | [x] |
| 34–36 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 37 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 38–42 | warranty / returns / sizing / help | faq-support | [x] | [x] | reuse | [x] |
| 43 | product-finder-quiz | landing-campaign | [x] + Beginner | [x] | reuse | [x] |
| 44 | lead-capture-newsletter-band | landing-campaign | [x] | [x] PII yok | reuse | [x] |
| 45 | page-content-main | not-found | [x] | leftover | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Men — FOOTWEAR / BY ACTIVITY / Best Sellers 2×2 / Featured Coast Suede |
| global-predictive-search | initial, input | 768/1440 `prio` — PRODUCT RESULTS 4 kart + View All; 375 N/A |
| global-cart-drawer | initial, filled | Prio Men $99.99 Vintage Indigo 6.5; free shipping; ATC **ui** |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| product-showcase-tabs | initial, changed | BEST SELLERS — Genesis + Prio; Quick Add beden |
| product-info-main | changed | WOMEN Dusty Blue / 5847 reviews / charms |
| faq-collapsible-tabs (PDP) | changed | Waterproof cevabı açık |
| product-finder-quiz | initial, changed | Beginner seçili; **PII dur** |

---

## Aday / leftover

[`candidates/xeroshoes-leftovers.md`](../candidates/xeroshoes-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (teaser 375 zero — not)
- [x] Mega / search / cart / menu / tabs / PDP / quiz interact
- [ ] Quick shop drawer `open` (prepareClick açmadı)
- [ ] Cart qty `changed`
- [ ] Stamped reviews (şema yok)
- [ ] Newsletter / contact / claim / Circle submit — **yapılmayacak** (PII)
