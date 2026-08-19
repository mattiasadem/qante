# Todo — Hello Bubble (hellobubble.com)

*Kaynak:* https://hellobubble.com · *walk URL:* https://hellobubble.myshopify.com (aynı shop; custom domain Cloudflare 403)  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Bubble Baseline Theme -  Production 🚀** · `schema_name`: **Baseline** · `schema_version`: **5.0.0** · `theme_store_id`: null (custom) · role `main` · id `148258554009`  
*Shop:* `hellobubble.myshopify.com` · CDN `t/353`

**Durum:** Mod A walk + resmi 3vp + interact (piksel doğrulandı) + **CRO interact** (2026-08-19)  
**PR:** https://github.com/mattiasadem/qante/pull/85 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hellobubble/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hellobubble/`, `evidence/hellobubble/`, `todo/hellobubble.md`, `candidates/hellobubble-*.md` |

**Kapsam satırı:**  
`Hello Bubble · default · Bubble Baseline Theme - Production (Baseline 5.0.0 custom, theme_store_id null) · home→PDP→PLP→search→cart page+drawer→content→footer→mobile · 71 obs · 0 yeni şema · CRO interact 15 obs · leftover: CF domain / Yotpo / Gorgias / Stay.ai / locator / PII / CRO-not-seen`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/bestsellers/2-up/marquee/ugc/community/ig/footer | [x] | [x] |
| Header kapalı + Shop mega 1440 | [x] interact | [x] |
| Search overlay `slam` | [x] interact | [x] |
| Cart drawer empty + filled (Water Slide) | [x] interact | [x] |
| Mobile hamburger 375+768 | [x] interact | [x] (1440 N/A) |
| PDP Slam Dunk + Mini size changed | [x] | [x] |
| PLP `/collections/shop` | [x] | [x] |
| Search `/search?q=slam` | [x] | [x] |
| Cart `/cart` boş sayfa | [x] | [x] |
| About `/pages/about` | [x] | [x] |
| FAQ `/pages/faq` + first answer | [x] | [x] |
| Contact Gorgias | [x] | [x] PII yok |
| Privacy page + terms + ambassador T&Cs | [x] | [x] |
| Blog list + HelloBubble post | [x] | [x] |
| Store locator | [x] | [x] |
| Community + Built by Dermatologists | [x] | [x] (anchor 375/768 0) |
| 404 template | [x] | [x] |
| Custom domain hellobubble.com | ⛔ CF leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 3 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 4 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 5 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 6 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 7 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 8 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 9 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] newsletter yok | [x] | reuse | [x] |
| 11 | navigation-header-mega | home | [x] Shop 1440 | [x] | reuse | [x] |
| 12 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 13 | global-predictive-search | home | [x] slam | [x] | reuse | [x] |
| 14 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 15–21 | PDP + Mini changed | product-detail | [x] | [x] | reuse | [x] |
| 22 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 23 | search-results | search | [x] | [x] | reuse | [x] |
| 24 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 25–33 | about | about-brand | [x] | [x] | reuse | [x] |
| 34–39 | FAQ + ship-to open | faq-support | [x] | [x] | reuse | [x] |
| 40–42 | contact Gorgias | contact | [x] | [x] | reuse | [x] |
| 43–45 | policy | policy | [x] | [x] | reuse | [x] |
| 46–47 | blog | blog-* | [x] | [x] | reuse | [x] |
| 48–50 | store locator | store-locator | [x] | [x] | reuse | [x] |
| 51–59 | community | community | [x] | [x] | reuse | [x] |
| 60–70 | dermatologists | dermatologists | [x] | [x] | reuse | [x] |
| 71 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop mega kolon + collab görseller. 375 hamburger. |
| global-predictive-search | initial, input | slam → suggestions + Slam Dunk / Glam / Disco |
| global-cart-drawer | initial, filled | boş 3vp; filled Water Slide $17 + $22 to free ship. UI ATC fail → `/cart/add.js` |
| global-menu-drawer | open | 375/768 Shop/Skin/New/About + Log in. Accordion leftover |
| product-info-main | changed | Mini seçili, üst $10 |
| faq-collapsible-tabs | changed | Where do you ship to? US + 200 ülke |
| faq-collapsible-tabs (×7 ek) | initial, changed | FAQ grupları 2–5 + community + derm + locator |
| testimonial-quote-carousel (×4) | initial | carousel ok yok — statik grid/tek slayt |
| media-shop-the-feed (×2) | initial | Instagram ızgara; affordance yok |
| lead-capture-form | initial | PII stop — boş form |

---

## CRO interact (2026-08-19)

| schemaId | sayfa | states | etiket |
|---|---|---|---|
| faq-collapsible-tabs | faq-support | initial, changed | kapali / ship-to |
| faq-collapsible-tabs-2 | faq-support | initial, changed | kapali / skincare-return |
| faq-collapsible-tabs-3 | faq-support | initial, changed | kapali / out-of-stock |
| faq-collapsible-tabs-4 | faq-support | initial, changed | kapali / expiration |
| faq-collapsible-tabs-5 | faq-support | initial, changed | kapali / still-questions |
| faq-collapsible-tabs | community | initial, changed | kapali / shape-products |
| faq-collapsible-tabs | dermatologists | initial, changed | kapali / focus-groups |
| faq-collapsible-tabs | store-locator | initial, changed | kapali / us-canada |
| testimonial-quote-carousel | home | initial | bolum |
| testimonial-quote-carousel | community | initial | bolum |
| testimonial-quote-carousel | dermatologists | initial | bolum |
| testimonial-quote-carousel | product-detail | initial | bolum |
| media-shop-the-feed | home | initial | bolum |
| media-shop-the-feed | about-brand | initial | bolum |
| lead-capture-form | dermatologists | initial | bolum |

**CRO listede yok (observation yok):** before-after-slider, commerce-tools-products-bundle, promo-banner-countdown, lead-capture-newsletter-band, comparison-quick-table, product-finder-quiz, media-scrolling-gallery.

---

## Aday / leftover

[`candidates/hellobubble-leftovers.md`](../candidates/hellobubble-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] PDP / PLP / search / cart 3vp
- [x] Content templates 3vp
- [x] Drawer / search / mega / mobile interact
- [x] PNG bak → stateFindings
- [x] CRO interact 15 obs (faq×8, testimonial×4, feed×2, form×1)
- [ ] Community anchor 375/768 (zero-size, gizli)
- [ ] Menu Shop accordion
- [ ] Kart hover / quick-buy
