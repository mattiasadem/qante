# Kiddle leftovers / adaylar

*Store:* https://toyon-toys-3.myshopify.com  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/kiddle-best-shopify-kids-themes-for-toy-store-os-2-0  
*Tema (görülen, uydurulmadı):* **Kiddle-v-1-5-0** · `schema_name` **Kiddle** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `143929966812` · shop `toyon-toys-3.myshopify.com`  
*Preset:* default · *Slug:* `kiddle`  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: kiddle-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası “Please enter password "1" to view demo.” Aynı host’ta `1` ile açıldı (`unlock-storefront.mjs`). Title “Toyon Toys 3 (password: 1)”. Walk leftover’da durmadı.  
Örnekler: https://toyon-toys-3.myshopify.com/ · https://speedothemes.com/products/kiddle-best-shopify-kids-themes-for-toy-store-os-2-0  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: kiddle-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Kiddle · `schema_version` 1.5.0 · `name` Kiddle-v-1-5-0. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://toyon-toys-3.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: kiddle-social-proof-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Metin “Someone liked and Buy {ürün} 10 Minutes Ago From Paris Verified”. Newsletter değil; sosyal kanıt toast. PII/popup, 3vp yok.  
Örnekler: home overlay  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: kiddle-announcement-absent  
Gerekçe: Header grubunda announcement-bar / utility-bar yok.  
Örnekler: home header  
Öneri: leftover — bar yok  
Karar: onay bekliyor

---

ADAY: kiddle-faq-extra-groups  
Gerekçe: `/pages/faqs` 6 collapsible_content: GENERAL FAQS envanterlendi. Aynı tip kalan: KID TOYS · TRENDING GAMES · NEW TOYS · INTERACTIVE TOYS · KIDS NURSING KIT. Pet/dog kopyası karışık.  
Örnekler: https://toyon-toys-3.myshopify.com/pages/faqs  
Öneri: leftover — aynı `faq-collapsible-tabs`  
Karar: onay bekliyor

---

ADAY: kiddle-contact-map  
Gerekçe: `#…__map_jGD64M` ~732px Google Maps iframe (Ames, IA embed; adreste Houston). Map şeması yok.  
Örnekler: https://toyon-toys-3.myshopify.com/pages/contact  
Öneri: leftover — harita  
Karar: onay bekliyor

---

ADAY: kiddle-compare-wishlist  
Gerekçe: Footer COMPARE · `/pages/compare` · `/pages/wishlist`. App/özellik sayfaları; envanterlenmedi.  
Örnekler: header/footer linkleri  
Öneri: leftover — compare/wishlist  
Karar: onay bekliyor

---

ADAY: kiddle-cart-footer-empty  
Gerekçe: `#…__cart-footer` boş sepette h=0. Totals dolu drawer/sayfada beklenir.  
Örnekler: /cart  
Öneri: leftover — cart-footer ayrı 3vp yok  
Karar: onay bekliyor

---

ADAY: kiddle-policy-native  
Gerekçe: Footer SHIPPING / RETURNS / PRIVACY POLICY / TERMS OF USE / REFUND POLICY. Native policy body ayrı 3vp yok.  
Örnekler: footer legal  
Öneri: leftover — policy-page-layout adayı  
Karar: onay bekliyor

---

ADAY: kiddle-newsletter-submit  
Gerekçe: Footer-group CLAIM EXLUSIVE PERKS! Name+Email+SUBSCRIBE. Submit PII stop.  
Örnekler: lead-capture-newsletter-band  
Öneri: leftover — form gönderilmedi  
Karar: onay bekliyor

---

ADAY: kiddle-atc-you-may-like
Gerekçe: PDP ADD TO CART 1440’ta ortada **YOU MAY LIKE** modal (5 ürün + sarı ADD TO CART + oyuncak blokları footer) ile birlikte cart drawer açılıyor. 375 drawer içinde YOU MAY LIKE kapalı akordeon. Ayrı schema yok; cart-drawer filled karesinde görüldü.
Örnekler: https://toyon-toys-3.myshopify.com/products/128pcs-big-coloring-trunk-1 ATC
Öneri: leftover — upsell modal
Karar: onay bekliyor

---

ADAY: kiddle-menu-drawer-menu-opening
Gerekçe: Hamburger tık + forceOpen details/#menu-drawer 375/768 karede drawer göstermedi. Dawn `menu-opening` class olmadan #menu-drawer 375’te 0×w / visibility:hidden, 768’de ekran dışı. Probe’da class eklenince HOME…DISCOVER + WISHLIST 0 + COMPARE 0 görüldü; capture adımı o class’ı yazamaz. missingStates.
Örnekler: home header-drawer
Öneri: leftover — overlay açılmadı
Karar: onay bekliyor

---

ADAY: kiddle-quick-shop-modal
Gerekçe: QUICK SHOP tık `quick-add-modal[open]` üretmedi (3vp zero-size). forceOpen boş kabuk; show() ModalDialog içinde patlıyor. CardLink id çift. missingStates.
Örnekler: home BEST SELLER Baby cartoon scooter
Öneri: leftover — QV open yok
Karar: onay bekliyor

---

ADAY: kiddle-product-tabs-play
Gerekçe: PLAY tık (ul.tabs a[href='#tab-2']) iki denemede ESSENTIALS’ta kaldı. #tab-2 display:none, içerik ürün değil CSS. missingStates.
Örnekler: home homepage_product_tab_wd7ikC
Öneri: leftover — sekme değişmedi
Karar: onay bekliyor

---

ADAY: kiddle-copy-pet-bleed  
Gerekçe: Kids vitrinde pet/herding kopyası: CANINE COGNITION, GET HERDING, UNBOX YOUR HEALTHY FOOD, SNIFF AND SEEK, FAQ Doghouse, BELOVED COMPANIONS. Şema değil; demo içerik.  
Örnekler: home WHY KIDDLE · PDP banners · about · FAQ  
Öneri: leftover — içerik kalıntısı  
Karar: onay bekliyor
