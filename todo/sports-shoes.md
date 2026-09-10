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

**Durum:** ✅ Mod A + interact — 49 obs · 205 PNG · 0 yeni şema  
**PR:** draft #383 · **main'e merge yok**

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
`Sports Shoes · default · shoes-v-1-5-0-latest-updates-new / schema_name Shoes 1.5.0 · theme_store_id null · shop shoes-online-store-1.myshopify.com · password 1 · home→PDP Uptempo→PLP best-seller→/collections→search shoe→cart→about-layout-1→contact→faq→news+post→404 · 49 obs · 205 PNG · 0 yeni şema · leftover: candidates/sports-shoes-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [x] capture |
| Header Shop/Best Sellers 1440 | [x] obs | [x] interact |
| Predictive search | [x] obs | [x] interact |
| Mobile menu 375 + 768 | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Uptempo Size/Color | [x] obs | [x] interact |
| PLP `/collections/best-seller` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=shoe` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] obs | [x] interact |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] obs | [x] capture |
| News + barefoot post | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
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
| 1–17 | home static | home | [x] | [x] | reuse | [x] |
| 18–20 | search / menu / cart overlays | home | [x] | [x] | reuse | [x] |
| 21–29 | PDP blocks | product-detail | [x] | [x] | reuse | [x] |
| 30–32 | banner + slider + PLP | collection | [x] | [x] | reuse | [x] |
| 33 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 34 | search-results | search | [x] | [x] | reuse | [x] |
| 35 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 36–42 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 43–44 | rich-text + form | contact | [x] | [x] | reuse | [x] |
| 45–46 | parallax + faq | faq-support | [x] | [x] | reuse | [x] |
| 47–48 | list + post | blog* | [x] | [x] | reuse | [x] |
| 49 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 Shop/Best Sellers/Themes/Collections | alındı — dört mega panel |
| global-menu-drawer | open 375/768 | alındı — Shop `<a>` changed missing |
| global-predictive-search | input uptempo | alındı — 1 ürün |
| global-cart-drawer | filled + changed | alındı — $250→$500 |
| cart-page-main | filled + changed | alındı — qty 1→2 |
| product-info-main | changed Size/Color | alındı — 12 + Black |
| product-info-tabs | changed Additional | alındı |
| product-showcase-grid-featured | hover 1440 | alındı — 2. açı + ikonlar |
| home FAQ | changed ilk soru | alındı |
| collection-nav-tabs | changed Womens | missing — `/collections/womens` navigate |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/sports-shoes-leftovers.md`](../candidates/sports-shoes-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact menu / search / cart / PDP / tabs / hover / FAQ
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error · 0 yeni şema · mevcut warn'lar
