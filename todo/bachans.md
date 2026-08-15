# Todo — Bachan's (bachans.com)

*Kaynak:* https://bachans.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **May Heritage Line RS: release/BACH-v2026.10** · `schema_name`: Speedopz · `schema_version`: 9.3.2 · `theme_store_id`: null (custom) · shop `bachans.myshopify.com` · theme id `140215451828` · role `main`

**Durum:** Mod A walk kapandı — 51 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/45 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bachans/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/bachans/`, `evidence/bachans/`, `todo/bachans.md`, `candidates/bachans-*.md` |

**Kapsam satırı:**  
`Bachan's · default · May Heritage Line RS: release/BACH-v2026.10 (Speedopz 9.3.2, custom) · home→PDP→PLP→search→cart→content→footer→mobile · 51 obs · 0 yeni şema · leftover: 404/Pear/BV/recipes-grid/no-search/heritage-dipping/trust-icons`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop 1440 | ✅ interact | ✅ (yalnız 1440) |
| Cart drawer boş + dolu + qty | ✅ interact | ✅ (375 qty = 2. ATC) |
| Mobile menu 375 | ✅ interact | ✅ (768 hamburger yok) |
| Predictive search | ⛔ header’da yok | — |
| PDP `/products/the-original-japanese-barbecue-sauce` | ✅ | ✅ |
| PLP `/collections/shop` | ✅ | ✅ |
| Search `/search?q=original` | ✅ | ✅ |
| Cart `/cart` boş | ✅ | ✅ |
| About `/pages/our-story` | ✅ | ✅ |
| Octopus `/pages/look-for-the-octopus` | ✅ | ✅ (Justin text leftover) |
| Recipes hub + Japanese BBQ Bowl | ✅ banner/tabs + article | ✅ (ızgara leftover) |
| FAQ `/pages/faqs` | ✅ + ilk soru | ✅ |
| Contact `/pages/contact-us` | ✅ form PII yok | ✅ |
| Privacy + shipping | ✅ | ✅ |
| BBQ landing `/pages/japanese-barbecue-sauce` | ✅ | ✅ |
| Press `/blogs/press` | ✅ title-only | ✅ |
| Find-us / 404 / ID.me / wholesale / Costco / news | ⛔ candidates | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + mega | [x] + Shop 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | social-proof-brand-logos | home find-store | [x] viewport | [x] Pear leftover | reuse | [x] |
| 5 | collection-nav-slider | home flavorites | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | home dream | [x] | [x] | reuse | [x] |
| 7 | editorial-image-with-text.2 | home ingredients | [x] | [x] | reuse | [x] |
| 8 | blog-list-main | home recipes | [x] | [x] | reuse | [x] |
| 9 | editorial-image-with-text.3 | home hissho | [x] | [x] | reuse | [x] |
| 10 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 11 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 12 | global-cart-drawer | home | [x] boş+dolu+qty | [x] | reuse | [x] |
| 13 | global-menu-drawer | home 375 | [x] 375 | [x] 768 N/A | reuse | [x] |
| 14 | product-info-main | product-detail | [x] | [x] BV leftover | reuse | [x] |
| 15 | hero-slideshow | product-detail | [x] | [x] | reuse | [x] |
| 16–18 | banner / chips / grid | collection | [x] | [x] | reuse | [x] |
| 19 | search-results | search | [x] | [x] recipe chrome | reuse | [x] |
| 20 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 21–30 | our-story | about-brand | [x] | [x] | reuse | [x] |
| 31–37 | octopus | lookbook | [x] | [x] Justin text leftover | reuse | [x] |
| 39–41 | recipes/press/article | content | [x] | [x] 52k ızgara leftover | reuse | [x] |
| 42–44 | FAQ / contact / policy | content | [x] | [x] | reuse | [x] |
| 45–50 | BBQ landing | landing-campaign | [x] | [x] kardeş leftover | reuse | [x] |

*Home claim-icon row (trust) observation yazılmadı — resmi crop header.*

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover — BARBECUE/HERITAGE/DIPPING/MERCH/GIFTS + ürün ızgarası. Click Shop → PLP |
| global-cart-drawer | initial, filled, changed | Boş + Original 1×$9.49 + qty 2 / $18.98. ATC **ui**. 375 qty = 2. ATC |
| global-menu-drawer | open | 375 hamburger. 768 masaüstü nav (hamburger gizli). 1440 N/A |
| faq-collapsible-tabs | initial, changed | İlk SAUCE sorusu açık (shelf-stable). Sekme ALL/SAUCE yoklandı değil |

---

## Aday / leftover

[`candidates/bachans-leftovers.md`](../candidates/bachans-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / cart boş+dolu+qty / mobile menu / FAQ
- [ ] Menu 768 (hamburger yok — masaüstü nav)
- [ ] FAQ ALL/SAUCE sekme `changed`
- [ ] Home claim-icon row (header crop)
- [ ] Lookbook Justin/Chanra `rs_text_block` (header crop)
- [ ] Recipes masonry ~52k px
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
