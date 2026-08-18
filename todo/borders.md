# Todo — Borders (Shopify paid) · Raw

*Kaynak (resmi walk URL):* https://borders-theme-raw.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/borders  
*Preset klasör:* `default` (Raw)  
*Slug:* `borders`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **raw-build/raw**  
`schema_name` = **Borders** · `schema_version` = **2.2.0** · `role` = **main** · theme id `151504519457`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `borders-theme-raw.myshopify.com`  
Canlı host: `borders-theme-raw.myshopify.com` → **301** → `borders-theme-main.myshopify.com` (aynı mağaza, aynı theme JSON).  
locale `en` · country `US` · currency `USD`

**Durum:** Mod A walk + resmi 3vp + interact — **çekim devam**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/borders/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| PNG | *(çekim sonrası)* |
| Parallel | yalnız `observations/borders/`, `evidence/borders/`, `todo/borders.md`, `candidates/borders-leftovers.md` |

**Kapsam satırı:**  
`Borders · default (Raw) · raw-build/raw · schema_name Borders 2.2.0 · theme_store_id null · Shopify.shop borders-theme-raw.myshopify.com · host 301→borders-theme-main · home→PDP utility-overshirt Color Sandy Brown→Dark Olive→PLP knitwear→/collections→search shirt 21→cart empty/filled/qty→about-us (about 404)→contact→faq 404→news+cute-embroidery-styles→404 · 38 obs · 0 yeni şema · leftover: candidates/borders-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | roster yazıldı | çekim |
| Mega Shop 1440 | interact yazıldı | çekim |
| Predictive search `shirt` | interact yazıldı | çekim |
| Mobile hamburger 375 + 768 | interact yazıldı | çekim |
| Cart drawer empty + filled + qty | interact yazıldı | çekim |
| PDP Utility Overshirt Sandy Brown→Dark Olive | interact yazıldı | çekim |
| PLP `/collections/knitwear` | roster yazıldı | çekim |
| Collections index `/collections` | roster yazıldı | çekim |
| Search `/search?q=shirt` | roster yazıldı | çekim |
| Cart page empty + filled + qty | interact yazıldı | çekim |
| About `/pages/about-us` (`/pages/about` 404) | roster yazıldı | çekim |
| Contact form (submit yok) | roster yazıldı | çekim |
| FAQ `/pages/faq` `/pages/faqs` | ⛔ 404 | leftover |
| News + Cute Embroidery Styles | roster yazıldı | çekim |
| 404 leftover | roster yazıldı | çekim |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Borders / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header / `#site-header` | `navigation-header-mega` | reuse · Shop mega 1440 |
| 2 | navigation / `#site-menu-sidebar` | `global-menu-drawer` | reuse · 375/768 |
| 3 | cart / `#site-cart-sidebar` | `global-cart-drawer` | reuse · interact |
| 4 | search / `#site-search-sidebar` | `global-predictive-search` | reuse · shirt |
| 5 | vertical-slider | `hero-slideshow` | reuse · 3 kare |
| 6 | text_columns_images_L6x7mF | `collection-nav-slider` | reuse |
| 7 | rich_text_GqcVFe | `editorial-rich-text` | reuse |
| 8 | FINAL AUTUMN SALE | `promo-scrolling-marquee` | reuse |
| 9 | Featured Products | `product-showcase-grid-featured` | reuse |
| 10 | Explore COLLECTION-LIST | `collection-nav-grid` | reuse |
| 11 | Popular Categories | `collection-nav-image-cards` | reuse |
| 12 | Jutland rich-text | `editorial-rich-text.2` | reuse |
| 13 | On Sale! | `product-showcase-grid-featured.2` | reuse |
| 14 | Fall collection overlay | `editorial-image-with-text-overlay` | reuse |
| 15 | Goes Well Together MIX & MATCH | `media-lookbook-banner` | reuse |
| 16 | What They Say | `testimonial-quote-carousel` | reuse |
| 17 | RAW logo card | — | leftover tek logo |
| 18 | HEY YOU! JOIN US NOW! | `lead-capture-newsletter-band` | reuse · submit yok |
| 19 | Conscious Organization | `features-multicolumn` | reuse |
| 20 | rotating-images | `media-scrolling-gallery` | reuse |
| 21 | buttons_N8pp3j social | — | leftover |
| 22 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 23 | footer-bar | — | leftover copyright |
| 24 | newsletter modal | — | leftover 0px / PII |
| 25 | popovers cookies | — | leftover |
| 26 | rotating-badges | — | leftover 1000px boş |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | çekim — 1440 Shop |
| global-predictive-search | input | çekim — 3vp `shirt` |
| global-menu-drawer | open | çekim — 375 + 768 |
| global-cart-drawer | filled + changed | çekim — $89.95 → qty2 |
| cart-page-main | filled + changed | çekim — $89.95 → qty2 |
| product-info-main | changed | çekim — Sandy Brown → Dark Olive |

---

## Aday / leftover

[`candidates/borders-leftovers.md`](../candidates/borders-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu 375+768 / cart empty+filled+qty / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [x] Newsletter / account / checkout — **yapılmayacak** (PII)
