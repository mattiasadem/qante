# Loranica leftovers / adaylar

*Store:* https://women-beauty-5.myshopify.com  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/loranica-beauty-care-shopify-beauty-themes-shopify-2-0  
*Tema (görülen, uydurulmadı):* **Loranica beauty care-v-1-5-0** · `schema_name` **Loranica beauty care** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `170736976174` · shop `women-beauty-5.myshopify.com`  
*Preset:* default · *Slug:* loranica  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: loranica-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası “Please enter password 1 to view demo.” Aynı host’ta `1` ile açıldı (`unlock-storefront.mjs`). Title hâlâ “Women Beauty 5 (password: 1)”. Walk leftover’da durmadı.  
Örnekler: https://women-beauty-5.myshopify.com/ · https://speedothemes.com/products/loranica-beauty-care-shopify-beauty-themes-shopify-2-0  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: loranica-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Loranica beauty care · `schema_version` 1.5.0 · `name` Loranica beauty care-v-1-5-0. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://women-beauty-5.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: loranica-hamburger-all-viewports  
Gerekçe: 1440’ta `summary.header__icon--menu` görünür (32×32). `Details-HeaderMenu-*` yok. Desktop görsel mega yok — menü `#menu-drawer`.  
Örnekler: header · #menu-drawer  
Öneri: observation delta (`navigation-header-mega`) — yeni şema değil  
Karar: onay bekliyor

---

ADAY: loranica-wishlist  
Gerekçe: Menu drawer’da `/pages/wishlist` + `.wishlist.header__icon`. Sayfa envanterlenmedi (app/özellik).  
Örnekler: #menu-drawer · /pages/wishlist  
Öneri: leftover — wishlist overlay/sayfa  
Karar: onay bekliyor

---

ADAY: loranica-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0 (“Get the newsletter Get 10% off.”). Tetiklenmedi.  
Örnekler: home ve tüm şablonlar  
Öneri: leftover — kapalı popup  
Karar: onay bekliyor

---

ADAY: loranica-shop-tees-copy  
Gerekçe: Home `featured_collection` başlığı **SHOP TEES** — beauty vitrinde fashion leftover kopya. Ürünler oje/tint.  
Örnekler: home featured collection  
Öneri: leftover — merchant kopya, şema değil  
Karar: onay bekliyor

---

ADAY: loranica-related-hydrate  
Gerekçe: PDP `#…__related-products` ilk dump’ta h=136 metin yok; scroll sonrası YOU MAY ALSO LIKE + 4 kart (`product-recommendations` AJAX).  
Örnekler: Extra Lip Tint PDP  
Öneri: observation + prepareScroll — yeni şema değil  
Karar: walk’ta kullanıldı

---

ADAY: loranica-cart-footer-empty  
Gerekçe: `#shopify-section-template--23167664947502__cart-footer` boş sepette h=0 (Estimated total gizli).  
Örnekler: /cart  
Öneri: leftover — totals dolu drawer/sayfada  
Karar: onay bekliyor

---

ADAY: loranica-policy-native  
Gerekçe: `/policies/privacy-policy` (ve terms/refund) içerik shopify-section değil — yalnız announcement/header/footer. Native policy body.  
Örnekler: https://women-beauty-5.myshopify.com/policies/privacy-policy  
Öneri: leftover — page-content-main / policy-page-layout adayı, 3vp yok  
Karar: onay bekliyor

---

ADAY: loranica-newsletter-submit  
Gerekçe: Footer SIGN UP FOR 15% OFF. Email submit PII stop.  
Örnekler: footer  
Öneri: leftover — form submit yok  
Karar: duruldu

---

ADAY: loranica-menu-drawer-capture  
Gerekçe: Probe hamburger tıkı drawer’ı x=0’a getirir (Home / Shop / Best Seller / …). Resmi `capture-interaction` 1. tur kapalı homepage; 2. tur forceOpen `#Details-menu-drawer-container` + `#menu-drawer` viewport karesi hâlâ homepage (375 karartı var, panel yok). Dawn `menu-opening` class’ı script forceOpen’da yok. Shop `#HeaderDrawer-shop` viewport dışı.  
Örnekler: #menu-drawer · #Details-menu-drawer-container  
Öneri: leftover — open/changed missingStates; şema yok  
Karar: iki deneme bitti

---

ADAY: loranica-featured-hover  
Gerekçe: Scan 12 medya kutusunda 2+ img. 1440 hover `.card__media` ve `.card__inner` PNG’leri static 1440 ile byte-aynı (89629). İkinci görsel / Quick View görünmedi.  
Örnekler: home featured SHOP TEES  
Öneri: leftover — hover missingStates  
Karar: iki deneme bitti
