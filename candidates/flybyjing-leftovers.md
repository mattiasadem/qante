# Fly By Jing leftovers / adaylar

*Store:* https://flybyjing.com · *Tema (görülen):* **FBJ 4/1 Launch** · schema_name **Shapes** 3.0.4 · theme_store_id **1535**  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: flybyjing-store-locator-iframe  
Gerekçe: `/pages/store-locator` ve Costco LP `iframe#store-locator-frame` (~980×747). Taksonomide locator pageType / kategori yok. Observation `page-content-main` sarmalayıcıyı çekti; app iframe ayrı tip.  
Örnekler: https://flybyjing.com/pages/store-locator · https://flybyjing.com/pages/costco  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: flybyjing-okendo-reviews  
Gerekçe: PDP `#shopify-section-template--15476678918202__custom_liquid_kz9n64` Okendo `okeReviews` 4.9 / 2459 + UGC grid. `testimonial-quote-carousel` zorlama map; iskelet quote slider değil.  
Örnekler: https://flybyjing.com/products/sichuan-chili-crisp  
Öneri: reviews ailesi / app widget tartışması  
Karar: onay bekliyor

---

ADAY: flybyjing-costco-lp  
Gerekçe: `/pages/costco` kampanya: overlay hero, çift marquee, `image_with_text_slideshow`, basın logoları, store-locator iframe. Membership/about ile aynı tipler + locator. Tam 3vp iddia edilmedi.  
Örnekler: https://flybyjing.com/pages/costco · `/pages/costco-roadshow` sitemap’te  
Öneri: landing-campaign delta veya ayrı walk  
Karar: onay bekliyor

---

ADAY: flybyjing-sms-club  
Gerekçe: `/pages/sms-sign-up` telefon formu (Tastemaker hediyesi). PII — gönderilmedi, obs yok.  
Örnekler: https://flybyjing.com/pages/sms-sign-up  
Öneri: lead-capture-form adayı; form submit yok  
Karar: onay bekliyor

---

ADAY: flybyjing-creator-community  
Gerekçe: `/pages/general-community` + `/pages/vip-community` influencer/creator form. PII.  
Örnekler: https://flybyjing.com/pages/general-community  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: flybyjing-shop-featured-repeat  
Gerekçe: `/collections/shop` 4× `featured_collection` (Gift Sets, Sauces, Noodles, Merch). İlk iki obs; Noodles + Merch aynı tip, tekrar çekilmedi.  
Örnekler: `#featured_collection_KztqTh` · `#featured_collection_kxPkCp`  
Öneri: gerekirse .3/.4  
Karar: onay bekliyor

---

ADAY: flybyjing-osano-cookie  
Gerekçe: Osano bar: Close (X) + Manage Preferences — Accept All metni yok. `dismiss-overlays` Accept’e bakıyor; viewport karelerinde 92px bar kalabilir.  
Öneri: chrome leftover  
Karar: onay bekliyor

---

ADAY: flybyjing-zero-custom-liquid  
Gerekçe: Header `custom_liquid_Da4T7F` ve footer `custom_liquid_X3RhCT` height 0. PDP `custom_liquid_JRYfdz` / `pt4w3e` 0. Membership `custom_liquid_UUm9V8` 0.  
Öneri: şema yok  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / ödeme / e-posta / SMS / contact submit  
- Gorgias chat (iframe `chat-button`)  
- `/collections/all` — aynı PLP template (banner+grid); sauces çekildi  
- Terms / accessibility / shipping-details — aynı `page` template (privacy çekildi)  
- 90+ blog yazısı — bir article (Mapo Tofu)  
- Corporate catalog PDF dış dosya  
- Faire wholesale dış link  
