# Todo — Wide Fashion (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://fashion-store-clean-5.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/best-shopify-theme-for-apparel-store  
*Preset:* `default` · *Slug:* `wide-fashion`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **Fashion-store-clean-5 V-1.2.0**  
`schema_name` = **Fashion store clean-5** · `schema_version` = **1.2.0** · `role` = **main** · theme id `163715973421`  
`theme_store_id` = **null**  
shop `fashion-store-clean-5.myshopify.com`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact · validate · draft PR  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wide-fashion/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **42** |
| Parallel | yalnız `observations/wide-fashion/`, `evidence/wide-fashion/`, `todo/wide-fashion.md`, `candidates/wide-fashion-leftovers.md` + storefront unlock helper |

**Kapsam satırı:**  
`Wide Fashion · default · Fashion-store-clean-5 V-1.2.0 / schema_name Fashion store clean-5 1.2.0 · theme_store_id null · shop fashion-store-clean-5.myshopify.com · password 1 · home→PDP flower-dress Size S→M→PLP all→search dress→cart empty/filled→collections→our-story→contact→faqs→news+article→404 · 42 obs · 0 yeni şema · leftover: candidates/wide-fashion-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — announcement×2 / header / slideshow / welcome / collections / quote / promo tiles / featured / Maria / blog / reviews / newsletter / FAQ / USP / Instagram / footer | roster | [ ] |
| Cart drawer boş | roster | [ ] |
| Menu drawer 375+768 | roster | [ ] |
| Predictive search host | roster | [ ] |
| PDP `/products/women-black-white-flower-design-dress` | roster | [ ] |
| PLP `/collections/all` | roster | [ ] |
| Search `/search?q=dress` | roster | [ ] |
| Cart `/cart` empty | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Our Story `/pages/our-story` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQs `/pages/faqs` | roster | [ ] |
| Blog `/blogs/news` + article | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit / wishlist | ⛔ PII | — |

---

## Bileşen roster

| # | schemaId | sayfa | Karar |
|---|---|---|---|
| 1 | promo-announcement-bar | home | reuse · ticker |
| 2 | navigation-header-mega | home | reuse · mega yok, Shop dropdown |
| 3 | promo-announcement-bar.2 | home | reuse · sabit bar + sosyal |
| 4 | hero-slideshow | home | reuse · 2 slayt |
| 5 | editorial-rich-text | home | reuse |
| 6 | collection-nav-image-cards | home | reuse · Shirt/Pants/Coats |
| 7 | editorial-image-with-text-overlay | home | reuse · bg-image-text |
| 8 | promo-grid-banner | home | reuse · 2 kolon sub-banner |
| 9 | product-showcase-grid-featured | home | reuse |
| 10 | editorial-image-with-text | home | reuse · Maria |
| 11 | blog-list-main | home | reuse |
| 12 | testimonial-quote-carousel | home | reuse · 3 kolon review |
| 13 | lead-capture-newsletter-band | home | reuse · submit yok |
| 14 | faq-collapsible-tabs | home | reuse |
| 15 | features-multicolumn | home | reuse · USP |
| 16 | media-mosaic-grid | home | reuse · Instagram, pin yok |
| 17 | footer-columns-newsletter | home | reuse |
| 18 | global-cart-drawer | home | reuse · prepareClick |
| 19 | global-predictive-search | home | reuse · prepareClick |
| 20 | global-menu-drawer | home | reuse · prepareClick |
| 21 | product-info-main | product-detail | reuse |
| 22–24 | features-multicolumn / IWT / related | product-detail | reuse |
| 25–26 | collection-banner + grid-plp | collection | reuse · /collections/all |
| 27 | search-results | search | reuse · q=dress |
| 28–29 | cart-page-main + featured | cart | reuse |
| 30 | collection-nav-grid | collections | reuse |
| 31 | page-content-main | not-found | reuse |
| 32–34 | title + IWT + form | contact | reuse |
| 35–36 | title + FAQ | faq-support | reuse |
| 37–40 | title + IWT ×3 | about-brand | reuse |
| 41–42 | blog-list + blog-post | blog | reuse |

---

## Interact (keşif sonrası)

| Bileşen | State | Durum |
|---|---|---|
| navigation-header-mega | open Shop 1440 | [ ] |
| global-menu-drawer | open 375/768 | [ ] |
| global-predictive-search | open + input `dress` | [ ] |
| global-cart-drawer | filled + qty | [ ] |
| cart-page-main | filled | [ ] |
| product-info-main | changed Size S→M | [ ] |
| product-showcase-grid-featured | hover kart | [ ] |
| faq-collapsible-tabs | changed accordion | [ ] |

---

## Aday / leftover

[`candidates/wide-fashion-leftovers.md`](../candidates/wide-fashion-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact (`capture-interaction.mjs`)
- [ ] `npm run validate` — 0 error
