# Ignite leftovers / adaylar

*Store:* https://benchmark-electronics-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **DEV - DO NOT EDIT** · `schema_name` **Ignite** · `schema_version` **2.6.1** · `theme_store_id` **null** · role `main` · id `129323303010` · shop `benchmark-electronics-demo.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/ignite — $380 · Benchmark  
*Tarih:* 2026-08-20

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: ignite-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing Benchmark Ignite $380 — sayısal id storefront'ta yok. Tema adı vitrinde **DEV - DO NOT EDIT** (geliştirme kopyası).  
Örnekler: https://benchmark-electronics-demo.myshopify.com/  
Öneri: leftover — listing id okunmadı  
Karar: onay bekliyor

---

ADAY: ignite-dev-theme-name  
Gerekçe: `Shopify.theme.name` = **DEV - DO NOT EDIT** — Theme Store vitrin adı Ignite değil; muhtemelen merchant preview kopyası. `schema_name` Ignite · `schema_version` 2.6.1 doğru.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — walk metadata notu  
Karar: onay bekliyor

---

ADAY: ignite-image-banner-tab-sibling-hidden  
Gerekçe: `#shopify-section-template--15968305610850__image_banner_JyNFje` sibling banner — `display:none` tüm viewport'larda; `section_tabs` Jade Green radio tıklansa da görünür olmadı. Cobalt Violet banner `#…__image_banner_jnrrDg` observation (`editorial-image-with-text-overlay`).  
Örnekler: home tab panel 2  
Öneri: leftover — gizli / bağlanmamış tab içeriği  
Karar: onay bekliyor

---

ADAY: ignite-global-stickers  
Gerekçe: `#shopify-section-sections--15968301219938__stickers` — GOING FAST / NEW / BEST SELLER / PREORDER / Editor's Pick rozet şeridi. Her sayfada global group; mevcut şema yok.  
Örnekler: home + PDP + PLP footer group  
Öneri: leftover — product badge overlay sistemi  
Karar: onay bekliyor

---

ADAY: ignite-global-popup  
Gerekçe: `#shopify-section-sections--15968301219938__popup_Hepgfg` — boş/popup section group. Newsletter veya promo modal adayı; Mod A'da tetiklenmedi.  
Örnekler: tüm sayfalar  
Öneri: leftover — dismiss edilmedi  
Karar: onay bekliyor

---

ADAY: ignite-footer-copyright-ribbon  
Gerekçe: `#shopify-section-sections--15968300105826__ribbon_banner_eHQMEb` — copyright / imagery protected metni. `footer-columns-newsletter` altında sibling.  
Örnekler: home footer  
Öneri: leftover — legal ribbon  
Karar: onay bekliyor

---

ADAY: ignite-search-header-section  
Gerekçe: `/search?q=headphone` sibling `#shopify-section-template--15968305905762__header` — "Search" başlık + intro metin. Sonuç ızgarası `search-results` observation.  
Örnekler: https://benchmark-electronics-demo.myshopify.com/search?q=headphone  
Öneri: leftover — ayrı search hero  
Karar: onay bekliyor

---

ADAY: ignite-blog-list-header  
Gerekçe: `/blogs/news` sibling `#shopify-section-template--15968305250402__header` — "Grapevine / You heard it here first." Blog list `blog-list-main` ayrı.  
Örnekler: blog list  
Öneri: leftover — blog hero band  
Karar: onay bekliyor

---

ADAY: ignite-collections-index-header  
Gerekçe: `/collections` sibling `#shopify-section-template--15968305643618__header` — "Collections" başlık. Grid `collection-nav-grid` ayrı.  
Örnekler: collections index  
Öneri: leftover — page hero  
Karar: onay bekliyor

---

ADAY: ignite-ribbon-banner-repeat  
Gerekçe: `ribbon_banner` section tipi home/PDP/PLP'de tekrar ediyor (sign-in discount, newsletter, contact CTA). Bazıları `lead-capture-newsletter-band` olarak observation; PDP altındaki Materials / Questions / Exclusive discounts şeritleri ayrı instance olarak envanterlenmedi (Mod A kapsam dışı kısa şeritler).  
Örnekler: PDP `#…__ribbon_banner_LPyFMY`, `#…__ribbon_banner_TgTEGz`  
Öneri: leftover — ince promo ribbon yoğunluğu  
Karar: onay bekliyor

---

ADAY: ignite-pdp-alert-selling-fast  
Gerekçe: `#shopify-section-template--16056720064610__alert_gXf8Ti` — "Selling fast! Get yours while you can." sticky/alert band PDP altında.  
Örnekler: /products/pixa-9  
Öneri: leftover — urgency alert  
Karar: onay bekliyor

---

ADAY: ignite-pdp-spacers  
Gerekçe: `#…__spacer_BTRgaW` gibi boş spacer section'ları — şema adayı değil.  
Örnekler: PDP  
Öneri: leftover — layout spacer  
Karar: onay bekliyor

---

ADAY: ignite-menu-768-desktop  
Gerekçe: 768'de hamburger summary görünür olabilir; 1440 inline mega nav. Drawer yalnız mobil test edildi.  
Örnekler: `#menu-drawer`  
Öneri: leftover — 768 drawer davranışı interact sonrası  
Karar: onay bekliyor

---

ADAY: ignite-blog-handle-mismatch  
Gerekçe: Blog list URL `/blogs/news` ama başlık **Grapevine**; makale URL `/blogs/grapevine/…`. Handle tutarsızlığı walk notu.  
Örnekler: blog list + post  
Öneri: leftover — URL/handle  
Karar: onay bekliyor

---

ADAY: ignite-faq-page-404  
Gerekçe: Nav'da FAQs link var; `/pages/faq` → 404 Page not found. FAQ içeriği PDP `faq-collapsible-tabs` + Theme Features sayfasında olabilir.  
Örnekler: https://benchmark-electronics-demo.myshopify.com/pages/faq  
Öneri: leftover — broken FAQ page link  
Karar: onay bekliyor
