# Todo — ZABA (Speedo Themes) · Toys Dropship / default

*Kaynak (yalnız resmi walk):* https://speedo-toys-dropship.myshopify.com/  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/speedo-toys-dropshipping-theme  
*Preset klasör:* `default` · slug `zaba`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **speedo-toys-dropship-v-1-5-0**  
`schema_name` = **speedo_toys_dropship** · `schema_version` = **1.5.0** · `role` = **main** · theme id `175126708505`  
`theme_store_id` = **null** (Theme Store resmi değil; Speedo third-party OS 2.0)  
Walk host `speedo-toys-dropship.myshopify.com` · `Shopify.shop` = **speedo-toys-dropship.myshopify.com** · locale `en` · country `US` · currency `USD`  
Storefront unlock: vendor publishes password `1` on the product page (public demo, not an account).

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check) · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/zaba/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** · evidence **136** PNG (statik 3vp + interact) |
| Parallel | yalnız `observations/zaba/`, `evidence/zaba/`, `todo/zaba.md`, `candidates/zaba-leftovers.md` + unlock helper |

**Kapsam satırı:**  
`ZABA · default · speedo-toys-dropship-v-1-5-0 / schema_name speedo_toys_dropship 1.5.0 · theme_store_id null · Speedo third-party · shop speedo-toys-dropship.myshopify.com · home→PDP toyoma→PLP /collections/all→/collections→search monster→cart empty/filled→our-story/contact/faq-s→news+post→404 · 38 obs · 136 PNG · 0 yeni şema · interact explore/menu/cart/PDP · search input missingStates · leftover: candidates/zaba-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (countdown→footer) | [x] obs | [x] capture |
| Explore disclosure 1440 | [x] interact | [x] open |
| Predictive search `toyoma` | [x] interact | [ ] input missingStates (icon hidden) |
| Mobile menu 375 + 768 | [x] interact | [x] open |
| Cart page empty + filled + qty | [x] interact | [x] |
| PDP Color Yellow change | [x] interact | [x] |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=monster` | [x] obs | [x] capture |
| About `/pages/our-story` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq-s` | [x] obs | [x] capture |
| News + post | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | ZABA / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | timer JANUARY DEALS | `promo-banner-countdown` | reuse |
| 2 | announcement-bar | `promo-announcement-bar` | reuse |
| 3 | header | `navigation-header-mega` | reuse · interact |
| 4 | slideshow PLAY IT ONE MORE TIME | `hero-slideshow` | reuse |
| 5 | swiper USE CODE / 30% OFF | `promo-scrolling-marquee` | reuse |
| 6 | IWT HELLO MONSTER | `editorial-image-with-text` | reuse |
| 7 | IWT A MUCH BETTER WAY | `editorial-image-with-text.2` | reuse |
| 8 | product-info #simple_product | `product-info-main` | reuse · landing embed |
| 9 | multicolumn small_icon | `features-multicolumn` | reuse |
| 10 | IWT INSANE DURABILITY | `editorial-image-with-text.3` | reuse |
| 11 | IWT WALK ON A CLOUD | `editorial-image-with-text.4` | reuse |
| 12 | video | `media-video-hero` | reuse |
| 13 | customer_reviews | `testimonial-quote-carousel` | reuse |
| 14 | multicolumn TOP SPEAKER | `features-multicolumn.2` | reuse |
| 15 | IWO GET UNLIMITED FUN | `editorial-image-with-text-overlay` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | #menu-drawer | `global-menu-drawer` | reuse · interact |
| 18 | predictive-search | `global-predictive-search` | reuse · input missing |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Explore disclosure |
| global-predictive-search | input | [ ] icon hidden — missingStates |
| global-menu-drawer | open | [x] 375/768 |
| cart-page-main | filled + changed | [x] toyoma $50→$100 qty2 |
| product-info-main | changed | [x] Red → Yellow |

---

## Aday / şemaya sığmayan

- `candidates/zaba-leftovers.md`
