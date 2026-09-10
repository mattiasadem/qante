# Todo — Sports Equipment & Clothing (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://sports-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/sports-equipment-clothing-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `sports-equipment`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Sports-v-1-5-0-latest-updates-new**  
`schema_name` = **Sports** · `schema_version` = **1.5.0** · `role` = **main** · theme id `139796873276`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `sports-online-store-1.myshopify.com` · locale `en` · currency `USD`

**Unlock:** Vendor ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check) — **kapandı**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sports-equipment/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **54** |
| PNG | **213** (161 statik + 52 interact) |
| Parallel | `observations/sports-equipment/`, `evidence/sports-equipment/`, `todo/sports-equipment.md`, `candidates/sports-equipment-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Sports Equipment · default · Sports-v-1-5-0-latest-updates-new / schema_name Sports 1.5.0 · theme_store_id null · shop sports-online-store-1.myshopify.com · Speedo Themes · password 1 · home→PDP basketball-sport-orange (handle veena-retailnet-hexagon-style-dumbbells)→PLP team-sports→/collections→search sport→cart→about-layout-1→contact-layout-1→faq→news+article→404 · mega/search/menu/cart/PDP Color/tabs/FAQ/featured hover/PLP hover · 54 obs · 213 PNG · 0 yeni şema · leftover: candidates/sports-equipment-leftovers.md · missingStates: menu accordion + PLP Color Apply`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Shop mega 1440 | [x] interact | 6 image card |
| Predictive search `ball` | [x] interact | PRODUCTS 375/768/1440 |
| Mobile menu 375 + 768 | [x] interact | open var · accordion missingStates |
| Cart drawer empty + filled + qty | [x] interact | $78 → $156 |
| PDP Color Mate Orange → Button Blue | [x] interact | turuncu→mavi top · $78 |
| Featured hover | [x] interact | 2. görsel · Quick shop yok |
| PLP `/collections/team-sports` + filter | [x] obs + hover | Color Apply missingStates |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=sport` | [x] obs | [x] static |
| Cart page empty + filled | [x] interact | $78 → $156 |
| About `/pages/about-layout-1` | [x] obs | [x] static |
| Contact `/pages/contact-layout-1` (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faq` | [x] interact | Q1+Q2 açık (allowMultipleOpen) |
| News + known-for-its-up-to-date-news | [x] obs | [x] static |
| 404 | [x] obs | [x] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · SHOP mega |
| 3 | slideshow_image_with_text_7Re3Qt | `hero-slideshow` | reuse |
| 4 | logo_slider_4HtyqN | `social-proof-brand-logos` | reuse |
| 5 | `__0617c2f2` Shop Bestsellers | `product-showcase-grid-featured` | reuse |
| 6 | sub_banner_c863xL | `promo-grid-banner` | reuse · 2-up |
| 7 | collapsible_tabs_xXW3nF UNIQUE FEATURES | `faq-collapsible-tabs` | reuse · görsel+accordion |
| 8 | categories_slider_CNxecV | `collection-nav-slider` | reuse |
| 9 | collection_image_showcase_YyweD4 | `collection-nav-image-cards` | reuse |
| 10 | service_icon_cRV7DD ECO | `trust-icon-row` | reuse |
| 11 | lookbook_cards_RTptdw | `media-lookbook-banner` | reuse |
| 12 | scrolling_text_yhqbBP | — | leftover h=0 |
| 13 | video_kMRxtK | `media-video-hero` | reuse |
| 14 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 15 | brand_logo_AcCrHT | `social-proof-brand-logos.2` | reuse |
| 16 | lookbook_card_slider_GbjJWj | `media-lookbook-slider` | reuse |
| 17 | `__588ae6a9` LATEST BLOGS | `blog-list-main` | reuse |
| 18 | scrolling_text_K9pYia | `promo-scrolling-marquee` | reuse |
| 19 | custom_instagram_N8fnnR | `media-mosaic-grid` | reuse |
| 20 | service_icon_UhXJpp | `trust-icon-row.2` | reuse |
| 21 | newsletter_9cmdDU | `lead-capture-newsletter-band` | reuse · submit yok |
| 22 | footer | `footer-columns-newsletter` | reuse |
| 23 | newsletter-popup | — | leftover PII |
| 24 | #CartDrawer | `global-cart-drawer` | reuse |
| 25 | #menu-drawer | `global-menu-drawer` | reuse |
| 26 | details-modal.header__search | `global-predictive-search` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–26 | home + overlays | home | [x] 3vp · menu 1440 skip | [x] | reuse | [x] interact |
| 27–35 | PDP main/tabs/video/IWT/trust/banner/FAQ/marquee | product-detail | [x] | [x] | reuse | [x] interact |
| 36–38 | banner + slider + PLP grid | collection | [x] | [x] | reuse | [x] hover · Color missing |
| 39 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 40 | search-results | search | [x] | [x] | reuse | [x] |
| 41 | cart-page-main | cart | [x] empty+filled+qty | [x] | reuse | [x] |
| 42–48 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 49–51 | contact-layout-1 | contact | [x] | [x] | reuse | [x] |
| 52–53 | FAQ banner + accordion | faq-support | [x] | [x] | reuse | [x] Q2 |
| 54–55 | news + article | blog-* | [x] | [x] | reuse | [x] |
| 56 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/sports-equipment-leftovers.md`](../candidates/sports-equipment-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 161 PNG (menu 1440 zero-size skip)
- [x] Interact mega / search / menu / cart / PDP Color / tabs / FAQ / featured hover / PLP hover
- [x] PNG bak → stateFindings (şema değişmedi)
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
- [ ] PLP Color Apply + menu accordion — missingStates (üçüncü deneme yok)
