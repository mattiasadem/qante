# Todo — Lemme (DTC-69 #53)

*Kaynak (liste):* https://lemme.com · *Canlı vitrin:* https://lemmelive.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **RC Theme 7/30 - Promo Banner** · `id`: **162263105750** · `schema_name`: **null** · `schema_version`: **null** · `theme_store_id`: **null** (custom) · `role`: **main** · shop `lemmelive.myshopify.com`

**Durum:** Mod A walk — observation dosyaları yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/lemme/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/lemme/`, `evidence/lemme/`, `todo/lemme.md`, `candidates/lemme-*.md` |

**Kapsam satırı:**  
`Lemme · default · RC Theme 7/30 - Promo Banner (custom, lemmelive.myshopify.com, theme 162263105750) · lemme.com→epicbrokers leftover · home→PDP chill+Reset extras→PLP→search-drawer→cart-drawer→content→footer→mobile · 34 obs · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | obs yazıldı | [ ] |
| Mega SHOP 1440 | obs | [ ] interact |
| Cart drawer boş + dolu | obs | [ ] interact |
| Predictive search drawer | obs | [ ] interact |
| Mobile menu 375/768 | obs | [ ] interact |
| PDP `/products/chill` | obs | [ ] |
| PDP Reset extras (timeline/compare) | obs | [ ] |
| PLP `/collections/all` | obs | [ ] |
| Search `/search?q=reset` | ⛔ main 0px leftover | — |
| Cart `/cart` | ⛔ `/?cart_redirect` leftover | — |
| FAQ `/pages/faq` | obs | [ ] |
| Contact `/pages/contact` | obs · PII yok | [ ] |
| Privacy | obs | [ ] |
| Blog + 1 yazı | obs | [ ] |
| Loyalty landing | obs | [ ] |
| 404 | obs | [ ] |
| Find-us / reviews / LPs | leftover | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home + mega | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | social-proof-brand-logos | home bragbar | [ ] | [x] | reuse | [ ] |
| 5 | editorial-image-with-text-overlay | home trip | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured | home faves | [ ] | [x] | reuse | [ ] |
| 7–8 | features-multicolumn ×2 | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-image-with-text | home sub | [ ] | [x] | reuse | [ ] |
| 10 | editorial-image-with-text-overlay.2 | home science | [ ] | [x] | reuse | [ ] |
| 11 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] PII yok | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 16–21 | PDP chill | product-detail | [ ] | [x] | reuse | [ ] |
| 22–23 | Reset timeline + compare | product-detail | [ ] | [x] | reuse | [ ] |
| 24–25 | PLP banner + grid | collection | [ ] | [x] | reuse | [ ] |
| 26 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 27 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 28 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 29–30 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 31 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |
| 32–34 | loyalty hero/how/faq | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 SHOP mega |
| global-predictive-search | open / input | [ ] `reset` |
| global-cart-drawer | initial / filled / changed | [ ] Chill 1 Pack |
| global-menu-drawer | open | [ ] 375/768 |
| faq-collapsible-tabs (PDP) | changed | [ ] ilk soru |

---

## Aday / leftover

[`candidates/lemme-leftovers.md`](../candidates/lemme-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / PDP FAQ
- [ ] Newsletter / contact / account / JOIN NOW — **yapılmayacak** (PII)
