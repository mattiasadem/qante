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

**Durum:** Mod A walk + resmi 3vp · interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/matress/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **44** |
| Parallel | yalnız `observations/matress/`, `evidence/matress/`, `todo/matress.md`, `candidates/matress-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Matress · default · matress-v-1-5-0-latest-updates-new / schema_name Matress 1.5.0 · theme_store_id null · shop mattress-online-store-1.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP duo-plus-mattress Size→PLP /collections/all→/collections→search mattress→cart empty→about-us→faq→contact→news+cozy-nook→404 · 44 obs · 0 yeni şema · leftover: candidates/matress-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega 1440 | [ ] interact | — |
| Predictive search `mattress`/`duo` | [ ] interact | — |
| Mobile menu 375 + 768 | [ ] interact | — |
| Cart drawer empty + filled + qty | [ ] interact | — |
| PDP Size Single→Queen | [ ] interact | — |
| Featured hover / quick-add | [ ] interact | — |
| PLP `/collections/all` + filter | [x] obs | [ ] capture + interact |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=mattress` | [x] obs | [ ] capture |
| Cart page empty + filled | [x] obs | [ ] capture + interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] capture + interact |
| News + cozy nook | [x] obs | [ ] capture |
| 404 `/pages/404` | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse · sosyal + 2 mesaj + locale |
| 2 | header | `navigation-header-mega` | reuse · mega SHOP 1440 |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | `service_icon_cRV7DD` | `trust-icon-row` | reuse · 4 vaat |
| 5 | `featured_product_slider_nxrkYp` | `product-showcase-grid-featured` | reuse · Size pills + quick-add |
| 6 | `custom_multicolumn_list_y6H93J` | `features-multicolumn` | reuse · 3 kolon |
| 7 | `custom_image_with_text_ztfNVw` | `editorial-image-with-text` | reuse |
| 8 | `testimonials_Khkjqf` | `testimonial-quote-carousel` | reuse |
| 9 | `video_MakxPW` | `media-video-hero` | reuse · metin yok |
| 10 | `__588ae6a9` OUR BLOGS | `blog-list-main` | reuse |
| 11 | `custom_instagram_N8fnnR` | `media-shop-the-feed` | reuse · hotspot yok |
| 12 | `custom_announcement_bar_m3A7zE` | `promo-scrolling-marquee` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover · zenon / PII |
| 15 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 16 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 17 | `details-modal.header__search` | `global-predictive-search` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [ ] 3vp | [x] | reuse | [ ] |
| 18–26 | product-info + tabs + IWT + FAQ + banners | product-detail | [ ] 3vp | [x] | reuse | [ ] |
| 27–28 | banner + grid | collection | [ ] 3vp | [x] | reuse | [ ] |
| 29 | collections index | collections | [ ] 3vp | [x] | reuse | [ ] |
| 30 | search mattress | search | [ ] 3vp | [x] | reuse | [ ] |
| 31 | cart | cart | [ ] 3vp | [x] | reuse | [ ] |
| 32–38 | about blocks | about-brand | [ ] 3vp | [x] | reuse | [ ] |
| 39–40 | title + form | contact | [ ] 3vp | [x] | reuse | [ ] |
| 41–42 | overlay + FAQ | faq-support | [ ] 3vp | [x] | reuse | [ ] |
| 43–44 | news + article | blog | [ ] 3vp | [x] | reuse | [ ] |
| 45 | 404 | not-found | [ ] 3vp | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/matress-leftovers.md`](../candidates/matress-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 130 PNG (menu+search 1440 zero-size skip)
- [ ] Interact mega / search / menu / cart / PDP Size / FAQ / featured hover / tabs / PLP filter
- [ ] PNG bak → stateFindings (şema değişmedi)
- [ ] `node scripts/validate-schemas.mjs`
