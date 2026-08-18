# Heritage leftovers / adaylar

*Store:* https://theme-heritage-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Updated copy of Heritage demo store 3.2.0** · `schema_name` **Heritage** · `schema_version` **3.4.0** · `theme_store_id` **3624** · role `main` · id `149503737910` · shop `se-horizon8-en-0xw5.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/heritage — Free · by Shopify · Horizon family  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

İsim **3.2.0**, `schema_version` **3.4.0** — ikisi de vitrinde okundu; sürüm uydurulmadı.

---

ADAY: heritage-footer-utilities  
Gerekçe: Sibling `#…__footer_utilities` — “© 2026 Heritage, Powered by Shopify”. Newsletter/kolon footer ayrı observation.  
Örnekler: https://theme-heritage-demo.myshopify.com/  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: heritage-menu-768-desktop  
Gerekçe: 768 hamburger `summary[aria-label=Menu]` 0×0. Men/Women/Accessories masaüstü nav. Drawer yalnız 375 (46×46).  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — 768 hamburger yok  
Karar: onay bekliyor

---

ADAY: heritage-search-header-section  
Gerekçe: `/search?q=wool` sibling `#…__search` (search-page-input-component, “Search results” + input). Sonuç ızgarası `search-results` observation. Ayrı şema yok.  
Örnekler: https://theme-heritage-demo.myshopify.com/search?q=wool  
Öneri: leftover — Horizon `search-header`  
Karar: onay bekliyor

---

ADAY: heritage-search-chair  
Gerekçe: `/search?q=chair` title “1 result”; `__main` “No products found. Try using fewer filters…”. Katalog sorgusu `wool` (43).  
Örnekler: https://theme-heritage-demo.myshopify.com/search?q=chair  
Öneri: leftover — boş/yanlış sonuç karesi ayrıca çekilmedi  
Karar: onay bekliyor

---

ADAY: heritage-404-routes  
Gerekçe: Aynı 404 (`main` Page not found + Our bestsellers product_list): `/pages/about` `/pages/contact-us` `/pages/faq-page` `/blogs/journal` `/blogs/blog` + rastgele path. Observation `not-found/page-content-main` + product-list.  
Örnekler: https://theme-heritage-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: heritage-plp-template-repeats  
Gerekçe: `/collections/shop-mens` ve diğer kategori koleksiyonları aynı `section` + `main` şablon. Yazılan: `/collections/all` (82).  
Örnekler: https://theme-heritage-demo.myshopify.com/collections/shop-mens  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: heritage-quick-add-dialog  
Gerekçe: `quick-add-dialog` / `quick-add-component` kartta “Choose”. Overlay adayı; `global-quick-view` zorlanmadı.  
Örnekler: home bestsellers / PLP kart  
Öneri: leftover — quick-add ≠ quick-view şema  
Karar: onay bekliyor

---

ADAY: heritage-account-drawer  
Gerekçe: Header `shopify-account` / Log in (`customer_authentication/redirect`). Tıklanmadı.  
Örnekler: header-actions  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: heritage-pii-stop  
Gerekçe: Contact Submit + checkout + login tıklanmadı. Footer’da newsletter input yok.  
Örnekler: `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: heritage-generic-section-wrapper  
Gerekçe: Home heading, PLP “Products”, about heading, blog post — Horizon `section.liquid` + nested theme-blocks. Tip `section` — yeni şema açılmadı; mevcut tipe map.  
Örnekler: `#…__section_jW4eNe` · `#…__section` Products  
Öneri: leftover — generic wrapper, şema yok  
Karar: onay bekliyor

---

ADAY: heritage-fit-guide-garment-care  
Gerekçe: Footer Support: `/pages/fit-guide` `/pages/garment-care`. Walk listesinde yok; about/contact/FAQ yazıldı. Aynı page ailesi beklenir.  
Örnekler: footer Support  
Öneri: leftover — ekstra page  
Karar: onay bekliyor

---

ADAY: heritage-about-hero-no-text  
Gerekçe: `/pages/about-us` `hero_MCVHpm` ~500px görsel; metin/CTA/ok/dot yok. `hero-slideshow` + delta.  
Örnekler: https://theme-heritage-demo.myshopify.com/pages/about-us  
Öneri: mevcut şema + delta  
Karar: observation yazıldı
