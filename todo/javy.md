# Todo — Javy / Javvy Coffee (javycoffee.com)

*Kaynak:* https://javycoffee.com → **https://javvycoffee.com/** · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **görünmüyor** — `Shopify.theme.name` / `schema_name` / Theme Store id yok  
*Platform:* **Shopify Hydrogen + Oxygen** (`powered-by: Shopify, Oxygen, Hydrogen`) · shop `drink-javy.myshopify.com`  
*Marka yazımı vitrinde:* **Javvy** (çift v); envanter slug’ı görevden `javy`

**Durum:** Mod A walk + resmi 3vp + interact (PNG bakıldı)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/javy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/javy/`, `evidence/javy/`, `todo/javy.md`, `candidates/javy-*.md` |

**Kapsam satırı:**  
`Javy · default · Hydrogen/Oxygen · tema adı yok · home→PDP→PLP→search 404→cart drawer→content→footer→mobile · 50 obs · 168 PNG · 0 yeni şema · leftover candidates/javy-*.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement ×2 + marquee | ✅ | [x] 375 sale-navbar skip (0×0) |
| Mega | ⛔ düz link — hover panel yok | — |
| Search overlay / `/search` | ⛔ ikon yok; `/search` → `/bio` 404 | leftover |
| Cart drawer `/?openCart=true` | ✅ `.cart-drawer_inner` | [x] empty + filled (ATC) |
| Mobile hamburger 375/768 | ✅ `.navbar-mobile-menu` | [x] open; 1440 N/A |
| PDP `/products/protein-coffee` | ✅ buy box + editorial kit | [x] + flavor/FAQ interact |
| PDP `/products/coffee-concentrate` | ✅ aynı iskelet | [x] buy box |
| Gift card `/products/gift-card` | ⛔ → `/collections/all` | leftover |
| PLP `/collections/all` + accessories | ✅ grouped + pills | [x] |
| Deals `/deals` | ✅ kampanya vitrin (geniş wrapper) | [x] |
| Recipes list + lavender-latte | ✅ | [x] |
| Blog `/blog/category/all` + article | ✅ | [x] |
| Reviews `/reviews` | ✅ (Okendo leftover) | [x] |
| Subscribe `/pages/subscription` | ✅ | [x] + FAQ interact |
| Store locator | ✅ title+chips+liste+küme haritası | [x] locator leftover |
| Affiliate / giveaway | ✅ form PII yok | [x] |
| About `/pages/our-impact` | ⛔ client home | leftover |
| Support / privacy `/support/*` | ⛔ Gorgias; privacy obs silindi | leftover |
| `/cart` sayfa | ⛔ drawer-only | — |
| 404 `/bio` | ⛔ aday | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] 768/1440 | [x] 375 skip | reuse | [x] |
| 2 | promo-announcement-bar.2 | home | [x] | [x] | reuse | [x] |
| 3 | navigation-header-mega | home | [x] viewport | [x] mega yok | reuse | [x] |
| 4 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 5 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home | [x] | [x] Bold Flavors | reuse | [x] |
| 7 | media-lookbook-banner | home | [x] | [x] + hotspots | reuse | [x] |
| 8 | editorial-image-with-text | home | [x] | [x] 3 zigzag aile | reuse | [x] |
| 9 | blog-list-main | home | [x] + tab | [x] tarif CMS | reuse | [x] |
| 10 | editorial-image-with-text-overlay | home | [x] | [x] Reviews/UGC | reuse | [x] |
| 11 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 12 | product-showcase-grid-featured.2 | home | [x] | [x] Barista | reuse | [x] |
| 13 | media-shop-the-feed | home | [x] | [x] @javvycoffee | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | [x] submit yok | reuse | [x] |
| 15 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 16 | global-menu-drawer | home | [x] 375/768 open | [x] 1440 N/A | reuse | [x] |
| 17 | navigation-breadcrumbs | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-info-main | product-detail | [x] + flavor | [x] bundle | reuse | [x] |
| 19 | product-info-main.2 | product-detail | [x] concentrate | [x] | reuse | [x] |
| 20 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 21 | editorial-image-with-text.2 | product-detail | [x] | [x] | reuse | [x] |
| 22 | features-multicolumn | product-detail | [x] | [x] ingredients | reuse | [x] |
| 23 | comparison-quick-table | product-detail | [x] | [x] | reuse | [x] |
| 24 | editorial-rich-text | product-detail | [x] | [x] guarantee | reuse | [x] |
| 25 | features-slider-multicolumn | product-detail | [x] | [x] 3 adım, slider yok | reuse | [x] |
| 26 | faq-collapsible-tabs | product-detail | [x] + ilk soru | [x] | reuse | [x] |
| 27 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 28 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 29 | collection-nav-icon-buttons | collection | [x] | [x] pill navigate | reuse | [x] |
| 30 | product-showcase-grid-plp | collection | [x] | [x] grouped + price table | reuse | [x] |
| 31 | product-showcase-grid-plp.2 | collection | [x] accessories | [x] | reuse | [x] |
| 32 | product-showcase-grid-featured | landing-campaign | [x] /deals | [x] geniş wrapper | reuse | [x] |
| 33 | hero-slideshow | landing-campaign | [x] subscribe | [x] | reuse | [x] |
| 34 | features-multicolumn | landing-campaign | [x] | [x] benefits | reuse | [x] |
| 35 | features-slider-multicolumn | landing-campaign | [x] | [x] How It Works | reuse | [x] |
| 36 | product-showcase-grid-featured.2 | landing-campaign | [x] | [x] Get Started | reuse | [x] |
| 37 | faq-collapsible-tabs | landing-campaign | [x] + soru | [x] | reuse | [x] |
| 38 | page-content-main | landing-campaign | [x] giveaway | [x] PII yok | reuse | [x] |
| 39 | collection-nav-icon-buttons | blog-list | [x] recipes filters | [x] | reuse | [x] |
| 40 | blog-list-main | blog-list | [x] recipes grid | [x] | reuse | [x] |
| 41 | blog-list-main.2 | blog-list | [x] blog digest | [x] | reuse | [x] |
| 42 | blog-post-main | blog-post | [x] article | [x] | reuse | [x] |
| 43 | blog-post-main.2 | blog-post | [x] lavender-latte | [x] | reuse | [x] |
| 44 | editorial-rich-text | about-brand | [x] reviews hero | [x] | reuse | [x] |
| 45 | testimonial-quote-carousel | about-brand | [x] | [x] | reuse | [x] |
| 46 | trust-icon-row | about-brand | [x] | [x] | reuse | [x] |
| 47 | media-shop-the-feed | about-brand | [x] UGC | [x] | reuse | [x] |
| 48 | editorial-image-with-text-overlay | about-brand | [x] CTA | [x] | reuse | [x] |
| 49 | page-content-main | about-brand | [x] affiliate | [x] PII yok | reuse | [x] |
| 50 | page-content-main | contact | [x] locator+map | [x] | reuse | [x] |

