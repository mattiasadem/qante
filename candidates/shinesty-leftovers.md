# Shinesty leftovers / adaylar

*Store:* https://shinesty.com → https://www.shinesty.com/  
*Tema (görülen):* www'de `Shopify.theme` yok (Next.js + Vercel).  
*Shopify.theme (shinesty.myshopify.com login):* **[Scoutside] Portal Theme** · `schema_name` **Skeleton theme** 1.0.0 · custom (`theme_store_id` null) · id `122209206341` · CDN `t/79`  
*Shop:* `shinesty.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: shinesty-theme-on-www  
Gerekçe: Müşteri vitrini `www.shinesty.com` Next.js (`__NEXT_DATA__`, `/_next/`). `window.Shopify.theme` / `schema_name` yok. Tema adı uydurulmadı. Canlı `Shopify.theme` yalnız `https://shinesty.myshopify.com/account/login` (home oraya düşüyor): name `[Scoutside] Portal Theme`, schema_name `Skeleton theme`, schema_version `1.0.0`, theme_store_id null, id `122209206341`.  
Örnekler: https://www.shinesty.com/ · https://shinesty.myshopify.com/  
Öneri: leftover — platform notu  
Karar: onay bekliyor

---

ADAY: shinesty-klaviyo-email-popup  
Gerekçe: Home'da Klaviyo overlay (`hottubmama@shinesty.com` placeholder). Email/PII doldurulmadı.  
Örnekler: https://www.shinesty.com/  
Öneri: üçüncü parti overlay — PII stop  
Karar: onay bekliyor

---

ADAY: shinesty-customerdesk-help  
Gerekçe: Footer Help / Contact Us → `http://shinesty.customerdesk.io/` (Richpanel). Gorgias form `contact.gorgias.help/forms/6kjd4p3y`. PII yok.  
Örnekler: footer  
Öneri: üçüncü parti help  
Karar: onay bekliyor

---

ADAY: shinesty-pdp-reviews  
Gerekçe: PDP `#` Customer Reviews / 11009 Reviews / Review Summary. Taksonomide reviews yok.  
Örnekler: https://www.shinesty.com/products/apex-boa-boxers  
Öneri: aday kategori / üçüncü parti  
Karar: onay bekliyor

---

ADAY: shinesty-careers-workable  
Gerekçe: Footer Careers → `https://apply.workable.com/shinesty/`  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: shinesty-account-login  
Gerekçe: Account Login → `https://account.shinesty.com/account`. PII.  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: shinesty-refer-pii  
Gerekçe: `/refer` + Friendbuy script. Email/PII.  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: shinesty-creators-saral  
Gerekçe: Join the Creators Club → `https://shinesty.trysaral.com/`  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: shinesty-b2b-custom-orders  
Gerekçe: Custom Orders → `https://www.shinestyforbusiness.com/`  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: shinesty-student-discount  
Gerekçe: `/student-discount` üçüncü parti doğrulama (PII) olabilir.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: shinesty-start-return  
Gerekçe: `/pages/returns-and-exchanges` "Start Return" — iade portalı / PII. Tıklanmadı.  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: shinesty-myshopify-not-storefront  
Gerekçe: `https://shinesty.myshopify.com/` home → `/account/login`. Müşteri vitrini www Next.js. Liquid section walk yapılmadı.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: shinesty-announcement-close-banner  
Gerekçe: İlk yüklemede `Close banner` butonu görüldü; dismiss sonrası kalıcı announcement bar doğrulanmadı.  
Öneri: leftover — pixel yok  
Karar: onay bekliyor

---

ADAY: shinesty-searchspring  
Gerekçe: PLP/search `searchspringResponse` + `searchspring-tracking` script. Filtre chip All/With Fly/No Fly PLP `filtreGoster` delta; ayrı şema yok.  
Öneri: app leftover  
Karar: onay bekliyor

---

ADAY: shinesty-keepcart  
Gerekçe: Cart drawer `cdn.keepcart.co/headless-theme.js`, host `z-[2147483001]`. `/cart.js` www'de 404. 768'de home empty drawer aynı oturumda ATC'yi yutuyor.  
Örnekler: header cart / The Blender ATC  
Öneri: üçüncü parti headless cart  
Karar: onay bekliyor

---

ADAY: shinesty-boa-oos-notify  
Gerekçe: `/products/apex-boa-boxers` tüm size `img[alt=sold out]`. Size tık → He Gone. But Will Return! + Notify Me email. PII doldurulmadı.  
Örnekler: https://www.shinesty.com/products/apex-boa-boxers  
Öneri: PII stop  
Karar: onay bekliyor
