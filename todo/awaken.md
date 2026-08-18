# Todo — Awaken (Shopify paid)

*Kaynak:* https://awaken-store-newdemo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/awaken  
*Preset:* `default` · *Slug:* `awaken`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Awaken**  
`schema_name` = **Awaken** · `schema_version` = **1.0.0** · `role` = **main** · theme id `128258572334`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `awaken-store-newdemo.myshopify.com` · locale `en` · currency `USD`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/184 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/awaken/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **32** |
| PNG | **106** |
| Parallel | yalnız `observations/awaken/`, `evidence/awaken/`, `todo/awaken.md`, `candidates/awaken-leftovers.md` |

**Kapsam satırı:**  
`Awaken · default · Awaken / schema_name Awaken 1.0.0 / theme_store_id null · home→PDP The Devil’s Kiss Size 30→50ml (375)→PLP for-women→/collections→search amber→cart empty/filled/plus qty→about-us→contact-us→news+velvet-amber→404 · 32 obs · 106 PNG · 0 yeni şema · leftover: candidates/awaken-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / IWT / parallax products / quotes / scroll collection / hotspot / collection cards / countdown / footer | roster + capture | [x] (geç 1440 karelerde 20% popup) |
| Header kapalı + Shop mega 1440 | interact | [x] tık (hover değil) |
| Predictive search `amber` | interact | [x] yalnız 1440 · 375/768 missing |
| Mobile hamburger 375 | interact | [x] 0 PNG (2 deneme) · 768/1440 hamburger yok |
| Cart drawer empty + filled + qty | interact | [x] empty yalnız 375 · qty fill toplamı güncellemedi |
| PDP The Devil’s Kiss Size 30ml→50ml | interact | [x] 375 $259 · 768/1440 kare 30ml |
| PLP `/collections/for-women` | roster + capture | [x] (1440 popup) |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=amber` | roster + capture | [x] 2 results |
| Cart `/cart` empty + filled + qty | interact | [x] plus → $478 |
| About `/pages/about-us` (`/pages/about` 404) | roster + capture | [x] (1440 popup) |
| Contact `/pages/contact-us` (submit yok) | roster + capture | [x] (1440 popup) |
| Blog `/blogs/news` + velvet-amber post | roster + capture | [x] (list 1440 popup) |
| 404 | roster + capture | [x] (popup) |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Awaken / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header (0px wrapper; `.xo-header-base` 224px) | `navigation-header-mega` | reuse · interact · announcement içeride |
| 2 | main-predictive-search | `global-predictive-search` | reuse · interact 1440 |
| 3 | mega_menu_AApBnx / mega_menu_gczKaP | — | leftover TEMPLATE 0px |
| 4 | section_HXyVmq | `hero-slideshow` | reuse · video + 01–04 |
| 5 | section_b6rRn9 | `editorial-image-with-text` | reuse |
| 6 | banner_parallax_1_LcTr7p | `product-showcase-grid-featured` | reuse |
| 7 | section_tqibEK | `testimonial-quote-carousel` | reuse |
| 8 | collection_scroll_8F9xQi | `product-showcase-grid-featured.2` | reuse · 1440 popup |
| 9 | section_banner_hot_spot_1 | `media-lookbook-banner` | reuse · 1440 popup |
| 10 | section_Uy4FBB | `collection-nav-image-cards` | reuse · 1440 popup |
| 11 | section_6bJ6aG | `promo-banner-countdown` | reuse |
| 12 | section_ThWJAB | `footer-columns-newsletter` | reuse · submit yok · 1440 popup |
| 13 | cart / #xo-cart-mini | `global-cart-drawer` | reuse · interact |
| 14 | header-drawer hamburger | `global-menu-drawer` | reuse · 375 0 PNG |
| 15 | quick-view | — | leftover |
| 16 | popup_promo | — | leftover timed / PII |
| 17 | floating-sidebar | — | leftover |
| 18 | mobile-tab-navigator | — | leftover · account |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop **tık** — Shop all + 6 koleksiyon + görsel (hover değil) |
| global-predictive-search | input | [x] 1440 `amber` alan + popular/trending · 375/768 missing |
| global-menu-drawer | open | [x] 0 PNG · 2 deneme zero-size · 768/1440 hamburger yok |
| global-cart-drawer | filled + changed | [x] Kiss $239 qty1 · qty fill 2 / subtotal $239 · empty yalnız 375 |
| cart-page-main | filled + changed | [x] empty temiz · qty1 $239 · plus qty2 **$478** |
| product-info-main | changed | [x] 375 50ml **$259** · 768/1440 resmi kare 30ml $239 |

---

## Aday / leftover

[`candidates/awaken-leftovers.md`](../candidates/awaken-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
