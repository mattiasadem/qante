# Critters leftovers / adaylar

*Store (walk):* https://toyon-toys-2.myshopify.com/  
*Vendor:* https://speedothemes.com/products/critters-kids-toys-best-shopify-kids-themes-for-toy-store-os-2-0  
*Tema (görülen, uydurulmadı):* **Critters kids toys V-1.5.0** · `schema_name` **Critters kids toys** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `163267346616` · role `main`  
*Shopify.shop:* `toyon-toys-2.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: critters-not-theme-store  
Gerekçe: Speedo Themes third-party OS 2.0. Canlı `theme_store_id` **null**. Shopify Theme Store listing yok; kaynak yine tema demosu (viewer `shopify` kovası — dördüncü kaynak uydurulmadı).  
Örnekler: https://toyon-toys-2.myshopify.com/ · https://speedothemes.com/products/critters-kids-toys-best-shopify-kids-themes-for-toy-store-os-2-0  
Öneri: leftover — künye  
Karar: onay bekliyor

---

ADAY: critters-storefront-password  
Gerekçe: Vendor ürün sayfası “Please enter password 1 to view demo.” Aynı host `/password` — public storefront unlock, hesap değil.  
Örnekler: https://toyon-toys-2.myshopify.com/password  
Öneri: leftover — demo kapısı  
Karar: onay bekliyor

---

ADAY: critters-offer-code-banner  
Gerekçe: Home `offer_banner_g7W7Wb` 134px: Super discount for your first purchase · FREE15CRITTERS · Use discount code in checkout. Tek şerit, `promo-grid-banner` min 2 kart tutmaz. Countdown yok.  
Örnekler: https://toyon-toys-2.myshopify.com/  
Öneri: leftover — tek kod şeridi  
Karar: onay bekliyor

---

ADAY: critters-social-proof-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. “Someone liked and Buy” + ürün + “10 Minutes Ago From Paris” + Verified. Newsletter değil; sahte social-proof toast.  
Örnekler: home / her şablon  
Öneri: leftover — 0px overlay  
Karar: onay bekliyor

---

ADAY: critters-announcement-five-messages  
Gerekçe: Ticker 5 mesaj. Şema `mesajlar.max` 3. Observation delta.  
Örnekler: header group `__c46903b8-…`  
Öneri: leftover — slot max  
Karar: onay bekliyor

---

ADAY: critters-wishlist-compare-pages  
Gerekçe: Header 0 Wishlist → `/pages/wishlist`, 0 Compare → `/pages/compare`. Sayfa şablonları; drawer/compare schema değil. Hesap/PII yok ama işlev envanter dışı.  
Örnekler: https://toyon-toys-2.myshopify.com/pages/wishlist · https://toyon-toys-2.myshopify.com/pages/compare  
Öneri: leftover — sayfa  
Karar: onay bekliyor

---

ADAY: critters-quick-shop-overlay  
Gerekçe: Trending “Quick shop” metni. Unique quick-view host (modal id) bu turda yoklandı değil. `product-showcase-grid-featured` zaten `emit:product.quickView` + `global-quick-view` bağımlı. Ayrı observation yok.  
Örnekler: home Trending  
Öneri: leftover — overlay id  
Karar: onay bekliyor

---

ADAY: critters-cart-footer-zero  
Gerekçe: `/cart` `template--…__cart-footer` h=0. Satırlar `cart-items` içinde.  
Örnekler: https://toyon-toys-2.myshopify.com/cart  
Öneri: leftover — 0px  
Karar: onay bekliyor

---

ADAY: critters-account-login  
Gerekçe: Header Log in → `/account/login`. Auth / PII. Tıklanmadı.  
Örnekler: header  
Öneri: leftover — hesap  
Karar: onay bekliyor

---

ADAY: critters-industry-toys  
Gerekçe: Kids toys. ikas 12 çipte Toys yok. En yakın **Flowers & Gifts** (hediye/oyuncak). Eurus notu gibi toys çip uydurulmadı.  
Örnekler: home merch  
Öneri: leftover — endüstri  
Karar: onay bekliyor

---

ADAY: critters-blogs-json-404  
Gerekçe: `/blogs.json` 404. `/blogs/news` ve yazı yolları 200.  
Örnekler: https://toyon-toys-2.myshopify.com/blogs/news  
Öneri: leftover — API  
Karar: onay bekliyor
