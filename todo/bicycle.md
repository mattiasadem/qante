# Todo — Bicycle (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://bicycle-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/bicycle-best-shopify-bicycle-store-os-2-0  
*Preset:* `default` · *Slug:* `bicycle`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Bicycle V-1.5.0**  
`schema_name` = **Bicycle** · `schema_version` = **1.5.0** · `role` = **main** · theme id `130165440647`  
`theme_store_id` = **null**  
`Shopify.shop` = `bicycle-online-store-1.myshopify.com`  
Title: `Bicycle - Best Shopify Bicycle Store – bicycle-online-store-1 (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — “Please enter password "1" to view demo.” Aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bicycle/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Parallel | yalnız `observations/bicycle/`, `evidence/bicycle/`, `todo/bicycle.md`, `candidates/bicycle-leftovers.md` + unlock host + zenon dismiss |

**Kapsam satırı:**  
`Bicycle · default · Bicycle V-1.5.0 / schema_name Bicycle 1.5.0 · theme_store_id null · shop bicycle-online-store-1.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP norco-sight-a-framekit-29 Color→PLP /collections/all→/collections→search bike→cart empty+filled→about-us→faqs→contact→news+article→404 · 41 obs · 0 yeni şema · leftover: candidates/bicycle-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Mega SHOP ALL 1440 | roster | [ ] interact |
| Predictive search `bike` | roster | [ ] interact |
| Mobile menu 375 + 768 | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP Color Hibiscus Leaf→Gold | roster | [ ] interact |
| Featured QUICK SHOP hover | roster | [ ] interact |
| PLP `/collections/all` + filter | roster | [ ] capture / interact |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=bike` | roster | [ ] capture |
| Cart page empty + filled + qty | roster | [ ] interact |
| About `/pages/about-us` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faqs` | roster | [ ] capture + interact |
| News + launching-a-new-collection | roster | [ ] capture |
| 404 `/pages/contact-us` | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Bicycle / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB utility-bar | `promo-announcement-bar` | reuse · sosyal + 2 mesaj + locale |
| 2 | header | `navigation-header-mega` | reuse · mega SHOP ALL 1440 |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | `__07468762` collection-list | `collection-nav-image-cards` | reuse · 3 kart |
| 5 | `video_g9Cpi8` | `media-video-hero` | reuse · poster, metin yok |
| 6 | `featured_collection_h498CU` | `product-showcase-grid-featured` | reuse · QUICK SHOP |
| 7 | `image_banner_zUEwbC` | `editorial-image-with-text-overlay` | reuse · Biggest Offer |
| 8 | `testimonials_tg4nyH` | `testimonial-quote-carousel` | reuse |
| 9 | `multirow_XqMqUB` | `editorial-image-with-text` | reuse · kids cycle |
| 10 | `__588ae6a9` Latest news | `blog-list-main` | reuse |
| 11 | `custom_instagram_hbzkpd` | `media-shop-the-feed` | reuse · hotspot yok |
| 12 | `brand_logo_beptDA` | `social-proof-brand-logos` | reuse |
| 13 | `service_icon_iQmBFV` | `trust-icon-row` | reuse · 4 vaat |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | newsletter-popup | — | leftover · zenon / PII |
| 16 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 17 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 18 | `details:has(#Search-In-Modal)` | `global-predictive-search` | reuse · bike |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–18 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 19–24 | product-info + tabs + IWT + related + multi | product-detail | [ ] | [x] | reuse | [ ] |
| 25–26 | banner + grid | collection | [ ] | [x] | reuse | [ ] |
| 27 | collections index | collections | [ ] | [x] | reuse | [ ] |
| 28 | search bike | search | [ ] | [x] | reuse | [ ] |
| 29 | cart | cart | [ ] | [x] | reuse | [ ] |
| 30–31 | overlay + form | contact | [ ] | [x] | reuse | [ ] |
| 32–37 | about blocks | about-brand | [ ] | [x] | reuse | [ ] |
| 38–39 | overlay + FAQ | faq-support | [ ] | [x] | reuse | [ ] |
| 40–41 | news + article | blog | [ ] | [x] | reuse | [ ] |
| 42 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/bicycle-leftovers.md`](../candidates/bicycle-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Color / FAQ / featured hover / PLP filter
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs` — 0 error
