# Todo — Atoms (atoms.com)

*Kaynak:* https://atoms.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **görünmüyor** — `Shopify.theme` / `schema_name` / Theme Store id yok  
*Platform:* **Shopify Hydrogen + Oxygen + Pack Digital + Playbook** (`powered-by: Shopify, Oxygen, Hydrogen, Hydrogen + Pack Digital`) · shop `atoms-k2.myshopify.com`

**Durum:** Mod A walk kapandı · 43 obs · 144 PNG · 0 yeni şema  
**PR:** draft https://github.com/mattiasadem/qante/pull/78 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/atoms/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/atoms/`, `evidence/atoms/`, `todo/atoms.md`, `candidates/atoms-*.md` |

**Kapsam satırı:**  
`Atoms · default · Hydrogen+Pack Digital+Playbook · tema adı yok · home→PDP→PLP→search→cart→content→footer→mobile · 43 obs · 144 PNG · 0 yeni şema · leftover: theme-name / faq.atoms.com / returns / mailto / refer-PII / quiz-iframe / reviews / Notify-me`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | done | [x] |
| Mega 1440 Men / search `black` / cart empty+filled / mobile menu | done | [x] |
| PDP `/products/atoms-model-000-black` | done | [x] + Sizing & Fit |
| PLP `/collections/all-atoms-shoes` | done | [x] (filtre leftover) |
| Search `/search?q=black` (`/search` 500) | done | [x] |
| Cart `/cart` + drawer | done | [x] filled 375/768/1440 socks |
| About `/about` | done | [x] |
| Help `/help` | done | [x] |
| FAQ `/faq251` (genel FAQ dış) | done | [x] + ilk soru |
| Privacy + size chart + 404 | done | [x] |
| Blog list + `/articles/…` | done | [x] |
| Quiz / subscription / vs-Allbirds / tech / CSR / testimonials | done temsilci | [x] |
| faq.atoms.com / returns.atoms.com / refer PII | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + Men 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 8 | features-multicolumn | home | [x] accordion leftover | [x] | reuse | [x] |
| 9 | product-showcase-grid-featured.2 | home | [x] Picked for you | [x] | reuse | [x] |
| 10 | features-multicolumn.2 | home | [x] | [x] | reuse | [x] |
| 11 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 12 | social-proof-brand-logos | home | [x] logo tık leftover | [x] | reuse | [x] |
| 13 | editorial-image-with-text.2 | home | [x] Sidra | [x] | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] PII yok | [x] | reuse | [x] |
| 15 | global-cart-drawer | home | [x] empty + filled 3vp | [x] | reuse | [x] |
| 16 | global-predictive-search | home | [x] `black` 3vp | [x] | reuse | [x] |
| 17 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 18–23 | PDP 6 section | product-detail | [x] + Sizing & Fit | [x] | reuse | [x] |
| 24–25 | PLP grid + UGC | collection | [x] | [x] | reuse | [x] |
| 26 | search-results | search | [x] | [x] | reuse | [x] |
| 27 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 28–29 | About + founder copy | about-brand | [x] | [x] | reuse | [x] |
| 30 | features-multicolumn | tech | [x] | [x] | reuse | [x] |
| 31 | editorial-rich-text.2 | csr | [x] | [x] | reuse | [x] |
| 32 | testimonial-quote-carousel | testimonials | [x] | [x] | reuse | [x] |
| 33–36 | quiz / sub / vs-Allbirds / discount | landing-campaign | [x] | [x] | reuse | [x] |
| 37–38 | Help cards + FAQ251 | faq-support | [x] + accordion | [x] | reuse | [x] |
| 39–41 | privacy / size chart / 404 | policy | [x] | [x] | reuse | [x] |
| 42–43 | blog list + article | blog-* | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Men mega |
| global-predictive-search | input | [x] 3vp `black` Suggestions + Products |
| global-cart-drawer | filled | [x] ATC socks; 375/768/1440 drawer |
| global-menu-drawer | open | [x] 375/768 hamburger |
| product-info-main | changed | [x] Sizing & Fit; White swatch leftover |
| faq-collapsible-tabs | changed | [x] ilk soru açık (caclelation) |

---

## Aday / leftover

[`candidates/atoms-leftovers.md`](../candidates/atoms-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / search / cart / menu / PDP accordion / FAQ interact
- [ ] White swatch / home features accordion / press logo tabs / PLP filters
- [ ] Quiz adımları / reviews / Notify-me sizes
- [ ] Newsletter / refer / ID.me / account — **yapılmayacak** (PII)
