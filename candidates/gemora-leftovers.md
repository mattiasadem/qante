# Gemora leftovers / adaylar

*Store:* https://jewelry-online-shop1.myshopify.com/  
*Vendor:* Speedo Themes · ürün https://speedothemes.com/products/best-luxury-jewellery-shopify-theme-0s-2-0  
*Tema (görülen, uydurulmadı):* **jewelry-online-shop1-v-1-5-0** · `schema_name` **Jewelry_online_shop1** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `178835947838` · role `main` · shop `jewelry-online-shop1.myshopify.com`  
*Password:* public demo `1` (ürün sayfası)

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: gemora-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. “Get the newsletter Get 10% off.” + Email + SUBSCRIBE. Overlay; dismiss-overlays kapatır. Yeni şema yok.  
Örnekler: home her sayfada  
Öneri: leftover — popup overlay  
Karar: onay bekliyor

---

ADAY: gemora-quick-add-modal  
Gerekçe: `QUICK-ADD-MODAL#QuickAdd-{id}` kart ATC host. Tabs hover PNG byte-aynı initial — quick-add / 2. görsel karede yok.  
Örnekler: home New Arrivals, PLP, related  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: gemora-cart-footer-split  
Gerekçe: `#…__cart-items` + `#…__cart-footer` ayrı section. Boşken footer h=0; doluyken Check out beklenir. `cart-page-main` yalnız cart-items.  
Örnekler: https://jewelry-online-shop1.myshopify.com/cart  
Öneri: leftover — Dawn sibling footer  
Karar: onay bekliyor

---

ADAY: gemora-pdp-empty-section  
Gerekçe: `#shopify-section-template--24653292798270__16572629707050636d` h=0, metin yok.  
Örnekler: PDP earrings  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: gemora-wishlist-page  
Gerekçe: `/pages/wishlist` “No products were added to your wishlist.” Taksonomide pageType yok; wishlist şeması yok.  
Örnekler: https://jewelry-online-shop1.myshopify.com/pages/wishlist  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: gemora-about-us-duplicate  
Gerekçe: `/pages/about-us` banner-block + 3× Image with text + Mission/Vision/Values multicolumn. Our Story zaten about-brand. `/pages/contact-1` ikinci contact.  
Örnekler: /pages/about-us · /pages/contact-1  
Öneri: leftover — kopya template  
Karar: onay bekliyor

---

ADAY: gemora-our-story-extra-iwt  
Gerekçe: Our Work + We're Eco-Friendly ! IWT kardeşleri. Maria IWT yazıldı; bu ikisi aynı tip tekrar.  
Örnekler: /pages/our-story  
Öneri: leftover — aynı editorial-image-with-text  
Karar: onay bekliyor

---

ADAY: gemora-contact-maria-ig  
Gerekçe: Contact sayfasında “Hi, I am Maria!” IWT + @JewelryShop instagram. Our Story’de aynı tipler yazıldı.  
Örnekler: /pages/contact  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: gemora-placeholder-copy  
Gerekçe: Home “Welcome to Pandora / leisure wear”; FAQ “A Question goes Here”; stats “Mobile app installs”; team Lorem. Demo içeriği — şema sapması değil.  
Öneri: leftover — içerik kalitesi  
Karar: onay bekliyor

---

ADAY: gemora-social-proof-popup  
Gerekçe: Sabit karelerde sol alt “Someone liked and Buy …” toast (Amsterdam/Paris/Sydney). `#shopify-section` değil; app/script overlay. dismiss-overlays kapatmadı.  
Örnekler: PLP, blog-list, PDP, search  
Öneri: leftover — app overlay, yeni şema yok  
Karar: onay bekliyor

---

ADAY: gemora-menu-drawer-375  
Gerekçe: Interact 2 deneme: 375/768 PNG homepage (çekmece yok). Probe click 375×686 HOME/SHOP… + SHOP drill (Bracelets Diamonds Earrings Pendants) URL değişmedi; capture forceOpen Dawn transform'u boyamadı. SHOP summary viewport dışı.  
Örnekler: home header-drawer  
Öneri: leftover — açık çekmece karesi yok  
Karar: onay bekliyor

---

ADAY: gemora-predictive-search-input  
Gerekçe: `#Search-In-Modal-1` capture fill'de hidden (2 deneme). Ayrı probe force-fill `ring` → 6 öneri + 4 ürün. Overlay kare yazılamadı.  
Örnekler: header details-modal#header-search  
Öneri: leftover — input state  
Karar: onay bekliyor

---

## Bilerek dışarıda

- Newsletter / contact Send / account Log in / checkout — PII
- `/collections/necklaces` 404 (koleksiyon yok)
- `/pages/about` `/pages/faq` `/pages/contact-us` 404 (doğru path: about-us, faqs, contact)
