# Flow leftovers / adaylar

*Store:* https://eight-nourish-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Flow R1 — design base** · `schema_name` **Flow** · `schema_version` **42.0.0** · `theme_store_id` **null** · role `main` · id `150685581382` · shop `flow-queenstown.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/flow — paid · Eight Themes  
*Preset:* default (Nourish — official Theme Store preview)  
*Tarih:* 2026-08-17

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: flow-wrong-demo-hosts  
Gerekçe: `flow-demo.myshopify.com` Debut (Flow değil). `flow-theme.myshopify.com` password. Walk yalnız `eight-nourish-demo.myshopify.com`.  
Örnekler: https://flow-demo.myshopify.com/ · https://flow-theme.myshopify.com/  
Öneri: leftover — yanlış host  
Karar: onay bekliyor

---

ADAY: flow-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing Flow (Eight Themes). ID uydurulmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — listing vs canlı  
Karar: onay bekliyor

---

ADAY: flow-offers-drawer  
Gerekçe: `#shopify-section-sections--20936733917254__offers-drawer` yükseklik 0. Header’da `js-drawer-open-offers-link` (Don't miss today's offers! / Offers drawer). Overlay açılmadı (PII/promo drawer leftover).  
Örnekler: home header  
Öneri: leftover — kapalı drawer  
Karar: onay bekliyor

---

ADAY: flow-footer-bottom  
Gerekçe: `footer-bottom` 94px: para birimi + © 2026, Flow - Demo Powered by Shopify. `footer-main` yazıldı.  
Örnekler: home footer  
Öneri: leftover — copyright satırı  
Karar: onay bekliyor

---

ADAY: flow-quiz-start  
Gerekçe: `quiz_vnext` START tıklanmadı. Üç soru + e-posta riski. Statik kare yazıldı.  
Örnekler: home Find your blend  
Öneri: leftover — quiz akış  
Karar: onay bekliyor

---

ADAY: flow-collections-index-is-plp  
Gerekçe: `/collections` Summer flash sale countdown + All smoothies **ürün** ızgarası. Koleksiyon kartı listesi yok.  
Örnekler: https://eight-nourish-demo.myshopify.com/collections  
Öneri: leftover — index ≠ collection-nav-grid  
Karar: onay bekliyor

---

ADAY: flow-plp-template-repeats  
Gerekçe: `/collections/all` (Products) ve `/collections/all-smoothies` / `energy-boosting-smoothies-2` aynı `collection-header` + `product-grid` + promo + navigation_banner. Yazılan: all-smoothies.  
Örnekler: https://eight-nourish-demo.myshopify.com/collections/all  
Öneri: leftover — aynı şablon  
Karar: onay bekliyor

---

ADAY: flow-pdp-template-repeats  
Gerekçe: Mango & Coconut / Almond & Banana aynı `product-form` + nutrition band + spec table + Made in Devon + Hear it from them. Yazılan: Almond & Banana (Size 500/330/250).  
Örnekler: https://eight-nourish-demo.myshopify.com/products/mango-coconut  
Öneri: leftover — aynı şablon  
Karar: onay bekliyor

---

ADAY: flow-pdp-recommendations-empty  
Gerekçe: `#…__product-recommendations` 120px, kart yok (ilk ziyaret). Observation yazılmadı.  
Örnekler: Almond & Banana PDP  
Öneri: leftover — boş rec  
Karar: onay bekliyor

---

ADAY: flow-nutrition-not-product-compare  
Gerekçe: `specification_table_nutrition` Per 100ml / Per serving. `comparison-quick-table` reuse + delta.  
Örnekler: PDP Nutrition information  
Öneri: leftover — tip gerilimi  
Karar: onay bekliyor

---

ADAY: flow-about-team-second-row  
Gerekçe: About ekip 2 section (Emily/Olivia/Ethan + Ava/Liam). Yazılan: ilk `features-multicolumn`.  
Örnekler: `/pages/about-us`  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: flow-about-extras  
Gerekçe: Our top picks (alıntılı ürün) · Our store (123 Fake St.) · socials · In season flavours. Yazılan: overlay + rich-text + team + form.  
Örnekler: `/pages/about-us`  
Öneri: leftover — about extras  
Karar: onay bekliyor

---

ADAY: flow-contact-extras  
Gerekçe: Still got Q's? + Our store. Yazılan: overlay + FAQ + form.  
Örnekler: `/pages/contact-us`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: flow-faq-repeat-accordions  
Gerekçe: `/pages/faqs` General Info + Smoothie Info + Delivery Info + Still need assistance? + socials. Yazılan: overlay + General Info + Instagram gallery.  
Örnekler: `/pages/faqs`  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: flow-blog-featured-band  
Gerekçe: `/blogs/smoothie-blog` üstte `featured_blog_posts_iRzpDT` (Tropical Smoothies featured). Yazılan: `__main` ızgara.  
Örnekler: https://eight-nourish-demo.myshopify.com/blogs/smoothie-blog  
Öneri: leftover — featured band  
Karar: onay bekliyor

