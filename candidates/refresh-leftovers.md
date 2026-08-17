# Refresh leftovers / adaylar

*Store:* https://theme-refresh-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* `Shopify.theme.name` **refresh/refresh-demo-store** · `schema_name` **Dawn** 5.0.0 · `role` **main** · id `132932272380` · `theme_store_id` **null**  
*Theme Store:* https://themes.shopify.com/themes/refresh/presets/refresh — **Refresh** · Free · by Shopify  
*Tarih:* 2026-08-17

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: refresh-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` / `storefront` null. Theme Store sayfası "Refresh / Free / by Shopify" doğrulandı; sayısal 1370 vitrinde okunmadı, yazılmadı.  
Karar: leftover — kimlik notu

---

ADAY: refresh-404-routes  
Gerekçe: Aynı 404 şablon (`template-404`): `/pages/about` `/pages/about-us` `/pages/faq` `/pages` `/blogs/journal` `/policies/privacy-policy`. Observation `not-found/page-content-main` bir kare.  
Örnekler: https://theme-refresh-demo.myshopify.com/pages/about  
Karar: leftover — route kaydı

---

ADAY: refresh-newsletter-repeat  
Gerekçe: "Get 10% off your first order." instance bant home + PDP + PLP + search + cart + about + faq + contact + blog + 404. Yalnız home observation. Form gönderilmedi.  
Karar: leftover — tekrar; PII yok

---

ADAY: refresh-product-recommendations-empty  
Gerekçe: PDP `#…__product-recommendations` h=0, metin yok. İlk ziyaret / hydrate yok. `product-showcase-related` yazılmadı.  
Örnekler: https://theme-refresh-demo.myshopify.com/products/bar-soap-2-pack-2  
Karar: leftover — boş kutu

---

ADAY: refresh-gift-card-amount  
Gerekçe: `/products/gift-card` Amount radios $25/$50/$75/$100. PDP option interact Bar Soap Scent'te alındı; ikinci product-info yazılmadı.  
Karar: leftover — ikinci PDP

---

ADAY: refresh-search-empty-shirt  
Gerekçe: `/search?q=shirt` 0 sonuç (başlık "0 results found"). Observation `soap` (8). Boş-sonuç karesi çekilmedi.  
Karar: leftover

---

ADAY: refresh-collections-all  
Gerekçe: `/collections/all` (Products) aynı PLP tipi + gift/blog IWT. Hair PLP yazıldı; all tekrar edilmedi. Body/Face/Kits aynı iskelet.  
Karar: leftover — duplicate PLP

---

ADAY: refresh-no-quick-view  
Gerekçe: Kartlarda Quick View yok; Add to cart / Choose options. `global-quick-view` observation yok.  
Karar: leftover — overlay yok

---

ADAY: refresh-no-account-header  
Gerekçe: Header metni Hair/Body/Face/Kits/About/Cart. Hesap ikonu bu karede yok. `/account` yoklanmadı (PII dur).  
Karar: leftover — PII sınırı

---

ADAY: refresh-cart-footer-empty-zero  
Gerekçe: `#…__cart-footer` boş sepetken h=0. Dolu hâl cart-items ile birlikte. Ayrı observation yok.  
Karar: leftover

---

ADAY: refresh-contact-form-unsent  
Gerekçe: Contact Name/Email/Phone/Comment/Send görüldü. Gönderilmedi. Newsletter Email gönderilmedi.  
Karar: leftover — PII
