# Venue leftovers

*Kaynak:* https://venue-theme-morning.myshopify.com/  
*Tema (görülen, uydurulmadı):* **venue-18-2-1** · `schema_name` **Venue** · `schema_version` **18.2.1** · `theme_store_id` **null** · role `main` · id `142511603760` · shop `venue-theme-morning.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/venue — paid · Safe As Milk · Morning preview  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: venue-yasak-url  
Gerekçe: `venue-theme.myshopify.com` ve `venue-morning.myshopify.com` password. Walk edilmedi.  
Örnekler: —  
Öneri: leftover — password store  
Karar: onay bekliyor

---

ADAY: venue-sunset-sibling  
Gerekçe: Header DEMOS mega Theme Store preset linkleri (evening / weekend / morning / sunset). `venue-theme-sunset` kardeş leftover — bu walk Morning. Tıklanmadı.  
Örnekler: header DEMOS  
Öneri: leftover — sibling preset  
Karar: onay bekliyor

---

ADAY: venue-theme-store-id-null  
Gerekçe: Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: venue-promo-pop  
Gerekçe: `#shopify-section-sections--19058350489648__promo-pop` “Get 10% off!” Email + Subscribe. Kapalı 0 yükseklik. Newsletter submit PII — dur. Observation yok.  
Örnekler: home popup-group  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: venue-store-map  
Gerekçe: Home + contact `js-section__map` Ventura / San Francisco mağaza + saat + tel. Store locator şeması yok. `trust-contact-icon-band` ikon şeridi — uymaz.  
Örnekler: `#shopify-section-template--19058349834288__deed0c7d-a6b2-434e-8882-2a7cba84c982`  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: venue-hamburger-768  
Gerekçe: 375 `button.header-trigger__link--mobile` 20×20 → `#modal-main-menu`. 768/1440 hamburger 0×0; 768 inline STORE/COLLECTIONS mega.  
Örnekler: 768 home header  
Öneri: leftover — tablet hamburger yok  
Karar: onay bekliyor

---

ADAY: venue-cart-drawer-atc  
Gerekçe: `#modal-cart` DOM’da. ATC Tucker Wallet sonrası drawer otomatik açılmadı. `a[data-a11y-dialog-show=modal-cart]` ile açıldı.  
Örnekler: `/products/tucker-wallet` ATC  
Öneri: leftover — ATC→drawer kapalı  
Karar: onay bekliyor

---

ADAY: venue-cart-drawer-filled-768  
Gerekçe: 768 filled click `a[data-a11y-dialog-show=modal-cart]` viewport dışı. filled.768 PNG yok. changed.768 qty 2 / $140.  
Örnekler: global-cart-drawer 768  
Öneri: leftover — tablet filled kare  
Karar: onay bekliyor

---

ADAY: venue-cart-gift-wrap-coupon  
Gerekçe: Boş cart/drawer END OF SEASON SALE + SEASON15. Dolu: Gift wrap $5? + You may also like Quick view. Kupon/gift/QV/checkout tıklanmadı.  
Örnekler: `#modal-cart` · `/cart`  
Öneri: leftover — PII/checkout + upsell  
Karar: onay bekliyor

---

ADAY: venue-account  
Gerekçe: Header sağda person ikonu + 375 menu drawer’da account. `/account/login` tıklanmadı (PII).  
Örnekler: header#top · #modal-main-menu  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: venue-locale-currency  
Gerekçe: Header UNITED STATES (USD $) locale/currency. Tıklanmadı.  
Örnekler: header secondary-nav  
Öneri: leftover — locale şeması yok  
Karar: onay bekliyor

---

ADAY: venue-about-contact-404  
Gerekçe: `/pages/about` ve `/pages/contact` 404 (aynı `.main` 404 kabuğu). Yazılan: `/pages/about-us`, `/pages/contact-us`.  
Örnekler: https://venue-theme-morning.myshopify.com/pages/about  
Öneri: leftover — kısa slug 404  
Karar: onay bekliyor

---

ADAY: venue-policy-404  
Gerekçe: `/policies/privacy-policy` `/policies/refund-policy` `/policies/shipping-policy` `/policies/terms-of-service` 404. Terms içerik `/pages/returns-exchanges` (Terms & conditions + Hot headwear featured). Observation yazılmadı.  
Örnekler: Shopify native policy path  
Öneri: leftover — theme page, native policy yok  
Karar: onay bekliyor

---

ADAY: venue-faq-title-and-form  
Gerekçe: FAQ üst `__main` yalnız “FAQ” (45px). Altında contact-form “Need more help?” — contact sayfasındaki form ile aynı tip. Yazılan: faq-collapsible-tabs + contact lead-capture-form.  
Örnekler: `/pages/faq`  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: venue-theme-features  
Gerekçe: Nav THEME FEATURES → `/pages/theme-features`. Pazarlama/tema özellik sayfası. Walk about/contact; observation yok.  
Örnekler: header  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: venue-plp-template-repeats  
Gerekçe: `/collections/all` (The Store, 23) ve `/collections/tees-knits` (5) aynı banner + subcollections + product-grid şablon. Yazılan: `/collections/all`.  
Örnekler: `/collections/tees-knits`  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: venue-pdp-template-repeats  
Gerekçe: Tucker Wallet / Todos Santos Pullover / Trucker Shirt aynı `product-single` + image-compare + image-grid + testimonials + recommendations. Yazılan: Tucker Wallet (Color Tan/Brown). Todos Santos Color+Size (Black/Marl, M/L/XL).  
Örnekler: `/products/todos-santos-pullover`  
Öneri: leftover — aynı şablon  
Karar: onay bekliyor

---

ADAY: venue-search-chair-empty  
Gerekçe: `q=chair` 0 results. Katalog giyim. Yazılan sorgu `tee` (12).  
Örnekler: https://venue-theme-morning.myshopify.com/search?q=chair  
Öneri: leftover — boş sorgu  
Karar: onay bekliyor

---

ADAY: venue-pii-stop  
Gerekçe: Footer/popup Subscribe + contact Send + checkout + account tıklanmadı.  
Örnekler: footer-newsletter · promo-pop · `/pages/contact-us` · cart  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: venue-taxonomy-404  
Gerekçe: 404 `page-content-main` reuse; `pageType` 404 listede yok. `search` / `cart` / `collections` / `blog-list` klasörleri diğer temalarla aynı pratik.  
Örnekler: `/pages/this-does-not-exist-xyz-venue`  
Öneri: leftover — taksonomi  
Karar: onay bekliyor
