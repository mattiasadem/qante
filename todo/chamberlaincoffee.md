# Todo — Chamberlain Coffee

*Kaynak:* https://chamberlaincoffee.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* Theme Store / `Shopify.theme.name` **yok**. Platform **Shopify Hydrogen + Oxygen + Sanity CMS**. Shop `chamberlaincoffee.myshopify.com`.

**Durum:** Mod A walk — observation JSON yazıldı; resmi 3vp + interact sırada  
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
`Chamberlain Coffee · default · Hydrogen/Oxygen/Sanity · home→PDP→PLP→search→cart→content→footer→mobile · 41 obs · 0 yeni şema · leftover: search page / Destini / Gorgias FAQ / Okendo / 404s`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | JSON | [ ] |
| Hero next / search overlay / cart drawer / mobile menu | JSON interact | [ ] |
| PDP `/products/vanilla-matcha-green-tea-powder` | JSON | [ ] |
| PLP `/collections/browse-all` | JSON | [ ] |
| Search `/search?q=matcha` | ⛔ hydrate boş | leftover |
| Cart `/cart` → `/?viewcart=true` | drawer | [ ] |
| About `/pages/about-us` | JSON | [ ] |
| Contact `/pages/contact` (form yok) | JSON | [ ] |
| Cafe `/pages/chamberlain-coffee-cafe` | JSON | [ ] |
| Store locator | heading + Destini aday | [ ] |
| Recipes `/pages/recipes` | JSON | [ ] |
| Blog `/blogs/inspiration` + iced matcha yazısı | JSON | [ ] |
| Privacy / Terms / Shipping | JSON | [ ] |
| FAQ | Gorgias dış | leftover |
| 404 | aday | — |

---

## Bileşen roster (41)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] + next | [x] | reuse | [ ] |
| 4 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 8 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] empty/fill | [x] | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] open/input | [x] | reuse | [ ] |
| 13 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 14 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | product-info-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 20 | search-results | search | [ ] boş | [x] | reuse | leftover |
| 21–27 | about (7) | about-brand | [ ] | [x] | reuse | [ ] |
| 28–29 | contact (2) | contact | [ ] | [x] | reuse | [ ] |
| 30–32 | cafe (3) | cafe | [ ] | [x] | reuse | [ ] |
| 33 | page-content-main | store-locator | [ ] | [x] | reuse | [ ] |
| 34–35 | recipes (2) | recipes | [ ] | [x] | reuse | [ ] |
| 36–37 | blog list (2) | blog-list | [ ] | [x] | reuse | [ ] |
| 38 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 39–41 | policy ×3 | policy | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| hero-slideshow | changed | Next slayt — kare bekleniyor |
| global-predictive-search | open + input | vanilla → boş sonuç (gözlendi) |
| global-cart-drawer | empty / filled / qty | kare bekleniyor |
| global-menu-drawer | open 375/768 | nav.navMenu |

---

## Aday / leftover

[`candidates/chamberlaincoffee-leftovers.md`](../candidates/chamberlaincoffee-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Chrome interact
- [ ] PDP / PLP 3vp
- [ ] Content templates 3vp
- [ ] Validator
