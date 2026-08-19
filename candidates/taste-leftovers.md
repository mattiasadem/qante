# Taste leftovers / adaylar

*Store:* https://theme-taste-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **Taste** · `schema_name` **Dawn** 3.0.0 · `theme_store_id` **null** · role `main` · id `168341897238` · shop `theme-taste-demo.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/taste — Free · by Shopify · preset Taste  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: taste-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null** (gözlendi). Kullanıcı beklentisi 1374 Theme Store id — storefront objesinde yok. `schema_name` Dawn 3.0.0; `name` Taste.  
Örnekler: https://theme-taste-demo.myshopify.com/  
Öneri: leftover — kimlik sapması, şema yok  
Karar: onay bekliyor

---

ADAY: taste-cart-notification-not-drawer  
Gerekçe: `cart-drawer` yok. ATC → `#cart-notification` popup (Item added / View my cart / Check out). Boş hâl yalnız `/cart`. `global-cart-drawer` observation + delta.  
Örnekler: PDP Fiery Ginger Booster ATC  
Öneri: leftover — Dawn notification vs drawer  
Karar: onay bekliyor

---

ADAY: taste-404-routes  
Gerekçe: Aynı 404 (`main-404` Page not found): `/pages/about` `/pages/faq` `/pages/shipping` `/blogs/journal` `/policies/privacy-policy` `/policies/refund-policy` + rastgele path. Observation `not-found/page-content-main`.  
Örnekler: https://theme-taste-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: taste-empty-news-blog  
Gerekçe: `/blogs/news` 200, başlık News, yazı yok. Recipes dolu.  
Örnekler: https://theme-taste-demo.myshopify.com/blogs/news  
Öneri: leftover — boş blog  
Karar: onay bekliyor

---

ADAY: taste-plp-template-repeats  
Gerekçe: `/collections/all` ve kategori koleksiyonları (boosters, kombuchas, lemonades, bundles, plant-milks, shakes, cold-pressed-juices) aynı `banner` + `product-grid` şablon. Yazılan: `/collections/all-drinks`.  
Örnekler: https://theme-taste-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: taste-search-zero-bread  
Gerekçe: `/search?q=bread` 0 sonuç (katalog içecek). Yazılan sorgu `ginger`.  
Örnekler: https://theme-taste-demo.myshopify.com/search?q=bread  
Öneri: leftover — boş sonuç karesi ayrıca çekilmedi  
Karar: onay bekliyor

---

ADAY: taste-pii-stop  
Gerekçe: Footer newsletter + contact Send + checkout tıklanmadı. Account ikonu header’da yok.  
Örnekler: footer · `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: taste-header-not-image-mega  
Gerekçe: Drinks/About `details` dropdown (metin link listesi). Görsel kolon / promo kart yok. `navigation-header-mega` + delta.  
Örnekler: `#Details-HeaderMenu-1`  
Öneri: leftover — Dawn dropdown ≠ image mega  
Karar: onay bekliyor

---

ADAY: taste-cro-schemas-not-on-demo  
Gerekçe: CRO disk şemalarından yalnız `faq-collapsible-tabs` ve `lead-capture-form` observation ile eşleşti. Demo'da görülmedi: before-after-slider, commerce-tools-products-bundle, promo-banner-countdown, lead-capture-newsletter-band, comparison-quick-table, product-finder-quiz, testimonial-quote-carousel, media-shop-the-feed, media-scrolling-gallery.  
Örnekler: https://theme-taste-demo.myshopify.com/ (home/PDP/contact taraması)  
Öneri: leftover — şema icat edilmedi  
Karar: onay bekliyor

---

ADAY: taste-bundles-not-commerce-tools-bundle  
Gerekçe: Home "Bundle up and save" grid Dawn `featured-collection`; `commerce-tools-products-bundle` şemasına observation yazılmadı. `product-showcase-grid-featured.2` reuse.  
Örnekler: https://theme-taste-demo.myshopify.com/ — Green/Standard/Days bundles  
Öneri: leftover — ürün grid ≠ bundle builder  
Karar: onay bekliyor

---

ADAY: taste-footer-newsletter-not-newsletter-band  
Gerekçe: Footer e-posta Dawn `footer` section; `lead-capture-newsletter-band` observation yok. `footer-columns-newsletter` + PII stop (submit yok).  
Örnekler: home footer e-posta alanı  
Öneri: leftover — band şeması ayrı instance değil  
Karar: onay bekliyor

---

ADAY: taste-faq-accordion-multi-open  
Gerekçe: PDP FAQ `changed` (shipping tık) sonrası shelf life satırı da açık kalıyor; şema `allowMultipleOpen: false` varsayımıyla çelişebilir.  
Örnekler: Fiery Ginger Booster PDP FAQ  
Öneri: leftover — Dawn instance davranışı  
Karar: onay bekliyor
