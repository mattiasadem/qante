# Todo — Amberjack (amberjack.shop)

*Kaynak:* https://amberjack.shop · *Preset:* `default`  
*Tema (storefront):* **amberjack-theme/main** · `schema_name`: Themekit template theme · `theme_store_id`: null (custom)

**Durum:** Mod A walk + resmi 3vp + pixel-change interact tamam  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/amberjack/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/amberjack/`, `evidence/amberjack/`, `todo/amberjack.md`, `candidates/amberjack-*.md` |

**Kapsam satırı:**  
`Amberjack · default · amberjack-theme/main · home→PDP→PLP→search→cart→content→footer→mobile · 37 obs · 0 yeni şema · custom Shopify + UpCart/Klaviyo/Judge.me/Replo · leftover: 404/LPs/reviews widget`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | ✅ obs | ✅ |
| Mega / cart drawer / mobile menu | ✅ obs + interact | ✅ mega click 1440 · cart empty+filled · menu 375/768 (1440 N/A) |
| PDP `/products/the-court-ivory` | ✅ + Sizing Guidance | ✅ |
| PLP `/collections/all` | ✅ + Dress Shoes chip (label) | ✅ |
| Wide `/collections/wide-dress-shoes` | ✅ grid + FAQ accordion | ✅ |
| Search `/search?q=court` | ✅ 6 sonuç | ✅ |
| Cart `/cart` native + UpCart drawer | ✅ | ✅ |
| FAQ `/pages/faq` static | ✅ | ✅ |
| Our Story | ✅ | ✅ |
| Shoe Guide (Replo) | ✅ | ✅ |
| Privacy / Terms / Returns | ✅ | ✅ |
| Featured Press | ✅ 3 blok | ✅ |
| Store locator | ✅ + aday | ✅ |
| SMS subscribe | ✅ doldurulmadı | ✅ |
| Blog list + article | ✅ | ✅ |
| Contact / 404 | ⛔ home'a düşer | — |
| Header search / predictive | ⛔ yok | — |
| Judge.me reviews widget | ⛔ aday | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | [x] | [x] |
| 3 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 5 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 6 | media-lookbook-banner | home | [x] | [x] | [x] | [x] |
| 7 | collection-nav-image-cards | home | [x] | [x] | [x] | [x] |
| 8 | media-shop-the-feed | home | [x] | [x] | [x] | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 10 | global-cart-drawer | home | [x] | [x] | [x] | [x] |
| 11 | global-menu-drawer | home | [x] | [x] | [x] | [x] |
| 12 | product-info-main | product-detail | [x] | [x] | [x] | [x] |
| 13 | media-lookbook-banner | product-detail | [x] | [x] | [x] | [x] |
| 14 | testimonial-quote-carousel | product-detail | [x] | [x] | [x] | [x] |
| 15 | promo-scrolling-marquee | product-detail | [x] | [x] | [x] | [x] |
| 16 | editorial-image-with-text | product-detail | [x] | [x] | [x] | [x] |
| 17 | editorial-dynamic-grid | product-detail | [x] | [x] | [x] | [x] |
| 18 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] |
| 19 | media-shop-the-feed | product-detail | [x] | [x] | [x] | [x] |
| 20 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 21 | product-showcase-grid-plp | collection-wide | [x] | [x] | [x] | [x] |
| 22 | faq-collapsible-tabs | collection-wide | [x] | [x] | [x] | [x] |
| 23 | search-results | search | [x] | [x] | [x] | [x] |
| 24 | cart-page-main | cart | [x] | [x] | [x] | [x] |
| 25 | page-content-main | faq-support | [x] | [x] | [x] | [x] |
| 26 | editorial-rich-text | about-brand | [x] | [x] | [x] | [x] |
| 27 | editorial-custom-content | shoe-guide | [x] | [x] | [x] | [x] |
| 28 | page-content-main | policy | [x] | [x] | [x] | [x] |
| 29 | page-content-main | terms | [x] | [x] | [x] | [x] |
| 30 | page-content-main | returns | [x] | [x] | [x] | [x] |
| 31–33 | featured-press (3) | featured-press | [x] | [x] | [x] | [x] |
| 34 | page-content-main | store-locator | [x] | [x] | [x] | [x] |
| 35 | lead-capture-form | subscribe | [x] | [x] | [x] | [x] |
| 36 | blog-list-main | blog-list | [x] | [x] | [x] | [x] |
| 37 | blog-post-main | blog-post | [x] | [x] | [x] | [x] |

---

## Interact (piksel değişince — resmi script)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial, open | 1440 `.shop-button` **click** (hover piksel değiştirmedi) → Dress/Sneakers/Loafers/Boots + ON SALE / ACCESSORIES / WIDE SIZES |
| global-menu-drawer | open | 375/768 `.mobile-open` · 1440 N/A (zero-size) |
| global-cart-drawer | initial, filled | Boş UpCart + The Court Ivory Size 10 qty1 (addToCart via ui; drawer otomatik) |
| media-lookbook-banner (home) | initial, changed | Hotspot 2 All-Day Arch Support + sarı taban |
| product-info-main | initial, changed | Sizing Guidance açık (Details statikte zaten açık) |
| product-showcase-grid-plp | initial, changed | Dress Shoes **label** chip → 8 Items |
| faq-collapsible-tabs | initial, changed | `.faq-block__question` → ilk cevap + minus |

---

## Aday / leftover

[`candidates/amberjack-leftovers.md`](../candidates/amberjack-leftovers.md)

- amberjack-404-home
- amberjack-judgeme-reviews
- amberjack-store-locator-map
- amberjack-replo-landing
- amberjack-sms-subscribe-pages

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (menu drawer 1440 N/A)
- [x] Overlay / accordion / tab / hotspot interact
- [x] Cart filled (beden 10 + ATC via ui)
- [ ] Judge.me / Replo LP / 404 (aday — şema yok)
