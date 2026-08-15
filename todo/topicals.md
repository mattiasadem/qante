# Todo — Topicals (mytopicals.com)

*Kaynak:* https://mytopicals.com · *Preset:* `default` · *Tema adı vitrinde yok*

**Platform:** Shopify **Hydrogen + Oxygen** + **Sanity CMS** (`powered-by: Shopify, Oxygen, Hydrogen`). Theme Store / `Shopify.theme.name` yok — uydurulmadı.

**Şu anki odak:** resmi 3vp capture + interact (mega / search / cart / hamburger)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/topicals/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | mevcut tiplere observation + delta — `sections/*.json` dokunulmadı |
| Yeni şema | 0 |
| Kapsam satırı | Topicals · default · Hydrogen/Sanity · home→PDP→PLP→search→cart→content→footer→mobile menu · 40 obs · adaylar açık |

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home (6 Sanity section + chrome) | ⬜ obs yazıldı | ⬜ |
| PDP Faded Dark Spot Peel Pads | ⬜ | ⬜ |
| PLP `/collections/all` | ⬜ | ⬜ |
| Search `?q=faded` | ⬜ | ⬜ |
| Cart `/cart` + drawer | ⬜ | ⬜ |
| About `/pages/about` | ⬜ | ⬜ |
| FAQ `/pages/faq` | ⬜ | ⬜ |
| Contact `/pages/contact-us` | ⬜ form gönderilmedi | ⬜ |
| Rewards `/pages/rewards` | ⬜ | ⬜ |
| Subscription `/pages/subscription` | ⬜ | ⬜ |
| Promotions `/pages/topicals-promotions` | ⬜ | ⬜ |
| Policy `/policies/privacy-policy` | ⬜ | ⬜ |
| Store locator | ⬜ aday | ⬜ |
| Blog article (list 404) | ⬜ article var | ⬜ |
| 404 `/blogs/news` | ⬜ aday | ⬜ |
| Mobile 375 menu | ⬜ | ⬜ |
| Predictive search | ⬜ kapalı kare yanıltır | ⬜ |
| Footer | ⬜ | ⬜ |
| Campaigns `/campaigns` | ⛔ hydrate boş — aday | — |
| Blog list `/blogs/*` | ⛔ 404 | — |

---

## Home roster (Sanity `_type`)

| # | Sanity | QANTE schemaId | Karar |
|---|---|---|---|
| — | banner | `promo-announcement-bar` | reuse |
| — | header mega | `navigation-header-mega` | reuse · interact |
| 1 | hero | `hero-slideshow` | reuse · tek slayt |
| 2 | productCarousel | `product-showcase-grid-featured` | reuse · slider |
| 3 | fullBleed (subscribe) | `product-showcase-featured` | reuse |
| 4 | grid (WE'RE TOPICALS) | `editorial-image-with-text` | reuse |
| 5 | fullBleed video | `media-video-hero` | reuse |
| 6 | socialGallery | `media-shop-the-feed` | reuse |
| — | footer | `footer-columns-newsletter` | reuse |
| — | cart dialog | `global-cart-drawer` | reuse |
| — | search overlay | `global-predictive-search` | reuse · interact |
| — | 375 sticky menu | `global-menu-drawer` | reuse · interact |

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | global | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | global | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | instance | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | instance | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-featured | instance | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text | instance | [ ] | [x] | reuse | [ ] |
| 7 | media-video-hero | instance | [ ] | [x] | reuse | [ ] |
| 8 | media-shop-the-feed | instance | [ ] | [x] | reuse | [ ] |
| 9 | footer-columns-newsletter | global | [ ] | [x] | reuse | [ ] |
| 10 | global-cart-drawer | global | [ ] | [x] | reuse | [ ] |
| 11 | global-predictive-search | global | [ ] | [x] | reuse | [ ] |
| 12 | global-menu-drawer | global | [ ] | [x] | reuse | [ ] |
| 13 | product-info-main | instance | [ ] | [x] | reuse | [ ] |
| 14 | before-after-slider (PDP RESULTS) | instance | [ ] | [x] | reuse | [ ] |
| 15 | media-video-hero (how-to) | instance | [ ] | [x] | reuse | [ ] |
| 16 | features-multicolumn (ingredients) | instance | [ ] | [x] | reuse | [ ] |
| 17 | faq-collapsible-tabs (PDP) | instance | [ ] | [x] | reuse | [ ] |
| 18 | product-showcase-related | instance | [ ] | [x] | reuse | [ ] |
| 19 | product-showcase-grid-plp | instance | [ ] | [x] | reuse | [ ] |
| 20 | search-results | instance | [ ] | [x] | reuse | [ ] |
| 21 | cart-page-main | instance | [ ] | [x] | reuse | [ ] |
| 22 | about + faq + contact + rewards + sub + promo + policy + locator + blog + 404 | mixed | [ ] | [x] | reuse | [ ] |

---

## Aday / şemaya sığmayan

- Alia scratch-card popup (`#alia-root-*`, “Try your luck”) — üçüncü parti overlay
- Okendo PDP reviews (section 5) — reviews şeması yok
- Store locator harita (StoreRocket / Sephora)
- 404 video hero şablonu
- Blog **list** (`/blogs/news`, `/blogs/flareupfiles`) Hydrogen 404; article URL yaşıyor
- `/campaigns` hydrate boş
- Loyalty/rewards widget (Influence/üçüncü parti?)
- Hydrogen/Sanity section id yok — selector `main#main > section:nth-of-type(n)` / Playwright `:has-text`

---

## Evidence backlog

- [ ] Resmi 3vp tüm claiming obs
- [ ] Interact: SHOP mega (1440), hamburger (375/768), search fill `faded`, cart filled
- [ ] Alia overlay capture’ı bozarsa not
