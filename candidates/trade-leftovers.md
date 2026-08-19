# Trade leftovers / adaylar

*Store:* https://theme-trade-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **[Trade] Theme Store demo (latest)** · `schema_name` **Trade** · `schema_version` **15.0.0** · `theme_store_id` **2699** · role `main` · id `168341995542` · shop `theme-trade-demo.myshopify.com` (`Shopify.shop` `84f654-2.myshopify.com`)  
*Theme Store listing:* https://themes.shopify.com/themes/trade — Free · by Shopify · B2B  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: trade-quick-order-list-b2b  
Gerekçe: PDP `quick-order-list` (Cape / Sham / Towels / Robe / Slippers): VARIANT × QUANTITY × PRICE tablosu, SKU, quantity rules, plus/minus. Buy box’ta `variant-radios` ve Add to cart yok. Mevcut `product-info-main` / bundle / comparison şemasına sığmaz. Yeni şema açılmadı.  
Örnekler: https://theme-trade-demo.myshopify.com/products/euro-sham-brushed-cotton  
Öneri: leftover — B2B varyant matrisi, şema yok  
Karar: onay bekliyor

---

ADAY: trade-pdp-no-buy-box-atc  
Gerekçe: `product-info-main` galeri + fiyat + accordion. `button[name=add]` / qty / variant-radios yok. 768/1440 thumb-2 lifestyle değişti; 375 slider next karesi 1/2 kaldı.  
Örnekler: https://theme-trade-demo.myshopify.com/products/euro-sham-brushed-cotton  
Öneri: leftover — B2B buy box + mobil galeri  
Karar: onay bekliyor

---

ADAY: trade-cart-notification-not-drawer  
Gerekçe: `cart-drawer` yok. `#cart-notification.active` add.js ve quick-order-list plus sonrası açılmadı (yoklandı). Sepet ikonu `/cart`. Filled kare = header rozet 1. `global-cart-drawer` + delta.  
Örnekler: Cape ATC yok → /cart/add.js; QOL plus item_count 1, popup yok  
Öneri: leftover — Dawn notification vs drawer; popup tetiklenmedi  
Karar: onay bekliyor

---

ADAY: trade-related-empty-on-most-pdp  
Gerekçe: Cape `related-products` dolu (Other industry favorites). Sham / Towels / Robe / Slippers aynı section h≈80 boş.  
Örnekler: https://theme-trade-demo.myshopify.com/products/classic-towels  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: trade-plp-template-repeats  
Gerekçe: `/collections/all` `/collections/furniture` `/collections/bath-towels` aynı `banner` + `product-grid`. Yazılan: bath-towels.  
Örnekler: https://theme-trade-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: trade-policy-siblings  
Gerekçe: `/pages/shipping-policy` ve `/pages/return-policy` = image-banner + main-page (about ile aynı kabuk). 3vp yazılmadı.  
Örnekler: https://theme-trade-demo.myshopify.com/pages/shipping-policy  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: trade-wholesale-partner-form  
Gerekçe: `/pages/company-account-request` — wholesale partner vitrin + FAQ. Form section `1715371940928222bc` h=0 (muhtemel gizli hesap talebi). Account / PII — açılmadı, gönderilmedi.  
Örnekler: https://theme-trade-demo.myshopify.com/pages/company-account-request  
Öneri: leftover — PII stop  
Karar: onay bekliyor

---

ADAY: trade-header-mega-text-only  
Gerekçe: Shop `#Details-HeaderMenu-1` `.mega-menu__content` metin kolonları. Görsel / promo kart yok. `navigation-header-mega` + delta.  
Örnekler: home header  
Öneri: leftover — metin mega  
Karar: onay bekliyor

---

ADAY: trade-card-quickbulk  
Gerekçe: Featured / PLP kartlarında Choose options + QuickBulk qty (B2B). `product-showcase-grid-featured` / PLP delta. Ayrı şema yok.  
Örnekler: home Proven bestsellers  
Öneri: leftover — kart qty  
Karar: onay bekliyor

---

ADAY: trade-footer-no-newsletter  
Gerekçe: Footer kolon + locale + sosyal. E-posta input yok. `footer-columns-newsletter` + delta.  
Örnekler: home footer  
Öneri: leftover — newsletter yok  
Karar: onay bekliyor

---

ADAY: trade-pii-stop  
Gerekçe: Contact Send, company-account-request, checkout, account login tıklanmadı. Newsletter yok.  
Örnekler: `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: trade-cro-types-no-obs  
Gerekçe: CRO leftover interact — diskte observation yok: countdown, before-after, bundle, comparison, quiz, shop-the-feed, slideshow, scrolling gallery. Announcement-bar slideshow CSS; ok/nokta yok. Interact şema uydurmadı.  
Örnekler: home announcement · leftover quick-order-list (bundle değil)  
Öneri: leftover — ilk envanter `/qante-discover`  
Karar: onay bekliyor

---

ADAY: trade-quote-desktop-grid  
Gerekçe: `testimonial-quote-carousel` 375/768 next 1/4→2/4 STUDIO duvet. 1440 dört kolon, ok 0×0. Şema carousel; instance Dawn multicolumn.  
Örnekler: home `#multicolumn1`  
Öneri: leftover — masaüstü grid  
Karar: onay bekliyor
