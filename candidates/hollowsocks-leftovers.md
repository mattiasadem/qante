# Hollow Socks leftovers / adaylar

*Store:* https://hollowsocks.com · *Tema (görülen):* followhollow/main · schema_name Shopify Theme Lab 1.1.0 · custom (`theme_store_id` null)  
*Shop:* followhollow.myshopify.com · theme id 151218847913  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hollowsocks-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` ve `/pages/about` → 404 “404 Page Not Found” (`#shopify-section-template--20352645333161__main`, 136px). Taksonomide 404 pageType yok.  
Örnekler: https://hollowsocks.com/pages/this-page-does-not-exist-qante · https://hollowsocks.com/pages/about  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: hollowsocks-cart-page-stub  
Gerekçe: GET `/cart` 200 ama `#shopify-section-template--20352646217897__main` ve `main#main-content` height 0. Asıl sepet `[data-cart-drawer].ds-cart-drawer`. `cart-page-main` yok.  
Örnekler: https://hollowsocks.com/cart  
Öneri: leftover — drawer observation home’da  
Karar: onay bekliyor

---

ADAY: hollowsocks-blog-empty  
Gerekçe: `/blogs/news` ve `/blogs/news/why-we-believe-in-alpaca-socks` template `__main` height 0; yalnız social gallery + footer görünür. Sitemap’te 2023 yazıları var.  
Örnekler: https://hollowsocks.com/blogs/news  
Öneri: leftover — kırık/boş blog şablonu  
Karar: onay bekliyor

---

ADAY: hollowsocks-junip-reviews  
Gerekçe: PDP `#…__ds_junip_reviews_y6GXqp` 4.77 / 3,782 reviews + histogram (Junip). `/pages/reviews` yalnız “REVIEWS” başlığı (209px); widget hydrate olmadı. `/pages/all-reviews` yoklandı değil. `testimonial-quote-carousel` zorlama (filtre/histogram).  
Örnekler: https://hollowsocks.com/products/crew-performance-alpaca-socks · https://hollowsocks.com/pages/reviews  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: hollowsocks-gorgias-help  
Gerekçe: `/pages/faqs` ve `/pages/contact-us` `ds_custom_liquid` + Gorgias iframe (`help-center.gorgias.help`, `hcUrl`). Contact form gönderilmedi (PII). Wrapper observation var.  
Örnekler: https://hollowsocks.com/pages/faqs · https://hollowsocks.com/pages/contact-us  
Öneri: leftover — iframe help-center  
Karar: onay bekliyor

---

ADAY: hollowsocks-advertorial-lps  
Gerekçe: `sitemap_pages` ~111 URL; çoğu `10r-*` / `a63-*` / `lp-*` / `voc-advetorial` / `comp-advertorial` reklam/listicle. Chrome walk’ta merch şablonları; ayrı 3vp yok.  
Örnekler: https://hollowsocks.com/pages/10r-compression-v1 · https://hollowsocks.com/pages/comp-advertorial  
Öneri: ertele — roster  
Karar: onay bekliyor

---

ADAY: hollowsocks-compression-pdp-template  
Gerekçe: `/products/alpaca-compression-socks` ilk probe’da shopify-section olarak yalnız header/footer/social görüldü (orta blok map edilmedi). Crew PDP ayrı `ds_pdp_hero` şablonu.  
Örnekler: https://hollowsocks.com/products/alpaca-compression-socks  
Öneri: leftover — ikinci PDP şablonu  
Karar: onay bekliyor

---

ADAY: hollowsocks-quiz  
Gerekçe: `/pages/compression-quiz-v1` sitemap’te. Form/PII riski; Start yoklandı değil.  
Örnekler: https://hollowsocks.com/pages/compression-quiz-v1  
Öneri: leftover  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok)

`/pages/about` → `/pages/about-us`  
`/pages/contact` → `/pages/contact-us`  
`/pages/faq` → `/pages/faqs`  
`/pages/help` · `/pages/support` · `/pages/returns` · `/pages/privacy` · `/pages/terms` · `/pages/blog` · `/pages/journal`

---

## Diğer leftover (aday değil)

- Home `intro_reveal_Eqqjhj` height 0
- PLP `plp_callout_BNgx8J` height 0
- Search filters section (`SHOW FILTER + SORT` / VIEW AS MODEL|PRODUCT) — ayrı 3vp yok
- Sub-nav görsel şerit yalnız <640 (`sm:h-0`)
- Header mega drawer DOM (`.ds-meganav`) — nav `data-meganav-ignore`
- Freegifts / BOGOS / Recart overlay (PII yok)
- Newsletter footer — doldurulmadı
- Native `/policies/*` stub (pages/privacy-policy observation var)
