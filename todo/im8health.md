# Todo — IM8 Health (im8health.com)

*Kaynak:* https://im8health.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **shopify-im8-ui/develop** · `schema_name`: **Dawn** · `schema_version`: **15.0.2** · `theme_store_id`: null (custom, Dawn tabanı) · shop `im8store.myshopify.com`

**Durum:** Mod A walk kapandı — 56 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/40 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/im8health/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta; uymayan `candidates/im8health-*.md` |
| PNG | **174** (9 interact) |
| Observation | **56** · 53 tam 3vp · menu 1440 N/A · cart boş 375 yok (dolu 375 var) · trust-icon 375 0px |
| Parallel | yalnız `observations/im8health/`, `evidence/im8health/`, `todo/im8health.md`, `candidates/im8health-*.md` |

**Kapsam satırı:**  
`IM8 Health · default · shopify-im8-ui/develop / Dawn 15.0.2 · custom Shopify · home→PDP→PLP→search→cart→content→footer→mobile · 56 obs · 0 yeni şema · 174 PNG · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | [x] (footer karesinde Rebuy overlay leftover) |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | [x] menu 1440 N/A · predictive yok · cart boş 375 yok |
| PDP `/products/the-beckham-stack-pro` | ✅ | [x] ticker 768/1440 crop leftover |
| PDP `/products/essentials-pro` (ikinci) | ✅ | [x] |
| PLP `/collections/all` + merchandise | ✅ filter/sort yok | [x] trust-icon 375 0px |
| Search `/search?q=essentials` | ✅ | [x] (Rebuy overlay leftover) |
| Cart `/cart` | ⛔ `/?viewcart=true` — Rebuy drawer | [x] boş 768/1440 · dolu 3vp |
| About `/pages/about-us` | ✅ | [x] |
| FAQ `/pages/frequently-asked-questions` | ✅ Gorgias iframe | [x] 375 = gorgias.help redirect |
| Contact `/pages/contact-us` | ✅ form **gönderilmedi** | [x] |
| Science / ingredients / quality / welcome | ✅ | [x] |
| Policy privacy | ✅ | [x] |
| Blog `/blogs/news` + 1 yazı | ✅ | [x] |
| 404 `/pages/this-page-does-not-exist-qante` | ⛔ aday + page-content-main | [x] |
| Quiz / wall-of-health / kampanya LP | ⛔ leftover (429) | — |
| Mobile 375 menu | ✅ | [x] 375/768 |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + Shop hover 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] tek slayt, swiper yok | reuse | [x] |
| 4 | testimonial-quote-carousel | home | [x] | [x] athlete | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 6 | social-proof-brand-logos | home | [x] | [x] press | reuse | [x] |
| 7 | editorial-image-with-text | home | [x] | [x] welcome kit | reuse | [x] |
| 8 | testimonial-quote-carousel-2 | home | [x] | [x] Trustpilot iframe leftover | reuse | [x] |
| 9 | features-multicolumn | home | [x] | [x] stats + NSF | reuse | [x] |
| 10 | features-multicolumn-2 | home | [x] | [x] SAB | reuse | [x] |
| 11 | editorial-image-with-text-2 | home | [x] | [x] Beckham note | reuse | [x] |
| 12 | editorial-image-with-text-3 | home | [x] | [x] 90-day | reuse | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] Rebuy overlay leftover | reuse | [x] |
| 14 | global-cart-drawer | home | [x] 768/1440 + filled 3vp | [x] Rebuy | reuse | [x] |
| 15 | global-predictive-search | — | [ ] | yok | leftover | [x] |
| 16 | global-menu-drawer | home | [x] 375/768 | [x] 1440 N/A | reuse | [x] |
| 17 | product-info-main | product-detail | [x] | [x] Beckham Stack | reuse | [x] |
| 18 | promo-scrolling-marquee | product-detail | [x] 375 okunur | [x] 768/1440 crop | reuse | [x] |
| 19 | editorial / comparison / features / FAQ / testimonials | product-detail | [x] | [x] | reuse | [x] |
| 20 | product-info-main-2 + flavor + comparison | essentials-pro | [x] | [x] | reuse | [x] |
| 21 | product-showcase-grid-plp + featured + trust + features | collection | [x] | [x] trust 375 N/A | reuse | [x] |
| 22 | search-results | search | [x] | [x] | reuse | [x] |
| 23 | about / contact / science / ingredients / welcome / quality / policy | mixed | [x] | [x] | reuse | [x] |
| 24 | page-content-main | faq-support | [x] | [x] Gorgias | reuse | [x] |
| 25 | blog-list + blog-post | blog-* | [x] | [x] | reuse | [x] |
| 26 | page-content-main | not-found | [x] | [x] leftover pageType | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover: sol kartlar Beckham Stack / Essentials Pro / Longevity / Reviews / Merchandise. 375/768 mega yok. Discover denenmedi. |
| global-menu-drawer | open (prepareClick) | 375/768 `#menu-drawer`. 1440 hamburger 0px. |
| global-predictive-search | — | Header'da arama ikonu yok. |
| global-cart-drawer | initial, filled | Boş 768/1440: YOUR CART · $150 away · Shop Now. Boş 375: flyout hidden. Dolu 3vp: Beckham Stack $548 quarterly · free shipping · pouch $35 · Checkout girilmedi. |
| faq-collapsible-tabs (PDP) | changed | `<details>` yok. 3vp'de ilk soru (What is IM8?) zaten açık. |
| product-showcase-grid-featured-2 | — | Flavor ATC denenmedi (3vp var). |

---

## Aday / leftover

[`candidates/im8health-leftovers.md`](../candidates/im8health-leftovers.md)

- Rebuy cart; `/cart` → home `?viewcart=true`
- Predictive search yok
- Trustpilot + FrontrowMD iframe
- Gorgias FAQ (375 ayrı origin)
- `shop-now-bar` 0px
- Ingredients 12k-px tab catalog
- Press ticker 768/1440 crop
- Rebuy overlay footer/search/PLP kanıtında
- Listicle / athlete / quiz LP (429)
- Account / checkout / form submit (PII)
- 404 pageType taksonomide yok

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (menu 1440 N/A · cart boş 375 yok · trust-icon 375 0px)
- [x] Overlay / mega / cart interact (FAQ ikinci soru + flavor ATC + Discover mega leftover)
- [x] Newsletter / contact submit — **yapılmayacak** (PII)
- [x] PNG bak → stateFindings yazıldı
