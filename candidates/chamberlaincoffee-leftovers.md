# Chamberlain Coffee leftovers / adaylar

*Store:* https://chamberlaincoffee.com · *Tema (görülen):* Theme Store / `Shopify.theme.name` yok · Hydrogen + Oxygen + Sanity  
*Shop:* chamberlaincoffee.myshopify.com  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: chamberlaincoffee-404  
Gerekçe: Taksonomide 404 pageType yok. `#` yok; Hydrogen 404: “404 / The page you are looking for cannot be found. / Back to homepage”.  
Örnekler: `/pages/faqs` · `/pages/contact-us` · `/pages/our-story` · `/pages/terms-of-service` · `/pages/shipping` · `/pages/help` · `/pages/support` · `/pages/frequently-asked-questions` · `/blogs/news` · `/blogs/recipes` · `/pages/journal` · `/pages/blog` · `/policies/privacy-policy` · `/policies/terms-of-service` · `/pages/this-page-does-not-exist-qante`  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-search-page-empty  
Gerekçe: `/search?q=matcha` headless title/body boş (html ~118). Canlı arama `nav.searchMenu` overlay (home observation). Overlay `vanilla`/`coffee`/`cold`/`tote` → “Can't find what you're looking for? / ALL PRODUCTS” — ürün satırı yok.  
Örnekler: https://chamberlaincoffee.com/search?q=matcha  
Öneri: leftover — overlay çalışıyor, sayfa hydrate yok  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-cart-page-missing  
Gerekçe: `/cart` → `/?viewcart=true` home. Sepet `.cart-drawer`. `cart-page-main` yok.  
Örnekler: https://chamberlaincoffee.com/cart  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-gorgias-faq  
Gerekçe: Footer “FAQ” → `https://chamberlaincoffee.gorgias.help/en-US` (dış helpdesk). `/pages/faq` home’a düşer; `/pages/faqs` 404.  
Öneri: leftover — PII/helpdesk, envanter yok  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-okendo-reviews  
Gerekçe: Vanilla Matcha PDP Okendo widget (4.5 / 565 reviews, sort/filtre). `testimonial-quote-carousel` yalnız home “buzz” alıntıları. Sanity `module.productReviews`.  
Örnekler: https://chamberlaincoffee.com/products/vanilla-matcha-green-tea-powder  
Öneri: reviews-app varyant  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-destini-store-locator  
Gerekçe: `/pages/store-locator` Sanity `module.storeLocatorDestini` (~596px, metin boş). Heading observation `page-content-main`.  
Örnekler: https://chamberlaincoffee.com/pages/store-locator  
Öneri: store-locator widget  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-cafe-extra-multicolumns  
Gerekçe: Cafe’de Our Story / Our Approach / Designed Like Home / More Than a Café / mediaCarousel aynı `module.multiColumn` ailesi. 3vp yalnız Locations + hero + intro.  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-pdp-faqs-hidden  
Gerekçe: Sanity `module.productFAQs` loader’da var; product-wrapper çocuklarında ayrı kutu yok.  
Öneri: leftover — açılmadı / görünür değil  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-plp-filters  
Gerekçe: `/collections/browse-all` tek `module.collection` (başlık+grid). Filtre/sort paneli açılmadı. Coffee Beans / Matcha / Bundles aynı şablon, ayrı 3vp yok.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-newsletter-pii  
Gerekçe: Footer “Get 5% off” e-posta. PII — doldurulmadı/gönderilmedi. CookieYes Accept All dismiss. UserWay a11y iframe 0×0.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-age-gate  
Gerekçe: Sanity settings `ageGateTemplate` / `ageGateBackground` var; bu koşuda kapı görünmedi.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-account  
Gerekçe: `/account` / login / register — PII, yürünmedi.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: chamberlaincoffee-returns-redirect  
Gerekçe: `/pages/returns` → home. Asıl metin `/pages/shipping-returns`.  
Öneri: leftover  
Karar: onay bekliyor
