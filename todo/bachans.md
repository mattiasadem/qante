# Todo — Bachan's (bachans.com)

*Kaynak:* https://bachans.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **May Heritage Line RS: release/BACH-v2026.10** · `schema_name`: Speedopz · `schema_version`: 9.3.2 · `theme_store_id`: null (custom) · shop `bachans.myshopify.com` · theme id `140215451828` · role `main`

**Durum:** Mod A walk — observation taslakları yazıldı; resmi 3vp + interact sırada  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bachans/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/bachans/`, `evidence/bachans/`, `todo/bachans.md`, `candidates/bachans-*.md` |

**Kapsam satırı:**  
`Bachan's · default · May Heritage Line RS: release/BACH-v2026.10 (Speedopz 9.3.2, custom) · home→PDP→PLP→search→cart→content→footer→mobile · (capture sırada)`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ⬜ taslak | ⬜ |
| Mega Shop 1440 | ⬜ interact | ⬜ |
| Cart drawer boş + dolu | ⬜ interact | ⬜ |
| Mobile menu 375 | ⬜ interact | ⬜ |
| Predictive search | ⛔ header’da yok | — |
| PDP `/products/the-original-japanese-barbecue-sauce` | ⬜ taslak | ⬜ |
| PLP `/collections/shop` | ⬜ taslak | ⬜ |
| Search `/search?q=original` | ⬜ taslak | ⬜ |
| Cart `/cart` boş | ⬜ taslak | ⬜ |
| About `/pages/our-story` | ⬜ taslak | ⬜ |
| Octopus `/pages/look-for-the-octopus` | ⬜ taslak | ⬜ |
| Recipes hub + Japanese BBQ Bowl | ⬜ taslak | ⬜ |
| FAQ `/pages/faqs` | ⬜ + ilk soru | ⬜ |
| Contact `/pages/contact-us` | ⬜ form PII yok | ⬜ |
| Privacy + shipping | ⬜ taslak | ⬜ |
| BBQ landing `/pages/japanese-barbecue-sauce` | ⬜ taslak | ⬜ |
| Press `/blogs/press` | ⬜ taslak | ⬜ |
| Find-us / 404 / ID.me / wholesale / Costco / news | ⛔ candidates | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home + mega | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | social-proof-brand-logos | home find-store | [ ] | [x] | reuse | [ ] |
| 5 | collection-nav-slider | home flavorites | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text | home dream | [ ] | [x] | reuse | [ ] |
| 7 | editorial-image-with-text.2 | home ingredients | [ ] | [x] | reuse | [ ] |
| 8 | trust-icon-row | home claims | [ ] | [x] | reuse | [ ] |
| 9 | blog-list-main | home recipes | [ ] | [x] | reuse | [ ] |
| 10 | editorial-image-with-text.3 | home hissho | [ ] | [x] | reuse | [ ] |
| 11 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | [ ] | reuse | [ ] |
| 14 | global-menu-drawer | home 375 | [ ] | [ ] | reuse | [ ] |
| 15 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | hero-slideshow | product-detail | [ ] | [x] | reuse | [ ] |
| 17–19 | banner / chips / grid | collection | [ ] | [x] | reuse | [ ] |
| 20 | search-results | search | [ ] | [x] | reuse | [ ] |
| 21 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 22–30 | our-story | about-brand | [ ] | [x] | reuse | [ ] |
| 31–38 | octopus | lookbook | [ ] | [x] | reuse | [ ] |
| 39–41 | recipes/press/article | content | [ ] | [x] | reuse | [ ] |
| 42–44 | FAQ / contact / policy | content | [ ] | [x] | reuse | [ ] |
| 45–50 | BBQ landing | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

`candidates/bachans-leftovers.md` (yazılacak)

- Header arama yok; `/search` var
- Recipes ızgara ~52k px
- Bazaarvoice PDP
- Pear store locator iframe
- 404 pageType yok
- Heritage/dipping landing kardeşleri
- ID.me / wholesale / Costco / news→recipes
- PII formları gönderilmedi

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Header mega / cart boş+dolu / mobile menu
- [ ] PDP / PLP / search / cart 3vp
- [ ] Content templates 3vp
