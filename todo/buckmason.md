# Todo — Buck Mason (buckmason.com)

*Kaynak:* https://buckmason.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` **yok**. Platform **Gatsby 5.15.0** (`meta[name="generator"]`). `Shopify.shop` yok; yalnız `customerPrivacy` + `trackingConsent` (`@shopify/consent-tracking-api` v0.1). Shop files CDN `1/0123/5065/2473`. `buckmason.myshopify.com` **404** (“This store will be right back”). `#shopify-section-*` yok. `/cart` home’a yönlenir; `/cart.js` 404.

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/buckmason/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/buckmason/`, `evidence/buckmason/`, `todo/buckmason.md`, `candidates/buckmason-*.md` |

**Kapsam satırı:**  
`Buck Mason · default · Gatsby 5.15.0 (Shopify.theme yok) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 23 obs · 3vp sırada · 0 yeni şema · leftover: candidates/buckmason-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | [ ] resmi |
| Mega / search overlay / cart drawer / mobile menu | ✅ obs | [ ] interact |
| PDP `/products/black-field-spec-cotton-vintage-surplus-heavy-tee` | ✅ obs | [ ] + variant/tabs |
| PLP `/collections/mens-new-arrivals` | ✅ obs | [ ] |
| Search `/search` (popular) + overlay | ✅ obs | [ ] interact |
| Cart `/cart` sayfa | ⛔ home redirect — leftover | — |
| About `/pages/our-story` | ✅ 2 temsilci | [ ] |
| FAQ `/pages/faq` | ✅ | [ ] changed |
| Policy `/pages/privacy` | ✅ | [ ] |
| Journal list + post | ✅ | [ ] |
| Stores / Mills / Careers / 404 | ⛔ leftover | — |
| Newsletter / login / checkout | ⛔ PII yok | — |

---

## Bileşen roster (23)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 6 | promo-grid-banner.2 | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 9 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 10 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 11 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 13 | product-info-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 14 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 16 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 17 | search-results | search | [ ] | [x] | reuse | [ ] |
| 18 | editorial-image-with-text-overlay | about-brand | [ ] | [x] | reuse | [ ] |
| 19 | editorial-image-with-text | about-brand | [ ] | [x] | reuse | [ ] |
| 20 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 21 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 22 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 23 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişen — plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Men hover |
| global-predictive-search | initial, input | `chambray` |
| global-cart-drawer | initial, filled, changed | boş / tee M qty1 / qty+ |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | changed | beden L |
| product-info-tabs | changed | FABRIC |
| faq-collapsible-tabs | changed | return policy |

---

## Aday / leftover

[`candidates/buckmason-leftovers.md`](../candidates/buckmason-leftovers.md)

---

## Evidence backlog

- [ ] Claiming 23 obs resmi 3vp
- [ ] Overlay / mega / cart / search / menu / PDP / FAQ interact
- [ ] Newsletter / login / checkout — **yapılmayacak** (PII)
