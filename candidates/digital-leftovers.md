# Digital (Speedo) — leftovers

*Walk:* https://digital-gallery-shop-2.myshopify.com/ · preset `default`  
*Tema:* digital-v-1-5-0-latest-updates-new · schema_name Digital 1.5.0 · theme_store_id null · id `177910022451`  
*Password:* `1` (Speedo ürün sayfası; aynı host Dawn password-modal)

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: digital-storefront-password  
Gerekçe: `/` 302 → `/password`. “Enter using password” `details.password-modal`. Ürün sayfası “Please enter password 1 to view demo.” Aynı host’ta `1` ile açıldı. Title “digital-gallery-shop-2”. Walk leftover’da durmadı.  
Örnekler: https://digital-gallery-shop-2.myshopify.com/ · https://speedothemes.com/products/digital-innovative-digital-products-shopify-theme-o-s-2-0  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: digital-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Digital · `schema_version` 1.5.0 · `name` digital-v-1-5-0-latest-updates-new. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://digital-gallery-shop-2.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: digital-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` her sayfada h=0. PII — submit yok.  
Örnekler: home ve diğer şablonlar  
Öneri: leftover — overlay; `lead-capture-form` zorlama  
Karar: onay bekliyor

---

ADAY: digital-pdp-empty-section  
Gerekçe: PDP `#shopify-section-template--24481723056435__172137309121bf68f7` yükseklik 0, metin yok.  
Örnekler: https://digital-gallery-shop-2.myshopify.com/products/health-and-wellness-a-comprehensive-complete-guide  
Öneri: leftover — boş placeholder  
Karar: onay bekliyor

---

ADAY: digital-related-products-empty  
Gerekçe: PDP `#…__related-products` ~116px, ürün metni yok. `product-showcase-related` yazılmadı.  
Öneri: leftover — kanıtsız şema yok  
Karar: onay bekliyor

---

ADAY: digital-cart-footer  
Gerekçe: `/cart` `#shopify-section-template--24481721024819__cart-footer` boş sepette 0-size.  
Örnekler: https://digital-gallery-shop-2.myshopify.com/cart  
Öneri: leftover — Dawn cart-footer  
Karar: onay bekliyor

---

ADAY: digital-native-policy  
Gerekçe: `/policies/privacy-policy` title Privacy policy; shopify-section yalnız announcement/header/footer. Gövde native policy kabı, `policy-page-layout` üç kolon değil.  
Örnekler: https://digital-gallery-shop-2.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: digital-about-layouts  
Gerekçe: `/pages/about-layout-1`…`4` tema satış layout vitrini (parallax, team, image-with-icons, count_down). Walk `/pages/our-story` aldı.  
Öneri: leftover — about-brand tam tur ayrı pass  
Karar: onay bekliyor

---

ADAY: digital-contact-layouts  
Gerekçe: `/pages/contact-layout-1`…`4` (map, form+image). Walk `/pages/contact` aldı.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: digital-collection-layouts  
Gerekçe: `/collections/collection-layout-1`…`3` tema satış PLP varyantı. Walk `/collections/all` + `/collections`.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: digital-wishlist  
Gerekçe: Header wishlist sayacı + `/pages/wishlist` “No products were added…”. Account-adjacent.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: digital-compare  
Gerekçe: Header compare + `/pages/compare` “There are no products available to compare.”  
Öneri: leftover — compare overlay/sayfa  
Karar: onay bekliyor

---

ADAY: digital-size-guide  
Gerekçe: `/pages/size-guide` yalnız “Size guide” başlığı (~198px). Dijital kurs mağazası; tablo yok.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: digital-faq-parallax  
Gerekçe: `/pages/faq` `#…__parallax_MU48pr` “Faq's” başlık bandı. Accordion ayrı observation.  
Öneri: leftover — parallax başlık  
Karar: onay bekliyor

---

ADAY: digital-pdp-variant-yok  
Gerekçe: `/products.json` 17 ürün, hepsi `Default Title` tek varyant. Swatch/changed yok.  
Öneri: leftover — varyant UI yok  
Karar: onay bekliyor

---

ADAY: digital-quick-view-host  
Gerekçe: PLP probe `quick:true` (modal-opener / quick-add). Statik capture `quick-add-modal, [id*='quick-view']` 375'te eşleşmedi. Observation silindi.  
Örnekler: https://digital-gallery-shop-2.myshopify.com/collections/all  
Öneri: leftover — overlay selector yok  
Karar: onay bekliyor

---

ADAY: digital-articles-json-404  
Gerekçe: `/blogs/news/articles.json` 404. HTML `/blogs/news` + article URL’leri var.  
Öneri: leftover — endpoint  
Karar: onay bekliyor
