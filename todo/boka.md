# Todo — Boka (boka.com)

*Kaynak:* https://boka.com · *Preset:* `default`  
*Tema (storefront):* **Boka-new live Theme/Impact** (`Shopify.theme.name`) · `schema_name`: **Impact** · `schema_version`: 7.0.1 · `theme_store_id`: 1190 · shop `boka-oral-care.myshopify.com` · theme id `186026197035` · role `main`

**Durum:** Mod A walk + resmi 3vp + interact bitti  
**PR:** draft https://github.com/mattiasadem/qante/pull/20 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/boka/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/boka/` · `evidence/boka/` · `todo/boka.md` · `candidates/boka-*.md` |
| PNG | **153 static** (51×3vp) + **45 interact** = **198** |

**Kapsam satırı:**  
`Boka · default · Boka-new live Theme/Impact · home→PDP→PLP→search→cart→content→footer→mobile · 54 obs · 198 PNG · interact pixel-check · cart qty changed leftover · 0 yeni şema · validate 65/0/0`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | [x] obs | [x] |
| Mega / search overlay / cart drawer / mobile menu | [x] obs | [x] interact (qty changed leftover) |
| PDP `/products/ela-mint-toothpaste` | [x] obs | [x] |
| Gift card PDP | [x] obs | [x] static |
| PLP `/collections/all` + best-sellers | [x] obs | [x] |
| Kids `/collections/kids` hero + quiz | [x] obs | [x] |
| Search `/search?q=toothpaste` | [x] obs | [x] |
| Cart `/cart` empty + filled | [x] obs | [x] |
| About / Our Science / Committee | [x] obs | [x] |
| FAQ (3 accordion) | [x] obs | [x] + ilk soru interact |
| Contact (form **gönderilmedi**) | [x] obs | [x] |
| Guides list + article | [x] obs | [x] |
| Policy privacy + Recycling | [x] obs | [x] |
| Find in stores / Tolstoy / 404 / empty news | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | [x] | [x] hover mega |
| 3 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 4 | product-showcase-tabs | home | [x] | [x] | [x] | [x] Kids tab |
| 5 | features-multicolumn | home | [x] | [x] | [x] | [x] |
| 6 | media-shop-the-feed | home | [x] | [x] | [x] | [x] Tolstoy empty |
| 7 | editorial-custom-content | home | [x] | [x] | [x] | [x] |
| 8 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 9 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 10 | lead-capture-newsletter-band | home | [x] | [x] | [x] | [x] |
| 11 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 12 | global-cart-drawer | home | [x] | [x] | [x] | [x] empty+filled; qty leftover |
| 13 | global-predictive-search | home | [x] | [x] | [x] | [x] toothpaste |
| 14 | global-menu-drawer | home | [x] | [x] | [x] | [x] 375/768 |
| 15 | product-info-main | product-detail | [x] | [x] | [x] | [x] One-time |
| 16 | features-multicolumn | product-detail | [x] | [x] | [x] | [x] |
| 17 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] |
| 18 | features-multicolumn-2 | product-detail | [x] | [x] | [x] | [x] |
| 19 | testimonial-quote-carousel | product-detail | [x] | [x] | [x] | [x] |
| 20 | faq-collapsible-tabs | product-detail | [x] | [x] | [x] | [x] ilk soru |
| 21 | editorial-rich-text | product-detail | [x] | [x] | [x] | [x] |
| 22 | product-info-main-2 | product-detail | [x] | [x] | [x] | [x] gift |
| 23 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 24 | collection-banner | collection | [x] | [x] | [x] | [x] |
| 25 | faq-collapsible-tabs | collection | [x] | [x] | [x] | [x] |
| 26 | editorial-rich-text | collection | [x] | [x] | [x] | [x] |
| 27 | hero-slideshow-2 | collection | [x] | [x] | [x] | [x] |
| 28 | product-finder-quiz | collection | [x] | [x] | [x] | [x] leftover map |
| 29 | faq-collapsible-tabs-2 | collection | [x] | [x] | [x] | [x] |
| 30 | editorial-rich-text-2 | collection | [x] | [x] | [x] | [x] |
| 31 | search-results | search | [x] | [x] | [x] | [x] |
| 32 | cart-page-main | cart | [x] | [x] | [x] | [x] filled |
| 33–35 | editorial-image-with-text ×3 | about-brand | [x] | [x] | [x] | [x] |
| 36–38 | science (card + icons + rich) | about-brand | [x] | [x] | [x] | [x] |
| 39–42 | committee custom liquids | about-brand | [x] | [x] | [x] | [x] |
| 43 | page-content-main | about-brand | [x] | [x] | [x] | [x] stores leftover |
| 44–46 | faq-collapsible-tabs ×3 | faq-support | [x] | [x] | [x] | [x] ilk grup interact |
| 47–48 | contact rich + form | contact | [x] | [x] | [x] | [x] |
| 49 | blog-list-main | blog-list | [x] | [x] | [x] | [x] |
| 50–52 | article + related + faq | blog-post | [x] | [x] | [x] | [x] |
| 53–54 | privacy + recycling | policy | [x] | [x] | [x] | [x] |

---

## Interact (piksel değişen)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop **hover** — tık Shop All PLP'ye kaçtı |
| global-predictive-search | initial, input | `toothpaste` → Products listesi |
| global-cart-drawer | initial, filled | Ela Mint Subscribe $9.88. **changed leftover** (2 deneme) |
| global-menu-drawer | open | 375/768 hamburger |
| product-showcase-tabs | initial, changed | Best Sellers → Kids kart seti |
| product-info-main | initial, changed | One-time title tık (kart ortası sticky ATC) |
| faq-collapsible-tabs PDP | initial, changed | cruelty-free açık |
| faq-collapsible-tabs FAQ | initial, changed | heavy metals açık |
| cart-page-main | filled | Ela Mint satır; boş = static initial |

---

## Aday / leftover

[`candidates/boka-leftovers.md`](../candidates/boka-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (51×3)
- [x] Overlay / tab / FAQ / cart interact
- [ ] Tolstoy hydrate
- [ ] Store locator (yok)
- [ ] Cart drawer qty `changed` (Recharge stepper)
