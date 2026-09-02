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

**Durum:** Mod A roster yazıldı; 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/plantrex/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **28** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/plantrex/`, `evidence/plantrex/`, `todo/plantrex.md`, `candidates/plantrex-leftovers.md`, capture unlock helper |

**Kapsam satırı:**  
`Plantrex · default · pandora-flower-v-1-5-0 / schema_name Pandora_flower 1.5.0 · theme_store_id null · shop pandora-flower.myshopify.com · home→PDP gerberas-flower-bouquet Mix→White→PLP /collections/best-seller→cart empty/filled→footer · 28 obs · 0 yeni şema · leftover: candidates/plantrex-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop dropdown hover 1440 | [x] obs | [ ] interact |
| Predictive search | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Gerberas Color Mix→White | [x] obs | [ ] interact |
| PLP `/collections/best-seller` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [x] obs | [ ] interact |
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
| 1–19 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 20 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 21–24 | trust / IWT ×2 / related | product-detail | [ ] | [x] | reuse | [ ] |
| 25–26 | banner + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 27–28 | cart-items + featured | cart | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | (sırada) 1440 Shop dropdown |
| global-predictive-search | input | (sırada) katalog kelimesi |
| global-menu-drawer | open | (sırada) 375 + 768 |
| global-cart-drawer | filled + changed | (sırada) Gerberas Mix |
| cart-page-main | filled + changed | (sırada) |
| product-info-main | changed | (sırada) Mix → White |

Stop: email / account / checkout / newsletter submit / PII

---

## Aday / leftover

[`candidates/plantrex-leftovers.md`](../candidates/plantrex-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact Shop / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
