# Todo — Luxe Luxuries (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://watchez-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/luxury-shopify-watch-theme  
*Preset:* `default` · *Slug:* `luxe-luxuries`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **Watchez-online-store V-1.5.0**  
`schema_name` = **watchez_online_store** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170785276184`  
`theme_store_id` = **null**  
shop `watchez-online-store.myshopify.com`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact · validate · draft PR  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/luxe-luxuries/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| Parallel | yalnız `observations/luxe-luxuries/`, `evidence/luxe-luxuries/`, `todo/luxe-luxuries.md`, `candidates/luxe-luxuries-leftovers.md` + Speedo password helper |

**Kapsam satırı (hedef):**  
`Luxe Luxuries · default · Watchez-online-store V-1.5.0 / schema_name watchez_online_store 1.5.0 · theme_store_id null · shop watchez-online-store.myshopify.com · password 1 · home→PDP Access Gen 5e White/Rose gold→PLP best-sellers→search watch→cart empty/filled→collections→about-us→contact→faqs→news+Rolex post→404 · 43 obs · 0 yeni şema · leftover: candidates/luxe-luxuries-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — announcement / offer / header / slideshow / rich / featured / banners / tabs / overlay / IG / footer | roster | [ ] |
| Cart drawer boş | roster | [ ] |
| Menu drawer 375+768 | roster | [ ] |
| Predictive search host | roster | [ ] |
| PDP `/products/access-gen-5e-mkgo-gray-rubber-smartwatch` | roster | [ ] |
| PLP `/collections/best-sellers` + quick-add | roster | [ ] |
| Search `/search?q=watch` | roster | [ ] |
| Cart `/cart` empty + featured | roster | [ ] |
| Collections `/collections` | roster | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQs `/pages/faqs` | roster | [ ] |
| Blog `/blogs/news` + Rolex post | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Bileşen roster

| # | schemaId | sayfa | Karar |
|---|---|---|---|
| 1 | promo-announcement-bar | home | reuse |
| 2 | navigation-header-mega | home | reuse · SHOP mega |
| 3 | promo-announcement-bar.2 | home | reuse · PAN40 offer |
| 4 | hero-slideshow | home | reuse · 2 slayt leftover copy |
| 5 | editorial-rich-text | home | reuse · Pandora leftover |
| 6 | product-showcase-grid-featured | home | reuse · slider |
| 7 | collection-nav-banners | home | reuse |
| 8 | product-showcase-tabs | home | reuse · Women/Man |
| 9 | collection-nav-banners.2 | home | reuse |
| 10 | editorial-image-with-text-overlay | home | reuse |
| 11 | media-mosaic-grid | home | reuse · @ClassicWatch, pin yok |
| 12 | footer-columns-newsletter | home | reuse |
| 13 | global-cart-drawer | home | reuse · prepareClick |
| 14 | global-menu-drawer | home | reuse · 375/768 |
| 15 | global-predictive-search | home | reuse · prepareClick |
| 16 | product-info-main | product-detail | reuse |
| 17 | editorial-image-with-text | product-detail | reuse |
| 18 | editorial-image-with-text-overlay | product-detail | reuse |
| 19 | product-showcase-related | product-detail | reuse |
| 20 | collection-banner | collection | reuse |
| 21 | product-showcase-grid-plp | collection | reuse |
| 22 | global-quick-view | collection | reuse · Dawn quick-add |
| 23 | collection-nav-grid | collections | reuse |
| 24 | search-results | search | reuse · q=watch |
| 25 | cart-page-main | cart | reuse · boş |
| 26 | product-showcase-grid-featured | cart | reuse |
| 27–32 | overlay / IWT×4 / features | about-brand | reuse |
| 33–36 | title / IWT / form / IG | contact | reuse |
| 37–40 | title / FAQ×2 / IG | faq-support | reuse |
| 41 | blog-list-main | blog-list | reuse |
| 42 | blog-post-main | blog-post | reuse · Rolex |
| 43 | page-content-main | not-found | reuse |

---

## Interact (keşif sonrası)

| Bileşen | State | Durum |
|---|---|---|
| navigation-header-mega | open SHOP mega 1440 | [ ] |
| global-menu-drawer | open 375/768 | [ ] |
| global-predictive-search | open + input `retro` | [ ] |
| global-cart-drawer | filled + qty | [ ] |
| cart-page-main | filled | [ ] |
| product-info-main | changed White→Rose gold | [ ] |
| product-showcase-grid-plp | hover kart | [ ] |
| faq-collapsible-tabs | changed accordion | [ ] |
| global-quick-view | open | [ ] |

---

## Aday / leftover

[`candidates/luxe-luxuries-leftovers.md`](../candidates/luxe-luxuries-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact (`capture-interaction.mjs`)
- [ ] `npm run validate` — 0 error
