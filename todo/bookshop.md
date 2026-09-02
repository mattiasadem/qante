# Todo — Bookshop (Speedo Themes) · default

*Kaynak:* https://book-online-store-1.myshopify.com/  
*Preset:* `default` · *Slug:* `bookshop`  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/bookshop-shopify-bookstore-theme-shopify-os-2-0  

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Copy of Bookshop**  
`schema_name` = **Bookshop** · `schema_version` = **1.5.0** · `role` = **main** · theme id `142616952999`  
`theme_store_id` = **null** (üçüncü taraf Speedo; Theme Store resmi değil)  
shop `book-online-store-1.myshopify.com` · locale `en` · currency USD  

**Storefront unlock:** `/password` kapısı var. Vendor ürün sayfasında yayınlanan demo şifre `1` — bu hostta girildi. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bookshop/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` · observation `storefrontPassword: "1"` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | `observations/bookshop/` · `evidence/bookshop/` · `todo/bookshop.md` · `candidates/bookshop-leftovers.md` |

**Kapsam satırı:**  
`Bookshop · default · Copy of Bookshop / schema_name Bookshop 1.5.0 · theme_store_id null · Speedo third-party · password 1 · home→PDP→PLP→collection-list→search→cart→blog→about→contact→FAQ→404 · 39 obs · 0 yeni şema · leftover: candidates/bookshop-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] |
| Cart drawer empty (prepareClick `#cart-icon-bubble`) | roster | [ ] |
| Predictive search opener | roster | [ ] |
| Menu drawer (header `drawer-menu`) | roster | [ ] |
| PDP `/products/cookbook-100-recipes-and-inspiration-for-cooking` | roster | [ ] |
| PLP `/collections/best-sellers` | roster | [ ] |
| Collection index `/collections` | roster | [ ] |
| Search `/search?q=book` | roster | [ ] |
| Cart `/cart` empty | roster | [ ] |
| Blog list `/blogs/news` | roster | [ ] |
| Blog post launching-a-new-collection-this-week | roster | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQ `/pages/faqs` | roster | [ ] |
| 404 `/pages` | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM → QANTE)

| # | Bookshop section | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement ticker | `promo-announcement-bar` | reuse · marquee |
| 2 | header | `navigation-header-mega` | reuse · Shop mega |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | rich_text_4MdrGm | `editorial-rich-text` | reuse |
| 5 | collection_list_EV9TFq | `collection-nav-image-cards` | reuse |
| 6 | sub_banner_RL7NKb | `promo-grid-banner` | reuse |
| 7 | Best Sellers featured | `product-showcase-grid-featured` | reuse |
| 8 | image_banner_a8m8D9 | `editorial-image-with-text-overlay` | reuse |
| 9 | multicolumn_xdrtTX | `features-multicolumn` | reuse |
| 10 | featured_collection_a3Qmdr | `product-showcase-grid-featured.2` | reuse |
| 11 | testimonial_Vdy3fn | `testimonial-quote-carousel` | reuse |
| 12 | ebook banner | `editorial-image-with-text-overlay.2` | reuse |
| 13 | meet_the_team_bm4Pmb | — | leftover author mosaic |
| 14 | latest news | `blog-list-main` | reuse · home featured |
| 15 | multicolumn_wJkcCP | `trust-icon-row` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | newsletter-popup | — | leftover · h=0 social-proof popup |

---

## Interact

| Component | States | Durum |
|---|---|---|
| Header mega Shop 1440 | open | [ ] |
| Menu drawer 375/768 | open | [ ] |
| Predictive search `cookbook` | input | [ ] |
| Cart drawer empty → filled + qty | filled / changed | [ ] |
| Cart page filled | filled | [ ] |
| PDP ATC + qty | filled / changed | [ ] |
| FAQ accordion | changed | [ ] |
| Product card hover | hover | [ ] |

---

## Aday / leftover

[`candidates/bookshop-leftovers.md`](../candidates/bookshop-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Official interact (`capture-interaction.mjs`)
- [ ] `npm run validate` — 0 error
