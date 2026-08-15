# Todo — Hollow Socks (hollowsocks.com)

*Kaynak:* https://hollowsocks.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **followhollow/main** · `schema_name`: **Shopify Theme Lab** · `schema_version`: 1.1.0 · `theme_store_id`: null · role `main`  
*Shop:* `followhollow.myshopify.com` · theme id `151218847913`

**Durum:** Mod A walk bitti · resmi 3vp claim’lerde var (PLP hariç) · interact stateFindings yazıldı  
**PR:** https://github.com/mattiasadem/qante/pull/67 · draft · **main’e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hollowsocks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hollowsocks/` · `evidence/hollowsocks/` · `todo/hollowsocks.md` · `candidates/hollowsocks-*.md` |

**Kapsam satırı:**  
`Hollow Socks · default · followhollow/main (Shopify Theme Lab 1.1.0) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 38 obs · 0 yeni şema · leftover: 404/Junip/Gorgias/Replo-PDP/blog-0/advertorials/PLP-3vp-flake`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | done | [x] 12 section |
| Mega / search form / cart / mobile menu | mega+search missingStates; menu 375/768; cart interact 3vp | [x] menu · [x] cart interact |
| PDP Crew | done | [x] 7/7 + size/FAQ interact |
| Compression PDP | ⛔ Replo `#replo-fullpage-element` | — |
| PLP `/collections/all` · `/best-sellers` | roster; 3vp flake (quick-view Close) | [ ] |
| Search `/search?q=alpaca` | done | [x] |
| Cart `/cart` | ⛔ main 0 — drawer | — |
| About `/pages/about-us` | done | [x] 6/6 |
| Help FAQ `/pages/why-alpaca` | done | [x] + FAQ interact |
| Size guide | done | [x] |
| Privacy | done | [x] |
| FAQ `/pages/faqs` | wrapper 3vp | [x] |
| Contact | hub 3vp · form yok | [x] |
| Blog / reviews / 404 / advertorials / quiz | ⛔ leftover | — |

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
| 23–24 | PLP categories + grid | collection | [ ] | [x] | reuse | [ ] 3vp flake |
| 25–26 | search hero + results | search | [x] | [x] | reuse | [x] |
| 27–32 | About | about-brand | [x] | [x] | reuse | [x] |
| 33–34 | why-alpaca help | faq-support | [x] + FAQ | [x] | reuse | [x] |
| 35 | size-guide | size-guide | [x] | [x] | reuse | [x] |
| 36 | privacy | policy | [x] | [x] | reuse | [x] |
| 37 | faqs wrapper | faqs | [x] | [x] | reuse | [x] |
| 38 | contact hub | contact | [x] | [x] | reuse | [x] |

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
- [ ] PLP 3vp (ds-quick-view Close tuzağı — script’e dokunulmadı). Orphan 375 claim değil.
- [x] Cart drawer interact PNG (initial/filled/changed × 3vp)
- [x] Newsletter / contact submit — **yapılmadı** (PII)
