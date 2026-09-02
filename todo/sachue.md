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

**Durum:** ✅ Mod A walk + resmi 3vp + shopper interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sachue/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Evidence PNG | **168** (122 static + 46 interact) |
| Parallel | yalnız `observations/sachue/`, `evidence/sachue/`, `todo/sachue.md`, `candidates/sachue-leftovers.md`, capture password unlock |

**Kapsam satırı:**  
`Sachue · default · Pandora-beauty-store-v-1-5-0 / schema_name pandora_beauty_store 1.5.0 / theme_store_id null · home→PDP stunna-lip-paint→PLP new-arrivals→search cream→cart→about/contact/faq→blog→footer · 41 obs · 168 PNG · 0 yeni şema · leftover: candidates/sachue-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] | [x] |
| Header + Shop disclosure 1440 | [x] | [x] open |
| Predictive search host | [x] | [x] input `nail` |
| Mobile menu drawer 375/768 | [x] | [x] open + Shop drill |
| Cart drawer empty | [x] | [x] + filled/changed |
| PDP `/products/stunna-lip-paint-longwear-fluid-lip-color` | [x] | [x] Red→Multi Color |
| PLP `/collections/new-arrivals` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=cream` | [x] | [x] |
| Cart `/cart` empty | [x] | [x] + filled/changed |
| About `/pages/about-us` | [x] | [x] |
| Contact `/pages/contact` (submit yok) | [x] | [x] |
| FAQ `/pages/faqs` | [x] | [x] |
| Blog list `/blogs/news` + article | [x] | [x] |
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
| navigation-header-mega | open 1440 | [x] Shop disclosure: Lipstick · Serum · Concealer · Nails (görsel mega yok) |
| global-predictive-search | input | [x] `nail` → 3 oje + Search for "nail" |
| global-menu-drawer | open + changed 375/768 | [x] hamburger + Shop drill ← Shop |
| global-cart-drawer | filled + changed | [x] Stunna Red $26 → adet 2 / total $52 |
| cart-page-main | filled + changed | [x] aynı satır 1→2 · $26→$52 |
| product-info-main | changed | [x] Color Red → Multi Color · galeri swatch ızgarası · $26 aynı |
| product-showcase-tabs | changed | [x] BEST SELLERS → NEW ARRIVALS pembe çerçeve |
| faq-collapsible-tabs | changed | [x] ilk soru açık + lorem |
| promo-announcement-bar | changed | [x] 768/1440 mesaj 2 · **375 missingStates** (next gizli) |

Şema upgrade yok — boş↔dolu / açık↔kapalı / sekme / swatch.

---

## Aday / leftover

[`candidates/sachue-leftovers.md`](../candidates/sachue-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP swatch / tabs / FAQ / announcement
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error (şema dokunulmadı)
