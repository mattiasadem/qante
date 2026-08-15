# Todo — TRIP (drink-trip.com)

*Kaynak:* https://drink-trip.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Trip-UK/main** · `schema_name`: **Focal** · `schema_version`: 10.2.0 · `theme_store_id`: null (custom Focal)  
*Shop:* drink-trip.myshopify.com · theme id `178832998786` · role `main`

**Durum:** Mod A walk kapandı — 36 obs · resmi 3vp (search hariç) · interact piksel değişenlerde · leftover kayıtlı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/drinktrip/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/drinktrip/`, `evidence/drinktrip/`, `todo/drinktrip.md`, `candidates/drinktrip-*.md` |

**Kapsam satırı:**  
`TRIP · default · Trip-UK/main (Focal 10.2.0 custom) · home→PDP→PLP→search→cart→content→footer→mobile · 36 obs · 0 yeni şema · leftover: search 3vp / Rebuy bleed / 404 / Mention Me / bundle builder`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega / search drawer / Rebuy cart / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/variety-pack-value` | ✅ | ✅ |
| Flavour PDP `/products/tropical-mango` | aynı kit | leftover |
| PLP `/collections/all-products` | ✅ | ✅ (uzun grid) |
| PLP everyday-calm (aynı template) | not | tekrar yok |
| Search `/search?q=mango` | JSON · script crash | ⛔ leftover |
| Cart `/cart` → Rebuy | ✅ empty/filled/qty2 | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| FAQ `/pages/faqs` | ✅ + first Q open | ✅ |
| Contact `/pages/contact-us` | ✅ form **gönderilmedi** | ✅ |
| Ingredients `/pages/ingredients-education` | ✅ | ✅ |
| Policy `/pages/privacy-policy` | ✅ | ✅ |
| Blog `/blogs/news` + magnesium yazısı | ✅ | ✅ |
| Affiliate PageFly | ✅ | ✅ (Rebuy bleed) |
| Referral Mention Me iframe | ⛔ aday | — |
| Bundle builder | ⛔ aday | — |
| `/pages/bundles` 404 | ⛔ aday | — |
| Native `/policies/*` stub | leftover | — |
| LP shop/calm/dry-january | 429 | leftover |

---

## Bileşen roster (36)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 7 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 8 | promo-banner-tabs | home | [x] | [x] | reuse | [x] |
| 9 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 12 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 13 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 14 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 15 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 16 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 17 | product-info-tabs | product-detail | [x] | [x] | reuse | [x] |
| 18 | promo-scrolling-marquee | product-detail | [x] | [x] | reuse | [x] |
| 19 | media-shop-the-feed | product-detail | [x] | [x] | reuse | [x] |
| 20 | testimonial-quote-carousel.2 | product-detail | [x] | [x] | reuse | [x] |
| 21 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] |
| 22 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 23 | product-info-main.2 | product-detail | [x] | [x] | reuse | [x] |
| 24–25 | PLP banner + grid | collection | [x] | [x] | reuse | [x] |
| 26 | search-results | search | [ ] script | [x] | reuse | leftover |
| 27 | page-content-main | about-brand | [x] | [x] | reuse | [x] |
| 28 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 29 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 30–31 | ingredients hub + refs | ingredients | [x] | [x] | reuse | [x] |
| 32 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 33 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 34–35 | blog banner + body | blog-post | [x] | [x] | reuse | [x] |
| 36 | page-content-main | affiliate | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince — bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | SHOP: sol Shop by Function + 4 lifestyle kart (hero yerine) |
| global-predictive-search | open + input 3vp | boş drawer → mango Tropical Mango £24 + VIEW ALL |
| global-cart-drawer | empty / filled / qty2 | £30 eşik → Variety 48PACK + free tee/Calm; qty2 subtotal £96 |
| global-menu-drawer | open 375/768 | Shop tab + 8 satır + AS SEEN ON TV. 1440 N/A |
| faq-collapsible-tabs | changed 3vp | When should I drink TRIP? cevap açık |

---

## Aday / leftover

[`candidates/drinktrip-leftovers.md`](../candidates/drinktrip-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] Chrome interact (mega/search/cart/menu)
- [x] PDP / PLP 3vp
- [x] Content templates 3vp
- [ ] Search page resmi 3vp (script crash)
- [x] Validator
