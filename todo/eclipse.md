# Todo — Eclipse (Shopify paid) · Fluorescent · Ripple

*Kaynak (resmi walk URL):* https://eclipse-theme-ripple.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/eclipse  
*Preset klasör:* `default` (Ripple)  
*Slug:* `eclipse`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **ripple-v5-1-2**  
`schema_name` = **Eclipse** · `schema_version` = **5.1.2** · `role` = **main** · theme id `152737448101`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `eclipse-theme-ripple.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact — yazıldı, capture sürüyor  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/eclipse/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **44** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/eclipse/`, `evidence/eclipse/`, `todo/eclipse.md`, `candidates/eclipse-leftovers.md` |

**Kapsam satırı:**  
`Eclipse · default (Ripple) · ripple-v5-1-2 · schema_name Eclipse 5.1.2 · theme_store_id null · home→PDP Eclipse Jacket→PLP childwear→collections→search jacket→cart→about-us/contact→news+flagship→404 · 44 obs · PNG TBD · 0 yeni şema · leftover: candidates/eclipse-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + obs | capture |
| Mega Shop 1440 | interact | pending |
| Predictive search `jacket` | interact 3vp | pending |
| Mobile menu 375 | interact | pending |
| Mobile menu 768 | interact | pending |
| Cart drawer empty + filled + qty | interact 3vp | pending |
| PDP Eclipse Jacket Size Small→Large | interact 3vp | pending |
| PLP `/collections/childwear` | roster + obs | capture |
| Collections index `/collections` | roster + obs | capture |
| Search `/search?q=jacket` | roster + obs | capture |
| Cart page empty + filled + qty | interact 3vp | pending |
| About `/pages/about-us` | roster + obs | capture |
| Contact `/pages/contact` (submit yok) | roster + obs | capture |
| News + Flagship Store Open | roster + obs | capture |
| 404 leftover | roster + obs | capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `shopify-section`)

| # | Eclipse / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 4 | predictive-search-drawer | `global-predictive-search` | reuse · interact |
| 5 | popups | — | leftover 0px / PII |
| 6 | slideshow_1 | `hero-slideshow` | reuse |
| 7 | scrolling_content_DVRbxp | `promo-scrolling-marquee` | reuse |
| 8 | rich_text_VKJMjm | `editorial-rich-text` | reuse |
| 9 | rich_text_wLV7gw | — | leftover boş |
| 10 | collection_list | `collection-nav-image-cards` | reuse |
| 11 | shoppable_feed_4LCitj | `media-shop-the-feed` | reuse · delta |
| 12 | video_hero_EFCPGj | `media-video-hero` | reuse |
| 13 | featured_collection_1 | `product-showcase-grid-featured` | reuse |
| 14 | rich_text_4VxRqc | `editorial-rich-text.2` | reuse |
| 15 | multi_column_rntw7i | `features-multicolumn` | reuse |
| 16 | shop_the_look_tGwMcV | `media-lookbook-banner` | reuse |
| 17 | image_with_text | `editorial-image-with-text` | reuse |
| 18 | featured_collection_2 | `product-showcase-grid-featured.2` | reuse |
| 19 | shop_the_look_gKaApw | `media-lookbook-banner.2` | reuse |
| 20 | featured_links_rt84Mk | `collection-nav-icon-buttons` | reuse · delta |
| 21 | rich_text_Lk6EpU | — | leftover boş |
| 22 | video_hero_6mqMJH | `media-video-hero.2` | reuse |
| 23 | rich_text_ii4Xph | — | leftover boş |
| 24 | multi_column | `features-multicolumn.2` | reuse |
| 25 | rich_text_NDNqeE | — | leftover boş |
| 26 | blog_posts | `blog-list-main` | reuse |
| 27 | newsletter_qwJNXV | `lead-capture-newsletter-band` | reuse · submit yok |
| 28 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 29 | label.navigation__control | `global-menu-drawer` | reuse · 375/768 |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | pending 1440 Shop hover |
| global-predictive-search | input | pending `jacket` |
| global-menu-drawer | open | pending 375+768 |
| global-cart-drawer | filled + changed | pending |
| cart-page-main | filled + changed | pending |
| product-info-main | changed | Size Small→Large $146 |

---

## Aday / leftover

[`candidates/eclipse-leftovers.md`](../candidates/eclipse-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — hedef 0 error
