# Todo — TRIP (drink-trip.com)

*Kaynak:* https://drink-trip.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Trip-UK/main** · `schema_name`: **Focal** · `schema_version`: 10.2.0 · `theme_store_id`: null (custom Focal)  
*Shop:* drink-trip.myshopify.com · theme id `178832998786` · role `main`

**Durum:** Mod A walk başladı — observation JSON yazıldı; resmi 3vp / interact kuyrukta  
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
`TRIP · default · Trip-UK/main (Focal 10.2.0 custom) · home→PDP→PLP→search→cart→content→footer→mobile · 36 obs · 0 yeni şema · leftover/aday kayıtlı`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | JSON | [ ] capture |
| Mega / search drawer / Rebuy cart / mobile menu | JSON interact | [ ] capture |
| PDP `/products/variety-pack-value` | JSON | [ ] capture |
| Flavour PDP `/products/tropical-mango` | aynı kit | leftover |
| PLP `/collections/all-products` | JSON | [ ] capture |
| PLP everyday-calm (aynı template) | not | tekrar yok |
| Search `/search?q=mango` | JSON | [ ] capture |
| Cart `/cart` → `/?viewcart=true` | Rebuy drawer | [ ] interact |
| About `/pages/about-us` | JSON | [ ] capture |
| FAQ `/pages/faqs` | JSON | [ ] capture |
| Contact `/pages/contact-us` | JSON · form **gönderilmedi** | [ ] capture |
| Ingredients `/pages/ingredients-education` | JSON | [ ] capture |
| Policy `/pages/privacy-policy` | JSON | [ ] capture |
| Blog `/blogs/news` + magnesium yazısı | JSON | [ ] capture |
| Affiliate PageFly | JSON | [ ] capture |
| Referral Mention Me iframe | ⛔ aday | — |
| Bundle builder | ⛔ aday | — |
| `/pages/bundles` 404 | ⛔ aday | — |
| Native `/policies/*` stub | leftover | — |
| LP shop/calm/dry-january | 429 | leftover |

---

## Bileşen roster (36)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 7 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 8 | promo-banner-tabs | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 13 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 14 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | product-info-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | promo-scrolling-marquee | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | media-shop-the-feed | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | social-proof-brand-logos | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | testimonial-quote-carousel | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | product-info-main.2 | product-detail | [ ] | [x] | reuse | [ ] |
| 24–25 | PLP banner + grid | collection | [ ] | [x] | reuse | [ ] |
| 26 | search-results | search | [ ] | [x] | reuse | [ ] |
| 27 | page-content-main | about-brand | [ ] | [x] | reuse | [ ] |
| 28 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 29 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 30–31 | ingredients hub + refs | ingredients | [ ] | [x] | reuse | [ ] |
| 32 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 33 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 34–35 | blog banner + body | blog-post | [ ] | [x] | reuse | [ ] |
| 36 | page-content-main | affiliate | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | SHOP hover: Shop by Function + 4 kart — **çekilecek** |
| global-predictive-search | open + input | mango → Tropical Mango £24 — **çekilecek** |
| global-cart-drawer | empty + filled + qty | Rebuy — **çekilecek** |
| global-menu-drawer | open 375/768 | hamburger — **çekilecek** |
| faq / tabs / PDP size | — | statik sonrası, piksel değişirse |

---

## Aday / leftover

[`candidates/drinktrip-leftovers.md`](../candidates/drinktrip-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Chrome interact (mega/search/cart/menu)
- [ ] PDP / PLP / search 3vp
- [ ] Content templates 3vp
- [ ] Validator
