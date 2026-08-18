# Todo — Atlas (Shopify paid / Theme Store official demo)

*Kaynak:* https://alloy-themes-atlas-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/atlas  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **demo-store-atlas-electronics/master** · `schema_name`: **Atlas** · `schema_version`: **1.3.0** · `theme_store_id`: **null** · role `main` · id `203129913682`  
*Shop:* `alloy-themes-atlas-demo.myshopify.com`

**Durum:** ⬜ Mod A walk JSON yazıldı — 3vp capture + interact + validate sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/atlas/default/` |
| Observation | **39** (capture öncesi) |
| Evidence PNG | — |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Validator | sırada |
| Parallel | yalnız `observations/atlas/`, `evidence/atlas/`, `todo/atlas.md`, `candidates/atlas-leftovers.md` |

**Kapsam satırı:**  
`Atlas · default · demo-store-atlas-electronics/master / schema_name Atlas 1.3.0 / theme_store_id null · home→PDP Nimbus Finish Matte→Satin→PLP headphones→/collections→search nimbus→cart empty/filled/qty→about-us→contact→journal+wireless audio→404 · 39 obs · 0 yeni şema · leftover: promotion-bar / newsletter-popup / quick-view / number-counter / scroll-reveal / related empty / FAQ page / 404 routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement / media-grid / icons / categories / bestsellers / marquee / IWT / quotes / testimonials / video / bundle / blog / newsletter / footer | [x] obs | [ ] capture |
| Header kapalı + Shop all mega 1440 | [x] obs | [ ] interact |
| Predictive search `nimbus` | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Nimbus Finish Matte→Satin | [x] obs | [ ] interact |
| PLP `/collections/headphones` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=nimbus` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact `/pages/contact` form | [x] obs | [ ] capture · PII yok |
| Journal list + wireless audio post | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |

---

## Home roster (DOM)

| # | Atlas / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse · inner custom element |
| 2 | header | `navigation-header-mega` | reuse · mega **var** |
| 3 | promotion_bar_ckG8xQ | — | leftover coupon GETPOWER20 |
| 4 | cart-drawer | `global-cart-drawer` | reuse |
| 5 | newsletter-popup | — | leftover · submit yok |
| 6 | quick-view-modal | — | leftover · tıklanmadı |
| 7 | media_grid_bMDQX4 | `editorial-dynamic-grid` | reuse · hero + tiles |
| 8 | text_with_icons_Pb9XgQ | `trust-icon-row` | reuse |
| 9 | collection_list_xF6TzR | `collection-nav-image-cards` | reuse |
| 10 | multiple_featured_collections_zGjR6b | `product-showcase-tabs` | reuse |
| 11 | scrolling_text_dQdC38 | `promo-scrolling-marquee` | reuse |
| 12 | image_with_text_slider_aYpUQJ | `editorial-image-with-text` | reuse · slider delta |
| 13 | quotes_dKDrPX | `testimonial-quote-carousel` | reuse |
| 14 | testimonials_eR6HaW | `testimonial-quote-carousel-2` | reuse |
| 15 | number_counter_mKYN3q | — | leftover |
| 16 | video_with_text_overlay_93cDW6 | `media-video-hero` | reuse |
| 17 | product_bundle_QyxApU | `commerce-tools-products-bundle` | reuse |
| 18 | featured_blog_4NL9V9 | `blog-list-main` | reuse |
| 19 | image_with_text_we4Mfz | `lead-capture-newsletter-band` | reuse · submit yok |
| 20 | text_with_icons_UEKimr | `trust-icon-row-2` | reuse |
| 21 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 22 | custom_liquid_kB3BPa | — | leftover 0px |

---

## Interact (pixel-check)

- Header 1440 Shop all mega — sırada
- Hamburger 375+768 — sırada
- Predictive `nimbus` — sırada
- Cart drawer empty/filled/qty — sırada
- Cart page empty/filled/qty — sırada
- PDP Finish Matte→Satin — sırada

Stop: email, account, checkout, newsletter submit, contact Send, PII

---

## Aday / leftover

[`candidates/atlas-leftovers.md`](../candidates/atlas-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header mega / search / cart / menu / PDP Finish
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
