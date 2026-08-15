# Todo — Hiyo (drinkhiyo.com)

*Kaynak:* https://drinkhiyo.com · *Preset:* `default`  
*Tema (vitrinde görülen):* **hiyo/main** · `schema_name`: **Impact** · `schema_version`: 6.2.0 · `theme_store_id`: null (custom Impact)  
*Shop:* drink-hiyo.myshopify.com

**Durum:** Mod A walk + resmi 3vp + interact bitti  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hiyo/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hiyo/`, `evidence/hiyo/`, `todo/hiyo.md`, `candidates/hiyo-*.md` |

**Kapsam satırı:**  
`Hiyo · default · hiyo/main (Impact 6.2.0 custom) · home→PDP→PLP→search→cart→content→footer→mobile · 62 obs · 0 yeni şema · leftover/aday kayıtlı`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | JSON + 3vp | [x] |
| Mega / search drawer / cart drawer / mobile menu | JSON + interact | [x] |
| PDP `/products/variety-pack` | JSON + 24-pack changed | [x] |
| Gift card `/products/hiyo-gift-card` | JSON + 3vp | [x] |
| PLP `/collections/all` | JSON + 3vp | [x] |
| Merch `/collections/merch` | JSON + 3vp | [x] |
| Search `/search?q=classic` | JSON + 3vp | [x] |
| Cart `/cart` (boş) | JSON + 3vp | [x] |
| Our story `/pages/our-story` | JSON + 3vp | [x] |
| FAQ `/pages/faqs` (4 blok) | JSON + 3vp; general changed | [x] |
| Blog `/blogs/all` + peach-on-the-beach | JSON + 3vp | [x] |
| Contact | JSON + 3vp · form **gönderilmedi** | [x] |
| Policy / terms / accessibility / size chart | JSON + 3vp | [x] |
| Reviews / rewards (Yotpo) | JSON + 3vp · app leftover | [x] |
| Wholesale copy | JSON + 3vp · app form aday | [x] |
| Partnerships | JSON + 3vp | [x] |
| Tracking / store locator | JSON + 3vp · widget aday | [x] |
| Landing `/pages/feel-the-float` hero | JSON + 3vp · diğer LP leftover | [x] |
| 404 `/collections/shop-all` `/pages/subscriptions` | ⛔ aday | — |
| Empty blogs `/blogs/news` `/blogs/recipes` | ⛔ leftover | — |

---

## Bileşen roster (62)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home ingredients | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 8 | editorial-image-with-text | home subscribe | [x] | [x] | reuse | [x] |
| 9 | social-proof-brand-logos | home retail | [x] | [x] | reuse | [x] |
| 10 | editorial-rich-text | home FIND HIYO | [x] | [x] | reuse | [x] |
| 11 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 12 | editorial-image-with-text.2 | home founders | [x] | [x] | reuse | [x] |
| 13 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 14 | social-proof-brand-logos.2 | home press | [x] | [x] | reuse | [x] |
| 15 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 16 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 17 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 18 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 19–22 | PDP kit | product-detail | [x] | [x] | reuse | [x] |
| 23–24 | PLP all flavors | collection | [x] | [x] | reuse | [x] |
| 25–26 | merch PLP | collection-merch | [x] | [x] | reuse | [x] |
| 27 | search-results | search | [x] | [x] | reuse | [x] |
| 28–29 | cart empty + you may like | cart | [x] | [x] | reuse | [x] |
| 30–38 | our story | about-brand | [x] | [x] | reuse | [x] |
| 39–43 | FAQ overlay + 4 groups | faq-support | [x] | [x] | reuse | [x] |
| 44–46 | blog list + post + featured | blog-* | [x] | [x] | reuse | [x] |
| 47 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 48–51 | policy / terms / a11y / size | pages | [x] | [x] | reuse | [x] |
| 52–53 | reviews + rewards Yotpo | pages | [x] | [x] | reuse | [x] |
| 54–58 | wholesale / partnerships / track / locator | pages | [x] | [x] | reuse | [x] |
| 59 | hero-slideshow | landing-campaign | [x] | [x] | reuse | [x] |
| 60 | product-info-main | gift-card | [x] | [x] | reuse | [x] |

*62 dosya; tablo gruplu. Menu drawer 1440 yok (opener `lg:hidden`).*

---

## Interact (piksel değişince — bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | SHOP hover: 5 ürün kolonu + GET A TASTE |
| global-menu-drawer | changed 375/768 | SHOP next: 8 ürün + tropical görsel |
| global-predictive-search | input 3vp | `classic` → products / classic pack $44.99. 375 forceOpen (ikon yok) |
| global-cart-drawer | filled + changed 3vp | ATC UI → opener. 1×$38.25 → 2×$71.50 + BUY 2 SAVE $5. Checkout yok |
| faq-collapsible-tabs | changed 3vp | WHAT IS HIYO? cevap açık |
| product-info-main | changed 3vp | 12-pack → 24-pack; subscribe $38.25 → $71.50 |

---

## Aday / leftover

[`candidates/hiyo-leftovers.md`](../candidates/hiyo-leftovers.md)

Dürüst kalanlar:
- 375 search opener yok (yalnız hamburger + sepet); statik 375 search karesi drawer değil
- Overlay statik karelerde Captain Compliance cookie (shadow); reject interact’te
- Gorgias chat FAB bazı kırplarda
- Store locator 3vp yalnız başlık (“floating onto shelves…”); Pear iframe aday
- Wholesale “complete the form below” — form hydrate yok
- Menu 1440 zero-size
- LEARN mega / one-time / flavor thumb / FAQ diğer gruplar tıklanmadı
- `/pages/feel-the-float` diğer section’lar home kiti — tekrar 3vp yok
- Contact SUBMIT gönderilmedi; tracking sipariş no yok (PII)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (menu 1440 hariç — opener yok)
- [x] Overlay / FAQ / cart / PDP interact
- [ ] LP feel-the-float diğer section’lar (home kiti — tekrar yok)
- [ ] `/blogs/news` `/blogs/recipes` boş
- [ ] Wholesale app form hydrate
- [ ] Pear store-locator iframe
