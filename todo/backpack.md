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

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/backpack/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **22** |
| Parallel | yalnız `observations/backpack/`, `evidence/backpack/`, `todo/backpack.md`, `candidates/backpack-leftovers.md`, capture unlock helper |

**Kapsam satırı:**  
`Backpack · default · Speedo host adlwin-store · Theme export adlwin-zenon / schema_name Debut 17.14.1 · theme_store_id null · password 1 · home→PDP floral dress Grey→Green→PLP /collections/all 11→/collections→search hoodie 8→cart empty/filled→contact→news boş→404 · 22 obs · 0 yeni şema · leftover: candidates/backpack-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Predictive search `hoodie` | [x] obs | [ ] interact |
| Mobile menu 375+768+1440 | [x] obs | [ ] interact |
| PDP floral dress Color Grey→Green | [x] obs | [ ] interact |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=hoodie` | [x] obs | [ ] capture |
| Cart empty + filled + qty | [x] obs | [ ] interact |
| Contact form (submit yok) | [x] obs | [ ] capture |
| News list (boş) | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
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
| 5 | New Releases | `product-showcase-grid-featured` | reuse · slider |
| 6 | `cuatom_img_lr` SHIRTS ×2 | `editorial-image-with-text` | reuse · 2 satır |
| 7 | `custom_quotes` | `testimonial-quote-carousel` | reuse · yazar yok |
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
| 1–12 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 13–14 | product-info + related | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | PLP | collection | [ ] | [x] | reuse | [ ] |
| 16 | collections index | collections | [ ] | [x] | reuse | [ ] |
| 17 | search hoodie | search | [ ] | [x] | reuse | [ ] |
| 18 | cart | cart | [ ] | [x] | reuse | [ ] |
| 19–20 | page + form | contact | [ ] | [x] | reuse | [ ] |
| 21 | blog list boş | blog-list | [ ] | [x] | reuse | [ ] |
| 22 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| global-predictive-search | input | [ ] hoodie |
| global-menu-drawer | open | [ ] Home/Catalog/Contact/Wishlist |
| product-info-main | changed | [ ] Grey→Green |
| cart-page-main | filled + changed | [ ] empty→dress→qty |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII / BUY IT NOW

---

## Aday / leftover

[`candidates/backpack-leftovers.md`](../candidates/backpack-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact search / menu / cart / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs` — 0 error
