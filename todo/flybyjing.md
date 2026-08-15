# Todo — Fly By Jing (flybyjing.com)

*Kaynak:* https://flybyjing.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **FBJ 4/1 Launch** · `schema_name`: **Shapes** · `schema_version`: **3.0.4** · `theme_store_id`: **1535** · theme id `126525112378` · `fly-by-jing.myshopify.com` · role `main`

**Durum:** Mod A walk kapandı — 51 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/63 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/flybyjing/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/flybyjing/`, `evidence/flybyjing/`, `todo/flybyjing.md`, `candidates/flybyjing-*.md` |

**Kapsam satırı:**  
`Fly By Jing · default · FBJ 4/1 Launch (Shapes 3.0.4, theme_store_id 1535) · home→PDP→PLP→search→cart→content→footer→mobile · 51 obs · 166 PNG · 0 yeni şema · leftover: 404 / Costco LP / SMS / creator form / shop noodles+merch / predictive 375`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | ✅ | ✅ |
| Mega (yok) / search overlay / cart drawer / mobile menu | ✅ interact | ✅ (search 1440; menu 375+768) |
| PDP `/products/sichuan-chili-crisp` | ✅ + 16 OZ | ✅ |
| Shop landing `/collections/shop` (pills + 2 featured) | ✅ | ✅ |
| PLP `/collections/signature-sauces` | ✅ | ✅ |
| Search `/search?q=chili` | ✅ | ✅ |
| Cart `/cart` boş + dolu | ✅ | ✅ |
| About `/pages/about` | ✅ | ✅ |
| FAQ `/pages/faq` | ✅ statik | ✅ |
| Contact `/pages/contact` form **gönderilmedi** | ✅ | ✅ |
| Membership `/pages/membership` + FAQ open | ✅ | ✅ |
| Store locator (iframe) | ✅ | ✅ |
| Blog list + Mapo Tofu article | ✅ | ✅ |
| Policy privacy | ✅ | ✅ |
| Press + corporate gifting | ✅ | ✅ |
| 404 / Costco / SMS / community | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] mega yok | [x] | [x] | [x] |
| 3 | editorial-image-with-text-overlay | home | [x] | [x] | [x] | [x] |
| 4 | collection-nav-image-cards | home | [x] | [x] | [x] | [x] |
| 5 | trust-icon-row | home | [x] | [x] | [x] | [x] |
| 6 | social-proof-brand-logos | home | [x] | [x] | [x] | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 8 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 9 | editorial-image-with-text-2 | home | [x] | [x] | [x] | [x] |
| 10 | editorial-rich-text | home | [x] | [x] | [x] | [x] |
| 11 | blog-list-main | home | [x] | [x] | [x] | [x] |
| 12 | lead-capture-newsletter-band | home | [x] | [x] | [x] | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 14 | global-cart-drawer | home | [x] boş/dolu/qty2 | [x] | [x] | [x] |
| 15 | global-predictive-search | home | [x] 1440 chili | [x] | [x] | [x] |
| 16 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] |
| 17 | product-info-main | product-detail | [x] + 16oz | [x] | [x] | [x] |
| 18 | social-proof-brand-logos | product-detail | [x] | [x] | [x] | [x] |
| 19 | editorial-image-with-text | product-detail | [x] | [x] | [x] | [x] |
| 20 | features-multicolumn | product-detail | [x] | [x] | [x] | [x] |
| 21 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] |
| 22 | testimonial-quote-carousel | product-detail | [x] Okendo | [x] | [x] | [x] |
| 23 | collection-nav-icon-buttons | shop-landing | [x] | [x] | [x] | [x] |
| 24–25 | product-showcase-grid-featured ×2 | shop-landing | [x] | [x] | [x] | [x] |
| 26 | collection-banner | collection | [x] | [x] | [x] | [x] |
| 27 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 28 | search-results | search | [x] | [x] | [x] | [x] |
| 29 | cart-page-main | cart | [x] + filled | [x] | [x] | [x] |
| 30–36 | about (7) | about-brand | [x] | [x] | [x] | [x] |
| 37 | faq-collapsible-tabs | faq-support | [x] | [x] | [x] | [x] |
| 38 | lead-capture-form | contact | [x] | [x] | [x] | [x] |
| 39–45 | membership (7) | membership | [x] + FAQ | [x] | [x] | [x] |
| 46 | page-content-main | store-locator | [x] iframe | [x] | [x] | [x] |
| 47 | blog-list-main | blog-list | [x] | [x] | [x] | [x] |
| 48 | blog-post-main | blog-post | [x] | [x] | [x] | [x] |
| 49 | page-content-main | policy | [x] | [x] | [x] | [x] |
| 50 | page-content-main | press | [x] | [x] | [x] | [x] |
| 51 | page-content-main | corporate-gifting | [x] | [x] | [x] | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| global-predictive-search | initial, input | 1440 SEARCH → kırmızı overlay; `chili` PRODUCTS/ARTICLES/PAGES. 375/768 leftover |
| global-cart-drawer | initial, filled, changed | boş; Chili Crisp $30; qty 2 / $60 / $15 to free ship |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| product-info-main | changed | 16 OZ — $32 / member $25.60 |
| cart-page-main | filled | ATC → /cart 2-Pack $30 + express pay |
| membership faq | changed | HOW DO I JOIN… cevabı açık |

Mega yok — SHOP düz `/collections/shop`.

---

## Aday / leftover

[`candidates/flybyjing-leftovers.md`](../candidates/flybyjing-leftovers.md) · [`candidates/flybyjing-404s.md`](../candidates/flybyjing-404s.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **166 PNG** (static + interact)
- [x] Overlay / variant / FAQ / cart qty
- [ ] Predictive 375/768 (header SEARCH gizli; drawer fill overlay açmadı)
- Osano cookie bar (Accept All yok) viewport karelerinde kalabilir
