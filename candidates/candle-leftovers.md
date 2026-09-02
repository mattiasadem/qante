# Candle leftovers / adaylar

*Store:* https://speedo-candles-store.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Speedo-candles-store-v-1-5-0** · `schema_name` **Speedo candles Store** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `171992645913` · role `main` · shop `speedo-candles-store.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + title)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: candle-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://speedo-candles-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: candle-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password 1 to view demo.” Title `(password: 1)`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/candle-luxurious-candle-shopify-theme-o-s-2-0  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: candle-no-product-variants  
Gerekçe: `products.json` tüm ürünler tek varyant (`Title` / Default Title). PDP swatch/dropdown yok. `product-info-main` `changed` varyant state yok.  
Örnekler: `/products/candles-in-the-glass-jars` · `/products/simple-white-candles`  
Öneri: leftover — varyant interact yok  
Karar: onay bekliyor

---

ADAY: candle-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET 10% OFF. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: candle-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://speedo-candles-store.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: candle-pdp-empty-section  
Gerekçe: `#shopify-section-template--23490800124185__1686656678a56830d0` h=0, metin yok.  
Örnekler: Glass Jars PDP  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: candle-menu-drawer-1440-zero  
Gerekçe: `summary.header__icon--menu` 1440'te 0×0. Open yalnız 375/768.  
Örnekler: home hamburger  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: candle-no-mega  
Gerekçe: `.mega-menu` yok. Candles = `details#Details-HeaderMenu-2` basit dropdown. `navigation-header-mega` reuse + delta.  
Örnekler: home header  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: candle-placeholder-copy  
Gerekçe: Home quote polymer clay earrings; FAQ jewelry; testimonials laundry detergent; Instagram @clothingfashion. Mum vitrin + başka sektör placeholder.  
Örnekler: home rich-text.2 / FAQ / testimonials / feed  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: candle-404-about-faq-aliases  
Gerekçe: `/pages/about-us` · `/pages/about` · `/pages/faq` **404** (Page not found / CONTINUE SHOPPING). Canlı: `/pages/our-story` · `/pages/faqs`. 404 şablonu observation yazılmadı (skill min home/PLP/PDP/cart).  
Örnekler: https://speedo-candles-store.myshopify.com/pages/about-us  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: candle-lead-capture-pii  
Gerekçe: Newsletter band + contact form görünür; email/name fill/submit yok.  
Örnekler: home `__fefc41c9` · `/pages/contact` `__form`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: candle-buy-it-now  
Gerekçe: PDP Shopify payment button BUY IT NOW. Checkout — tıklanmadı.  
Örnekler: Glass Jars buy box  
Öneri: leftover — ödeme  
Karar: onay bekliyor

---

ADAY: candle-header-wishlist  
Gerekçe: Header `.wishlist-header` “Add to wishlish” (yazım hatası). Kartlarda `.button-wishlist`. Interact yok.  
Örnekler: home header + featured cards  
Öneri: leftover — wishlist  
Karar: onay bekliyor

---

ADAY: candle-cart-js-password-html  
Gerekçe: Unlock sonrası `fetch('/cart.js')` / `/cart/add.js` HTML (password/DOCTYPE) dönebiliyor. ATC yalnız UI.  
Örnekler: Glass Jars PDP  
Öneri: leftover — XHR şifre duvarı  
Karar: onay bekliyor

---

ADAY: candle-shopify-checkpoint  
Gerekçe: Çok headless istekten sonra “Just a moment… / Your connection needs to be verified”. Password `1` değil; Shopify bot checkpoint. 40s bekleme çözmedi.  
Örnekler: home / PDP after burst  
Öneri: leftover — rate-limit  
Karar: onay bekliyor

---

ADAY: candle-quickadd-soldout-copy  
Gerekçe: Featured/PLP `quick-add__submit` metni “Add to cart Sold out”; `disabled` false. PDP Glass Jars “Add to cart”. Gizli sold-out span olabilir.  
Örnekler: home featured kart 1  
Öneri: leftover — kart kopyası  
Karar: onay bekliyor

---

ADAY: candle-cart-drawer-best-seller  
Gerekçe: Dolu cart-drawer’da “Best seller” accordion (kapalı). Upsell; tıklanmadı, yeni şema yok.  
Örnekler: #CartDrawer filled  
Öneri: leftover — drawer upsell  
Karar: onay bekliyor

---

ADAY: candle-shipping-threshold-mismatch  
Gerekçe: Announcement “FREE Shipping … USD60”; drawer Free $100 / Express $150. İki eşik.  
Örnekler: home bar + cart-drawer  
Öneri: leftover — demo eşik  
Karar: onay bekliyor
