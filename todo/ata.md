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

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/200 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ata/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **21** |
| PNG | **82** |
| Validator | 65 temiz · **0 error** · 0 warn |
| Parallel | yalnız `observations/ata/`, `evidence/ata/`, `todo/ata.md`, `candidates/ata-leftovers.md` |

**Kapsam satırı:**  
`Ata · default · ikas Studio · theme_store_id 1863f1b9-8002-4446-8c3c-1436db3d47bc · home→PDP Metalic Lipstick Siyah→Taba→PLP /kadin→search ruj/Metalic→cart empty/filled/qty2 ₺41998→blog+hikaye→404 · about/contact/FAQ yok · 21 obs · 82 PNG · 0 yeni şema · leftover: candidates/ata-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Desktop nav (mega yok) | interact | [x] |
| Predictive search `Metalic` (+ ruj 1440) | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Metalic Lipstick Siyah→Taba | interact 3vp | [x] |
| PLP `/kadin` | roster + capture | [x] |
| Search `/search?q=ruj` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About / contact / FAQ | ⛔ yok (`#` / 404) | leftover |
| Blog `/blog` + `/blog/hikaye` | roster + capture | [x] |
| 404 | roster + capture | [x] |
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
| navigation-header-mega | initial + open | Mega yok — 1440 Skin Care hover panel açmadı |
| global-predictive-search | input | `Metalic` → 5× Metalic Lipstick ₺20.999; `ruj` 1440 Sonuç bulunamadı |
| global-menu-drawer | open | 375/768 siyah menü + Sepet + Giriş. Login tıklanmadı |
| global-cart-drawer | empty/filled/qty | boş → qty1 ₺20.999 → qty2 ₺41.998 |
| cart-page-main | empty/filled/qty | aynı; birim ₺0.00 leftover |
| product-info-main | changed | Siyah → Taba; ₺20.999 aynı |

---

## Aday / leftover

[`candidates/ata-leftovers.md`](../candidates/ata-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP Renk
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
