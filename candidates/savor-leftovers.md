# Savor leftovers / adaylar

*Kaynak:* https://savor-theme-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* `Shopify.theme.name` **Updated copy of Savor demo store 3.2.0** · id `141564117043` · `schema_name` **Savor** · `schema_version` **3.4.0** · `theme_store_id` **3626** · role `main`  
*Shop:* `se-horizon7-en-erc6.myshopify.com`  
*Tarih:* 2026-08-17 · CRO interact 2026-08-19

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: savor-404  
Gerekçe: `/pages/this-does-not-exist-qante-savor` ve `/this-does-not-exist-qante-savor` title “404 Not Found”. “PAGE NOT FOUND / The link may be incorrect, or the page has been removed. / CONTINUE SHOPPING” + alt `product_list_dFVKeV`. Taksonomide 404 pageType yok. Claiming: `page-content-main` not-found.  
Örnekler: https://savor-theme-demo.myshopify.com/pages/this-does-not-exist-qante-savor  
Öneri: leftover — taxonomy 404 yok  
Karar: onay bekliyor

---

ADAY: savor-404-routes  
Gerekçe: Aynı 404 şablon: `/pages/about` · `/pages/contact-us` · `/blogs/recipes` · `/blogs/journal`.  
Örnekler: https://savor-theme-demo.myshopify.com/pages/about  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: savor-footer-utilities  
Gerekçe: `#shopify-section-sections--18561684701235__footer_utilities` ~81px “© 2026 Savor, Powered by Shopify”. Footer kolonları `custom_section_76dqAh` alındı.  
Örnekler: https://savor-theme-demo.myshopify.com/  
Öneri: leftover — utilities şeridi  
Karar: onay bekliyor

---

ADAY: savor-search-title-band  
Gerekçe: `/search?q=sauce` `#…__search` ~178px “SEARCH RESULTS / Search”. Sonuç ızgarası `__main` alındı.  
Örnekler: https://savor-theme-demo.myshopify.com/search?q=sauce  
Öneri: leftover — başlık bandı  
Karar: onay bekliyor

---

ADAY: savor-search-tea-empty-grid  
Gerekçe: `/search?q=tea` title “3 results found” ama `__main` “NO PRODUCTS FOUND. Try using fewer filters…”. Muhtemel article/page sonuç; ürün ızgarası boş. Claiming sorgu `sauce` (31 ürün).  
Örnekler: https://savor-theme-demo.myshopify.com/search?q=tea  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: savor-menu-768  
Gerekçe: 768 `summary[aria-label=Menu]` 0×0. Header desktop nav: Shop / About / Recipes + Search/Account/Cart. Mega 768/1440. Hamburger yalnız 375.  
Örnekler: https://savor-theme-demo.myshopify.com/  
Öneri: leftover — 768 drawer yok  
Karar: onay bekliyor

---

ADAY: savor-quick-add-choose  
Gerekçe: Home The Original CHOOSE → `dialog.quick-add-modal` 864×616 (The Original $9.49, Bottle Pack Size, ADD TO CART). Claiming: `product-showcase-grid-featured` `open`. `global-quick-view` observation yazılmadı (şema uydurma yok; mevcut schemaId için ayrı obs keşif). PLP/cart/related aynı dialog.  
Örnekler: https://savor-theme-demo.myshopify.com/  
Öneri: leftover — global-quick-view obs yok  
Karar: onay bekliyor

---

ADAY: savor-returns-sibling  
Gerekçe: `/pages/return-policy` aynı `template--18561684602931__main` RTE. Claiming policy: shipping.  
Örnekler: https://savor-theme-demo.myshopify.com/pages/return-policy  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: savor-plp-siblings  
Gerekçe: `/collections/all-products` (34) · `/collections/all` (34) · `/collections/dipping-sauces` (5) · `/collections/gifts` (7) · `/collections/merch` (10) aynı banner+grid şablon. Claiming: barbecue-sauces (16).  
Örnekler: https://savor-theme-demo.myshopify.com/collections/all-products  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: savor-campfire-tee-size  
Gerekçe: `/products/campfire-tee` Size S–3XL. Claiming PDP: The Original Bottle Pack Size 1→2.  
Örnekler: https://savor-theme-demo.myshopify.com/products/campfire-tee  
Öneri: leftover — kardeş varyant  
Karar: onay bekliyor

---

ADAY: savor-404-product-list  
Gerekçe: 404 altı `#…__product_list_dFVKeV` The Original / Sweet Pineapple CHOOSE. Home featured ile aynı dil.  
Örnekler: https://savor-theme-demo.myshopify.com/pages/this-does-not-exist-qante-savor  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: savor-discount-field  
Gerekçe: Dolu cart drawer ve cart sayfasında “Discount +” satırı. Kupon açılmadı / yazılmadı (PII/ödeme yakını).  
Örnekler: https://savor-theme-demo.myshopify.com/cart  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: savor-sticky-atc  
Gerekçe: PDP `sticky-add-to-cart` / `.sticky-add-to-cart__bar` fixed 600×74 “The Original 1 Bottle $9.49 ADD TO CART (1)”. Kaydırınca viewport dibinde. `capture-interaction` viewport `scrollTo(0,0)` barı kaçırır. product-info-main içinde; yeni şema yok.  
Örnekler: https://savor-theme-demo.myshopify.com/products/the-original-japanese-barbecue-sauce  
Öneri: leftover — capture tuzağı  
Karar: onay bekliyor

---

ADAY: savor-cro-absent  
Gerekçe: Resmi demoda countdown / compare / before-after / quiz / bundle / newsletter popup / size guide / stock scarcity / FAQ accordion **yok**. Observation da yok — interact şema uydurmaz. Reviews: about tek Yumi alıntı (ok yok). Hero: tek slayt, hero kutusunda ok yok.  
Örnekler: https://savor-theme-demo.myshopify.com/  
Öneri: leftover — yok  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Account / `shopify-account` header sağda — login tıklanmadı
- Checkout / Buy it now / Shop Pay — dur
- Footer “WE SEND TASTY EMAILS” + contact form — submit yok (PII)
- Video PLAY — tıklandı; `<video>` yok, kutu aynı — changed yok
- Search facet = PLP; claiming barbecue-sauces
- Native `/policies/*` — sayfa şablonları alındı
- Collections index “HOME PAGE” kiremit (`/collections/frontpage`) — claiming grid’te duruyor
- Kart slideshow Next — src değişmedi
