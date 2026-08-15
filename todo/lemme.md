# Todo — Lemme (DTC-69 #53)

*Kaynak (liste):* https://lemme.com · *Canlı vitrin:* https://lemmelive.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **RC Theme 7/30 - Promo Banner** · `id`: **162263105750** · `schema_name`: **null** · `schema_version`: **null** · `theme_store_id`: **null** (custom) · `role`: **main** · shop `lemmelive.myshopify.com`

**Durum:** Mod A walk kapandı — 35 observation · resmi 3vp · interact yazıldı  
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
`Lemme · default · RC Theme 7/30 - Promo Banner (custom, lemmelive.myshopify.com, theme 162263105750) · lemme.com→epicbrokers leftover · home→PDP chill+Reset extras→PLP→search-drawer→cart-drawer→content→footer→mobile · 35 obs · 0 yeni şema · cart changed 1440 missing`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | obs | [x] |
| Lime promobar (`.promobar` .2) | obs | [x] |
| Mega SHOP 1440 | obs | [x] interact |
| Cart drawer boş + dolu | obs | [x] interact · changed 375/768 |
| Predictive search drawer | obs | [x] interact |
| Mobile menu 375/768 | obs | [x] interact |
| PDP `/products/chill` | obs | [x] |
| PDP Reset extras (timeline/compare) | obs | [x] |
| PLP `/collections/all` | obs | [x] |
| Search `/search?q=reset` | ⛔ main 0px leftover | — |
| Cart `/cart` | ⛔ `/?cart_redirect` leftover | — |
| FAQ `/pages/faq` | obs | [x] |
| Contact `/pages/contact` | obs · PII yok | [x] |
| Privacy | obs | [x] |
| Blog + 1 yazı | obs | [x] |
| Loyalty landing | obs | [x] |
| 404 | obs | [x] |
| Find-us / reviews / LPs | leftover | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home (mavi trip) | [x] | [x] | reuse | [x] |
| 1b | promo-announcement-bar.2 | home (lime EXTRA 20%) | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + mega | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | social-proof-brand-logos | home bragbar | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text-overlay | home trip | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home faves | [x] | [x] | reuse | [x] |
| 7–8 | features-multicolumn ×2 | home | [x] | [x] | reuse | [x] |
| 9 | editorial-image-with-text | home sub | [x] | [x] | reuse | [x] |
| 10 | editorial-image-with-text-overlay.2 | home science | [x] | [x] | reuse | [x] |
| 11 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 13 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 14 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 15 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 16–21 | PDP chill | product-detail | [x] | [x] | reuse | [x] |
| 22–23 | Reset timeline + compare | product-detail | [x] | [x] | reuse | [x] |
| 24–25 | PLP banner + grid | collection | [x] | [x] | reuse | [x] |
| 26 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 27 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 28 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 29–30 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 31 | page-content-main | not-found | [x] | [x] | reuse | [x] |
| 32–34 | loyalty hero/how/faq | landing-campaign | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 SHOP 4 kolon |
| global-predictive-search | open / input | [x] boş = Search Product + pill; `reset` = query + X, pill yok, ürün listesi yok |
| global-cart-drawer | initial / filled / changed | [x] boş bag · Chill $30 qty1 · changed 375/768 qty2 $60 · **1440 changed missing** |
| global-menu-drawer | open | [x] 375/768 COLLECTIONS 2×2 + accordion |
| faq-collapsible-tabs (PDP) | changed | [x] vegetarian → gluten-free |

---

## Aday / leftover

[`candidates/lemme-leftovers.md`](../candidates/lemme-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / search / cart / menu / PDP FAQ
- [ ] Cart `changed` 1440 — tek düzeltme yetmedi; üçüncü yok
- [ ] Newsletter / contact / account / JOIN NOW — **yapılmayacak** (PII)
