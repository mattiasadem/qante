# Todo — Homage (Shopify paid)

*Kaynak:* https://homage-theme-demo-01.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/homage  
*Preset:* `default`  
*Slug:* `homage`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **homage/release/v1.1**  
`schema_name` = **Homage** · `schema_version` = **1.0.1** · `role` = **main** · theme id `200065417548`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `homage-theme-demo-01.myshopify.com`

**Durum:** Mod A roster yazıldı · 3vp/interact capture sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/homage/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **51** |
| Evidence PNG | **0** (capture öncesi) |
| Parallel | yalnız `observations/homage/`, `evidence/homage/`, `todo/homage.md`, `candidates/homage-leftovers.md` |

**Kapsam satırı:**  
`Homage · default · homage/release/v1.1 · schema_name Homage 1.0.1 · theme_store_id null · home→PDP Downhill ‘27 Jacket→PLP gentlemen→/collections→search jacket→cart empty/filled/qty→about→contact→journal+Looks of Moda→404 · 51 obs · 0 yeni şema · leftover: candidates/homage-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Header kapalı + Gentlemen click band 1440 | [x] obs | [ ] interact |
| Predictive search `jacket` | [x] obs | [ ] interact 375/768/1440 |
| Mobile hamburger 375+768 + Gentlemen accordion | [x] obs | [ ] interact (1440 N/A) |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Downhill ‘27 Jacket Size S→M | [x] obs | [ ] interact |
| PLP `/collections/gentlemen` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=jacket` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about` (`/pages/about-us` 404) | [x] obs | [ ] capture |
| Contact `/pages/contact` (SEND yok) | [x] obs | [ ] capture |
| Journal + The Looks of Moda | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Homage / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | main-announcement-bar | `promo-announcement-bar` | reuse |
| 2 | navigation-main | `navigation-header-mega` | reuse · click band · interact |
| 3 | slideshow_NDMGFQ | `hero-slideshow` | reuse · 3 slayt |
| 4 | featured_products_DRKe4F | `product-showcase-grid-featured` | reuse |
| 5 | slideshow_nyLKfn | `hero-slideshow.2` | reuse · tek kare |
| 6 | rich_text_t3pEtU | `editorial-rich-text` | reuse |
| 7 | multicolumn_3nLYNa | `collection-nav-image-cards` | reuse · 3 kart |
| 8 | video_text_tXdAFi | `media-video-hero` | reuse |
| 9 | shop_the_look_MPaNJC | `media-lookbook-banner` | reuse |
| 10 | video_cr4PDa | `media-video-hero.2` | reuse |
| 11 | image_text_7n949b | `editorial-image-with-text` | reuse |
| 12 | collection_list_RDMiQE | `collection-nav-slider` | reuse · dar şerit |
| 13 | featured_product_MALw9q | `product-showcase-featured` | reuse |
| 14 | slideshow_text_controls | `features-slider-multicolumn` | reuse |
| 15 | features_bar_eQLqiD | `trust-icon-row` | reuse |
| 16 | featured_blog_J43MLj | `blog-list-main` | reuse |
| 17 | featured_collection | `product-showcase-grid-featured.2` | reuse |
| 18 | marquee_tL44Af | `promo-scrolling-marquee` | reuse |
| 19 | collage (template) | — | leftover 1px |
| 20 | testimonials_wCYKFp | `testimonial-quote-carousel` | reuse |
| 21 | logo_list_7hYjGx | `social-proof-brand-logos` | reuse |
| 22 | form_email_signup_3PCgKE | `lead-capture-newsletter-band` | reuse · submit yok |
| 23 | image_gVLTEV | `editorial-image-with-text-overlay` | reuse · metin yok |
| 24 | footer hero_G4EMwJ | — | leftover logo band |
| 25 | footer collage_RxQdyE | `media-mosaic-grid` | reuse |
| 26 | navigation-footer | `footer-columns-newsletter` | reuse · newsletter yok |
| 27 | custom-code | — | leftover 0px |
| 28 | predictive-search | `global-predictive-search` | reuse · interact |
| 29 | nav-menu-drawer | `global-menu-drawer` | reuse · interact |
| 30 | #cart-drawer | `global-cart-drawer` | reuse · interact |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Gentlemen click — yatay bant (mega kolon yok). Hover yok. |
| global-predictive-search | input | `jacket` — SUGGESTIONS + PRODUCTS (DOM) |
| global-menu-drawer | open/changed | 375/768 hamburger + Gentlemen accordion |
| global-cart-drawer | empty/filled/qty | DOM: empty → $995 → plus |
| cart-page-main | empty/filled/qty | DOM: empty → $995 → plus |
| product-info-main | changed | Size S→M (Color yalnız Hunter) |

PNG bakılacak (capture sonrası).

---

## Aday / leftover

[`candidates/homage-leftovers.md`](../candidates/homage-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error hedef
