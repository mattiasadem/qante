# Fellow leftovers / adaylar

*Store:* https://fellowproducts.com  
*Tema (görülen):* **3.2.0 | Opus 2 | 7.29** · `schema_name` **Fellow Foundation** · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: fellow-cart-page-missing  
Gerekçe: `/cart` 200 ama URL `/?modals=cart-drawer-dialog` (home + açık drawer). `cart-page-main` yok. Sepet = `global-cart-drawer` (`#cart-drawer-dialog` host 0×0; görünür `cart-sections` ~420×850).  
Örnekler: https://fellowproducts.com/cart  
Öneri: ertele — drawer observation yeterli  
Karar: onay bekliyor

---

ADAY: fellow-yotpo-reviews  
Gerekçe: PDP `#shopify-section-template--22412322832484__1772492533dceba222` ~2487px “Reviews / Q&A / 4.4 Based on 976 reviews”. Taksonomide reviews kategorisi yok; `testimonial-quote-carousel` yıldız histogram + Q&A değil.  
Örnekler: https://fellowproducts.com/products/ode-brew-grinder-gen-2  
Öneri: aday kategori / üçüncü parti (Yotpo) — şema yok  
Karar: onay bekliyor

---

ADAY: fellow-store-locator-map  
Gerekçe: `/pages/store-locator` liquid `#shopify-section-template--22412322340964__liquid_Uejtf9` 600px, probe metni boş (harita/widget). Flagship SF kartı `editorial-image-with-text` olarak yazıldı.  
Örnekler: https://fellowproducts.com/pages/store-locator  
Öneri: ertele — widget kanıtı / yeni tip  
Karar: onay bekliyor

---

ADAY: fellow-careers-job-board  
Gerekçe: `/pages/careers` `#…__liquid_P8kXDJ` 150px boş (Greenhouse/Ashby beklenir). Perks editorial yazıldı.  
Örnekler: https://fellowproducts.com/pages/careers  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: fellow-drops-sms  
Gerekçe: `/pages/fellow-drops` liquid `#…__liquid_jpr8Ja` — telefon/SMS kayıt. PII doldurulmadı. `lead-capture-form` observation var; widget boş kalabilir.  
Örnekler: https://fellowproducts.com/pages/fellow-drops  
Öneri: PII yasağı — interact yok  
Karar: onay bekliyor

---

ADAY: fellow-404  
Gerekçe: `/pages/faq`, `/pages/support` → `#shopify-section-template--22412310052964__404_section` (“404 / Page Not Found / Continue Shopping”). Taksonomide 404 pageType yok. Observation `not-found/page-content-main` reuse.  
Örnekler: https://fellowproducts.com/pages/faq  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404 şablon)

`/pages/faq`  
`/pages/support`  
`/pages/about`  
`/pages/our-story`  
`/pages/contact`  
`/pages/faqs`  
`/blogs/news`  
`/blogs/journal`  
`/blogs/stories`  
`/collections/grinders`  
`/collections/brewers`  
`/products/stagg-ekg-pro-electric-pour-over-kettle`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / e-posta / SMS / contact submit (PII)  
- Yotpo Q&A yazma  
- Sitemap LP’ler (gear-guides, fellowversary, roaster-highlight-*, how-to-*, gift-guide…) — chrome dışı; şema icat yok  
- `recently_viewed` height 0  
- PLP Filter & Sort açık panel (interact leftover)  
- Cart adet `changed`  
- Country/currency footer (`United States $`) — token/platform
