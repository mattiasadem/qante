# Pitch leftovers / adaylar

*Store:* https://theme-pitch-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* `Shopify.theme.name` **Updated copy of Pitch demo store 3.2.0** · id `183686005031` · `schema_name` **Pitch** · `schema_version` **3.4.0** · `theme_store_id` **3620** · role `main`  
*Shop:* `se-horizon2-en-2v6j.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/pitch — Free · by Shopify · Horizon family  
*Tarih:* 2026-08-18

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: pitch-footer-utilities  
Gerekçe: Sibling `#…__footer_utilities` ~65px “© 2026 Pitch, Powered by Shopify” + sosyal. Newsletter kolonları `migrated_footer_content` alındı.  
Örnekler: home footer group  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: pitch-menu-768  
Gerekçe: 768 `summary[aria-label=Menu]` 0×0. Shop / Bundles / Bestsellers masaüstü nav + mega. Drawer yalnız 375 (46×46).  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — 768 hamburger yok  
Karar: onay bekliyor

---

ADAY: pitch-search-header-section  
Gerekçe: `/search?q=serum` sibling `#…__search` (search-page-input-component, “Search results” + input ~181px). Sonuç ızgarası `search-results` observation.  
Örnekler: https://theme-pitch-demo.myshopify.com/search?q=serum  
Öneri: leftover — Horizon search-header  
Karar: onay bekliyor

---

ADAY: pitch-404-routes  
Gerekçe: Aynı 404 (`main` Page not found + Discover something new): `/pages/about` `/pages/contact-us` `/blogs/journal` `/blogs/blog` `/pages/shipping-policy` `/pages/privacy-policy` `/policies/refund-policy` `/policies/terms-of-service` `/policies/shipping-policy`.  
Örnekler: https://theme-pitch-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: pitch-plp-siblings  
Gerekçe: `/collections/all` (57 Products banner) · `/collections/makeup` · `/collections/bundles` · `/collections/best-sellers` · `/collections/moisturizers` aynı banner+grid. Claiming: `/collections/skincare` (20).  
Örnekler: https://theme-pitch-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: pitch-quick-add-choose  
Gerekçe: Home / PLP / cart / 404 kartlarda `Choose` + `quick-add-component` / `quick-add-dialog`. Tıklanmadı. `global-quick-view` zorlanmadı.  
Örnekler: home Bestsellers Gentle Body Wash  
Öneri: leftover — quick-add ≠ quick-view  
Karar: onay bekliyor

---

ADAY: pitch-account-drawer  
Gerekçe: Header `shopify-account` / Log in. Tıklanmadı.  
Örnekler: header-actions  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: pitch-pii-stop  
Gerekçe: Footer newsletter Sign up + contact Submit + checkout + login tıklanmadı. CRO interact form/footer yalnız `initial`.  
Örnekler: footer · `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: pitch-faq-rte  
Gerekçe: `/pages/faq` title FAQ. `#…__main` düz RTE (H3 + P): return / final sale / order / made / shipping. `details` 0 · `accordion-custom` yok. Walk dışı; `faq-collapsible-tabs` interact ile uydurulmadı. En yakın inventoried accordion: PDP `product-info-tabs`.  
Örnekler: https://theme-pitch-demo.myshopify.com/pages/faq  
Öneri: leftover — ilk envanter `/qante-discover`  
Karar: onay bekliyor

---

ADAY: pitch-pdp-accordion-body  
Gerekçe: PDP `section_dEGUdG` accordion. Interact: kapalı (+) → Natural ingredients açık (−) + gövde metni. 375/768/1440. `faq-collapsible-tabs` açılmadı.  
Örnekler: `/products/gentle-body-wash` · `product-info-tabs.changed.natural-acik.*.png`  
Öneri: leftover kapandı — changed yakalandı  
Karar: onay bekliyor

---

ADAY: pitch-single-variant-home  
Gerekçe: Home bestsellers Age Serum / Lipstick / Gel Moisturizer varyantsız. Claiming PDP Gentle Body Wash (Scent). Daily Sunscreen SPF 50 Size 25ml $19 / 50ml $38 ayrı leftover.  
Örnekler: `/products/age-serum` · `/products/daily-sunscreen-spf-50`  
Öneri: leftover — aynı product-info-main şablon  
Karar: onay bekliyor

---

ADAY: pitch-search-pitch-query  
Gerekçe: `/search?q=pitch` 56 results (marka). Claiming sorgu `serum` (17).  
Örnekler: https://theme-pitch-demo.myshopify.com/search?q=pitch  
Öneri: leftover — kardeş sorgu  
Karar: onay bekliyor

---

ADAY: pitch-about-equal-mosaic  
Gerekçe: `/pages/about-us` `hero_nN99Ra` ve `hero_PnwYVm` iki eşit görsel, overlay metin yok. Claiming `editorial-image-with-text-overlay` + delta. `media-mosaic-grid` layout equal daha yakın; yeni şema yok.  
Örnekler: https://theme-pitch-demo.myshopify.com/pages/about-us  
Öneri: leftover — overlay zorlandı  
Karar: onay bekliyor

---

ADAY: pitch-announcement-second-slide  
Gerekçe: Interact Next: “Sign up for our newsletter” → “Just launched: bestselling skincare bundles”. 375/768/1440. Timer / gün / saat yok — `promo-banner-countdown` uydurulmadı. Sign up `<a>` tıklanmadı.  
Örnekler: `#…__header_announcements_kcHY6p` · `promo-announcement-bar.changed.sonraki-slayt.*.png`  
Öneri: leftover kapandı — ikinci slayt + countdown yok  
Karar: onay bekliyor

---

ADAY: pitch-cro-types-absent  
Gerekçe: `observations/pitch/` içinde `faq-collapsible-tabs` · `promo-banner-countdown` · `before-after-slider` · `commerce-tools-products-bundle` · `comparison-quick-table` · `product-finder-quiz` · `testimonial-quote-carousel` · `media-shop-the-feed` · `media-scrolling-gallery` yok. `/pages/quiz` `/pages/compare` `/pages/before-after` `/pages/testimonials` `/pages/countdown` 404. `/collections/bundles` PLP (3 kart), bundle builder değil. `/pages/faq` RTE. Interact şema uydurmaz.  
Örnekler: home roster + leftover URL yoklaması  
Öneri: leftover — ilk envanter `/qante-discover`  
Karar: onay bekliyor

---

ADAY: pitch-generic-section-wrapper  
Gerekçe: Home hero / collection pair / about text / PDP accordion Horizon `section` + nested theme-blocks. Tip `section` — yeni şema açılmadı; mevcut tipe map.  
Örnekler: `#…__section_6PnLrM` · `#…__section_eeFGpP`  
Öneri: leftover — generic wrapper  
Karar: onay bekliyor
