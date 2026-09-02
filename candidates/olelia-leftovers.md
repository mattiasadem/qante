# Olelia leftovers / adaylar

*Store (walk):* https://jewelry-online-shop-4.myshopify.com/  
*Katalog:* https://speedothemes.com/products/olelia-jewelry-exquisite-jewelry-shopify-template-o-s-2-0  
*Tema (görülen, uydurulmadı):* **Olelia-v-1-5-0-latest-updates new** · `schema_name` **Olelia** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `146057625765` · role `main`  
*Shopify.shop:* `jewelry-online-shop-4.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: olelia-storefront-password  
Gerekçe: `/` 302 → `/password`. Title `jewelry-online-shop-4 (password: 1)`. Speedo product page: *Please enter password "1" to view demo.* Public vendor unlock; not a private account.  
Örnekler: https://jewelry-online-shop-4.myshopify.com/password  
Öneri: leftover — resmi demo kapısı  
Karar: onay bekliyor

---

ADAY: olelia-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Third-party Speedo, Theme Store resmi listing yok. Id uydurulmadı.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: olelia-related-products-empty  
Gerekçe: PDP `#shopify-section-template--18711812309157__related-products` h≈152, iç metin boş (recommended hydrate olmadı).  
Örnekler: https://jewelry-online-shop-4.myshopify.com/products/gold-diamond-pendant-necklace  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: olelia-contact-layout-1-404  
Gerekçe: Speedo product page Contact href `/pages/contact-layout-1` → 404 (Page not found).  
Örnekler: https://jewelry-online-shop-4.myshopify.com/pages/contact-layout-1  
Öneri: leftover — ölü layout link  
Karar: onay bekliyor

---

ADAY: olelia-about-faq-blog  
Gerekçe: About `/pages/about-layout-1` (parallax + IWT + multicolumn + image-with-icons + team + logos), FAQ `/pages/faq` (parallax + accordion), blog `/blogs/news` yüründü ama bu pass'te observation yazılmadı (kapsam home/PLP/PDP/cart).  
Örnekler: https://jewelry-online-shop-4.myshopify.com/pages/about-layout-1 · /pages/faq · /blogs/news  
Öneri: leftover — content şablonları  
Karar: onay bekliyor

---

ADAY: olelia-newsletter-submit  
Gerekçe: `lead-capture-newsletter-band` Email + SUBSCRIBE. PII, submit yok.  
Örnekler: home `__newsletter_JaqXmE`  
Öneri: leftover — form dur  
Karar: onay bekliyor

---

ADAY: olelia-quick-view-absent  
Gerekçe: Home/PLP DOM'da `quick-view` / Quick View overlay yok. Kartta `quick-add__submit` (doğrudan sepete) var.  
Örnekler: product cards  
Öneri: leftover — overlay yok  
Karar: onay bekliyor

---

ADAY: olelia-you-may-like-overlay  
Gerekçe: ATC sonrası 1440'ta cart drawer yanında `YOU MAY LIKE` overlay (Amo Fashion Belt Buckle Bracelet vb. + Add To Cart). Ayrı schema yok; cart drawer `stateFindings`.  
Örnekler: evidence `global-cart-drawer.filled.sepete-eklendi.1440.png`  
Öneri: leftover — upsell overlay  
Karar: onay bekliyor

---

ADAY: olelia-pdp-extras  
Gerekçe: product-info-main içinde Fast Shipping/24-7/30 days badges, “Hurry up! Sales End In” timer, Size Guide, Pairs well with, NEED HELP WhatsApp, Buy it now. Ayrı section değil; PDP extras.  
Örnekler: Gold Diamond Pendant Necklace buy box  
Öneri: leftover — PDP alt bloklar  
Karar: onay bekliyor

---

ADAY: olelia-plp-filter-sort  
Gerekçe: `/collections/rings` sol filtre (Color / Ring size / Category / Availability / Price) + kolon toggle + Alphabetically A-Z. Interact bu pass'te yok.  
Örnekler: product-showcase-grid-plp 1440  
Öneri: leftover — PLP filter/sort  
Karar: onay bekliyor

---

ADAY: olelia-gold-pdp-single-swatch  
Gerekçe: Resmi Speedo PDP linki `/products/gold-diamond-pendant-necklace` yalnız Color=Gold. Çoklu varyant interact `candid-love-diamond-ring` (Color Gold/White Gold + Ring size).  
Örnekler: products.json  
Öneri: leftover — resmi PDP tek swatch  
Karar: onay bekliyor
