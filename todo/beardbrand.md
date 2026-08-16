# Todo — Beardbrand (beardbrand.com)

*Kaynak:* https://beardbrand.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Split v1.0.3.7.4 [edp promo on PDPs]** · `schema_name`: Split · `schema_version`: 3.1.0 · `theme_store_id`: 842 · role `main` · theme.id `192727712114`  
*Shop:* `beardbrand.myshopify.com`

**Durum:** Mod A walk kapandı — 37 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/119 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/beardbrand/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `npm run validate` → 65 temiz · 0 error · 0 warn (şema dosyasına dokunulmadı) |
| Gözlem / kanıt | 37 obs · 137 PNG |
| Parallel | yalnız `observations/beardbrand/`, `evidence/beardbrand/`, `todo/beardbrand.md`, `candidates/beardbrand-*.md` |

**Kapsam satırı:**  
`Beardbrand · default · Split v1.0.3.7.4 [edp promo on PDPs] (Split 3.1.0, theme_store_id 842) · home→PDP→PLP→search→cart→content→footer→404→mobile · 37 obs · 137 PNG · 0 yeni şema · leftover: Judge.me / Recharge drawer / FAQ statik / predictive boş / bundle / quiz`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop 1440 | ✅ interact | ✅ (375/768 hamburger) |
| Predictive search overlay | ✅ initial+input | ✅ (sonuç boş leftover) |
| Cart page boş + dolu + qty | ✅ interact | ✅ (drawer yok) |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A zero-size) |
| PDP `/products/norse-winter-beard-oil` + size | ✅ | ✅ |
| PLP `/collections/beard-oil` | ✅ | ✅ |
| Search `/search?q=beard` | ✅ 68 sonuç | ✅ |
| Cart `/cart` | ✅ viewport | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| FAQ `/pages/faqs` | ⛔ leftover (statik) | — |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ✅ |
| Privacy / Legal / Returns | ✅ | ✅ |
| Blog hub + article | ✅ | ✅ |
| Fragrances LP | ✅ hero | ✅ |
| Help / about / shipping / returns (kısa URL) | ⛔ leftover 404 | — |
| 404 | ✅ custom | ✅ |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + mega | [x] | reuse | [x] |
| 3 | global-predictive-search | home | [x] + input | [x] | reuse | [x] sonuç leftover |
| 4 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 5 | editorial-rich-text | home hero | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 7 | collection-nav-slider | home fragrance | [x] | [x] | reuse | [x] |
| 8 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 9 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 10 | lead-capture-newsletter-band | home | [x] | [x] | reuse | [x] |
| 11 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 12 | product-info-main | product-detail | [x] + size | [x] | reuse | [x] |
| 13 | media-video-hero | PDP | [x] | [x] | reuse | [x] |
| 14 | promo-scrolling-marquee | PDP | [x] | [x] | reuse | [x] |
| 15 | product-showcase-featured | PDP | [x] | [x] | reuse | [x] |
| 16 | features-multicolumn | PDP assurance | [x] | [x] | reuse | [x] |
| 17 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 18 | editorial-rich-text | collection | [x] | [x] | reuse | [x] |
| 19 | features-multicolumn | collection uses | [x] | [x] | reuse | [x] |
| 20 | faq-collapsible-tabs | collection | [x] | [x] | reuse | [x] changed leftover |
| 21 | product-showcase-grid-featured | collection | [x] | [x] | reuse | [x] |
| 22 | search-results | search | [x] | [x] | reuse | [x] |
| 23 | cart-page-main | cart | [x] empty+filled+qty | [x] | reuse | [x] |
| 24 | product-showcase-featured | cart | [x] | [x] | reuse | [x] |
| 25–27 | about (3) | about-brand | [x] | [x] | reuse | [x] |
| 28 | page-content-main | contact | [x] | [x] | reuse | [x] |
| 29–32 | privacy + legal + returns | policy | [x] | [x] | reuse | [x] |
| 33–34 | blog hub | blog-list | [x] | [x] | reuse | [x] |
| 35 | blog-post-main | blog-post | [x] viewport | [x] | reuse | [x] |
| 36 | page-content-main | not-found | [x] | [x] | reuse | [x] |
| 37 | editorial-rich-text | landing-campaign | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop: 5 kolon CONDITION / CLEANSE / FRAGRANCE / STYLE / TOOLS & GEAR |
| global-predictive-search | initial, input | `beard oil` yazıldı; sonuç listesi boş leftover |
| global-menu-drawer | open | 375/768 hamburger (1440 0px) |
| product-info-main | changed | SIZE 4 fl oz — $32→$42 |
| cart-page-main | initial, filled, changed | boş → Norse Oil qty1 $26.56 → qty2 $53.12 |
| faq-collapsible-tabs | changed | kare değişmedi leftover |

---

## Aday / leftover

[`candidates/beardbrand-leftovers.md`](../candidates/beardbrand-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / search / cart / menu / size interact
- [ ] Predictive ürün kartı — boş (leftover)
- [ ] PLP FAQ toggle pixel — değişmedi (leftover)
- [ ] Newsletter / account / contact submit — **yapılmayacak** (PII)
