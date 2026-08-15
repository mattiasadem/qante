# Todo — Chamberlain Coffee

*Kaynak:* https://chamberlaincoffee.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* Theme Store / `Shopify.theme.name` **yok**. Platform **Shopify Hydrogen + Oxygen + Sanity CMS**. Shop `chamberlaincoffee.myshopify.com`.

**Durum:** Mod A walk + resmi 3vp + interact (PNG bakıldı)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/chamberlaincoffee/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/chamberlaincoffee/`, `evidence/chamberlaincoffee/`, `todo/chamberlaincoffee.md`, `candidates/chamberlaincoffee-*.md` |

**Kapsam satırı:**  
`Chamberlain Coffee · default · Hydrogen/Oxygen/Sanity · tema adı yok · home→PDP→PLP→search overlay→cart drawer→content→footer→mobile · 42 obs · 137 PNG · 0 yeni şema · leftover candidates/chamberlaincoffee-leftovers.md`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | [x] |
| Hero dots / search overlay / cart / mobile menu | ✅ interact | [x] 375 hero slayt2 leftover |
| PDP `/products/vanilla-matcha-green-tea-powder` | ✅ | [x] |
| PLP `/collections/browse-all` | ✅ | [x] filtre leftover |
| Search `/search?q=matcha` | ⛔ hydrate boş | leftover |
| Cart `/cart` → `/?viewcart=true` | drawer | [x] empty/filled/qty |
| About `/pages/about-us` | ✅ | [x] |
| Contact `/pages/contact` (form yok) | ✅ | [x] |
| Cafe `/pages/chamberlain-coffee-cafe` | ✅ | [x] extra multiColumn leftover |
| Store locator | heading + Destini aday | [x] heading |
| Recipes `/pages/recipes` | ✅ | [x] |
| Blog `/blogs/inspiration` + iced matcha yazısı | ✅ | [x] |
| Privacy / Terms / Shipping | ✅ | [x] |
| FAQ | Gorgias dış | leftover |
| 404 | aday | — |

---

## Bileşen roster (42)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] viewport | [x] mega yok | reuse | [x] |
| 3 | hero-slideshow | home | [x] + dots | [x] 375 slayt2 leftover | reuse | [x] |
| 4 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 8 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 9 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 11 | global-cart-drawer | home | [x] empty/fill/qty | [x] Hydrogen UI | reuse | [x] |
| 12 | global-predictive-search | home | [x] open/input 3vp | [x] vanilla boş | reuse | [x] |
| 13 | global-menu-drawer | home | [x] 375/768 | [x] 1440 N/A | reuse | [x] |
| 14 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 15 | product-info-tabs | product-detail | [x] | [x] geeky-details | reuse | [x] |
| 16 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 17 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 19 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 20 | search-results | search | [ ] boş | [x] | reuse | leftover |
| 21–27 | about (7) | about-brand | [x] | [x] | reuse | [x] |
| 28–29 | contact (2) | contact | [x] | [x] form yok | reuse | [x] |
| 30–33 | cafe (4) | cafe | [x] | [x] + lookbook | reuse | [x] |
| 34 | page-content-main | store-locator | [x] heading | [x] Destini aday | reuse | [x] |
| 35–36 | recipes (2) | recipes | [x] | [x] | reuse | [x] |
| 37–38 | blog list (2) | blog-list | [x] | [x] | reuse | [x] |
| 39 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 40–42 | policy ×3 | policy | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| hero-slideshow | initial, changed | ✅ 768/1440 | dots. 375 changed = slayt1 leftover |
| global-predictive-search | initial, input | ✅ | `vanilla` → boş + ALL PRODUCTS |
| global-cart-drawer | initial, filled, changed | ✅ | Vanilla Matcha qty 1→2; Hydrogen UI ATC |
| global-menu-drawer | open | ✅ 375/768 | 1440 N/A |

---

## Aday / leftover

[`candidates/chamberlaincoffee-leftovers.md`](../candidates/chamberlaincoffee-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] Chrome interact (375 hero slayt2 leftover)
- [x] PDP / PLP 3vp
- [x] Content templates 3vp
- [x] Validator
