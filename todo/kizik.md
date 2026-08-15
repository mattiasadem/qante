# Todo — Kizik (kizik.com)

*Kaynak:* https://kizik.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Proteus - Production - Metafield Cleanup** · `schema_name`: **Impact** · `schema_version`: **6.5.0** · `theme_store_id`: null (custom) · shop `kizik-design.myshopify.com` · theme id `156765749405` · role `main`

**Durum:** Mod A walk kapandı — 42 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
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
`Kizik · default · Proteus - Production - Metafield Cleanup / Impact 6.5.0 (custom, kizik-design.myshopify.com) · home→PDP vegas-2→PLP→search vegas→cart+drawer→about-us→faqs→contact→privacy→blog→innovation→footer→mobile · 42 obs · 144 PNG · 0 yeni şema · leftover: 404/reviews-app/locator/rewards/shogun/golf-30day`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| WOMEN mega 1440 / search `vegas` / cart empty+filled / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/womens-vegas-2-bright-white` | ✅ + size 9 | ✅ |
| PLP `/collections/womens-shoes` | ✅ | ✅ |
| Search `/search?q=vegas` (29) | ✅ | ✅ |
| Cart `/cart` boş | ✅ | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| FAQ `/pages/faqs` | ✅ + article | ✅ |
| Contact `/pages/contact` (form **PII yok**) | ✅ | ✅ |
| Privacy `main#main` | ✅ | ✅ |
| Blog `/blogs/news` + arthritis yazı | ✅ | ✅ |
| Innovation `/pages/innovation` | ✅ | ✅ |
| Returns + size chart | ✅ | ✅ |
| 404 | ✅ leftover | ✅ |
| Newsletter / contact submit / rewards login | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + WOMEN 1440 | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] header crop | reuse | [x] |
| 4 | product-showcase-tabs | home WOMEN/MEN | [x] + MEN | [x] | reuse | [x] |
| 5 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 7 | editorial-rich-text | home Trending | [x] | [x] | reuse | [x] |
| 8 | editorial-dynamic-grid | home media_grid | [x] | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 10 | global-cart-drawer | home | [x] boş+dolu 3vp | [x] | reuse | [x] |
| 11 | global-predictive-search | home | [x] vegas 3vp | [x] | reuse | [x] |
| 12 | global-menu-drawer | home | [x] 375/768 | [x] 1440 N/A | reuse | [x] |
| 13–18 | PDP Vegas 2 | product-detail | [x] + size 9 | [x] reviews leftover | reuse | [x] |
| 19–20 | PLP banner/grid | collection | [x] | [x] | reuse | [x] |
| 21 | search-results | search | [x] | [x] | reuse | [x] |
| 22 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 23–27 | About-us | about-brand | [x] | [x] | reuse | [x] |
| 28 | faq-collapsible-tabs | faq-support | [x] + article | [x] | reuse | [x] |
| 29 | lead-capture-form | contact | [x] | [x] PII yok | reuse | [x] |
| 30 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 31–34 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 35–39 | Innovation | landing-campaign | [x] | [x] | reuse | [x] |
| 40–41 | returns + size | faq-support | [x] | [x] | reuse | [x] |
| 42 | page-content-main | not-found | [x] leftover | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 WOMEN drawer — SHOP ALL WOMEN + SPORT/CASUAL/OUTDOOR |
| global-predictive-search | initial, input | `vegas` Products listesi; idle Freedom Run |
| global-cart-drawer | initial, filled | Vegas 2 Bright White Standard/9 $139.95; ATC **ui** |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| product-showcase-tabs | initial, changed | MEN — Lima 2 / Athens 2 / Freedom Trail / Freedom Run |
| product-info-main | initial, changed | Size 9 → ADD TO CART |
| faq-collapsible-tabs | initial, changed | Soru tık → help article (accordion değil) |

---

## Aday / leftover

[`candidates/kizik-leftovers.md`](../candidates/kizik-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / search / cart boş+dolu / menu / tabs / PDP size / FAQ
- [ ] Newsletter / contact / rewards submit — **yapılmayacak** (PII)
- [ ] Reviews app / store locator / Shogun / golf 30-day
