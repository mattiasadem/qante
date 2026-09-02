# Todo — Critters (Speedo Themes) · Kids Toys / default

*Kaynak (yalnız resmi walk):* https://toyon-toys-2.myshopify.com/  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/critters-kids-toys-best-shopify-kids-themes-for-toy-store-os-2-0  
*Preset klasör:* `default` · slug `critters`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Critters kids toys V-1.5.0**  
`schema_name` = **Critters kids toys** · `schema_version` = **1.5.0** · `role` = **main** · theme id `163267346616`  
`theme_store_id` = **null** (Theme Store resmi değil; Speedo third-party OS 2.0)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host `toyon-toys-2.myshopify.com` · `Shopify.shop` = **toyon-toys-2.myshopify.com** · locale `en` · country `US` · currency `USD`  
Storefront unlock: vendor publishes password `1` on the product page (public demo, not an account).

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/critters/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/critters/`, `evidence/critters/`, `todo/critters.md`, `candidates/critters-leftovers.md` + viewer kaynak/endüstri map |

**Kapsam satırı:**  
`Critters · default · Critters kids toys V-1.5.0 / schema_name Critters kids toys 1.5.0 · theme_store_id null · Speedo third-party · shop toyon-toys-2.myshopify.com · home→PDP teddy→PLP kids-toys→/collections→search teddy→cart empty/filled→about-us→contact→faq→news+post→404 · 39 obs · 0 yeni şema · leftover: candidates/critters-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop / category mega 1440 | [ ] interact | [ ] |
| Predictive search `teddy` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Teddy Size/Color change | [ ] interact | [ ] |
| PLP `/collections/kids-toys` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=teddy` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [ ] interact | [ ] |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] capture |
| News + Toys & games post | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Critters / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement ticker | `promo-announcement-bar` | reuse · 5 mesaj / max 3 delta |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow Explore The World Of Play | `hero-slideshow` | reuse |
| 4 | categories_slider Shop By Category | `collection-nav-slider` | reuse |
| 5 | Trending Products + Quick shop | `product-showcase-grid-featured` | reuse |
| 6 | offer_banner FREE15CRITTERS | — | leftover |
| 7 | Popular Categories 3 kart | `collection-nav-cards` | reuse |
| 8 | featured_collection Best Selling | `product-showcase-grid-featured.2` | reuse |
| 9 | Creative Modern + Unique Toys IWT | `editorial-image-with-text` | reuse · 2 blok 1 section |
| 10 | image-banner Books Games Toys | `editorial-image-with-text-overlay` | reuse |
| 11 | Latest News | `blog-list-main` | reuse |
| 12 | logo_slider brands | `social-proof-brand-logos` | reuse |
| 13 | multicolumn Free Shipping | `features-multicolumn` | reuse |
| 14 | footer | `footer-columns-newsletter` | reuse · newsletter yok |
| 15 | newsletter-popup social proof | — | leftover 0px |
| 16 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 17 | predictive-search | `global-predictive-search` | reuse · interact |
| 18 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–16 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 18–21 | tabs / latest / offer / related | product-detail | [ ] | [x] | reuse | [ ] |
| 22–23 | banner + PLP | collection | [ ] | [x] | reuse | [ ] |
| 24 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 25 | search-results | search | [ ] | [x] | reuse | [ ] |
| 26 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 27–31 | title / IWT / team / rich / work | about-brand | [ ] | [x] | reuse | [ ] |
| 32–34 | title + office + form | contact | [ ] | [x] | reuse | [ ] |
| 35–36 | title + faq | faq-support | [ ] | [x] | reuse | [ ] |
| 37–38 | list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 39 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] |
| global-predictive-search | input | [ ] |
| global-menu-drawer | open | [ ] |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] |

---

## Aday / şemaya sığmayan

- `candidates/critters-leftovers.md`
