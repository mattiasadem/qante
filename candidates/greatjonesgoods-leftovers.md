# Great Jones leftovers / adaylar

*Store:* https://greatjonesgoods.com  
*Tema (görülen, uydurulmadı):* 2025 BFCM THEME: Great Jones 4.2 | Edgemesh · schema_name Great Jones 0.1.0 · `theme_store_id` null · shop `great-jones-goods.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa sapma `delta`'da.

---

ADAY: greatjonesgoods-cart-hash  
Gerekçe: `/cart` 200 ama final URL `/#cart` — home template. Ayrı `cart-page-main` yok. Sepet Rebuy flyout (`#rebuy-cart` / `.rebuy-cart__flyout`). Native `.cart-drawer` 0×0.  
Örnekler: https://greatjonesgoods.com/cart  
Öneri: leftover — drawer only  
Karar: onay bekliyor

---

ADAY: greatjonesgoods-okendo-reviews  
Gerekçe: PDP `#okeReviews-widget-holder` (Okendo). `testimonial-quote-carousel` zorlandı.  
Örnekler: https://greatjonesgoods.com/products/the-dutchess  
Öneri: üçüncü parti reviews  
Karar: onay bekliyor

---

ADAY: greatjonesgoods-shoplift-rebuy  
Gerekçe: Home benefit bar Shoplift (`sl_benefit_bar`). Cart + PDP bundle Rebuy. Native theme section değil. Rebuy flyout fixed — uzun section kliplerinin sağına biniyor.  
Örnekler: https://greatjonesgoods.com/ · https://greatjonesgoods.com/products/the-dutchess  
Öneri: üçüncü parti commerce overlay  
Karar: onay bekliyor

---

ADAY: greatjonesgoods-klaviyo-popup  
Gerekçe: Home “Subscribe to save! Enjoy 15% off” + sağ dikey “Get 15% off!” tab. E-posta/PII — Submit yok.  
Örnekler: https://greatjonesgoods.com/  
Öneri: lead-capture overlay, PII dur  
Karar: onay bekliyor

---

ADAY: greatjonesgoods-privacy-body  
Gerekçe: `/pages/privacy-policy` `.text__body` ~28701px. Resmi kare yalnız `.text__hero`.  
Örnekler: https://greatjonesgoods.com/pages/privacy-policy  
Öneri: leftover — aşırı uzun legal gövde  
Karar: onay bekliyor

---

ADAY: greatjonesgoods-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` 404 “Page not found / Continue shopping”. Taksonomide 404 pageType yok. `page-content-main` observation yazıldı.  
Örnekler: https://greatjonesgoods.com/pages/this-page-does-not-exist-qante  
Öneri: candidate pageType  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- About `timeline` / `favorites` / `difference` height 0
- PDP `build-your-set` + Holy Sheet `recommended` height 0
- Digest `blog-slider3` height 0
- Bulk 5 ek hero (aynı 968px şablon; yalnız ilki claim)
- `/tools/returns` dış returns aracı
- `/account` login — PII
- Footer / digest newsletter Submit — PII
- Affiliate application form — PII
- Contact ayrı sayfa yok; help `hi@greatjonesgoods.com` mailto
- 1440 mobile menu surface 0px (resmi capture skip)
- Recipes + desktop mega yoklandı değil (Shop All mega claim)
- PLP Color / Sort by dropdown açılmadı
- Cart qty `changed` yok
- Search fill öneri/ürün ızgarasını değiştirmedi (yalnız input metni)
- Cookie `#shopify-pc__banner` bazı article yüklemelerinde
