# Todo — Rise (Shopify first-party · free)

*Kaynak:* https://theme-rise-demo.myshopify.com  
*Walk locale:* `/en` (hreflang en; default `/` = ja)  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/rise  
*Tema (storefront, uydurulmadı):* **rise/rise/demo-store** · `schema_name`: **Rise** · `schema_version`: **1.0.0** · `theme_store_id`: **null** · role `main` · id `163183165462`  
*Shop:* `a7c44a-4.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate — devam  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/rise/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **24** |
| Parallel | yalnız `observations/rise/`, `evidence/rise/`, `todo/rise.md`, `candidates/rise-leftovers.md` |

**Kapsam satırı:**  
`Rise · default · rise/rise/demo-store / schema_name Rise 1.0.0 (theme_store_id null) · /en home→PDP→PLP→collections index→search→cart→contact→blog→404 · 0 yeni şema · leftover: mega yok / about 404 / cart-notification / footer newsletter yok`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/slideshow/featured/IWT/collections/banner/blog/footer | [x] obs | [ ] capture |
| Header kapalı + Catalog hover 1440 (mega yok) | [x] obs | [ ] interact |
| Predictive search `hoodie` | [x] obs | [ ] interact 375/768/1440 |
| Mobile hamburger 375+768 | [x] obs | [ ] interact (1440 0px leftover) |
| Cart notification filled (empty/qty yok) | [x] obs | [ ] interact |
| PDP Terrycloth shorts Color Sand→White | [x] obs | [ ] interact |
| PLP `/en/collections/all` | [x] obs | [ ] capture |
| Collections index `/en/collections` | [x] obs | [ ] capture |
| Search `/en/search?q=hoodie` | [x] obs | [ ] capture |
| Cart `/en/cart` empty + filled + qty | [x] obs | [ ] interact |
| Contact form (submit yok) | [x] obs | [ ] capture |
| About `/en/pages/about` | ⛔ 404 leftover | — |
| Blog list `ニュース` + organic cotton post | [x] obs | [ ] capture |
| Privacy policy | ⛔ 404 leftover | — |
| 404 leftover | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Rise / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok · delta |
| 3 | hero-slideshow | `hero-slideshow` | reuse · 3 slayt |
| 4 | all-products | `product-showcase-grid-featured` | reuse |
| 5 | image_with_text_EeHHBp | `editorial-image-with-text` | reuse |
| 6 | collection-list | `collection-nav-image-cards` | reuse |
| 7 | image-banner | `editorial-image-with-text-overlay` | reuse · metin boş |
| 8 | featured_blog_RyDrbN | `blog-list-main` | reuse |
| 9 | footer | `footer-columns-newsletter` | reuse · newsletter yok |
| 10 | header-drawer | `global-menu-drawer` | reuse · 375/768 |
| 11 | details-modal.header__search | `global-predictive-search` | reuse |
| 12 | #cart-notification | `global-cart-drawer` | reuse · drawer yok |

---

## Interact (pixel-check)

- Header 1440 Catalog hover — mega yok (dürüst leftover)
- Hamburger 375/768: Catalog + Blog + Contact + Language — accordion yok
- Predictive `hoodie` — ürün önerisi beklenir
- Cart notification: White hoodie ATC → Item added (qty yok)
- Cart page: empty → White hoodie qty 1 → qty 2
- PDP Color: Sand → White

---

## Aday / leftover

[`candidates/rise-leftovers.md`](../candidates/rise-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
