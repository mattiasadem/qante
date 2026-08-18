# Todo — Minion (Shopify paid) · Softali · Red / default

*Kaynak:* https://minion-theme-red.myshopify.com/  
*Preset:* `default` (Red) · *Slug:* `minion`  
*Theme Store:* https://themes.shopify.com/themes/minion

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Devices 29-Jun 6a15611**  
`schema_name` = **Minion** · `schema_version` = **4.2.0** · `role` = **main** · theme id `161916420354`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `minion-theme-red.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/170 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/minion/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/minion/`, `evidence/minion/`, `todo/minion.md`, `candidates/minion-leftovers.md` |

**Kapsam satırı:**  
`Minion · default (Red) · Devices 29-Jun 6a15611 · schema_name Minion 4.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about-us/contact→news/article→404 · 37 obs · 129 PNG · 0 yeni şema · leftover: candidates/minion-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/slideshow/brands/categories/featured/banners/tabs/feed/services/about accordion/trust/footer | roster + capture | [x] |
| Mega Phones 1440 | interact | [x] |
| Predictive search `phone` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Gaming PC Storage 256→512 | interact 3vp | [x] |
| PLP `/collections/phones` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=phone` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` (`/pages/about` 404) | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| News + How To Layer Sweaters | roster + capture | [x] |
| 404 leftover | roster + capture | [x] |
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
| navigation-header-mega | open | 1440 Phones hover — 4 kolon + Popular Smartphones görsel |
| global-predictive-search | input | `phone` 3vp — Suggestions + Revel Phone From $399; 1440 Collections |
| global-menu-drawer | open | 375/768 ikonlu kategoriler + About. 768 Account Sign in (dur) |
| global-cart-drawer | filled + changed | empty → PC $600 qty1 → qty2 $1,199. Check out dur |
| cart-page-main | filled + changed | empty → PC $600 qty1 → qty2 $1,199 |
| product-info-main | changed | 256GB $1,199 → 512GB $1,899 |

---

## Aday / leftover

[`candidates/minion-leftovers.md`](../candidates/minion-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Storage
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
