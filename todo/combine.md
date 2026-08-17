# Todo — Combine (Krown Themes · paid · bundles)

*Kaynak (görev URL):* https://combine-theme.myshopify.com/ — **eski Lift “combine-round-2”** (schema_name null · theme_store_id null). Krown değil.  
*Walk URL (Krown resmi demo):* https://combine-theme-main.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/combine  
*Tema (storefront, uydurulmadı):* **combine-build/home** · `schema_name`: **Combine** · `schema_version`: **4.0.0** · `theme_store_id`: **null** · role `main` · id `159816614121`  
*Shop:* `bundle-theme-demo.myshopify.com` (host `combine-theme-main.myshopify.com`)

**Durum:** Mod A walk + resmi 3vp + interact (yazılıyor)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/combine/default/` |
| Observation | **39** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/combine/`, `evidence/combine/`, `todo/combine.md`, `candidates/combine-*.md` |

**Kapsam satırı:**  
`Combine · default · combine-build/home / schema_name Combine 4.0.0 (theme_store_id null) · home→PDP→PLP→collections→search→cart→Our Story→contact→News→404 + Build Your Set + lookbook · 39 obs · 0 yeni şema · leftover: candidates/combine-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + slideshow / sets / kit cards / collections / IWT / set-of-3 / marquee / bundler / footer | [ ] | [ ] |
| Header kapalı + Shop mega 1440 | [ ] | [ ] |
| Predictive search `carafe` | [ ] | [ ] |
| Cart drawer empty + filled + qty | [ ] | [ ] |
| Mobile hamburger 375+768 | [ ] | [ ] |
| PDP Carafe 1.2Ltr Color Clear → Amber + sticky ATC | [ ] | [ ] |
| PLP `/collections/all` | [ ] | [ ] |
| Collections index `/collections` | [ ] | [ ] |
| Search `/search?q=bundle` | [ ] | [ ] |
| Cart `/cart` empty + filled + qty | [ ] | [ ] |
| About `/pages/our-story` (`/pages/about` 404) | [ ] | [ ] |
| Contact form (submit yok) | [ ] | [ ] |
| News blog (boş) | [ ] | [ ] |
| 404 | [ ] | [ ] |
| Build Your Set bundle builder | [ ] | [ ] |
| Lookbook | [ ] | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Krown / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement | `promo-announcement-bar` | reuse · home 0px → kare `/collections/all` |
| 2 | header `#site-header` | `navigation-header-mega` | reuse · Shop mega |
| 3 | flex_slideshow Planters | `hero-slideshow` | reuse |
| 4 | Sets & Bundles | `product-showcase-grid-featured` | reuse |
| 5 | Kit Up & Save flex_cards | `promo-grid-banner` | reuse |
| 6 | collection_list | `collection-nav-image-cards` | reuse |
| 7 | Simple & Decidedly Modern | `editorial-image-with-text` | reuse |
| 8 | Buy set of 3 mount-product-bundler | `commerce-tools-products-bundle` | reuse |
| 9 | Whirlpool slideshow | `hero-slideshow.2` | reuse |
| 10 | Create your set flex_grid | `editorial-image-with-text-overlay` | reuse |
| 11 | Mix Match Save | `promo-scrolling-marquee` | reuse |
| 12 | Add to bundle grid | `commerce-tools-products-bundle.2` | reuse |
| 13 | Crafted Glass Vases | `editorial-highlight-text-image` | reuse |
| 14 | Inspiration | `media-mosaic-grid` | reuse |
| 15 | Home accessories IWT | `editorial-image-with-text.2` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 17 | site-menu-sidebar | `global-menu-drawer` | reuse |
| 18 | site-search-sidebar | `global-predictive-search` | reuse |
| 19 | site-cart-sidebar | `global-cart-drawer` | reuse |
| — | empty / popups / age / exit-intent | — | leftover |

---

## Interact (yazılacak)

- Header 1440 Shop hover mega
- Hamburger 375/768
- Predictive `carafe`
- Cart drawer empty / Carafe qty / +
- Cart page empty / filled / qty
- PDP Color Amber + sticky ATC
- Build Your Set Add to bundle

---

## Aday / leftover

[`candidates/combine-leftovers.md`](../candidates/combine-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP / bundle / sticky ATC
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
