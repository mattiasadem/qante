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

**Durum:** Mod A roster yazıldı — capture + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/awaken/default/` |
| Observation | **32** (pre-capture) |
| Evidence PNG | — (capture sırada) |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/awaken/`, `evidence/awaken/`, `todo/awaken.md`, `candidates/awaken-leftovers.md` |

**Kapsam satırı:**  
`Awaken · default · Awaken / schema_name Awaken 1.0.0 / theme_store_id null · home→PDP The Devil’s Kiss Size 30→50ml→PLP for-women→/collections→search amber→cart empty/filled/qty→about-us→contact-us→news+velvet-amber→404 · 32 obs · PNG TBD · 0 yeni şema · leftover: candidates/awaken-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / IWT / parallax products / quotes / scroll collection / hotspot / collection cards / countdown / footer | roster | [ ] capture |
| Header kapalı + Shop mega 1440 | roster | [ ] interact |
| Predictive search `amber` | roster | [ ] interact 375/768/1440 |
| Mobile hamburger 375+768 | roster | [ ] interact (1440 0px leftover) |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP The Devil’s Kiss Size 30ml→50ml | roster | [ ] interact |
| PLP `/collections/for-women` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=amber` | roster | [ ] capture |
| Cart `/cart` empty + filled + qty | roster | [ ] interact |
| About `/pages/about-us` (`/pages/about` 404) | roster | [ ] capture |
| Contact `/pages/contact-us` (submit yok) | roster | [ ] capture |
| Blog `/blogs/news` + velvet-amber post | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Awaken / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header (0px wrapper; `.xo-header-base` 224px) | `navigation-header-mega` | reuse · interact · announcement içeride |
| 2 | main-predictive-search | `global-predictive-search` | reuse · interact |
| 3 | mega_menu_AApBnx / mega_menu_gczKaP | — | leftover TEMPLATE 0px |
| 4 | section_HXyVmq | `hero-slideshow` | reuse · video + 01–04 |
| 5 | section_b6rRn9 | `editorial-image-with-text` | reuse |
| 6 | banner_parallax_1_LcTr7p | `product-showcase-grid-featured` | reuse |
| 7 | section_tqibEK | `testimonial-quote-carousel` | reuse |
| 8 | collection_scroll_8F9xQi | `product-showcase-grid-featured.2` | reuse |
| 9 | section_banner_hot_spot_1 | `media-lookbook-banner` | reuse |
| 10 | section_Uy4FBB | `collection-nav-image-cards` | reuse |
| 11 | section_6bJ6aG | `promo-banner-countdown` | reuse |
| 12 | section_ThWJAB | `footer-columns-newsletter` | reuse · submit yok |
| 13 | cart / #xo-cart-mini | `global-cart-drawer` | reuse · interact |
| 14 | header-drawer hamburger | `global-menu-drawer` | reuse · 375/768 |
| 15 | quick-view | — | leftover |
| 16 | popup_promo | — | leftover 0px / PII |
| 17 | floating-sidebar | — | leftover |
| 18 | mobile-tab-navigator | — | leftover · account |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop hover |
| global-predictive-search | input | [ ] 3vp `amber` |
| global-menu-drawer | open/changed | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] empty / Kiss qty |
| cart-page-main | filled + changed | [ ] empty → qty1 → qty2 |
| product-info-main | changed | [ ] 30ml $239 → 50ml $259 |

---

## Aday / leftover

[`candidates/awaken-leftovers.md`](../candidates/awaken-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
