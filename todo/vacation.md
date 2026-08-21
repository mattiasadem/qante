# Todo — Vacation (vacation.inc)

*Kaynak:* https://vacation.inc · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **görünmüyor** — `Shopify.theme` null · custom headless · shop `vacationoils.myshopify.com` · Theme Store adı yok

**Durum:** Retry walk kapandı — 32 obs · selector’lar stealth oturumda doğrulandı · **resmi 3vp 0** (Cloudflare Turnstile) · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/279 (draft · **main'e merge yok**) · PR #50 devam değil

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vacation/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` — default Chromium CF |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vacation/`, `evidence/vacation/`, `todo/vacation.md`, `candidates/vacation-*.md` |

**Kapsam satırı:**  
`Vacation · default · tema adı yok · custom headless · vacationoils.myshopify.com · home→PDP→PLP→search→cart-drawer→content→footer→menu · 32 obs · 0 resmi PNG · 0 yeni şema · leftover: CF capture / 404 / pepsi / locator / BV / filled cart`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ walk | ⛔ resmi CF |
| Menu / search / cart drawer | ✅ stealth open (+ search input whip×7) | ⛔ resmi CF |
| PDP `/products/classic-whip-spf-30` | ✅ | ⛔ resmi CF |
| PLP `/collections/all` + `/collections/suncare` | ✅ | ⛔ resmi CF |
| Search `/search/products?q=whip` | ✅ 7 ürün | ⛔ resmi CF |
| Cart `/cart` → `/?cart=true` | ✅ drawer-only | ⛔ resmi CF |
| About `/about-us` | ✅ | ⛔ resmi CF |
| FAQ `/faq` | ✅ cevaplar statik açık | ⛔ resmi CF |
| Contact `/contact` | ✅ form **gönderilmedi** | ⛔ resmi CF |
| Policy privacy + returns | ✅ | ⛔ resmi CF |
| Blog `/blogs/news` | ⛔ boş Not Found | — |
| Pepsi `/pepsi` | ⛔ candidate (kod girilmedi) | — |
| 404 custom | ⛔ candidate + obs | ⛔ |
| Mobile menu | ✅ aynı `.order-wrapper` | ⛔ resmi CF |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | ⛔ CF | [x] | reuse | [x] walk |
| 2 | navigation-header-mega | home | ⛔ | [x] | reuse | [x] |
| 3 | global-menu-drawer | home | ⛔ | [x] `.order-wrapper` | reuse | [x] |
| 4 | global-predictive-search | home | ⛔ | [x] `div.search` + whip | reuse | [x] |
| 5 | global-cart-drawer | home | ⛔ | [x] boş + bestsellers | reuse | [x] |
| 6 | hero-slideshow | home | ⛔ | [x] overlay CTA | reuse | [x] |
| 7 | editorial-rich-text | home | ⛔ | [x] | reuse | [x] |
| 8 | editorial-layered-images | home | ⛔ | [x] | reuse | [x] |
| 9 | product-showcase-grid-featured | home | ⛔ | [x] 2026 Exclusives | reuse | [x] |
| 10 | editorial-image-with-text | home | ⛔ | [x] FIG 1 | reuse | [x] |
| 11 | testimonial-quote-carousel | home | ⛔ | [x] | reuse | [x] |
| 12 | editorial-image-with-text-2 | home | ⛔ | [x] business-card | reuse | [x] |
| 13 | editorial-image-with-text-overlay | home | ⛔ | [x] magazine ≥800 | reuse | [x] |
| 14 | media-shop-the-feed | home | ⛔ | [x] | reuse | [x] |
| 15 | footer-columns-newsletter | home | ⛔ | [x] e-posta yok | reuse | [x] |
| 16 | product-info-main | product-detail | ⛔ | [x] | reuse | [x] |
| 17 | features-multicolumn | product-detail | ⛔ | [x] | reuse | [x] |
| 18 | editorial-image-with-text | product-detail | ⛔ | [x] ingredients | reuse | [x] |
| 19 | product-showcase-related | product-detail | ⛔ | [x] | reuse | [x] |
| 20 | testimonial-quote-carousel | product-detail | ⛔ | [x] | reuse | [x] |
| 21 | collection-banner | collection | ⛔ | [x] all | reuse | [x] |
| 22 | collection-nav-tabs | collection | ⛔ | [x] | reuse | [x] |
| 23 | product-showcase-grid-plp | collection | ⛔ | [x] | reuse | [x] |
| 24 | collection-banner-2 | collection | ⛔ | [x] suncare | reuse | [x] |
| 25 | search-results | search | ⛔ | [x] whip×7 | reuse | [x] |
| 26 | page-content-main | about-brand | ⛔ | [x] | reuse | [x] |
| 27 | faq-collapsible-tabs | faq-support | ⛔ | [x] | reuse | [x] |
| 28–29 | contact form + dizin | contact | ⛔ | [x] PII yok | reuse | [x] |
| 30–31 | privacy + returns | policy | ⛔ | [x] | reuse | [x] |
| 32 | page-content-main | not-found | ⛔ | [x] candidate | reuse | [x] |

---

## Interact (piksel değişti — stealth; resmi yok)

| Bileşen | State | Not |
|---|---|---|
| global-menu-drawer | open | Store…FAQ `.header__nav-link` |
| global-predictive-search | open + input | cream overlay; whip → 7 sonuç |
| global-cart-drawer | initial | boş + bestsellers; filled yok |

---

## Aday / leftover

[`candidates/vacation-leftovers.md`](../candidates/vacation-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp — **blok: Cloudflare Turnstile** (script değiştirilmedi)
- [ ] Filled cart / FAQ accordion
- [ ] Store locator / Gelée / Raven Run / Pepsi kod
