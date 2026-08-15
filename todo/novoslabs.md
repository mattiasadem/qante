# Todo — NOVOS Labs (novoslabs.com)

*Kaynak:* https://novoslabs.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **NOVOS Blocks** · `style.css` Theme Name **NOVOS Blocks** · Version **0.9.101** · Author **NOVOS Labs** · Text Domain `novos-blocks` · FSE block theme, **no parent** · Tags: block-theme, full-site-editing, e-commerce  
*Platform:* **WordPress + WooCommerce** (wpcloud / Pressable · Jetpack 16.1.1) · `body` `theme-novos-blocks wp-theme-novos-blocks woocommerce-uses-block-theme`

**Durum:** Mod A walk yazıldı — resmi 3vp / interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/novoslabs/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/novoslabs/`, `evidence/novoslabs/`, `todo/novoslabs.md`, `candidates/novoslabs-*.md` |

**Kapsam satırı (hedef):**  
`NOVOS · default · NOVOS Blocks 0.9.101 FSE / Woo · home→PDP Core→PLP /products/→Jetpack search→cart page+drawer→content→footer→mobile · obs aşağıda · 0 yeni şema · leftover candidates/novoslabs-*.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer + video hero | [x] obs | [ ] |
| Mega Shop hover 1440 | [x] obs | [ ] interact |
| Search Jetpack overlay | [x] obs | [ ] interact |
| Cart drawer empty + filled | [x] obs | [ ] interact |
| Mobile hamburger 375/768 | [x] obs | [ ] interact |
| PDP `/product/novos-core/` | [x] obs | [ ] + flavor |
| PLP `/products/` + chips | [x] obs | [ ] |
| Search page `/?s=` · `/search/` | ⛔ home / 404 | leftover |
| Cart `/cart/` empty | [x] obs | [ ] |
| About `/about-novos-anti-aging-supplements/` | [x] 2 obs | [ ] |
| Contact `/contact-novos/` | [x] | [ ] PII yok |
| Privacy + Terms | [x] | [ ] |
| Blog `/blog/` | ⛔ 404 | leftover |
| Blog category `/blog/longevity/` + post | [x] | [ ] |
| FAQ `/faq/` → Reamaze | ⛔ | leftover |
| 404 custom copy | ⛔ | leftover |
| Product Finder `/#finder` | ⛔ 0px | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] mega hover | reuse | [ ] |
| 2 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 3 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 4 | editorial-rich-text | home | [ ] | [x] #intro | reuse | [ ] |
| 5 | features-multicolumn | home | [ ] | [x] #proof | reuse | [ ] |
| 6 | trust-icon-row | home | [ ] | [x] #stats | reuse | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [x] #people | reuse | [ ] |
| 8 | comparison-quick-table | home | [ ] | [x] | reuse | [ ] |
| 9 | product-showcase-grid-featured | home | [ ] | [x] #protocol | reuse | [ ] |
| 10 | testimonial-quote-carousel.2 | home | [ ] | [x] #scientists | reuse | [ ] |
| 11 | testimonial-quote-carousel.3 | home | [ ] | [x] #clinicians | reuse | [ ] |
| 12 | editorial-rich-text.2 | home | [ ] | [x] #servings | reuse | [ ] |
| 13 | faq-collapsible-tabs | home | [ ] | [x] + ilk soru | reuse | [ ] |
| 14 | editorial-image-with-text-overlay | home | [ ] | [x] #cta | reuse | [ ] |
| 15 | footer-columns-newsletter | home | [ ] | [x] newsletter yok | reuse | [ ] |
| 16 | global-cart-drawer | home | [ ] | [x] empty+filled | reuse | [ ] |
| 17 | global-predictive-search | home | [ ] | [x] Jetpack | reuse | [ ] |
| 18 | global-menu-drawer | home | [ ] | [x] 375/768 | reuse | [ ] |
| 19 | navigation-breadcrumbs | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | product-info-main | product-detail | [ ] | [x] flavor | reuse | [ ] |
| 21 | promo-scrolling-marquee | product-detail | [ ] | [x] #quotes | reuse | [ ] |
| 22 | features-multicolumn | product-detail | [ ] | [x] #promise | reuse | [ ] |
| 23 | editorial-timeline | product-detail | [ ] | [x] etki | reuse | [ ] |
| 24 | comparison-quick-table | product-detail | [ ] | [x] | reuse | [ ] |
| 25 | features-multicolumn.2 | product-detail | [ ] | [x] #studies | reuse | [ ] |
| 26 | editorial-image-with-text | product-detail | [ ] | [x] #gold-standard | reuse | [ ] |
| 27 | features-multicolumn.3 | product-detail | [ ] | [x] #ingredients | reuse | [ ] |
| 28 | testimonial-quote-carousel | product-detail | [ ] | [x] #scientists | reuse | [ ] |
| 29 | testimonial-quote-carousel.2 | product-detail | [ ] | [x] clinicians | reuse | [ ] |
| 30 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 31 | product-showcase-related | product-detail | [ ] | [x] .nv-cross | reuse | [ ] |
| 32 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 33 | product-showcase-featured | collection | [ ] | [x] #shop-hero | reuse | [ ] |
| 34 | collection-nav-icon-buttons | collection | [ ] | [x] chips | reuse | [ ] |
| 35 | product-showcase-grid-plp | collection | [ ] | [x] solutions | reuse | [ ] |
| 36 | product-showcase-grid-featured | collection | [ ] | [x] bundles | reuse | [ ] |
| 37 | product-showcase-grid-featured.2 | collection | [ ] | [x] samples | reuse | [ ] |
| 38 | cart-page-main | cart | [ ] | [x] empty | reuse | [ ] |
| 39 | editorial-rich-text | about-brand | [ ] | [x] hero | reuse | [ ] |
| 40 | editorial-timeline | about-brand | [ ] | [x] yıl | reuse | [ ] |
| 41 | page-content-main | contact | [ ] | [x] | reuse | [ ] |
| 42 | page-content-main | policy | [ ] | [x] privacy | reuse | [ ] |
| 43 | page-content-main.2 | policy | [ ] | [x] terms | reuse | [ ] |
| 44 | collection-nav-icon-buttons | blog-list | [ ] | [x] cats | reuse | [ ] |
| 45 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 46 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Shop hover — PRODUCTS + EXPLORE (bekleniyor) |
| global-predictive-search | initial, input | Jetpack overlay; `core` fill |
| global-cart-drawer | initial, filled | boş + Core ATC |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | changed | Tropical Passion flavor |
| faq-collapsible-tabs home/PDP | changed | ilk soru |

---

## Aday / leftover

[`candidates/novoslabs-leftovers.md`](../candidates/novoslabs-leftovers.md) · [`candidates/novoslabs-404s.md`](../candidates/novoslabs-404s.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / cart / search / menu / FAQ / flavor interact
- [ ] PNG bak → stateFindings
