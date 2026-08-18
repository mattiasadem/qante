# Todo — Triumph (Shopify paid · Theme Store demo)

*Kaynak:* https://triumph-theme.myshopify.com/  
*Preset:* `default`  
*Slug:* `triumph`  
*Theme Store:* https://themes.shopify.com/themes/triumph  

*Tema (storefront, uydurulmadı):* **Designer check** · `schema_name`: **Triumph** · `schema_version`: **1.0.0** · `theme_store_id`: **null** · role `main` · id `184658100489`  
*Shop:* `triumph-theme.myshopify.com`

**Durum:** Mod A walk + resmi 3vp (375+1440; 768 leftover) + interact pixel-check  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/triumph/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| PNG | **122** (menu recapture sonrası artacak) |
| Parallel | yalnız `observations/triumph/`, `evidence/triumph/`, `todo/triumph.md`, `candidates/triumph-leftovers.md` |

**Kapsam satırı:**  
`Triumph · default · Designer check / schema_name Triumph 1.0.0 (theme_store_id null) · home→PDP JumpFlex→PLP womens-bras→collections→search sneakers→cart→about-us/contact→blog news→404 · 38 obs · 0 yeni şema · leftover: candidates/triumph-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/categories/tabs/bundle/collage/countdown/feed/blog/faq/footer | [x] obs | [x] 375+1440 · 768 leftover |
| Mega Clothing hover 1440 | [x] obs | [x] 375 kapalı + 1440 kapalı/open · 768 leftover |
| Predictive search `sneakers` | [x] obs | [x] 375+1440 · 768 leftover |
| Mobile hamburger 375+768 | [x] obs | [ ] recapture (selector düzeltildi) |
| Cart drawer empty + filled + qty | [x] obs | [x] pixel-check (375 filled / 768 initial leftover) |
| PDP JumpFlex Color Pink→Blue | [x] obs | [x] 375+1440 initial/changed · 768 changed |
| PLP `/collections/womens-bras` | [x] obs | [x] 375+1440 · 768 leftover |
| Collections index `/collections` | [x] obs | [x] 375+1440 · 768 leftover |
| Search `/search?q=sneakers` | [x] obs | [x] 375+1440 · 768 leftover |
| Cart `/cart` empty + filled + qty | [x] obs | [x] 3vp |
| About `/pages/about-us` | [x] obs | [x] 375+1440 · 768 leftover |
| Contact form (submit yok) | [x] obs | [x] 375+1440 · 768 leftover |
| Blog `/blogs/news` + sports bra post | [x] obs | [x] 375+1440 · 768 leftover |
| 404 leftover | [x] obs | [x] 375+1440 · 768 leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Triumph / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `__header` announcement | `promo-announcement-bar` | reuse · 375 dismiss 0px |
| 2 | header / mega-menu | `navigation-header-mega` | reuse · Clothing mega |
| 3 | slideshow_amRJiq | `hero-slideshow` | reuse · 3 slayt |
| 4 | mobile_catalog_button | — | leftover 375 |
| 5 | collection_list_GGzRDM | `collection-nav-image-cards` | reuse |
| 6 | featured_collection_tab | `product-showcase-tabs` | reuse |
| 7 | scrolling_logo | `social-proof-brand-logos` | reuse |
| 8 | collage_bbbMWa | `collection-nav-image-cards.2` | reuse |
| 9 | bundle_products | `commerce-tools-products-bundle` | reuse |
| 10 | slideshow_d8t7K9 | `hero-slideshow.2` | reuse · tall |
| 11 | products_collage_apYMMG | `editorial-dynamic-grid` | reuse |
| 12 | products_collage_LcJxh4 | `editorial-dynamic-grid.2` | reuse |
| 13 | call_to_action | — | leftover |
| 14 | banners_carousel | `collection-nav-banners` | reuse |
| 15 | countdown_timer | `promo-banner-countdown` | reuse |
| 16 | discount_coupon | — | leftover |
| 17–21 | lazy scroll/product/text/media/tabs | — | leftover hydrate yok |
| 22 | shop_feed | `media-shop-the-feed` | reuse |
| 23 | featured_blog | `blog-list-main` | reuse |
| 24 | accordion | `faq-collapsible-tabs` | reuse |
| 25 | custom_section | `editorial-rich-text` | reuse |
| 26 | icons_with_text | `trust-icon-row` | reuse |
| 27 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 28 | footer utilities | — | leftover © |
| 29 | popup | — | leftover · dismiss kill |
| 30 | header-drawer | `global-menu-drawer` | reuse · recapture |
| 31 | predictive-search | `global-predictive-search` | reuse |
| 32 | cart-drawer | `global-cart-drawer` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open Clothing 1440 | [x] WOMEN'S CLOTHING + 4 kart |
| global-predictive-search | input `sneakers` | [x] 375+1440 SUGGESTIONS/PRODUCTS |
| global-menu-drawer | open 375/768 | [ ] selector düzeltildi; recapture |
| global-cart-drawer | initial / filled / changed | [x] boş 375+1440 · dolu 768+1440 · qty 3vp |
| cart-page-main | initial / filled / changed | [x] 3vp $45.89 → $91.78 |
| product-info-main | changed Color Pink→Blue | [x] SKU 94-0002→94-0001 · 768 initial leftover |

---

## Aday / leftover

[`candidates/triumph-leftovers.md`](../candidates/triumph-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs` 375 yazdı, 768 abort; `capture-interaction.mjs` 375+1440)
- [x] Interact mega / search / cart / PDP Color (menu recapture sırada)
- [x] PNG bak → stateFindings
- [x] `npm run validate` — **0 error · 0 warn**
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
