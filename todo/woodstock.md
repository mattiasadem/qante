# Todo — Woodstock (Boostheme, paid) · Light

*Kaynak:* https://woodstock-theme-light.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/woodstock  
*Preset:* `default` (Light) · *Slug:* `woodstock`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Woodstock-Shopify-theme/electronics**  
`schema_name` = **Woodstock** · `schema_version` = **3.3.0** · `role` = **main** · theme id `155629781293`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `woodstock-theme-light.myshopify.com`

**Beklenen vs canlı:** Theme Store listing Boostheme Woodstock. Canlı Light demo **Woodstock 3.3.0** ve `theme_store_id` **null**. null yazıldı.

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/172 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/woodstock/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **48** |
| PNG | **199** |
| Parallel | yalnız `observations/woodstock/`, `evidence/woodstock/`, `todo/woodstock.md`, `candidates/woodstock-leftovers.md` |

**Kapsam satırı:**  
`Woodstock · default (Light) · Woodstock-Shopify-theme/electronics · schema_name Woodstock 3.3.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 48 obs · 199 PNG · 0 yeni şema · leftover: candidates/woodstock-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega Stores 1440 | interact | [x] |
| Predictive search `watch` | interact 3vp | [x] |
| Mobile menu 375 + 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Watch I7 black→gym red | interact 3vp | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=watch` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` (`/pages/about` 404) | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Woodstock / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `.header-top` | `promo-announcement-bar` | reuse |
| 2 | `sticky-header` | `navigation-header-mega` | reuse + mega hover |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | collections | `collection-nav-image-cards` | reuse |
| 5 | featured products | `product-showcase-grid-featured` | reuse |
| 6 | top cellphones | `product-showcase-grid-featured.2` | reuse |
| 7 | promotion_cards_pinning | `promo-grid-banner` | reuse · pin leftover |
| 8 | top computers | `product-showcase-grid-featured.3` | reuse |
| 9 | lookbook | `media-lookbook-banner` | reuse + hotspot hover |
| 10 | scrolling-text | `promo-scrolling-marquee` | reuse |
| 11 | text-icons | `features-multicolumn` | reuse |
| 12 | splash_featured_product | `product-showcase-featured` | reuse |
| 13 | testimonials | `testimonial-quote-carousel` | reuse |
| 14 | blog-posts | `blog-list-main` | reuse |
| 15 | rich_collapsible_content | `faq-collapsible-tabs` | reuse |
| 16 | shoppable_reels | `media-shop-the-feed` | reuse |
| 17 | spacer 40px | — | leftover |
| 18 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 19 | footer | `footer-columns-newsletter` | reuse + 375 accordion |
| 20 | cookies / email-signup | — | leftover 0px / PII |
| 21 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 22 | predictive-search | `global-predictive-search` | reuse · interact |
| 23 | header-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–48 | reuse set | walk | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Stores — Shop / Featured / Bestseller + NexaTime Alpha Sync From $800 |
| global-predictive-search | input | [x] 3vp `watch` — Tweed $625k / Generation I $43.8k / BX4 + Watch Generation 40 |
| global-menu-drawer | open | [x] 375 + 768 hamburger |
| global-cart-drawer | filled + changed | [x] $249 qty1 → $498 qty2 (375 input fill) |
| cart-page-main | filled + changed | [x] $249 qty1 → $498 qty2 (375 input fill) |
| product-info-main | changed | [x] black 98 stok SKU SACWN58-M1 → gym red Sold out SKU SACwNSB-M3 |
| faq-collapsible-tabs | changed | [x] 3vp Return policies açık; ilk kutu da açık |
| testimonial-quote-carousel | changed | [x] 3vp Michael → Anna Thompson |
| media-shop-the-feed | changed | [x] 3vp Phone Generation 3 → Camera 360 (375 drag) |
| lead-capture-newsletter-band | initial | [x] 3vp Email boş; Subscribe yok |
| footer-columns-newsletter | initial + changed | [x] 3vp kolonlar; 375 Company accordion |
| lead-capture-form | initial + changed | [x] 3vp Regarding Returns → Shipping; PII boş |
| media-lookbook-banner | open | [x] 768/1440 Watch Generation B1 kart; 375 pin (kart overflow) |

---

## Aday / leftover

[`candidates/woodstock-leftovers.md`](../candidates/woodstock-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 126 PNG
- [x] Interact mega / search / cart / menu / PDP Color — 36 PNG
- [x] CRO leftover interact (FAQ / testi / reels / forms / lookbook / footer) — 37 PNG
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
