# Todo — Boka (boka.com)

*Kaynak:* https://boka.com · *Preset:* `default`  
*Tema (storefront):* **Boka-new live Theme/Impact** (`Shopify.theme.name`) · `schema_name`: **Impact** · `schema_version`: 7.0.1 · `theme_store_id`: 1190 · shop `boka-oral-care.myshopify.com` · theme id `186026197035` · role `main`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/boka/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/boka/` · `evidence/boka/` · `todo/boka.md` · `candidates/boka-*.md` |

**Kapsam satırı:**  
`Boka · default · Boka-new live Theme/Impact · home→PDP→PLP→search→cart→content→footer→mobile · obs yazıldı · 3vp/interact bekleniyor · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | [x] obs | [ ] |
| Mega / search overlay / cart drawer / mobile menu | [x] obs | [ ] interact |
| PDP `/products/ela-mint-toothpaste` | [x] obs | [ ] |
| Gift card PDP | [x] obs | [ ] |
| PLP `/collections/all` + best-sellers | [x] obs | [ ] |
| Kids `/collections/kids` hero + quiz | [x] obs | [ ] |
| Search `/search?q=toothpaste` | [x] obs | [ ] |
| Cart `/cart` empty + filled | [x] obs | [ ] |
| About / Our Science / Committee | [x] obs | [ ] |
| FAQ (3 accordion) | [x] obs | [ ] |
| Contact (form **gönderilmedi**) | [x] obs | [ ] |
| Guides list + article | [x] obs | [ ] |
| Policy privacy + Recycling | [x] obs | [ ] |
| Find in stores / Tolstoy / 404 / empty news | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | [x] | [ ] |
| 4 | product-showcase-tabs | home | [ ] | [x] | [x] | [ ] |
| 5 | features-multicolumn | home | [ ] | [x] | [x] | [ ] |
| 6 | media-shop-the-feed | home | [ ] | [x] | [x] | [ ] Tolstoy |
| 7 | editorial-custom-content | home | [ ] | [x] | [x] | [ ] experts |
| 8 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] subscribe |
| 9 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] bundles |
| 10 | lead-capture-newsletter-band | home | [ ] | [x] | [x] | [ ] |
| 11 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 12 | global-cart-drawer | home | [ ] | [x] | [x] | [ ] |
| 13 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 14 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] 375/768 |
| 15 | product-info-main | product-detail | [ ] | [x] | [x] | [ ] |
| 16 | features-multicolumn | product-detail | [ ] | [x] | [x] | [ ] |
| 17 | product-showcase-related | product-detail | [ ] | [x] | [x] | [ ] |
| 18 | features-multicolumn-2 | product-detail | [ ] | [x] | [x] | [ ] ingredients |
| 19 | testimonial-quote-carousel | product-detail | [ ] | [x] | [x] | [ ] reviews app |
| 20 | faq-collapsible-tabs | product-detail | [ ] | [x] | [x] | [ ] |
| 21 | editorial-rich-text | product-detail | [ ] | [x] | [x] | [ ] |
| 22 | product-info-main-2 | product-detail | [ ] | [x] | [x] | [ ] gift |
| 23 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 24 | collection-banner | collection | [ ] | [x] | [x] | [ ] best-sellers |
| 25 | faq-collapsible-tabs | collection | [ ] | [x] | [x] | [ ] |
| 26 | editorial-rich-text | collection | [ ] | [x] | [x] | [ ] |
| 27 | hero-slideshow-2 | collection | [ ] | [x] | [x] | [ ] kids |
| 28 | product-finder-quiz | collection | [ ] | [x] | [x] | [ ] kids |
| 29 | faq-collapsible-tabs-2 | collection | [ ] | [x] | [x] | [ ] kids |
| 30 | editorial-rich-text-2 | collection | [ ] | [x] | [x] | [ ] kids |
| 31 | search-results | search | [ ] | [x] | [x] | [ ] |
| 32 | cart-page-main | cart | [ ] | [x] | [x] | [ ] |
| 33–35 | editorial-image-with-text ×3 | about-brand | [ ] | [x] | [x] | [ ] |
| 36–38 | science (card + icons + rich) | about-brand | [ ] | [x] | [x] | [ ] |
| 39–42 | committee custom liquids | about-brand | [ ] | [x] | [x] | [ ] |
| 43 | page-content-main | about-brand | [ ] | [x] | [x] | [ ] stores leftover |
| 44–46 | faq-collapsible-tabs ×3 | faq-support | [ ] | [x] | [x] | [ ] |
| 47–48 | contact rich + form | contact | [ ] | [x] | [x] | [ ] |
| 49 | blog-list-main | blog-list | [ ] | [x] | [x] | [ ] |
| 50–52 | article + related + faq | blog-post | [ ] | [x] | [x] | [ ] |
| 53–54 | privacy + recycling | policy | [ ] | [x] | [x] | [ ] |

---

## Interact (piksel değişen)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop mega |
| global-predictive-search | initial, input | `toothpaste` |
| global-cart-drawer | initial, filled, changed | Ela Mint + adet 2 |
| global-menu-drawer | open | 375/768 hamburger |
| product-showcase-tabs | changed | Kids tab |
| product-info-main | changed | Subscribe (yoksa missing) |
| faq-collapsible-tabs (FAQ + PDP) | changed | ilk soru |
| cart-page-main | filled | Ela Mint satır |

---

## Aday / leftover

[`candidates/boka-leftovers.md`](../candidates/boka-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / tab / FAQ / cart interact
- [ ] Tolstoy hydrate
- [ ] Store locator (yok)
