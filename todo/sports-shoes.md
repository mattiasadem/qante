# Todo — Sports Shoes (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://shoes-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shoes-best-shopify-shoes-store-os-2-0  
*Preset klasör:* `default` · slug `sports-shoes`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **shoes-v-1-5-0-latest-updates-new**  
`schema_name` = **Shoes** · `schema_version` = **1.5.0** · `role` = **main** · theme id `175941845279`  
`theme_store_id` = **null** (Theme Store id uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host + `Shopify.shop` = `shoes-online-store-1.myshopify.com` · locale `en` · country `US` · currency `USD`  
`/` **302** → `/password` · title `Shoes- online-store-1 (password: 1)` · ürün sayfası: *Please enter password 1 to view demo.*  
Public storefront-unlock `1` — başka host yok.

**Durum:** 🟡 Mod A observations yazıldı · 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sports-shoes/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **49** |
| Parallel | `observations/sports-shoes/`, `evidence/sports-shoes/`, `todo/sports-shoes.md`, `candidates/sports-shoes-leftovers.md` + unlock host + Speedo popup dismiss |

**Kapsam satırı:**  
`Sports Shoes · default · shoes-v-1-5-0-latest-updates-new / schema_name Shoes 1.5.0 · theme_store_id null · shop shoes-online-store-1.myshopify.com · password 1 · home→PDP Uptempo→PLP best-seller→/collections→search shoe→cart→about-layout-1→contact→faq→news+post→404 · 49 obs · 0 yeni şema · leftover: candidates/sports-shoes-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [ ] capture |
| Header Shop/Best Sellers 1440 | [x] obs | [ ] interact |
| Predictive search | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Uptempo Size/Color | [x] obs | [ ] interact |
| PLP `/collections/best-seller` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=shoe` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-layout-1` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] capture |
| News + barefoot post | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Sports Shoes / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega interact |
| 3 | slideshow New Sneaker Fower | `hero-slideshow` | reuse |
| 4 | categories_slider_hgheJG | `collection-nav-slider` | reuse · daire |
| 5 | image_text_with_slider_mAkhPU | `collection-nav-tabs` | reuse · ACTIVITIES yan liste |
| 6 | Best Selling | `product-showcase-grid-featured` | reuse |
| 7 | image_banner Find The Balance | `editorial-image-with-text-overlay` | reuse |
| 8 | featured New Arrivals | `product-showcase-grid-featured.2` | reuse |
| 9 | collage_VmPpLb | `editorial-dynamic-grid` | reuse · look+product |
| 10 | Shop By Category | `collection-nav-image-cards` | reuse |
| 11 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 12 | testimonial_khKxRr | `testimonial-quote-carousel.2` | reuse |
| 13 | Latest News | `blog-list-main` | reuse |
| 14 | collapsible FAQs | `faq-collapsible-tabs` | reuse |
| 15 | custom_instagram @shoes | `media-shop-the-feed` | reuse |
| 16 | newsletter Get 20% off | `lead-capture-newsletter-band` | reuse · submit yok |
| 17 | footer | `footer-columns-newsletter` | reuse |
| 18 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · interact |
| 20 | predictive-search | `global-predictive-search` | reuse · interact |
| — | newsletter-popup | — | leftover PII |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home static | home | [ ] | [x] | reuse | [ ] |
| 18–20 | search / menu / cart overlays | home | [ ] | [x] | reuse | [ ] |
| 21–29 | PDP blocks | product-detail | [ ] | [x] | reuse | [ ] |
| 30–32 | banner + slider + PLP | collection | [ ] | [x] | reuse | [ ] |
| 33 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 34 | search-results | search | [ ] | [x] | reuse | [ ] |
| 35 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 36–42 | about-layout-1 | about-brand | [ ] | [x] | reuse | [ ] |
| 43–44 | rich-text + form | contact | [ ] | [x] | reuse | [ ] |
| 45–46 | parallax + faq | faq-support | [ ] | [x] | reuse | [ ] |
| 47–48 | list + post | blog* | [ ] | [x] | reuse | [ ] |
| 49 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 Shop | sırada |
| global-menu-drawer | open + Shop changed | sırada |
| global-predictive-search | input | sırada |
| global-cart-drawer | filled + changed | sırada |
| cart-page-main | filled + changed | sırada |
| product-info-main | changed Size/Color | sırada |
| product-showcase-grid-featured | hover 1440 | sırada |
| collection-nav-tabs | changed Womens | sırada |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/sports-shoes-leftovers.md`](../candidates/sports-shoes-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact menu / search / cart / PDP / tabs / hover
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
