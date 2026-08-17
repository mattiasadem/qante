# Todo — Eurus (Omni Themes, paid) · Breath

*Kaynak:* https://eurus-breath-demo.myshopify.com/  
*Preset:* `breath` · *Slug:* `eurus`  
*Theme Store:* https://themes.shopify.com/themes/eurus

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = ** Breath 10.1.0** (başta boşluk)  
`schema_name` = **Eurus** · `schema_version` = **10.1.0** · `role` = **main** · id `188138782998`  
`theme_store_id` = **null** (uydurulmadı)

**Durum:** Mod A walk + resmi 3vp + interact  
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
`Eurus · Breath 10.1.0 · schema_name Eurus · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→FAQ→blog→404 · 57 obs · 0 yeni şema · leftover: quiz yok / store locator / cart-footer / 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/slideshow/bundle/footer | [x] roster | [ ] capture |
| Mega Collections 1440 | [x] `#menu-1` | [ ] |
| Predictive search `food` | [x] | [ ] |
| Mobile menu 375+768 | [x] modern icon | [ ] |
| Cart drawer empty/filled/qty | [x] `.drawer.typeDrawer` | [ ] |
| Bundle ADD TO BUNDLE | [x] home | [ ] |
| Product quiz / finder | ⛔ Breath'te yok | leftover |
| PDP Superfood Weight 300→400 + sticky ATC | [x] | [ ] |
| PLP `/collections/dog` | [x] | [ ] |
| Collections index `/collections` | [x] | [ ] |
| Search `/search?q=food` | [x] | [ ] |
| Cart page boş + dolu + qty | [x] | [ ] |
| About `/pages/our-promises` (`/pages/about` 404) | [x] | [ ] |
| Contact form (submit yok) | [x] | [ ] |
| FAQ `/pages/faqs` | [x] | [ ] |
| Blog Dog Care + article | [x] | [ ] |
| 404 leftover | [x] | [ ] |
| Email / account / checkout / newsletter submit | ⛔ | — |

---

## Bileşen roster

57 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 6–8 | promo-grid-banner ×3 | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 10 | commerce-tools-products-bundle | home | [ ] | [x] | reuse | [ ] |
| 11 | collection-nav-slider | home | [ ] | [x] | reuse | [ ] |
| 12 | product-showcase-featured | home | [ ] | [x] | reuse | [ ] |
| 13 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 14 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 15 | features-multicolumn | home | [ ] | [x] | flow | [ ] |
| 16 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 17 | media-shop-the-feed | home | [ ] | [x] | video-shopping | [ ] |
| 18 | media-lookbook-slider | home | [ ] | [x] | reuse | [ ] |
| 19 | comparison-quick-table | home | [ ] | [x] | reuse | [ ] |
| 20 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 21 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 22 | editorial-timeline | home | [ ] | [x] | reuse | [ ] |
| 23 | blog-list-main | home | [ ] | [x] | featured-blog | [ ] |
| 24 | media-scrolling-gallery | home | [ ] | [x] | social-feeds | [ ] |
| 25 | trust-contact-icon-band | home | [ ] | [x] | reuse | [ ] |
| 26 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 27 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 28 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 29 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 30–32 | banner / related / PLP | collection | [ ] | [x] | reuse | [ ] |
| 33 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 34 | product-info-main | product-detail | [ ] | [x] | Weight + sticky | [ ] |
| 35–41 | lookbook / promo / FAQ / trust | product-detail | [ ] | [x] | reuse | [ ] |
| 42 | search-results | search | [ ] | [x] | reuse | [ ] |
| 43–44 | cart-items + upsell | cart | [ ] | [x] | reuse | [ ] |
| 45 | page-content-main | about-brand | [ ] | [x] | Our Promises | [ ] |
| 46–48 | banner / rich-text / form | contact | [ ] | [x] | reuse | [ ] |
| 49–53 | FAQ page | faq-support | [ ] | [x] | reuse | [ ] |
| 54 | page-content-main | policy | [ ] | [x] | sustainability | [ ] |
| 55–56 | blog-list / blog-post | blog | [ ] | [x] | reuse | [ ] |
| 57 | page-content-main | not-found | [ ] | [x] | 404 aday | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Collections `#menu-1` |
| global-predictive-search | input | [ ] 3vp `food` |
| global-menu-drawer | open | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] Chew Toy + qty |
| cart-page-main | initial/filled/changed | [ ] boş → satır → qty |
| commerce-tools-products-bundle | changed | [ ] ADD TO BUNDLE |
| product-info-main | changed | [ ] Weight 400g + sticky ATC |
| product-finder-quiz | — | **yok** Breath preset |

---

## Aday / leftover

[`candidates/eurus-leftovers.md`](../candidates/eurus-leftovers.md)

---

## Evidence backlog

- [ ] Statik 3vp (tüm obs)
- [ ] Mega / search / cart empty+filled+qty / mobile menu / bundle / PDP Weight + sticky
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
