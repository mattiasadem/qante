# Furnix leftovers / adaylar

*Kaynak:* https://pandora-furniture-6.myshopify.com/  
*Ürün:* https://speedothemes.com/products/decora-elegant-home-decor-shopify-theme-o-s-2-0  
*Tema (görülen, uydurulmadı):* **Decora-v-1-5-0-latest-updates New** · `schema_name` **Decora** · `schema_version` **1.5.0** · `theme_store_id` **null** · role `main` · id `134494290128`  
*Walk host / Shopify.shop:* `pandora-furniture-6.myshopify.com`  
*Listing slug:* furnix (Speedo)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: furnix-password-wall  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfasında yayınlı şifre `1`. Başka host yok.  
Örnekler: storefront title “Pandora Furniture 6 (password: 1)”  
Öneri: leftover — resmi demo kapısı  
Karar: onay bekliyor

---

ADAY: furnix-listing-slug-vs-schema  
Gerekçe: Speedo listing / görev slug **furnix**. Canlı `schema_name` **Decora** 1.5.0. `theme_store_id` null.  
Örnekler: `Shopify.theme`  
Öneri: leftover — slug ≠ schema_name  
Karar: onay bekliyor

---

ADAY: furnix-store-map  
Gerekçe: Home `#shopify-section-template--16969389441232__map_r3DcBq` ~616px, metin/heading yok. Store-map şeması yok.  
Örnekler: home map_r3DcBq  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: furnix-related-empty  
Gerekçe: PDP `#shopify-section-template--16969390031056__related-products` ~116px / boş metin.  
Örnekler: product-detail related-products  
Öneri: leftover — boş recommended  
Karar: onay bekliyor

---

ADAY: furnix-pdp-repeats  
Gerekçe: PDP’de home ile aynı service_icon / sub_banner / FAQ / custom_announcement_bar tekrar. Ayrı observation yazılmadı.  
Örnekler: template--16969390031056__service_icon_yLrPgn vb.  
Öneri: leftover — tekrar chrome  
Karar: onay bekliyor

---

ADAY: furnix-account-checkout-newsletter  
Gerekçe: Log in / Check out / newsletter SUBSCRIBE — PII / ödeme. Tıklanmadı.  
Örnekler: header Log in · cart Check out · newsletter form  
Öneri: leftover — dur  
Karar: onay bekliyor

---

ADAY: furnix-you-may-like-overlay  
Gerekçe: PDP Add to cart hem sağ `global-cart-drawer` hem ortada YOU MAY LIKE modal açıyor (6 ürün + ATC + lifestyle görsel). Mevcut cart-drawer şemasına yazılmadı; ayrı tip yok.  
Örnekler: ATC Executive Arm Chair → overlay + drawer birlikte  
Öneri: leftover — overlay / upsell modal  
Karar: onay bekliyor
