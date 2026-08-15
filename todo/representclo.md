# Todo — Represent Clo (representclo.com)

*Kaynak:* https://representclo.com · *Preset:* `default`  
*Tema (storefront):* **represent-us/main** (`Shopify.theme.name`) · `schema_name`: Blank Shopify Theme · `theme_store_id`: null (custom) · role `main` · id `131742433489`  
*Shop:* `representclo-us.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (piksel değişen)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/representclo/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/representclo/`, `evidence/representclo/`, `todo/representclo.md`, `candidates/representclo-*.md` |

**Kapsam satırı:**  
`Represent Clo · default · represent-us/main (custom Blank) · home→PDP→PLP→search→cart→content→footer→mobile · 43 obs · 0 yeni şema · leftover: vault gate / prestige tiers / Yotpo / Tagalys / 404 / Zendesk / PII`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home split + header/footer | ✅ | ⬜ capture |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact plan | ⬜ |
| PDP `/products/247-dna-oversized-t-shirt-jet-black-26` | ✅ | ⬜ |
| PLP `/collections/mens-247` | ✅ | ⬜ |
| Vault `/collections/vault` (kapalı) | ✅ | ⬜ |
| Search `/search?q=t-shirt` | ✅ | ⬜ |
| Cart `/cart` boş + drawer | ✅ | ⬜ |
| 247-home / represent-home landings | ✅ | ⬜ |
| About `/pages/about` | ✅ | ⬜ |
| Prestige `/pages/prestige` | ✅ | ⬜ |
| Retail / Reviews / Stockists / Press | ✅ | ⬜ |
| Policy accessibility + native privacy | ✅ | ⬜ |
| Blog list + post | ✅ | ⬜ |
| 404 `/pages/faq` `/pages/contact` | ⛔ candidate | — |
| Tracking / wishlist / login / newsletter | ⛔ PII / app | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 2 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 3 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 4 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 5 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 6 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 7 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 8 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | product-detail | [ ] | [x] | reuse | [ ] |
| 10 | product-showcase-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 11 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 12 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 13 | editorial-image-with-text-overlay | collection-vault | [ ] | [x] | reuse | [ ] |
| 14 | search-results | search | [ ] | [x] | reuse | [ ] |
| 15 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 16–19 | about editorial/timeline/hero | about-brand | [ ] | [x] | reuse | [ ] |
| 20–25 | 247-home heroes/grid/scroll | landing-247 | [ ] | [x] | reuse | [ ] |
| 26–29 | represent-home | landing-represent | [ ] | [x] | reuse | [ ] |
| 30–33 | prestige hero/split/FAQ | prestige | [ ] | [x] | reuse | [ ] |
| 34 | collection-nav-banners | retail | [ ] | [x] | reuse | [ ] |
| 35 | testimonial-quote-carousel | reviews | [ ] | [x] | reuse | [ ] |
| 36–37 | stockists | stockists | [ ] | [x] | reuse | [ ] |
| 38–39 | press | press | [ ] | [x] | reuse | [ ] |
| 40–41 | policy | policy | [ ] | [x] | reuse | [ ] |
| 42–43 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişen)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | ⬜ | 1440 Shop hover |
| global-predictive-search | initial, input | ⬜ | `t-shirt` |
| global-cart-drawer | initial, filled | ⬜ | DNA tee M |
| global-menu-drawer | open | ⬜ | 375/768 hamburger |
| faq-collapsible-tabs | changed | ⬜ | What is Prestige? |

---

## Aday / leftover

[`candidates/representclo-leftovers.md`](../candidates/representclo-leftovers.md) · [`candidates/representclo-404s.md`](../candidates/representclo-404s.md)

---

## Evidence backlog

- [ ] Claiming 43 obs resmi 3vp
- [ ] Overlay / mega / search / cart / menu / FAQ interact
- [ ] Cart qty `changed` — leftover
- [ ] PLP Filter & Sort panel — leftover
- [ ] 247 mega — leftover
- [ ] Newsletter / login / tracking form — **yapılmayacak** (PII)
