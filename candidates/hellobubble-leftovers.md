# Hello Bubble leftovers / adaylar

*Store:* https://hellobubble.com  
*Walk:* https://hellobubble.myshopify.com (aynı Shopify shop)  
*Tema (görülen):* **Bubble Baseline Theme -  Production 🚀** · `schema_name` **Baseline** 5.0.0 · custom (`theme_store_id` null) · id `148258554009` · CDN `t/353`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hellobubble-custom-domain-cloudflare  
Gerekçe: `https://hellobubble.com/` bu egress’ten Cloudflare 403 (“Sorry, you have been blocked”, Ray a2bb615c9d84d703). 103 Early Hints aynı tema asset’i (`cdn/shop/t/353`). `hellobubble.myshopify.com` 200 — aynı `Shopify.theme`.  
Örnekler: https://hellobubble.com/  
Öneri: leftover — custom domain bot block; walk myshopify  
Karar: onay bekliyor

---

ADAY: hellobubble-yotpo-reviews  
Gerekçe: PDP `#shopify-section-template--19572856520857__177265779249b178f0` ~1700–1800px “4.9 / 10606 REVIEWS / WRITE A REVIEW / Customers say / AI-generated from customer reviews.” Taksonomide reviews yok.  
Örnekler: https://hellobubble.myshopify.com/products/slam-dunk-hydrating-moisturizer  
Öneri: aday kategori / üçüncü parti  
Karar: onay bekliyor

---

ADAY: hellobubble-contact-gorgias  
Gerekçe: `/pages/contact-us` main karede Gorgias formu (Full name / Email / Subject / Message / Attach Files / Send + reCAPTCHA). DOM `innerText` boştu. PII doldurulmadı.  
Örnekler: https://hellobubble.myshopify.com/pages/contact-us  
Öneri: üçüncü parti form  
Karar: onay bekliyor

---

ADAY: hellobubble-store-locator-widget  
Gerekçe: `/pages/store-locator` custom section “Showing 100 stores near Columbus, OH + FILTER”. Locator tipi yok; `page-content-main` zorlandı.  
Örnekler: https://hellobubble.myshopify.com/pages/store-locator  
Öneri: locator aday  
Karar: onay bekliyor

---

ADAY: hellobubble-native-policies-empty  
Gerekçe: `/policies/privacy-policy` ve `/policies/terms-of-service` Dawn/Baseline main taşımıyor (yalnız header+footer). İçerik `/pages/privacy-policy` ve `/pages/terms-and-conditions`.  
Örnekler: https://hellobubble.myshopify.com/policies/privacy-policy  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: hellobubble-404-routes  
Gerekçe: Aynı 404 main: `/pages/faqs` `/pages/contact` `/pages/shipping` `/pages/shipping-returns` `/pages/stores` `/pages/rewards` `/pages/quiz` `/pages/routine` `/pages/au-collection-notice` `/products/slam-dunk` `/blogs/the-bubble` `/blogs/journal`.  
Örnekler: https://hellobubble.myshopify.com/pages/faqs  
Öneri: observation `not-found/page-content-main` yazıldı  
Karar: onay bekliyor

---

ADAY: hellobubble-zero-sections  
Gerekçe: Home `template--19572856258713__1778792460137af176` height 0. Global `promo-popup` / `age-check` / `privacy-banner` / `menu-drawer` kapalı 0px. PDP `sticky_add_to_cart` 0px.  
Örnekler: https://hellobubble.myshopify.com/  
Öneri: ölü / overlay — şema yok  
Karar: onay bekliyor

---

ADAY: hellobubble-quick-buy-drawer  
Gerekçe: DOM `#quick-buy-drawer-slot` “Choose options”. Kart hover/quick view bu walk’ta yoklandı değil.  
Örnekler: home bestsellers carousel  
Öneri: leftover — pixel değişimi doğrulanmadı  
Karar: onay bekliyor

