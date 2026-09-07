# Andrea leftovers / adaylar

*Store (walk):* https://women-beauty-7.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/andrea-beauty-care-shopify-beauty-themes-shopify-2-0  
*Tema (görülen, uydurulmadı):* **Andrea V-1.5.0** · `schema_name` **Andrea** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `169140224280` · shop `women-beauty-7.myshopify.com`  
*Preset:* default · *Slug:* andrea  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: andrea-storefront-password  
Gerekçe: Vitrin `/password`. Ürün sayfası “Please enter password 1 to view demo.” Aynı host’ta `1` ile açıldı (`unlock-storefront.mjs`). Title hâlâ “Women Beauty 7 (password: 1)”. Walk leftover’da durmadı.  
Örnekler: https://women-beauty-7.myshopify.com/ · https://speedothemes.com/products/andrea-beauty-care-shopify-beauty-themes-shopify-2-0  
Öneri: leftover — public demo unlock, hesap değil  
Karar: walk’ta kullanıldı · onay bekliyor

---

ADAY: andrea-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Andrea · `schema_version` 1.5.0 · `name` Andrea V-1.5.0. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://women-beauty-7.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: andrea-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Newsletter overlay. PII, dur.  
Örnekler: overlay newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: andrea-wishlist-compare  
Gerekçe: Header 0 Wishlist / 0 Compare + `/pages/wishlist` + `/pages/compare` boş sayfalar + kart/PDP ADD TO WISHLIST / ADD TO COMPARE. Sayfa envanterlenmedi (app/özellik).  
Örnekler: header · product cards · /pages/wishlist · /pages/compare  
Öneri: leftover — wishlist/compare overlay/sayfa  
Karar: onay bekliyor

---

ADAY: andrea-shop-by-category-header  
Gerekçe: Header “SHOP BY CATEGORY” (BEAUTY / SKIN LIGHTENING / BODY LOTION…). Mega Shop’tan ayrı. Ayrı observation yok — header delta.  
Örnekler: `#shopify-section-sections--22863739978008__header`  
Öneri: leftover — header içi kategori paneli  
Karar: onay bekliyor

---

ADAY: andrea-inline-search-1440  
Gerekçe: 1440 `predictive-search.header-search_box` 160×33 görünür. Modal `details-modal.header__search` ayrıca var. Observation modal overlay.  
Örnekler: header  
Öneri: leftover — çift arama yüzeyi  
Karar: onay bekliyor

---

ADAY: andrea-offer-jewelry-copy  
Gerekçe: Home offer_banner “Stud Earrings / Diamond Necklace” mücevher metni beauty vitrinde. Timer DOM yok. `promo-grid-banner` + delta.  
Örnekler: `#shopify-section-template--22863739519256__offer_banner_g7W7Wb`  
Öneri: leftover — demo kopya sapması  
Karar: onay bekliyor

---

ADAY: andrea-cart-footer-empty  
Gerekçe: `/cart` `#shopify-section-template--22863739224344__cart-footer` h=0 boşken.  
Örnekler: /cart  
Öneri: leftover — boş footer  
Karar: onay bekliyor

---

ADAY: andrea-404-aliases  
Gerekçe: `/pages/about` · `/pages/contact-us` · `/pages/faq` · `/pages/our-story` · `/blogs/news/tagged/all` → 404 template. About = `/pages/about-us`. Contact = `/pages/contact`. FAQ = `/pages/faqs`.  
Örnekler: https://women-beauty-7.myshopify.com/pages/about  
Öneri: leftover — yanlış slug  
Karar: onay bekliyor

---

ADAY: andrea-features-nav  
Gerekçe: Header FEATURES `details#Details-HeaderMenu-3.mega-menu`. Yazılı link `#`. Tema satış / özellik menüsü; walk PDP/PLP değil.  
Örnekler: header FEATURES  
Öneri: leftover — tema satış nav  
Karar: onay bekliyor

---

ADAY: andrea-locale-currency  
Gerekçe: Header Country/region USD + language EN/FR/ES/DE. Değiştirilmedi.  
Örnekler: header  
Öneri: leftover — locale  
Karar: onay bekliyor

---

ADAY: andrea-quick-shop  
Gerekçe: Home SHOP SERUM kartlarında QUICK SHOP (`quick-add__submit`). Ayrı `global-quick-view` observation yok — kart action leftover.  
Örnekler: home product-showcase-grid-featured  
Öneri: leftover — quick-add  
Karar: onay bekliyor

---

ADAY: andrea-buy-it-now  
Gerekçe: PDP BUY IT NOW / shopify-payment-button. Checkout — tıklanmadı.  
Örnekler: product-info-main  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: andrea-contact-google-map  
Gerekçe: `/pages/contact` lead-capture-form aynı section içinde Google Map (Workiva, 2900 University Blvd, Ames IA). Form SUBMIT tıklanmadı.  
Örnekler: `#shopify-section-template--22863739683096` civarı / contact lead-capture-form  
Öneri: leftover — form + harita aynı blok  
Karar: onay bekliyor

---

ADAY: andrea-pdp-buybox-accordions  
Gerekçe: product-info-main altında EXTRA INFORMATION / SHIPPING & RETURNS / MATERIALS (ikon +). Ayrı `product-info-tabs` (DESCRIPTION / ADDITIONAL INFORMATION / SHIPPING AND DELIVERY) değil. Interact tabs'ta; buy-box accordion açılmadı.  
Örnekler: product-info-main  
Öneri: leftover — buy-box accordion  
Karar: onay bekliyor

---

ADAY: andrea-you-may-like-upsell  
Gerekçe: ADD TO CART sonrası 1440 ortada YOU MAY LIKE modal (ürün listesi + ADD TO CART). 375 cart drawer içinde YOU MAY LIKE akordeon. Yeni şema yok.  
Örnekler: ATC → global-cart-drawer filled  
Öneri: leftover — ATC upsell overlay  
Karar: onay bekliyor

---

ADAY: andrea-drawer-shop-link  
Gerekçe: `#HeaderDrawer-shop` yazılı `<a href="/collections/all">`. Expander yok; tıklanınca PLP. Drill `changed` yok.  
Örnekler: #menu-drawer  
Öneri: leftover — yazılı nav link  
Karar: onay bekliyor
