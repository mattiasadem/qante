# Todo — Rise (Shopify first-party · free)

*Kaynak:* https://theme-rise-demo.myshopify.com  
*Walk locale:* `/en` (hreflang en; default `/` = ja)  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/rise  
*Tema (storefront, uydurulmadı):* **rise/rise/demo-store** · `schema_name`: **Rise** · `schema_version`: **1.0.0** · `theme_store_id`: **null** · role `main` · id `163183165462`  
*Shop:* `a7c44a-4.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/266 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/rise/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **24** (CRO interact: 4 dosya güncellendi) |
| Evidence PNG | **102** |
| Parallel | yalnız `observations/rise/`, `evidence/rise/`, `todo/rise.md`, `candidates/rise-leftovers.md` |

**Kapsam satırı:**  
`Rise · default · rise/rise/demo-store / schema_name Rise 1.0.0 (theme_store_id null) · /en home→PDP→PLP→collections index→search→cart→contact→blog→404 · 24 obs · 102 PNG · 0 yeni şema · CRO interact: slideshow/FAQ/form/footer · leftover: mega yok / about+policy 404 / cart-notification / footer newsletter yok / CRO tipleri yok`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/slideshow/featured/IWT/collections/banner/blog/footer | [x] obs | [x] capture |
| Hero slideshow Essentials → Hot summer sale | [x] obs | [x] interact 375/768/1440 |
| Footer newsletter yok (dil açılmadı) | [x] obs | [x] interact `initial` |
| Header kapalı + Catalog hover 1440 (mega yok) | [x] obs | [x] interact |
| Predictive search `hoodie` | [x] obs | [x] interact 375/768/1440 |
| Mobile hamburger 375+768 | [x] obs | [x] interact (1440 0px leftover) |
| Cart notification filled (empty/qty yok) | [x] obs | [x] interact |
| PDP Terrycloth shorts Color Sand→White | [x] obs | [x] interact |
| PDP FAQ washing → dryer | [x] obs | [x] interact 375/768/1440 |
| PLP `/en/collections/all` | [x] obs | [x] capture |
| Collections index `/en/collections` | [x] obs | [x] capture |
| Search `/en/search?q=hoodie` | [x] obs | [x] capture |
| Cart `/en/cart` empty + filled + qty | [x] obs | [x] interact ¥3990→¥7980 |
| Contact form (submit yok) | [x] obs | [x] interact `initial` (PII) |
| About `/en/pages/about` | ⛔ 404 leftover | — |
| Blog list `ニュース` + organic cotton post | [x] obs | [x] capture |
| Privacy policy | ⛔ 404 leftover | — |
| 404 leftover | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Rise / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok · delta |
| 3 | hero-slideshow | `hero-slideshow` | reuse · ok + 4 nokta |
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

- Header 1440 Catalog hover — Catalog altı çizili; mega/kolon/promo yok
- Hamburger 375/768: Catalog + Blog + Contact + English; accordion yok
- Predictive `hoodie`: SUGGESTIONS + 5 hoodie + Search for hoodie
- Cart notification: White hoodie XS · View cart (1) · Check out (tıklanmadı)
- Cart page: empty → qty 1 ¥3,990 → qty 2 ¥7,980
- PDP Color: Sand (bej şort) → White (beyaz şort)
- Hero nokta 1 Essentials → nokta 3 Hot summer sale (3 slayt)
- FAQ washing açık → dryer açık (birincisi kapanmadı)
- Contact form yalnız `initial` (PII)
- Footer `initial` — newsletter yok; dil açılmadı

---

## Aday / leftover

[`candidates/rise-leftovers.md`](../candidates/rise-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP Color
- [x] CRO leftover interact: hero-slideshow / faq-collapsible-tabs / lead-capture-form / footer-columns-newsletter
- [x] PNG bak → stateFindings
- [x] `npm run validate`
