# Pamos leftovers / adaylar

*Store:* https://pamos.com → https://www.pamos.com  
*Tema (görülen, uydurulmadı):* **Pamos** 11.0.1 · Sage/Roots · text domain `pamos` · `/wp-content/themes/pamos/`  
*Shopify.theme / schema_name:* **yok** — WordPress + WooCommerce 10.7.0  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: pamos-not-shopify  
Gerekçe: Storefront `window.Shopify` undefined. Theme header `style.css`: Theme Name Pamos, Version 11.0.1, Theme URI https://roots.io/sage/. Body `wp-theme-pamos theme-pamos woocommerce-js`. QANTE walk yine mevcut section tiplerine observation bağladı; platform Shopify değil.  
Örnekler: https://www.pamos.com/  
Öneri: leftover — platform notu  
Karar: onay bekliyor

---

ADAY: pamos-age-gate  
Gerekçe: Her sayfada modal “WELCOME / YOU MUST BE 21+ TO VISIT THIS WEBSITE.” `button.age-confirm` = I AM 21+ · I AM NOT 21+. Cookie `ageVerified`. Taksonomide age-gate pageType/kategori yok. `/are-you-at-least-21-years-of-age/` ayrı sayfa.  
Örnekler: https://www.pamos.com/ · https://www.pamos.com/are-you-at-least-21-years-of-age/  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: pamos-404  
Gerekçe: `/this-page-does-not-exist-qante/` → “OOPS! How did that happen??? We will clean this up. Let's fill your cup. HOME”. Taksonomide 404 pageType yok.  
Örnekler: https://www.pamos.com/this-page-does-not-exist-qante/  
Öneri: ertele — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: pamos-store-locator-iframe  
Gerekçe: `/locations/` `#finder` iframe (brand-finder-sec, ~1000px). FIND PAMOS intro + 4 claim kolon alındı; gömme harita/locator alınmadı.  
Örnekler: https://www.pamos.com/locations/  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: pamos-wholesale-form  
Gerekçe: `/stores-and-distributors/` BUY WHOLESALE formu (Company, Type of Business, Resale Certificate, State, sales@pamos.com). PII — doldurulmadı / gönderilmedi.  
Örnekler: https://www.pamos.com/stores-and-distributors/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: pamos-header-search-absent  
Gerekçe: Header’da search ikonu / predictive overlay yok. Arama `/?s=spirit` WP search. `global-predictive-search` observation yazılmadı.  
Örnekler: https://www.pamos.com/?s=spirit  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: pamos-no-mega  
Gerekçe: 1440 nav düz link (ORDER NOW → /nationwide/, LOCATIONS, RECIPES, WHOLESALE). Hover mega panel yok. `navigation-header-mega` observation + delta.  
Örnekler: https://www.pamos.com/  
Öneri: leftover — delta yeterli  
Karar: onay bekliyor

---

ADAY: pamos-intersite-soda-seltzer  
Gerekçe: Top bar THC COCKTAILS & SPIRITS / THC SODA / THC SELTZER — kardeş vitrin switcher. `promo-announcement-bar` olarak alındı; soda/seltzer siteleri walk dışı. Home `.notif-tab` VPACK (“FREE 10MG 8-PACK WITH CODE: VPACK”) height 0 after scroll — ayrı capture yok.  
Örnekler: https://www.pamos.com/nationwide/  
Öneri: leftover  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- FunnelKit cart (`#fkcart-modal`) — `global-cart-drawer` boş+dolu alındı; Shopify `/cart.js` yok, ATC yalnız UI. Qty +/− drawer’da göründü, `changed` çekilmedi.
- WooCommerce Blocks `/cart/` boş sayfa alındı; dolu hâl drawer
- Nationwide All ızgara ~8913px — resmi crop viewport tavanı
- Privacy ~15321px — viewport clip
- `/terms-of-use/` 404; `/terms-of-services/` WP error; gerçek `/terms/`
- `/product-category/spirits/` 404; kategori `/product-category/premium-spirit/`
- `/shop/` → `/nationwide/`
- Footer WHY PAMOS `/cannabis` → `/twist/` “COCKTAILS WITH A TWIST” (about-brand alındı)
- Contact `/contact-us/` form observation var, submit yok
- Newsletter Klaviyo submit yok
- Account `/login` — dur
- Complianz cookie banner (Accept) — dismiss
- PDP WooCommerce reviews (`#reviews`) — `testimonial-quote-carousel` zorlama, leftover
- Golden Hour giveaway, clearance, starter-pack landing, educational legality/subscriptions kardeş sayfalar
- Prop 65, opt-out-preferences, privacy-statement-us (Complianz)
- drinkpamos.com cookie-statement linkleri