---

ADAY: hellobubble-ambassador-pii  
Gerekçe: Community “BECOME AN AMBASSADOR” / “APPLY NOW” + derm “Request product samples” form. 13+ / parent email. PII gönderilmedi.  
Örnekler: https://hellobubble.myshopify.com/pages/community-page  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: hellobubble-careers-greenhouse  
Gerekçe: Footer Careers → `job-boards.greenhouse.io/bubbleskincare`.  
Örnekler: footer  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: hellobubble-login-account  
Gerekçe: Header Log in → `/customer_authentication/redirect`. PII.  
Örnekler: header  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: hellobubble-instagram-feed  
Gerekçe: `instagram_feed` home + about. Üçüncü parti ızgara olabilir; pierce yok. `media-shop-the-feed` yazıldı.  
Örnekler: https://hellobubble.myshopify.com/  
Öneri: app leftover  
Karar: onay bekliyor

---

ADAY: hellobubble-stayai-subscribe  
Gerekçe: PDP Stay.ai `purchaseType` One-Time / Subscribe & Save 10%. UI ADD TO CART sepete yazmadı; `/cart/add.js` doldurdu. Mini seçince üst fiyat $10, Stay.ai kutusu $16 kalabilir.  
Örnekler: https://hellobubble.myshopify.com/products/slam-dunk-hydrating-moisturizer  
Öneri: üçüncü parti subscription  
Karar: onay bekliyor

---

ADAY: hellobubble-get-15-off  
Gerekçe: Interact karelerinde sol alt yeşil “GET 15% OFF” tab. Email/PII — doldurulmadı.  
Örnekler: home / PDP overlay  
Öneri: üçüncü parti overlay  
Karar: onay bekliyor

---

ADAY: hellobubble-footer-no-newsletter  
Gerekçe: custom-footer 3vp’de email input yok (yalnız kolon + sosyal + legal). `footer-columns-newsletter` zorlandı.  
Örnekler: https://hellobubble.myshopify.com/  
Öneri: delta — newsletter yok  
Karar: onay bekliyor

---

ADAY: hellobubble-community-anchor-mobile  
Gerekçe: Community `anchor_nav` 375/768 resmi capture zero-size. 1440 pill 3vp’den biri.  
Örnekler: https://hellobubble.myshopify.com/pages/community-page  
Öneri: responsive gizleme — recapture değil  
Karar: onay bekliyor

---

ADAY: hellobubble-menu-accordion  
Gerekçe: Mobil drawer Shop > / Skin Concerns > chevron var; alt liste açılmadı (2 deneme).  
Örnekler: 375/768 menu drawer  
Öneri: leftover accordion  
Karar: onay bekliyor

---

ADAY: hellobubble-cro-not-observed  
Gerekçe: CRO listede before-after-slider, commerce-tools-products-bundle, promo-banner-countdown, lead-capture-newsletter-band, comparison-quick-table, product-finder-quiz, media-scrolling-gallery — walk'ta observation yok.  
Örnekler: https://hellobubble.myshopify.com/ (home/PDP/FAQ tarandı)  
Öneri: leftover — bu walk'ta görülmedi; şema icat edilmedi  
Karar: onay bekliyor

---

ADAY: hellobubble-testimonial-no-carousel  
Gerekçe: testimonial-quote-carousel 4 instance (home/community/derm/PDP) scan'de changer/ok yok — statik grid veya tek slayt. changed state anlamsız.  
Örnekler: home consumer_testimonial, community text_columns_w_images_v2  
Öneri: initial-only interact yeterli  
Karar: onay bekliyor

---

ADAY: hellobubble-instagram-feed-static  
Gerekçe: media-shop-the-feed home + about scan'de opener/hover/changer yok — üçüncü parti Instagram ızgara statik.  
Örnekler: instagram_feed_BmEtE6  
Öneri: initial-only interact  
Karar: onay bekliyor
