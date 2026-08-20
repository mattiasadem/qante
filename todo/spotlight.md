# Todo — Spotlight (Shopify free)

*Kaynak:* https://theme-spotlight-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/spotlight  
*Tema (storefront, uydurulmadı):* **`Spotlight-8.0.0`** · `schema_name`: **Spotlight** · `schema_version`: **8.0.0** · `theme_store_id`: **null** · role `main` · id `130861334584`  
*Shop:* `theme-spotlight-demo.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/268 — CRO leftover interact · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/spotlight/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Observation | **15** |
| Evidence PNG | **63** |
| Şema | **0 yeni** |
| Parallel | yalnız `observations/spotlight/`, `evidence/spotlight/`, `todo/spotlight.md`, `candidates/spotlight-leftovers.md` |

**Kapsam satırı:**  
`Spotlight · default · Spotlight-8.0.0 / schema_name Spotlight 8.0.0 (theme_store_id null) · home→PDP→PLP→collections→search→cart→contact→blog→404 · 15 obs · 63 PNG · 0 yeni şema · leftover: mega/hamburger yok · variant yok · empty blog · 404 routes · CRO: contact initial + footer locale`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header / featured / footer | [x] | [x] |
| Mega | ⛔ yok | — |
| Predictive search `cap` | [x] | [x] 375/768/1440 PRODUCTS ×4 |
| Cart notification (drawer yok) | [x] | [x] filled |
| Mobile hamburger 375+768 | ⛔ yok | — |
| PDP Cap Ebbets Corduroy (variant yok) | [x] | [x] initial |
| PLP `/collections/all` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=cap` | [x] | [x] |
| Cart `/cart` boş + dolu + qty | [x] | [x] 1→2 / $48→$96 |
| About | ⛔ 404 | leftover |
| Contact form (Send yok) | [x] | [x] |
| Blog `/blogs/news` (yazı yok) | [x] | [x] |
| 404 | [x] | [x] |
| Footer | [x] | [x] |

---

## Bileşen roster

15 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | mega yok | reuse | [x] |
| 2 | product-showcase-grid-featured | home | [x] | başlıksız 4×3 | reuse | [x] |
| 3 | footer-columns-newsletter | home | [x] | form yok · locale open | reuse | [x] |
| 4 | global-predictive-search | home | [x] | cap → 4 ürün | reuse | [x] |
| 5 | global-cart-drawer | home | [x] | notification | reuse | [x] |
| 6 | collection-banner | collection | [x] | Products | reuse | [x] |
| 7 | product-showcase-grid-plp | collection | [x] | filtre yok | reuse | [x] |
| 8 | collection-nav-grid | collections | [x] | metin liste | reuse | [x] |
| 9 | product-info-main | product-detail | [x] | variant yok | reuse | [x] |
| 10 | search-results | search | [x] | cap ×4 | reuse | [x] |
| 11 | cart-page-main | cart | [x] | boş+dolu+qty | reuse | [x] |
| 12 | page-content-main | contact | [x] | başlık | reuse | [x] |
| 13 | lead-capture-form | contact | [x] | PII · initial 3vp | reuse | [x] |
| 14 | blog-list-main | blog-list | [x] | boş News | reuse | [x] |
| 15 | page-content-main | not-found | [x] | 404 | reuse | [x] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **yok** — mega / nav link yok |
| global-menu-drawer | open | **yok** — hamburger/header-drawer yok (375/768/1440) |
| global-predictive-search | open/input | `cap` → PRODUCTS Cap Wool ×2 + Cap Ebbets Corduroy ×2 + Search for “cap” |
| global-cart-drawer | filled | cart-notification Cap Ebbets · View my cart (1) · rozet 1 |
| cart-page-main | initial/filled/changed | boş → satır $48 adet 1 → adet 2 / $96 |
| product-info-main | changed | **yok** — Default Title; renk ayrı handle |

Stop: email / account / checkout / newsletter submit / contact Send / PII

### CRO leftover interact (pixel-checked)

| schemaId | State | Sonuç |
|---|---|---|
| lead-capture-form | initial | [x] 3vp Name / Email * / Phone / Comment boş; Send sarı; 375 tek kolon |
| footer-columns-newsletter | initial + open | [x] 3vp newsletter input yok; Canada (CAD $) → Canada + United States (CAD $) |

CRO şemaları observation’da yok (yeni şema yok): before-after-slider · commerce-tools-products-bundle · promo-banner-countdown · faq-collapsible-tabs · lead-capture-newsletter-band · comparison-quick-table · product-finder-quiz · testimonial-quote-carousel · media-shop-the-feed · media-scrolling-gallery · hero-slideshow (`/pages/faq` `/pages/faqs` 404)

---

## Aday / leftover

[`candidates/spotlight-leftovers.md`](../candidates/spotlight-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 11/11
- [x] Interact search / cart notification / cart qty
- [x] CRO leftover: contact `initial` + footer locale `open`
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
