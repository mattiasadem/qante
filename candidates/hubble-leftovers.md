# Hubble (Speedo) — leftovers

*Walk:* https://hubble-nutrition.myshopify.com/ · preset `default`  
*Tema:* Hubble-nutrition V-1.2.0 · schema_name hubble-nutrition 1.2.0 · theme_store_id null  
*Password:* `1` (Speedo ürün sayfası; aynı host)

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hubble-pdp-empty-section  
Gerekçe: PDP `#shopify-section-template--21797543608628__1690524448438712db` yükseklik 0, metin/görsel yok.  
Örnekler: https://hubble-nutrition.myshopify.com/products/hubble-nutrition-mushroom-chai  
Öneri: leftover — boş placeholder  
Karar: onay bekliyor

---

ADAY: hubble-cart-footer  
Gerekçe: `/cart` `#shopify-section-template--21797543084340__cart-footer` boş sepette 0-size. Dolu hâlde ayrı footer olabilir; statik empty’de yok.  
Örnekler: https://hubble-nutrition.myshopify.com/cart  
Öneri: leftover — Dawn cart-footer  
Karar: onay bekliyor

---

ADAY: hubble-native-policy  
Gerekçe: `/policies/privacy-policy` title Privacy policy; shopify-section yalnız announcement/header/footer. Gövde native policy kabı, `policy-page-layout` üç kolon değil.  
Örnekler: https://hubble-nutrition.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: hubble-blog-empty  
Gerekçe: `/blogs/news` “News” başlığı, yazı yok. `/blogs/news/articles.json` 404. Observation `blog-list-main` boş kare. Blog post yok.  
Örnekler: https://hubble-nutrition.myshopify.com/blogs/news  
Öneri: leftover — içerik yok  
Karar: onay bekliyor

---

ADAY: hubble-account-checkout  
Gerekçe: Header Log in `/account/login`. Checkout / newsletter Submit. PII / ödeme.  
Örnekler: https://hubble-nutrition.myshopify.com/account/login  
Öneri: leftover — PII  
Karar: onay bekliyor

---

## Capture notları

| Konu | Not |
|---|---|
| Password | Public `1`. Capture `storefrontPassword` + `scripts/unlock-storefront.mjs`. |
| Katalog | Tek ürün Hubble Nutrition Mushroom Chai (30/60/90 Servings, $25/$30). Tek koleksiyon frontpage; Shop = `/collections/all`. |
| Search | `protein` 0; `chai` 1. |
| Header | Mega yok. 1440 inline; hamburger Dawn large-up. |
| Title | Storefront title “hubble nutrition (password: 1)” — vendor demo. |
