# Todo — Sonix (Speedo Themes, third-party Shopify 2.0)

*Kaynak (resmi walk ONLY):* https://sonix-electronics-store.myshopify.com/  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/sonix-shopify-electronics-theme-shopify-os-2-0  
*Preset:* `default` · *Slug:* `sonix`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Yasak:** başka host uydurma. Password wall: vendor `1` — **bu hostta** `/password`.

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = ** Sonix V-1.5.0** (başta boşluk)  
`schema_name` = **Sonix** · `schema_version` = **1.5.0** · `role` = **main** · theme id `169615360300`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `sonix-electronics-store.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact · validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sonix/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` · observation `storePassword: "1"` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/sonix/`, `evidence/sonix/`, `todo/sonix.md`, `candidates/sonix-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Sonix · default · Sonix V-1.5.0 / schema_name Sonix 1.5.0 · theme_store_id null · home→PDP Echo Dot→PLP alexa→collections→search iphone→cart→about-us/contact→faqs→news+article→404 · 39 obs · 0 yeni şema · leftover: candidates/sonix-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/slideshow/marquee/categories/featured/promo/blog/trust/footer | roster | [x] |
| Mega SHOP / FEATURES 1440 | interact | [ ] |
| Predictive search `iphone` | interact | [ ] |
| Mobile menu 375 + 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Echo Dot Color Black→White | interact | [ ] |
| PLP `/collections/alexa` | roster | [x] |
| Collections index `/collections` | roster | [x] |
| Search `/search?q=iphone` | roster | [x] |
| Cart `/cart` empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | roster | [x] |
| Contact `/pages/contact` (submit yok) | roster | [x] |
| FAQ `/pages/faqs` | roster + interact | [x] roster |
| Blog `/blogs/news` + launching article | roster | [x] |
| 404 leftover | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Sonix / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow `3b7cb796-…` | `hero-slideshow` | reuse · interact |
| 4 | custom_announcement_bar_4jhTBP | `promo-scrolling-marquee` | reuse |
| 5 | categories_slider_KGcU6V | `collection-nav-slider` | reuse |
| 6 | featured `0617c2f2-…` | `product-showcase-grid-featured` | reuse · QUICK SHOP leftover |
| 7 | offer_banner_g7W7Wb | — | leftover · tek görsel ENDS SOON |
| 8 | `07468762-…` | `collection-nav-image-cards` | reuse · HOME/OFFICE/OUTDOOR |
| 9 | featured_collection | `product-showcase-grid-featured.2` | reuse |
| 10 | `7722eea3-…` | `promo-grid-banner` | reuse · Kitchen/Sounds |
| 11 | `8b5479f1-…` | `editorial-image-with-text-overlay` | reuse |
| 12 | `588ae6a9-…` | `blog-list-main` | reuse · home teaser |
| 13 | `6ce4ce05-…` | `trust-icon-row` | reuse |
| 14 | custom_announcement_bar_4n3XyK | `promo-scrolling-marquee.2` | reuse |
| 15 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 16 | newsletter-popup | — | leftover · cookie/PII h=0 |
| 17 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 18 | predictive-search | `global-predictive-search` | reuse · interact |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] SHOP mega 1440 |
| global-predictive-search | input | [ ] `iphone` |
| global-menu-drawer | open | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] Echo Dot |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Black→White |
| hero-slideshow | changed | [ ] nokta/ok |
| faq-collapsible-tabs | changed | [ ] ikinci soru |
| product-showcase-grid-plp | changed | [ ] Color Black (şüphede yokla) |

---

## Aday / leftover

[`candidates/sonix-leftovers.md`](../candidates/sonix-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 39 obs · 116 PNG
- [ ] Interact mega / search / menu / cart / PDP Color / FAQ / slideshow
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
