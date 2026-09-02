# Todo — Spacecraft (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://pandora-furniture-3.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/home-decor-shopify-theme  
*Preset klasör:* `default` · slug `spacecraft`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Storefront password:** `/` **302** → `/password`. Vendor yayınlı şifre **1** (ürün sayfası + vitrin `<title>` “Pandora Furniture 3 (password: 1)”). Başka host uydurulmadı.

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-furniture-3 V-1.5.0**  
`schema_name` = **pandora_furniture_3** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170818404632`  
`theme_store_id` = **null** · `handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host = `Shopify.shop` = `pandora-furniture-3.myshopify.com` · locale `en` · country `US` · currency `USD`

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/spacecraft/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/spacecraft/`, `evidence/spacecraft/`, `todo/spacecraft.md`, `candidates/spacecraft-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Spacecraft · default · Pandora-furniture-3 V-1.5.0 / schema_name pandora_furniture_3 1.5.0 · theme_store_id null · shop pandora-furniture-3.myshopify.com · password 1 (vendor-published) · home→PDP Landskrona→PLP /collections/all→/collections→search chair→cart→our-story/contact/faqs→news+post · 39 obs · 0 yeni şema · leftover: candidates/spacecraft-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | [ ] |
| Predictive search `sofa` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Landskrona Color | [ ] interact Dark Grey | [ ] |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=chair` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [ ] interact | [ ] |
| Our Story / Contact / FAQ / News+post | [x] obs | [ ] capture |
| Map / wishlist / account / checkout / newsletter submit | ⛔ leftover / dur | — |

---

## Home roster (DOM)

| # | Section / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header / #site-header | `navigation-header-mega` | reuse · viewport |
| 3 | 165665788459900955 | `hero-slideshow` | reuse |
| 4 | 6a2ca2f9… | `editorial-rich-text` | reuse |
| 5 | 3a6f565c… | `product-showcase-grid-featured` | reuse · slider |
| 6 | 95966640… Living/Bedroom | `collection-nav-image-cards` | reuse · 2 kart |
| 7 | 165666889162d379a4 | `product-showcase-tabs` | reuse |
| 8 | c404ce90… Dining/Bathroom | `collection-nav-image-cards.2` | reuse |
| 9 | c00e4ddf… Home Office | `editorial-image-with-text-overlay` | reuse |
| 10 | 1656667513043b6e26 | `media-shop-the-feed` | reuse |
| 11 | footer | `footer-columns-newsletter` | reuse · submit yok |
| — | newsletter-popup | — | leftover h=0 |
| — | CartDrawer | `global-cart-drawer` | reuse |
| — | menu-drawer | `global-menu-drawer` | reuse |
| — | details-modal.header__search | `global-predictive-search` | reuse |

---

## Other templates

| # | id | sayfa | JSON | Done |
|---|---|---|---|---|
| 1 | collection-banner | collection | [x] | [ ] 3vp |
| 2 | product-showcase-grid-plp | collection | [x] | [ ] 3vp |
| 3 | collection-nav-grid | collections | [x] | [ ] 3vp |
| 4 | search-results | search | [x] | [ ] 3vp |
| 5 | cart-page-main | cart | [x] | [ ] 3vp + interact |
| 6 | product-showcase-grid-featured | cart | [x] | [ ] 3vp |
| 7 | product-info-main | product-detail | [x] | [ ] interact Dark Grey |
| 8 | editorial-image-with-text | product-detail | [x] | [ ] 3vp |
| 9 | editorial-image-with-text-overlay | product-detail | [x] | [ ] 3vp |
| 10 | product-showcase-related | product-detail | [x] | [ ] 3vp |
| 11 | page-content-main + IWT + form | contact | [x] | [ ] 3vp |
| 12 | our-story stack | about-brand | [x] | [ ] 3vp |
| 13 | FAQ ×2 | faq-support | [x] | [ ] 3vp |
| 14 | blog-list + blog-post | blog | [x] | [ ] 3vp |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop mega |
| global-predictive-search | input | [ ] `sofa` |
| global-menu-drawer | open | [ ] 375+768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Color Dark Grey |
| product-showcase-grid-featured | hover | [ ] |
| product-showcase-tabs | changed | [ ] Best Seller |
| faq-collapsible-tabs | changed | [ ] |

---

## Aday / şemaya sığmayan

- [`candidates/spacecraft-leftovers.md`](../candidates/spacecraft-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp `capture-observation.mjs` (39 obs)
- [ ] Interact capture
- [ ] `node scripts/validate-schemas.mjs`
