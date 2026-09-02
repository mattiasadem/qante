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

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check) — **kapandı**  
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
`Bicycle · default · Bicycle V-1.5.0 / schema_name Bicycle 1.5.0 · theme_store_id null · shop bicycle-online-store-1.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP norco-sight-a-framekit-29 Color Gold→PLP Color Black→/collections→search bike→cart empty+filled+qty→about-us→faqs Q2→contact→news+article→404 · mega/search/menu/cart/PDP/FAQ/tabs/hover/PLP · 41 obs · 178 PNG · 0 yeni şema · leftover: candidates/bicycle-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [x] capture |
| Mega SHOP ALL 1440 | roster | [x] interact · 6 image card |
| Predictive search `bike` | roster | [x] interact · PRODUCTS listesi |
| Mobile menu 375 + 768 | roster | [x] interact · changed yok (düz link) |
| Cart drawer empty + filled + qty | roster | [x] interact · 1→2 $80→$160 |
| PDP Color Hibiscus Leaf→Gold | roster | [x] interact · görsel değişti |
| Featured QUICK SHOP hover | roster | [x] interact · bar var, overlay yok |
| PLP `/collections/all` + filter | roster | [x] capture + interact Color Black |
| Collections `/collections` | roster | [x] capture |
| Search `/search?q=bike` | roster | [x] capture |
| Cart page empty + filled + qty | roster | [x] interact · 1→2 $80→$160 |
| About `/pages/about-us` | roster | [x] capture |
| Contact form (submit yok) | roster | [x] capture |
| FAQ `/pages/faqs` | roster | [x] capture + interact Q2 |
| News + launching-a-new-collection | roster | [x] capture |
| 404 `/pages/contact-us` | roster | [x] capture |
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
| 1–18 | home + overlays | home | [x] 3vp + interact | [x] | reuse | [x] |
| 19–24 | product-info + tabs + IWT + related + multi | product-detail | [x] 3vp + Color/tabs | [x] | reuse | [x] |
| 25–26 | banner + grid | collection | [x] 3vp + Color Black | [x] | reuse | [x] |
| 27 | collections index | collections | [x] 3vp | [x] | reuse | [x] |
| 28 | search bike | search | [x] 3vp | [x] | reuse | [x] |
| 29 | cart | cart | [x] 3vp + filled/qty | [x] | reuse | [x] |
| 30–31 | overlay + form | contact | [x] 3vp | [x] | reuse | [x] |
| 32–37 | about blocks | about-brand | [x] 3vp | [x] | reuse | [x] |
| 38–39 | overlay + FAQ | faq-support | [x] 3vp + Q2 | [x] | reuse | [x] |
| 40–41 | news + article | blog | [x] 3vp | [x] | reuse | [x] |
| 42 | 404 | not-found | [x] 3vp | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/bicycle-leftovers.md`](../candidates/bicycle-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 122 PNG (menu 1440 zero-size skip)
- [x] Interact mega / search / menu / cart / PDP Color / FAQ / featured hover / tabs / PLP filter
- [x] PNG bak → stateFindings (şema değişmedi)
- [x] `node scripts/validate-schemas.mjs` — 0 error (69 şema, 13 pre-existing warn)
