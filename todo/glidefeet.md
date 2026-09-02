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

**Durum:** Mod A walk + resmi 3vp + interact (PNG bakıldı)  
**PR:** https://github.com/mattiasadem/qante/pull/339 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/glidefeet/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| PNG | **145** (108 static 3vp + 37 interact) |
| Parallel | yalnız `observations/glidefeet/`, `evidence/glidefeet/`, `todo/glidefeet.md`, `candidates/glidefeet-leftovers.md` + storefront password helper + Speedo `popup-active` dismiss |

**Kapsam satırı:**  
`Glidefeet · default · Glidefeet-v-1-5-0 / schema_name Glidefeet 1.5.0 · theme_store_id null · shop glidefeet.myshopify.com · home→PDP Huarache→PLP /collections/all→/collections→search shoe→cart empty+filled+qty→about-us→contact→faqs→news+sneaker fashion post→404 · interact: hamburger+Shop 375/768/1440 · search huarache · cart drawer+page filled/qty · PDP Size 8→10 · featured hover 1440 · 39 obs · 145 PNG · 0 yeni şema · leftover: candidates/glidefeet-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Header kapalı (mega yok, drawer-menu) | [x] obs | [x] interact |
| Predictive search `huarache` | [x] obs | [x] interact |
| Menu drawer hamburger 375+768+1440 | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Huarache Size/Color | [x] obs | [x] interact |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=shoe` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] obs | [x] interact |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] obs | [x] capture |
| News + sneaker fashion post | [x] obs | [x] capture |
| 404 `/pages/contact-us` | [x] obs | [x] capture |
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
| 1–13 | home static | home | [x] | [x] | reuse | [x] |
| 14–16 | search / menu / cart overlays | home | [x] | [x] | reuse | [x] |
| 17 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 18–21 | tabs / IWT / banner / related | product-detail | [x] | [x] | reuse | [x] |
| 22–23 | banner + PLP | collection | [x] | [x] | reuse | [x] |
| 24 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 25 | search-results | search | [x] | [x] | reuse | [x] |
| 26 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 27–31 | banner / IWT / team / banner2 / IWT2 | about-brand | [x] | [x] | reuse | [x] |
| 32–34 | banner / icon-band / form | contact | [x] | [x] | reuse | [x] |
| 35–36 | banner + faq | faq-support | [x] | [x] | reuse | [x] |
| 37–38 | list + post | blog* | [x] | [x] | reuse | [x] |
| 39 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial | Kapalı: 1440 hamburger + sosyal + logo + search + cart 0. Mega yok. |
| global-menu-drawer | open + Shop changed | Sol drawer 375/768/1440. Shop → Loafer/Boot/Sandal/Sneakers/Sports. Log in yok. |
| global-predictive-search | input | Boş modal → `huarache` = 1 ürün MEN'S AIR HUARACHE. |
| global-cart-drawer | filled + changed | qty1 $99.99 → qty2 $199.98. addToCart UI. Checkout yok. |
| cart-page-main | filled + changed | Boş → Huarache $99.99 → qty2 $199.98. Checkout/login yok. |
| product-info-main | changed Size | Size 8 (150 stock) → Size 10 (50 stock). Color yalnız Black. |
| product-showcase-grid-featured | hover 1440 | Kalp + underline. İkinci görsel swap / Quick View yok. |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/glidefeet-leftovers.md`](../candidates/glidefeet-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact menu / search / cart / PDP Size
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error · 13 warn (mevcut şemalar)
