# Onnit leftovers / adaylar

*Store:* https://www.onnit.com · *Liste:* https://onnit.com  
*Tema (görülen):* **[RC 1.10.0] [NMN Launch]** · `schema_name`: **Onnit Shopify Theme** · `schema_version`: **1.10.0** · custom (`theme_store_id` null) · `ygjcwg-0q.myshopify.com` · theme id `189555966242`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: onnit-no-cart-page  
Gerekçe: `/cart` → `/?viewcart=true` home. Görünür sepet Rebuy `#rebuy-cart` / `.rebuy-cart__flyout`. `cart-page-main` yok.  
Örnekler: https://www.onnit.com/cart  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: onnit-help-center  
Gerekçe: Nav / footer “Returns & FAQ” → https://help.onnit.com/ (harici). `/pages/help` ve `/pages/faq` → 404 theme şablonu. Home FAQ Help Center CTA aynı host.  
Örnekler: https://help.onnit.com/ · https://www.onnit.com/pages/help  
Öneri: leftover — harici  
Karar: onay bekliyor

---

ADAY: onnit-native-privacy  
Gerekçe: `/policies/privacy-policy` `.shopify-policy__container` ~16957px — resmi crop pratik değil; shopify-section yok. `/policies/terms-of-service` ~2560px ve `/policies/refund-policy` ~1487px de section’suz. `/policies/shipping-policy` 404. Prop 65 alındı.  
Örnekler: https://www.onnit.com/policies/privacy-policy  
Öneri: leftover — yükseklik / native policy  
Karar: onay bekliyor

---

ADAY: onnit-bazaarvoice  
Gerekçe: PDP Alpha BRAIN `#…__bv_reviews_DNBgJM` ~3666px BV widget (3.8 / 12380). Buy box’ta özet var; tam feed `testimonial-quote-carousel` zorlama. Write a review PII. NMN PDP’de aynı section height 0.  
Örnekler: https://www.onnit.com/products/alpha-brain-60-ct  
Öneri: leftover / commerce-tools  
Karar: onay bekliyor

---

ADAY: onnit-quiz  
Gerekçe: `/pages/take-the-quiz` title “Onnit Quiz” ama shopify-section yok (yalnız FDA + footer); `#MainContent` ~750px boş/iframe. Home “TAKE THE ONNIT QUIZ” kartı alındı, quiz gövdesi değil.  
Örnekler: https://www.onnit.com/pages/take-the-quiz  
Öneri: leftover — üçüncü parti / PII  
Karar: onay bekliyor

---

ADAY: onnit-ingredients-explorer  
Gerekçe: `/pages/ingredients` `main_ingredients_3rcDDx` ~5593px “GET TO KNOW OUR INGREDIENTS / EXPLORE BY BENEFIT”. Taksonomide ingredient-explorer yok. Hero/panel/FAQ alınmadı (ilk walk kapsamı about + leftover).  
Örnekler: https://www.onnit.com/pages/ingredients  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: onnit-404-pagetype  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 “PAGE NOT FOUND”. Taksonomide 404 pageType yok. Observation `page-content-main` reuse.  
Örnekler: https://www.onnit.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: onnit-search-hero-tabs  
Gerekçe: `/search?q=alpha` `page-hero-search` ~194px “SEARCH ON OUR SITE / PRODUCTS / PAGES / ARTICLES”. Sonuç ızgarası `search-results` alındı; tab hero ayrı şema yok.  
Örnekler: https://www.onnit.com/search?q=alpha  
Öneri: leftover  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Announcement bar `#shopify-section-announcement-bar` height 0
- Home 0px: `__1784795814ba7413c0`, `__rich_text_Tb6gwc`
- PDP 0px: `app_wrapper_J6F6p9`, `rich_text_4TdJqP`; NMN `compare_block` + `bv_reviews` 0 (Alpha’da dolu)
- `/products/alpha-brain` → home; gerçek handle `/products/alpha-brain-60-ct`
- `/collections/supplements`, `/pages/about`, `/blogs/news` → home
- `/pages/help`, `/pages/faq`, `/policies/shipping-policy` → 404
- Blog dek `rich_text_7mmX99` 28px; article `related-articles` 433px
- Contact `custom_liquid_D3Q6Dp` ~1092px (widget) — form gönderilmedi
- Careers → greenhouse.io; wholesale → account.onnitwholesale.com
- OneTrust “Do Not Sell” / Limit Sensitive PI
- Clarip/Adchoices, cookie
- Newsletter / account / checkout / loyalty JOIN — PII stop
- TrueMed HSA/FSA, Ordergroove subscribe modal (Cancel/Add) — checkout-adjacent, tıklanmadı
