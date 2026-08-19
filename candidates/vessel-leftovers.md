# Vessel leftovers

*Kaynak:* https://theme-vessel-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **Updated copy of Vessel demo store 3.2.0** · `schema_name` **Vessel** · `schema_version` **3.4.0** · `theme_store_id` **3628** · role `main` · id `159183306809` · shop `horizon-vessel.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/vessel — Free · by Shopify · Horizon collection  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: vessel-mega-menu-off  
Gerekçe: Theme Store “Mega menu” listeler. Canlı header düz `menu-list__link` (NEW IN / COFFEE & TEA / DRINKWARE / KITCHENWARE / ACCENTS). NEW IN hover submenu açmadı. `navigation-header-mega` + delta.  
Örnekler: https://theme-vessel-demo.myshopify.com/  
Öneri: leftover — özellik kapalı  
Karar: onay bekliyor

---

ADAY: vessel-account-icon  
Gerekçe: Header’da person ikonu var. Login/account tıklanmadı (PII).  
Örnekler: header sağ ikonlar  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: vessel-cart-drawer-qty  
Gerekçe: Drawer plus 375/1440 adet 2 yapmadı. Qty 1→2 `/cart` sayfasında doğrulandı.  
Örnekler: global-cart-drawer changed  
Öneri: leftover — drawer qty  
Karar: onay bekliyor

---

ADAY: vessel-plp-filter-375  
Gerekçe: 375 `facets-toggle__button` Filter. Desktop `#Facet-Details-…` gizli. 768/1440 AVAILABILITY → In stock 67→62.  
Örnekler: `/collections/coffee-tea` 375  
Öneri: leftover — mobil facet  
Karar: onay bekliyor

---

ADAY: vessel-hamburger-768  
Gerekçe: 375’te `summary[aria-label=Menu]` 46×46. 768/1440 hamburger 0×0; 768 inline nav + More overflow (ACCENTS).  
Örnekler: 768 home header  
Öneri: leftover — tablet hamburger yok  
Karar: onay bekliyor

---

ADAY: vessel-announcement-bar-yok  
Gerekçe: Home’da announcement-bar section yok.  
Örnekler: `/`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: vessel-404-routes  
Gerekçe: Aynı 404 (`template--21019562573881__main` Page not found + Discover something new): `/pages/about` `/pages/about-us` `/pages/contact-us` `/blogs/journal` `/policies/refund-policy` `/policies/shipping-policy` `/policies/terms-of-service` + rastgele path. Observation `not-found/page-content-main`.  
Örnekler: https://theme-vessel-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: vessel-privacy-native  
Gerekçe: `/policies/privacy-policy` 200, Shopify native `.shopify-policy__container` (~7k px). Theme `shopify-section` yok (yalnız header/footer). Observation yazılmadı.  
Örnekler: https://theme-vessel-demo.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: vessel-search-header-section  
Gerekçe: `/search?q=mug` üstte `__search` (Search results + input, 183px) + `__main` ızgara. Yazılan: `search-results` = `__main`.  
Örnekler: https://theme-vessel-demo.myshopify.com/search?q=mug  
Öneri: leftover — başlık bandı ayrı şema değil  
Karar: onay bekliyor

---

ADAY: vessel-search-candle-empty  
Gerekçe: `q=candle` başlık “1 result” ama ızgara “No products found.” Katalog mutfak/içecek. Yazılan sorgu `mug` (91).  
Örnekler: https://theme-vessel-demo.myshopify.com/search?q=candle  
Öneri: leftover — boş/yanlış sayaç  
Karar: onay bekliyor

---

ADAY: vessel-plp-template-repeats  
Gerekçe: `/collections/all` (Products, 193) ve kategori koleksiyonları (coffee-tea 67, mugs-cups/Drinkware 52, kitchenware 43, accents, new-in, tumblers, bestsellers, last-chance) aynı `section` + `main` şablon. Yazılan: `/collections/coffee-tea`.  
Örnekler: https://theme-vessel-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: vessel-pdp-template-repeats  
Gerekçe: Alfresco Tumbler / Alfresco Wine Glass / Baum Neu Canister aynı `main` + media_with_content + recommendations. Yazılan: Baum Neu Canister (Size 450ml/800ml). Tumbler Colour Beige/Black (Black unavailable).  
Örnekler: https://theme-vessel-demo.myshopify.com/products/20702  
Öneri: leftover — aynı şablon  
Karar: onay bekliyor

---

ADAY: vessel-footer-utilities  
Gerekçe: `migrated_footer_content` (nav+newsletter) + `footer_utilities` (© 2026 Vessel). Utilities 65px ayrı section; observation yok.  
Örnekler: home footer  
Öneri: leftover — copyright satırı  
Karar: onay bekliyor

---

ADAY: vessel-pii-stop  
Gerekçe: Footer SUBSCRIBE + contact Submit + checkout + account login tıklanmadı. Header’da account ikonu yok; drawer’da Log in var.  
Örnekler: footer · `/pages/contact` · cart drawer  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: vessel-taxonomy-404  
Gerekçe: 404 `page-content-main` reuse; `pageType` 404 listede yok.  
Örnekler: `/pages/this-does-not-exist-xyz-vessel`  
Öneri: leftover — taksonomi  
Karar: onay bekliyor

---

## CRO disk şemaları (2026-08-19 interact)

Listed CRO schemas — observation yok, storefront'ta gözlenmedi (şema icat edilmedi):

| schemaId | Durum |
|---|---|
| `before-after-slider` | yok |
| `commerce-tools-products-bundle` | yok |
| `promo-banner-countdown` | yok |
| `faq-collapsible-tabs` | yok |
| `lead-capture-newsletter-band` | yok (`footer-columns-newsletter` farklı şema) |
| `comparison-quick-table` | yok |
| `product-finder-quiz` | yok |
| `testimonial-quote-carousel` | yok |
| `media-shop-the-feed` | yok |
| `media-scrolling-gallery` | yok |

**Gözlenen CRO:** `lead-capture-form` (contact) — interact `initial` 3vp; `input` PII stop.

**Diğer CRO-adjacent:** sticky header → `navigation-header-mega` (interact yapıldı). FAQ/reviews/countdown/quiz/bundle/scarcity section yok.
