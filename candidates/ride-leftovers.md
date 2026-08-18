# Ride leftovers / adaylar

*Store:* https://theme-ride-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **[Ride] Theme Store demo (latest)** · `schema_name` **Ride** 1.0.0 · `theme_store_id` **null** · id `141073449128` · shop `theme-ride-demo.myshopify.com`  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: ride-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Kullanıcı beklediği katalog id 1372 storefront objesinde yok. `schema_name` Ride, `schema_version` 1.0.0, name `[Ride] Theme Store demo (latest)`.  
Örnekler: https://theme-ride-demo.myshopify.com/  
Öneri: leftover — gözlenen değer null, 1372 uydurulmadı  
Karar: onay bekliyor

---

ADAY: ride-policy-empty  
Gerekçe: `/policies/privacy-policy` (ve refund/shipping/tos aynı iskelet) `main#MainContent` + `.shopify-policy__container` yalnız başlık; gövde 68px boş. shopify-section yok. Observation `policy/page-content-main` yazıldı.  
Örnekler: https://theme-ride-demo.myshopify.com/policies/privacy-policy  
Öneri: leftover — boş Shopify policy  
Karar: onay bekliyor

---

ADAY: ride-about-404  
Gerekçe: `/pages/about` 404. About içeriği `/pages/meet-the-team` (about-brand). Aynı 404: `/blogs/news` `/blogs/blog` `/blogs/journal` `/404`.  
Örnekler: https://theme-ride-demo.myshopify.com/pages/about  
Öneri: observation `not-found/page-content-main` yazıldı  
Karar: onay bekliyor

---

ADAY: ride-frontpage-image-with-text  
Gerekçe: `/collections/frontpage` (ORIGINAL BOARDS) fins PLP + ekstra image-with-text “HOW TO CHOOSE A SURFBOARD / READ THE GUIDE”. Aynı tip home IWT. Performance-boards = fins eksi collapsible. `/collections/all` generic Products.  
Örnekler: https://theme-ride-demo.myshopify.com/collections/frontpage  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: ride-newsletter-repeat  
Gerekçe: “RIDE WITH US” newsletter bandı home + PDP + PLP + search + cart + contact + team + blog + 404. Yalnız `home/lead-capture-newsletter-band` yazıldı. Submit yok (PII).  
Örnekler: her şablon  
Öneri: leftover — aynı instance tip  
Karar: onay bekliyor

---

ADAY: ride-cart-notification-not-drawer  
Gerekçe: `cart-drawer` yok. `cart-notification` popup + `/cart` sayfa. Cart ikon `href=/cart`. Boş overlay yok; qty notification’da yok. `global-cart-drawer` delta + `cart-page-main` empty/filled/qty.  
Örnekler: ATC FCS II Performer Neo Glass  
Öneri: leftover — Dawn notification  
Karar: onay bekliyor

---

ADAY: ride-no-mega-columns  
Gerekçe: SHOP/EXPLORE `details` + `header__submenu` tek kolon link (Original / Performance / Fins · Team / Contact / Stories). Kolon+görsel mega yok. `navigation-header-mega` delta.  
Örnekler: https://theme-ride-demo.myshopify.com/  
Öneri: leftover — dropdown, mega değil  
Karar: onay bekliyor

---

ADAY: ride-contact-pii-stop  
Gerekçe: Contact Name/Email/Phone/Comment + newsletter Email. Send/subscribe tıklanmadı. Account ikonu yok.  
Örnekler: https://theme-ride-demo.myshopify.com/pages/contact  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: ride-filipe-sold-out-pdp  
Gerekçe: Home featured ilk kart Filipe Toledo Wildfire Sold out. Walk PDP = in-stock fins (Size + ATC + recommendations hydrate). Board PDP aynı `product-info-main` iskelet.  
Örnekler: https://theme-ride-demo.myshopify.com/products/filipe-toledo-wildfire  
Öneri: leftover — aynı tip  
Karar: onay bekliyor
