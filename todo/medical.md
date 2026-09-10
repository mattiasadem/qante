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

**Durum:** ✅ Mod A 3vp + shopper interact + validate  
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
| Evidence PNG | **172** (132 static + 40 interact) |
| Parallel | `observations/medical/`, `evidence/medical/`, `todo/medical.md`, `candidates/medical-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Medical · default · medical-v-1-5-0-latest-updates-new / schema_name Medical 1.5.0 · theme_store_id null · shop medical-online-store.myshopify.com · password 1 · home→PDP medical-immune-support→PLP /collections/all→/collections→search vitamin→cart→about-layout-1→contact→faqs→news+article→404 · 45 obs · 172 PNG · 0 yeni şema · leftover: candidates/medical-leftovers.md · interact mega/menu/search1440/cart/PDP qty+tabs+FAQ/announcement; search 375/768 missingStates`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Header + Shop mega 1440 | [x] interact | [x] 6 görsel kart |
| Predictive search | [x] 1440 immune | 375/768 missingStates |
| Mobile menu 375/768 | [x] interact | [x] open + Shop drill |
| Cart drawer empty + filled + qty | [x] interact | [x] $32→$64 |
| PDP `/products/medical-immune-support` | [x] obs | [x] qty 1→2 |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=vitamin` | [x] obs | [x] capture |
| Cart `/cart` empty + filled | [x] interact | [x] $32→$64 |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] interact | [x] Q2 açık |
| Blog `/blogs/news` + article | [x] obs | [x] capture |
| 404 `/pages/404` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse · next Free shipping |
| 2 | header | `navigation-header-mega` | reuse · görsel Shop mega |
| 3 | menu-drawer | `global-menu-drawer` | reuse |
| 4 | header-full-width-search | `global-predictive-search` | reuse · 1440 input |
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

## Interact (shopper-state)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [x] Shop 6 görsel kart |
| global-menu-drawer | open + changed 375/768 | [x] hamburger + Shop drill |
| global-predictive-search | input | [x] 1440 immune · **375/768 missingStates** |
| promo-announcement-bar | changed | [x] SUMMERSALE → Free shipping £75 |
| global-cart-drawer | filled + changed | [x] Immune $32 → qty2 $64 |
| cart-page-main | filled + changed | [x] aynı $32→$64 |
| product-info-main | changed | [x] qty 1→2 · swatch yok |
| product-info-tabs | changed | [x] Additional Information |
| faq-collapsible-tabs (PDP) | changed | [x] ilk soru açık |
| faq-collapsible-tabs (page) | changed | [x] Q2 açık |

Şema upgrade yok — boş↔dolu / açık↔kapalı / sekme / accordion / qty.

---

## Aday / leftover

[`candidates/medical-leftovers.md`](../candidates/medical-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search1440 / cart / menu / PDP qty+tabs / FAQ / announcement
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
