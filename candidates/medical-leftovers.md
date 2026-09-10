# Medical leftovers / adaylar

*Store:* https://medical-online-store.myshopify.com/  
*Tema (görülen, uydurulmadı):* **medical-v-1-5-0-latest-updates-new** · `schema_name` **Medical** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `176912400751` · role `main` · shop `medical-online-store.myshopify.com`  
*Vendor:* Speedo Themes (üçüncü taraf; Theme Store resmi değil)  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: medical-storefront-password  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfası public `1`. Aynı host.  
Örnekler: https://medical-online-store.myshopify.com/password  
Öneri: leftover — vendor demo kilidi  
Karar: onay bekliyor

---

ADAY: medical-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı.  
Örnekler: https://medical-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: medical-stats-counter  
Gerekçe: `count_down_YAdYpA` — Transformative Results 96%/91%/99% yüzde istatistikleri; kampanya countdown değil. Observation `features-multicolumn.2` + delta ile reuse.  
Örnekler: https://medical-online-store.myshopify.com/  
Öneri: leftover — counter ailesi  
Karar: onay bekliyor

---

ADAY: medical-product-hero-banner  
Gerekçe: `product_with_banner_EbLrTh` — tek ürün + arka plan banner. Observation `product-showcase-featured` + delta.  
Örnekler: https://medical-online-store.myshopify.com/  
Öneri: leftover — hero varyantı  
Karar: onay bekliyor

---

ADAY: medical-parallax-hero  
Gerekçe: about/contact/faq `parallax_*` section’ları. Observation `editorial-image-with-text-overlay` + delta.  
Örnekler: https://medical-online-store.myshopify.com/pages/about-layout-1  
Öneri: leftover — parallax  
Karar: onay bekliyor

---

ADAY: medical-home-dividers  
Gerekçe: `divider_*` home 1px ayırıcılar. `editorial-separator` obs açılmadı (tekrarlı, içeriksiz).  
Örnekler: https://medical-online-store.myshopify.com/  
Öneri: leftover — 1px  
Karar: onay bekliyor

---

ADAY: medical-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Popup görünmedi.  
Örnekler: https://medical-online-store.myshopify.com/  
Öneri: leftover — 0px  
Karar: onay bekliyor

---

ADAY: medical-related-empty  
Gerekçe: PDP `#…__related-products` ~88px, metin yok. Observation yazılmadı.  
Örnekler: https://medical-online-store.myshopify.com/products/medical-immune-support  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: medical-contact-map  
Gerekçe: `map_iqhHBB` Google Maps embed. Harita şeması yok.  
Örnekler: https://medical-online-store.myshopify.com/pages/contact  
Öneri: leftover — map  
Karar: onay bekliyor

---

ADAY: medical-contact-office  
Gerekçe: Contact `63e84545` Main Office adres/telefon/email bilgi bandı.  
Örnekler: https://medical-online-store.myshopify.com/pages/contact  
Öneri: leftover — kısa bilgi  
Karar: onay bekliyor

---

ADAY: medical-account-login  
Gerekçe: Header Log in · cart “Have an account?” · `/account`. PII — tıklanmadı.  
Örnekler: https://medical-online-store.myshopify.com/account/login  
Öneri: leftover — auth  
Karar: onay bekliyor

---

| Bileşen | Gerekçe |
|---|---|
| Wishlist `/pages/wishlist` | Walk dışı |
| Compare `/pages/compare` | Walk dışı |
| About/Contact layout 2–5 | Demo layout varyantları — layout-1 yeterli |
| Newsletter / contact submit | PII — doldurulmadı |
| Checkout | Ödeme — dur |
