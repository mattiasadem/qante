# Todo — Zest (Shopify paid) · RoarTheme · Flairy / default

*Kaynak (yalnız resmi walk):* https://zest-theme-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/zest  
*Preset klasör:* `default` · slug `zest`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **[Update theme store] Zest**  
`schema_name` = **Zest** · `schema_version` = **9.3.0** · `role` = **main** · theme id `151342186722`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host `zest-theme-demo.myshopify.com` · `Shopify.shop` = **zest-flairy.myshopify.com** · locale `en` · country `US` · currency `USD`

**Diğer preset vitrinler (nav Presets, yürünmedi):** Gusto `zest-gusto.myshopify.com` · Cosmo `zest-cosmo.myshopify.com` · Fleek `zest-fleek.myshopify.com` · Laura `zest-laura.myshopify.com` · Flairy alias `zest-flairy.myshopify.com`

**Durum:** Mod A roster yazıldı · 3vp + interact capture **sırada**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/zest/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **47** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/zest/`, `evidence/zest/`, `todo/zest.md`, `candidates/zest-leftovers.md` |

**Kapsam satırı:**  
`Zest · default (Flairy) · [Update theme store] Zest / schema_name Zest 9.3.0 · theme_store_id null · shop zest-flairy.myshopify.com · home→PDP Alpine Jogger Alpine→Chai→PLP leggings→/collections→search alpine→cart empty/filled/qty→about-us→contact→faqs→news+cozy post→404 · 47 obs · 0 yeni şema · leftover: candidates/zest-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | capture sırada |
| Shop mega hover 1440 | interact adım | sırada |
| Predictive search `alpine` | interact 3vp | sırada |
| Mobile menu 375 + 768 | interact | sırada |
| Cart drawer empty + filled + qty | interact | sırada |
| PDP Alpine Jogger Color Alpine→Chai | interact 3vp | sırada |
| PLP `/collections/leggings` | roster | sırada |
| Collections `/collections` | roster | sırada |
| Search `/search?q=alpine` | roster | sırada |
| Cart page empty + filled + qty | interact | sırada |
| About `/pages/about-us` | roster | sırada |
| Contact form (submit yok) | roster | sırada |
| FAQ `/pages/faqs` | roster | sırada |
| News + Cozy & Bundled post | roster | sırada |
| 404 | roster | sırada |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Zest / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact · home h=0 overlay |
| 3 | banner_logo Courtside | `editorial-image-with-text-overlay` | reuse |
| 4 | collection-list 6 kol | `collection-nav-grid` | reuse |
| 5 | product_tabs Latest Arrivals | `product-showcase-tabs` | reuse |
| 6 | collections_showcase Favorites | `collection-nav-tabs` | reuse |
| 7 | layered_images Lookbooks | `editorial-layered-images` | reuse |
| 8 | custom_content Psychedelic | `editorial-custom-content` | reuse |
| 9 | custom Wear it four way | `editorial-custom-content.2` | reuse |
| 10 | scrolling_promotion trust | `promo-scrolling-marquee` | reuse |
| 11 | collection_list_slider | `collection-nav-slider` | reuse |
| 12 | testimonials Loved by 100k | `testimonial-quote-carousel` | reuse · marquee |
| 13 | collection-tabs Top | `collection-nav-tabs.2` | reuse |
| 14 | promotion_banner 30% | `promo-banner-countdown` | reuse · timer metin |
| 15 | press | `testimonial-quote-carousel.2` | reuse |
| 16 | featured-collection Trends | `product-showcase-grid-featured` | reuse |
| 17 | hero Spotlight | `editorial-image-with-text-overlay.2` | reuse |
| 18 | scrolling logos | `social-proof-brand-logos` | reuse |
| 19 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 20 | popup | — | leftover 0px / PII |
| 21 | predictive-search | `global-predictive-search` | reuse · interact |
| 22 | Drawer-MobileNav | `global-menu-drawer` | reuse · 375/768 |
| 23 | Drawer-Cart | `global-cart-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–22 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 23 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 24–27 | marquee / IWT / quote / rich | product-detail | [ ] | [x] | reuse | [ ] |
| 28–30 | crumb / banner / PLP | collection | [ ] | [x] | reuse | [ ] |
| 31 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 32 | search-results | search | [ ] | [x] | reuse | [ ] |
| 33 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 34–39 | overlay / rich / timeline / IWT | about-brand | [ ] | [x] | reuse | [ ] |
| 40–41 | crumb + form | contact | [ ] | [x] | reuse | [ ] |
| 42 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 43–45 | intro + list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 46 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |
| 47 | (count = 47 files) | | | | | |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | sırada — 1440 Shop hover |
| global-predictive-search | input | sırada — `alpine` 3vp |
| global-menu-drawer | open | sırada — 375 + 768 |
| global-cart-drawer | filled + changed | sırada |
| cart-page-main | filled + changed | sırada |
| product-info-main | changed | sırada — Alpine → Chai |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/zest-leftovers.md`](../candidates/zest-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact Shop / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
