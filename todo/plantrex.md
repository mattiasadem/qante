# Todo — Plantrex (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://pandora-flower.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/flower-beautiful-flower-shop-shopify-template-o-s-2-0  
*Preset klasör:* `default` · slug `plantrex`  
*Vendor:* Speedo Themes (third-party OS 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **pandora-flower-v-1-5-0**  
`schema_name` = **Pandora_flower** · `schema_version` = **1.5.0** · `role` = **main** · theme id `124515549269`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host `pandora-flower.myshopify.com` · `Shopify.shop` = **pandora-flower.myshopify.com** · locale `en` · country `US` · currency `USD`

**Storefront unlock:** vendor product page publishes demo password `1` (`Please enter password "1" to view demo.`). Same host `/password` — not an account. Other hosts were not used.

**Durum:** ✅ Mod A + interact kapandı — 28 obs · 132 PNG · 0 yeni şema  
**PR:** https://github.com/mattiasadem/qante/pull/327 (draft) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/plantrex/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **28** |
| PNG | **132** (82 static 3vp + 50 interact) |
| Parallel | yalnız `observations/plantrex/`, `evidence/plantrex/`, `todo/plantrex.md`, `candidates/plantrex-leftovers.md`, capture unlock helper |

**Kapsam satırı:**  
`Plantrex · default · pandora-flower-v-1-5-0 / schema_name Pandora_flower 1.5.0 · theme_store_id null · shop pandora-flower.myshopify.com · home→PDP gerberas-flower-bouquet Mix→White→PLP /collections/best-seller→cart empty/filled→footer · 28 obs · 132 PNG · 0 yeni şema · leftover: candidates/plantrex-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop dropdown hover 1440 | [x] obs | [x] interact |
| Predictive search | [x] obs | [x] interact |
| Mobile menu 375 + 768 | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Gerberas Color Mix→White | [x] obs | [x] interact |
| PLP `/collections/best-seller` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] obs | [x] interact |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop details dropdown (mega class yok) |
| 3 | image-banner slideshow | `hero-slideshow` | reuse · 2 slayt |
| 4 | rich-text Our Story | `editorial-rich-text` | reuse |
| 5 | custom-icon Shop By Types | `collection-nav-icon-buttons` | reuse · href # |
| 6 | collection-list Shop By Category | `collection-nav-grid` | reuse |
| 7 | homepage_tab Trendy Collection | `product-showcase-tabs` | reuse |
| 8 | image-banner overlay | `editorial-image-with-text-overlay` | reuse |
| 9 | sub-banner Exclusive Offer | `promo-grid-banner` | reuse · two_column |
| 10 | reviews | `testimonial-quote-carousel` | reuse |
| 11 | featured-blog | `blog-list-main` | reuse · home teaser |
| 12 | accordion Faqs | `faq-collapsible-tabs` | reuse |
| 13 | parallax BEST FLOWER BOUQUET | `editorial-image-with-text-overlay.2` | reuse |
| 14 | custom-instagram @Floral | `media-mosaic-grid` | reuse · hotspot yok |
| 15 | multicolumn trust | `trust-icon-row` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 17 | newsletter-popup | — | leftover 0px / PII |
| 18 | CartDrawer | `global-cart-drawer` | reuse · interact |
| 19 | Search-In-Modal | `global-predictive-search` | reuse · interact |
| 20 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–19 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 20 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 21–24 | trust / IWT ×2 / related | product-detail | [x] | [x] | reuse | [x] |
| 25–26 | banner + PLP grid | collection | [x] | [x] | reuse | [x] |
| 27–28 | cart-items + featured | cart | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Shop hover: Birthday / Occasion / Anniversary / Luxurious. Tıklama `/collections`. |
| global-predictive-search | input | `bouquet`: SUGGESTIONS + PRODUCTS. Statik 375/768 homepage sızmıştı; interact opener düzeltti. |
| global-menu-drawer | open + changed | 375/768 hamburger + Shop accordion (← Shop + 4 alt). 1440 hamburger yok. |
| global-cart-drawer | filled + changed | Gerberas Mix qty 1 $75 → qty 2 $150. Checkout tıklanmadı. |
| cart-page-main | filled + changed | Aynı satır `/cart`. TOTAL $75 → $150. |
| product-info-main | changed | Mix → White: galeri pembe/beyaz gül; fiyat $75 aynı. |
| product-showcase-tabs | changed | Best Sellers → NEW arrivals; kart seti değişti. |
| faq-collapsible-tabs | changed | İlk soru açık; lorem cevap + minus. |

Stop: email / account / checkout / newsletter submit / PII

---

## Aday / leftover

[`candidates/plantrex-leftovers.md`](../candidates/plantrex-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact Shop / search / cart / menu / PDP Color / tabs / FAQ
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error · 13 warn (pre-existing, Plantrex değil)
