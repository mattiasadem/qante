# Magic Spoon leftovers / adaylar

*Store:* https://magicspoon.com · *Tema (görülen):* **magicspoon-shopify/MAIN** · `schema_name` **null** · `schema_version` **null** · `theme_store_id` **null** (custom) · shop `magic-spoon.myshopify.com` · theme id `133025103934` · role `main`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: magicspoon-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → HTTP 404 “Nothing to see here! / BACK TO SHOP” + `#myVideo`. Taksonomide 404 pageType yok. Observation `page-content-main` reuse.  
Örnekler: https://magicspoon.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: magicspoon-predictive-search  
Gerekçe: Header’da search control yok (scan 0). `/search?q=cocoa` 30 sonuç (`#main .searchresults`) var; overlay / `global-predictive-search` yok.  
Örnekler: https://magicspoon.com/search?q=cocoa  
Öneri: leftover — header search yok  
Karar: onay bekliyor

---

ADAY: magicspoon-reviews-app  
Gerekçe: PDP `#…__product_reviews_new_xbQUw7` “WHAT SPOONERS ARE SAYING” 4.6 + Okendo. `/pages/reviews-1` `section#page` 107,808 reviews (Okendo). Taksonomide reviews-app yok.  
Örnekler: https://magicspoon.com/products/cocoa-cereal-case · https://magicspoon.com/pages/reviews-1  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: magicspoon-store-locator  
Gerekçe: `/pages/store-locator` `store_locator_GBrekV` harita + “Find Us In A Store Near You”. Taksonomide store-locator yok.  
Örnekler: https://magicspoon.com/pages/store-locator  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: magicspoon-rebuy-upsell  
Gerekçe: PDP `rebuy_subscription_upsell_popup_gkGyCz` 0px. Home/cart Rebuy Smart Cart ayrı observation (`global-cart-drawer`).  
Örnekler: https://magicspoon.com/products/cocoa-cereal-case  
Öneri: leftover — app popup  
Karar: onay bekliyor

---

ADAY: magicspoon-quick-buy  
Gerekçe: PLP `#quick-buy-modal-container.hide` “One-time Purchase / Subscribe & Save 25%”. Kapalı modal; `global-quick-view` yoklandı değil.  
Örnekler: https://magicspoon.com/collections/shop-all  
Öneri: leftover — quick buy modal  
Karar: onay bekliyor

---

ADAY: magicspoon-rebuy-autopen  
Gerekçe: Rebuy Smart Cart 768/1440’ta PDP / about / FAQ / comparison / MS78 / search karelerinde açık geliyor. `.rebuy-cart__flyout-close` kapalıyken x≈2380 (off-viewport) — resmi script ile kapatılamadı. 375 kareler temiz. Drawer’ın kendisi 3vp yakalandı.  
Örnekler: https://magicspoon.com/products/cocoa-cereal-case  
Öneri: leftover — app overlay  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Home `sections--17552461267006__1764479205f91d6f4c` + `__1764459177dfa00bb0` 0px (app/helper)
- Home `frontpage-reviews` + `frontpage-social` 0px
- PDP duplicate `ms114_featured_carousel_6EYnfq-ms114` (aynı “EXPLORE MORE MAGIC” — ilk instance alındı)
- `/blogs/news` boş (`<main>` 644px, yazı yok)
- `/pages/jobs` careers list (`section#page`) — observation yazılmadı
- `/pages/order-tracking` app embed — PII-adjacent leftover
- `/pages/terms-of-use` · `/pages/testparty` (Accessibility) · `/policies/refund-policy` — `page-content-main` ailesi; privacy alındı
- Contact Klaviyo `manage.kmail-lists.com` subscribe — PII stop
- Newsletter / account `/account` / checkout — PII stop
- Header search yok (yukarıdaki aday)
