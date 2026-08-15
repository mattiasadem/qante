# Todo — Kizik (kizik.com)

*Kaynak:* https://kizik.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Proteus - Production - Metafield Cleanup** · `schema_name`: **Impact** · `schema_version`: **6.5.0** · `theme_store_id`: null (custom) · shop `kizik-design.myshopify.com` · theme id `156765749405` · role `main`

**Durum:** Mod A walk — observation yazıldı · resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kizik/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/kizik/`, `evidence/kizik/`, `todo/kizik.md`, `candidates/kizik-*.md` |

**Kapsam satırı:**  
`Kizik · default · Proteus - Production - Metafield Cleanup / Impact 6.5.0 (custom, kizik-design.myshopify.com) · home→PDP vegas-2→PLP→search→cart→about-us→faqs→contact→privacy→blog→innovation→footer→mobile · 42 obs · 0 yeni şema · leftover: 404/reviews-app/locator/rewards/shogun/golf-30day`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | obs | [ ] |
| WOMEN mega 1440 / search `vegas` / cart empty+filled / mobile menu | obs | [ ] |
| PDP `/products/womens-vegas-2-bright-white` | obs | [ ] |
| PLP `/collections/womens-shoes` | obs | [ ] |
| Search `/search?q=vegas` | obs | [ ] |
| Cart `/cart` boş | obs | [ ] |
| About `/pages/about-us` | obs | [ ] |
| FAQ `/pages/faqs` | obs | [ ] |
| Contact `/pages/contact` (form **PII yok**) | obs | [ ] |
| Privacy `main#main` | obs | [ ] |
| Blog `/blogs/news` + arthritis yazı | obs | [ ] |
| Innovation `/pages/innovation` | obs | [ ] |
| Returns + size chart | obs | [ ] |
| 404 | obs + leftover | [ ] |
| Newsletter / contact submit / rewards login | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home + WOMEN 1440 | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-tabs | home WOMEN/MEN | [ ] | [x] | reuse | [ ] |
| 5 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 7 | editorial-rich-text | home Trending | [ ] | [x] | reuse | [ ] |
| 8 | editorial-dynamic-grid | home media_grid | [ ] | [x] | reuse | [ ] |
| 9 | footer-columns-newsletter | home | [ ] | [x] PII yok | reuse | [ ] |
| 10 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 11 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 12 | global-menu-drawer | home | [ ] | [x] 1440 N/A | reuse | [ ] |
| 13–18 | PDP Vegas 2 | product-detail | [ ] | [x] reviews leftover | reuse | [ ] |
| 19–20 | PLP banner/grid | collection | [ ] | [x] | reuse | [ ] |
| 21 | search-results | search | [ ] | [x] | reuse | [ ] |
| 22 | cart-page-main | cart | [ ] | [x] boş | reuse | [ ] |
| 23–27 | About-us | about-brand | [ ] | [x] | reuse | [ ] |
| 28 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 29 | lead-capture-form | contact | [ ] | [x] PII yok | reuse | [ ] |
| 30 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 31–34 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 35–39 | Innovation | landing-campaign | [ ] | [x] | reuse | [ ] |
| 40–41 | returns + size | faq-support | [ ] | [x] | reuse | [ ] |
| 42 | page-content-main | not-found | [ ] leftover | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 WOMEN mega |
| global-predictive-search | input | [ ] `vegas` |
| global-cart-drawer | filled | [ ] Vegas 2 ATC |
| global-menu-drawer | open | [ ] 375/768 |
| product-showcase-tabs | changed | [ ] MEN tab |
| product-info-main | changed | [ ] MEN |
| faq-collapsible-tabs | changed | [ ] true-to-size |

---

## Aday / leftover

[`candidates/kizik-leftovers.md`](../candidates/kizik-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / tabs / PDP / FAQ interact
- [ ] Newsletter / contact / rewards submit — **yapılmayacak** (PII)
