# WALLPAPSH leftovers / adaylar

*Store:* https://pandora-wallpaper.myshopify.com  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-wallpaper-theme  
*Tema (görülen, uydurulmadı):* ** Pandora-wallpaper V-1.5.0** · `schema_name` **Pandora_wallpaper** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `161941258263` · shop `pandora-wallpaper.myshopify.com`  
*Preset:* default · *Slug:* `wallpapsh`  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: wallpapsh-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası “Please enter password "1" to view demo.” Aynı host’ta `1` ile açıldı (`unlock-storefront.mjs`). Title hâlâ “Pandora-Wallpaper (password: 1)”. Walk leftover’da durmadı.  
Örnekler: https://pandora-wallpaper.myshopify.com/ · https://speedothemes.com/products/shopify-wallpaper-theme  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: wallpapsh-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Pandora_wallpaper · `schema_version` 1.5.0 · `name` “ Pandora-wallpaper V-1.5.0” (başta boşluk). Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://pandora-wallpaper.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: wallpapsh-how-to-hash  
Gerekçe: Header “HOW TO” `href="#"`. Sayfa/koleksiyon yok. Tıklanınca yerinde kalır.  
Örnekler: sticky-header nav  
Öneri: leftover — boş nav hedefi  
Karar: onay bekliyor

---

ADAY: wallpapsh-wishlist  
Gerekçe: Header wishlist sayacı + `/pages/wishlist` “No products were added to your wishlist.” Kartlarda ADD TO WISHLIST. Sayfa envanterlenmedi (app/özellik).  
Örnekler: header · product cards · /pages/wishlist  
Öneri: leftover — wishlist overlay/sayfa  
Karar: onay bekliyor

---

ADAY: wallpapsh-about-us-cms  
Gerekçe: `/pages/about-us` title “About Us 1” — tek `page` CMS (Our company / Our team / Testimonials). Header ABOUT US `/pages/about-us-1` (section’lı). CMS kopya 3vp yok.  
Örnekler: https://pandora-wallpaper.myshopify.com/pages/about-us  
Öneri: leftover — page-content-main adayı  
Karar: onay bekliyor

---

ADAY: wallpapsh-about-empty-banner  
Gerekçe: `/pages/about-us-1` `#shopify-section-template--21433102139415__16572771007cf30111` h=400, metin yok, 1 img.  
Örnekler: about-us-1  
Öneri: leftover — boş/görsel-only banner  
Karar: onay bekliyor

---

ADAY: wallpapsh-pdp-zero-section  
Gerekçe: PDP `#shopify-section-template--21433102368791__16572629707050636d` h=0, metin yok.  
Örnekler: /products/wall-sticker-home-decor-backsplash-wallpaper-bathroom-kitchen  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: wallpapsh-pdp-jewelry-copy  
Gerekçe: PDP “RESPONSIBLY SOURCED … precious materials we use in our jewelry” + “TORMETI MANUFACTURING”. Wallpaper demoda başka Speedo şablon kopyası. Observation delta; yeni şema yok.  
Örnekler: Hobby Pink PDP  
Öneri: observation delta  
Karar: onay bekliyor

---

ADAY: wallpapsh-cart-footer-empty  
Gerekçe: `#shopify-section-template--21433101647895__cart-footer` boş sepette h=0. Dolu cart-items crop’ta CHECK OUT yok.  
Örnekler: /cart  
Öneri: leftover — totals chrome  
Karar: onay bekliyor

---

ADAY: wallpapsh-faqs-404  
Gerekçe: `/pages/faqs` 404 “Page not found · CONTINUE SHOPPING”. Gerçek FAQ `/pages/faq`.  
Örnekler: https://pandora-wallpaper.myshopify.com/pages/faqs  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: wallpapsh-faq-title-only  
Gerekçe: `/pages/faq` `#shopify-section-template--21433102237719__main` yalnız “Faq” (h=154). Accordion ayrı section.  
Örnekler: /pages/faq  
Öneri: leftover — ince page title  
Karar: onay bekliyor

---

ADAY: wallpapsh-size-guide-jewelry  
Gerekçe: `/pages/size-guide` yüzük çapı tablosu (Britain/USA/Europe…). Wallpaper üründe Size 8x8 / 10x10. PDP “Size-Guide” link.  
Örnekler: /pages/size-guide  
Öneri: leftover — jewelry şablon artığı  
Karar: onay bekliyor

---

ADAY: wallpapsh-wholesale-cms  
Gerekçe: `/pages/inquiry-for-wholesale` lorem CMS, form yok.  
Örnekler: footer Quick Links  
Öneri: leftover — page-content  
Karar: onay bekliyor

---

ADAY: wallpapsh-policy-native  
Gerekçe: Footer Privacy Policy / Shipping & Return Policy. Native Shopify policy beklenir; 3vp yok.  
Örnekler: footer QUICK LINKS  
Öneri: leftover — policy-page-layout adayı  
Karar: onay bekliyor

---

ADAY: wallpapsh-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Email submit PII stop.  
Örnekler: her sayfa  
Öneri: leftover — 0px / PII  
Karar: onay bekliyor

---

ADAY: wallpapsh-newsletter-submit  
Gerekçe: Footer GET THE NEWSLETER + SUBSCRIBE. Email submit PII stop.  
Örnekler: footer  
Öneri: leftover — form gönderilmedi  
Karar: onay bekliyor

---

ADAY: wallpapsh-quick-view-absent  
Gerekçe: Kartlarda QV butonu görülmedi (ADD TO CART / ADD TO WISHLIST).  
Örnekler: home TRENDY COLLECTION · PLP · related  
Öneri: leftover — QV yok  
Karar: onay bekliyor

---

ADAY: wallpapsh-blogs-json-404  
Gerekçe: `/blogs/news/articles.json` 404. HTML `/blogs/news` ve `/blogs/news/10-of-the-best-minimalist-wallpapers` açık.  
Örnekler: blog walk  
Öneri: leftover — API yok, HTML var  
Karar: onay bekliyor

---

ADAY: wallpapsh-menu-drawer-overlay  
Gerekçe: 375/768 hamburger interact — `#menu-drawer` 375 zero-size; 768 kare kapalı homepage. forceOpen ikinci deneme aynı. Drawer grammar mevcut (`global-menu-drawer`); yeni şema yok.  
Örnekler: `#header-menu` · `#menu-drawer`  
Öneri: leftover — overlay karede yok  
Karar: observation missingStates

---

ADAY: wallpapsh-trendy-tabs-unchanged  
Gerekçe: TRENDY COLLECTION BEST SELLERS / NEW ARRIVALS / TOP TRENDING. İki deneme BEST SELLERS’da kaldı (hash link sonra gizli panel). Şemaya tab action eklenmedi.  
Örnekler: home `#shopify-section-template--21433102073879__165666889162d379a4`  
Öneri: leftover — sekme değişmedi  
Karar: observation missingStates
