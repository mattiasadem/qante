# Todo — Matress (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://mattress-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/matress-best-mattress-store-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `matress`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **matress-v-1-5-0-latest-updates-new**  
`schema_name` = **Matress** · `schema_version` = **1.5.0** · `role` = **main** · theme id `126821171258`  
`theme_store_id` = **null**  
`handle` = `"null"`  
`Shopify.shop` = `mattress-online-store-1.myshopify.com` · locale `en` · country `US` · currency `USD`  
Title: `Matress - Best Mattress Store – mattress-online-store-1`  
Storefront password (ürün sayfasında yayın): **`1`** — “Please enter password "1" to view demo.” Aynı host `/password`, başka vitrin yok.

**Durum:** first inventory + interact kapalı · 44 obs · 192 PNG · 0 yeni şema  
**PR:** https://github.com/mattiasadem/qante/pull/409 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/matress/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **44** (interact 11) |
| Parallel | yalnız `observations/matress/`, `evidence/matress/`, `todo/matress.md`, `candidates/matress-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Matress · default · matress-v-1-5-0-latest-updates-new / schema_name Matress 1.5.0 · theme_store_id null · shop mattress-online-store-1.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP duo-plus-mattress Size→PLP /collections/all→/collections→search mattress→cart empty+filled→about-us→faq→contact→news+cozy-nook→404 · 44 obs · 192 PNG · 0 yeni şema · leftover: candidates/matress-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega 1440 | [x] interact | 6 kart (Beautyrest…Duroflex) |
| Predictive search `mattress` | [x] interact | 375/768 modal + 1440 inline |
| Mobile menu 375 + 768 | [x] interact | lacivert drawer |
| Cart drawer empty + filled + qty | [x] interact | Duo Plus $150→$300 · ATC ui |
| PDP Size Single→Queen | [x] interact | fiyat $150 sabit |
| Featured hover | [x] interact | zoom + kalp/karşılaştır/göz · QV yok |
| PLP `/collections/all` + Size Queen | [x] obs + interact | 21 ürün duruyor |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=mattress` | [x] obs | [x] capture |
| Cart page empty + filled | [x] obs + interact | qty 1→2 $150→$300 |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] obs + interact | Q1+Q2 açık (allowMultipleOpen) |
| News + cozy nook | [x] obs | [x] capture |
| 404 `/pages/404` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse · sosyal + 2 mesaj + locale |
| 2 | header | `navigation-header-mega` | reuse · mega SHOP 1440 |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | `service_icon_cRV7DD` | `trust-icon-row` | reuse · 4 vaat |
| 5 | `featured_product_slider_nxrkYp` | `product-showcase-grid-featured` | reuse · Size pills; hover QV yok |
| 6 | `custom_multicolumn_list_y6H93J` | `features-multicolumn` | reuse |
| 7 | `custom_image_with_text_ztfNVw` | `editorial-image-with-text` | reuse |
| 8 | `testimonials_Khkjqf` | `testimonial-quote-carousel` | reuse |
| 9 | `video_MakxPW` | `media-video-hero` | reuse · metin yok |
| 10 | `__588ae6a9` OUR BLOGS | `blog-list-main` | reuse |
| 11 | `custom_instagram_N8fnnR` | `media-shop-the-feed` | reuse · hotspot yok |
| 12 | `custom_announcement_bar_m3A7zE` | `promo-scrolling-marquee` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover · zenon / PII |
| 15 | `#CartDrawer` | `global-cart-drawer` | reuse · empty/filled/qty |
| 16 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 17 | `details-modal` + `header-search_box` | `global-predictive-search` | reuse · 375/768 modal · 1440 inline |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [x] 3vp + interact | [x] | reuse | [x] |
| 18–26 | product-info + tabs + IWT + FAQ + banners | product-detail | [x] 3vp + Size/tabs/FAQ | [x] | reuse | [x] |
| 27–28 | banner + grid | collection | [x] 3vp + Queen | [x] | reuse | [x] |
| 29 | collections index | collections | [x] 3vp | [x] | reuse | [x] |
| 30 | search mattress | search | [x] 3vp | [x] | reuse | [x] |
| 31 | cart | cart | [x] 3vp + filled/qty | [x] | reuse | [x] |
| 32–38 | about blocks | about-brand | [x] 3vp | [x] | reuse | [x] |
| 39–40 | title + form | contact | [x] 3vp | [x] | reuse | [x] |
| 41–42 | overlay + FAQ | faq-support | [x] 3vp + Q2 | [x] | reuse | [x] |
| 43–44 | news + article | blog | [x] 3vp | [x] | reuse | [x] |
| 45 | 404 | not-found | [x] 3vp | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/matress-leftovers.md`](../candidates/matress-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 130 PNG (menu+search 1440 static zero-size skip; interact 1440 search inline alındı)
- [x] Interact mega / search / menu / cart / PDP Size / FAQ / featured hover / tabs / PLP filter
- [x] PNG bak → stateFindings (şema değişmedi)
- [x] `node scripts/validate-schemas.mjs` — 0 error · 13 warn (önceden)
