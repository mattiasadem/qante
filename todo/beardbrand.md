# Todo — Beardbrand (beardbrand.com)

*Kaynak:* https://beardbrand.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Split v1.0.3.7.4 [edp promo on PDPs]** · `schema_name`: Split · `schema_version`: 3.1.0 · `theme_store_id`: 842 · role `main` · theme.id `192727712114`  
*Shop:* `beardbrand.myshopify.com`

**Durum:** Mod A walk + observation yazıldı — resmi 3vp / interact / validate sırada  
**PR:** draft (main'e merge yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/beardbrand/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | henüz koşulmadı |
| Gözlem / kanıt | 37 obs · PNG capture bekliyor |
| Parallel | yalnız `observations/beardbrand/`, `evidence/beardbrand/`, `todo/beardbrand.md`, `candidates/beardbrand-*.md` |

**Kapsam satırı:**  
`Beardbrand · default · Split v1.0.3.7.4 [edp promo on PDPs] (Split 3.1.0, theme_store_id 842) · home→PDP→PLP→search→cart→content→footer→404→mobile · 37 obs · 0 yeni şema · leftover: Judge.me / Recharge drawer / FAQ statik / bundle / quiz`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | ⏳ |
| Mega Shop 1440 | ✅ interact adım | ⏳ |
| Predictive search overlay | ✅ initial+input | ⏳ |
| Cart page boş + dolu + qty | ✅ interact adım | ⏳ (drawer yok) |
| Mobile menu 375+768 | ✅ interact adım | ⏳ (1440 N/A) |
| PDP `/products/norse-winter-beard-oil` + size | ✅ obs | ⏳ |
| PLP `/collections/beard-oil` | ✅ obs | ⏳ |
| Search `/search?q=beard` | ✅ 68 sonuç | ⏳ |
| Cart `/cart` | ✅ viewport | ⏳ |
| About `/pages/about-us` | ✅ obs | ⏳ |
| FAQ `/pages/faqs` | ⛔ leftover (statik) | — |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ⏳ |
| Privacy / Legal / Returns | ✅ | ⏳ |
| Blog hub + article | ✅ | ⏳ |
| Fragrances LP | ✅ hero | ⏳ |
| Help / about / shipping / returns (kısa URL) | ⛔ leftover 404 | — |
| 404 | ✅ custom | ⏳ |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] + mega | [x] | reuse | [ ] |
| 3 | global-predictive-search | home | [ ] + input | [x] | reuse | [ ] |
| 4 | global-menu-drawer | home | [ ] 375+768 | [x] | reuse | [ ] |
| 5 | editorial-rich-text | home hero | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 7 | collection-nav-slider | home fragrance | [ ] | [x] | reuse | [ ] |
| 8 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 9 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 10 | lead-capture-newsletter-band | home | [ ] | [x] | reuse | [ ] |
| 11 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 12 | product-info-main | product-detail | [ ] + size | [x] | reuse | [ ] |
| 13 | media-video-hero | PDP | [ ] | [x] | reuse | [ ] |
| 14 | promo-scrolling-marquee | PDP | [ ] | [x] | reuse | [ ] |
| 15 | product-showcase-featured | PDP | [ ] | [x] | reuse | [ ] |
| 16 | features-multicolumn | PDP assurance | [ ] | [x] | reuse | [ ] |
| 17 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 18 | editorial-rich-text | collection | [ ] | [x] | reuse | [ ] |
| 19 | features-multicolumn | collection uses | [ ] | [x] | reuse | [ ] |
| 20 | faq-collapsible-tabs | collection | [ ] | [x] | reuse | [ ] |
| 21 | product-showcase-grid-featured | collection | [ ] | [x] | reuse | [ ] |
| 22 | search-results | search | [ ] | [x] | reuse | [ ] |
| 23 | cart-page-main | cart | [ ] empty+filled+qty | [x] | reuse | [ ] |
| 24 | product-showcase-featured | cart | [ ] | [x] | reuse | [ ] |
| 25–27 | about (3) | about-brand | [ ] | [x] | reuse | [ ] |
| 28 | page-content-main | contact | [ ] | [x] | reuse | [ ] |
| 29–32 | privacy + legal + returns | policy | [ ] | [x] | reuse | [ ] |
| 33–34 | blog hub | blog-list | [ ] | [x] | reuse | [ ] |
| 35 | blog-post-main | blog-post | [ ] viewport | [x] | reuse | [ ] |
| 36 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |
| 37 | editorial-rich-text | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover mega |
| global-predictive-search | initial, input | fill `beard oil` |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | changed | SIZE 4 fl oz. |
| cart-page-main | initial, filled, changed | /cart boş → ATC → qty+ |
| faq-collapsible-tabs | changed | PLP toggle |

---

## Aday / leftover

[`candidates/beardbrand-leftovers.md`](../candidates/beardbrand-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / FAQ / size interact
- [ ] Newsletter / account / contact submit — **yapılmayacak** (PII)
