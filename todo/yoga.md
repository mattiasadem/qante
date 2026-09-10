# Todo — Yoga (Speedo Themes) · Yoga & Meditation Equipment Store / default

*Kaynak (yalnız resmi walk):* https://sports-online-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/yoga-and-meditation-equipment-store-shopify-2-0-theme  
*Preset:* `default` · slug `yoga`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Yoga-and-meditation-v-1-5-0-new**  
`schema_name` = **Yoga and meditation** · `schema_version` = **1.5.0** · `role` = **main** · theme id `126822776890`  
`theme_store_id` = **null** (Theme Store id uydurulmadı)  
`handle` = `"null"`  
Walk host + `Shopify.shop` = `sports-online-store-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Password wall:** GET `/` → `/password`. Title `Yoga Meditation- Best Shopify Store – sports-online-store-2 (password: 1)`. Speedo ürün sayfası: “Please enter password `1` to view demo.” Public storefront-unlock — hesap değil. **Başka host uydurulmadı.**

**Durum:** ✅ Mod A + interact — 47 obs · 205 PNG · 0 yeni şema · menu open missingStates  
**PR:** draft #422 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/yoga/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **47** |
| Parallel | yalnız `observations/yoga/`, `evidence/yoga/`, `todo/yoga.md`, `candidates/yoga-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Yoga · default · Yoga-and-meditation-v-1-5-0-new / schema_name Yoga and meditation 1.5.0 · theme_store_id null · shop sports-online-store-2.myshopify.com · Speedo Themes · password 1 · home→PDP yoga-pilates-mats-towel Purple→Navy→PLP /collections/tops Color Black→/collections→search yoga→cart 1→2→about-layout-1→contact-us→faq Q2→news+morning-flow→404 · 47 obs · 205 PNG · 0 yeni şema · leftover: candidates/yoga-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer + overlays) | [x] obs | [x] capture |
| Shop mega 1440 | [x] interact | Shop/Themes/Shop By/Collections |
| Predictive search `yoga` | [x] interact | SUGGESTIONS + PRODUCTS |
| Mobile menu 375 + 768 | [x] interact | missingStates — drawer karede yok |
| Cart drawer empty + filled + qty | [x] interact | mats $70 → $140 |
| PDP Color | [x] interact | Purple → Navy |
| PLP `/collections/tops` + filter | [x] obs | [x] Color Black 3/9 |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=yoga` | [x] obs | [x] capture |
| Cart page empty + filled | [x] obs | [x] filled + qty |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Contact `/pages/contact-us` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] obs | [x] Q2 açık |
| News + morning-flow post | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega Shop/Themes/Shop By/Collections |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse · Fitness On Toast |
| 4 | rich_text_Tzzgah | `editorial-rich-text` | reuse |
| 5 | new_collection_slider_pzQXzR | `collection-nav-slider` | reuse |
| 6 | lookbook_with_video_text_tAXRRB | `media-lookbook-banner` | reuse · + hotspot + video play görünür |
| 7 | homepage_product_tab_QagAUq | `product-showcase-tabs` | reuse |
| 8 | deal_image_banner_ca9Mjy | `promo-banner-countdown` | reuse |
| 9 | sub_banner_pjHAD3 | `promo-grid-banner` | reuse |
| 10 | featured_collection_wHRtMD | `product-showcase-grid-featured` | reuse |
| 11 | custom_testimonial_wVKAXF | `testimonial-quote-carousel` | reuse |
| 12 | featured_blog_8XbWRx | `blog-list-main` | reuse |
| 13 | service_icon_cRV7DD | `trust-icon-row` | reuse |
| 14 | newsletter_f6qcX4 | `lead-capture-newsletter-band` | reuse · submit yok |
| 15 | footer | `footer-columns-newsletter` | reuse |
| 16 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 17 | #menu-drawer | `global-menu-drawer` | reuse · open missingStates |
| 18 | details-modal.header__search | `global-predictive-search` | reuse · yoga |
| — | newsletter-popup | — | leftover PII |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–18 | home + overlays | home | [x] | [x] | reuse | [x] |
| 19–27 | PDP main/tabs/video/icons/multirow/banner/faq/marquee | product-detail | [x] | [x] | reuse | [x] |
| 28–30 | banner + slider + PLP | collection | [x] | [x] | reuse | [x] |
| 31 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 32 | search-results | search | [x] | [x] | reuse | [x] |
| 33 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 34–35 | contact crumbs/form | contact | [x] | [x] | reuse | [x] |
| 36–42 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 43–44 | FAQ parallax + accordion | faq-support | [x] | [x] | reuse | [x] |
| 45–46 | news + article | blog / blog-post | [x] | [x] | reuse | [x] |
| 47 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (yapılan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | Shop / Themes / Shop By / Collections alındı |
| global-predictive-search | open + input `yoga` | SUGGESTIONS + PRODUCTS |
| global-menu-drawer | open 375/768 | missingStates — drawer karede yok |
| global-cart-drawer | initial / filled / changed | mats Purple $70 → $140 |
| cart-page-main | initial / filled / changed | aynı |
| product-info-main | changed Color | Purple → Navy |
| product-info-tabs | changed | Additional Information |
| product-showcase-tabs | hover + changed | 2. görsel + Best Selling |
| product-showcase-grid-featured | hover 1440 | 2. görsel + ikonlar |
| faq-collapsible-tabs | changed | Q1+Q2 açık |
| product-showcase-grid-plp | changed 1440 | Color Black 3/9 |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/yoga-leftovers.md`](../candidates/yoga-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 140 PNG
- [x] Interact mega / search / cart / PDP Color / FAQ / tabs / PLP / hover — menu missingStates
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
