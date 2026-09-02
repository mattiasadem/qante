# Uvolox leftovers / adaylar

*Store (walk):* https://uvolox-online.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/uvolox-shopify-fashion-themes-shopify-2-0  
*Tema (görülen, uydurulmadı):* **Uvolox-online V-1.2.0** · `schema_name` **uvolox-online** · `schema_version` **1.2.0** · `theme_store_id` **null** · id `163401662782` · role `main`  
*Shopify.shop:* `uvolox-online.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: uvolox-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Shopify Theme Store listing yok. Theme Store id uydurulmadı.  
Örnekler: https://uvolox-online.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: uvolox-storefront-password  
Gerekçe: Title `Uvolox Online (password: 1)`. Vendor ürün sayfasında demo password `1`. Aynı host `/password` — başka vitrin yok. Capture `storefrontPassword: "1"`.  
Örnekler: https://uvolox-online.myshopify.com/password  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: uvolox-no-mega  
Gerekçe: `.mega-menu` yok. `header.drawer-menu` + `header-drawer data-breakpoint="desktop"` — hamburger **1440** dahil. Nav WOMEN/MEN/COLLECTIONS/NEWS/CONTACT yalnız `#menu-drawer` düz `<a>`. `navigation-header-mega` yazıldı; delta: mega yok.  
Örnekler: https://uvolox-online.myshopify.com/ `#Details-menu-drawer-container`  
Öneri: leftover — mega yok / desktop drawer  
Karar: onay bekliyor

---

ADAY: uvolox-no-cart-drawer  
Gerekçe: `#CartDrawer` yok. `#cart-icon-bubble` href=`/cart`. Dawn `#cart-notification` (“Item added to your cart”) add-to-cart sonrası. Sepet sayfa `cart-page-main`. Drawer şeması yazılmadı.  
Örnekler: `#cart-notification` · https://uvolox-online.myshopify.com/cart  
Öneri: leftover — cart-notification popup  
Karar: onay bekliyor

---

ADAY: uvolox-no-announcement  
Gerekçe: Announcement / utility-bar section yok. Header 45px.  
Örnekler: home header-group  
Öneri: leftover — announcement yok  
Karar: onay bekliyor

---

ADAY: uvolox-collections-gallery-tabs  
Gerekçe: `/pages/collections` `gallery-tab-link` (COLLECTION 3-16 / 3-23 / 28-19 / 29-11 / 91-01) + beş `collections-gallery-tabs` mozaik (gizli paneller h=0). İlk görünür ızgara `media-mosaic-grid` yazıldı. Tab şeridi + gizli paneller ayrı şema değil.  
Örnekler: https://uvolox-online.myshopify.com/pages/collections `#shopify-section-template--21687581081918__45de1859-00ae-4f06-ba5b-e7541a083edc`  
Öneri: leftover — lookbook tab chrome  
Karar: onay bekliyor

---

ADAY: uvolox-careers-list  
Gerekçe: `/pages/careers` `career-list` — SOFTWARE ENGINEER / SOFTWARE ENGINEER 2 + Apply → `/pages/careers-details`. İş ilanı şeması yok.  
Örnekler: https://uvolox-online.myshopify.com/pages/careers  
Öneri: leftover — kariyer listesi  
Karar: onay bekliyor

---

ADAY: uvolox-policy-native  
Gerekçe: `/policies/privacy-policy` `template-policy` — içerik shopify-section dışında (yalnız header+footer dump). Dawn native policy.  
Örnekler: https://uvolox-online.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: uvolox-faq-alias-404  
Gerekçe: `/pages/faq` 404. Canlı FAQ `/pages/faqs`. `/pages/about` ve `/pages/about-us` 404; about `/pages/about-uvolox`. `/pages/wishlist` 404.  
Örnekler: https://uvolox-online.myshopify.com/pages/faq  
Öneri: leftover — alias 404  
Karar: onay bekliyor

---

ADAY: uvolox-signature-tshirt-no-variant  
Gerekçe: `/products/uvolox-signature-t-shirt` Size/Color yok — yalnız qty + Add to cart $60. Interact Size için `/products/ux-covered-zip-shirt` (S/M/L/XL) kullanıldı.  
Örnekler: https://uvolox-online.myshopify.com/products/uvolox-signature-t-shirt  
Öneri: leftover — varyantsız PDP  
Karar: onay bekliyor

---

ADAY: uvolox-account-login  
Gerekçe: Header Log in → `/account/login`. Auth / PII.  
Örnekler: header  
Öneri: leftover — hesap  
Karar: onay bekliyor
