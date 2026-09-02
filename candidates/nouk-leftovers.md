# Nouk leftovers / adaylar

*Store:* https://jewelry-online-shop-3.myshopify.com/  
*Tema (görülen, uydurulmadı):* Nouk Jewellery V-1.5.0 \| New Mega menu · id `138617356443` · `schema_name` Nouk Jewellery · `schema_version` 1.5.0 · `theme_store_id` null · role main  
*Shop:* `jewelry-online-shop-3.myshopify.com`  
*Vendor:* Speedo Themes  
*Tarih:* 2026-09-02

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: nouk-storefront-password  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfası: `Please enter password "1" to view demo.` Password wall başlığı `Jewelry Online Shop 3 (password: 1)`. Başka host denenmedi. Capture `storePassword: "1"`.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/ · https://speedothemes.com/products/nouk-shopify-jewelry-theme-shopify-os-2-0  
Öneri: leftover — resmi demo kapısı; walk password sonrası  
Karar: onay bekliyor

---

ADAY: nouk-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` 0px (dismiss). Görsel `newsletter-popup.png` + Subscribe. PII — açılmadı / gönderilmedi.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/  
Öneri: leftover — overlay PII  
Karar: onay bekliyor

---

ADAY: nouk-size-guide-table  
Gerekçe: `/pages/size-guide` uluslararası yüzük ölçü tablosu (MM/Inches + ülke kolonları). Taksonomide size-guide pageType yok; `page-content-main` tablo iskeletini karşılamaz.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/pages/size-guide  
Öneri: leftover — tablo sayfası  
Karar: onay bekliyor

---

ADAY: nouk-breadcrumb-in-section  
Gerekçe: PLP `HOME EARRINGS` ve PDP `HOME PRINCESS…` breadcrumb ayrı `#shopify-section` değil; grid/main içinde. `navigation-breadcrumbs` observation yazılmadı.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/collections/earrings  
Öneri: leftover — feature, ayrı section değil  
Karar: onay bekliyor

---

ADAY: nouk-cart-footer-section  
Gerekçe: `#shopify-section-template--17443720954011__cart-footer` boş sepette 0px. Dolu hâlde Estimated total / Check out ayrı Shopify section. `cart-page-main` items selector'ına bağlandı.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/cart  
Öneri: leftover — aynı cart sayfa; ayrı şema yok  
Karar: onay bekliyor

---

ADAY: nouk-wishlist-compare-empty-pages  
Gerekçe: `/pages/wishlist` ve `/pages/compare` boş mesaj. Kartta Add to wishlist / Add to compare var; dolu tablo/ızgara bu pass'te doldurulmadı (PII değil ama ayrı sayfa state). En yakın tipler `product-showcase-favorites` / `comparison-quick-table` boş kare.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/pages/wishlist · https://jewelry-online-shop-3.myshopify.com/pages/compare  
Öneri: leftover — filled wishlist/compare  
Karar: onay bekliyor

---

ADAY: nouk-offer-banner-gwp  
Gerekçe: Home `offer_banner` GWP (ENDS SOON! + eşik hediyeleri). En yakın `editorial-image-with-text-overlay`. Countdown rakamı yok.  
Örnekler: https://jewelry-online-shop-3.myshopify.com/  
Öneri: leftover — ayrı offer-banner tipi gerekirse  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Login / account / checkout — PII, tıklanmadı
- Footer Subscribe / contact SUBMIT — PII, gönderilmedi
- Mailto `info@example.com` / tel — tıklanmadı
- 404 şablonu walk dışı
- `#shopify-section` olmayan policy gövdesi `.shopify-policy__container` olarak `page-content-main` bağlandı
