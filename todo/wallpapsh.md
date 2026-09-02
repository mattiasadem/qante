# Todo — WALLPAPSH (Speedo Themes) · default

*Kaynak (resmi walk URL):* https://pandora-wallpaper.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-wallpaper-theme  
*Preset:* `default` · *Slug:* `wallpapsh`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = ** Pandora-wallpaper V-1.5.0**  
`schema_name` = **Pandora_wallpaper** · `schema_version` = **1.5.0** · `role` = **main** · theme id `161941258263`  
`theme_store_id` = **null**  
`Shopify.shop` = `pandora-wallpaper.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası “Please enter password "1" to view demo.” Aynı host `/password` — public storefront unlock. Başka host yok.

**Durum:** ✅ Mod A + interact — 41 obs · 156 PNG · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wallpapsh/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Parallel | yalnız `observations/wallpapsh/`, `evidence/wallpapsh/`, `todo/wallpapsh.md`, `candidates/wallpapsh-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`WALLPAPSH · default · Pandora-wallpaper V-1.5.0 / schema_name Pandora_wallpaper 1.5.0 / theme_store_id null · shop pandora-wallpaper.myshopify.com · home→PDP Hobby Pink Size/Color→PLP new-arrivals→/collections→search wallpaper→cart empty→about-us-1→contact→faq→news+post · 41 obs · 0 yeni şema · leftover: candidates/wallpapsh-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Header SHOP BY ROOM 1440 | [x] obs | [x] open (forceOpen; hover yok) |
| Predictive search | [x] obs | [x] 1440 `pink` · 375/768 input gizli |
| Mobile menu 375 + 768 | [x] obs | [ ] missingStates — drawer karede yok |
| Cart drawer empty + filled + qty | [x] obs | [x] filled qty1 $80 · changed qty2 $160 |
| PDP Hobby Pink Size/Color | [x] obs | [x] Color Black→Pink |
| PLP `/collections/new-arrivals` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=wallpaper` | [x] obs | [x] capture |
| Cart `/cart` empty | [x] obs | [x] filled + qty 2 |
| About `/pages/about-us-1` | [x] obs | [x] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] obs | [x] ilk soru açık |
| Blog `/blogs/news` + article | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · SHOP BY ROOM mega-menu class |
| 3 | menu-drawer | `global-menu-drawer` | reuse · prepareClick `#header-menu` |
| 4 | header-search | `global-predictive-search` | reuse · prepareClick Search |
| 5 | CartDrawer | `global-cart-drawer` | reuse · prepareClick `#cart-icon-bubble` |
| 6 | 165665788459900955 | `hero-slideshow` | reuse · Custom Color Wallpaper |
| 7 | 166366535989326036 | `editorial-rich-text` | reuse · OUR STORY |
| 8 | 16570995443f9c794f | `collection-nav-icon-buttons` | reuse · SHOP WALLPAPER BY TYPE |
| 9 | 165666442841fa5a70 | `collection-nav-image-cards` | reuse · SHOP BY CATEGORY |
| 10 | 165666889162d379a4 | `product-showcase-tabs` | reuse · TRENDY COLLECTION |
| 11 | 16566581471a0cd9a8 | `editorial-image-with-text-overlay` | reuse · Show Your love |
| 12 | 16570220444d9ed8e2 | `promo-grid-banner` | reuse · Exclusive offer 2-col |
| 13 | 16566582873b027b44 | `blog-list-main` | reuse |
| 14 | 1656658688fda267ab | `testimonial-quote-carousel` | reuse |
| 15 | 1656667513043b6e26 | `media-scrolling-gallery` | reuse · @WALLPAPSH |
| 16 | 16636639941ee42e10 | `faq-collapsible-tabs` | reuse |
| 17 | 1660652947e3543e1b | `editorial-image-with-text-overlay.2` | reuse · parallax Latest designs |
| 18 | 1659001743407f50e5 | `trust-icon-row` | reuse |
| 19 | footer | `footer-columns-newsletter` | reuse |

---

## Aday / leftover

[`candidates/wallpapsh-leftovers.md`](../candidates/wallpapsh-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 41/41 · 121 PNG · overlay kapalı kare homepage (menu/search/cart)
- [x] Interact — mega 1440 · search 1440 · cart drawer+page · PDP Pink · FAQ · announcement 768/1440
- [x] PNG bak → stateFindings (şema yok; mevcut tipler yeter)
- [x] `node scripts/validate-schemas.mjs`
- [ ] missingStates: hamburger drawer · TRENDY COLLECTION sekme · search 375/768

## Interact özet

Alınan: SHOP BY ROOM 6 görsel kart (1440 forceOpen); Search `pink` PRODUCTS (1440); cart drawer/sayfa Hobby Pink 8×8 Black $80→$160; PDP Color Pink; FAQ ilk soru −; announcement New Offers ↔ Free Shipping (768/1440).

Açık: hamburger kare homepage; sekme BEST SELLERS’da kaldı; arama 375/768 input gizli. Üçüncü deneme yok.

Şema: 0 değişiklik.
