# Todo — Maker (Shopify paid / Theme Store official demo)

*Kaynak:* https://maker-theme-food.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/maker  
*Preset:* `default` (Food)  
*Slug:* `maker`

**Tema (storefront, uydurulmadı):**  
`Shopify.theme` = `{"name":"Maker - current","id":74552705096,"schema_name":"Maker","schema_version":"5.2.0","theme_store_id":null,"role":"main"}`  
`Shopify.shop` = `maker-theme-food.myshopify.com`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
Title: Maker Shopify Theme - Food Preset · currency CAD

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/202 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/maker/default/` |
| Observation | **22** |
| Evidence PNG | **82** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/maker/`, `evidence/maker/`, `todo/maker.md`, `candidates/maker-leftovers.md` |

**Kapsam satırı:**  
`Maker · default (Food) · Maker - current / schema_name Maker 5.2.0 / theme_store_id null · home→PDP Empress BOX Mixed→Green Goddess→PLP juices→/collections→search empress→cart empty/filled/qty→about→contact frontpage→blog+article→404 · 22 obs · 82 PNG · 0 yeni şema · leftover: map / no-mega / newsletter-popup / search overlay / FAQ 404 / 375 empty drawer`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Header kapalı (mega yok) | [x] obs | [x] interact |
| Predictive search `empress` | [x] obs | [x] interact 3vp · kart yok |
| Mobile hamburger 375+768 | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] empty 768/1440 · filled/qty 3vp · 375 empty leftover |
| PDP Empress BOX Mixed→Green Goddess | [x] obs | [x] interact |
| PLP `/collections/empress-juice-collection` | [x] obs | [x] capture |
| Collections index `/collections` | [x] obs | [x] capture |
| Search `/search?q=empress` | [x] obs | [x] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [x] interact 3vp |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact `/pages/frontpage` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | 404 leftover | — |
| Blog `/blogs/news` + Jamie Dunn article | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Maker / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega **yok** |
| 3 | 1520359927131 featured-content | `editorial-image-with-text-overlay` | reuse · hero |
| 4 | 1558537947647 featured-product | `product-showcase-featured` | reuse |
| 5 | 1520360055050 featured-content | `editorial-image-with-text` | reuse · text left |
| 6 | 1558537159265 featured-blog | `blog-list-main` | reuse |
| 7 | 1522330492385 featured-content | `editorial-image-with-text.2` | reuse · text right |
| 8 | 1520360150159 map | — | leftover |
| 9 | footer | `footer-columns-newsletter` | reuse · ince |
| 10 | .cart--root | `global-cart-drawer` | reuse · interact |
| 11 | .search--root modal | `global-predictive-search` | reuse · overlay, kart yok |
| 12 | .mobile-nav | `global-menu-drawer` | reuse · 375/768 |
| 13 | .popup--root | — | leftover PII |

---

## Interact (pixel-checked)

- Header 1440: mega yok — HOME JUICES BOXES ABOUT BLOG düz link
- Hamburger 375/768: sol drawer SEARCH/ACCOUNT + nav + Email/ENTER (submit yok)
- Search overlay `empress`: 3vp yalnız yazı + X, ürün kartı yok
- Cart drawer: empty 768/1440; filled qty1 $80 + changed qty2 $160 3vp. 375 empty leftover
- Cart page: empty → qty1 $80 CART(1) → qty2 $160 CART(2) 3vp
- PDP BOX Mixed Box 5-Pack (kutu görseli) → Green Goddess 5-Pack (yeşil şişeler), $80 aynı

Stop: email, account, checkout, newsletter ENTER, contact SEND, PII

---

## Aday / leftover

[`candidates/maker-leftovers.md`](../candidates/maker-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP BOX
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
