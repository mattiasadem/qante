# Candle leftovers / adaylar

*Store (resmi walk, başka host yok):* https://speedo-candles-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/candle-luxurious-candle-shopify-theme-o-s-2-0  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)  
*Slug:* `candle` · *Preset:* `default`  
*Tarih:* 2026-09-02

Şema icat edilmedi. Section walk yok. Password girilmedi. Başka demo host uydurulmadı.

---

ADAY: candle-demo-password-wall  
Gerekçe: Resmi demo `/` **200** ile `/password`’e düşüyor. Title `speedo-candles-store (password: 1)`. Gövde: “This store is password protected. Use the password to enter the store.” `form[action='/password']` + “Enter store password”. `window.Shopify.theme` ve `Shopify.shop` password sayfasında **null** — `schema_name` / version / theme id uydurulmadı. Görev kuralı: password wall → STOP, başka host yok.  
Örnekler: https://speedo-candles-store.myshopify.com/ · https://speedo-candles-store.myshopify.com/password  
Öneri: leftover — walk kapalı; password kalkınca Mod A + interact  
Karar: onay bekliyor

---

ADAY: candle-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password "1" to view demo.” yazıyor. Title’daki `(password: 1)` ile aynı. Bu yayınlanmış satır leftover’da durur; agent password’ü girmedi (STOP kuralı). İnsan onayı olmadan tekrar deneme.  
Örnekler: https://speedothemes.com/products/candle-luxurious-candle-shopify-theme-o-s-2-0  
Öneri: leftover — vendor notu; walk yetkisi ayrı  
Karar: onay bekliyor

---

ADAY: candle-not-theme-store-official  
Gerekçe: Vendor Speedo Themes; Shopify Theme Store first-party değil. Katalog `speedothemes.com/collections/shopify-themes` Candle kartı + Live Demo. `theme_store_id` canlıda okunamadı (password). ID uydurulmadı.  
Örnekler: https://speedothemes.com/collections/shopify-themes · ürün URL yukarıda  
Öneri: leftover — third-party künye  
Karar: onay bekliyor

---

ADAY: candle-home-plp-pdp-cart-ungated  
Gerekçe: Home / PLP / PDP / cart / search / content / footer / overlay (mega, hamburger, predictive search, cart drawer) hiç görülmedi. Interact (hover, open menu, filled cart, variant) yok.  
Örnekler: resmi host password  
Öneri: leftover — Sprint 0 Package A bekliyor  
Karar: onay bekliyor
