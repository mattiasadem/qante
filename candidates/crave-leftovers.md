# Crave leftovers / adaylar

*Store:* https://theme-crave-demo.myshopify.com  
*Tema (görülen):* [Crave] Theme store demo (latest) · schema_name Dawn · schema_version 2.5.0 · theme_store_id **null**  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: crave-404-template  
Gerekçe: `/this-page-does-not-exist-xyz-404`, `/pages/about`, `/pages/about-us`, `/blogs/journal`, `/policies/privacy-policy` → HTTP 404 + `#shopify-section-template--17357908050154__main` (“Page not found” / Continue shopping). Taksonomide 404 pageType yok.  
Örnekler: https://theme-crave-demo.myshopify.com/this-page-does-not-exist-xyz-404  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: crave-cart-notification  
Gerekçe: Add-to-cart sonrası Dawn `<cart-notification>` / `#cart-notification` header popup (“Item added to your cart”). `global-cart-drawer` sağ panel/çekmece; bu tema drawer taşımıyor. Sepet yönetimi `/cart` (`cart-page-main`).  
Örnekler: PDP Add to cart → header dialog  
Öneri: overlay varyantı veya Dawn-specific popup — şema icat yok  
Karar: onay bekliyor

---

ADAY: crave-shared-page-template  
Gerekçe: `/pages/ingredients`, `/pages/nutritional-values`, `/pages/copy-of-nutritional-values` (Shipping) document title değişir; section id’ler Meet us ile aynı (`template--17357908672746__…`) ve içerik “WE ARE / Bringing loud + proud…”. Sayfaya özel gövde yok.  
Örnekler: https://theme-crave-demo.myshopify.com/pages/ingredients  
Öneri: ertele — meet-us observation yeterli  
Karar: onay bekliyor

---

ADAY: crave-news-empty  
Gerekçe: `/blogs/news` aynı blog şablonu (`template--17357908115690__main`) h≈84 — yalnız “News”, yazı yok. Asıl blog `/blogs/recipes`.  
Örnekler: https://theme-crave-demo.myshopify.com/blogs/news  
Öneri: leftover — recipes observation var  
Karar: onay bekliyor

---

ADAY: crave-product-recommendations-zero  
Gerekçe: PDP `product-recommendations` section h=0 (sisig + crewneck). Hydrate olmadı / boş.  
Örnekler: https://theme-crave-demo.myshopify.com/products/the-omsom-crewneck  
Öneri: ertele — kanıt yok  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok)

`/pages/about` · `/pages/about-us` (gerçek about = `/pages/meet-us`)  
`/blogs/journal`  
`/policies/privacy-policy` (ve diğer /policies/* denendi: 404 şablonu)  
Bilinmeyen path → 404 şablonu (home’a düşmez)

## Sitemap’te duran, walk dışı

`/collections/combo-packs` · `/collections/other-goodies` — meal-starters ile aynı aile (banner + grid + recipes + newsletter + Hungry for more). Hungry section id meal-starters ile paylaşılıyor.  
`/collections/frontpage`  
Apparel PDP (`omsom-muay-thai-shorts`) crewneck ile aynı şablon; ikisi de Sold out.  
Diğer recipe article’lar — bir post envanterlendi.

## Bilinçli atlananlar

- `/account/login` — auth, envanter dışı  
- Account / checkout / e-posta / newsletter submit / iletişim Send  
- Country/region selector (footer) — tıklanmadı  
- Shop dropdown içindeki koleksiyon `<a>` — sayfaya kaçar, tıklanmadı  
- Heat Lover's Set slayt CTA — navigate, interact değil

---

## CRO interact leftover (2026-08-19)

**Disk şemaları demo'da observation yok:** before-after-slider · commerce-tools-products-bundle · promo-banner-countdown · faq-collapsible-tabs · comparison-quick-table · product-finder-quiz · media-shop-the-feed · media-scrolling-gallery.

**Observation var, anlamlı state yok:**
- `testimonial-quote-carousel` — Dawn multicolumn statik; carousel affordance 0 (`changed` missing)
- `lead-capture-newsletter-band` — home kanonik; email fill/submit PII stop (`input` missing)
- `lead-capture-form` — contact; fill/submit PII stop (`input` missing)

**FAQ / reviews / countdown / quiz / bundle / scarcity:** demo'da yok (şema icat edilmedi).
