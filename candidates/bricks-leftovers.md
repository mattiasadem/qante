# Bricks leftovers / adaylar

*Store:* https://bricks-theme-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/bricks  
*Tema (görülen, uydurulmadı):* **Bricks** · `schema_name` **Bricks** · `schema_version` **1.0.0** · `theme_store_id` **null** · id `205031473490` · role `main`  
*`Shopify.shop`:* `gsc-2theme-demo1.myshopify.com` · public host `bricks-theme-demo.myshopify.com` · locale `en` · country `CY` · currency `EUR`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: bricks-shop-handle  
Gerekçe: Walk URL `bricks-theme-demo.myshopify.com`. Canlı `Shopify.shop` = `gsc-2theme-demo1.myshopify.com` (GSC demo shop). İkisi de okundu; shop handle uydurulmadı.  
Örnekler: https://bricks-theme-demo.myshopify.com/  
Öneri: leftover — alias vs shop handle  
Karar: onay bekliyor

---

ADAY: bricks-footer-utilities  
Gerekçe: Sibling `#…__footer_utilities_6UQrV4` — “© 2026 Bricks, Powered by Shopify” + Privacy / Terms / Refund + English/EUR. Newsletter `footer-columns-newsletter`.  
Örnekler: home footer group  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: bricks-quick-view  
Gerekçe: Overlay `#…__quick-view` / `quick-view-section` / `#QuickViewDrawer` h=0. Kartta `quick-view-button` + `quick-add-button`. `global-quick-view` zorlanmadı.  
Örnekler: home product_list / IWT grids  
Öneri: leftover — quick-view ≠ yazılan şema  
Karar: onay bekliyor

---

ADAY: bricks-search-header  
Gerekçe: `/search?q=dress` sibling `#…__search_header_CFDCha` — PRODUCTS | BLOG POSTS. Sonuç ızgarası `search-results`. Ayrı şema yok.  
Örnekler: https://bricks-theme-demo.myshopify.com/search?q=dress  
Öneri: leftover — search tab header  
Karar: onay bekliyor

---

ADAY: bricks-about-404  
Gerekçe: `/pages/about` ve `/pages/about-us` HTTP 404 — aynı `#…__404_zH7HRz`. Nav’da About yok; Contacts + FAQ var.  
Örnekler: https://bricks-theme-demo.myshopify.com/pages/about  
Öneri: leftover — about yok  
Karar: onay bekliyor

---

ADAY: bricks-404-routes  
Gerekçe: Aynı 404 (Page not found + Continue shopping): `/pages/about` `/pages/about-us` `/pages/contact-us` `/blogs/journal` `/blogs/blog` `/pages/does-not-exist-qante-bricks`. Observation `not-found/page-content-main` bir kare.  
Örnekler: https://bricks-theme-demo.myshopify.com/pages/about-us  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: bricks-hamburger-1440  
Gerekçe: 1440 gerçek burger 0×0. 375 opener `burger-nav-button:not(.header__mock-burger)`. 768 görünür opener **`header__mock-burger` MENU** (74×36) — drawer açıldı.  
Örnekler: `burger-nav-button.header__mock-burger`  
Öneri: leftover — 1440 hamburger yok; 768 mock-burger tuzağı  
Karar: onay bekliyor

---

ADAY: bricks-menu-mega-shared-drawer  
Gerekçe: 1440 WOMEN hover ve 375 hamburger aynı `#MenuDrawer` (`menu-drawer--mixed`). Mega observation header’da; mobil `global-menu-drawer`. Yeni şema yok.  
Örnekler: `#MenuDrawer .menu-drawer__content`  
Öneri: leftover — paylaşılan host  
Karar: onay bekliyor

---

ADAY: bricks-pdp-color-single  
Gerekçe: Lovely Green Mini Dress Color yalnız **Green** (`gsc-swatch` tek). Option interact = Size 2XS→M (`gsc-chip`).  
Örnekler: https://bricks-theme-demo.myshopify.com/products/green-floral-puff-dress  
Öneri: leftover — renk değişimi yok  
Karar: onay bekliyor

---

ADAY: bricks-size-chart-popup  
Gerekçe: PDP `button.page-popup__target` SIZE CHART. Overlay adayı; tıklanmadı.  
Örnekler: product_information  
Öneri: leftover — size chart  
Karar: onay bekliyor

---

ADAY: bricks-plp-all-repeat  
Gerekçe: `/collections/all` (121 products) aynı `custom_section` + `collection_j66h9t` Women’s PLP ile. Yazılan: `/collections/womens` (74).  
Örnekler: https://bricks-theme-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: bricks-before-after-drag  
Gerekçe: Home `before-after` + range input görüldü. Drag/interact yoklandı değil — yalnız statik 3vp.  
Örnekler: `#…__before_after_aAhbGF`  
Öneri: leftover — drag  
Karar: onay bekliyor

---

ADAY: bricks-account  
Gerekçe: Header account ikonu (search overlay açıkken görüldü). Tıklanmadı.  
Örnekler: header-actions  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: bricks-pii-stop  
Gerekçe: Footer + newsletter band Subscribe, contact Submit, cart Check out, login tıklanmadı.  
Örnekler: newsletter · `/pages/contact` · cart  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: bricks-policy-pages  
Gerekçe: Footer Privacy policy / Terms of service / Refund policy — native policy veya page. About/contact yazıldı; policy tekrar edilmedi.  
Örnekler: footer_utilities  
Öneri: leftover — policy  
Karar: onay bekliyor

---

ADAY: bricks-localization  
Gerekçe: Header + footer English / EUR (`gsc-dropdown-v2` / localization-component). Değiştirilmedi.  
Örnekler: header_krVwVb  
Öneri: leftover — localization chrome  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/about-us`  
`/pages/contact-us`  
`/blogs/journal`  
`/blogs/blog`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Buy it now / cart Check out  
- Newsletter / contact form submit (PII)  
- SIZE CHART popup  
- Quick-view / quick-add overlay  
- `/collections/all` (Women’s PLP ile aynı tip)  
- Policy sayfaları  
- Before/after drag  
