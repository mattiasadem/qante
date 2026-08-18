# Dwell leftovers / adaylar

*Store:* https://theme-dwell-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **dwell-100-0-0** · `schema_name` **Dwell** · `schema_version` **100.0.0** · `theme_store_id` **null** · role `main` · id `153150455997` · shop `se-horizon10-en-q73c.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/dwell — Free · by Shopify · Horizon family  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: dwell-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store sayfası Dwell / Shopify / Free — sayısal id storefront’ta yok. `schema_version` **100.0.0** (uydurulmadı).  
Örnekler: https://theme-dwell-demo.myshopify.com/  
Öneri: leftover — listing id okunmadı  
Karar: onay bekliyor

---

ADAY: dwell-footer-utilities  
Gerekçe: Sibling `#…__footer_utilities` — “© 2026 Dwell, Powered by Shopify”. Newsletter `footer-columns-newsletter`.  
Örnekler: home footer group  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: dwell-search-header-section  
Gerekçe: `/search?q=linen` sibling `#…__search` (search-page-input-component, “Search results” + input). Sonuç ızgarası `search-results` observation. Ayrı şema yok.  
Örnekler: https://theme-dwell-demo.myshopify.com/search?q=linen  
Öneri: leftover — Horizon `search-header`  
Karar: onay bekliyor

---

ADAY: dwell-menu-768-desktop  
Gerekçe: 768 hamburger `summary[aria-label=Menu]` 0×0. Bedding/Bath/Decor masaüstü nav + mega hover. Drawer yalnız 375.  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — 768 hamburger yok  
Karar: onay bekliyor

---

ADAY: dwell-404-routes  
Gerekçe: Aynı 404 (`main` Page not found + Discover something new): `/pages/about` `/pages/contact-us` `/pages/privacy` `/pages/privacy-policy` `/pages/policies` `/blogs/journal` `/blogs/blog` + rastgele path. Observation `not-found/page-content-main` + product-list.  
Örnekler: https://theme-dwell-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: dwell-plp-template-repeats  
Gerekçe: `/collections/all` (107), `/collections/sale` (31), `/collections/decor` (25) ve diğer kategori koleksiyonları aynı `section` + `main` şablon. Yazılan: `/collections/bedding-1` (47).  
Örnekler: https://theme-dwell-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: dwell-quick-add-dialog  
Gerekçe: `quick-add-dialog` / `quick-add-component` kartta “Choose”. Overlay adayı; `global-quick-view` zorlanmadı.  
Örnekler: home featured / PLP kart  
Öneri: leftover — quick-add ≠ quick-view şema  
Karar: onay bekliyor

---

ADAY: dwell-hotspot-dialog  
Gerekçe: Home `product_hotspots` Down Pillow dialog (Add / Choose). `media-lookbook-banner` kapalı kare yazıldı; hotspot tık interact listesinde yok.  
Örnekler: `#…__product_hotspots_HXKqqD`  
Öneri: leftover — hotspot open yoklandı değil  
Karar: onay bekliyor

---

ADAY: dwell-account-drawer  
Gerekçe: Header Account → Shopify account / login. Tıklanmadı.  
Örnekler: header-actions  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: dwell-pii-stop  
Gerekçe: Footer newsletter Subscribe + contact Submit + checkout + login tıklanmadı.  
Örnekler: footer · `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: dwell-generic-section-wrapper  
Gerekçe: PLP başlık, blog post, FAQ, shipping Horizon `section.liquid` / page main + nested theme-blocks. Yeni şema açılmadı; mevcut tipe map.  
Örnekler: `#…__section` Bedding; blog-post `#…__section`; FAQ `#…__main`  
Öneri: leftover — generic wrapper, şema yok  
Karar: onay bekliyor

---

ADAY: dwell-collections-duplicate-decor  
Gerekçe: `/collections` ızgarasında Decor kartı iki kez (aynı görsel + etiket). Şema değil — katalog/liste.  
Örnekler: https://theme-dwell-demo.myshopify.com/collections  
Öneri: leftover — demo içerik  
Karar: onay bekliyor

---

ADAY: dwell-featured-vs-plp-price  
Gerekçe: Home featured Brushed Cotton Duvet Cover $310 / Vintage Linen Bed Blanket $489. Bedding PLP aynı adlar $210 / $185 (sale). Şema değil; katalog/market.  
Örnekler: `home/product-showcase-grid-featured` vs `collection/product-showcase-grid-plp`  
Öneri: leftover — fiyat sapması not edildi  
Karar: onay bekliyor

---

ADAY: dwell-policy-siblings  
Gerekçe: `/pages/shipping` yazıldı. `/pages/returns` `/pages/responsible-design` `/pages/care-maintenance` aynı template id (`__main`).  
Örnekler: footer INFORMATION  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

## 404 / boş / ince URL’ler

- `/pages/about` — 404 (`/pages/about-us` = About Us)
- `/pages/contact-us` — 404 (`/pages/contact` = Contact)
- `/pages/privacy` `/pages/privacy-policy` `/pages/policies` — 404
- `/blogs/journal` `/blogs/blog` — 404 (`/blogs/news` = Inspiration)

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / Shop Pay / Buy it now
- Newsletter Subscribe / contact Submit
- Quick-add Choose overlay
- Hotspot dialog tık
