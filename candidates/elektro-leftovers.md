# Elektro leftovers / adaylar

*Store (walk):* https://sonix-electronics-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/elektro-cutting-edge-electronics-shopify-template-o-s-2-0  
*Tema (görülen, uydurulmadı):* **Elektro-v-1-5-0-latest-updates-new-speed** · `schema_name` **Elektro** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `136395325505` · role `main`  
*Shopify.shop:* `sonix-electronics-store-2.myshopify.com`  
*Password:* vendor **"1"** (ürün sayfası + password title). Başka host yok.  
*Tarih:* 2026-09-02

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: elektro-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo üçüncü taraf — Theme Store id uydurulmadı.  
Örnekler: https://sonix-electronics-store-2.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: elektro-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII — submit yok.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: elektro-faq-page-redirect  
Gerekçe: Footer Faq → `/pages/faq` home şablonuna düşüyor (title Elektro home). Ayrı FAQ sayfası yok; home `faq-collapsible-tabs` alındı.  
Örnekler: https://sonix-electronics-store-2.myshopify.com/pages/faq  
Öneri: leftover — bozuk/alias handle  
Karar: onay bekliyor

---

ADAY: elektro-about-us-404  
Gerekçe: `/pages/about` ve `/pages/about-us` 404. Footer About Us = `/pages/about-layout-1`. Layout 2–4 yürünmedi.  
Örnekler: /pages/about-layout-2 · about-layout-3 · about-layout-4  
Öneri: leftover — diğer about layout  
Karar: onay bekliyor

---

ADAY: elektro-contact-layouts  
Gerekçe: `/pages/contact` = contact-layout-1 (aynı template). Layout 2/4/5 yürünmedi.  
Örnekler: /pages/contact-layout-2  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: elektro-contact-map  
Gerekçe: `#shopify-section-template--17206180413505__map_iqhHBB` h≈680. Harita şeması yok — zorlanmadı.  
Örnekler: contact-layout-1 map  
Öneri: leftover — aday kategori/şema  
Karar: onay bekliyor

---

ADAY: elektro-collection-layouts  
Gerekçe: Nav Collection layout 1–3 ayrı PLP vitrin. Walk `/collections/cameras` + `/collections`.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: elektro-wishlist-compare  
Gerekçe: `/pages/wishlist` ve `/pages/compare` boş durum (No products…). Header sayaç 0. Doldurulmadı.  
Öneri: leftover — `global-compare-drawer` zorlanmadı (sayfa, drawer değil)  
Karar: onay bekliyor

---

ADAY: elektro-pdp-empty-section  
Gerekçe: PDP `#shopify-section-template--17206180741185__172137309121bf68f7` h=0.  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: elektro-menu-drawer-1440-zero  
Gerekçe: `#menu-drawer` 1440'te 0px (`data-breakpoint=tablet`). Open yalnız 375/768.  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: elektro-policy-pages  
Gerekçe: Footer Terms / Return / Privacy `/policies/*`. Walk minimumu dışı.  
Öneri: leftover  
Karar: onay bekliyor
