# Kitchen Ware leftovers / adaylar

*Store:* https://kitchen-ware-online-store.myshopify.com/  
*Tema (görülen, uydurulmadı):* **kitchen-ware-v-1-5-0-OPTIMIZED** · `schema_name` **Kitchen Ware** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `150878355549` · role `main` · shop `kitchen-ware-online-store.myshopify.com`  
*Unlock:* vendor-published password `1` (Speedo ürün sayfası + public storefront unlock)  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: kitchen-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://kitchen-ware-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: kitchen-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası demo password `1`. Aynı host `/password` — public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/best-kitchen-ware-store-shopify-2-0-template  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: kitchen-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: kitchen-shopable-videos-fixed  
Gerekçe: `#shopify-section-shopable-videos-fixed` h=0. Home `shopable_videos_P86GMK` (`media-shop-the-feed`) sibling sabit katman.  
Örnekler: https://kitchen-ware-online-store.myshopify.com/  
Öneri: leftover — 0px shopable overlay  
Karar: onay bekliyor

---

ADAY: kitchen-quick-add-modal  
Gerekçe: Home `quick-add-modal#QuickAdd-7882948345949` DOM’da 1440×1200; kapalı kare yanıltıcı. QUICK SHOP kartta var. `global-quick-view` şeması zorlanmadı — interact’te piksel değişirse yazılır.  
Örnekler: homepage_product_tab QUICK SHOP  
Öneri: leftover — kapalı quick-add  
Karar: onay bekliyor

---

ADAY: kitchen-pdp-empty-siblings  
Gerekçe: PDP `#shopify-section-template--20650346840157__172137309121bf68f7` h=0. `__related-products` 136px, metin yok.  
Örnekler: https://kitchen-ware-online-store.myshopify.com/products/pressure-cooker-3-litre  
Öneri: leftover — boş PDP sibling  
Karar: onay bekliyor

---

ADAY: kitchen-cart-footer-empty  
Gerekçe: `/cart` `#shopify-section-template--20650346971229__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://kitchen-ware-online-store.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: kitchen-wishlist-compare-empty  
Gerekçe: `/pages/wishlist` “No products were added to your wishlist.” `/pages/compare` boş. Header sayaç 0. App/commerce overlay; yeni şema yok.  
Örnekler: https://kitchen-ware-online-store.myshopify.com/pages/wishlist · /pages/compare  
Öneri: leftover — boş app sayfası  
Karar: onay bekliyor

---

ADAY: kitchen-404  
Gerekçe: `/this-page-does-not-exist-qante` “404 · Page not found · Back To Homepage · Continue Shopping”. `#shopify-section-template--20650346872925__main` 334px. `page-content-main` zorlanmadı. `/pages/about` `/pages/about-us` `/pages/faqs` aynı 404 kabı.  
Örnekler: 404 template  
Öneri: leftover — 404 kabı  
Karar: onay bekliyor

---

ADAY: kitchen-our-story-placeholder  
Gerekçe: `/pages/our-story` moda şablon kopyası (“fashion-forward brand”, `[Brand Name]`). `#shopify-section-template--20650347593821__main`. About walk `about-layout-1` üzerinden.  
Örnekler: https://kitchen-ware-online-store.myshopify.com/pages/our-story  
Öneri: leftover — placeholder page  
Karar: onay bekliyor

---

ADAY: kitchen-layout-variant-pages  
Gerekçe: Menüde `/pages/about-layout-2|3|4`, `/pages/contact-layout-1|2|3|4`, `/collections/collection-layout-1|2|3`, `/pages/size-guide`. Theme demo varyant sayfaları; ilk envanter about-layout-1 + /pages/contact.  
Örnekler: header Themes / Collections  
Öneri: leftover — demo layout sayfaları  
Karar: onay bekliyor

---

ADAY: kitchen-policy-pages  
Gerekçe: `/policies/privacy-policy` `/policies/refund-policy` `/policies/shipping-policy` `/policies/terms-of-service` `/pages/data-sale-opt-out` durdu. Policy recipe zorlanmadı.  
Örnekler: footer / legal  
Öneri: leftover — yasal sayfa  
Karar: onay bekliyor

---

ADAY: kitchen-products-json-empty  
Gerekçe: `/products.json` `/collections.json` `/pages.json` bu oturumda boş döndü (HTML/kilit). Katalog HTML linklerinden okundu (pressure-cooker, hawkins pan, sabichi dining…). JSON id uydurulmadı.  
Örnekler: storefront JSON  
Öneri: leftover — API boş  
Karar: onay bekliyor

---

ADAY: kitchen-pdp-fashion-copy  
Gerekçe: PDP `multicolumn_VH4Wqb` “We handcraft clothes from soft natural fabrics…”. Mutfak vitrine uymayan Speedo leftover kopya. `features-multicolumn` observation’da delta.  
Örnekler: pressure-cooker PDP  
Öneri: leftover — yanlış dikey kopya  
Karar: onay bekliyor

---

ADAY: kitchen-social-proof-toast  
Gerekçe: “Someone liked and Buy {ürün} {N} Minutes Ago From {şehir} · Verified” yüzen toast (home, PDP, PLP, search). Üçüncü-parti widget; tema section değil.  
Örnekler: navigation-header-mega.1440 · product-info-main.1440 · product-showcase-grid-plp.1440  
Öneri: leftover — social-proof toast  
Karar: onay bekliyor

---

ADAY: kitchen-you-may-like-after-atc  
Gerekçe: ATC sonrası cart drawer ile YOU MAY LIKE. 1440 ortada overlay liste + ADD TO CART; 375 drawer içinde accordion. `global-cart-drawer` leftover; yeni şema yok. Checkout tıklanmadı.  
Örnekler: `#CartDrawer` filled/changed  
Öneri: leftover — upsell overlay  
Karar: onay bekliyor

---

ADAY: kitchen-shopable-video-bubble  
Gerekçe: Home sağ-alt küçük ürün balonu (X ile kapanır). `media-shop-the-feed` kromu; ayrı section değil. Sibling `shopable-videos-fixed` h=0.  
Örnekler: home COOKING EXPERIENCES kareleri  
Öneri: leftover — shopable bubble  
Karar: onay bekliyor

---

ADAY: kitchen-menu-drawer-desktop-zero  
Gerekçe: `#menu-drawer` 1440×900 `display:none` — resmi capture 0×0 PNG yazmaz. Open yalnız 375/768. Desktop Shop mega ayrı.  
Örnekler: global-menu-drawer  
Öneri: leftover — desktop drawer yok  
Karar: onay bekliyor

---

ADAY: kitchen-plp-color-black-filter  
Gerekçe: `/collections/all` Color Black (7) iki selector denemesi eşleşmedi (`label:has-text('Black (7)')`, `input[value=Black/black]`). Üçüncü yok. Hover 1440 alındı.  
Örnekler: product-showcase-grid-plp missingStates.changed  
Öneri: leftover — filtre kontrolü  
Karar: onay bekliyor
