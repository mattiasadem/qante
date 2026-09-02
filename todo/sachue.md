# Todo — Sachue (Speedo Themes) · default

*Kaynak (resmi walk URL):* https://pandora-beauty-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/best-shopify-cosmetics-theme-for-product  
*Preset:* `default` · *Slug:* `sachue`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-beauty-store-v-1-5-0**  
`schema_name` = **pandora_beauty_store** · `schema_version` = **1.5.0** · `role` = **main** · theme id `139259805895`  
`theme_store_id` = **null**  
`Shopify.shop` = `pandora-beauty-store.myshopify.com`  
Storefront password (ürün sayfasında yayınlı): **`1`** — aynı host, başka demo uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + shopper interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sachue/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/sachue/`, `evidence/sachue/`, `todo/sachue.md`, `candidates/sachue-leftovers.md`, capture password unlock |

**Kapsam satırı:**  
`Sachue · default · Pandora-beauty-store-v-1-5-0 / schema_name pandora_beauty_store 1.5.0 / theme_store_id null · home→PDP stunna-lip-paint→PLP new-arrivals→search cream→cart→about/contact/faq→blog→footer · 41 obs · 0 yeni şema · leftover: candidates/sachue-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] | [ ] capture |
| Header + Shop disclosure 1440 | [x] | [ ] |
| Predictive search host | [x] | [ ] |
| Mobile menu drawer 375/768 | [x] | [ ] |
| Cart drawer empty | [x] | [ ] |
| PDP `/products/stunna-lip-paint-longwear-fluid-lip-color` | [x] | [ ] |
| PLP `/collections/new-arrivals` | [x] | [ ] |
| Collections index `/collections` | [x] | [ ] |
| Search `/search?q=cream` | [x] | [ ] |
| Cart `/cart` empty | [x] | [ ] |
| About `/pages/about-us` | [x] | [ ] |
| Contact `/pages/contact` (submit yok) | [x] | [ ] |
| FAQ `/pages/faqs` | [x] | [ ] |
| Blog list `/blogs/news` + article | [x] | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | menu-drawer | `global-menu-drawer` | reuse · prepareClick `#header-menu` |
| 4 | header-search | `global-predictive-search` | reuse · prepareClick Search |
| 5 | CartDrawer | `global-cart-drawer` | reuse · prepareClick `#cart-icon-bubble` |
| 6 | 165665788459900955 | `hero-slideshow` | reuse · Hello Gorgeouse! |
| 7 | 16570995443f9c794f | `collection-nav-icon-buttons` | reuse · I’m looking for |
| 8 | 165666442841fa5a70 | `collection-nav-image-cards` | reuse · You may love |
| 9 | 165666889162d379a4 | `product-showcase-tabs` | reuse · Trendy collection |
| 10 | 1660652947e3543e1b | `editorial-image-with-text-overlay` | reuse · Deal of the day (timer yok) |
| 11 | 16570220444d9ed8e2 | `promo-grid-banner` | reuse · Exclusive offer 2-col |
| 12 | 16566582873b027b44 | `blog-list-main` | reuse |
| 13 | 1656658688fda267ab | `testimonial-quote-carousel` | reuse |
| 14 | 1663146074197fe346 | `faq-collapsible-tabs` | reuse |
| 15 | 1656667513043b6e26 | `media-scrolling-gallery` | reuse · @PANDORA |
| 16 | 1659001743407f50e5 | `trust-icon-row` | reuse |
| 17 | footer | `footer-columns-newsletter` | reuse |

---

## Interact (shopper-state)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [ ] Shop disclosure |
| global-predictive-search | input | [ ] `lipstick` / katalog |
| global-menu-drawer | open 375/768 | [ ] hamburger |
| global-cart-drawer | filled + changed | [ ] ATC Stunna |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Color Red → Multi Color |
| product-showcase-tabs | changed | [ ] BEST SELLERS → NEW ARRIVALS |
| faq-collapsible-tabs | changed | [ ] ilk soru |

---

## Aday / leftover

[`candidates/sachue-leftovers.md`](../candidates/sachue-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP swatch / tabs / FAQ
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
