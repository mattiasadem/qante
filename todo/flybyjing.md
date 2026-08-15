# Todo — Fly By Jing (flybyjing.com)

*Kaynak:* https://flybyjing.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **FBJ 4/1 Launch** · `schema_name`: **Shapes** · `schema_version`: **3.0.4** · `theme_store_id`: **1535** · theme id `126525112378` · `fly-by-jing.myshopify.com` · role `main`

**Durum:** Mod A walk + resmi 3vp + interact (piksel değişenler)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/flybyjing/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/flybyjing/`, `evidence/flybyjing/`, `todo/flybyjing.md`, `candidates/flybyjing-*.md` |

**Kapsam satırı:**  
`Fly By Jing · default · FBJ 4/1 Launch (Shapes 3.0.4, theme_store_id 1535) · home→PDP→PLP→search→cart→content→footer→mobile · 51 obs · 0 yeni şema · leftover: 404 / Costco LP / SMS / creator form / shop noodles+merch grids`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | [x] | [ ] capture |
| Mega (yok) / search overlay / cart drawer / mobile menu | [x] interact | [ ] |
| PDP `/products/sichuan-chili-crisp` | [x] + 16 OZ | [ ] |
| Shop landing `/collections/shop` (pills + 2 featured) | [x] | [ ] |
| PLP `/collections/signature-sauces` | [x] | [ ] |
| Search `/search?q=chili` | [x] | [ ] |
| Cart `/cart` boş + dolu | [x] | [ ] |
| About `/pages/about` | [x] | [ ] |
| FAQ `/pages/faq` | [x] statik | [ ] |
| Contact `/pages/contact` form **gönderilmedi** | [x] | [ ] |
| Membership `/pages/membership` + FAQ open | [x] | [ ] |
| Store locator (iframe) | [x] | [ ] |
| Blog list + Mapo Tofu article | [x] | [ ] |
| Policy privacy | [x] | [ ] |
| Press + corporate gifting | [x] | [ ] |
| 404 / Costco / SMS / community | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | editorial-image-with-text-overlay | home | [ ] | [x] | [x] | [ ] |
| 4 | collection-nav-image-cards | home | [ ] | [x] | [x] | [ ] |
| 5 | trust-icon-row | home | [ ] | [x] | [x] | [ ] |
| 6 | social-proof-brand-logos | home | [ ] | [x] | [x] | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [x] | [x] | [ ] |
| 8 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] |
| 9 | editorial-image-with-text-2 | home | [ ] | [x] | [x] | [ ] |
| 10 | editorial-rich-text | home | [ ] | [x] | [x] | [ ] |
| 11 | blog-list-main | home | [ ] | [x] | [x] | [ ] |
| 12 | lead-capture-newsletter-band | home | [ ] | [x] | [x] | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 14 | global-cart-drawer | home | [ ] interact | [x] | [x] | [ ] |
| 15 | global-predictive-search | home | [ ] interact | [x] | [x] | [ ] |
| 16 | global-menu-drawer | home | [ ] 375+768 | [x] | [x] | [ ] |
| 17 | product-info-main | product-detail | [ ] + 16oz | [x] | [x] | [ ] |
| 18 | social-proof-brand-logos | product-detail | [ ] | [x] | [x] | [ ] |
| 19 | editorial-image-with-text | product-detail | [ ] | [x] | [x] | [ ] |
| 20 | features-multicolumn | product-detail | [ ] | [x] | [x] | [ ] |
| 21 | product-showcase-related | product-detail | [ ] | [x] | [x] | [ ] |
| 22 | testimonial-quote-carousel | product-detail | [ ] Okendo | [x] | [x] | [ ] |
| 23 | collection-nav-icon-buttons | shop-landing | [ ] | [x] | [x] | [ ] |
| 24–25 | product-showcase-grid-featured ×2 | shop-landing | [ ] | [x] | [x] | [ ] |
| 26 | collection-banner | collection | [ ] | [x] | [x] | [ ] |
| 27 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 28 | search-results | search | [ ] | [x] | [x] | [ ] |
| 29 | cart-page-main | cart | [ ] + filled | [x] | [x] | [ ] |
| 30–36 | about (7) | about-brand | [ ] | [x] | [x] | [ ] |
| 37 | faq-collapsible-tabs | faq-support | [ ] | [x] | [x] | [ ] |
| 38 | lead-capture-form | contact | [ ] | [x] | [x] | [ ] |
| 39–45 | membership (7) | membership | [ ] + FAQ | [x] | [x] | [ ] |
| 46 | page-content-main | store-locator | [ ] iframe | [x] | [x] | [ ] |
| 47 | blog-list-main | blog-list | [ ] | [x] | [x] | [ ] |
| 48 | blog-post-main | blog-post | [ ] | [x] | [x] | [ ] |
| 49 | page-content-main | policy | [ ] | [x] | [x] | [ ] |
| 50 | page-content-main | press | [ ] | [x] | [x] | [ ] |
| 51 | page-content-main | corporate-gifting | [ ] | [x] | [x] | [ ] |

---

## Interact (piksel değişecek)

| Bileşen | State | Not |
|---|---|---|
| global-predictive-search | initial, input | SEARCH → bar; `chili` → PRODUCTS/ARTICLES/PAGES |
| global-cart-drawer | initial, filled, changed | boş; Chili Crisp; qty + |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| product-info-main | changed | 16 OZ |
| cart-page-main | filled | ATC → /cart |
| membership faq | changed | HOW DO I JOIN… |

Mega yok — SHOP düz koleksiyon linki.

---

## Aday / leftover

[`candidates/flybyjing-leftovers.md`](../candidates/flybyjing-leftovers.md) · [`candidates/flybyjing-404s.md`](../candidates/flybyjing-404s.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / variant / FAQ interact
- [ ] Osano cookie bar (Accept yok; Close/Manage) — viewport karelerinde kalabilir
