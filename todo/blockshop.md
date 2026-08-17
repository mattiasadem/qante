# Todo — Blockshop (Shopify paid) · Beauty

*Kaynak:* https://blockshop-theme-beauty.myshopify.com/  
*Preset:* `default` (Beauty — resmi Theme Store preview) · *Slug:* `blockshop`  
*Theme Store:* https://themes.shopify.com/themes/blockshop · Troop Themes

**Yasak URL:** `blockshop-theme.myshopify.com` (password) · `blockshop.myshopify.com` (internal) — kullanılmadı.

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Copy of design [do not delete]** · `id` `134976438327` · `schema_name` **Blockshop** · `schema_version` **13.2.0** · `theme_store_id` **null** · `role` `main` · shop `blockshop-theme-beauty.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **yapılıyor**  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/blockshop/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/blockshop/`, `evidence/blockshop/`, `todo/blockshop.md`, `candidates/blockshop-leftovers.md` |

**Kapsam satırı:**  
`Blockshop · default · Copy of design [do not delete] / schema_name Blockshop 13.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 38 obs · 0 yeni şema · leftover: candidates/blockshop-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + sidebar header / featured-grid / bestsellers / footer | roster | [ ] |
| Shop accordion 768/1440 (mega yok) | interact | [ ] |
| Predictive search `cream` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | ⛔ hamburger 0×0 (sidebar) | leftover |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP Brightening Serum 75ML→200ML | interact 3vp | [ ] |
| PLP `/collections/all` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=cream` | roster | [ ] |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| FAQ `/pages/faqs` | roster | [ ] |
| News + Future Tones | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | sidebar; mega yok | reuse | [ ] |
| 2 | global-menu-drawer | home | [ ] | 375 | reuse | [ ] |
| 3 | global-predictive-search | home | [ ] | cream | reuse | [ ] |
| 4 | global-cart-drawer | home | [ ] | boş+dolu+qty | reuse | [ ] |
| 5 | collection-nav-image-cards | home | [ ] | SKINCARE/MAKEUP | reuse | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | BEST SELLERS | reuse | [ ] |
| 7 | editorial-rich-text | home | [ ] | Avalon | reuse | [ ] |
| 8 | collection-nav-image-cards-2 | home | [ ] | 3 hikâye | reuse | [ ] |
| 9 | testimonial-quote-carousel | home | [ ] | logo_list alıntı | reuse | [ ] |
| 10 | editorial-image-with-text | home | [ ] | Ritual | reuse | [ ] |
| 11 | trust-icon-row | home | [ ] | kargo/iade | reuse | [ ] |
| 12 | collection-nav-cards | home | [ ] | routine | reuse | [ ] |
| 13 | editorial-rich-text-2 | home | [ ] | manifesto | reuse | [ ] |
| 14 | footer-columns-newsletter | home | [ ] | submit yok | reuse | [ ] |
| 15 | product-info-main | product-detail | [ ] | 75→200 | reuse | [ ] |
| 16 | features-multicolumn | product-detail | [ ] | ingredients | reuse | [ ] |
| 17 | editorial-rich-text | product-detail | [ ] | Glow Guide | reuse | [ ] |
| 18 | product-showcase-related | product-detail | [ ] | Boost | reuse | [ ] |
| 19 | trust-icon-row | product-detail | [ ] | icons_row | reuse | [ ] |
| 20 | faq-collapsible-tabs | product-detail | [ ] | PDP FAQ | reuse | [ ] |
| 21 | media-shop-the-feed | product-detail | [ ] | @YOUR.BRAND | reuse | [ ] |
| 22 | testimonial-quote-carousel | product-detail | [ ] | journeys | reuse | [ ] |
| 23 | product-showcase-grid-plp | collection | [ ] | all | reuse | [ ] |
| 24 | collection-nav-image-cards | collection | [ ] | latest/best | reuse | [ ] |
| 25 | collection-nav-grid | collections | [ ] | index | reuse | [ ] |
| 26 | search-results | search | [ ] | cream | reuse | [ ] |
| 27 | cart-page-main | cart | [ ] | boş+dolu+qty | reuse | [ ] |
| 28 | editorial-image-with-text | about-brand | [ ] | Our Story | reuse | [ ] |
| 29 | editorial-rich-text | about-brand | [ ] | kurucular | reuse | [ ] |
| 30 | editorial-image-with-text-2 | about-brand | [ ] | Rachel | reuse | [ ] |
| 31 | editorial-rich-text-2 | about-brand | [ ] | quote | reuse | [ ] |
| 32 | editorial-rich-text | contact | [ ] | How can we help | reuse | [ ] |
| 33 | lead-capture-form | contact | [ ] | submit yok | reuse | [ ] |
| 34 | faq-collapsible-tabs | faq-support | [ ] | shipping | reuse | [ ] |
| 35 | editorial-rich-text | faq-support | [ ] | further | reuse | [ ] |
| 36 | blog-list-main | blog-list | [ ] | news | reuse | [ ] |
| 37 | blog-post-main | blog-post | [ ] | future-tones | reuse | [ ] |
| 38 | page-content-main | not-found | [ ] | 404 | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | [ ] Shop accordion 768/1440 |
| global-predictive-search | initial / input | [ ] cream |
| global-menu-drawer | open | [ ] 375; 768 leftover |
| global-cart-drawer | initial / filled / changed | [ ] |
| cart-page-main | initial / filled / changed | [ ] |
| product-info-main | initial / changed | [ ] 75ML → 200ML |

---

## Aday / leftover

[`candidates/blockshop-leftovers.md`](../candidates/blockshop-leftovers.md)

---

## Evidence backlog

- [ ] Statik 3vp
- [ ] Interact 3vp
- [ ] `npm run validate` 0 error
