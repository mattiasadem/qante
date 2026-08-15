# Todo — Fellow (fellowproducts.com)

*Kaynak:* https://fellowproducts.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **3.2.0 | Opus 2 | 7.29** · `schema_name`: **Fellow Foundation** · `theme_store_id`: null (custom) · shop `fellow-products.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact bitti  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/fellow/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **230** (27 interact) |
| Observation | **68** · 67 tam 3vp · menu 1440 N/A |
| Parallel | yalnız `observations/fellow/`, `evidence/fellow/`, `todo/fellow.md`, `candidates/fellow-*.md` |

**Kapsam satırı:**  
`Fellow · default · Fellow Foundation / 3.2.0 | Opus 2 | 7.29 · home→PDP→PLP→search→cart drawer→content→footer→mobile · 68 obs · 0 yeni şema · 230 PNG · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | [x] |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | [x] (menu 1440 N/A) |
| PDP `/products/ode-brew-grinder-gen-2` | ✅ swatch/FAQ | [x] |
| PLP `/collections/kettles` + bestsellers | ✅ | [x] |
| Search `/search?q=ode` | ✅ | [x] |
| Cart page `/cart` | ⛔ drawer-only | — |
| About `/pages/about-us` | ✅ | [x] |
| Contact `/pages/contact-us` | ✅ (form yok) | [x] |
| Wholesale / careers | ✅ | [x] |
| Store locator | ✅ + map aday | [x] |
| Policy privacy | ✅ | [x] |
| Blog `/blogs/learn` + matcha article | ✅ | [x] |
| Fellow Drops | ✅ SMS doldurulmadı | [x] |
| Compare grinders | ✅ | [x] |
| Shipping info (FAQ stand-in) | ✅ | [x] |
| 404 `/pages/faq` `/pages/support` | ⛔ aday + page-content-main | [x] |
| Mobile 375 menu | ✅ | [x] 375/768 |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 7 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 8 | editorial-image-with-text.2 (SMS CTA) | home | [x] | [x] | reuse | [x] |
| 9 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 10 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 11 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 12 | editorial-image-with-text.3 (About) | home | [x] | [x] | reuse | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 14 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 15 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 16 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 17 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 18 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 19 | features-slider-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 20 | comparison-quick-table | product-detail | [x] | [x] | reuse | [x] |
| 21 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 22 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 23 | collection-banner + nav-slider + grid-plp | collection | [x] | [x] | reuse | [x] |
| 24 | search-results | search | [x] | [x] | reuse | [x] |
| 25 | about / contact / wholesale / careers / locator / policy / blog / drops / compare / shipping / 404 | mixed | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Featured hover: Best Sellers… + Featured kartlar. 1. deneme kapalı homepage; 2. deneme panel göründü. Click yasak. |
| global-menu-drawer | open | 375/768 `#menu-drawer`: FELLOW + X + Featured…Academy `>` + Search/Account. 1440 N/A. 1. deneme `#mobile-menu-drawer` 0×0. |
| global-predictive-search | initial, input | Boş bar + chip. `ode` → Collections / Products (Ode Gen 2 $399.95, brush $5) / Articles. `#searchInput` yok. |
| global-cart-drawer | initial, filled | Boş + Why Not Add. Dolu: Cart (2) Ode $399.95 + Drops $25→$0, free shipping, Proceed to Checkout (girilmedi). |
| product-info-main | changed | Matte Black $399.95 / Late August → Matte White $395.00 / Early September. |
| faq-collapsible-tabs (PDP) | changed | Register sorusu açık (form linki, 29 Haz 2021+ ABD). |

---

## Aday / leftover

[`candidates/fellow-leftovers.md`](../candidates/fellow-leftovers.md) · [`candidates/fellow-404s.md`](../candidates/fellow-404s.md)

- `/cart` sayfa yok → `?modals=cart-drawer-dialog`
- Yotpo Reviews/Q&A (PDP ~2487px)
- Store locator liquid harita
- Careers job board liquid
- Drops SMS widget (PII)
- `/pages/faq` `/pages/support` `/collections/grinders` `/pages/about` 404
- Filter & Sort panel, cart qty `changed`, menu chevron `changed`, recently_viewed 0px

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (menu 1440 hamburger yok)
- [x] Overlay / swatch / FAQ interact
- [x] PNG bak → stateFindings düzelt
