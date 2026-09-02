# WallFresh leftovers / adaylar

*Store:* https://pandora-wallpaper-2.myshopify.com  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/wallfresh-premium-shopify-wallpaper-themes-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **Wallfresh-v-1-5-0-latest-updates-new** · `schema_name` **Wallfresh** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `177073029435` · shop `pandora-wallpaper-2.myshopify.com`  
*Preset:* default · *Slug:* `wallfresh`  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: wallfresh-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası “Please enter password "1" to view demo.” Aynı host’ta `1` ile açıldı (`unlock-storefront.mjs`). Title “Pandora Wallpaper 2 (password: 1)”. Walk leftover’da durmadı.  
Örnekler: https://pandora-wallpaper-2.myshopify.com/ · https://speedothemes.com/products/wallfresh-premium-shopify-wallpaper-themes-shopify-2-0-theme  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: wallfresh-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Wallfresh · `schema_version` 1.5.0 · `name` Wallfresh-v-1-5-0-latest-updates-new. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://pandora-wallpaper-2.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: wallfresh-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Email submit PII stop.  
Örnekler: her sayfa  
Öneri: leftover — 0px / PII  
Karar: onay bekliyor

---

ADAY: wallfresh-newsletter-submit  
Gerekçe: Footer SIGN UP FOR 15% OFF + Email Address. Email submit PII stop.  
Örnekler: footer  
Öneri: leftover — form gönderilmedi  
Karar: onay bekliyor

---

ADAY: wallfresh-about-us-404  
Gerekçe: `/pages/about-us` ve `/pages/about-us-1` 404 “Page not found”. Gerçek about `/pages/about-layout-1`. Header About Us → about-layout-1.  
Örnekler: https://pandora-wallpaper-2.myshopify.com/pages/about-us  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: wallfresh-faqs-404  
Gerekçe: `/pages/faqs` 404. Gerçek FAQ `/pages/faq`.  
Örnekler: https://pandora-wallpaper-2.myshopify.com/pages/faqs  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: wallfresh-compare-empty  
Gerekçe: `/pages/compare` “There are no products available to compare.” Footer Compare link. Envanterlenmedi (app/özellik).  
Örnekler: footer INFORMATION · /pages/compare  
Öneri: leftover — compare boş  
Karar: onay bekliyor

---

ADAY: wallfresh-contact-map  
Gerekçe: `/pages/contact` `#shopify-section-template--24408109580603__map_iqhHBB` h=680, metin yok (harita gömme).  
Örnekler: contact  
Öneri: leftover — map-only  
Karar: onay bekliyor

---

ADAY: wallfresh-pdp-zero-section  
Gerekçe: PDP `#shopify-section-template--24408109908283__172137309121bf68f7` h=0, metin yok.  
Örnekler: Milton Antique PDP  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: wallfresh-related-empty  
Gerekçe: PDP `#shopify-section-template--24408109908283__related-products` h=136, metin/görsel yok.  
Örnekler: related-products  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: wallfresh-cart-footer-empty  
Gerekçe: `#shopify-section-template--24408108925243__cart-footer` boş sepette h=0.  
Örnekler: /cart  
Öneri: leftover — totals chrome  
Karar: onay bekliyor

---

ADAY: wallfresh-home-no-announcement  
Gerekçe: Home’da announcement-bar section yok. PDP’de `custom_announcement_bar_zqchrk` “Free shipping on orders over £75” instance.  
Örnekler: home vs PDP  
Öneri: observation — promo-announcement-bar PDP  
Karar: onay bekliyor

---

ADAY: wallfresh-dead-category-chips  
Gerekçe: Home categories_slider Feathers / Stone / Animals — koleksiyon JSON’da yok.  
Örnekler: home categories_slider_CxFgWw  
Öneri: leftover — ölü chip  
Karar: onay bekliyor

---

ADAY: wallfresh-fashion-copy  
Gerekçe: PDP/About “Made with Love… clothes from soft natural fabrics”; FAQ kıyafet-abonelik lorem; Our Story fashion-forward placeholder. Wallpaper demoda başka Speedo şablon kopyası.  
Örnekler: PDP multicolumn · about · /pages/faq · /pages/our-story  
Öneri: observation delta  
Karar: onay bekliyor

---

ADAY: wallfresh-about-layouts  
Gerekçe: Header About altı about-layout-1..4. Yalnız layout-1 3vp.  
Örnekler: /pages/about-layout-2  
Öneri: leftover — ekstra layout  
Karar: onay bekliyor

---

ADAY: wallfresh-policy-native  
Gerekçe: Footer Terms / Return / Shipping / Privacy native policy beklenir; 3vp yok. Shipping href privacy-policy (yanlış etiket).  
Örnekler: footer INFORMATION  
Öneri: leftover — policy-page-layout adayı  
Karar: onay bekliyor

---

ADAY: wallfresh-quick-view-absent  
Gerekçe: Kartlarda QV butonu kapalı karede görülmedi.  
Örnekler: home Best Sellers · PLP  
Öneri: leftover — QV yok (hover interact’te yoklanacak)  
Karar: onay bekliyor

---

ADAY: wallfresh-size-guide  
Gerekçe: PDP “Size Guide” link. 3vp yok.  
Örnekler: Milton Antique buy box  
Öneri: leftover — size guide  
Karar: onay bekliyor
