# Todo — Hubble (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://hubble-nutrition.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/hubble-best-nutrition-supplement-store-0s-2-0  
*Preset:* `default` · *Slug:* `hubble`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **Hubble-nutrition V-1.2.0**  
`schema_name` = **hubble-nutrition** · `schema_version` = **1.2.0** · `role` = **main** · theme id `163975790900`  
`theme_store_id` = **null**  
shop `hubble-nutrition.myshopify.com`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact · validate · draft PR  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hubble/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hubble/`, `evidence/hubble/`, `todo/hubble.md`, `candidates/hubble-leftovers.md` |

**Kapsam satırı (hedef):**  
`Hubble · default · Hubble-nutrition V-1.2.0 / schema_name hubble-nutrition 1.2.0 · theme_store_id null · shop hubble-nutrition.myshopify.com · password 1 · home→PDP mushroom-chai 30/60/90→PLP all→search chai→cart empty/filled→collections→about→contact→faqs→news empty→404 · 0 yeni şema · leftover: candidates/hubble-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — announcement / header / slideshow / IWT / marquee / features / reviews / UGC / footer | roster | [ ] |
| Cart drawer boş | roster | [ ] |
| Menu drawer 375+768 | roster | [ ] |
| Predictive search host | roster | [ ] |
| PDP `/products/hubble-nutrition-mushroom-chai` | roster | [ ] |
| PLP `/collections/all` + quick-add | roster | [ ] |
| Search `/search?q=chai` | roster | [ ] |
| Cart `/cart` empty | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQs `/pages/faqs` | roster | [ ] |
| Blog `/blogs/news` empty | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Bileşen roster

| # | schemaId | sayfa | Karar |
|---|---|---|---|
| 1 | promo-announcement-bar | home | reuse |
| 2 | navigation-header-mega | home | reuse · mega yok |
| 3 | hero-slideshow | home | reuse · tek slayt |
| 4 | editorial-image-with-text | home | reuse |
| 5 | promo-scrolling-marquee | home | reuse |
| 6 | features-multicolumn | home | reuse · merkez ürün |
| 7 | testimonial-quote-carousel | home | reuse |
| 8 | media-mosaic-grid | home | reuse · UGC, pin yok |
| 9 | footer-columns-newsletter | home | reuse |
| 10 | global-cart-drawer | home | reuse · prepareClick |
| 11 | global-menu-drawer | home | reuse · prepareClick |
| 12 | global-predictive-search | home | reuse · prepareClick |
| 13 | product-info-main | product-detail | reuse |
| 14 | promo-scrolling-marquee | product-detail | reuse |
| 15 | features-multicolumn | product-detail | reuse |
| 16 | features-multicolumn.2 | product-detail | reuse |
| 17 | product-showcase-featured | product-detail | reuse · ATC band |
| 18 | comparison-quick-table | product-detail | reuse · fayda satırları |
| 19 | testimonial-quote-carousel | product-detail | reuse |
| 20 | faq-collapsible-tabs | product-detail | reuse |
| 21 | collection-banner | collection | reuse |
| 22 | product-showcase-grid-plp | collection | reuse |
| 23 | global-quick-view | collection | reuse · Dawn quick-add |
| 24 | search-results | search | reuse · q=chai |
| 25 | cart-page-main | cart | reuse · boş |
| 26 | collection-nav-grid | collections | reuse · 1 kart |
| 27 | editorial-image-with-text-overlay | about-brand | reuse |
| 28–29 | editorial-image-with-text + .2 | about-brand | reuse |
| 30 | editorial-rich-text | about-brand | reuse |
| 31 | lead-capture-form | contact | reuse · PII yok |
| 32 | faq-collapsible-tabs | faq-support | reuse |
| 33 | blog-list-main | blog-list | reuse · boş |
| 34 | page-content-main | not-found | reuse |

---

## Interact (keşif sonrası)

| Bileşen | State | Durum |
|---|---|---|
| navigation-header-mega | hover Shop 1440 | [ ] |
| global-menu-drawer | open 375/768 | [ ] |
| global-predictive-search | open + input `chai` | [ ] |
| global-cart-drawer | filled + qty | [ ] |
| cart-page-main | filled | [ ] |
| product-info-main | changed 30→60 Servings | [ ] |
| product-showcase-grid-plp | hover kart | [ ] |
| faq-collapsible-tabs | changed accordion | [ ] |
| global-quick-view | open | [ ] |

---

## Aday / leftover

[`candidates/hubble-leftovers.md`](../candidates/hubble-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact (`capture-interaction.mjs`)
- [ ] `npm run validate` — 0 error
