# Tools leftovers / adaylar

*Kaynak:* https://tools-online-store-1.myshopify.com/  
*Ürün:* https://speedothemes.com/products/tools-shopify-tools-theme-os-2-0  
*Tema (görülen, uydurulmadı):* **tools-v-1-5-0-latest-updates-new** · `schema_name` **Tools** · `schema_version` **1.5.0** · `theme_store_id` **null** · role `main` · id `176874815855`  
*Walk host:* `tools-online-store-1.myshopify.com`  
*Storefront password:* `1` (vendor ürün sayfasında yayınlı)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: tools-theme-store-id-null  
Gerekçe: Vitrin `Shopify.theme.theme_store_id` **null**. Speedo third-party; Shopify Theme Store ID yazılmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: tools-announcement-bar-yok  
Gerekçe: Home’da ayrı top `promo-announcement-bar` section yok. Marquee mid-page `custom_announcement_bar` ayrı observation.  
Örnekler: header üstü  
Öneri: leftover — section yok  
Karar: onay bekliyor

---

ADAY: tools-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` 0px. PII / zenon. Observation yok.  
Örnekler: tüm şablonlar  
Öneri: leftover — 0px  
Karar: onay bekliyor

---

ADAY: tools-team-grid  
Gerekçe: About `#…__dbc23b1d-b633-4783-868d-b25b10ce7ede` Our Team (Olivia Product Designer, Jack Director, Isabella Marketing Manager). Team grid şeması yok. `features-multicolumn` zorlanmadı.  
Örnekler: `/pages/about-layout-1`  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: tools-contact-map  
Gerekçe: `#…__map_iqhHBB` 680px, metin boş. Store/map şeması yok.  
Örnekler: `/pages/contact`  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: tools-related-empty  
Gerekçe: PDP `#…__related-products` 136px, metin boş. `product-showcase-related` yazılmadı.  
Örnekler: miter-saw + jackhammer  
Öneri: leftover — 0 ürün  
Karar: onay bekliyor

---

ADAY: tools-pdp-zero-section  
Gerekçe: `#…__172137309121bf68f7` 0px.  
Örnekler: product-detail  
Öneri: leftover — 0px  
Karar: onay bekliyor

---

ADAY: tools-contact-us-alt  
Gerekçe: `/pages/contact-us` ayrı layout (rich_text + contact_form). Walk footer Contact Us = `/pages/contact`.  
Örnekler: `/pages/contact-us`  
Öneri: leftover — alt layout  
Karar: onay bekliyor

---

ADAY: tools-about-us-alias  
Gerekçe: `/pages/about-us` aynı template `--24398241857903` (about-layout-1). Footer About Us = `/pages/about-layout-1`. `/pages/about` ve `/pages/faqs` 404.  
Örnekler: footer / about  
Öneri: leftover not  
Karar: onay bekliyor

---

ADAY: tools-wishlist-compare  
Gerekçe: Header “0 Wishlist” / “0 Compare” 0px ikon; `/pages/compare`. Walk dışı.  
Örnekler: header utility  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: tools-buy-it-now  
Gerekçe: PDP `Buy it now` ödeme butonu. Checkout — tıklanmadı.  
Örnekler: product-info-main  
Öneri: leftover — ödeme  
Karar: onay bekliyor

---

ADAY: tools-miter-no-swatch  
Gerekçe: Home PDP `/products/miter-saw-tool-ceramic-tile-cutter` tek varyant. Color interact `/products/breaker-jackhammer-robert-hammer-drill` Yellow/Borage.  
Örnekler: product-info-main  
Öneri: leftover — miter varyantsız  
Karar: onay bekliyor

---

ADAY: tools-cart-footer-empty  
Gerekçe: `#…__cart-footer` boş cart’ta 0px (“Estimated total”).  
Örnekler: `/cart`  
Öneri: leftover — 0px empty  
Karar: onay bekliyor

---

ADAY: tools-account-login  
Gerekçe: Header “Log in” → `/account/login`. Hesap — dur.  
Örnekler: header  
Öneri: leftover — stop  
Karar: onay bekliyor

---

ADAY: tools-pdp-fashion-copy  
Gerekçe: PDP “Made with Love / We handcraft clothes…” ve marquee “10% OFF on all clothing”. Observation yazıldı; kopya sapması delta’da.  
Örnekler: product-detail  
Öneri: leftover not  
Karar: onay bekliyor
