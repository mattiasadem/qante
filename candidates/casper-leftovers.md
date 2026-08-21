# Casper leftovers / adaylar

*Store:* https://casper.com/  
*Shop:* `e75063-e5.myshopify.com` · *Theme (görülen):* **Release-26-32-082026-1009** · `schema_name` **Impact** 6.0.1 · `theme_store_id` **null** · id `193786282350` · role `main`  
*Preset:* default · *QANTE kaynak slug:* `casper`  
*Tarih:* 2026-08-21 (Mod A first inventory)

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: casper-not-in-dtc-69  
Gerekçe: Ünlü DTC mattress markası; resmi dtc-69 listesinde yok. Canlı Shopify (Theme Store demo değil).  
Örnekler: https://casper.com/  
Öneri: leftover — kaynak meta  
Karar: onay bekliyor

---

ADAY: casper-theme-impact-custom  
Gerekçe: `Shopify.theme.schema_name` **Impact** 6.0.1 ama `name` Release-26-32-082026-1009 · `theme_store_id` null. Impact envanter şemaları reuse edildi; Casper custom section class'ları delta'da.  
Örnekler: https://casper.com/  
Öneri: leftover — tema kimliği  
Karar: onay bekliyor

---

ADAY: casper-cart-page-not-drawer  
Gerekçe: Header cart link `href=/cart` — drawer açılmaz. `#cart-drawer` DOM'da var ama public akış tam sayfa `cart-page-main`. `global-cart-drawer` observation yok.  
Örnekler: https://casper.com/cart  
Öneri: leftover — chrome delta  
Karar: onay bekliyor

---

ADAY: casper-affirm-skinny-banner  
Gerekçe: `shopify-section--affirm-skinny-banner` home + collection (Financing 0% APR). Tek satır finans bandı; mevcut promo şemalarına zorlanmadı.  
Örnekler: https://casper.com/ · https://casper.com/collections/mattresses  
Öneri: leftover — promo/finans ailesi  
Karar: onay bekliyor

---

ADAY: casper-yotpo-reviews-app  
Gerekçe: PDP `shopify-section--apps` Ratings & Reviews widget (17907 reviews, histogram, search). App embed — `testimonial-quote-carousel` değil.  
Örnekler: https://casper.com/products/casper-one-foam  
Öneri: leftover — reviews app  
Karar: onay bekliyor

---

ADAY: casper-yotpo-ugc-blog  
Gerekçe: Blog post altında `shopify-section--yotpo-ugc` h≈15.  
Örnekler: https://casper.com/blogs/article/what-size-is-a-bunk-bed-mattress  
Öneri: leftover — UGC app  
Karar: onay bekliyor

---

ADAY: casper-accordion-content-specs  
Gerekçe: PDP `shopify-section--accordion-content` Product specifications / Materials / Warranty accordion. `product-info-tabs` ile kardeş ama ayrı section.  
Örnekler: https://casper.com/products/casper-one-foam  
Öneri: leftover — PDP alt blok  
Karar: onay bekliyor

---

ADAY: casper-pdp-bundle-tabs  
Gerekçe: İkinci `product_info_tabs` (Build Your Own Bundle) observation dışı bırakıldı; engineering tabs `-2` ile yazıldı.  
Örnekler: https://casper.com/products/casper-one-foam  
Öneri: leftover — tekrar tip  
Karar: onay bekliyor

---

ADAY: casper-faq-repeat  
Gerekçe: `shopify-section--faq` home + collection + PDP. Observation yalnız home; kardeş instance'lar delta'da.  
Örnekler: https://casper.com/collections/mattresses  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: casper-dual-media-repeat  
Gerekçe: `dual-media-with-text` store finder home + collection + PDP. Observation home'da; tekrar capture yok.  
Örnekler: https://casper.com/collections/mattresses  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: casper-privacy-banner  
Gerekçe: `shopify-section--privacy-banner` overlay group h=0 public walk'ta görünür değil.  
Örnekler: https://casper.com/  
Öneri: leftover — consent overlay  
Karar: onay bekliyor

---

ADAY: casper-embed-chat  
Gerekçe: Footer group `embed_chat` h=0; üçüncü parti chat widget.  
Örnekler: https://casper.com/  
Öneri: leftover — chat overlay  
Karar: onay bekliyor

---

ADAY: casper-global-menu-drawer  
Gerekçe: Mobil `Open navigation menu` hamburger; Mod A statik walk'ta `global-menu-drawer` capture yok (header mega home'da).  
Örnekler: https://casper.com/ (375)  
Öneri: leftover — interact adayı  
Karar: onay bekliyor

---

ADAY: casper-404-password-routes  
Gerekçe: Password / 404 sayfaları walk dışı. `/pages/*` policy/FAQ ayrı route değil.  
Örnekler: —  
Öneri: leftover — yok sayfa  
Karar: onay bekliyor

---

ADAY: casper-pii-stop  
Gerekçe: Newsletter submit, account login, checkout, Add to cart checkout akışı, contact/refer formları doldurulmadı.  
Örnekler: https://casper.com/account/login  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: casper-collection-media-zero  
Gerekçe: Collection `mattress_card` · `product_media_w_text` section'ları h=0 (lazy/conditional).  
Örnekler: https://casper.com/collections/mattresses  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- Checkout / Shop Pay / Affirm qualify CTA  
- Account login/register  
- Store locator harici `stores.casper.com`  
- `/products/*` varyantları (gift card vb.) — tek PDP The One  
- Custom liquid footer/header script section'ları (h=0)
