# Todo — Vedzila (Speedo Themes)

*Kaynak (yalnız resmi walk):* https://vedzila-organic.myshopify.com/  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/vedzila-organic-shopify-hair-oli-and-shampoo-theme-os-2-0  
*Preset:* `default` · *Slug:* `vedzila`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Copy of speedo-vedzila-organic-v-1-5-0**  
`schema_name` = **vedzila-organic** · `schema_version` = **1.5.0** · `role` = **main** · theme id `174316257564`  
`theme_store_id` = **null**  
shop `vedzila-organic.myshopify.com`

**Storefront password:** vendor `1` (ürün sayfasında yayınlı). Aynı host `/password` — başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vedzila/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vedzila/`, `evidence/vedzila/`, `todo/vedzila.md`, `candidates/vedzila-leftovers.md`, capture password helper |

**Kapsam satırı:**  
`Vedzila · default · Copy of speedo-vedzila-organic-v-1-5-0 / schema_name vedzila-organic 1.5.0 · theme_store_id null · shop vedzila-organic.myshopify.com · home→PDP chilli-hair-oil→PLP hair-shampoo→collections→search oil→cart→about-us/contact→faq→blog news+post→footer→mobile · 45 obs · 0 yeni şema · leftover: candidates/vedzila-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [ ] capture |
| Mega Shop 1440 | interact | [ ] |
| Predictive search `oil` | interact | [ ] |
| Mobile menu 375/768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Chilli Hair Oil Size 100→200 ml | interact | [ ] |
| PLP `/collections/hair-shampoo` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=oil` | roster | [ ] capture |
| Cart page empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture |
| Blog `/blogs/news` + hair-oil post | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Vedzila / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop mega `details#Details-HeaderMenu-2` |
| 3 | ad9186b4 slideshow | `hero-slideshow` | reuse |
| 4 | 71517398 custom-multicolumn | `trust-icon-row` | reuse |
| 5 | featured_collection | `product-showcase-grid-featured` | reuse |
| 6 | 51a09e87 scrolling-text | `promo-scrolling-marquee` | reuse |
| 7 | d5ceec8b As Seen on | `social-proof-brand-logos` | reuse |
| 8 | 13d26119 collection-list | `collection-nav-image-cards` | reuse |
| 9 | shopable_videos_EwyiiB | `media-shop-the-feed` | reuse |
| 10 | 6c004211 image-banner | `editorial-image-with-text-overlay` | reuse |
| 11 | be2a022f Why Vedzila | `features-multicolumn` | reuse |
| 12 | 71e7899c image-with-text | `editorial-image-with-text` | reuse |
| 13 | 04090464 testimonials | `testimonial-quote-carousel` | reuse |
| 14 | 91bab14d Latest Blog | `blog-list-main` | reuse |
| 15 | 617c12e2 scrolling-text | `promo-scrolling-marquee.2` | reuse |
| 16 | ac142051 FAQ | `faq-collapsible-tabs` | reuse |
| 17 | 3b21600d instagram | `media-mosaic-grid` | reuse |
| 18 | 9c4834f6 newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 19 | footer | `footer-columns-newsletter` | reuse |
| 20 | #CartDrawer | `global-cart-drawer` | reuse |
| 21 | details-modal.header__search | `global-predictive-search` | reuse |
| 22 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 23 | newsletter-popup | — | leftover 0px / PII |

---

## Aday / leftover

[`candidates/vedzila-leftovers.md`](../candidates/vedzila-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
