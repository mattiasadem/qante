# Todo — Glidefeet (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://glidefeet.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/clean-glidefeet-best-shoes-shopify-templates-o-s-2-0  
*Preset klasör:* `default` · slug `glidefeet`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Glidefeet-v-1-5-0**  
`schema_name` = **Glidefeet** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170474012955`  
`theme_store_id` = **null** (Theme Store official değil — Speedo third-party)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host + `Shopify.shop` = `glidefeet.myshopify.com` · locale `en` · country `US` · currency `USD`  
Storefront password: vendor `1` (aynı host, `/password`)

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/glidefeet/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/glidefeet/`, `evidence/glidefeet/`, `todo/glidefeet.md`, `candidates/glidefeet-leftovers.md` + storefront password helper |

**Kapsam satırı:**  
`Glidefeet · default · Glidefeet-v-1-5-0 / schema_name Glidefeet 1.5.0 · theme_store_id null · shop glidefeet.myshopify.com · home→PDP Huarache→PLP /collections/all→/collections→search shoe→cart empty→about-us→contact→faqs→news+sneaker fashion post→404 · 39 obs · 0 yeni şema · leftover: candidates/glidefeet-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Header kapalı (mega yok, drawer-menu) | [x] obs | [ ] interact |
| Predictive search `huarache` | [x] obs | [ ] interact |
| Menu drawer hamburger 375+768+1440 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Huarache Size/Color | [x] obs | [ ] interact |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=shoe` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] capture |
| News + sneaker fashion post | [x] obs | [ ] capture |
| 404 `/pages/contact-us` | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Glidefeet / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement swiper | `promo-announcement-bar` | reuse |
| 2 | header drawer-menu | `navigation-header-mega` | reuse · mega yok |
| 3 | slideshow IMPROVE YOUR PERFORMANCE | `hero-slideshow` | reuse |
| 4 | featured_collection SHOP FOOTWEAR | `product-showcase-grid-featured` | reuse |
| 5 | rich-text brand | `editorial-rich-text` | reuse |
| 6 | collection-list SHOP BY CATEGORY | `collection-nav-grid` | reuse |
| 7 | featured BEST SELLING | `product-showcase-grid-featured.2` | reuse |
| 8 | SALE ticker | `promo-scrolling-marquee` | reuse |
| 9 | multirow CASUAL + SANDALS | `editorial-image-with-text` | reuse · 2 satır |
| 10 | multicolumn USP | `trust-icon-row` | reuse |
| 11 | banner DON'T MISS THIS DEAL | `editorial-image-with-text-overlay` | reuse |
| 12 | featured-blog LATEST NEWS | `blog-list-main` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover 0px / PII |
| 15 | predictive-search | `global-predictive-search` | reuse · interact |
| 16 | menu-drawer | `global-menu-drawer` | reuse · 375/768/1440 |
| 17 | CartDrawer | `global-cart-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–13 | home static | home | [ ] | [x] | reuse | [ ] |
| 14–16 | search / menu / cart overlays | home | [ ] | [x] | reuse | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 18–21 | tabs / IWT / banner / related | product-detail | [ ] | [x] | reuse | [ ] |
| 22–23 | banner + PLP | collection | [ ] | [x] | reuse | [ ] |
| 24 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 25 | search-results | search | [ ] | [x] | reuse | [ ] |
| 26 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 27–31 | banner / IWT / team / banner2 / IWT2 | about-brand | [ ] | [x] | reuse | [ ] |
| 32–34 | banner / icon-band / form | contact | [ ] | [x] | reuse | [ ] |
| 35–36 | banner + faq | faq-support | [ ] | [x] | reuse | [ ] |
| 37–38 | list + post | blog* | [ ] | [x] | reuse | [ ] |
| 39 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial | (capture sonrası) |
| global-menu-drawer | open + Shop changed | (bekliyor) |
| global-predictive-search | input | (bekliyor) |
| global-cart-drawer | filled + changed | (bekliyor) |
| cart-page-main | filled + changed | (bekliyor) |
| product-info-main | changed Size | (bekliyor) |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/glidefeet-leftovers.md`](../candidates/glidefeet-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact menu / search / cart / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs` — 0 error
