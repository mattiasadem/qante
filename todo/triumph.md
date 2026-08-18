# Todo — Triumph (Shopify paid)

*Kaynak (resmi walk ONLY):* https://triumph-theme.myshopify.com/  
*Preset:* `default` · *Slug:* `triumph`  
*Theme Store:* https://themes.shopify.com/themes/triumph

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Designer check**  
`schema_name` = **Triumph** · `schema_version` = **1.0.0** · `role` = **main** · theme id `184658100489`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `triumph-theme.myshopify.com`

**Durum:** Mod A walk + observation JSON yazıldı · 3vp/interact capture **sırada**  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/triumph/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/triumph/`, `evidence/triumph/`, `todo/triumph.md`, `candidates/triumph-leftovers.md` |

**Kapsam satırı:**  
`Triumph · default · Designer check / schema_name Triumph 1.0.0 · theme_store_id null · home→PDP FlexMotion Leggings→PLP womens-leggings→collections→search bra→cart→about-us/contact→blog news+article→404 · 60 obs · 0 yeni şema · leftover: candidates/triumph-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [ ] capture |
| Mega Clothing 1440 | interact | [ ] |
| Predictive search `bra` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP FlexMotion option change | leftover | HTML var, canlı node 0 |
| PLP `/collections/womens-leggings` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=bra` | roster | [ ] capture |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about-us` (`/pages/about` 404) | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| Blog `/blogs/news` + sports bra article | roster | [ ] capture |
| 404 leftover | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Triumph / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `.announcement-bar` | `promo-announcement-bar` | reuse · header içi |
| 2 | header | `navigation-header-mega` | reuse · interact Clothing 1440 |
| 3 | slideshow_amRJiq | `hero-slideshow` | reuse |
| 4 | mobile_catalog_button | — | leftover 0px |
| 5 | collection_list_GGzRDM | `collection-nav-image-cards` | reuse |
| 6 | featured_collection_tab | `product-showcase-tabs` | reuse |
| 7 | scrolling_logo | `social-proof-brand-logos` | reuse |
| 8 | collage_bbbMWa | `collection-nav-image-cards.2` | reuse · mosaic |
| 9 | bundle_products | `commerce-tools-products-bundle` | reuse |
| 10 | slideshow_d8t7K9 | `hero-slideshow.2` | reuse · stacked tall |
| 11 | products_collage_apYMMG | `product-showcase-grid-featured` | reuse |
| 12 | products_collage_LcJxh4 | `product-showcase-grid-featured.2` | reuse |
| 13 | call_to_action | — | leftover CTA |
| 14 | banners_carousel | `promo-grid-banner` | reuse |
| 15 | countdown_timer | `promo-banner-countdown` | reuse |
| 16 | discount_coupon | — | leftover coupon |
| 17 | featured_collection_scroll | `product-showcase-grid-featured.3` | reuse |
| 18 | featured_product_information | `product-showcase-featured` | reuse |
| 19 | scrolling_text | `promo-scrolling-marquee` | reuse |
| 20 | media_vertical_scroll | `editorial-images-scroll` | reuse |
| 21 | shop_feed | `media-shop-the-feed` | reuse |
| 22 | featured_blog | `blog-list-main` | reuse |
| 23 | media_tabs | — | leftover city tabs |
| 24 | accordion | `faq-collapsible-tabs` | reuse |
| 25 | custom_section | `editorial-rich-text` | reuse |
| 26 | icons_with_text | `trust-icon-row` | reuse |
| 27 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 28 | utilities | — | leftover 44px |
| 29 | popup | — | leftover PII |
| 30 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 31 | predictive-search | `global-predictive-search` | reuse |
| 32 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] Clothing hover 1440 |
| global-predictive-search | input | [ ] `bra` 3vp |
| global-menu-drawer | open / changed | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] empty → FlexMotion → qty |
| cart-page-main | filled + changed | [ ] empty → filled → qty |
| product-info-main | changed | leftover — canlı variant node 0 |

---

## Aday / leftover

[`candidates/triumph-leftovers.md`](../candidates/triumph-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
