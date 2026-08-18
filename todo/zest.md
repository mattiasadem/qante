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

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** https://github.com/mattiasadem/qante/pull/194 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/zest/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **47** |
| PNG | **161** |
| Parallel | yalnız `observations/zest/`, `evidence/zest/`, `todo/zest.md`, `candidates/zest-leftovers.md` |

**Kapsam satırı:**  
`Zest · default (Flairy) · [Update theme store] Zest / schema_name Zest 9.3.0 · theme_store_id null · shop zest-flairy.myshopify.com · home→PDP Alpine Jogger Alpine→Chai→PLP leggings→/collections→search alpine→cart empty/filled/qty→about-us→contact→faqs→news+cozy post→404 · 47 obs · 161 PNG · 0 yeni şema · leftover: candidates/zest-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega hover 1440 | [x] obs | [x] interact |
| Predictive search `alpine` | [x] obs | [x] interact 3vp (768 forceOpen) |
| Mobile menu 375 + 768 | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Alpine Jogger Color Alpine→Chai | [x] obs | [x] interact |
| PLP `/collections/leggings` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=alpine` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] obs | [x] interact |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] obs | [x] capture |
| News + Cozy & Bundled post | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
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
| 10 | scrolling_promotion trust | `promo-scrolling-marquee` | reuse · clip header leftover |
| 11 | collection_list_slider | `collection-nav-slider` | reuse |
| 12 | testimonials Loved by 100k | `testimonial-quote-carousel` | reuse · masonry UGC |
| 13 | collection-tabs Top | `collection-nav-tabs.2` | reuse |
| 14 | promotion_banner 30% | `promo-banner-countdown` | reuse · timer metin / April 120 |
| 15 | press | `testimonial-quote-carousel.2` | reuse |
| 16 | featured-collection Trends | `product-showcase-grid-featured` | reuse |
| 17 | hero Spotlight | `editorial-image-with-text-overlay.2` | reuse |
| 18 | scrolling logos | `social-proof-brand-logos` | reuse |
| 19 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 20 | popup | — | leftover 0px / PII |
| 21 | predictive-search | `global-predictive-search` | reuse · interact · 768 forceOpen |
| 22 | Drawer-MobileNav | `global-menu-drawer` | reuse · 375/768 |
| 23 | Drawer-Cart | `global-cart-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–22 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 23 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 24–27 | marquee / IWT / quote / rich | product-detail | [x] | [x] | reuse | [x] |
| 28–30 | crumb / banner / PLP | collection | [x] | [x] | reuse | [x] |
| 31 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 32 | search-results | search | [x] | [x] | reuse | [x] |
| 33 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 34–39 | overlay / rich / timeline / IWT | about-brand | [x] | [x] | reuse | [x] |
| 40–41 | crumb + form | contact | [x] | [x] | reuse | [x] |
| 42 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 43–45 | intro + list + post | blog-* | [x] | [x] | reuse | [x] |
| 46 | page-content-main | not-found | [x] | [x] | reuse | [x] |
| 47 | (count = 47 files) | | | | | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | OK — 1440 Shop hover: CATEGORIES / DISCOVER / FEATURED + Made for Good Living |
| global-predictive-search | input | OK — `alpine` 3vp; 768 forceOpen; popular Kits/Skincare/Sublinguals leftover |
| global-menu-drawer | open | OK — 375 tam panel + 768 sol çekmece; LOG IN tıklanmadı |
| global-cart-drawer | filled + changed | OK — Alpine/XS $68.60 → qty2 $137.20 + konfeti |
| cart-page-main | filled + changed | OK — aynı tutarlar; CHECK OUT sibling leftover |
| product-info-main | changed | OK — Alpine → Chai; fiyat $68.60; sticky Chai / XS |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/zest-leftovers.md`](../candidates/zest-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact Shop / search / cart / menu / PDP Color
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
