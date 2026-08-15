# Duke Cannon leftovers / adaylar

*Store:* https://dukecannon.com · *Tema (görülen):* **[Rollback] Production | Accenture 8.12.2026** · schema_name **Duke Cannon Shopify Theme** 1.23.1 · `theme_store_id` null · role `main` · id `147550273651` · shop `duke-cannon.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: dukecannon-404  
Gerekçe: `/pages/this-page-does-not-exist-qante`, `/pages/contact`, `/pages/faq`, `/pages/faqs` → HTTP 404. “404 PAGE NOT FOUND” + TOP PICKS featured collection. Taksonomide 404 pageType yok.  
Örnekler: https://dukecannon.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `hero-slideshow` zorlama  
Karar: onay bekliyor

---

ADAY: dukecannon-cart-redirect  
Gerekçe: `/cart` 200 ama landed `/?viewcart=true` (home template). Sepet yalnız Rebuy `.rebuy-cart__flyout`. Native `#CartDrawer` 0×0 / “currently empty”. `cart-page-main` yok.  
Örnekler: https://dukecannon.com/cart  
Öneri: leftover — drawer-only  
Karar: leftover

---

ADAY: dukecannon-yotpo-loyalty  
Gerekçe: `/pages/rewards-page` `#shopify-section-template--20190452318323__1651174024cacbdc46` Yotpo loyalty (~4931px): JOIN NOW / LOGIN / HOW IT WORKS. PII/hesap tıklanmadı. FAQ ayrı `faq-collapsible-tabs` çekildi. `rewards-page` section h=0.  
Örnekler: https://dukecannon.com/pages/rewards-page  
Öneri: ertele — üçüncü parti + PII  
Karar: leftover

---

ADAY: dukecannon-yotpo-reviews-page  
Gerekçe: `/pages/reviews` page template + Yotpo site reviews (4.8 / 11485). Home `shoppable-reviews` ayrı `testimonial-quote-carousel`.  
Örnekler: https://dukecannon.com/pages/reviews  
Öneri: ertele / commerce-tools tartışması  
Karar: onay bekliyor

---

ADAY: dukecannon-store-locator  
Gerekçe: `/pages/store-locator` “FILTER RADIUS SEARCH” + app/iframe. Harita kutusu bu dump’ta zayıf.  
Örnekler: https://dukecannon.com/pages/store-locator  
Öneri: leftover — üçüncü parti locator  
Karar: leftover

---

ADAY: dukecannon-native-policies  
Gerekçe: `/policies/privacy-policy` ve `/policies/shipping-policy` Shopify native `.shopify-policy__container` — shopify-section gövde yok (yalnız header/footer). Merchant page `/pages/privacy-policy` çekildi.  
Örnekler: https://dukecannon.com/policies/privacy-policy  
Öneri: leftover — native stub  
Karar: leftover

---

ADAY: dukecannon-govx-heroes  
Gerekçe: `/pages/heroes-discount` HOW IT WORKS → GOVX ID. Doğrulama/PII tıklanmadı. Gövde `features-multicolumn` çekildi.  
Örnekler: https://dukecannon.com/pages/heroes-discount  
Öneri: leftover — üçüncü parti kimlik  
Karar: leftover

---

## Diğer leftover (aday değil)

- Rebuy flyout PDP / PLP / search tall capture’larda otomatik açık (bleed). Home featured’da yok. Native CartDrawer kullanılmıyor.
- Newsletter popup `#shopify-section-newsletter-popup` h=0 / `index-section--hidden` — PII yok
- Footer Klaviyo `klaviyo-form-WmBuRG` — gönderilmedi
- GET 20% OFF floating tab + Octane video widget (app.octaneai.com) — overlay
- Gorgias chat / Help Center `duke-cannon.gorgias.help`
- PDP empty `#shopify-section-template--20190452842611__57873c4ad41e4af2a5bd` (boş page-width)
- PDP PRODUCT SPECS / INGREDIENTS accordion `product-info-main` içinde — `changed` açılmadı
- PDP Yotpo yıldız buy box içinde — ayrı şema yok
- FBT Rebuy (`rebuy-checkbox-label`) — `commerce-tools-products-bundle` çekildi
- Header `#shopify-section-header` h=0; kutu `.header-sticky-wrapper` / `section.announcement-bar`
- Toolbar `.toolbar.small--hide` h=0
- Terms / accessibility aynı page template (privacy temsilci)
- Promotions ikinci rich_text “20% OFF WELCOME OFFER” — birinci GWP temsilci
- Veterans PAST PARTNERS 62px heading (logo-bar ayrı)
- Heroes boş rich_text satırları (h=56 / 23)
- BlackCrow `shopify-init.blackcrow.ai`
- Bazaarvoice / Nice bundler / GovX script
- Wholesale `dukecannonwholesale.com` / careers `applytojob.com` / Impact affiliate — dış origin
- Mobil Shop All / About alt akordeon açılmadı
- PLP filtre accordion (SCENT/PRICE) şerit var, panel derinliği yoklandı değil
- Kart hover: home ATC zaten görünür; ikinci görsel bu walk’ta yoklandı değil
- Rewards FAQ satır `changed` açılmadı
- Email / SMS / hesap / kupon / checkout — PII yok
