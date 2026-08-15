# Todo — Great Jones (greatjonesgoods.com)

*Kaynak:* https://greatjonesgoods.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **2025 BFCM THEME: Great Jones 4.2 | Edgemesh** · `schema_name`: Great Jones · `schema_version`: 0.1.0 · `theme_store_id`: null · role `main`  
*Shop:* `great-jones-goods.myshopify.com`

**Durum:** Mod A walk kapandı — 49 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/84 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/greatjonesgoods/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `validate-schemas.mjs` → şema dosyasına dokunulmadı |
| Gözlem / kanıt | 49 obs · ~173 PNG |
| Parallel | yalnız `observations/greatjonesgoods/`, `evidence/greatjonesgoods/`, `todo/greatjonesgoods.md`, `candidates/greatjonesgoods-*.md` |

**Kapsam satırı:**  
`Great Jones · default · 2025 BFCM THEME: Great Jones 4.2 | Edgemesh (schema_name Great Jones 0.1.0) · home→PDP→PLP→search→cart drawer→content→footer→mobile · 49 obs · 0 yeni şema · leftover: cart hash / Okendo / Rebuy / Klaviyo / privacy body / 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop All 1440 | ✅ interact | ✅ (375/768 N/A) |
| Predictive search overlay | ✅ initial+input | ✅ (ürün ızgarası fill’de statik) |
| Cart drawer boş + dolu | ✅ interact | ✅ Rebuy; `/cart` → `/#cart` |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 0px leftover) |
| PDP `/products/the-dutchess` + Holy Sheet | ✅ + Blueberry | ✅ |
| PLP `/collections/cookware` | ✅ cards+banner+grid | ✅ Color/Sort leftover |
| Search `/search?q=Dutch+oven` | ✅ | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| Help `/pages/help` | ✅ + Who owns | ✅ |
| Shipping / care FAQ | ✅ | ✅ |
| Warranty / privacy hero / disclosures | ✅ | ✅ (privacy body leftover) |
| Recipes + Cardamom cookies | ✅ | ✅ |
| Great Ones + Justine Doiron | ✅ | ✅ |
| Digest `/pages/digest` | ✅ | ✅ |
| Wholesale / affiliate / careers / bulk | ✅ | ✅ |
| 404 | ✅ | ✅ |
| Newsletter / account / contact submit | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + mega | [x] | reuse | [x] |
| 3 | global-predictive-search | home | [x] + input | [x] | reuse | [x] |
| 4 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 5 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] 1440 leftover |
| 6 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 7 | trust-icon-row | home | [x] | [x] | reuse | [x] Shoplift |
| 8 | product-showcase-tabs | home | [x] + Bakeware | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 10 | product-info-main | product-detail | [x] + Blueberry | [x] | reuse | [x] |
| 11 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] Okendo |
| 12 | media-shop-the-feed | product-detail | [x] | [x] | reuse | [x] |
| 13 | product-info-main.2 | product-detail | [x] | [x] | reuse | [x] |
| 14 | collection-nav-cards | collection | [x] | [x] | reuse | [x] |
| 15 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 16 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 17 | search-results | search | [x] | [x] | reuse | [x] |
| 18–21 | about (4) | about-brand | [x] | [x] | reuse | [x] |
| 22–23 | help | faq-support | [x] | [x] | reuse | [x] |
| 24–29 | shipping/care/warranty/privacy/disclosures | policy | [x] | [x] | reuse | [x] |
| 30–34 | recipes + GO list/posts | blog-* | [x] | [x] | reuse | [x] |
| 35–42 | digest (8) | digest | [x] | [x] | reuse | [x] |
| 43–46 | wholesale/affiliate/careers/bulk | landing-campaign | [x] | [x] | reuse | [x] |
| 47 | 404 | not-found | [x] | [x] | reuse | [x] |

(49 dosya — roster satırları gruplu)

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop All turuncu mega + 4 ürün |
| global-predictive-search | initial, input | 3vp öneriler; `Dutchess` input — kartlar statik |
| global-cart-drawer | initial, filled | boş + Holy Sheet Broccoli $45; Checkout’a girilmedi |
| global-menu-drawer | open | 375/768 hardal drawer (1440 0px) |
| product-showcase-tabs | changed | Bakeware: Stud Muffin / Ratatouille |
| product-info-main | changed | Blueberry mavi Dutch oven |
| faq-collapsible-tabs | changed | Who owns Great Jones? Meyer Corp. |

---

## Aday / leftover

[`candidates/greatjonesgoods-leftovers.md`](../candidates/greatjonesgoods-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (menu 1440 skip = 0px leftover)
- [x] Mega / search / cart / menu / FAQ / swatch / tabs interact
- [ ] Recipes + mega / PLP Color-Sort / cart qty
- [ ] Newsletter / account / contact submit — **yapılmayacak** (PII)
