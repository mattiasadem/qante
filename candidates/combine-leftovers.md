# Combine leftovers / adaylar

*Walk store:* https://combine-theme-main.myshopify.com  
*Tema (görülen, uydurulmadı):* **combine-build/home** · `schema_name` **Combine** **4.0.0** · `theme_store_id` **null** · role `main` · id `159816614121` · shop `bundle-theme-demo.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/combine — Paid · by Krown Themes  
*Görev URL (yürümedi, yanlış demo):* https://combine-theme.myshopify.com/  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: combine-wrong-official-url  
Gerekçe: Görev `https://combine-theme.myshopify.com/` dedi. Canlı tema **combine-round-2** (Lift Interactive, footer “Theme by Lift”). `schema_name` **null** · `schema_version` **null** · `theme_store_id` **null** · id `4560616` · shop `combine-theme.myshopify.com`. Masonry + sol sidebar; bundle builder yok. Krown Combine (paid, bundles) resmi demo **https://combine-theme-main.myshopify.com/**. Walk Krown’da yapıldı.  
Örnekler: https://combine-theme.myshopify.com/ · https://combine-theme-main.myshopify.com/  
Öneri: leftover — URL sapması  
Karar: onay bekliyor

---

ADAY: combine-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null** (gözlendi). `schema_name` Combine 4.0.0; `name` combine-build/home. Theme Store id uydurulmadı.  
Örnekler: https://combine-theme-main.myshopify.com/  
Öneri: leftover — kimlik alanı  
Karar: onay bekliyor

---

ADAY: combine-home-announcement-zero  
Gerekçe: Home `#shopify-section-…__announcement` h=0 (absolute header / slideshow). Aynı section `/collections/all` ve PDP’de 41px. Observation home, kare PLP URL’den.  
Örnekler: https://combine-theme-main.myshopify.com/  
Öneri: leftover — home 0px  
Karar: onay bekliyor

---

ADAY: combine-404-routes  
Gerekçe: Aynı 404 (`Page not found` / Continue browsing): `/pages/about` `/pages/about-us` `/pages/contact-us` `/pages/faq` `/pages/faqs` `/pages/shipping` `/blogs/journal` `/blogs/blog`. Observation `not-found/page-content-main`.  
Örnekler: https://combine-theme-main.myshopify.com/pages/about  
Öneri: leftover — yok sayfa  
Karar: onay bekliyor

---

ADAY: combine-empty-news-blog  
Gerekçe: `/blogs/news` 200, “There are currently no articles in this blog.” Article yok.  
Örnekler: https://combine-theme-main.myshopify.com/blogs/news  
Öneri: leftover — boş blog  
Karar: onay bekliyor

---

ADAY: combine-pdp-recommendations-zero  
Gerekçe: Carafe / Linen / Glass Vases `product-recommendations` h=0. Şema yazılmadı.  
Örnekler: https://combine-theme-main.myshopify.com/products/carafe-1-2ltr  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: combine-cart-recommendations-zero  
Gerekçe: `/cart` `cart-recommendations` h=0 (boş sepet).  
Örnekler: https://combine-theme-main.myshopify.com/cart  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: combine-home-empty-section  
Gerekçe: Home `c934eaec-07f9-46d4-89eb-07666d06a7b1` h=0, metin yok.  
Örnekler: home  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: combine-popups-unopened  
Gerekçe: `#shopify-section-popups` cookie (Accept/Decline tıklanmadı — dismiss script). Age verification + exit-intent 0px, açılmadı. Newsletter/email yok.  
Örnekler: home popups  
Öneri: leftover — overlay  
Karar: onay bekliyor

---

ADAY: combine-lookbook-extra  
Gerekçe: `/pages/lookbook` Soft Furnishing bloğu + extra shoppable satırlar yazılmadı (hero + bir ürün şeridi yazıldı).  
Örnekler: https://combine-theme-main.myshopify.com/pages/lookbook  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: combine-sale-page  
Gerekçe: `/pages/sale` 200, nav’da SALE. Ayrı observation yazılmadı (PLP tekrarı adayı).  
Örnekler: https://combine-theme-main.myshopify.com/pages/sale  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: combine-plp-template-repeats  
Gerekçe: `/collections/sets-bundles` `/collections/glassware` `/collections/all-products` aynı banner+grid şablon. Yazılan: `/collections/all`.  
Örnekler: https://combine-theme-main.myshopify.com/collections/sets-bundles  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: combine-presets-unwalked  
Gerekçe: Theme Store 5 preset (Combine / Ring / Gadget / Bites + bir). Yalnız main demo.  
Örnekler: https://themes.shopify.com/themes/combine/presets/combine  
Öneri: leftover — diğer preset  
Karar: onay bekliyor

---

ADAY: combine-predictive-empty  
Gerekçe: Search drawer açıldı, `carafe` yazıldı, 2.5s wait + ikinci çekim. Ürün/koleksiyon öneri listesi karede yok. Tam sayfa `/search?q=bundle` 10 sonuç yazıldı.  
Örnekler: `#site-search-sidebar` · `#search-form-sidebar`  
Öneri: leftover — predictive sonuç boş  
Karar: onay bekliyor

---

ADAY: combine-bundle-min-two  
Gerekçe: Build Your Set min 2 ürün. Bir Add to bundle çekildi (Boulder Bookend slot 1, ATC disabled). İkinci ürün / %30 apply karesi yok.  
Örnekler: https://combine-theme-main.myshopify.com/pages/build-your-set  
Öneri: leftover — yarım bundle  
Karar: onay bekliyor

---

ADAY: combine-pii-stop  
Gerekçe: Footer newsletter + contact Submit + checkout + Log in/Create Account tıklanmadı.  
Örnekler: footer · `/pages/contact` · cart  
Öneri: PII / checkout stop  
Karar: onay bekliyor
