# Nutronix leftovers / adaylar

*Store:* https://speedo-nutronix.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Speedo-nutronix-v-1-5-0** · `schema_name` **Speedo nutronix** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `170790388006` · role `main` · shop `speedo-nutronix.myshopify.com`  
*Vendor:* Speedo Themes (üçüncü taraf; Theme Store resmi değil)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: nutronix-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası *Please enter password "1" to view demo.* Public storefront-unlock `1` — private hesap değil. Aynı host.  
Örnekler: https://speedo-nutronix.myshopify.com/password  
Öneri: leftover — vendor demo kilidi  
Karar: onay bekliyor

---

ADAY: nutronix-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` Speedo nutronix · `schema_version` 1.5.0.  
Örnekler: https://speedo-nutronix.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: nutronix-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Get the newsletter Get 10% off. Email / PII — açılmadı, submit yok.  
Örnekler: https://speedo-nutronix.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: nutronix-wishlist  
Gerekçe: `/pages/wishlist` — No products were added to the wishlist. Header wishlist ikonu. Favori şeması yok.  
Örnekler: https://speedo-nutronix.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist page  
Karar: onay bekliyor

---

ADAY: nutronix-policy-no-main  
Gerekçe: `/policies/privacy-policy` (ve footer Refund/Terms) — shopify-section yalnız header/footer; politika gövdesi section değil (Shopify native policy).  
Örnekler: https://speedo-nutronix.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: nutronix-pdp-no-variants  
Gerekçe: Tüm `products.json` varyantları Default Title. Swatch / `changed` varyant yok. Qty stepper var.  
Örnekler: https://speedo-nutronix.myshopify.com/products/quercetin-zinc-vitamin-c-elderberry-gummies  
Öneri: leftover — varyant UI yok  
Karar: onay bekliyor

---

ADAY: nutronix-pdp-zero-sections  
Gerekçe: PDP logo row `a1aa702a-…` h=0 (logo-1..4) ve boş `16572629707050636d` h=0.  
Örnekler: https://speedo-nutronix.myshopify.com/products/quercetin-zinc-vitamin-c-elderberry-gummies  
Öneri: leftover — 0px section  
Karar: onay bekliyor

---

ADAY: nutronix-cart-footer-empty  
Gerekçe: `#shopify-section-template--23257313345830__cart-footer` boş sepetken h=0. Dolu cart sayfada footer görünür (Order special instructions + Estimated total + CHECK OUT).  
Örnekler: https://speedo-nutronix.myshopify.com/cart  
Öneri: leftover — boşken 0px  
Karar: onay bekliyor

---

ADAY: nutronix-blog-empty  
Gerekçe: `/blogs/news` yalnız H1 News. `blogs.json` articles boş. blog-post yok.  
Örnekler: https://speedo-nutronix.myshopify.com/blogs/news  
Öneri: leftover — boş blog  
Karar: onay bekliyor

---

ADAY: nutronix-account-login  
Gerekçe: Header Log in → `/account/login`. Hesap yoklandı/giriş yok.  
Örnekler: https://speedo-nutronix.myshopify.com/account/login  
Öneri: leftover — PII / hesap  
Karar: onay bekliyor

---

ADAY: nutronix-collection-layout-demos  
Gerekçe: `/collections` içinde collection-layout-2..5 adları — tema satış layout vitrini, ayrı walk yok.  
Örnekler: https://speedo-nutronix.myshopify.com/collections/collection-layout-2  
Öneri: leftover — layout demo  
Karar: onay bekliyor

---

ADAY: nutronix-home-tabs-no-switch  
Gerekçe: Top Products NEW ARRIVALS tıkı 3vp'de BEST SELLERS karesiyle byte-aynı; kart başlıkları değişmedi.  
Örnekler: https://speedo-nutronix.myshopify.com/  
Öneri: leftover — sekme hash UI  
Karar: onay bekliyor

---

ADAY: nutronix-menu-drawer-zero  
Gerekçe: 375 hamburger görünür; official `#menu-drawer` capture 0px (summary 0×0). Yoklamada JS click menü metnini açtı — kare yok.  
Örnekler: https://speedo-nutronix.myshopify.com/  
Öneri: leftover — drawer kare alınamadı  
Karar: onay bekliyor
