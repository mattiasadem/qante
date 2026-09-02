# Handmade Clay leftovers / adaylar

*Store:* https://luxury-handmade-ultimate.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Luxury-handmade-ultimate V-1-5-0** · `schema_name` **luxury_handmade_ultimate** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `173445611830` · role `main` · shop `luxury-handmade-ultimate.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + title)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: handmade-clay-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://luxury-handmade-ultimate.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: handmade-clay-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password 1 to view demo.” Title `(password: 1)`. Public storefront unlock; hesap değil.  
Örnekler: https://speedothemes.com/products/shopify-jewelry-template-for-handmade  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: handmade-clay-no-product-variants  
Gerekçe: `products.json` ürünler tek varyant (`Title` / Default Title). PDP swatch/dropdown yok. `product-info-main` `changed` varyant state yok — accordion only.  
Örnekler: `/products/floral-leaf-clay-drop-earrings`  
Öneri: leftover — varyant interact yok  
Karar: onay bekliyor

---

ADAY: handmade-clay-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET 10% OFF. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: handmade-clay-wishlist-header  
Gerekçe: Header "Add to wishlish" (typo) + wishlist counter 0. Ayrı schema yok; `navigation-header-mega` içinde not. Tıklanmadı — hesap/PII sınırı.  
Örnekler: `#shopify-section-sections--23698075287862__header`  
Öneri: leftover — wishlist affordance  
Karar: onay bekliyor

---

ADAY: handmade-clay-faqs-url-typo  
Gerekçe: Nav metni "Faq's" ama `/pages/faqs` 404; çalışan URL `/pages/faq`.  
Örnekler: header link → `/pages/faq`  
Öneri: leftover — demo içerik tutarsızlığı  
Karar: onay bekliyor

---

ADAY: handmade-clay-predictive-search-missingStates  
Gerekçe: `global-predictive-search` interact — capture-interaction `settle()` (dismiss+scroll) sonrası modal 2px / input hidden. Probe (settle olmadan) clay fill başarılı. Statik `/search?q=clay` observation var.  
Örnekler: home search icon · probe SUGGESTIONS+PRODUCTS  
Öneri: leftover — capture script + Dawn search modal uyumsuzluğu (Luxora/Vedzila sınıfı)  
Karar: onay bekliyor

---

ADAY: handmade-clay-plp-mobile-filter-drawer  
Gerekçe: PLP `product-showcase-grid-plp` interact yalnız 1440 desktop facet (Availability). 375/768 mobil Filter and sort drawer `missingStates`.  
Örnekler: `/collections/all`  
Öneri: leftover — mobil facet interact backlog  
Karar: onay bekliyor

---

ADAY: handmade-clay-candle-family-delta  
Gerekçe: Section roster Dawn/Speedo candle-family ile aynı (announcement×2, slideshow, featured, collection-list, Maria, blog, testimonial, newsletter, FAQ, multicolumn, instagram). `promo-grid-banner` (NEW/HANDMADE) bu preset'te yok.  
Örnekler: home vs candle demo  
Öneri: leftover — preset farkı, şema reuse  
Karar: onay bekliyor
