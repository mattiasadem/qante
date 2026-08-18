# Zest leftovers / adaylar

*Store (walk):* https://zest-theme-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/zest  
*Tema (görülen, uydurulmadı):* **[Update theme store] Zest** · `schema_name` **Zest** · `schema_version` **9.3.0** · `theme_store_id` **null** · id `151342186722` · role `main`  
*Shopify.shop:* `zest-flairy.myshopify.com` (walk host `zest-theme-demo.myshopify.com`)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: zest-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Listing https://themes.shopify.com/themes/zest id uydurulmadı.  
Örnekler: https://zest-theme-demo.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: zest-shop-domain-alias  
Gerekçe: Walk URL `zest-theme-demo.myshopify.com` ama `Shopify.shop` = `zest-flairy.myshopify.com`. Aynı tema id `151342186722`.  
Örnekler: home `Shopify.shop`  
Öneri: leftover — alias / primary shop  
Karar: onay bekliyor

---

ADAY: zest-other-presets  
Gerekçe: Nav Presets mega: Flairy / Gusto / Cosmo / Fleek / Laura demo URL. Yalnız Flairy walk.  
Örnekler: https://zest-gusto.myshopify.com/ · https://zest-cosmo.myshopify.com/ · https://zest-fleek.myshopify.com/ · https://zest-laura.myshopify.com/  
Öneri: leftover — diğer preset  
Karar: onay bekliyor

---

ADAY: zest-newsletter-popup  
Gerekçe: `#shopify-section-sections--19598715322594__popup` h=0. Get 10% Off be in the know + newsletter. PII, dur.  
Örnekler: overlay-group `__popup`  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: zest-header-home-zero  
Gerekçe: Home `#…__header` shopify-section h=0 (site-header--transparent overlay). İç `header.site-header` ≈70px. Viewport interact.  
Örnekler: https://zest-theme-demo.myshopify.com/  
Öneri: leftover — overlay clip  
Karar: onay bekliyor

---

ADAY: zest-menu-drawer-1440-zero  
Gerekçe: `#Drawer-MobileNav` 1440'te 0px. Open yalnız 375/768.  
Örnekler: home hamburger  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: zest-cart-footer-split  
Gerekçe: `/cart` `#…__cart-items` + `#…__cart-footer` ayrı. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://zest-theme-demo.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: zest-cart-recs-empty  
Gerekçe: `#…__product-recommendations` cart'ta h≈80, metin yok.  
Örnekler: /cart  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: zest-pdp-related-empty  
Gerekçe: Alpine Jogger `#…__product-recommendations` h≈200, metin yok. Hydrate yok. `product-showcase-related` yazılmadı.  
Örnekler: https://zest-theme-demo.myshopify.com/products/alpine-jogger  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: zest-sticky-atc  
Gerekçe: `#shopify-section-sticky-atc-bar` h=0 (scroll öncesi). Alpine / Chai + qty + ADD TO CART. Şema yok.  
Örnekler: PDP sticky  
Öneri: leftover — sticky ATC  
Karar: onay bekliyor

---

ADAY: zest-gift-wrap-ask  
Gerekçe: PDP gift wrap $1 + Ask a question (name/email/phone). PII / commerce leftover.  
Örnekler: Alpine Jogger buy box  
Öneri: leftover — PII / add-on  
Karar: onay bekliyor

---

ADAY: zest-about-good-quality-empty  
Gerekçe: About `#…__45e4c2ac-…` heading Good Quality, innerText boş, h≈378. Observation yazılmadı.  
Örnekler: /pages/about-us  
Öneri: leftover — boş/görsel-only  
Karar: onay bekliyor

---

ADAY: zest-contact-store-tabs  
Gerekçe: Contact `collage_tabs` LONDON / NEW YORK BOUTIQUE (adres + saat + GET DIRECTION). Koleksiyon değil. Şema yok.  
Örnekler: /pages/contact  
Öneri: leftover — store locator  
Karar: onay bekliyor

---

ADAY: zest-lookbook-find-store  
Gerekçe: Nav/footer `/pages/lookbook`, `/pages/find-a-store`. Walk dışı.  
Örnekler: https://zest-theme-demo.myshopify.com/pages/lookbook  
Öneri: leftover — extra page  
Karar: onay bekliyor

---

ADAY: zest-about-us-02  
Gerekçe: Nav Pages → `/pages/about-us-02`. Walk `/pages/about-us`.  
Örnekler: /pages/about-us-02  
Öneri: leftover — ikinci about  
Karar: onay bekliyor

---

ADAY: zest-blog-trash-talk-empty  
Gerekçe: Footer Blog → `/blogs/trash-talk` “You don't have any articles yet!”. Walk `/blogs/zest-flairy-news`.  
Örnekler: /blogs/trash-talk  
Öneri: leftover — boş blog  
Karar: onay bekliyor

---

ADAY: zest-404-back-to-shop  
Gerekçe: 404 sibling `#…__1654932776e31829bc` “Back to the shop...” + 4 placeholder “Collection's name”. `page-content-main` yalnız 404 metin.  
Örnekler: /pages/does-not-exist-qante  
Öneri: leftover — sibling grid  
Karar: onay bekliyor

---

ADAY: zest-404-routes  
Gerekçe: Aynı 404 şablon: `/pages/about`, `/pages/contact-us`, `/blogs/news`, `/pages/faq`, `/pages/does-not-exist-qante`.  
Örnekler: https://zest-theme-demo.myshopify.com/pages/about  
Öneri: leftover — route kaydı  
Karar: onay bekliyor

---

ADAY: zest-collections-all  
Gerekçe: `/collections/all` (Shop All) aynı PLP tipi + kategori şerit (Tops/Bras/Shorts…). Leggings PLP yazıldı.  
Örnekler: /collections/all  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: zest-plp-filters  
Gerekçe: Leggings filter PRODUCT TYPE / PRICE / COLOR / SIZE / AVAILABILITY. Interact listesinde yok.  
Örnekler: /collections/leggings  
Öneri: leftover — filtre interact  
Karar: onay bekliyor

---

ADAY: zest-quick-view  
Gerekçe: Kartlarda CHOOSE OPTIONS. Quick view yoklandı değil.  
Örnekler: home product_tabs  
Öneri: leftover — `global-quick-view` yazılmadı  
Karar: onay bekliyor

---

ADAY: zest-predictive-unrelated-suggestions  
Gerekçe: Probe `alpine` predictive listesinde Kits / Skincare / Sublinguals + Alpine/Amalfi ürünleri. Search sayfası 2 jogger. PNG sonrası doğrulanacak.  
Örnekler: #Drawer-Search  
Öneri: leftover — öneri gürültüsü  
Karar: onay bekliyor

---

ADAY: zest-sale-date-typo  
Gerekçe: Promo “Ends April 120 2025”. Canlı timer yoklandı değil.  
Örnekler: home `__promotion_banner_6LqrTJ`  
Öneri: leftover — metin  
Karar: onay bekliyor
