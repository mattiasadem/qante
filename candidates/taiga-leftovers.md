# Taiga leftovers / adaylar

*Store:* https://taiga-demo-sage.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Taiga / LIVE update** · `schema_name` **Taiga** · `schema_version` **8.1.0** · `theme_store_id` **null** · id `159278366958` · role `main`  
*Shop:* `taiga-demo-sage.myshopify.com`  
*Theme Store:* https://themes.shopify.com/themes/taiga — Woolman · paid  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: taiga-footer-divider  
Gerekçe: Sibling `#shopify-section-sections--21784160895214__acaa7136-605d-409a-8d0d-fea5ba8c2f3a` — 118px SVG `divider-graphics` (turuncu→yeşil gradient). Metin yok. Footer ayrı observation.  
Örnekler: home / her şablon  
Öneri: leftover — dekoratif divider, yeni şema değil  
Karar: onay bekliyor

---

ADAY: taiga-empty-home-uuids  
Gerekçe: Home `#…__292dac11…` `#…__e52cc19f…` `#…__42425789…` 0px boş.  
Örnekler: https://taiga-demo-sage.myshopify.com/  
Öneri: leftover — boş instance  
Karar: onay bekliyor

---

ADAY: taiga-newsletter-modal  
Gerekçe: `#…__modal-newsletter` 0px “Subscribe to win!” `newsletter-modal`. Açılmadı / submit yok (PII).  
Örnekler: her şablon  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: taiga-theme-features-page  
Gerekçe: `/pages/theme-features` 26 section — Woolman pazarlama (Built by Woolman, FAQ highlights, testimonials, closing CTA). Walk about/contact; bu sayfa envanterlenmedi.  
Örnekler: https://taiga-demo-sage.myshopify.com/pages/theme-features  
Öneri: leftover — tema satış sayfası  
Karar: onay bekliyor

---

ADAY: taiga-about-repeats  
Gerekçe: About’ta `editorial-image-with-text` tekrarları (Highly converting PDP / Chosen by forerunners / For brands and developers). Bir instance yazıldı.  
Örnekler: `/pages/about`  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: taiga-plp-backpacks-extras  
Gerekçe: `/collections/backpacks` banner + “Our recommendations” slider + aynı hotspots/image-with-text. Yazılan: `/collections/all` (88).  
Örnekler: https://taiga-demo-sage.myshopify.com/collections/backpacks  
Öneri: leftover — aynı PLP ailesi  
Karar: onay bekliyor

---

ADAY: taiga-search-zero-chair  
Gerekçe: `/search?q=chair` → 0 results + Continue shopping. Yazılan sorgu `backpack` (30).  
Örnekler: https://taiga-demo-sage.myshopify.com/search?q=chair  
Öneri: leftover — boş sonuç karesi ayrıca çekilmedi  
Karar: onay bekliyor

---

ADAY: taiga-news-empty  
Gerekçe: `/blogs/news` aynı Journal şablon; `__main` 80px boş. Yazılan: `/blogs/journal`.  
Örnekler: https://taiga-demo-sage.myshopify.com/blogs/news  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: taiga-article-navigation  
Gerekçe: Blog post sibling `#…__article-navigation` — Previous article / Choosing the right backpack / Back to blog.  
Örnekler: `/blogs/journal/venture-into-the-forest-of-the-north`  
Öneri: leftover — ince nav, yeni şema değil  
Karar: onay bekliyor

---

ADAY: taiga-404-routes  
Gerekçe: Aynı 404 (`main` Page not found + Go back / Search / Continue shopping): `/pages/about-us` `/pages/contact-us` `/blogs/blog` + rastgele path.  
Örnekler: https://taiga-demo-sage.myshopify.com/pages/this-page-does-not-exist-xyz-taiga  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: taiga-backpack-variant-radios  
Gerekçe: `/products/backpack-202-black` `variant-selects` Color radio (Black / Green / M05 Woodland). Walk PDP Jääkäri M — renk kardeş ürün handle.  
Örnekler: https://taiga-demo-sage.myshopify.com/products/backpack-202-black  
Öneri: leftover — aynı product-info-main, farklı varyant UI  
Karar: onay bekliyor

---

ADAY: taiga-product-recommendations-zero  
Gerekçe: PDP `#…__the-product-recommendations` 0px (`product-recommendations` host). Choose your modules ayrı yazıldı.  
Örnekler: Jaakari / Backpack 202  
Öneri: leftover — hydrate olmadı  
Karar: onay bekliyor

---

ADAY: taiga-quick-add  
Gerekçe: `quick-add` / `quick-buy` home featured + PLP + look. Overlay açılmadı.  
Örnekler: home featured_collection  
Öneri: leftover — `global-quick-view` yazılmadı  
Karar: onay bekliyor

---

ADAY: taiga-header-overlay-zero  
Gerekçe: Home `#…__header` shopify-section 0px; görünür kutu `#MainHeader` 100px `overlay`. Observation `#MainHeader` + viewport.  
Örnekler: home  
Öneri: leftover — overlay header  
Karar: observation yazıldı

---

## Bilinçli atlananlar

- `/account` — auth
- Checkout / Shop Pay
- Footer newsletter submit + modal “Subscribe to win!”
- Contact form Send
- Country/locale değiştirme
- `/pages/theme-features` tam envanter
