# Todo — Enterprise (Shopify paid) · Digital

*Kaynak:* https://enterprise-theme-digital.myshopify.com/  
*Preset:* `digital` (Digital) · *Slug:* `enterprise`  
*Theme Store:* https://themes.shopify.com/themes/enterprise · Clean Canvas

**Tema (storefront, okundu):**  
`Shopify.theme.name` = **enterprise-v2.3.0**  
`schema_name` = **Enterprise** · `schema_version` = **2.3.0** · `role` = **main** · theme id `187891679520`  
`theme_store_id` = **null**  
shop `enterprise-theme-digital.myshopify.com`

**Durum:** Mod A walk + resmi 3vp · validate  
**PR:** https://github.com/mattiasadem/qante/pull/291 — **draft · main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/enterprise/digital/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/enterprise/`, `evidence/enterprise/`, `todo/enterprise.md`, `candidates/enterprise-leftovers.md` |

**Kapsam satırı:**  
`Enterprise · digital (Digital) · enterprise-v2.3.0 / schema_name Enterprise 2.3.0 · theme_store_id null · home→PDP→PLP→search→cart→blog→footer · 46 obs · 137 PNG · 0 yeni şema · leftover: candidates/enterprise-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/USP/promo strip/slideshow/collections/promo grid/countdown/featured/video/gallery/marquee/comparison/lookbook/banners/features/newsletter/quick links/departments/FAQ/footer | [x] | [x] |
| PDP `/products/d3400` (Nikon D3400 · variants) | [x] | [x] |
| PLP `/collections/all-products` | [x] | [x] |
| Search `/search?q=camera` | [x] | [x] |
| Cart `/cart` empty | [x] | [x] |
| Blog list `/blogs/reviews` | [x] | [x] |
| Blog post Acer MacBook review | [x] | [x] |
| Mega / search / menu / cart drawer / compare / popup | interact leftover | — |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Enterprise / class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact leftover |
| 3 | icons-with-text (header) | `trust-icon-row` | reuse |
| 4 | promo-strip | `promo-scrolling-marquee` | reuse · delta static strip |
| 5 | nav-slideshow | `hero-slideshow` | reuse |
| 6 | collection-list | `collection-nav-image-cards` | reuse |
| 7 | promo-gallery | `promo-grid-banner` | reuse |
| 8 | countdown-timer | `promo-banner-countdown` | reuse |
| 9 | featured-collection | `product-showcase-grid-featured` | reuse |
| 10 | background-video | `media-video-hero` | reuse |
| 11 | gallery | `media-mosaic-grid` | reuse |
| 12 | scrolling-banner | `promo-scrolling-marquee.2` | reuse |
| 13 | product-comparison-grid | `comparison-quick-table` | reuse |
| 14 | shoppable-image | `media-lookbook-banner` | reuse |
| 15 | image-banner | `editorial-image-with-text-overlay` | reuse |
| 16 | product-features | `features-multicolumn` | reuse |
| 17 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 18 | featured-collection 2 | `product-showcase-grid-featured.2` | reuse |
| 19 | quick-links | `collection-nav-icon-buttons` | reuse · delta pill text |
| 20 | link-list | `collection-nav-cards` | reuse |
| 21 | faq | `faq-collapsible-tabs` | reuse |
| 22 | featured-collection 3 | `product-showcase-grid-featured.3` | reuse |
| 23 | icons-with-text (footer) | `trust-icon-row.2` | reuse |
| 24 | footer | `footer-columns-newsletter` | reuse |
| — | pop-up ×3 | — | leftover overlay |
| — | cart-drawer | `global-cart-drawer` | interact leftover |
| — | product-compare | `global-compare-drawer` | interact leftover |

---

## Aday / leftover

[`candidates/enterprise-leftovers.md`](../candidates/enterprise-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 46 obs · 137 PNG (product-info-tabs 1440 zero-size)
- [ ] Interact mega · search · menu · cart · compare · popup
- [x] `npm run validate` — 0 error
