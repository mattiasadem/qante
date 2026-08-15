# Todo — NOVOS Labs (novoslabs.com)

*Kaynak:* https://novoslabs.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **NOVOS Blocks** · `style.css` Theme Name **NOVOS Blocks** · Version **0.9.101** · Author **NOVOS Labs** · Text Domain `novos-blocks` · FSE block theme, **no parent** · Tags: block-theme, full-site-editing, e-commerce  
*Platform:* **WordPress + WooCommerce** (wpcloud / Pressable · Jetpack 16.1.1) · `body` `theme-novos-blocks wp-theme-novos-blocks woocommerce-uses-block-theme`

**Durum:** Mod A walk + resmi 3vp + interact (PNG bakıldı)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/novoslabs/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/novoslabs/`, `evidence/novoslabs/`, `todo/novoslabs.md`, `candidates/novoslabs-*.md` |

**Kapsam satırı:**  
`NOVOS · default · NOVOS Blocks 0.9.101 FSE / Woo · home→PDP Core→PLP /products/→Jetpack search→cart page+drawer→content→footer→mobile · 47 obs · 164 PNG · 0 yeni şema · leftover candidates/novoslabs-*.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer + video hero + bulletin | ✅ | [x] geç home 3vp’de Klaviyo örtüsü |
| Mega Shop hover 1440 | ✅ | [x] open WORKS |
| Search Jetpack overlay | ✅ 768/1440 | [x] 375 overlay/input leftover |
| Cart drawer empty + filled | ✅ | [x] initial + filled 3vp |
| Mobile hamburger 375/768 | ✅ 768 | [x] 375 open leftover; 1440 N/A |
| PDP `/product/novos-core/` | ✅ | [x] + flavor 375 |
| PLP `/products/` + chips | ✅ | [x] chip tık navigate |
| Search page `/?s=` · `/search/` | ⛔ home / 404 | leftover |
| Cart `/cart/` empty | ✅ | [x] |
| About `/about-novos-anti-aging-supplements/` | ✅ 2 obs | [x] |
| Contact `/contact-novos/` | ✅ | [x] PII yok |
| Privacy + Terms | ✅ | [x] |
| Blog `/blog/` | ⛔ 404 | leftover |
| Blog category `/blog/longevity/` + post | ✅ | [x] |
| FAQ `/faq/` → Reamaze | ⛔ | leftover |
| 404 custom copy | ⛔ | leftover |
| Product Finder `/#finder` | ⛔ 0px | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] ticker | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + open 1440 | [x] Shop mega | reuse | [x] |
| 3 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 4 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 5 | editorial-rich-text | home | [x] | [x] #intro | reuse | [x] |
| 6 | features-multicolumn | home | [x] | [x] #proof | reuse | [x] |
| 7 | trust-icon-row | home | [x] | [x] #stats | reuse | [x] |
| 8 | testimonial-quote-carousel | home | [x] | [x] #people | reuse | [x] |
| 9 | comparison-quick-table | home | [x] Klaviyo | [x] | reuse | [x] |
| 10 | product-showcase-grid-featured | home | [x] Klaviyo | [x] #protocol | reuse | [x] |
| 11 | testimonial-quote-carousel.2 | home | [x] Klaviyo | [x] #scientists | reuse | [x] |
| 12 | testimonial-quote-carousel.3 | home | [x] Klaviyo | [x] #clinicians | reuse | [x] |
| 13 | editorial-rich-text.2 | home | [x] Klaviyo | [x] #servings | reuse | [x] |
| 14 | faq-collapsible-tabs | home | [x] | [x] open yok | reuse | [x] |
| 15 | lead-capture-newsletter-band | home | [x] Klaviyo | [x] #cta PII yok | reuse | [x] |
| 16 | footer-columns-newsletter | home | [x] Klaviyo | [x] form yok | reuse | [x] |
| 17 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 18 | global-predictive-search | home | [x] 768/1440 | [x] 375 leftover | reuse | [x] |
| 19 | global-menu-drawer | home | [x] 768 open | [x] 375 leftover | reuse | [x] |
| 20 | navigation-breadcrumbs | product-detail | [x] | [x] | reuse | [x] |
| 21 | product-info-main | product-detail | [x] + flavor | [x] 375 Passion | reuse | [x] |
| 22 | promo-scrolling-marquee | product-detail | [x] | [x] #quotes | reuse | [x] |
| 23 | features-multicolumn | product-detail | [x] | [x] #promise | reuse | [x] |
| 24 | editorial-timeline | product-detail | [x] | [x] etki | reuse | [x] |
| 25 | comparison-quick-table | product-detail | [x] | [x] | reuse | [x] |
| 26 | features-multicolumn.2 | product-detail | [x] | [x] #studies | reuse | [x] |
| 27 | editorial-image-with-text | product-detail | [x] | [x] #gold-standard | reuse | [x] |
| 28 | features-multicolumn.3 | product-detail | [x] | [x] #ingredients | reuse | [x] |
| 29 | testimonial-quote-carousel | product-detail | [x] | [x] #scientists | reuse | [x] |
| 30 | testimonial-quote-carousel.2 | product-detail | [x] | [x] clinicians | reuse | [x] |
| 31 | faq-collapsible-tabs | product-detail | [x] | [x] open yok | reuse | [x] |
| 32 | product-showcase-related | product-detail | [x] | [x] .nv-cross | reuse | [x] |
| 33 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 34 | product-showcase-featured | collection | [x] | [x] #shop-hero | reuse | [x] |
| 35 | collection-nav-icon-buttons | collection | [x] | [x] chips navigate | reuse | [x] |
| 36 | product-showcase-grid-plp | collection | [x] | [x] solutions | reuse | [x] |
| 37 | product-showcase-grid-featured | collection | [x] | [x] bundles | reuse | [x] |
| 38 | product-showcase-grid-featured.2 | collection | [x] | [x] samples | reuse | [x] |
| 39 | cart-page-main | cart | [x] empty | [x] | reuse | [x] |
| 40 | editorial-rich-text | about-brand | [x] | [x] hero | reuse | [x] |
| 41 | editorial-timeline | about-brand | [x] | [x] yıl | reuse | [x] |
| 42 | page-content-main | contact | [x] | [x] PII yok | reuse | [x] |
| 43 | page-content-main | policy | [x] | [x] privacy | reuse | [x] |
| 44 | page-content-main.2 | policy | [x] | [x] terms | reuse | [x] |
| 45 | collection-nav-icon-buttons | blog-list | [x] | [x] cats | reuse | [x] |
| 46 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 47 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince — PNG bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **1440 Shop mega WORKS** — PRODUCTS + EXPLORE. 375/768 N/A |
| global-predictive-search | initial | **768/1440 WORKS** (popular + filters). **375 hero** — overlay yok |
| global-predictive-search | input | **768/1440 `core` → 334 results**. **375 FAILED** (`#nvSearchInput` hidden) |
| global-cart-drawer | initial | **3vp WORKS** — Cart 0 + empty + Shop NOVOS |
| global-cart-drawer | filled | **3vp WORKS** — Core Subscription Orange $559 / 6 boxes / Proceed to Checkout |
| global-menu-drawer | open | **768 WORKS** (X + Shop… + Shop now / Finder). **375 hero** — leftover. 1440 N/A |
| product-info-main | changed | **375 Tropical Passion seçili** (turuncu çerçeve). 1440 belirsiz |
| faq-collapsible-tabs home | changed | **yok** — 375 hâlâ `+`; 768/1440 Klaviyo |
| faq-collapsible-tabs PDP | changed | **yok** — 3vp hâlâ `+` |
| collection-nav-icon-buttons | — | chip tık sayfaya gider — `changed` değil |

---

## Aday / leftover

[`candidates/novoslabs-leftovers.md`](../candidates/novoslabs-leftovers.md) · [`candidates/novoslabs-404s.md`](../candidates/novoslabs-404s.md)

Klaviyo “Get 10% off” (email + Yes I Want In) — **PII, doldurulmadı**. Home comparison / protocol / scientists / clinicians / servings / FAQ / CTA / footer / menu-static-1440 karelerini örttü.

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (search statik 0×0 skip — overlay interact)
- [x] Overlay / mega / cart / search / menu / FAQ / flavor interact
- [x] PNG bak → stateFindings
