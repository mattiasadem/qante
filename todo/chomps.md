# Todo — Chomps (chomps.com)

*Kaynak:* https://chomps.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[📆 Back to Routine] PRODUCTION THEME v2.9.4`** · `schema_name`: null · `theme_store_id`: null (custom) · theme id `151474143301` · `chomps.myshopify.com`

**Durum:** Mod A walk yazıldı — resmi 3vp / interact henüz koşuluyor  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/chomps/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/chomps/`, `evidence/chomps/`, `todo/chomps.md`, `candidates/chomps-*.md` |

**Kapsam satırı (hedef):**  
`Chomps · default · [📆 Back to Routine] PRODUCTION THEME v2.9.4 · custom Shopify · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/instagram | ⬜ obs yazıldı | ⬜ |
| Mega / search overlay / cart drawer / mobile menu | ⬜ interact adımları yazıldı | ⬜ |
| PDP `/products/gluten-free-snack-beef-jerky-stick-original` | ⬜ | ⬜ |
| PLP `/collections/chomps` | ⬜ | ⬜ |
| Search `/search?q=beef` | ⬜ | ⬜ |
| Cart `/cart` | ⛔ drawer-only (`/?viewcart=true`) | — |
| About `/pages/our-story` | ⬜ | ⬜ |
| Mission `/pages/our-mission` (hero + Non-UPF FAQ) | ⬜ | ⬜ |
| Contact `/pages/contact` | ⬜ form yok / portal | ⬜ |
| Blog list + article Types of Jerky | ⬜ | ⬜ |
| Policy privacy-notice | ⬜ | ⬜ |
| Subscribe & Save | ⬜ | ⬜ |
| Where to buy / rewards / 404 / help.chomps / refer | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] |
| 4 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 5 | global-cart-drawer | home | [ ] | [x] | [x] | [ ] |
| 6 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 7 | hero-slideshow | home | [ ] | [x] | [x] | [ ] |
| 8 | features-multicolumn | home | [ ] | [x] | [x] | [ ] |
| 9 | promo-scrolling-marquee | home | [ ] | [x] | [x] | [ ] |
| 10 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] |
| 11 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 12 | features-multicolumn-2 | home | [ ] | [x] | [x] | [ ] |
| 13 | promo-scrolling-marquee-2 | home | [ ] | [x] | [x] | [ ] |
| 14 | testimonial-quote-carousel | home | [ ] | [x] | [x] | [ ] |
| 15 | editorial-image-with-text-2 | home | [ ] | [x] | [x] | [ ] |
| 16 | editorial-image-with-text-overlay | home | [ ] | [x] | [x] | [ ] |
| 17 | features-multicolumn-3 | home | [ ] | [x] | [x] | [ ] |
| 18 | social-proof-brand-logos | home | [ ] | [x] | [x] | [ ] |
| 19 | blog-list-main | home | [ ] | [x] | [x] | [ ] |
| 20 | media-shop-the-feed | home | [ ] | [x] | [x] | [ ] |
| 21 | product-info-main | product-detail | [ ] | [x] | [x] | [ ] |
| 22 | features-multicolumn | product-detail | [ ] | [x] | [x] | [ ] |
| 23 | editorial-image-with-text | product-detail | [ ] | [x] | [x] | [ ] |
| 24 | comparison-quick-table | product-detail | [ ] | [x] | [x] | [ ] |
| 25 | promo-scrolling-marquee | product-detail | [ ] | [x] | [x] | [ ] |
| 26 | testimonial-quote-carousel | product-detail | [ ] | [x] | [x] | [ ] |
| 27 | product-showcase-grid-featured | product-detail | [ ] | [x] | [x] | [ ] |
| 28 | editorial-image-with-text-2 | product-detail | [ ] | [x] | [x] | [ ] |
| 29 | faq-collapsible-tabs | product-detail | [ ] | [x] | [x] | [ ] |
| 30 | blog-list-main | product-detail | [ ] | [x] | [x] | [ ] |
| 31 | collection-banner | collection | [ ] | [x] | [x] | [ ] |
| 32 | collection-nav-icon-buttons | collection | [ ] | [x] | [x] | [ ] |
| 33 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 34 | editorial-image-with-text | collection | [ ] | [x] | [x] | [ ] |
| 35 | blog-list-main | collection | [ ] | [x] | [x] | [ ] |
| 36 | search-results | search | [ ] | [x] | [x] | [ ] |
| 37–41 | about-brand (5) | about-brand | [ ] | [x] | [x] | [ ] |
| 42–43 | mission hero + FAQ | about-brand | [ ] | [x] | [x] | [ ] |
| 44–45 | contact (2) | contact | [ ] | [x] | [x] | [ ] |
| 46 | blog-list-main | blog-list | [ ] | [x] | [x] | [ ] |
| 47–50 | blog-post (4) | blog-post | [ ] | [x] | [x] | [ ] |
| 51 | page-content-main | policy | [ ] | [x] | [x] | [ ] |
| 52–56 | subscribe (5) | subscribe | [ ] | [x] | [x] | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 `#shop-label` |
| global-predictive-search | initial, input | `#searchForm` = `beef` |
| global-cart-drawer | initial, filled, changed | `#cartButton` · ATC Original Beef |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | changed | 24 pack (selector kareye bağlı) |
| faq-collapsible-tabs (PDP + mission) | changed | ilk soru |

PLP chip tıkı başka koleksiyon URL'sine gider — in-page filter değil, interact yok.

---

## Aday / leftover

[`candidates/chomps-leftovers.md`](../candidates/chomps-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / FAQ / pack interact
- [ ] Capture sonrası PNG bak — aynı kareyse missingStates
