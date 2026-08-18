# Todo — Ata (ikas Theme Store)

*Kaynak (resmi walk URL):* https://g5jhl-themes.myikas.com/  
*Theme Store:* https://themes.ikas.com/themes/1863f1b9-8002-4446-8c3c-1436db3d47bc  
*Preset klasör:* `default`  
*Slug:* `ata`  
*Geliştirici (listing):* ikascom

**Tema (vitrinde okundu, uydurulmadı):**  
`window.Shopify` **yok**  
`window.__IKAS_DATA__` var · `pageType` INDEX/CATEGORY/PRODUCT/SEARCH/CART/BLOG_INDEX/BLOG/NOT_FOUND  
`storefrontThemeId` = `90e6a44f-b183-44d4-b141-55b49c09e75d`  
`storefrontId` = `f726bf61-68c8-4758-afb3-206ea66e32e7`  
`storefrontType` = `STOREFRONT`  
`domain` (config) = `themes.myikas.com` · walk host = `g5jhl-themes.myikas.com`  
`merchantName` / `storeName` = `themes` · locale `tr` · `TRY`  
`window.IkasEvents` = `{subscribe, unsubscribe}`  
`theme_store_id` = **1863f1b9-8002-4446-8c3c-1436db3d47bc** (Theme Store UUID; storefront JSON’da Shopify id yok)

**Durum:** Mod A walk + resmi 3vp + interact (capture devam)  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ata/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **21** |
| Parallel | yalnız `observations/ata/`, `evidence/ata/`, `todo/ata.md`, `candidates/ata-leftovers.md` |

**Kapsam satırı:**  
`Ata · default · ikas Studio · theme_store_id 1863f1b9-8002-4446-8c3c-1436db3d47bc · home→PDP Metalic Lipstick→PLP /kadin→search ruj→cart empty/filled→blog+hikaye→404 · about/contact/FAQ yok · 21 obs · 0 yeni şema · leftover: candidates/ata-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Desktop nav (mega yok) | interact | [ ] |
| Predictive search `ruj` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Metalic Lipstick Siyah→Taba | interact 3vp | [ ] |
| PLP `/kadin` | roster | [ ] capture |
| Search `/search?q=ruj` | roster | [ ] capture |
| Cart page empty + filled + qty | interact | [ ] |
| About / contact / FAQ | ⛔ yok (`#` / 404) | leftover |
| Blog `/blog` + `/blog/hikaye` | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM + `__IKAS_DATA__.propValues`)

| # | Ata type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-banner | `promo-announcement-bar` | reuse |
| 2 | header / navbar | `navigation-header-mega` | reuse · mega yok · interact |
| 3 | hero-banner-slider | `hero-slideshow` | reuse |
| 4 | product-carousel | `product-showcase-grid-featured` | reuse |
| 5 | testament-highlight | `editorial-image-with-text` | reuse |
| 6 | shop-by-collection | `collection-nav-image-cards` | reuse |
| 7 | product-carousel (2) | — | leftover (aynı içerik) |
| 8 | review-slider | `testimonial-quote-carousel` | reuse |
| 9 | shop-by-collection (2) | — | leftover (aynı içerik) |
| 10 | beauty-blog | `blog-list-main` | reuse |
| 11 | newsletter-subscribe | `lead-capture-newsletter-band` | reuse · submit yok |
| 12 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 13 | cart-drawer-panel | `global-cart-drawer` | reuse · interact |
| 14 | search-overlay | `global-predictive-search` | reuse · interact |
| 15 | mobile-menu | `global-menu-drawer` | reuse · 375/768 |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial (+ hover) | Mega yok — düz 3 link |
| global-predictive-search | input | `ruj` — overlay + popüler chip |
| global-menu-drawer | open | 375/768 hamburger. Login tıklanmadı |
| global-cart-drawer | empty/filled/qty | UI ATC (ikas; `/cart/add.js` yok) |
| cart-page-main | empty/filled/qty | `/cart` |
| product-info-main | changed | Siyah → Taba |

---

## Aday / leftover

[`candidates/ata-leftovers.md`](../candidates/ata-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Renk
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
