# Todo — Hiyo (drinkhiyo.com)

*Kaynak:* https://drinkhiyo.com · *Preset:* `default`  
*Tema (vitrinde görülen):* **hiyo/main** · `schema_name`: **Impact** · `schema_version`: 6.2.0 · `theme_store_id`: null (custom Impact)  
*Shop:* drink-hiyo.myshopify.com

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hiyo/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hiyo/`, `evidence/hiyo/`, `todo/hiyo.md`, `candidates/hiyo-*.md` |

**Kapsam satırı (hedef):**  
`Hiyo · default · hiyo/main (Impact 6.2.0 custom) · home→PDP→PLP→search→cart→content→footer→mobile · 62 obs · 0 yeni şema · leftover/aday kayıtlı`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | JSON yazıldı | [ ] |
| Mega / search drawer / cart drawer / mobile menu | JSON + interact plan | [ ] |
| PDP `/products/variety-pack` | JSON | [ ] |
| Gift card `/products/hiyo-gift-card` | JSON | [ ] |
| PLP `/collections/all` | JSON | [ ] |
| Merch `/collections/merch` | JSON | [ ] |
| Search `/search?q=classic` | JSON | [ ] |
| Cart `/cart` (boş) | JSON | [ ] |
| Our story `/pages/our-story` | JSON | [ ] |
| FAQ `/pages/faqs` (4 blok) | JSON | [ ] |
| Blog `/blogs/all` + peach-on-the-beach | JSON | [ ] |
| Contact | JSON · form **gönderilmedi** | [ ] |
| Policy / terms / accessibility / size chart | JSON | [ ] |
| Reviews / rewards (Yotpo) | JSON | [ ] |
| Wholesale copy | JSON · app form aday | [ ] |
| Partnerships | JSON | [ ] |
| Tracking / store locator | JSON + aday | [ ] |
| Landing `/pages/feel-the-float` hero | JSON · diğer LP leftover | [ ] |
| 404 `/collections/shop-all` `/pages/subscriptions` | ⛔ aday | — |
| Empty blogs `/blogs/news` `/blogs/recipes` | ⛔ leftover | — |

---

## Bileşen roster (62)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | features-multicolumn | home ingredients | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 8 | editorial-image-with-text | home subscribe | [ ] | [x] | reuse | [ ] |
| 9 | social-proof-brand-logos | home retail | [ ] | [x] | reuse | [ ] |
| 10 | editorial-rich-text | home FIND HIYO | [ ] | [x] | reuse | [ ] |
| 11 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 12 | editorial-image-with-text.2 | home founders | [ ] | [x] | reuse | [ ] |
| 13 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 14 | social-proof-brand-logos.2 | home press | [ ] | [x] | reuse | [ ] |
| 15 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 16 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 17 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 18 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 19–22 | PDP kit | product-detail | [ ] | [x] | reuse | [ ] |
| 23–24 | PLP all flavors | collection | [ ] | [x] | reuse | [ ] |
| 25–26 | merch PLP | collection-merch | [ ] | [x] | reuse | [ ] |
| 27 | search-results | search | [ ] | [x] | reuse | [ ] |
| 28–29 | cart empty + you may like | cart | [ ] | [x] | reuse | [ ] |
| 30–38 | our story | about-brand | [ ] | [x] | reuse | [ ] |
| 39–43 | FAQ overlay + 4 groups | faq-support | [ ] | [x] | reuse | [ ] |
| 44–46 | blog list + post + featured | blog-* | [ ] | [x] | reuse | [ ] |
| 47 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 48–51 | policy / terms / a11y / size | pages | [ ] | [x] | reuse | [ ] |
| 52–53 | reviews + rewards Yotpo | pages | [ ] | [x] | reuse | [ ] |
| 54–58 | wholesale / partnerships / track / locator | pages | [ ] | [x] | reuse | [ ] |
| 59 | hero-slideshow | landing-campaign | [ ] | [x] | reuse | [ ] |
| 60 | product-info-main | gift-card | [ ] | [x] | reuse | [ ] |

*(62 dosya; tablo gruplu)*

---

## Interact (piksel değişince)

| Bileşen | State | Plan |
|---|---|---|
| navigation-header-mega | open | 1440 SHOP details |
| global-menu-drawer | open | 375/768 hamburger |
| global-predictive-search | input | `classic` |
| global-cart-drawer | initial / filled / changed | variety-pack ATC |
| faq-collapsible-tabs | changed | ilk soru |
| product-info-main | changed | yalnız piksel değişirse (plan/flavor) |

---

## Aday / leftover

[`candidates/hiyo-leftovers.md`](../candidates/hiyo-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / FAQ / cart interact
- [ ] LP feel-the-float diğer section'lar (home kiti — tekrar yok)
- [ ] `/blogs/news` `/blogs/recipes` boş
- [ ] Wholesale app form hydrate
