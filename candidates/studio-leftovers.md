# Studio leftovers / adaylar

*Store:* https://theme-studio-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **[Studio] Theme Store demo (latest)** · `schema_name` **Dawn** · `schema_version` **3.0.0** · `theme_store_id` **null** · id `141073547432` · role `main` · shop `theme-studio-demo.myshopify.com`  
*Tarih:* 2026-08-19 (CRO interact güncellemesi)

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

Beklenen Theme Store künye (Studio · theme_store_id 1378) **canlı `Shopify.theme` ile örtüşmedi** — storefront Dawn 3.0.0 / `theme_store_id` null.

---

ADAY: studio-theme-store-id-null  
Gerekçe: `Shopify.theme.name` = `[Studio] Theme Store demo (latest)`; `schema_name` = Dawn; `theme_store_id` = null (1378 değil). First-party Studio listing ile runtime Dawn şeması.  
Örnekler: https://theme-studio-demo.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: studio-no-mega  
Gerekçe: `.mega-menu` yok. Shop by Artist / About = `details-disclosure` + `header__submenu` dikey liste. `navigation-header-mega` yazıldı; delta: dropdown, mega kolon/görsel/promo yok.  
Örnekler: https://theme-studio-demo.myshopify.com/ `#Details-HeaderMenu-4`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: studio-cart-notification  
Gerekçe: `cart-drawer` yok. Add to cart → `#cart-notification` popup (Item added / View my cart / Check out / Continue shopping). Sepet `/cart` sayfası. `global-cart-drawer` yazılmadı.  
Örnekler: https://theme-studio-demo.myshopify.com/products/rhyme  
Öneri: leftover — Dawn cart-notification  
Karar: onay bekliyor

---

ADAY: studio-cart-qty-ajax-error  
Gerekçe: `/cart` plus: `#Quantity-1` 1→2 oldu; satır/footer toplam $230 kaldı; “There was an error while updating your cart.” Checkout tıklanmadı.  
Örnekler: https://theme-studio-demo.myshopify.com/cart  
Öneri: leftover — tema AJAX  
Karar: onay bekliyor

---

ADAY: studio-cart-footer-split  
Gerekçe: Dawn `#…__cart-items` + `#…__cart-footer` ayrı section. Boşken footer h=0; doluyken Subtotal + Check out. `cart-page-main` yalnız cart-items.  
Örnekler: https://theme-studio-demo.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: studio-no-collection-banner  
Gerekçe: `/collections/prints` (ve all / originals / artist PLP) yalnız `__product-grid` — ayrı `collection-banner` section yok. Başlık grid içinde.  
Örnekler: https://theme-studio-demo.myshopify.com/collections/prints  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: studio-404-routes  
Gerekçe: Aynı 404 (`#shopify-section-template--17836821020840__main`): `/pages/about`, `/pages/faq`, `/pages/shipping`, `/policies/privacy-policy`, `/pages/does-not-exist-qante`. Sitemap pages yalnız `/pages/about-us` + `/pages/contact`.  
Örnekler: https://theme-studio-demo.myshopify.com/pages/about  
Öneri: observation `not-found/page-content-main` yazıldı  
Karar: onay bekliyor

---

ADAY: studio-buy-it-now  
Gerekçe: PDP `SHOPIFY-BUY-IT-NOW-BUTTON` / accelerated checkout. Checkout envanter dışı; tıklanmadı.  
Örnekler: https://theme-studio-demo.myshopify.com/products/rhyme  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

## CRO disk şemaları — envanterde yok (interact yapılmadı)

| schemaId | Durum |
|---|---|
| `before-after-slider` | Demo'da section yok |
| `commerce-tools-products-bundle` | Bundle UI yok |
| `promo-banner-countdown` | Countdown yok (`promo-announcement-bar` statik metin) |
| `faq-collapsible-tabs` | FAQ sayfası 404; accordion section yok |
| `comparison-quick-table` | Karşılaştırma tablosu yok |
| `product-finder-quiz` | Quiz flow yok |
| `testimonial-quote-carousel` | Carousel yok (`editorial-image-with-text-3` tek alıntı IWT) |
| `media-shop-the-feed` | Shop-the-feed / UGC grid yok |
| `media-scrolling-gallery` | Yatay scroll gallery yok |

## CRO interact — PII sınırı

| schemaId | State | Not |
|---|---|---|
| `lead-capture-newsletter-band` | initial 3vp | home · Email fill + submit dur → `input` missing |
| `lead-capture-form` | initial 3vp | about-us + contact · Name/Email/Phone/Comment fill + Send dur → `input` missing |

## Sticky / scarcity (CRO değil, gözlem notu)

| Madde | Durum |
|---|---|
| Sticky header | `navigation-header-mega` — sticky header; interact open/changed mevcut |
| Sticky ATC / scarcity | PDP Rhyme — ayrı sticky bar veya scarcity metni yok; `product-info-main` statik |
| Reviews | Yorum bloğu / carousel yok |

---

ADAY: studio-cro-interact-2026-08-19  
Gerekçe: Discover-interact CRO leftover. Var olan obs: lead-capture-newsletter-band (home), lead-capture-form (about-us + contact). Scan-affordances → initial 3vp (`ilk-hal`). countdown / quiz / bundle / compare / before-after / FAQ / testimonials / UGC gallery observation yok — icat edilmedi.  
Örnekler: `/` · `/pages/about-us` · `/pages/contact`  
Öneri: leftover — şema uydurma yok  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/faq`  
`/pages/shipping`  
`/policies/privacy-policy`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Buy it now / cart Check out  
- Newsletter / contact form submit (PII)  
- Gift card Amount dışında varyant: katalog taramasında (ilk 12 ürün) `variant-radios` yok  
