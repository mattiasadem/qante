# Todo — Eurus (Omni Themes, paid) · Breath

*Kaynak:* https://eurus-breath-demo.myshopify.com/  
*Preset:* `breath` · *Slug:* `eurus`  
*Theme Store:* https://themes.shopify.com/themes/eurus

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = ** Breath 10.1.0** (başta boşluk)  
`schema_name` = **Eurus** · `schema_version` = **10.1.0** · `role` = **main** · id `188138782998`  
`theme_store_id` = **null** (uydurulmadı)

**Durum:** Mod A walk + resmi 3vp + interact **bitti** (CRO interact 2026-08-19) · validator **0 error**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/eurus/breath/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/eurus/`, `evidence/eurus/`, `todo/eurus.md`, `candidates/eurus-*` |

**Kapsam satırı:**  
`Eurus · Breath 10.1.0 · schema_name Eurus · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→FAQ→blog→404 · 57 obs · 0 yeni şema · 3vp+walk+validate bitti · leftover: quiz yok / store locator / cart-footer / 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/slideshow/bundle/footer | [x] roster | [x] |
| Mega Collections 1440 | [x] `#menu-1` Dog/Cat | [x] |
| Predictive search `food` | [x] 3vp Plants/Herbs | [x] |
| Mobile menu 375+768 | [x] modern icon | [x] |
| Cart drawer empty/filled/qty | [x] button-plus 1→2 | [x] |
| Bundle ADD TO BUNDLE | [x] home | [x] |
| Product quiz / finder | ⛔ Breath'te yok | leftover |
| PDP Superfood Weight 300→400 + sticky ATC | [x] | [x] |
| PLP `/collections/dog` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=food` | [x] | [x] |
| Cart page boş + dolu + qty | [x] | [x] |
| About `/pages/our-promises` (`/pages/about` 404) | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| FAQ `/pages/faqs` | [x] | [x] |
| Blog Dog Care + article | [x] | [x] |
| 404 leftover | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ | — |

---

## Bileşen roster

57 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 6–8 | promo-grid-banner ×3 | home | [x] | [x] | reuse | [x] |
| 9 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 10 | commerce-tools-products-bundle | home | [x] | [x] | reuse | [x] |
| 11 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 12 | product-showcase-featured | home | [x] | [x] | reuse | [x] |
| 13 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 14 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 15 | features-multicolumn | home | [x] | [x] | flow | [x] |
| 16 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 17 | media-shop-the-feed | home | [x] | [x] | video-shopping | [x] |
| 18 | media-lookbook-slider | home | [x] | [x] | reuse | [x] |
| 19 | comparison-quick-table | home | [x] | [x] | reuse | [x] |
| 20 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 21 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 22 | editorial-timeline | home | [x] | [x] | reuse | [x] |
| 23 | blog-list-main | home | [x] | [x] | featured-blog | [x] |
| 24 | media-scrolling-gallery | home | [x] | [x] | social-feeds | [x] |
| 25 | trust-contact-icon-band | home | [x] | [x] | reuse | [x] |
| 26 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 27 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 28 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 29 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 30–32 | banner / related / PLP | collection | [x] | [x] | reuse | [x] |
| 33 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 34 | product-info-main | product-detail | [x] | [x] | Weight + sticky | [x] |
| 35–41 | lookbook / promo / FAQ / trust | product-detail | [x] | [x] | reuse | [x] |
| 42 | search-results | search | [x] | [x] | reuse | [x] |
| 43–44 | cart-items + upsell | cart | [x] | [x] | reuse | [x] |
| 45 | page-content-main | about-brand | [x] | [x] | Our Promises | [x] |
| 46–48 | banner / rich-text / form | contact | [x] | [x] | reuse | [x] |
| 49–53 | FAQ page | faq-support | [x] | [x] | reuse | [x] |
| 54 | page-content-main | policy | [x] | [x] | sustainability | [x] |
| 55–56 | blog-list / blog-post | blog | [x] | [x] | reuse | [x] |
| 57 | page-content-main | not-found | [x] | [x] | 404 aday | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Collections `#menu-1` Dog/Cat + 4 kolon |
| global-predictive-search | input | [x] 3vp `food` → SUGGESTIONS Plants/Herbs (ürün yok) |
| global-menu-drawer | open | [x] 375/768 MENU + Shop 30% OFF |
| global-cart-drawer | filled + changed | [x] Chew Toy $25 → qty 2 / $50 |
| cart-page-main | initial/filled/changed | [x] boş → satır → qty 2 |
| commerce-tools-products-bundle | changed | [x] ADD TO BUNDLE → Meal Mix $68 |
| product-info-main | changed | [x] Weight 400g + sticky ATC |
| faq-collapsible-tabs (faq-support) | initial/changed | [x] pure-natural açık 3vp |
| faq-collapsible-tabs (PDP) | initial/changed | [x] feed-amount açık 3vp |
| testimonial-quote-carousel | initial/changed | [x] Mia L.→Jenny D. drag 3vp |
| media-shop-the-feed | initial/changed | [x] ikinci reel → Collars $45 Sold out |
| media-scrolling-gallery | initial/changed | [x] next ok / 375 drag 3vp |
| comparison-quick-table | initial | [x] statik tablo — changed yok |
| lead-capture-form (contact + FAQ) | initial | [x] boş form — input PII dur |
| product-finder-quiz | — | **yok** Breath preset |
| before-after-slider | — | **obs yok** Breath |
| promo-banner-countdown | — | **obs yok** (announcement-bar var, countdown yok) |
| lead-capture-newsletter-band | — | **obs yok** (footer-columns-newsletter farklı schemaId) |

---

## Aday / leftover

[`candidates/eurus-leftovers.md`](../candidates/eurus-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp (53 section; cart-upsell / overlay kapalı 0px)
- [x] Mega / search / cart empty+filled+qty / mobile menu / bundle / PDP Weight + sticky
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
