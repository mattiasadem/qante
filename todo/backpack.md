# Todo — Backpack (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://adlwin-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/backpack-stylish-travel-gear-shopify-template-o-s-2-0  
*Preset klasör:* `default` · slug `backpack`  
*Vendor:* Speedo Themes (üçüncü taraf, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Theme export  adlwin-com-adlwin-zenon-07-01-202…**  
`schema_name` = **Debut** · `schema_version` = **17.14.1** · `role` = **main** · theme id `134700761330`  
`theme_store_id` = **null**  
Walk host `adlwin-store.myshopify.com` · `Shopify.shop` = **adlwin-store.myshopify.com**  
Storefront password **1** (Speedo product page: *Please enter password "1" to view demo.*)  
Vitrin içeriği Adlwin giyim (hoodie/dress); seyahat sırt çantası değil.

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti**  
**PR:** https://github.com/mattiasadem/qante/pull/328 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/backpack/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **22** |
| PNG | **81** |
| Parallel | yalnız `observations/backpack/`, `evidence/backpack/`, `todo/backpack.md`, `candidates/backpack-leftovers.md`, capture unlock helper |

**Kapsam satırı:**  
`Backpack · default · Speedo host adlwin-store · Theme export adlwin-zenon / schema_name Debut 17.14.1 · theme_store_id null · password 1 · home→PDP floral dress Grey→Green SOLD OUT→PLP /collections/all 11→/collections→search hoodie 8 list→cart empty/dress $530/qty2 input→contact→news boş→404 · 22 obs · 81 PNG · 0 yeni şema · leftover: candidates/backpack-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Predictive search `hoodie` | [x] obs | [x] interact · öneri listesi boş |
| Mobile menu 375+768+1440 | [x] obs | [x] interact |
| PDP floral dress Color Grey→Green | [x] obs | [x] interact · Green SOLD OUT |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=hoodie` | [x] obs | [x] capture · liste |
| Cart empty + filled + qty | [x] obs | [x] interact · qty input 2, toplam $530 |
| Contact form (submit yok) | [x] obs | [x] capture |
| News list (boş) | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| About / FAQ / blog post | ⛔ yok | leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Canlı / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `.announcement-bar` | `promo-announcement-bar` | reuse · header içi swiper |
| 2 | `.site-header` | `navigation-header-mega` | reuse · mega yok |
| 3 | `custom_slider` | `hero-slideshow` | reuse |
| 4 | `custom_image` I’m looking for | `collection-nav-image-cards` | reuse |
| 5 | New Releases | `product-showcase-grid-featured` | reuse · 1440 4 kolon |
| 6 | `cuatom_img_lr` SHIRTS ×2 | `editorial-image-with-text` | reuse · 2 satır |
| 7 | `custom_quotes` | `testimonial-quote-carousel` | reuse · 1440 3 kolon vaat |
| 8 | `custom_instagram_section` | `media-shop-the-feed` | reuse · hotspot yok |
| 9 | `custom_content` Fit/Shipping | `features-multicolumn` | reuse |
| 10 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 11 | `#SearchDrawer` | `global-predictive-search` | reuse · interact |
| 12 | `.mobile-nav-wrapper` | `global-menu-drawer` | reuse · interact |
| — | cart drawer | — | yok · /cart |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–12 | home + overlays | home | [x] | [x] | reuse | [x] |
| 13–14 | product-info + related | product-detail | [x] | [x] | reuse | [x] |
| 15 | PLP | collection | [x] | [x] | reuse | [x] |
| 16 | collections index | collections | [x] | [x] | reuse | [x] |
| 17 | search hoodie | search | [x] | [x] | reuse | [x] |
| 18 | cart | cart | [x] | [x] | reuse | [x] |
| 19–20 | page + form | contact | [x] | [x] | reuse | [x] |
| 21 | blog list boş | blog-list | [x] | [x] | reuse | [x] |
| 22 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| global-predictive-search | input | hoodie yazıldı; öneri listesi yok (wrapper h=0) |
| global-menu-drawer | open | siyah panel Home/Catalog/Contact/Wishlist |
| product-info-main | changed | Grey ADD TO CART → Green SOLD OUT |
| cart-page-main | filled + changed | empty → dress $530 qty1 → input 2 (toplam $530 kaldı) |

Stop: email / account / checkout / newsletter submit / contact SEND / PII / BUY IT NOW

---

## Aday / leftover

[`candidates/backpack-leftovers.md`](../candidates/backpack-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact search / menu / cart / PDP Color
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error
