# Drop leftovers / adaylar

*Kaynak:* https://drop-theme-reveal.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/drop — paid · We are Underground · $180  
*Tema (görülen, uydurulmadı):* **drop-update-v5-3-0** · `schema_name` **Drop** · `schema_version` **5.3.0** · `theme_store_id` **null** · role `main` · id **153563627657**  
*Walk host:* `drop-theme-reveal.myshopify.com` (Reveal preset; Unveil/Flash kullanılmadı)  
*Tarih:* 2026-08-20

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: drop-theme-store-id-null  
Gerekçe: Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: drop-header-section-zero-height  
Gerekçe: `#shopify-section-sections--21090827632777__header` tablet/desktop'ta wrapper **0px**; görünür bar `.section-header__main-bar` içeride. Observation union selector ile çözüldü; mega hover interact yok.  
Örnekler: home `navigation-header-mega`  
Öneri: leftover — SHOP mega hover / forceOpen interact  
Karar: onay bekliyor

---

ADAY: drop-quickview-slideout  
Gerekçe: `#slideout-quickview` quickshop overlay DOM'da. Walk'ta açılmadı; `global-quick-view` interact yok.  
Örnekler: `#shopify-section-quickshop`  
Öneri: leftover — quick view interact  
Karar: onay bekliyor

---

ADAY: drop-mailing-popup  
Gerekçe: `#shopify-section-mailing-popup` newsletter popup. Submit PII — dur. Observation yok.  
Örnekler: mailing-popup section  
Öneri: leftover — PII popup  
Karar: onay bekliyor

---

ADAY: drop-cart-filled-interact  
Gerekçe: Mini-cart boş state capture edildi (`global-cart-drawer`). ATC → dolu drawer + qty artışı interact yok. Add to cart OK ama checkout/submit yok.  
Örnekler: `#slideout-ajax-cart` · PDP ajax ATC  
Öneri: leftover — interact Mod A+  
Karar: onay bekliyor

---

ADAY: drop-before-after-drag  
Gerekçe: Home `before_after_jWRpLY` slider görsel kanıt var; sürükleme interact yok (Stretch/Impulse Apothecary kalıbı).  
Örnekler: home `before-after-slider`  
Öneri: leftover — drag interact  
Karar: onay bekliyor

---

ADAY: drop-shop-the-look-hotspot  
Gerekçe: `shop_the_look_qbmpj9` GEAR FOCUS — hotspot/ürün noktası interact denenmedi.  
Örnekler: home `media-lookbook-slider`  
Öneri: leftover — hotspot interact  
Karar: onay bekliyor

---

ADAY: drop-article-header-sidebar  
Gerekçe: Blog post `article-header` + `sidebar` (Share · Recent Articles) ayrı section'lar. Observation yalnız `main` gövdesi; header/sidebar notta.  
Örnekler: `/blogs/tales-from-the-road/discovering-the-andes`  
Öneri: leftover — blog layout parçaları  
Karar: onay bekliyor

---

ADAY: drop-contact-featured-collection  
Gerekçe: Contact `#shopify-section-template--21090827075721__featured_collection_g6aniW` lazy boş kaldı; capture atlandı.  
Örnekler: `/pages/contact`  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: drop-sibling-demo-urls  
Gerekçe: Theme Store eski notlar `drop-theme.myshopify.com` (Unveil) ve `drop-theme-demo` (Flash). Walk yalnız resmi Reveal host.  
Örnekler: candidates row 62 eski not  
Öneri: leftover — kardeş preset URL'leri walk edilmedi  
Karar: onay bekliyor

---

ADAY: drop-plp-facet-drawer  
Gerekçe: PLP FILTER BY / SORT BY drawer açık/kapalı interact yok. `product-showcase-grid-plp` statik grid kanıtı.  
Örnekler: `/collections/bags` main section  
Öneri: leftover — facet overlay interact  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / Shop Pay
- Newsletter / contact form submit — PII
- Mailing popup e-posta
- Quick view açma
- `/blogs/stories` — 404 (doğru blog: `/blogs/tales-from-the-road`)
