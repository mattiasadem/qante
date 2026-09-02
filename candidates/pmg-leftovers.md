# PMG leftovers / adaylar

*Kaynak:* https://gamming-store-1.myshopify.com/  
*Ürün:* https://speedothemes.com/products/pmg-shopify-gaming-theme-shopify-os-2-0  
*Tema (görülen, uydurulmadı):* **PMG Game Store V-1.5.0** · `schema_name` **PMG game store** · `schema_version` **1.5.0** · `theme_store_id` **null** · role `main` · id `123907113009`  
*Walk host:* `gamming-store-1.myshopify.com`  
*Storefront password:* `1` (vendor ürün sayfasında yayınlı)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: pmg-theme-store-id-null  
Gerekçe: Vitrin `Shopify.theme.theme_store_id` **null**. Speedo third-party; Shopify Theme Store ID yazılmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: pmg-announcement-bar-yok  
Gerekçe: Home/header DOM’da announcement section yok. `promo-announcement-bar` observation yazılmadı.  
Örnekler: `#site-header`  
Öneri: leftover — section yok  
Karar: onay bekliyor

---

ADAY: pmg-social-proof-popup  
Gerekçe: `#shopify-section-newsletter-popup` 0px. Metin “Someone liked and Buy” + ürün + “10 Minutes Ago From Paris” + Verified. Newsletter değil; social-proof toast. Piksel 0 — observation yok.  
Örnekler: home ve tüm şablonlar  
Öneri: leftover — 0px / app-benzeri  
Karar: onay bekliyor

---

ADAY: pmg-team-warriors  
Gerekçe: About `#…__dbc23b1d-b633-4783-868d-b25b10ce7ede` OUR TEAM / GET TO KNOW OUR WARRIORS (Ellis Cronin, Alfonzo Conroy, Jessica Legros). Team grid şeması yok. `features-multicolumn` zorlanmadı.  
Örnekler: `/pages/about`  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: pmg-contact-map  
Gerekçe: `#shopify-section-template--14841912262705__map_GMdWc3` 580px, metin boş. Store/map şeması yok.  
Örnekler: `/pages/contact`  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: pmg-compare-page  
Gerekçe: `/pages/compare` “There are no products available to compare.” Header’da 0 Compare. `global-compare-drawer` overlay değil, sayfa. Dolu compare yoklandı değil.  
Örnekler: `/pages/compare`  
Öneri: leftover — boş compare sayfası  
Karar: onay bekliyor

---

ADAY: pmg-wishlist-page  
Gerekçe: Header “0 Wishlist” → `/pages/wishlist`. Walk dışı (hesap/istek listesi).  
Örnekler: header utility  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: pmg-no-product-variants  
Gerekçe: PDP keyboard ve mouse’ta swatch/option yok; yalnız qty stepper. `varyantGosterim` kanıtı yok.  
Örnekler: `/products/gaming-keyboard`  
Öneri: leftover — interact qty  
Karar: onay bekliyor

---

ADAY: pmg-buy-it-now  
Gerekçe: PDP `BUY IT NOW` Shopify payment button. Checkout — tıklanmadı.  
Örnekler: product-info-main  
Öneri: leftover — ödeme  
Karar: onay bekliyor

---

ADAY: pmg-cart-footer-empty  
Gerekçe: `#…__cart-footer` boş cart’ta 0px (“Estimated total”). Dolu halde ayrı section olabilir; boş karede yok.  
Örnekler: `/cart`  
Öneri: leftover — 0px empty  
Karar: onay bekliyor

---

ADAY: pmg-pdp-fashion-copy  
Gerekçe: PDP “Latest Fashion Style” / “Discover Sweats” gaming üründe. Observation yazıldı (editorial); kopya sapması delta’da.  
Örnekler: product-detail editorial  
Öneri: leftover not — şema yok  
Karar: onay bekliyor

---

ADAY: pmg-footer-no-newsletter  
Gerekçe: Footer e-posta input yok. `footer-columns-newsletter` reuse + delta.  
Örnekler: footer  
Öneri: leftover not  
Karar: onay bekliyor

---

ADAY: pmg-account-login  
Gerekçe: Header “Log in” → `/account/login`. Hesap — dur.  
Örnekler: header  
Öneri: leftover — stop  
Karar: onay bekliyor
