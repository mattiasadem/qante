# Todo — Buck Mason (buckmason.com)

*Kaynak:* https://buckmason.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` **yok**. Platform **Gatsby 5.15.0** (`meta[name="generator"]`). `Shopify.shop` yok; yalnız `customerPrivacy` + `trackingConsent` (`@shopify/consent-tracking-api` v0.1). Shop files CDN `1/0123/5065/2473`. `buckmason.myshopify.com` **404**. `#shopify-section-*` yok. `/cart` home’a yönlenir; `/cart.js` 404.

**Durum:** Mod A walk + resmi 3vp + interact kapandı  
**PR:** https://github.com/mattiasadem/qante/pull/104 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/buckmason/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **102** |
| Validator | 65 şema · 0 error · 0 warn |
| Parallel | yalnız `observations/buckmason/`, `evidence/buckmason/`, `todo/buckmason.md`, `candidates/buckmason-*.md` |

**Kapsam satırı:**  
`Buck Mason · default · Gatsby 5.15.0 (Shopify.theme yok) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 23 obs · 102 PNG · 0 yeni şema · leftover: candidates/buckmason-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ resmi |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ |
| PDP Field-Spec Cotton Heavy Tee | ✅ + size L | ✅ |
| PLP `/collections/mens-new-arrivals` | ✅ | ✅ |
| Search `/search` popular + overlay input | ✅ | ✅ (öneri yok) |
| Cart `/cart` sayfa | ⛔ home redirect | leftover |
| About `/pages/our-story` | ✅ 2 temsilci | ✅ |
| FAQ `/pages/faq` | ✅ return açık | ✅ |
| Policy `/pages/privacy` | ✅ | ✅ |
| Journal list + post | ✅ | ✅ |
| Stores / Mills / Careers / 404 | ⛔ leftover | — |
| Newsletter / login / checkout | ⛔ PII yok | — |

---

## Bileşen roster (23)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 6 | promo-grid-banner.2 | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 8 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 9 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 10 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 11 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 12 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 13 | product-info-tabs | product-detail | [x] | [x] | reuse | [x] |
| 14 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 15 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 16 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 17 | search-results | search | [x] | [x] | reuse | [x] |
| 18 | editorial-image-with-text-overlay | about-brand | [x] | [x] | reuse | [x] |
| 19 | editorial-image-with-text | about-brand | [x] | [x] | reuse | [x] |
| 20 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 21 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 22 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 23 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişen)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | ✅ | open yalnız 1440 Men hover (kolon + promo) |
| global-predictive-search | initial, input | ✅ | `chambray` yazıldı; ürün listesi gelmedi |
| global-cart-drawer | initial, filled, changed | ✅ | boş; tee M qty1; qty 2. 375/768 VIEW CART ara adım |
| global-menu-drawer | open | ✅ | 375/768 hamburger. 1440 N/A (unsuffixed = kapalı home) |
| product-info-main | changed | ✅ | Beden L; ATC Add to Cart $62 |
| product-info-tabs | changed | ✅ | FABRIC açık (310 GSM / care / origin) |
| faq-collapsible-tabs | changed | ✅ | Return policy 365 day |

---

## Aday / leftover

[`candidates/buckmason-leftovers.md`](../candidates/buckmason-leftovers.md)

---

## Evidence backlog (bilinçli açık)

- [x] Claiming 23 obs resmi 3vp
- [x] Overlay / mega / cart / menu / PDP / FAQ interact
- [ ] Predictive ürün listesi — leftover (yazı var, sonuç yok)
- [ ] Newsletter / login / checkout — **yapılmayacak** (PII)
