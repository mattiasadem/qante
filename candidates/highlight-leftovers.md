# Highlight leftovers / adaylar

*Store (walk URL):* https://highlight-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/highlight  
*Tema (görülen, uydurulmadı):* **highlight-build/highlight** · `schema_name` **Highlight** · `schema_version` **4.0.2** · `theme_store_id` **null** · id `126683480225` · role `main`  
`Shopify.shop` = `highlight-theme.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: highlight-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` Highlight · `schema_version` 4.0.2 · name `highlight-build/highlight`.  
Örnekler: https://highlight-theme.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: highlight-canonical-host  
Gerekçe: Walk URL `highlight-theme.myshopify.com` home’da `highlight-theme-main.myshopify.com`’a yönlenir. `Shopify.shop` hâlâ `highlight-theme.myshopify.com`. Aynı vitrin; başka preset gezilmedi.  
Örnekler: robots.txt / sitemap `highlight-theme-main.myshopify.com`  
Öneri: leftover — canonical host  
Karar: onay bekliyor

---

ADAY: highlight-no-mega  
Gerekçe: 1440 nav linkleri `#site-menu-sidebar` içinde (kapalı 0px). Hover Reflective panel açmadı. Görsel kolon / promo mega yok. `#menu-open-button` 1440’ta da görünür.  
Örnekler: `#site-menu-sidebar` · `li.has-submenu`  
Öneri: leftover — düz drawer nav ≠ image mega  
Karar: onay bekliyor

---

ADAY: highlight-predictive-empty  
Gerekçe: `#site-search-sidebar input[data-js-search-input]` `reflective` / `tote` yazıldı. `[data-js-search-results]` boş kaldı. Tam sayfa `/search?q=reflective` 13 sonuç.  
Örnekler: `search-form` · `/search?q=reflective`  
Öneri: leftover — predictive öneri yok / bozulmuş  
Karar: onay bekliyor

---

ADAY: highlight-cart-clear-cf  
Gerekçe: GET `/cart/clear` Cloudflare 429 / challenge. GET `/cart/clear.js` JSON 200 ama sonraki HTML `/cart` “Verifying your connection”. Interact boş hâl = ATC + `a.remove`.  
Örnekler: `/cart/clear`  
Öneri: leftover — capture tuzağı  
Karar: onay bekliyor

---

ADAY: highlight-qty-input  
Gerekçe: Drawer ve cart sayfada plus/minus yok. `input.qty[name=updates[]]` + Enter.  
Örnekler: `#site-cart-sidebar input.qty`  
Öneri: leftover — adet kutusu  
Karar: onay bekliyor

---

ADAY: highlight-popups  
Gerekçe: overlay `#shopify-section-popups` `modal-box` h=0. Email / PII — açılmadı.  
Örnekler: https://highlight-theme.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: highlight-quick-add  
Gerekçe: Kartlarda ADD TO CART / CHOOSE OPTIONS · `quick-add-to-cart` / `quick-view-product`. Overlay interact listesinde yok.  
Örnekler: home Most Popular / Last items / PLP  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: highlight-buy-it-now  
Gerekçe: PDP `BUY IT NOW` / `shopify-payment-button`. Checkout dur.  
Örnekler: `/products/copy-of-reflective-sweatshirt`  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: highlight-pdp-extras  
Gerekçe: Writable sweatshirt sibling: Some wisdom (388px), Want a new message? (1582), Other features (757), Walk the Earth (220), Explore other collections (635), recommendations 0px. Home tiplerinin tekrarı — ayrı capture yok.  
Örnekler: `#shopify-section-template--15101007397025__*`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: highlight-about-repeats  
Gerekçe: `/pages/unusual-usual-things` görsel-only (`1632125386ececde1e` 689px, `1632125507a926bace` 675px), About Us/Our network kolon, ek paragraflar. Yazılan: başlık + intro + Martynas + Eglė.  
Örnekler: `/pages/unusual-usual-things`  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: highlight-help-faq  
Gerekçe: `/pages/help-faq` 200 — rich text + Frequently asked questions + Instructional video + Other FAQ. Footer link. Zorunlu walk about/contact; envanterlenmedi. `/pages/help` `/pages/faq` 404.  
Örnekler: https://highlight-theme.myshopify.com/pages/help-faq  
Öneri: leftover — walk dışı  
Karar: onay bekliyor

---

ADAY: highlight-sizing-delivery  
Gerekçe: `/pages/sizing-fit` tablo + Camera cover featured ×2. `/pages/delivery` Shipping & Returns. `/pages/general-questions` `/pages/sizing-chart` sitemap. Walk dışı.  
Örnekler: footer LINKS  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: highlight-404-featured  
Gerekçe: 404 altında `Explore our products` css-slider (socks/t-shirt/buttons). `page-content-main` yazıldı; slider leftover.  
Örnekler: `#…__16329014459fa374f1`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: highlight-cart-upsell  
Gerekçe: `/cart` sibling `Check out these as well` css-slider. `cart-page-main` ayrı.  
Örnekler: `#…__1632226136d713a8bd`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: highlight-frontpage-vs-apparel  
Gerekçe: `/collections/frontpage` = All products (27). Walk PLP = `/collections/apparel` (11). Aynı `__main` şablon.  
Örnekler: `/collections/all` yok; all = frontpage  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: highlight-vertical-slider  
Gerekçe: Home hero `vertical-slider` + `video-background-element`. 1440 ~4340px — slaytlar yığılmış. `hero-slideshow` + delta.  
Örnekler: `#…__163186463508de9885`  
Öneri: leftover — dikey slider ≠ yatay slideshow  
Karar: onay bekliyor

---

ADAY: highlight-pii-stop  
Gerekçe: Footer newsletter Submit + contact form + blog comment + Account + checkout tıklanmadı.  
Örnekler: footer · `/pages/contact-us` · cart CHECKOUT  
Öneri: PII / checkout / account stop  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/contact`  
`/pages/faq`  
`/pages/help`  
`/blogs/journal`  
`/pages/does-not-exist-qante`

About = `/pages/unusual-usual-things` (`/pages/about-us` aynı). Contact = `/pages/contact-us`. Blog = `/blogs/news`.

---

## Bilinçli atlananlar

- `/account` / header Account — auth  
- Checkout / BUY IT NOW / cart CHECKOUT / Order instructions  
- Newsletter Submit / contact Send / blog comment (PII)  
- Help / FAQ, Sizing & Fit, Shipping & Returns, Typography, Test  
- Gift / diğer PDP’ler — walk PDP = Writable sweatshirt Color  
- Lookbook / hotspot yok  
- Locale / country switcher tıklanmadı  
