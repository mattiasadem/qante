# Todo — Javy / Javvy Coffee (javycoffee.com)

*Kaynak:* https://javycoffee.com → **https://javvycoffee.com/** · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **görünmüyor** — `Shopify.theme.name` / `schema_name` yok  
*Platform:* **Shopify Hydrogen + Oxygen** (`powered-by: Shopify, Oxygen, Hydrogen`) · shop `drink-javy.myshopify.com`  
*Marka yazımı vitrinde:* **Javvy** (çift v); envanter slug’ı görevden `javy`

**Durum:** Mod A walk yazıldı · resmi 3vp / interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/javy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/javy/`, `evidence/javy/`, `todo/javy.md`, `candidates/javy-*.md` |

**Kapsam satırı:**  
`Javy · default · Hydrogen/Oxygen · tema adı yok · home→PDP→PLP→search 404→cart drawer→content→footer→mobile · 50 obs · 0 yeni şema · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement ×2 | ✅ roster | [ ] capture |
| Mega | ⛔ düz link — hover panel yok | — |
| Search overlay / `/search` | ⛔ ikon yok; `/search` → `/bio` 404 | leftover |
| Cart drawer `/?openCart=true` | ✅ selector `.cart-drawer_inner` | [ ] empty + filled |
| Mobile hamburger 375/768 | ✅ `.navbar-mobile-menu` | [ ] open |
| PDP `/products/protein-coffee` | ✅ buy box + editorial kit | [ ] + flavor/FAQ interact |
| PDP `/products/coffee-concentrate` | ✅ aynı iskelet | [ ] buy box |
| Gift card `/products/gift-card` | ⛔ → `/collections/all` | leftover |
| PLP `/collections/all` + accessories | ✅ grouped + pills | [ ] |
| Deals `/deals` | ✅ kampanya vitrin | [ ] |
| Recipes list + lavender-latte | ✅ | [ ] |
| Blog `/blog/category/all` + article | ✅ | [ ] |
| Reviews `/reviews` | ✅ (Okendo leftover) | [ ] |
| Subscribe `/pages/subscription` | ✅ | [ ] |
| Store locator | ✅ title+chips; harita yok | [ ] |
| Affiliate / giveaway | ✅ | [ ] |
| About `/pages/our-impact` | ⛔ client home | leftover |
| Support / privacy `/support/*` | ✅ privacy; FAQ Gorgias | [ ] privacy |
| `/cart` sayfa | ⛔ drawer-only | — |
| 404 `/bio` | ⛔ aday | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | promo-announcement-bar.2 | home | [ ] | [x] | reuse | [ ] |
| 3 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 4 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-featured | home | [ ] | [x] | reuse | [ ] |
| 8 | blog-list-main | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 10 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 11 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 12 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 14 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 16–25 | PDP protein + concentrate | product-detail | [ ] | [x] | reuse | [ ] |
| 26–29 | PLP all + accessories | collection | [ ] | [x] | reuse | [ ] |
| 30 | deals featured | landing-campaign | [ ] | [x] | reuse | [ ] |
| 31–35 | recipes/blog | blog-list/post | [ ] | [x] | reuse | [ ] |
| 36–40 | reviews landing | about-brand | [ ] | [x] | reuse | [ ] |
| 41–45 | subscribe | landing-campaign | [ ] | [x] | reuse | [ ] |
| 46–50 | locator / affiliate / giveaway / policy | mixed | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Plan |
|---|---|---|
| global-menu-drawer | open | 375/768 hamburger |
| global-cart-drawer | initial, filled | boş `?openCart=true`; PDP ATC → dolu. Alia scratch kapat (PII yok) |
| product-info-main | changed | flavor swatch (Pumpkin Spice → başka) |
| faq-collapsible-tabs (PDP + subscribe) | changed | ilk soru |
| collection-nav-icon-buttons (PLP) | changed | Protein Coffee pill |
| blog-list recipes tabs | changed | Protein Coffee sekmesi (home veya recipes) |
| navigation-header-mega | open | **yok** — Shop All `<a>` sayfaya gider |

---

## Aday / leftover

[`candidates/javy-leftovers.md`](../candidates/javy-leftovers.md) · [`candidates/javy-404s.md`](../candidates/javy-404s.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / flavor / FAQ / menu interact
- [ ] PNG bak → stateFindings
