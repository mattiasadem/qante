# Socks leftovers / adaylar

*Store (walk):* https://socks-online-store-1.myshopify.com/  
*Ürün:* https://speedothemes.com/products/socks-and-fashion-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **socks-online-store-v-1-5-0-latest-updates-new** · `schema_name` **Socks** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `132680483023` · role `main`  
*Shopify.shop:* `socks-online-store-1.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: socks-password-wall  
Gerekçe: GET `/` storefront password. Title `Socks Online Store 1 (password: 1)`. Speedo Live Demo / ürün sayfası password `1` yayınlıyor. Aynı host `/password`.  
Örnekler: https://socks-online-store-1.myshopify.com/password  
Öneri: leftover — official unlock, başka host yok  
Karar: onay bekliyor

---

ADAY: socks-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo third-party; Theme Store id uydurulmadı.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: socks-related-products-empty  
Gerekçe: PDP `#shopify-section-template--16195360587983__related-products` h=128, ürün/metin yok.  
Örnekler: `/products/nintendo-donkey-kong-diddy-kong-socks`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: socks-pdp-empty-sibling  
Gerekçe: `#shopify-section-template--16195360587983__172137309121bf68f7` h=0.  
Örnekler: PDP  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: socks-cart-footer-zero  
Gerekçe: `#shopify-section-template--16195359604943__cart-footer` h=0 empty cart.  
Örnekler: `/cart`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: socks-contact-map  
Gerekçe: `#shopify-section-template--16195360260303__map_iqhHBB` h=680, innerText boş. Harita gömme; ayrı map şeması yok.  
Örnekler: `/pages/contact`  
Öneri: leftover — map  
Karar: onay bekliyor

---

ADAY: socks-wishlist-page  
Gerekçe: `/pages/wishlist` — wishlist sayfası. Header 0 count. Ayrı wishlist şeması yok.  
Örnekler: https://socks-online-store-1.myshopify.com/pages/wishlist  
Öneri: leftover — commerce-tools adayı  
Karar: onay bekliyor

---

ADAY: socks-compare-page  
Gerekçe: `/pages/compare` — compare sayfası. Header compare 0.  
Örnekler: https://socks-online-store-1.myshopify.com/pages/compare  
Öneri: leftover — commerce-tools / compare  
Karar: onay bekliyor

---

ADAY: socks-size-guide  
Gerekçe: `/pages/size-guide` — Size guide. Taksonomide size-guide pageType yok.  
Örnekler: https://socks-online-store-1.myshopify.com/pages/size-guide  
Öneri: leftover — içerik sayfa  
Karar: onay bekliyor

---

ADAY: socks-about-alt-layouts  
Gerekçe: Footer About Us → `/pages/about-layout-1`. Ayrıca about-layout-2/3/4, our-story-1 linkleri var; walk tek layout.  
Örnekler: `/pages/about-layout-2`  
Öneri: leftover — alternatif şablon  
Karar: onay bekliyor

---

ADAY: socks-contact-alt-layouts  
Gerekçe: `/pages/contact-layout-1` … `contact-layout-4` var; walk `/pages/contact`.  
Örnekler: footer dışı linkler  
Öneri: leftover — alternatif şablon  
Karar: onay bekliyor

---

ADAY: socks-policy-template-empty-section  
Gerekçe: `/policies/privacy-policy` dump’ta yalnız header+footer `.shopify-section`; yasal gövde ayrı şablon.  
Örnekler: https://socks-online-store-1.myshopify.com/policies/privacy-policy  
Öneri: leftover — policy recipe  
Karar: onay bekliyor

---

ADAY: socks-locale-country  
Gerekçe: Header country/region (USD/CAD/EUR) + dil. `dilGosterim` knob header şemasında; ayrı section değil.  
Örnekler: header  
Öneri: leftover — chrome  
Karar: onay bekliyor

---

ADAY: socks-home-no-announcement  
Gerekçe: Home’da ayrı announcement section yok. PDP `custom_announcement_bar_zqchrk` ticker var → `promo-announcement-bar` observation.  
Örnekler: home header group  
Öneri: leftover — home ticker yok  
Karar: onay bekliyor
