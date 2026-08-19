# Prestige leftovers / adaylar

*Store:* https://prestige-theme-allure.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/prestige  
*Tema (görülen, uydurulmadı):* **Prestige** · `schema_name` **Prestige** · `schema_version` **11.4.0** · `theme_store_id` **null** · id `124951035967` · role `main` · shop `prestige-theme-allure.myshopify.com`  
*Preset:* Allure — resmi Theme Store preview  
*Tarih:* 2026-08-19 · CRO leftover interact (envanter zaten vardı)

Şema icat edilmedi. Observation yazılan tipler burada tekrarlanmaz. Kardeş preset (Signature / Couture / Vogue / Strass) bu tur değil.

---

ADAY: prestige-theme-store-id-null  
Gerekçe: Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: prestige-countdown-expired  
Gerekçe: Home `#…__92fa7990-0b34-40c3-b31e-e2f8ffa853c0` LIMITED TIME / Super Sale. `countdown-timer` “00 Day : 00 Hours : 00 Min : 00 Sec” (expires Nov 25, 2026 aria). Dismiss yok. Shop now → `/collections/sale` (sayfa değişir). Collection `#…__9d96b9ac-7745-4d80-a0e9-f5a76db9f092` BLACK FRIDAY — “DAY : HOURS : MIN : SEC” rakamsız. Tick/changed yok.  
Örnekler: home + `/collections/women-1` `promo-banner-countdown`  
Öneri: leftover — kullanıcı kontrolü yok; CTA sayfa değiştirir  
Karar: onay bekliyor

---

ADAY: prestige-newsletter-pii  
Gerekçe: Home `#…__newsletter` KEEP ME UPDATED / `input[name='contact[email]']` E-mail. Newsletter submit PII — dur. `input` state yok.  
Örnekler: https://prestige-theme-allure.myshopify.com/ `#shopify-section-template--15179705352255__newsletter`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: prestige-newsletter-popup  
Gerekçe: Global `newsletter-popup` overlay. Önceki Allure walk’ta aday. Gönderilmedi.  
Örnekler: home overlay  
Öneri: leftover — PII overlay  
Karar: onay bekliyor

---

ADAY: prestige-contact-pii  
Gerekçe: Contact Name / E-mail / Message + Send message. Subject→Order çekildi (PII değil). FAQ altı formda Subject yok — Name/E-mail/Message dur.  
Örnekler: `/pages/contact` · `/pages/faq-new` contact form  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: prestige-ugc-grid-static  
Gerekçe: Home `#…__afdf0585-4f26-4e6b-b876-998aacab30ca` JOIN US `@leoetviolette` multi-column. Buton/link yok. 375 `snap-x` kaydırma state değil. `media-shop-the-feed` Allure’da yok.  
Örnekler: home footer-group multi-column  
Öneri: leftover — in-page kontrol yok  
Karar: onay bekliyor

---

ADAY: prestige-cro-schemas-absent  
Gerekçe: Diskte şema var, Allure observation yok: `commerce-tools-products-bundle` · `comparison-quick-table` · `product-finder-quiz` · `media-shop-the-feed`. Uydurulmadı.  
Örnekler: —  
Öneri: leftover — section yok  
Karar: onay bekliyor

---

ADAY: prestige-faq-kategori-toc  
Gerekçe: 1440 `a.faq__toc-item` Theme Info / Product & Care / Order / Delivery & Returns. Product & Care tık → `is-active` taşır, soru listesi istif durur (scroll-to-anchor). 375 TOC 0×0; grup başlıkları istif. Accordion `changed` zaten var; kategori karesi karışmasın diye çekilmedi.  
Örnekler: https://prestige-theme-allure.myshopify.com/pages/faq-new  
Öneri: leftover — TOC highlight  
Karar: onay bekliyor

---

ADAY: prestige-testimonial-tek-thumb  
Gerekçe: Home GQ→FARFETCH çekildi. PDP yalnız `@wendyswan`. About yalnız Léo Dominguez. Blog `/blogs/news/how-to-choose-your-business-bag` scan: tek `carousel-navigation` “Violette Polchi — Co-founder”. İkinci slayt yok.  
Örnekler: PDP / about / blog-post `testimonial-quote-carousel`  
Öneri: leftover — tek alıntı  
Karar: onay bekliyor

---

ADAY: prestige-before-after-view-product  
Gerekçe: Slider sol Almond green / sağ Blue denim “View product” → `/products/le-dalia-…`. Tıklanmadı (PDP). Cursor + 23× ArrowRight `changed` (12× 1440/375 az kaydı).  
Örnekler: home `before-after`  
Öneri: leftover — CTA sayfa değiştirir  
Karar: onay bekliyor

---

ADAY: prestige-sibling-presets  
Gerekçe: Signature / Couture / Vogue / Strass ayrı todo. Bu tur yalnız resmi Allure.  
Örnekler: `todo/prestige-signature.md` …  
Öneri: leftover — kardeş preset  
Karar: onay bekliyor
