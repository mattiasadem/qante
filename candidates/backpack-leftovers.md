# Backpack leftovers / adaylar

*Store:* https://adlwin-store.myshopify.com/  
*Katalog:* https://speedothemes.com/products/backpack-stylish-travel-gear-shopify-template-o-s-2-0  
*Tema (görülen, uydurulmadı):* **Theme export adlwin-com-adlwin-zenon…** · `schema_name` **Debut** · `schema_version` **17.14.1** · `theme_store_id` **null** · id `134700761330` · role `main` · shop `adlwin-store.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: backpack-schema-name-debut  
Gerekçe: Speedo product “Backpack Stylish Travel Gear · OS 2.0”. Canlı `Shopify.theme.schema_name` = **Debut** 17.14.1; `name` = Theme export adlwin-com-adlwin-zenon… Vitrin Adlwin giyim, sırt çantası değil.  
Örnekler: https://adlwin-store.myshopify.com/  
Öneri: leftover — pazarlama adı ≠ canlı schema_name  
Karar: onay bekliyor

---

ADAY: backpack-no-mega  
Gerekçe: Mega/dropdown yok. Home / Catalog / Contact düz link. `navigation-header-mega` yazıldı; delta: mega yok.  
Örnekler: https://adlwin-store.myshopify.com/ `.site-header`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: backpack-no-cart-drawer  
Gerekçe: `cart-drawer` yok. Header `.site-header__cart` → `/cart`. ATC ajax-enabled; overlay drawer yok. `global-cart-drawer` yazılmadı.  
Örnekler: https://adlwin-store.myshopify.com/cart  
Öneri: leftover — yalnız cart page  
Karar: onay bekliyor

---

ADAY: backpack-wishlist  
Gerekçe: `/pages/wishlist` — “Looks like you haven't started a wishlist yet… START SHOPPING”. Taksonomide wishlist pageType yok.  
Örnekler: https://adlwin-store.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: backpack-native-recommendations-empty  
Gerekçe: PDP `#…__product-recommendations` h=0. Dolu related ayrı custom section (`1641902220faf2a26a`).  
Örnekler: https://adlwin-store.myshopify.com/products/grey-green-floral-print-fit-and-flare-dress  
Öneri: leftover — boş native recommendations  
Karar: onay bekliyor

---

ADAY: backpack-empty-collection-handles  
Gerekçe: `/collections/shirts` `/socks` `/boxer` 0 ürün. Home “I’m looking for” bu handle’lara gider.  
Örnekler: https://adlwin-store.myshopify.com/collections/shirts  
Öneri: leftover — boş koleksiyon  
Karar: onay bekliyor

---

ADAY: backpack-missing-templates  
Gerekçe: `/pages/about` `/pages/about-us` 404. FAQ yok. Blog `/blogs/news` boş; post yok. Search/contact/404 gövdesi `.shopify-section` değil.  
Örnekler: https://adlwin-store.myshopify.com/pages/about  
Öneri: leftover — about/faq/post yok  
Karar: onay bekliyor

---

ADAY: backpack-cart-qty-no-stepper  
Gerekçe: Cart `.cart__qty-input` (number). +/− yok. Fill 2 inputu değiştirir; satır/subtotal $530 ve rozet 1 kaldı.  
Örnekler: https://adlwin-store.myshopify.com/cart  
Öneri: leftover — qty ajax  
Karar: onay bekliyor

---

ADAY: backpack-predictive-empty  
Gerekçe: `#SearchDrawer` + `.predictive-search-wrapper` h=0. hoodie yazıldı, ürün önerisi yok. Submit `/search?q=hoodie` 8 sonuç.  
Örnekler: https://adlwin-store.myshopify.com/  
Öneri: leftover — predictive boş  
Karar: onay bekliyor

---

ADAY: backpack-iwt-two-rows  
Gerekçe: `editorial-image-with-text` şema tek görsel+metin; canlı `cuatom_img_lr` iki feature-row tek section. Şemaya dokunulmadı.  
Örnekler: home `#shopify-section-template--16546811379954__ddfd6d21-0c2b-40e7-8a03-b350b52a6794`  
Öneri: leftover — iki satır / tek şema  
Karar: onay bekliyor
