# Todo — Dawn (Shopify free / Theme Store official demo)

*Kaynak:* https://theme-dawn-demo.myshopify.com  
*Theme Store:* https://themes.shopify.com/themes/dawn  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Dawn** · `schema_name`: **Dawn** · `schema_version`: **15.0.0** · `theme_store_id`: **887** · role `main` · id `129690763353`  
*Shop:* `theme-dawn-demo.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/267 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dawn/default/` |
| Observation | **29** |
| Evidence PNG | **119** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Validator | 65 temiz · 0 error · 0 warn |
| Parallel | yalnız `observations/dawn/`, `evidence/dawn/`, `todo/dawn.md`, `candidates/dawn-leftovers.md` |

**Kapsam satırı:**  
`Dawn · default · Dawn / schema_name Dawn 15.0.0 / theme_store_id 887 · home→PDP Puff Emerald→Chocolate→PLP bags→/collections→search puff→cart empty/filled/qty2 $930→about→contact-us→news+origin story→404 · 29 obs · 119 PNG · 0 yeni şema · leftover: no FAQ/countdown/quiz + YouTube bot wall`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/banner/rich-text/featured/collage/video/quotes/footer | [x] | [x] |
| Header kapalı + Bags dropdown 1440 | [x] | [x] (mega yok) |
| Predictive search `puff` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375+768 + Bags nested | [x] | [x] (1440 hamburger yok) |
| PDP Puff Color Emerald→Chocolate | [x] | [x] galeri yeşil→kahve |
| PLP `/collections/bags` | [x] | [x] 26 ürün |
| Collections index `/collections` | [x] | [x] 14 kart |
| Search `/search?q=puff` | [x] | [x] 2 results |
| Cart `/cart` empty + filled + qty | [x] | [x] qty 1→2 · $465→$930 |
| Cart notification (drawer yok) | [x] | [x] filled |
| About `/pages/about` | [x] | [x] |
| Contact `/pages/contact-us` form | [x] | [x] PII yok |
| News list + Mlouye origin story | [x] | [x] |
| 404 | [x] | [x] |

---

## Bileşen roster

29 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse (mega yok) | [x] |
| 3 | editorial-image-with-text-overlay | home | [x] | [x] | image-banner | [x] |
| 4 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | 8 kart, başlık yok | [x] |
| 6 | media-mosaic-grid | home | [x] | [x] | collage | [x] |
| 7 | media-video-hero | home | [x] | [x] | poster+play | [x] |
| 8 | features-multicolumn | home | [x] | [x] | 2 quote | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | e-posta yok | [x] |
| 10 | global-predictive-search | home | [x] | [x] | puff | [x] |
| 11 | global-menu-drawer | home | [x] | [x] | 375/768 | [x] |
| 12 | global-cart-drawer | home | [x] | [x] | notification | [x] |
| 13 | product-info-main | product-detail | [x] | [x] | Color | [x] |
| 14–15 | IWT + multi | product-detail | [x] | [x] | reuse | [x] |
| 16–17 | banner + PLP | collection | [x] | [x] | reuse | [x] |
| 18 | collection-nav-grid | collections | [x] | [x] | 14 kart | [x] |
| 19 | search-results | search | [x] | [x] | puff 2 | [x] |
| 20–21 | cart-page + featured | cart | [x] | [x] | reuse | [x] |
| 22–24 | multi / page / rich-text | about-brand | [x] | [x] | reuse | [x] |
| 25–26 | page + form | contact | [x] | [x] | PII yok | [x] |
| 27–28 | blog-list + post | blog | [x] | [x] | reuse | [x] |
| 29 | page-content-main | not-found | [x] | [x] | 404 | [x] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **yok** — 1440 Bags `header__submenu` dikey liste |
| global-predictive-search | input | `puff` → PRODUCTS Puff + Puff Large + Search for “puff” |
| global-menu-drawer | open/changed | 375/768 hamburger; Bags nested Shop all…Mini bags |
| global-cart-drawer | filled | cart-notification Puff Emerald · View cart (1) |
| cart-page-main | initial/filled/changed | boş → qty1 $465 → qty2 $930 |
| product-info-main | changed | Emerald yeşil → Chocolate kahve; $465 aynı |

### CRO leftover interact

| schemaId | State | Sonuç |
|---|---|---|
| footer-columns-newsletter | initial + open | [x] 3vp boş Email; Canada \| CAD $ → Search + Algeria…Canada tik. PII dur |
| lead-capture-form | initial | [x] 3vp Name/Email*/Phone/Comment + Send. 375 tek kolon. PII dur |
| features-multicolumn | initial | [x] 3vp REFINERY29 + The Cut. 1440 iki kolon; 375/768 alt alta. changed yok |
| media-video-hero | initial + changed | [x] 3vp poster+play → YouTube iframe “not a bot”. Video karesi yok |

CRO şemaları observation’da yok (yeni şema yok): faq-collapsible-tabs, promo-banner-countdown, before-after-slider, commerce-tools-products-bundle, comparison-quick-table, product-finder-quiz, testimonial-quote-carousel, media-shop-the-feed, hero-slideshow, media-scrolling-gallery

---

## Aday / leftover

[`candidates/dawn-leftovers.md`](../candidates/dawn-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP Color
- [x] CRO leftover: footer / contact / quotes / video — 3vp PNG
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
