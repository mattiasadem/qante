# Todo — Hollow Socks (hollowsocks.com)

*Kaynak:* https://hollowsocks.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **followhollow/main** · `schema_name`: **Shopify Theme Lab** · `schema_version`: 1.1.0 · `theme_store_id`: null · role `main`  
*Shop:* `followhollow.myshopify.com` · theme id `151218847913`

**Durum:** Leftover retry 2026-08-20 · PLP official 3vp **hâlâ blocked** · leftover sayfa marquee 2× resmi 3vp  
**PR:** https://github.com/mattiasadem/qante/pull/278 · draft · **main’e merge yok** · #67 devam değil

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hollowsocks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Gözlem / kanıt | 40 obs · 128 PNG (PLP orphan 375 claim değil) |
| Parallel | yalnız `observations/hollowsocks/` · `evidence/hollowsocks/` · `todo/hollowsocks.md` · `candidates/hollowsocks-*.md` |

**Kapsam satırı:**  
`Hollow Socks · default · followhollow/main (Shopify Theme Lab 1.1.0) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 40 obs · 0 yeni şema · leftover: PLP-3vp-768-QV-Close / 404 / Junip / Gorgias / Replo-PDP / blog-0 / advertorials / quiz-start-yok / store-locator-title`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | done | [x] 12 section |
| Mega / search form / cart / mobile menu | mega+search missingStates; menu 375/768; cart interact 3vp | [x] menu · [x] cart interact |
| PDP Crew | done | [x] 7/7 + size/FAQ interact |
| Compression PDP | ⛔ Replo (2026-08-20 yeniden) | — |
| PLP `/collections/best-sellers` | official retry 768 QV-Close → hunt-socks ×3 + cart-drawer assertClean | [ ] **hâlâ leftover** |
| Search `/search?q=alpaca` | done | [x] |
| Cart `/cart` | ⛔ main 0 — drawer | — |
| About `/pages/about-us` | done | [x] 6/6 |
| Help FAQ `/pages/why-alpaca` | done | [x] + FAQ interact |
| Size guide | done | [x] |
| Privacy | done | [x] |
| FAQ `/pages/faqs` | wrapper 3vp | [x] |
| Contact | hub 3vp · form yok | [x] |
| Store locator marquee | leftover sayfa · locator title leftover | [x] marquee |
| All-reviews marquee | leftover sayfa · Junip leftover | [x] marquee |
| Blog / reviews title / 404 / advertorials / quiz | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] mega missing | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home | [x] | [x] grid+SHOP ALL | reuse | [x] |
| 7 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 8 | testimonial-quote-carousel | home | [x] | [x] masonry | reuse | [x] |
| 9 | trust-icon-row.2 | home | [x] | [x] | reuse | [x] |
| 10 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 11 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] doldurulmadı | reuse | [x] |
| 13 | global-cart-drawer | home | [x] interact 9 PNG | [x] | reuse | [x] |
| 14 | global-predictive-search | home | [x] yalnız 1440 | [x] missingStates.input | reuse | [x] |
| 15 | global-menu-drawer | home | [x] 375/768 | [x] 1440 N/A | reuse | [x] |
| 16 | product-info-main | product-detail | [x] + size | [x] | reuse | [x] |
| 17–22 | PDP perks/related/table/trust/FAQ/marquee | product-detail | [x] + FAQ | [x] | reuse | [x] |
| 23–24 | PLP categories + grid | collection | [ ] | [x] 2026-08-20 retry failed | reuse | [ ] official 3vp yok |
| 25–26 | search hero + results | search | [x] | [x] | reuse | [x] |
| 27–32 | About | about-brand | [x] | [x] | reuse | [x] |
| 33–34 | why-alpaca help | faq-support | [x] + FAQ | [x] | reuse | [x] |
| 35 | size-guide | size-guide | [x] | [x] | reuse | [x] |
| 36 | privacy | policy | [x] | [x] | reuse | [x] |
| 37 | faqs wrapper | faqs | [x] | [x] | reuse | [x] |
| 38 | contact hub | contact | [x] | [x] | reuse | [x] |
| 39 | product-showcase-grid-featured | store-locator | [x] | [x] locator leftover | reuse | [x] |
| 40 | product-showcase-grid-featured | all-reviews | [x] | [x] Junip leftover | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | missing — `data-meganav-ignore`, `.ds-meganav` boş |
| global-predictive-search | input | missing — fill `crew` dropdown yok |
| global-cart-drawer | initial · filled · changed | [x] 3vp · stateFindings yazıldı · Checkout yok |
| global-menu-drawer | open | [x] 375/768 static prepareClick · 1440 homepage |
| faq-collapsible-tabs (PDP) | changed | [x] ilk soru açık |
| faq-collapsible-tabs (help) | changed | [x] return portal metni · form yok |
| product-info-main | changed | [x] SIZE: LARGE → MEDIUM |

---

## Aday / leftover

[`candidates/hollowsocks-leftovers.md`](../candidates/hollowsocks-leftovers.md)

---

## Evidence backlog

- [x] Home + Crew PDP + search + about + help + size + policy + faqs/contact wrappers resmi 3vp
- [ ] PLP 3vp — 2026-08-20 official retry failed (768 QV Close → `/products/hunt-socks?variant=47338929029289` ×3, then closed `ds-cart-drawer` assertClean). Orphan 375 claim değil. Script’e dokunulmadı.
- [x] Store locator + all-reviews BEST SELLERS marquee resmi 3vp (locator/Junip leftover)
- [x] Cart drawer interact PNG (initial/filled/changed × 3vp)
- [x] Newsletter / contact submit / quiz Start — **yapılmadı** (PII)
