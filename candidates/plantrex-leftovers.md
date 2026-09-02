# Plantrex leftovers / adaylar

*Store (walk):* https://pandora-flower.myshopify.com/  
*Ürün:* https://speedothemes.com/products/flower-beautiful-flower-shop-shopify-template-o-s-2-0  
*Tema (görülen, uydurulmadı):* **pandora-flower-v-1-5-0** · `schema_name` **Pandora_flower** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `124515549269` · role `main`  
*Shopify.shop:* `pandora-flower.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: plantrex-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo third-party; Theme Store id uydurulmadı.  
Örnekler: https://pandora-flower.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: plantrex-storefront-password  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfası public demo şifresi `1` yayınlıyor. Aynı host; başka vitrin kullanılmadı.  
Örnekler: https://speedothemes.com/products/flower-beautiful-flower-shop-shopify-template-o-s-2-0  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: plantrex-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0 kapalı. Get the newsletter Get 10% off + email. PII, dur. Close `.close_popup`.  
Örnekler: overlay newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: plantrex-wishlist  
Gerekçe: Ürün kartlarında ADD TO WISHLIST. Ayrı overlay yoklandı değil; şema yok.  
Örnekler: Trendy Collection / PLP / related kartlar  
Öneri: leftover — wishlist  
Karar: onay bekliyor

---

ADAY: plantrex-cart-footer-empty  
Gerekçe: `#shopify-section-template--15003425177685__cart-footer` boş sepetken h=0. cart-items ayrı observation.  
Örnekler: /cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: plantrex-pdp-zero-section  
Gerekçe: `#shopify-section-template--15003425898581__16572629707050636d` h=0 / boş metin.  
Örnekler: Gerberas PDP  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: plantrex-diamond-copy  
Gerekçe: Çiçek demosu; hero “LAB-GROWN DIAMOND RINGS”, PDP Additional Information Carat/Clarity/Shape, RESPONSIBLY SOURCED mücevher metni. İçerik sapması — yeni tip değil.  
Örnekler: home hero · PDP accordion  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: plantrex-shop-by-types-hash  
Gerekçe: Shop By Types kartları `href="#"`. Koleksiyon hedefi bu demoda yok.  
Örnekler: custom-icon section  
Öneri: leftover — boş link  
Karar: onay bekliyor

---

ADAY: plantrex-account-checkout  
Gerekçe: Log in / Check out / newsletter Subscribe / contact form — PII / ödeme. Dur.  
Örnekler: header account · CartDrawer-Checkout · footer newsletter  
Öneri: leftover — bilinçli dur  
Karar: onay bekliyor
