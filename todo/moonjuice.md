# Todo — Moon Juice (moonjuice.com)

*Kaynak:* https://moonjuice.com · *Preset:* `default`  
*Tema (storefront):* **v1.0.2 - Moonjuice Horizon** · `schema_name`: Moonjuice Horizon · `theme_store_id`: null (custom)

**Durum:** Mod A walk + resmi 3vp + interact bitti — 51 obs · 173 PNG · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/moonjuice/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız moonjuice paths |

**Kapsam satırı:**  
`Moon Juice · default · v1.0.2 - Moonjuice Horizon · custom Shopify · home→PDP→PLP→search→cart drawer→content→footer→mobile · 51 obs · 173 PNG · 0 yeni şema · leftover: /cart redirect, 404, rewards, locator, reviews, Klaviyo, Rebuy overlay on tall mains, menu 768, cart qty`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/press/blog | [x] | [x] |
| Mega / search overlay / Rebuy cart / mobile menu | [x] mega+search+cart · menu 375 | [x] 375 menu; 768 hamburger 0×0 |
| PDP `/products/magnesi-om-magnesium-supplement` | [x] flavor Naked + Details + FAQ | [x] |
| PLP `/collections/all` | [x] | [x] (Rebuy flyout boyası) |
| Search `/search?q=magnesium` | [x] | [x] (Rebuy flyout boyası) |
| Cart `/cart` | ⛔ Rebuy drawer; URL home | — |
| About `/pages/about` | [x] | [x] |
| Our Approach `/pages/our-approach` | [x] | [x] |
| Quiz `/pages/quiz` | [x] iframe · PII yok | [x] GET STARTED only |
| Blog `/pages/blog` + `/blogs/education` + article | [x] | [x] |
| FAQ `/pages/faq` | [x] adaptogen açık | [x] |
| Contact `/pages/contact-us` | [x] form yok | [x] |
| Policy privacy | [x] Shopify native | [x] |
| Subscribe `/collections/subscriptions` | [x] | [x] |
| Why it Works | [x] featured + leftover compare | [x] |
| 404 / rewards / store-locator / stockists / ingredients | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] + open 1440 | [x] | [x] | [x] |
| 3 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 4 | promo-scrolling-marquee | home | [x] | [x] | [x] | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 6 | features-multicolumn | home | [x] | [x] | [x] | [x] |
| 7 | features-slider-multicolumn | home | [x] | [x] | [x] | [x] |
| 8 | product-showcase-grid-featured-2 | home | [x] | [x] | [x] | [x] |
| 9 | editorial-image-with-text-overlay | home | [x] | [x] | [x] | [x] |
| 10 | editorial-image-with-text-overlay-2 | home | [x] | [x] | [x] | [x] |
| 11 | social-proof-brand-logos | home | [x] | [x] | [x] | [x] |
| 12 | blog-list-main | home | [x] | [x] | [x] | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 14 | global-cart-drawer | home | [x] empty+filled | [x] | [x] | [x] |
| 15 | global-predictive-search | home | [x] open+magnesium | [x] | [x] | [x] |
| 16 | global-menu-drawer | home | [x] 375 only | [x] | [x] | [x] (768 leftover) |
| 17 | product-info-main | product-detail | [x] + Naked | [x] | [x] | [x] |
| 18–25 | PDP marquee / mocktail / slideshow / inside / compare / FAQ / related / story | product-detail | [x] | [x] | [x] | [x] |
| 26–27 | collection-banner + grid-plp | collection | [x] | [x] | [x] | [x] |
| 28 | search-results | search | [x] | [x] | [x] | [x] |
| 29–32 | about-brand | about-brand | [x] | [x] | [x] | [x] |
| 33–37 | our-approach | about-approach | [x] | [x] | [x] | [x] |
| 38–39 | quiz iframe + copy | quiz | [x] | [x] | [x] | [x] |
| 40–43 | blog list/post | blog-* | [x] | [x] | [x] | [x] |
| 44–46 | faq / contact / policy | mixed | [x] | [x] | [x] | [x] |
| 47–49 | subscribe | subscribe | [x] | [x] | [x] | [x] |
| 50–51 | why-it-works | why-it-works | [x] | [x] | [x] | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | [x] Shop hover `#submenu-1` 4 kolon |
| global-menu-drawer | open 375 | [x] hamburger. 768 0×0 leftover |
| global-predictive-search | input | [x] `magnesium` → AM/PM stack + blog |
| global-cart-drawer | initial + filled | [x] Rebuy; ATC Magnesi-Om Berry/Jar $30.80 |
| product-info-main | changed | [x] Flavor Naked + Naked Calm jar |
| features-multicolumn (PDP) | changed | [x] Details Source/Dose (375 net) |
| faq-collapsible-tabs PDP | changed | [x] ilk soru açık |
| faq-collapsible-tabs FAQ | changed | [x] adaptogen açık |

---

## Aday / leftover

[`candidates/moonjuice-leftovers.md`](../candidates/moonjuice-leftovers.md)

- `/cart` → home (Rebuy drawer asıl sepet)
- 404 “Page not found” + Discover something new
- Okendo/Judge.me PDP reviews (3,859)
- Rewards loyalty sayfası
- Store locator / stockists list
- Ingredients glossary grid
- Why-it-works compare satırları
- Klaviyo e-posta popup (PII)
- Chat widget
- About page-anchor ABOUT \| INGREDIENTS \| SUSTAINABILITY
- Rebuy flyout tall-section screenshot boyası (PLP/search/bazı PDP)
- Menu 768 hamburger 0×0
- Cart qty `changed`

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (50/51; menu yalnız 375)
- [x] Overlay / FAQ / flavor interact
- [ ] Cart qty `changed` (Rebuy +/−)
- [ ] Quiz adımları — **PII yok** (yalnız GET STARTED)
- [ ] Newsletter / contact submit — **yapılmayacak**
