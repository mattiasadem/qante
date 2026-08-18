# Atlas leftovers / adaylar

*Store:* https://alloy-themes-atlas-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/atlas  
*Tema (görülen, uydurulmadı):* **demo-store-atlas-electronics/master** · `schema_name` **Atlas** · `schema_version` **1.3.0** · `theme_store_id` **null** · id `203129913682` · role `main` · shop `alloy-themes-atlas-demo.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: atlas-promotion-bar  
Gerekçe: `#…__promotion_bar_ckG8xQ` header group. “Power Sale Get 20% off on all power banks! GETPOWER20 Copied”. Section wrapper 0×0 (sticky overlay). Ayrı şema yok; announcement-bar’dan ayrı kupon şeridi.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/  
Öneri: leftover — coupon bar  
Karar: onay bekliyor

---

ADAY: atlas-newsletter-popup  
Gerekçe: Overlay `#…__newsletter-popup` “Subscribe and get 20% off your first order”. Submit PII. Observation yazılmadı.  
Örnekler: home overlay group  
Öneri: leftover — popup  
Karar: onay bekliyor

---

ADAY: atlas-quick-view  
Gerekçe: `quick-view-modal` overlay host. Kart “Select options” / quick view tıklanmadı. `global-quick-view` şema var; kare yok.  
Örnekler: home product cards  
Öneri: leftover — interact dışı  
Karar: onay bekliyor

---

ADAY: atlas-number-counter  
Gerekçe: Home `#…__number_counter_mKYN3q` (250K+ Happy customers / 98% Satisfaction / 1200+ Curated products) ve PDP `#…__number_counter_D3QmQh` (48 Hours / 6.0 Bluetooth). Mevcut şemaya sığmıyor.  
Örnekler: home + PDP Nimbus  
Öneri: leftover — counter  
Karar: onay bekliyor

---

ADAY: atlas-scroll-reveal-headings  
Gerekçe: PDP `#…__scroll_reveal_headings_GYJAKL` h≈2800. “Pure Sound. No Distractions. All-Day Battery…” Tam ekran başlık istif. Ayrı şema yok.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/products/nimbus-over-ear-wireless-headphones  
Öneri: leftover — scroll reveal  
Karar: onay bekliyor

---

ADAY: atlas-related-products-empty  
Gerekçe: PDP `#…__related_products_LQc4rq` h≈64, metin yok. `product-showcase-related` yazılmadı.  
Örnekler: Nimbus PDP  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: atlas-custom-liquid  
Gerekçe: Footer sibling `#…__custom_liquid_kB3BPa` 0 yükseklik.  
Örnekler: home footer group  
Öneri: leftover — boş custom liquid  
Karar: onay bekliyor

---

ADAY: atlas-blog-header  
Gerekçe: `/blogs/journal` sibling `#…__main-blog-header` — “Journal Exploring how smart design…”. Liste `blog-list-main`.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/blogs/journal  
Öneri: leftover — blog header  
Karar: onay bekliyor

---

ADAY: atlas-about-repeats  
Gerekçe: About’ta IWT slider / image_with_text_multiple / quotes / support IWT / featured blog / collection list / trust icons — home ile aynı tipler. Yazılan: overlay, 2× rich-text, logos, principles.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/pages/about-us  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: atlas-faq-page  
Gerekçe: `/pages/frequently-asked-questions` overlay + 4 collapsible + rich-text + collection list. Walk dışı; PDP FAQ yazıldı.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/pages/frequently-asked-questions  
Öneri: leftover — FAQ sayfa  
Karar: onay bekliyor

---

ADAY: atlas-shipping-page  
Gerekçe: `/pages/shipping` tek `main` “Shipping”. `page-content-main` ile aynı iskelet; 404/about dışı tekrar edilmedi.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/pages/shipping  
Öneri: leftover — policy page  
Karar: onay bekliyor

---

ADAY: atlas-404-routes  
Gerekçe: Aynı 404 (`#…__main` Page not found): `/pages/about` `/pages/contact-us` `/pages/returns` `/blogs/news` `/blogs/blog` + rastgele path.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: atlas-plp-repeats  
Gerekçe: `/collections/all` ve diğer kategori PLP’leri aynı banner+grid. Yazılan: `/collections/headphones`.  
Örnekler: https://alloy-themes-atlas-demo.myshopify.com/collections/all  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: atlas-sticky-atc  
Gerekçe: PDP sticky ATC + Finish/Accessories select (mobile). Checkout tıklanmadı.  
Örnekler: Nimbus PDP  
Öneri: leftover — sticky buy box  
Karar: onay bekliyor

---

ADAY: atlas-country-selector  
Gerekçe: Announcement + footer localization Poland (USD $). Değiştirilmedi.  
Örnekler: home  
Öneri: leftover — localization chrome  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/contact-us`  
`/pages/returns`  
`/blogs/news`  
`/blogs/blog`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / cart Check out  
- Newsletter / contact form submit (PII)  
- FAQ / shipping sayfaları (walk dışı / aynı page tipi)  
- PDP related-products boş kutu  
- Newsletter popup  
- Quick view  
