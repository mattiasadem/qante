# Todo — Fellow (fellowproducts.com)

*Kaynak:* https://fellowproducts.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **3.2.0 | Opus 2 | 7.29** · `schema_name`: **Fellow Foundation** · `theme_store_id`: null (custom) · shop `fellow-products.myshopify.com`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact **henüz çekilmedi** (bu revizyon observation/todo/aday)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/fellow/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/fellow/`, `evidence/fellow/`, `todo/fellow.md`, `candidates/fellow-*.md` |

**Kapsam satırı (hedef):**  
`Fellow · default · Fellow Foundation / 3.2.0 | Opus 2 | 7.29 · home→PDP→PLP→search→cart drawer→content→footer→mobile · 68 obs · 0 yeni şema · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ obs | ⬜ capture |
| Mega / search overlay / cart drawer / mobile menu | ✅ obs + interact adımları | ⬜ |
| PDP `/products/ode-brew-grinder-gen-2` | ✅ + swatch/FAQ interact | ⬜ |
| PLP `/collections/kettles` + bestsellers | ✅ | ⬜ |
| Search `/search?q=ode` | ✅ | ⬜ |
| Cart page `/cart` | ⛔ drawer-only redirect | — |
| About `/pages/about-us` | ✅ | ⬜ |
| Contact `/pages/contact-us` | ✅ (form yok; chat kartları) | ⬜ |
| Wholesale / careers | ✅ | ⬜ |
| Store locator | ✅ + map aday | ⬜ |
| Policy privacy | ✅ Shopify native | ⬜ |
| Blog `/blogs/learn` + matcha article | ✅ | ⬜ |
| Fellow Drops | ✅ SMS form doldurulmadı | ⬜ |
| Compare grinders | ✅ | ⬜ |
| Shipping info (FAQ stand-in) | ✅ | ⬜ |
| 404 `/pages/faq` `/pages/support` | ⛔ aday + page-content-main | ⬜ |
| Mobile 375 menu | ✅ interact | ⬜ |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-slider | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 7 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 8 | editorial-image-with-text.2 (SMS CTA) | home | [ ] | [x] | reuse | [ ] |
| 9 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 10 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 11 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 12 | editorial-image-with-text.3 (About) | home | [ ] | [x] | reuse | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 14 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 15 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 16 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | features-slider-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | comparison-quick-table | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | collection-banner + nav-slider + grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 24 | search-results | search | [ ] | [x] | reuse | [ ] |
| 25 | about / contact / wholesale / careers / locator / policy / blog / drops / compare / shipping / 404 | mixed | [ ] | [x] | reuse | [ ] |

---

## Interact (plan — piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Featured **hover** (click koleksiyona kaçar) |
| global-menu-drawer | open | 375/768 `button[aria-controls=mobile-menu-drawer]` |
| global-predictive-search | input | fill `ode` |
| global-cart-drawer | initial, filled | boş + Ode ATC |
| product-info-main | changed | Matte White swatch |
| faq-collapsible-tabs (PDP) | changed | ilk soru |

---

## Aday / leftover

[`candidates/fellow-leftovers.md`](../candidates/fellow-leftovers.md)

- `/cart` sayfa yok → `?modals=cart-drawer-dialog`
- Yotpo Reviews/Q&A (PDP ~2487px)
- Store locator liquid harita
- Careers job board liquid
- Drops SMS widget (PII)
- `/pages/faq` `/pages/support` `/collections/grinders` `/pages/about` 404
- Filter & Sort panel, cart qty `changed`, recently_viewed 0px

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / swatch / FAQ interact
- [ ] PNG bak → stateFindings düzelt
