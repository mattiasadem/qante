# Western Rise leftovers / adaylar

*Store:* https://westernrise.com  
*Tema (görülen, uydurulmadı):* `Shopify.theme.name` 03.06.26|ID - Wind down: Store closed · id 190987993456 · `schema_name` Impact · `schema_version` 4.4.0 · `theme_store_id` 1190 · role main  
*Shop:* `western-rise.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: westernrise-store-closed  
Gerekçe: Canlı vitrin Shopify password. `/` 302 → `/password` (200). Theme adı “Wind down: Store closed”. `data-template=password`. Password input / `form[action*='password']` yok — coming-soon kapısı değil, kapalı dükkân mesajı. Tek section Impact slideshow.  
Örnekler: https://westernrise.com/ · https://westernrise.com/password  
Öneri: leftover — password pageType taksonomide yok; `hero-slideshow` + delta  
Karar: onay bekliyor

---

ADAY: westernrise-walk-gated  
Gerekçe: PDP / PLP / search / cart / about / help / policy / blog / 404 / UCP hepsi **302** `/password`. `products.json` · `collections.json` · `cart.js` **401**. `sitemap.xml` / `sitemap_products_1.xml` **404**. `western-rise.myshopify.com` 301 → westernrise.com (yine password).  
Örnekler: https://westernrise.com/collections/all · https://westernrise.com/search?q=pants · https://westernrise.com/cart · https://westernrise.com/pages/about · https://westernrise.com/blogs/news · https://westernrise.com/this-page-does-not-exist-qante  
Öneri: leftover — walk buraya kadar; kanıtsız şablon yazılmadı  
Karar: onay bekliyor

---

ADAY: westernrise-no-chrome  
Gerekçe: Password HTML’de `store-header` / `#shopify-section-header` / footer section yok. Mega, hamburger, predictive search, cart drawer, announcement yok. Impact `drawer-default-template` / `popover-default-template` body’de (kullanılmayan chrome); observation yazılmadı.  
Örnekler: https://westernrise.com/password  
Öneri: leftover — global overlay yok  
Karar: onay bekliyor

---

ADAY: westernrise-404-gated  
Gerekçe: `/this-page-does-not-exist-qante` 302 password. Marka 404 şablonu görünmedi. Taksonomide 404 pageType yok.  
Örnekler: https://westernrise.com/this-page-does-not-exist-qante  
Öneri: ertele — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: westernrise-pii-mailto  
Gerekçe: Tek link `mailto:help@westernrise.com`. Form yok (Klaviyo snippet HTML’de comment). Account/checkout yok. Mailto tıklanmadı / mail gönderilmedi.  
Örnekler: https://westernrise.com/password  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: westernrise-dormant-apps  
Gerekçe: Head’de Okendo reviews settings + Klaviyo comment + gizli `#countdown-template`. Password sayfasında widget/section olarak render yok.  
Örnekler: https://westernrise.com/password  
Öneri: leftover — üçüncü parti, görünür değil  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Theme Store Impact (1190) 4.4.0 — mevcut Impact envanteri (Sound/Balance/Cocoon) ayrı; bu vitrin kapalı password
- `console.log` cart boş nesne (USD, item_count 0) — UI yok
- Checkout / shop.app skill — walk dışı
