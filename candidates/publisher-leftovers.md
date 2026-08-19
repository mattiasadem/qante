# Publisher leftovers / adaylar

*Store:* https://theme-publisher-demo.myshopify.com  
*Tema (görülen):* `[Publisher] Theme Store demo (latest)` · schema_name Dawn 7.0.1 · Shopify first-party  
*Theme Store:* https://themes.shopify.com/themes/publisher · by Shopify · Free  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: publisher-404  
Gerekçe: `/pages/this-does-not-exist-xyz` → HTTP 404, `#shopify-section-template--23705063555381__main` “404 / Page not found / Continue shopping”. Taksonomide 404 pageType yok. Home’a düşmez.  
Örnekler: https://theme-publisher-demo.myshopify.com/pages/this-does-not-exist-xyz  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: publisher-announcement-bar-empty  
Gerekçe: `#shopify-section-announcement-bar` her sayfada var, yükseklik 0, metin yok. `promo-announcement-bar` şeması mevcut ama kanıt kutusu yok (zero-size).  
Örnekler: home ve tüm şablonlar  
Öneri: boş chrome — observation yok  
Karar: onay bekliyor

---

ADAY: publisher-theme-store-id  
Gerekçe: `Shopify.theme.theme_store_id` canlı demoda `null`. Theme Store listing Publisher / Shopify / Free doğrulandı; sayısal `1380` HTML’de okunmadı.  
Öneri: id’yi uydurma — Theme Store slug `publisher`  
Karar: not

---

## Sitemap’te duran, walk dışı

`/collections/apparel` · `/collections/merch` · `/collections/accessories` · `/collections/all` — aynı collection şablonu (books örneği)  
Diğer blog yazıları: `/blogs/news/appearance-ny-art-book-fair` · FACT Magazine — aynı `blog-post-main`  
`sitemap_agentic_discovery.xml` — chrome dışı

## CRO şema listesi — Publisher'da gözlenmedi (2026-08-19 interact)

Diskte mevcut, bu demoda observation yok:

| schemaId | Not |
|---|---|
| before-after-slider | Hiçbir sayfada yok |
| commerce-tools-products-bundle | Yok |
| promo-banner-countdown | Yok |
| lead-capture-newsletter-band | Footer newsletter `footer-columns-newsletter` şemasında; ayrı band yok |
| comparison-quick-table | Yok |
| product-finder-quiz | Yok |
| testimonial-quote-carousel | Yok |
| media-shop-the-feed | Yok |
| media-scrolling-gallery | Yok |

Gözlenen CRO: `faq-collapsible-tabs` (policy) · `lead-capture-form` (contact, input PII stop)

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Buy it now / kupon  
- Footer newsletter + contact form **submit** (PII)  
- Header mega / hamburger — demoda yok (footer nav)  
- Boş announcement-bar  
- 404 şablonu (aday)  
- Tekrarlayan shipping bant + studio banner (home’da bir kez)
