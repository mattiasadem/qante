# Purevea leftovers / adaylar

*Store:* https://purevea-theme-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **purevea-v2** · `schema_name` **Purevea** · `schema_version` **2.0.0** · `theme_store_id` **null** · id `189012377878` · role `main` · shop `purevea-theme-demo.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: purevea-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` Purevea · `schema_version` 2.0.0 · name `purevea-v2`.  
Örnekler: https://purevea-theme-demo.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: purevea-divider-zero  
Gerekçe: Home `#shopify-section-template--27619329081622__divider_jDwgFW` h=0.  
Örnekler: https://purevea-theme-demo.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-newsletter-popup  
Gerekçe: overlay `__popup_promotion_xWtYAp` · Treat Your Lips. Kapalı h=0. Email / PII — açılmadı, submit yok.  
Örnekler: https://purevea-theme-demo.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: purevea-quick-view  
Gerekçe: overlay `__quick-view` h=0. Interact listesinde yok.  
Örnekler: https://purevea-theme-demo.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-product-compare  
Gerekçe: overlay `__product-compare` · Compare products. PLP Compare + `#global-compare` yok; leftover.  
Örnekler: https://purevea-theme-demo.myshopify.com/collections/best-sellers  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-facet-drawer  
Gerekçe: PLP/search `#FacetDrawer` (Price / Availability / Color / Product Type / Size). Interact listesinde yok.  
Örnekler: https://purevea-theme-demo.myshopify.com/collections/best-sellers  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-1440-hamburger  
Gerekçe: `.gsp-header__menu-toggle` `d-lg-none`. 1440 `#offcanvasMenuMobile` transform kapalı. Interact yalnız 375/768.  
Örnekler: https://purevea-theme-demo.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-buy-it-now  
Gerekçe: PDP accelerated checkout / Check out. Checkout envanter dışı; tıklanmadı.  
Örnekler: https://purevea-theme-demo.myshopify.com/products/herbal-hair-oil  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: purevea-find-a-store  
Gerekçe: `/pages/find-a-store` footer/nav’da var. Zorunlu walk dışı.  
Örnekler: https://purevea-theme-demo.myshopify.com/pages/find-a-store  
Öneri: leftover — walk dışı sayfa  
Karar: onay bekliyor

---

ADAY: purevea-collections-landing-extras  
Gerekçe: `/collections` tasarlanmış landing (hero + 3× product_list_with_image + collection_with_image + marquee). Walk 3 obs (hero / ilk ürün listesi / collection_marquee). Diğer tekrarlar leftover.  
Örnekler: https://purevea-theme-demo.myshopify.com/collections  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-collections-all  
Gerekçe: `/collections/all` Best Sellers PLP ile aynı şablon (page_title + collection_marquee + main). Walk PLP = `/collections/best-sellers`.  
Örnekler: https://purevea-theme-demo.myshopify.com/collections/all  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-skincare-blog  
Gerekçe: `/blogs/skincare/zero-waste-beauty-where-to-start` ve `/blogs/skincare` kartları var. Walk blog = `/blogs/news`.  
Örnekler: https://purevea-theme-demo.myshopify.com/blogs/skincare/zero-waste-beauty-where-to-start  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-pdp-alt-templates  
Gerekçe: Diğer PDP handle’lar `?view=horizontal-thumbnails` / `split-gallery`; Color (Butter lip balm) / Size (Detox Shampoo 320→400ml) / Fragrance (Rice Water Conditioner). Walk PDP = Herbal Hair Oil Hair type.  
Örnekler: https://purevea-theme-demo.myshopify.com/products/detox-shampoo  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: purevea-gift-card  
Gerekçe: `/products/purevea-gift-card` nav/kartlarda. Walk PDP değil.  
Örnekler: https://purevea-theme-demo.myshopify.com/products/purevea-gift-card  
Öneri: leftover  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/faq`  
`/blogs/journal`  
`/pages/does-not-exist-qante`

About = `/pages/about-us`. Contact = `/pages/contact-us` ( `/pages/contact` 200, aynı şablon). FAQ = `/pages/faqs`. Blog = `/blogs/news`.

---

## Bilinçli atlananlar

- `/account` / header Account — auth  
- Checkout / Buy it now / cart Check out / Coupon / Order note / Gift wrap  
- Newsletter Subscribe / contact Submit Now (PII)  
- Popup Treat Your Lips (PII)  
- Preset / Theme Features / Product Gallery alt sayfalar (Theme Store satış)  
- Find a store  
