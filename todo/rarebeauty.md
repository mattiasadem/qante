# Todo — Rare Beauty

*Kaynak:* https://www.rarebeauty.com · *Preset:* default · Shopify live storefront (no password)

**Durum:** Mod A walk + resmi 3vp kapalı  
**PR:** (draft — main'e merge yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/rarebeauty/default/` |
| Capture | resmi `capture-observation.mjs` |
| Platform | Canlı Shopify · custom domain · theme t/127 |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Kapsam satırı | Rare Beauty · default · home→PDP→PLP→search→cart drawer→about→FAQ→policy→community · 27 obs · 0 yeni şema · leftover: blog 404 / Gorgias FAQ / Yotpo / Sephora modal / cart redirect |

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home (hero video, bestsellers carousel, learn-more, shade finder, UGC, shop-by, Rare Impact, footer) | [x] | [x] |
| Header (#header) | [x] | [x] |
| Search overlay (#search) | [x] | [x] |
| Cart drawer empty (#bag) | [x] | [x] |
| Mobile menu 375+768 | [x] | [x] (1440 N/A) |
| PDP Soft Pinch Liquid Blush | [x] | [x] |
| PLP `/collections/bestsellers` | [x] | [x] |
| Search `/search?q=blush` | [x] | [x] |
| About `/pages/about` | [x] | [x] |
| FAQ `/pages/faqs` (Gorgias embed) | [x] | [x] |
| Privacy `/policies/privacy-policy` | [x] | [x] |
| Community `/pages/community` | [x] | [x] |
| Blog | ⛔ 404 leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 2 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 3 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 4 | editorial-image-with-text | home | [x] learn-more | [x] | reuse | [x] |
| 5 | editorial-image-with-text.2 | home | [x] shade finder | [x] | reuse | [x] |
| 6 | media-shop-the-feed | home | [x] UGC | [x] | reuse | [x] |
| 7 | collection-nav-cards | home | [x] shop-by | [x] | reuse | [x] |
| 8 | editorial-image-with-text.3 | home | [x] Rare Impact | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] PII yok | [x] | reuse | [x] |
| 10 | global-cart-drawer | home | [x] empty | [x] | reuse | [x] |
| 11 | global-predictive-search | home | [x] overlay | [x] | reuse | [x] |
| 12 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 13 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 14 | product-info-tabs | product-detail | [x] accordion | [x] | reuse | [x] |
| 15 | testimonial-quote-carousel | product-detail | [x] Selena quote | [x] | reuse | [x] |
| 16 | features-multicolumn | product-detail | [x] tips | [x] | reuse | [x] |
| 17 | media-shop-the-feed.2 | product-detail | [x] UGC | [x] | reuse | [x] |
| 18 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 19 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 20 | search-results | search | [x] | [x] | reuse | [x] |
| 21–24 | about-brand editorial + quote | about-brand | [x] | [x] | reuse | [x] |
| 25 | page-content-main | faq-support | [x] Gorgias | [x] | reuse | [x] |
| 26 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 27 | page-content-main | community | [x] | [x] | reuse | [x] |

---

## Aday / şemaya sığmayan

→ `candidates/rarebeauty-leftovers.md`

---

## Evidence backlog

- [x] Home static 3vp + chrome overlays
- [x] PDP / PLP / search 3vp
- [x] Content templates (about, FAQ shell, policy, community)
- [x] Drawer / search / mobile menu
