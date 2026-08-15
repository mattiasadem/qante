# Recess leftovers / adaylar

*Store:* https://takearecess.com  
*Tema (görülen, uydurulmadı):* `window.Shopify` / `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` **yok**  
*Platform:* Nuxt (Netlify) + Sanity (`umoebutk` / `production`) + Shopify Storefront API (`takearecess.myshopify.com`, API 2023-07)  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: takearecess-not-theme-store  
Gerekçe: Canlı vitrin klasik Shopify theme değil. `window.Shopify` undefined. Theme Store adı / schema_name / schema_version / theme_store_id görünmedi — uydurulmadı. Commerce `takearecess.myshopify.com` GraphQL + cart origin.  
Örnekler: https://takearecess.com/  
Öneri: leftover — platform notu  
Karar: onay bekliyor

---

ADAY: takearecess-404  
Gerekçe: `/this-page-does-not-exist-qante` → `/404` status 404. “page not found / not sure where it is, but it's definitely not here / RECESS THIS WAY”. Taksonomide 404 pageType yok.  
Örnekler: https://takearecess.com/404 · https://takearecess.com/search?q=mood · https://takearecess.com/cart  
Öneri: ertele — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: takearecess-search-absent  
Gerekçe: Header’da search ikonu / `aria-label` / predictive overlay yok (probe boş). `/search?q=mood` marka 404. `global-predictive-search` / `search-results` observation yazılmadı.  
Örnekler: https://takearecess.com/search?q=mood  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: takearecess-no-cart-page  
Gerekçe: `/cart`, `/cart.js`, `/cart.json`, `/products.json` 404. Sepet yalnız `<dialog id="cart">`. `cart-page-main` yok.  
Örnekler: https://takearecess.com/cart  
Öneri: leftover — drawer obs yeterli  
Karar: onay bekliyor

---

ADAY: takearecess-no-hover-mega  
Gerekçe: 1440 nav düz “shop” Invoker button → `#shop-nav-menu` dialog. Hover mega panel yok. Header observation + delta.  
Örnekler: https://takearecess.com/  
Öneri: leftover — delta yeterli  
Karar: onay bekliyor

---

ADAY: takearecess-destini-locator  
Gerekçe: `/where-to-buy` `#destini-locator` (~500px). Başlık alındı; gömme locator alınmadı.  
Örnekler: https://takearecess.com/where-to-buy  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: takearecess-pii-forms  
Gerekçe: Newsletter `#signup`, customer-support, media, careers, partnerships, wholesale APPLY — e-posta/PII. Doldurulmadı / gönderilmedi. Login `takearecess.myshopify.com/account/login` — auth, walk dışı.  
Örnekler: https://takearecess.com/customer-support · https://takearecess.com/media · https://takearecess.com/careers  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: takearecess-no-blog  
Gerekçe: Sitemap’te `/blogs/*` yok. Blog list/post observation yazılmadı.  
Örnekler: sitemap.xml  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: takearecess-shopall-sibling-rows  
Gerekçe: `/shop/collections/shopall` 4 `.collection-page__section` (Mood / Zero Proof / hemp / powders). Yalnız Mood bloğu + header alındı; kardeş satırlar aynı şablon.  
Örnekler: https://takearecess.com/shop/collections/shopall  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: takearecess-sparkling-plp-same  
Gerekçe: `/sparkling-water` ve `/shop/sparkling-water` Mood PLP ile aynı kit (`header#header` + `.product-grid`). Ayrı observation yok.  
Örnekler: https://takearecess.com/sparkling-water  
Öneri: leftover — aynı template  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- `/shop/buy-now/subscribe` `#buy-now-main` frequency + flavor picker — commerce builder; hero/features/faq alındı, picker ayrı şema değil
- Gift note cart dialog (email) — PII, açılmadı
- Amazon “available on” PDP CTA — off-site, tıklanmadı
- Affiliate APPLY / giveaways `/sign-up/*` — PII / kampanya, walk dışı
- `takearecess.myshopify.com` → vitrin 301; `recess.myshopify.com` 404
- Checkout Shopify origin — duruldu
