# Todo — Medical (Speedo Themes) · default

*Kaynak (resmi walk):* https://medical-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/medical-best-medical-store-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `medical`  
*Vendor:* Speedo Themes (third-party Shopify 2.0 — Theme Store resmi değil)

**Tema (vitrinde okundu):**  
`Shopify.theme.name` = **medical-v-1-5-0-latest-updates-new**  
`schema_name` = **Medical** · `schema_version` = **1.5.0** · `role` = **main** · theme id `176912400751`  
`theme_store_id` = **null**  
`Shopify.shop` = `medical-online-store.myshopify.com`  
Storefront password (Speedo ürün sayfası): **`1`** — aynı host, başka demo uydurulmadı.

**Durum:** 🟡 Mod A observations yazılı · 3vp + interact devam  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/medical/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` |
| Unlock | `/password` + `1` (`medical-online-store.myshopify.com` PUBLIC_DEMO_PASSWORDS) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **45** |
| Parallel | `observations/medical/`, `evidence/medical/`, `todo/medical.md`, `candidates/medical-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Medical · default · medical-v-1-5-0-latest-updates-new / schema_name Medical 1.5.0 · theme_store_id null · shop medical-online-store.myshopify.com · password 1 · home→PDP medical-immune-support→PLP /collections/all→/collections→search vitamin→cart→about-layout-1→contact→faqs→news+article→404 · 45 obs · 0 yeni şema · leftover: candidates/medical-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Header + Shop mega 1440 | [x] obs | [ ] interact |
| Predictive search | [x] obs | [ ] interact |
| Mobile menu 375/768 | [x] obs | [ ] interact |
| Cart drawer | [x] obs | [ ] interact |
| PDP `/products/medical-immune-support` | [x] obs | [ ] capture |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=vitamin` | [x] obs | [ ] capture |
| Cart `/cart` | [x] obs | [ ] interact |
| About `/pages/about-layout-1` | [x] obs | [ ] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] interact |
| Blog `/blogs/news` + article | [x] obs | [ ] capture |
| 404 `/pages/404` | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | menu-drawer | `global-menu-drawer` | reuse · prepareClick hamburger |
| 4 | header-full-width-search | `global-predictive-search` | reuse |
| 5 | CartDrawer | `global-cart-drawer` | reuse |
| 6 | product_with_banner_EbLrTh | `product-showcase-featured` | reuse · delta hero banner |
| 7 | text_with_image_mmjnd7 | `editorial-image-with-text` | reuse |
| 8 | divider_* | — | leftover 1px |
| 9 | multicolumn_tgYBYe | `features-multicolumn` | reuse |
| 10 | custom_announcement_bar_zqchrk | `promo-scrolling-marquee` | reuse |
| 11 | 0617c2f2 featured | `product-showcase-grid-featured` | reuse |
| 12 | count_down_YAdYpA | `features-multicolumn.2` | reuse · stats delta |
| 13 | 07468762 collection list | `collection-nav-image-cards` | reuse |
| 14 | service_icon_GVRghV | `trust-icon-row` | reuse |
| 15 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 16 | image_with_text_HNaMC4 | `editorial-image-with-text.2` | reuse |
| 17 | button_link_list_cCxRaQ | `collection-nav-icon-buttons` | reuse |
| 18 | footer | `footer-columns-newsletter` | reuse |

---

## Aday / leftover

[`candidates/medical-leftovers.md`](../candidates/medical-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP / FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
