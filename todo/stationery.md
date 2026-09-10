# Todo — Stationery (Speedo Themes) · default

*Kaynak:* https://book-online-store-2.myshopify.com/  
*Preset:* `default` · *Slug:* `stationery`  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/stationery-office-supplies-stationery-store-shopify-2-0-theme  

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Stationary & Office Supplies  V-1.5.0**  
`schema_name` = **Stationary Supplies** · `schema_version` = **1.5.0** · `role` = **main** · theme id `131641770078`  
`theme_store_id` = **null** (üçüncü taraf Speedo; Theme Store resmi değil)  
shop `book-online-store-2.myshopify.com` · locale `en`  

**Storefront unlock:** `/` **302** → `/password`. Vendor ürün sayfasında yayınlanan demo şifre `1` — bu hostta girildi. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stationery/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` · observation `storefrontPassword: "1"` |
| Şema | **0 yeni · 0 güncelleme** — mevcut tiplere observation + delta |
| Parallel | `observations/stationery/` · `evidence/stationery/` · `todo/stationery.md` · `candidates/stationery-leftovers.md` |

**Kapsam satırı:**  
`Stationery · default · Stationary & Office Supplies V-1.5.0 / schema_name Stationary Supplies 1.5.0 · theme_store_id null · Speedo third-party · password 1 · home→PDP→PLP→collection-list→search→cart→blog→about→contact→FAQ→404 · 39 obs · 117 static PNG · 0 yeni şema · leftover: candidates/stationery-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | [x] obs | [x] |
| Cart drawer empty | [x] obs | [x] |
| Predictive search | [x] obs | [x] static kapalı |
| Menu drawer (hamburger) | [x] obs | [x] 375 açık |
| PDP `/products/green-plain-book-cover` | [x] obs | [x] |
| PLP `/collections/all` | [x] obs | [x] |
| Collection index `/collections` | [x] obs | [x] |
| Search `/search?q=pen` | [x] obs | [x] |
| Cart `/cart` empty | [x] obs | [x] |
| Blog list `/blogs/news` | [x] obs | [x] |
| Blog post office-stationery-organization | [x] obs | [x] |
| About `/pages/about-layout-1` | [x] obs | [x] |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] |
| FAQ `/pages/faq` | [x] obs | [x] |
| 404 unknown page | [x] obs | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM → QANTE)

| # | Stationery section | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header | `navigation-header-mega` | reuse · SHOP/THEMES/SHOP BY/COLLECTIONS mega |
| 2 | slideshow | `hero-slideshow` | reuse |
| 3 | categories_slider_CNxecV | `collection-nav-slider` | reuse |
| 4 | featured-product-section Best Seller | `product-showcase-grid-featured` | reuse · ızgara, tek ürün değil |
| 5 | deal_image_banner | `promo-banner-countdown` | reuse |
| 6 | sub_banner | `promo-grid-banner` | reuse · 2 kutu |
| 7 | image_with_text | `editorial-image-with-text` | reuse |
| 8 | lookbook_card_slider | `media-lookbook-slider` | reuse · kart rayı, pin yok |
| 9 | testimonial | `testimonial-quote-carousel` | reuse |
| 10 | Latest Blog | `blog-list-main` | reuse |
| 11 | brand_logo | `social-proof-brand-logos` | reuse |
| 12 | footer | `footer-columns-newsletter` | reuse |
| 13 | cart-drawer | `global-cart-drawer` | reuse |
| 14 | details-modal.header__search | `global-predictive-search` | reuse |
| 15 | #menu-drawer | `global-menu-drawer` | reuse |
| — | announcement-bar | — | home'da yok |
| — | newsletter-popup | — | leftover h=0 |

---

## Interact

| Component | States | Durum |
|---|---|---|
| Header mega SHOP 1440 | open | [ ] |
| Menu drawer 375/768 | open | [ ] |
| Predictive search `pencil` | input | [ ] |
| Cart drawer empty → filled + qty | filled / changed | [ ] |
| Cart page filled | filled / changed | [ ] |
| PDP qty / variant | changed | [ ] |
| FAQ accordion | changed | [ ] |
| Product card hover | hover | [ ] |

---

## Aday / leftover

[`candidates/stationery-leftovers.md`](../candidates/stationery-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 39/39 · 117 PNG
- [ ] Official interact (`capture-interaction.mjs`)
- [ ] `node scripts/validate-schemas.mjs`
