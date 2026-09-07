# Decora leftovers / adaylar

*Kaynak:* https://pandora-furniture-2.myshopify.com/  
*Ürün:* https://speedothemes.com/products/shopify-furniture-theme-store  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Tema (görülen, uydurulmadı):* **Pandora-furniture-2-v-1-5-0** · `schema_name` **Pandora furniture 2** · `schema_version` **1.5.0** · `theme_store_id` **null** · role `main` · id `178511216952`  
*Walk host / Shopify.shop:* `pandora-furniture-2.myshopify.com`  
*Listing slug:* decora (görev) — canlı `schema_name` **Pandora furniture 2** (Decora değil; Furnix listing `pandora-furniture-6` ayrı host)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: decora-password-wall  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfasında yayınlı şifre `1`. Başka host yok.  
Örnekler: storefront title “Pandora Furniture (password: 1)”  
Öneri: leftover — resmi demo kapısı  
Karar: onay bekliyor

---

ADAY: decora-listing-slug-vs-schema  
Gerekçe: Görev / Speedo ürün slug **decora**. Canlı `schema_name` **Pandora furniture 2** 1.5.0. `theme_store_id` null. Furnix (`pandora-furniture-6`) canlıda `schema_name` **Decora**.  
Örnekler: `Shopify.theme`  
Öneri: leftover — slug ≠ schema_name  
Karar: onay bekliyor

---

ADAY: decora-tormeti-copy  
Gerekçe: Home Exclusive Offer “Unbox your Happiness with TORMETI”; PDP “TORMETI MANUFACTURING” + jewelry “responsibly source…jewelry”; Additional Information Carat/Clarity leftover.  
Örnekler: home sub-banner · PDP 165727107497788584 · accordion Additional Information  
Öneri: leftover — çapraz tema kopyası  
Karar: onay bekliyor

---

ADAY: decora-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` statikte h=0. Interact 375'te “Get the newsletter Get 10% off” + Email + SUBSCRIBE göründü (PII, dur / gönderilmedi).  
Örnekler: overlay-group newsletter-popup · 375 cart initial ilk kare  
Öneri: leftover — gecikmeli popup  
Karar: onay bekliyor

---

ADAY: decora-menu-drawer-capture  
Gerekçe: 375 hamburger tık #menu-drawer 0px; 768 viewport karesi homepage (drawer yok). Probe 375×627 Shop/Contact/About Us gördü. Tormeti aynı Speedo çatalı.  
Örnekler: `#menu-drawer` · `#Details-menu-drawer-container`  
Öneri: leftover — overlay capture  
Karar: onay bekliyor

---

ADAY: decora-about-repeats  
Gerekçe: About’ta Our Story / OUR VISION yazıldı; 100% Ethical / Real / Quality / There For You aynı image-with-text tekrarı.  
Örnekler: template--24649680355640__165726376745180bbf vb.  
Öneri: leftover — tekrar chrome  
Karar: onay bekliyor

---

ADAY: decora-pdp-empty  
Gerekçe: PDP `#shopify-section-template--24649680879928__16572629707050636d` h=0 / boş metin.  
Örnekler: product-detail empty section  
Öneri: leftover — boş blok  
Karar: onay bekliyor

---

ADAY: decora-cart-footer-empty  
Gerekçe: `#shopify-section-template--24649679274296__cart-footer` boş sepette h=0.  
Örnekler: cart-footer  
Öneri: leftover — boşken gizlenen footer  
Karar: onay bekliyor

---

ADAY: decora-account-checkout-newsletter  
Gerekçe: Log in / Check out / newsletter SUBSCRIBE / contact SEND — PII / ödeme. Tıklanmadı.  
Örnekler: header Log in · cart Check out · footer SUBSCRIBE · contact SEND  
Öneri: leftover — dur  
Karar: onay bekliyor

---

ADAY: decora-collection-layouts  
Gerekçe: Collections indeksinde collection layout 2–5 handle’ları var. Varsayılan PLP `/collections/all` envanterlendi; layout varyantları ayrı observation değil.  
Örnekler: `/collections/collection-layout-2`  
Öneri: leftover — layout varyantı  
Karar: onay bekliyor
