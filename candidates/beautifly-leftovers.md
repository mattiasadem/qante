# Beautifly leftovers / adaylar

*Store:* https://women-beauty-6.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/beautifly-beauty-care-shopify-beauty-themes-shopify-2-0  
*Tema (görülen, uydurulmadı):* **Beautifly-v-1-5-0** · `schema_name` **Beautifly** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `141669368035` · role `main` · shop `women-beauty-6.myshopify.com`  
*Preset:* default · *Slug:* `beautifly`  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0; Shopify Theme Store resmi değil)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: beautifly-storefront-password  
Gerekçe: `/` 302 → `/password`. Title “Women Beauty 6 (password: 1)”. Ürün sayfası password `1`. Aynı host’ta `unlock-storefront.mjs` ile açıldı. Dawn `#Password` gizli / Shopify `#password` görünür — helper force-fill. Walk leftover’da durmadı.  
Örnekler: https://women-beauty-6.myshopify.com/ · https://speedothemes.com/products/beautifly-beauty-care-shopify-beauty-themes-shopify-2-0  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: beautifly-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Beautifly · `schema_version` 1.5.0 · `name` Beautifly-v-1-5-0. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://women-beauty-6.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: beautifly-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET THE NEWSLETTER GET 10% OFF + görsel. Statik karede kapalı.  
Örnekler: home ve tüm şablonlar  
Öneri: leftover — popup overlay  
Karar: onay bekliyor

---

ADAY: beautifly-meet-the-team  
Gerekçe: About `/pages/about-us` `dbc23b1d` Meet The Team — Olivia Director / Eleanor Fashion Designer / Hazel Marketing Manager + sosyal. Takım şeması yok.  
Örnekler: https://women-beauty-6.myshopify.com/pages/about-us  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: beautifly-wishlist-compare  
Gerekçe: Header/drawer Wishlist `/pages/wishlist`, Compare `/pages/compare`. Hesap/wishlist PII; compare drawer envanterlenmedi.  
Örnekler: https://women-beauty-6.myshopify.com/pages/wishlist  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: beautifly-features-mega  
Gerekçe: Header Features (`#Details-HeaderMenu-2`) tema satış listesi (Product sub drawer, Newsletter popup, Color swatches…) + Serum/Mascara/Bath kart + parfüm spotlight. Shopper merch mega değil — Shop All ayrı.  
Örnekler: header 1440  
Öneri: leftover — tema feature listesi; Shop All interact  
Karar: onay bekliyor

---

ADAY: beautifly-cart-footer-empty  
Gerekçe: `#shopify-section-template--17814603333859__cart-footer` boş sepette h=0 (Estimated total gizli).  
Örnekler: https://women-beauty-6.myshopify.com/cart  
Öneri: leftover — totals dolu drawer/sayfada  
Karar: onay bekliyor

---

ADAY: beautifly-faq-path  
Gerekçe: `/pages/faq` 404. Gerçek FAQ `/pages/faqs`. `/pages/about` ve `/pages/our-story` 404; about = `/pages/about-us`.  
Örnekler: https://women-beauty-6.myshopify.com/pages/faq  
Öneri: leftover — kırık slug  
Karar: onay bekliyor

---

ADAY: beautifly-newsletter-submit  
Gerekçe: Footer-üstü SUBSCRIBE + contact SUBMIT. Email submit PII stop.  
Örnekler: newsletter_FTtdp6 · `/pages/contact`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: beautifly-buy-it-now  
Gerekçe: PDP checkout / BUY IT NOW tıklanmadı.  
Örnekler: perfume PDP  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: beautifly-cart-you-may-like  
Gerekçe: Dolu cart drawer’da YOU MAY LIKE. 1440 sol panel (thumb + ADD TO CART); 375/768 kapalı akordeon. Boş drawer’da yok. `global-cart-drawer.oneriler` slotu zaten var — yeni şema değil.  
Örnekler: filled cart drawer 1440/375/768  
Öneri: leftover — mevcut oneriler  
Karar: onay bekliyor

---

ADAY: beautifly-menu-drawer-open  
Gerekçe: Hamburger interact iki denemede viewport karesi kapalı homepage kaldı. Probe’ta details.menu-opening + Shop All…LOG IN açıldı. Capture Dawn transform’u kaçırdı. Üçüncü deneme yok.  
Örnekler: evidence …/global-menu-drawer.open.hamburger.{375,768}.png (kapalı kare)  
Öneri: leftover — missingStates.open  
Karar: onay bekliyor
