# Todo — Sense (Shopify first-party / Theme Store)

*Kaynak:* https://theme-sense-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Sense] Theme Store demo (latest)** · `schema_name`: **Dawn** · `schema_version`: **2.5.0** · `theme_store_id`: **null** · role `main` · id `133090279632`  
*Beklenen (görev notu, storefront’ta yok):* Sense · theme_store_id 1356 · Shopify first-party  
*Shop:* `theme-sense-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + CRO leftover  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sense/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/sense/`, `evidence/sense/`, `todo/sense.md`, `candidates/sense-*.md` |

**Kapsam satırı:**  
`Sense · default · [Sense] Theme Store demo (latest) / schema_name Dawn 2.5.0 (theme_store_id null) · home→PDP→PLP→search→cart/notification→about/contact→policy→blog→404 · 37 obs · 137 PNG · 0 yeni şema · leftover: 404 / policies 404 / FAQ 404 / mega yok / cart-notification / 8 CRO şema yok`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/IWT/featured/quote/collage/multicolumn/collection-list/newsletter/footer | [x] | [x] |
| Mega | ⛔ yok | — |
| Predictive search `oil` | [x] | [x] 375/768/1440; ürün önerisi yok |
| Cart notification (drawer yok) | [x] | [x] filled |
| Mobile hamburger 375+768 | [x] | [x] open; 1440 N/A |
| PDP Lip Balm Flavor Lime→Berries | [x] | [x] changed |
| PLP `/collections/skin` | [x] | [x] |
| Search `/search?q=oil` | [x] | [x] |
| Cart `/cart` boş + dolu + qty | [x] | [x] 3→4 |
| About+contact `/pages/about-us` | [x] | [x] form PII yok |
| Returns / Shipping | [x] | [x] |
| Blog list + self-care article | [x] | [x] |
| 404 | [x] | [x] leftover + obs |
| Footer | [x] | [x] |

---

## Bileşen roster

37 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse (mega yok) | [x] |
| 3 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 6 | media-mosaic-grid | home | [x] | [x] | collage | [x] |
| 7 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 8 | collection-nav-cards | home | [x] | [x] | collection-list | [x] |
| 9 | lead-capture-newsletter-band | home | [x] | [x] | e-posta yok | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | footer form yok | [x] |
| 11 | global-predictive-search | home | [x] | [x] | oil | [x] |
| 12 | global-menu-drawer | home | [x] | [x] | 375/768 | [x] |
| 13 | global-cart-drawer | home | [x] | [x] | notification | [x] |
| 14 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 15 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 16 | media-mosaic-grid | collection | [x] | [x] | collage | [x] |
| 17 | product-info-main | product-detail | [x] | [x] | Flavor | [x] |
| 18–22 | PDP quote / multi / IWT / video / related | product-detail | [x] | [x] | reuse | [x] |
| 23 | search-results | search | [x] | [x] | reuse | [x] |
| 24 | cart-page-main | cart | [x] | [x] | boş+dolu+qty | [x] |
| 25 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 26–32 | about rich-text / multi / IWT / form | about-brand | [x] | [x] | reuse | [x] |
| 33 | page-content-main | policy | [x] | [x] | returns | [x] |
| 34 | page-content-main | shipping | [x] | [x] | shipping | [x] |
| 35 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 36 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 37 | page-content-main | not-found | [x] | [x] | 404 aday | [x] |

---

## Interact (piksel değişen / olmayan)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **yok** — mega panel yok |
| global-predictive-search | input | `oil` → yalnız “Search for 'oil'”; ürün önerisi yok |
| global-menu-drawer | open | 375/768 liste+sosyal; 1440 N/A |
| global-cart-drawer | filled | cart-notification Lip Balm Lime · View my cart (1) |
| cart-page-main | initial/filled/changed | boş → Lime satır qty 3 → plus 4 / $64 |
| product-info-main | changed | Lime → Berries (hap + turuncu tüp) |

### CRO leftover interact

| schemaId | States | Sonuç |
|---|---|---|
| lead-capture-newsletter-band | initial | scan 1 email; fill/submit PII — input missing |
| lead-capture-form | initial | scan 4 alan; PII/Send dur — input missing |

**CRO disk listesinde observation yok (9):** before-after-slider · commerce-tools-products-bundle · promo-banner-countdown · faq-collapsible-tabs · comparison-quick-table · product-finder-quiz · testimonial-quote-carousel · media-shop-the-feed · media-scrolling-gallery

**FAQ/reviews/countdown/quiz/bundle/sticky/scarcity:** FAQ `/pages/faq` 404 · reviews yok · countdown yok (promo-announcement-bar var, countdown değil) · quiz yok · bundle yok · sticky/scarcity gözlenmedi

---

## Aday / leftover

[`candidates/sense-leftovers.md`](../candidates/sense-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact search / menu / cart notification / cart qty / PDP Flavor
- [x] CRO leftover interact (lead-capture-newsletter-band + lead-capture-form)
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
