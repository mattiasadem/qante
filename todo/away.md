# Todo — Away

*Kaynak:* https://www.awaytravel.com · *Preset:* default · *Slug:* away

**Şu anki odak:** Mod A kapalı — statik walk + resmi 3vp

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/away/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Shop | `766ad1-ab.myshopify.com` · theme id `190642716856` · `schema_name` Away · `schema_version` 1.244.0 · `theme_store_id` null · role `main` |
| Platform | Canlı Shopify (custom Away theme, Theme Store değil) |
| Kapsam satırı | Away · default · home→PDP carry-on→PLP luggage→search carry→cart page→our-story→faqs→footer · 27 obs · 80 PNG · 0 yeni şema · leftover: candidates/away-leftovers.md |

---

## Checklist — walk

| Şablon | Durum | 3vp |
|---|---|---|
| Home (announcement, hero, shop-by-category, rec grids, two-up, testimonials, reasons, footer) | [x] | [x] |
| Header + search drawer (`carry`) | [x] | [x] |
| Mobile menu 375+768 | [x] | [x] (1440 N/A) |
| PDP `/products/carry-on` (`product-info-main` `.hybrid-pdp`) | [x] | [x] |
| PLP `/collections/luggage` | [x] | [x] |
| Search `/search?q=carry` | [x] | [x] |
| Cart `/cart` empty | [x] | [x] |
| About `/pages/our-story` | [x] | [x] |
| FAQ `/pages/faqs` (Gladly) | [x] | [x] |
| Blog / contact / policy | ⛔ leftover | — |
| Checkout / login / newsletter submit | ⛔ PII stop | — |

---

## Bileşen roster

27 observation · 0 yeni şema · reuse only

| # | id | sayfa | Done |
|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] |
| 2 | navigation-header-mega | home | [x] |
| 3 | hero-slideshow | home | [x] |
| 4 | collection-nav-grid | home | [x] |
| 5 | product-showcase-grid-featured | home | [x] |
| 6 | editorial-image-with-text | home | [x] |
| 7 | product-showcase-grid-featured.2 | home | [x] |
| 8 | testimonial-quote-carousel | home | [x] |
| 9 | features-multicolumn | home | [x] |
| 10 | footer-columns-newsletter | home | [x] |
| 11 | global-predictive-search | home | [x] |
| 12 | global-menu-drawer | home | [x] |
| 13 | product-info-main | product-detail | [x] |
| 14 | collection-banner | collection | [x] |
| 15 | product-showcase-grid-plp | collection | [x] |
| 16 | trust-icon-row | collection | [x] |
| 17 | testimonial-quote-carousel | collection | [x] |
| 18 | faq-collapsible-tabs | collection | [x] |
| 19 | editorial-rich-text | collection | [x] |
| 20 | search-results | search | [x] |
| 21 | cart-page-main | cart | [x] |
| 22 | hero-slideshow | about-brand | [x] |
| 23 | editorial-image-with-text | about-brand | [x] |
| 24 | editorial-image-with-text.2 | about-brand | [x] |
| 25 | editorial-image-with-text.3 | about-brand | [x] |
| 26 | editorial-custom-content | about-brand | [x] |
| 27 | faq-collapsible-tabs | faq-support | [x] |

---

## Aday / şemaya sığmayan

→ `candidates/away-leftovers.md`

- Cart drawer yok; `/cart` sayfası
- PDP alt bloklar headless hydrate yok (reviews hero, trust bullets, product FAQ)
- Blog 404; contact GemPages; policy redirect
- Mega hover, filter panel changed, Gladly/Mopinion

---

## Evidence backlog

- [x] Home + chrome 3vp
- [x] PDP / PLP / search / cart 3vp
- [x] our-story + faqs 3vp
- [x] `npm run validate` 0 error
