# Sonix leftovers / adaylar

*Store:* https://sonix-electronics-store.myshopify.com/  
*Tema (görülen, uydurulmadı):* ** Sonix V-1.5.0** · `schema_name` **Sonix** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `169615360300` · role `main` · shop `sonix-electronics-store.myshopify.com`  
*Vendor:* Speedo Themes · https://speedothemes.com/products/sonix-shopify-electronics-theme-shopify-os-2-0  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: sonix-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo third-party; Theme Store listing id uydurulmadı. `schema_name` Sonix · `schema_version` 1.5.0 · name ` Sonix V-1.5.0` (başta boşluk).  
Örnekler: https://sonix-electronics-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: sonix-password-wall  
Gerekçe: Storefront `/password`. Vendor ürün sayfası “Please enter password 1”. POST `/password` ile aynı hostta açıldı; başka host yok.  
Örnekler: https://sonix-electronics-store.myshopify.com/password  
Öneri: leftover — public demo unlock  
Karar: onay bekliyor

---

ADAY: sonix-offer-banner  
Gerekçe: `#shopify-section-template--22992854516012__offer_banner_g7W7Wb` — tek görsel `offer-banner.jpg`, metin ENDS SOON! / Stud Earrings… Sayaç yok. `promo-grid-banner` min 2 kart; `promo-banner-countdown` timer yok.  
Örnekler: home offer_banner_g7W7Wb  
Öneri: leftover — tek görsel promo  
Karar: onay bekliyor

---

ADAY: sonix-newsletter-popup-cookie  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Cookie: “Important information regarding cookies” + ACCEPT! + Privacy Policy. Newsletter PII tetiklenmedi, submit yok.  
Örnekler: tüm sayfalar  
Öneri: leftover — PII / cookie overlay  
Karar: onay bekliyor

---

ADAY: sonix-meet-the-team  
Gerekçe: `/pages/about-us` `#…__dbc23b1d-…` — MEET THE TEAM: ANNMARIE Director / EVELYN Fashion Designer / MAVERICK + sosyal ikonlar. `features-multicolumn` USP değil; testimonial değil.  
Örnekler: https://sonix-electronics-store.myshopify.com/pages/about-us  
Öneri: leftover — ekip ızgarası  
Karar: onay bekliyor

---

ADAY: sonix-wishlist-compare-pages  
Gerekçe: Header ikonları `/pages/wishlist` + `/pages/compare`. pages.json’da var. Walk dışı (ayrı compare/wishlist şeması yok; `global-compare-drawer` tetiklenmedi).  
Örnekler: header `.wishlist` `.compare`  
Öneri: leftover — app/page  
Karar: onay bekliyor

---

ADAY: sonix-quick-shop  
Gerekçe: Home SHOP SOUNDS kartlarında QUICK SHOP / ADD TO CART. Ayrı `#quick-view` overlay DOM’da yok. QV şeması yazılmadı.  
Örnekler: `#…__0617c2f2-…`  
Öneri: leftover — kart CTA  
Karar: onay bekliyor

---

ADAY: sonix-cart-footer-zero  
Gerekçe: `/cart` sibling `#shopify-section-template--22992854221100__cart-footer` h=0. `cart-page-main` `cart-items`.  
Örnekler: https://sonix-electronics-store.myshopify.com/cart  
Öneri: leftover — boş cart-footer  
Karar: onay bekliyor

---

ADAY: sonix-missing-routes  
Gerekçe: `/pages/about` · `/pages/contact-us` · `/pages/faq` → aynı 404 main (`Page not found`). Gerçek: `/pages/about-us` · `/pages/contact` · `/pages/faqs`.  
Örnekler: 404 template `--22992854122796__main`  
Öneri: leftover — yanlış slug  
Karar: onay bekliyor

---

ADAY: sonix-pdp-buybox-extras  
Gerekçe: Echo Dot buy-box: “People are viewing this right now”, “256 in stock”, “Delivery by Sep 12, 2026”, “Hurry up! Sales End In” sayaç, EXTRA INFORMATION / SHIPPING & RETURNS / MATERIALS accordion. `product-info-main` delta; ayrı şema yok. BUY IT NOW checkout tıklanmadı.  
Örnekler: `/products/amazon-echo-dot-3rd-generation-smart-alexa-speaker`  
Öneri: leftover — buy-box eklentileri  
Karar: onay bekliyor

---

## CRO şema listesi (observation yok — şema icat edilmedi)

- `before-after-slider`
- `commerce-tools-products-bundle`
- `promo-banner-countdown` (offer banner timer değil)
- `comparison-quick-table`
- `product-finder-quiz`
- `media-shop-the-feed`
- `media-scrolling-gallery`
- `global-quick-view`
- `global-compare-drawer`