---

ADAY: flow-blog-recipes  
Gerekçe: Header/footer `/blogs/recipes` var. Walk `smoothie-blog`.  
Örnekler: https://eight-nourish-demo.myshopify.com/blogs/recipes  
Öneri: leftover — ikinci blog  
Karar: onay bekliyor

---

ADAY: flow-404-routes  
Gerekçe: Aynı 404 (`__main` + koleksiyon kartları): `/pages/about` `/pages/contact` `/blogs/news` `/blogs/journal` `/blogs/blog` + rastgele path. `/pages/about-us` `/pages/contact-us` `/blogs/smoothie-blog` 200.  
Örnekler: https://eight-nourish-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: flow-privacy-native  
Gerekçe: `/policies/privacy-policy` 200; theme `shopify-section` yok (yalnız header/footer/announcement). Observation yazılmadı.  
Örnekler: https://eight-nourish-demo.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: flow-cart-shipping-copy  
Gerekçe: `/cart` altında Shipping policy metin section. Yazılan: cart-page-main + Thirsty for more kartlar.  
Örnekler: `/cart`  
Öneri: leftover — politika kopyası  
Karar: onay bekliyor

---

ADAY: flow-plp-promo-repeat  
Gerekçe: PLP `4861948c-…` 15%/30% kartları home `promo-grid-banner` ile aynı dil. Home yazıldı.  
Örnekler: `/collections/all-smoothies`  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: flow-hamburger-1440  
Gerekçe: 1440 `button.hamburger-nav-button` 0×0. 375/768 44×44. Menu drawer observation 2 PNG (375/768).  
Örnekler: home 1440  
Öneri: leftover — masaüstü hamburger yok  
Karar: onay bekliyor

---

ADAY: flow-cart-page-qty-ajax  
Gerekçe: `/cart` plus adet 2 yaptı; satır/subtotal $3.00 kaldı. UPDATE CART tıklanmadı. Drawer plus Cart (2) + $6.00.  
Örnekler: cart-page-main changed  
Öneri: leftover — sayfa qty AJAX  
Karar: onay bekliyor

---

ADAY: flow-account-icon  
Gerekçe: Header’da Account. Login tıklanmadı (PII).  
Örnekler: header  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: flow-pii-stop  
Gerekçe: Footer SUBSCRIBE + contact/about Submit + checkout + BUY IT NOW + newsletter search band + account login tıklanmadı.  
Örnekler: footer · `/pages/contact-us` · cart · PDP  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: flow-cro-testimonial-auto-scroll  
Gerekçe: Home `social_proof_vnext` dikey otomatik kaydırma — ok/dot yok. `testimonial-quote-carousel` reuse; changed state yok.  
Örnekler: home Loved by thousands  
Öneri: leftover — ticker ≠ carousel  
Karar: onay bekliyor

---

ADAY: flow-cro-testimonial-pdp-static  
Gerekçe: PDP Hear it from them · Helen Smith + John Locke statik yığın; kaydırma kontrolü yok.  
Örnekler: `/products/almond-banana`  
Öneri: leftover — çoklu alıntı statik  
Karar: onay bekliyor

---

ADAY: flow-cro-media-feed-375  
Gerekçe: Shoppable videos Next slide 375'te 0×0 (small-hide). changed yalnız 768/1440.  
Örnekler: home shoppable_videos_imL3eC  
Öneri: leftover — mobil ok yok  
Karar: onay bekliyor

---

ADAY: flow-cro-gallery-hover-375  
Gerekçe: FAQ Instagram grid 375'te caption overlay sürekli görünür; hover = initial.  
Örnekler: `/pages/faqs` gallery_slideshow  
Öneri: leftover — mobil hover anlamsız  
Karar: onay bekliyor

---

ADAY: flow-cro-bundle-atc-no-ui-delta  
Gerekçe: Add set to cart 3 satır ekler (`/cart.js` item_count 3) ama section görünümü değişmedi — filled state yok.  
Örnekler: home bundled_products_vnext  
Öneri: leftover — ATC feedback drawer'da  
Karar: onay bekliyor

---

ADAY: flow-taxonomy-404  
Gerekçe: 404 `page-content-main` reuse; `pageType` 404 listede yok.  
Örnekler: `/pages/this-does-not-exist-xyz-flow`  
Öneri: leftover — taksonomi  
Karar: onay bekliyor
