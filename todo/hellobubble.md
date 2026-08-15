# Todo — Hello Bubble (hellobubble.com)

*Kaynak:* https://hellobubble.com · *walk URL:* https://hellobubble.myshopify.com (aynı shop; custom domain Cloudflare 403)  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Bubble Baseline Theme -  Production 🚀** · `schema_name`: **Baseline** · `schema_version`: **5.0.0** · `theme_store_id`: null (custom) · role `main` · id `148258554009`  
*Shop:* `hellobubble.myshopify.com` · CDN `t/353`

**Durum:** Mod A walk yazılıyor — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hellobubble/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hellobubble/`, `evidence/hellobubble/`, `todo/hellobubble.md`, `candidates/hellobubble-*.md` |

**Kapsam satırı:**  
`Hello Bubble · default · Bubble Baseline Theme - Production (Baseline 5.0.0 custom, theme_store_id null) · home→PDP→PLP→search→cart page+drawer→content→footer→mobile · 71 obs · 0 yeni şema · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/bestsellers/2-up/marquee/ugc/community/ig/footer | [ ] capture | [ ] |
| Header kapalı + Shop mega 1440 | [ ] interact | [ ] |
| Search overlay `slam` | [ ] interact | [ ] |
| Cart drawer empty + filled (Water Slide) | [ ] interact | [ ] |
| Mobile hamburger 375+768 | [ ] interact | [ ] |
| PDP `/products/slam-dunk-hydrating-moisturizer` | [ ] | [ ] |
| PLP `/collections/shop` | [ ] | [ ] |
| Search `/search?q=slam` | [ ] | [ ] |
| Cart `/cart` boş sayfa | [ ] | [ ] |
| About `/pages/about` | [ ] | [ ] |
| FAQ `/pages/faq` | [ ] | [ ] |
| Contact `/pages/contact-us` | [ ] | [ ] |
| Privacy page + terms + ambassador T&Cs | [ ] | [ ] |
| Blog list + HelloBubble post | [ ] | [ ] |
| Store locator | [ ] | [ ] |
| Community + Built by Dermatologists | [ ] | [ ] |
| 404 template | [ ] | [ ] |
| Custom domain hellobubble.com | ⛔ CF leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 3 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 5 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 6 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 7 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 8 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 9 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | navigation-header-mega | home | [ ] interact | [x] | reuse | [ ] |
| 12 | global-cart-drawer | home | [ ] interact | [x] | reuse | [ ] |
| 13 | global-predictive-search | home | [ ] interact | [x] | reuse | [ ] |
| 14 | global-menu-drawer | home | [ ] interact | [x] | reuse | [ ] |
| 15–21 | PDP buy box + accordion + routine | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 23 | search-results | search | [ ] | [x] | reuse | [ ] |
| 24 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 25–33 | about editorial/video/ig | about-brand | [ ] | [x] | reuse | [ ] |
| 34–39 | FAQ header + 5 accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 40–42 | contact | contact | [ ] | [x] | reuse | [ ] |
| 43–45 | policy | policy | [ ] | [x] | reuse | [ ] |
| 46–47 | blog | blog-* | [ ] | [x] | reuse | [ ] |
| 48–50 | store locator | store-locator | [ ] | [x] | reuse | [ ] |
| 51–59 | community | community | [ ] | [x] | reuse | [ ] |
| 60–70 | dermatologists | dermatologists | [ ] | [x] | reuse | [ ] |
| 71 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/hellobubble-leftovers.md`](../candidates/hellobubble-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] PDP / PLP / search / cart 3vp
- [ ] Content templates 3vp
- [ ] Drawer / search / mega / mobile interact
- [ ] PNG bak → stateFindings
