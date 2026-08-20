# Fabric leftovers / adaylar

*Store:* https://theme-fabric-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Updated copy of Fabric demo store 3.2.0** · `schema_name` **Fabric** · `schema_version` **3.4.0** · `theme_store_id` **3622** · role `main` · id `145077665845` · shop `se-horizon5-en-624k.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/fabric — Free · by Shopify · Horizon family  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: fabric-menu-768-desktop  
Gerekçe: 768 hamburger `summary[aria-label=Menu]` 0×0. Womenswear/Menswear/Home masaüstü nav. Drawer yalnız 375.  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — 768 hamburger yok  
Karar: onay bekliyor

---

ADAY: fabric-search-header-section  
Gerekçe: `/search?q=tefnut` sibling `#…__search` (search-page-input-component, “Search” + input). Sonuç ızgarası `search-results` observation. Ayrı şema yok.  
Örnekler: https://theme-fabric-demo.myshopify.com/search?q=tefnut  
Öneri: leftover — Horizon `search-header`  
Karar: onay bekliyor

---

ADAY: fabric-footer-utilities  
Gerekçe: Sibling `#…__footer_utilities` — “© 2026 Fabric, Powered by Shopify”. Newsletter+kolon `footer-columns-newsletter`.  
Örnekler: home footer group  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: fabric-home-divider  
Gerekçe: `#…__divider_WDCL3k` 1px boş `section-background`. İçerik yok.  
Örnekler: home, video ile New Arrivals arası  
Öneri: leftover — spacer, şema değil  
Karar: onay bekliyor

---

ADAY: fabric-404-routes  
Gerekçe: Aynı 404 (`main` Page not found + New Arrivals product_list): `/pages/about` `/pages/about-us` `/pages/contact-us` `/blogs/journal` `/blogs/blog` + rastgele path. About içeriği `/pages/our-story`.  
Örnekler: https://theme-fabric-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: fabric-lookbook-no-hotspot  
Gerekçe: Home carousel “New this season” lookbook slayt + Shop now. Hotspot / ürün pin yok. `media-lookbook-slider` + delta.  
Örnekler: `#…__carousel_LeVxwU`  
Öneri: mevcut şema + delta  
Karar: observation yazıldı

---

ADAY: fabric-faq-not-collapsible  
Gerekçe: `/pages/faq` beş Q&A düz metin. `details` / accordion yok. `faq-collapsible-tabs` + delta.  
Örnekler: https://theme-fabric-demo.myshopify.com/pages/faq  
Öneri: mevcut şema + delta  
Karar: observation yazıldı

---

ADAY: fabric-page-template-repeats  
Gerekçe: `/pages/fit-guide` ve `/pages/materials-care` aynı `…__main` şablon (FAQ ile aynı template id). Yazılan: FAQ.  
Örnekler: https://theme-fabric-demo.myshopify.com/pages/fit-guide  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: fabric-plp-template-repeats  
Gerekçe: `/collections/womenswear-children-only` (97) ve diğer kategori koleksiyonları aynı `section` + `main-collection` şablon. Yazılan: `/collections/all` (6).  
Örnekler: https://theme-fabric-demo.myshopify.com/collections/womenswear-children-only  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: fabric-pdp-related-hydrate  
Gerekçe: İlk probe’da `#…__product_recommendations_UeDczP` img 0 / `data-recommendations-performed=false`. Resmi 3vp capture’da kart hydrate oldu (Shorts + Hamatah SALE).  
Örnekler: https://theme-fabric-demo.myshopify.com/products/tefnut-beach-vest-in-black  
Öneri: leftover — ilk yükleme gecikmesi not edildi  
Karar: observation yazıldı

---

ADAY: fabric-quick-add-dialog  
Gerekçe: `quick-add-component` kartta “Choose”. Overlay adayı; `global-quick-view` zorlanmadı.  
Örnekler: home New Arrivals / PLP / cart related  
Öneri: leftover — quick-add ≠ quick-view şema  
Karar: onay bekliyor

---

ADAY: fabric-native-policy  
Gerekçe: `/policies/privacy-policy` Shopify native policy body. Theme section yok.  
Örnekler: https://theme-fabric-demo.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: fabric-account-login  
Gerekçe: Header/cart “Log in” / `customer_authentication/redirect`. Tıklanmadı.  
Örnekler: header-actions · cart empty  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: fabric-pii-stop  
Gerekçe: Footer email + contact Send + checkout + login tıklanmadı.  
Örnekler: footer · `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: fabric-generic-section-wrapper  
Gerekçe: Video hero, about metin, blog post, contact form Horizon `section.liquid` + nested. Tip `section` — yeni şema açılmadı; mevcut tipe map.  
Örnekler: `#…__section_8zY7P4` · blog-post `#…__section`  
Öneri: leftover — generic wrapper, şema yok  
Karar: onay bekliyor

---

## CRO leftover interact (2026-08-19)

Home / PDP / PLP / our-story / FAQ / contact / fit-guide / materials-care / blog / sale / search taranıldı. Şema icat edilmedi.

| schemaId | Durum |
|---|---|
| `faq-collapsible-tabs` | obs var — düz Q&A, accordion yok · interact `initial` |
| `lead-capture-form` | obs var — interact `initial` · `input` PII stop |
| `footer-columns-newsletter` | obs var — interact `initial` · email fill yok · kolon details kapanmıyor |
| `hero-slideshow` | obs var (home + our-story) — tek kare · interact `initial` |
| `promo-scrolling-marquee` | obs var (home + our-story) — interact `initial` |
| `media-lookbook-slider` | obs var — interact `initial` + `changed` (Next look) · hotspot yok |
| `before-after-slider` | yok — storefront’ta section yok |
| `commerce-tools-products-bundle` | yok |
| `promo-banner-countdown` | yok |
| `comparison-quick-table` | yok (`/pages/fit-guide` gövde “compare” kelimesi; tablo yok) |
| `product-finder-quiz` | yok |
| `testimonial-quote-carousel` | yok |
| `media-shop-the-feed` | yok (“Shop the collection” editorial CTA; UGC/reel yok) |
| `media-scrolling-gallery` | yok — kaydırma lookbook + marquee olarak yazıldı |
| `lead-capture-newsletter-band` | yok (`footer-columns-newsletter` farklı şema) |
