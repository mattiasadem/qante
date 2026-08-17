# Tinker leftovers / adaylar

*Store:* https://theme-tinker-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **Updated copy of Tinker demo store** · `schema_name` **Tinker** · `schema_version` **3.4.0** · `theme_store_id` **3627** · id `183829266735` · role `main`  
*Shop:* `se-horizon6-en-ixxd.myshopify.com`  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: tinker-404  
Gerekçe: `/pages/this-page-does-not-exist-xyz-tinker` → HTTP 404 “Page not found / The link may be incorrect, or the page has been removed. / Continue shopping” + You may also like product_list. Taksonomide 404 pageType yok.  
Örnekler: https://theme-tinker-demo.myshopify.com/pages/this-page-does-not-exist-xyz-tinker  
Öneri: candidate — `page-content-main` + `product-showcase-related` observation var  
Karar: onay bekliyor

---

ADAY: tinker-footer-utilities  
Gerekçe: `#shopify-section-sections--26058348724527__footer_utilities` 57px “© 2026 Tinker, Powered by Shopify”. Kolon footer ayrı observation. İnce copyright bandı yeni şema değil.  
Örnekler: https://theme-tinker-demo.myshopify.com/  
Öneri: leftover — footer delta  
Karar: onay bekliyor

---

ADAY: tinker-heading-only-bento-section  
Gerekçe: Home `#…__section_MTafUP` Horizon generic `section` + nested theme-blocks. Yalnız “Make Your Workspace Yours” (145px). Kart/bento child yok. `editorial-rich-text` yazıldı.  
Örnekler: https://theme-tinker-demo.myshopify.com/  
Öneri: leftover — boş nested iskelet  
Karar: observation yazıldı

---

ADAY: tinker-mega-yok  
Gerekçe: 1440 Organizers hover — `.mega-menu` / submenu host yok. Düz `menu-list__link` → `/collections/the-gather-collection`.  
Örnekler: https://theme-tinker-demo.myshopify.com/  
Öneri: mevcut şema + delta  
Karar: observation yazıldı

---

ADAY: tinker-faq-not-collapsible  
Gerekçe: `/pages/faq` beş Q&A düz metin (return / final sale / when order / where made / shipping). `details` / accordion yok. `faq-collapsible-tabs` + delta.  
Örnekler: https://theme-tinker-demo.myshopify.com/pages/faq  
Öneri: mevcut şema + delta  
Karar: observation yazıldı

---

ADAY: tinker-menu-768  
Gerekçe: 768 hamburger `summary[aria-label=Menu]` 0px. Desktop nav (Organizers…Decor) görünür. 375 drawer + nested Gather product cards.  
Örnekler: https://theme-tinker-demo.myshopify.com/  
Öneri: leftover — 768 open yok  
Karar: onay bekliyor

---

ADAY: tinker-quick-add  
Gerekçe: `quick-add-dialog` / `quick-add-modal` her şablonda host. Bu walk’ta açılmadı (interact listesinde yok).  
Örnekler: https://theme-tinker-demo.myshopify.com/collections/objects  
Öneri: leftover — `global-quick-view` yazılmadı  
Karar: onay bekliyor

---

## 404 / boş / ince URL’ler

- `/pages/about` — 404
- `/pages/about-us` — 404
- `/pages/contact-us` — 404
- `/blogs/journal` — 404 (`/blogs/news` = Journal)
- `/collections/all` — Products PLP (objects ile aynı template ailesi; objects birincil)
- `/collections/our-story` — 4 ürünlü PLP; about içeriği `/pages/our-story-2`

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / Shop Pay
- Newsletter e-posta submit (footer band her şablonda)
- Contact form Send (Name/Email/Phone/Comment) — PII
- Mega hover — panel yok
- Newsletter bandı her şablonda tekrar (home kanonik)
- Facet/filter drawer PLP (Availability/Price/Color) — walk’ta açılmadı
- Native `/policies/*` Shopify policy URL’leri
