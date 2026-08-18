# Todo — Minion (Shopify paid) · Softali · Red / default

*Kaynak:* https://minion-theme-red.myshopify.com/  
*Preset:* `default` (Red) · *Slug:* `minion`  
*Theme Store:* https://themes.shopify.com/themes/minion

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Devices 29-Jun 6a15611**  
`schema_name` = **Minion** · `schema_version` = **4.2.0** · `role` = **main** · theme id `161916420354`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `minion-theme-red.myshopify.com`

**Durum:** Mod A walk roster yazıldı · 3vp + interact yakalama sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/minion/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/minion/`, `evidence/minion/`, `todo/minion.md`, `candidates/minion-leftovers.md` |

**Kapsam satırı:**  
`Minion · default (Red) · Devices 29-Jun 6a15611 · schema_name Minion 4.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about-us/contact→blog→404 · 37 obs · 0 yeni şema · leftover: candidates/minion-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/slideshow/brands/categories/featured/banners/tabs/feed/services/about accordion/trust/footer | roster | [ ] |
| Mega Phones 1440 | interact yazıldı | [ ] |
| Predictive search `phone` | interact yazıldı | [ ] |
| Mobile menu 375 | interact yazıldı | [ ] |
| Mobile menu 768 | interact yazıldı | [ ] |
| Cart drawer empty + filled + qty | interact yazıldı | [ ] |
| PDP Gaming PC Storage 256→512 | interact yazıldı | [ ] |
| PLP `/collections/phones` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=phone` | roster | [ ] |
| Cart page empty + filled + qty | interact yazıldı | [ ] |
| About `/pages/about-us` (`/pages/about` 404) | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| News + How To Layer Sweaters | roster | [ ] |
| 404 leftover | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Minion / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 2 | ticker `66885636-…` | `promo-announcement-bar` | reuse |
| 3 | header | `navigation-header-mega` | reuse · interact |
| 4 | slideshow `16496874371d99a02e` | `hero-slideshow` | reuse |
| 5 | brands `1654074087c407e2b5` | `social-proof-brand-logos` | reuse |
| 6 | popular_categories_8GeQL6 | `collection-nav-image-cards` | reuse |
| 7 | featured `16544355349cd01ef0` | `product-showcase-grid-featured` | reuse |
| 8 | banners `1657623091ab93e52b` | `promo-grid-banner` | reuse |
| 9 | grid_of_products_ebydAh | `product-showcase-tabs` | reuse |
| 10 | shop_the_feed_JXFrhM | `media-shop-the-feed` | reuse |
| 11 | icon_banners_xY7Rpj | `features-multicolumn` | reuse |
| 12 | about accordion `165779435859812db9` | `faq-collapsible-tabs` | reuse |
| 13 | trust `2e871113-…` | `trust-icon-row` | reuse |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | summary.main-menu-button | `global-menu-drawer` | reuse · 375/768 |
| 16 | #Search-In-Modal | `global-predictive-search` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | Phones tile hover 1440 — henüz çekilmedi |
| global-predictive-search | input | `phone` 3vp — henüz çekilmedi |
| global-menu-drawer | open | 375/768 hamburger — henüz çekilmedi |
| global-cart-drawer | filled + changed | henüz çekilmedi |
| cart-page-main | filled + changed | henüz çekilmedi |
| product-info-main | changed | Storage 256→512 — henüz çekilmedi |

---

## Aday / leftover

[`candidates/minion-leftovers.md`](../candidates/minion-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Storage
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