---

## Interact (piksel değişince — PNG bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| global-menu-drawer | open | 375/768 hamburger: X + Shop All… + SHOP BY COLLECTION + Manage/Recipes/Blog. 1440 N/A |
| global-cart-drawer | initial | Your Cart 0 + empty + Shop kartları + SHOP ALL |
| global-cart-drawer | filled | Add + sonra **Add to Cart** → Your Cart 1 / Pumpkin Spice 30-gün / $34.95. Drawer ATC ile açılır |
| product-info-main | changed | Pumpkin Spice qty 1; CTA Add to Cart $39.95 $34.95 |
| faq-collapsible-tabs (PDP) | changed | What is Protein Coffee? açık (−) |
| faq-collapsible-tabs (subscribe) | changed | What does it mean to subscribe? açık (x) |
| blog-list-main (home recipes) | changed | Protein Coffee sekmesi sarı; PROTEIN rozetli kartlar |
| collection-nav-icon-buttons (PLP) | — | pill tık sayfaya gider — `changed` değil |
| navigation-header-mega | open | **yok** — Shop All `<a>` |

---

## Aday / leftover

[`candidates/javy-leftovers.md`](../candidates/javy-leftovers.md) · [`candidates/javy-404s.md`](../candidates/javy-404s.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (sale-navbar 375 skip)
- [x] Overlay / flavor / FAQ / menu / cart filled interact
- [x] PNG bak → stateFindings
