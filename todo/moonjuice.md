# Todo — Moon Juice (moonjuice.com)

*Kaynak:* https://moonjuice.com · *Preset:* `default`  
*Tema (storefront):* **v1.0.2 - Moonjuice Horizon** · `schema_name`: Moonjuice Horizon · `theme_store_id`: null (custom)

**Durum:** Mod A walk yazıldı — 51 obs · resmi 3vp / interact kuyrukta  
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
`Moon Juice · default · v1.0.2 - Moonjuice Horizon · custom Shopify · home→PDP→PLP→search→cart drawer→content→footer→mobile · 51 obs · 0 yeni şema · leftover: /cart redirect, 404, rewards, locator, reviews widget, Klaviyo`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/press/blog | ⬜ capture | ⬜ |
| Mega / search overlay / Rebuy cart / mobile menu | ⬜ interact | ⬜ |
| PDP `/products/magnesi-om-magnesium-supplement` | ⬜ + flavor/FAQ/Details | ⬜ |
| PLP `/collections/all` | ⬜ | ⬜ |
| Search `/search?q=magnesium` | ⬜ | ⬜ |
| Cart `/cart` | ⛔ Rebuy drawer; URL home | — |
| About `/pages/about` | ⬜ | ⬜ |
| Our Approach `/pages/our-approach` | ⬜ | ⬜ |
| Quiz `/pages/quiz` | ⬜ iframe · PII yok | ⬜ |
| Blog `/pages/blog` + `/blogs/education` + article | ⬜ | ⬜ |
| FAQ `/pages/faq` | ⬜ + ilk soru | ⬜ |
| Contact `/pages/contact-us` | ⬜ form yok | ⬜ |
| Policy privacy | ⬜ Shopify native | ⬜ |
| Subscribe `/collections/subscriptions` | ⬜ | ⬜ |
| Why it Works | ⬜ featured + leftover compare | ⬜ |
| 404 / rewards / store-locator / stockists / ingredients | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | [x] | [ ] |
| 4 | promo-scrolling-marquee | home | [ ] | [x] | [x] | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 6 | features-multicolumn | home | [ ] | [x] | [x] | [ ] |
| 7 | features-slider-multicolumn | home | [ ] | [x] | [x] | [ ] |
| 8 | product-showcase-grid-featured-2 | home | [ ] | [x] | [x] | [ ] |
| 9 | editorial-image-with-text-overlay | home | [ ] | [x] | [x] | [ ] |
| 10 | editorial-image-with-text-overlay-2 | home | [ ] | [x] | [x] | [ ] |
| 11 | social-proof-brand-logos | home | [ ] | [x] | [x] | [ ] |
| 12 | blog-list-main | home | [ ] | [x] | [x] | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 14 | global-cart-drawer | home | [ ] | [x] | [x] | [ ] |
| 15 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 16 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | [x] | [ ] |
| 18–25 | PDP marquee / mocktail / slideshow / inside / compare / FAQ / related / story | product-detail | [ ] | [x] | [x] | [ ] |
| 26–27 | collection-banner + grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 28 | search-results | search | [ ] | [x] | [x] | [ ] |
| 29–32 | about-brand | about-brand | [ ] | [x] | [x] | [ ] |
| 33–37 | our-approach | about-approach | [ ] | [x] | [x] | [ ] |
| 38–39 | quiz iframe + copy | quiz | [ ] | [x] | [x] | [ ] |
| 40–43 | blog list/post | blog-* | [ ] | [x] | [x] | [ ] |
| 44–46 | faq / contact / policy | mixed | [ ] | [x] | [x] | [ ] |
| 47–49 | subscribe | subscribe | [ ] | [x] | [x] | [ ] |
| 50–51 | why-it-works | why-it-works | [ ] | [x] | [x] | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | Shop hover `#submenu-1` |
| global-menu-drawer | open 375/768 | hamburger `summary[aria-label=Menu]` |
| global-predictive-search | input | `magnesium` |
| global-cart-drawer | initial + filled | Rebuy; ATC Magnesi-Om |
| product-info-main | changed | Flavor Naked |
| features-multicolumn (PDP) | changed | Details + |
| faq-collapsible-tabs PDP | changed | ilk soru |
| faq-collapsible-tabs FAQ | changed | adaptogen |

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

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / FAQ / flavor interact
- [ ] Cart qty `changed` (Rebuy +/−)
- [ ] Quiz adımları — **PII yok**
- [ ] Newsletter / contact submit — **yapılmayacak**
