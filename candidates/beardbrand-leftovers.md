# Beardbrand leftovers / adaylar

*Store:* https://beardbrand.com · *Tema (görülen, uydurulmadı):* **Split v1.0.3.7.4 [edp promo on PDPs]** · `schema_name` Split · `schema_version` 3.1.0 · `theme_store_id` 842 · role `main` · theme.id `192727712114`  
*Shop:* `beardbrand.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: beardbrand-native-cart-drawer  
Gerekçe: `button.site-cart-handle.no-overlay` /cart sayfasına gidiyor. ATC sonrası native drawer açılmadı. `#recharge-storefront-experiences__cart-drawer` DOM’da h=0. Sepet empty/filled/qty `/cart` observation’da.  
Örnekler: https://www.beardbrand.com/cart · https://www.beardbrand.com/products/norse-winter-beard-oil  
Öneri: leftover — drawer yok / Recharge 0px  
Karar: onay bekliyor

---

ADAY: beardbrand-judgeme-reviews  
Gerekçe: PDP `#shopify-section-template--28367260647794__jdgm_testimonials_v2_KzhUPf` ~2410px (4.62 / 4675). PLP custom_liquid Judge.me ~2713px. Reviews ailesi yok.  
Örnekler: https://www.beardbrand.com/products/norse-winter-beard-oil · https://www.beardbrand.com/collections/beard-oil  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: beardbrand-bundle-builder  
Gerekçe: Home ilk ürün linki `/products/custom-mens-cologne-set` — `#shopify-section-template--28367260746098__bundle_builder_tiered_8L7JAp` ~1283px (Choose your bottles…). `commerce-tools-products-bundle` yakın ama bu walk gerçek PDP olarak oil seçildi.  
Örnekler: https://www.beardbrand.com/products/custom-mens-cologne-set  
Öneri: leftover — ikinci PDP / bundle  
Karar: onay bekliyor

---

ADAY: beardbrand-faq-static-blocks  
Gerekçe: `/pages/faqs` 20+ `custom_liquid` Q&A (accordion/details yok; footer toggle hariç). PLP `mount-toggles` FAQ observation var.  
Örnekler: https://www.beardbrand.com/pages/faqs  
Öneri: leftover — statik bloklar, faq-collapsible-tabs değil  
Karar: onay bekliyor

---

ADAY: beardbrand-learn-about-quiz  
Gerekçe: `/pages/learn-about-us` story + “Take a Quiz” / What Type of Beardsman / Best Beard Style. Quiz PII riski. `/pages/about-us` claim edildi.  
Örnekler: https://www.beardbrand.com/pages/learn-about-us  
Öneri: leftover — ikinci about + quiz  
Karar: onay bekliyor

---

ADAY: beardbrand-404-short-urls  
Gerekçe: HTTP 404 + aynı custom 404 (observation var): `/pages/about`, `/pages/our-story`, `/pages/help`, `/pages/faq`, `/pages/shipping`, `/pages/returns`, `/blogs/news`, `/blogs/journal`, `/blogs/beardbrand`. Asıl about `/pages/about-us`, FAQ `/pages/faqs`, returns `/pages/returns-exchanges`, blog `/blogs/urbanbeardsman`.  
Öneri: leftover kayıt — 404 şablon tek  
Karar: onay bekliyor

---

ADAY: beardbrand-external-contact-account  
Gerekçe: Footer Contact Us → `https://beardbrand.customerdesk.io/`. Alliance Forums → `https://alliance.beardbrand.com/login`. Barbershop → `https://www.beardbrandbarbershop.com/`. Account → Shopify customer_authentication / `account.beardbrand.com` (PII).  
Öneri: envanter dışı (ayrı host / PII)  
Karar: onay bekliyor

---

ADAY: beardbrand-policies-shopify  
Gerekçe: `/policies/privacy-policy`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service` 200 ama görünür main section yok (newsletter+footer). Asıl metin `/pages/privacy-policy` + `/pages/legal`.  
Öneri: leftover — Shopify policy kabuğu  
Karar: onay bekliyor

---

ADAY: beardbrand-collections-all-repeat  
Gerekçe: `/collections/all` ve `/collections` onlarca `featured_collection` (Current Deals / Beard Oil / Balm / …). PLP + home showcase claim; tekrar ızgaralar leftover.  
Örnekler: https://www.beardbrand.com/collections/all  
Öneri: leftover — aynı featured aile  
Karar: onay bekliyor

---

ADAY: beardbrand-home-keep-on-growing  
Gerekçe: Home `#shopify-section-template--28367259468146__custom_liquid_gVwLM6` ~116px “KEEP ON GROWING®”. Tek satır marka; ayrı section iddia edilmedi.  
Öneri: leftover — ince  
Karar: onay bekliyor

---

ADAY: beardbrand-fragrances-copy-blocks  
Gerekçe: `/pages/fragrances` hero claim; Norse Winter / Bold Fortune / Old Money / Tree Ranger / Temple Smoke / Short Game / Black Sails / Four Vices / Ghost Tracer / Desert Road / Pearl Snap / Lumber Yard rich_text ~1000px ×12.  
Öneri: leftover — aynı editorial aile  
Karar: onay bekliyor

---

ADAY: beardbrand-legal-long-bodies  
Gerekçe: `/pages/legal` ToS ~13549px + Privacy ~15008px. Hub heading observation var. `/pages/privacy-policy` viewport ilk ekran.  
Öneri: leftover — tam gövde SS pratik değil  
Karar: onay bekliyor

---

ADAY: beardbrand-ingredient-affiliates-logo  
Gerekçe: `/pages/ingredient-glossary`, `/pages/affiliates`, `/pages/beardbrand-logo` 200 — gezildi, claim edilmedi (ikinci içerik).  
Öneri: leftover — ikinci content  
Karar: onay bekliyor

---

ADAY: beardbrand-menu-1440  
Gerekçe: `button.site-burger-handle` 1440’te gizli. Mega `nav.primary-menu #menu-item-collections`.  
Öneri: leftover — beklenen  
Karar: onay bekliyor

---

ADAY: beardbrand-predictive-empty  
Gerekçe: `#site-search` fill `beard oil` + 2.5s wait — input yazıldı, `.search-results` boş siyah. İkinci çekim aynı. Tam sayfa `/search?q=beard` 68 sonuç (observation var).  
Öneri: leftover — predictive ürün kartı yok  
Karar: onay bekliyor

---

ADAY: beardbrand-plp-faq-already-open  
Gerekçe: PLP FAQ `changed` karesi initial ile aynı (COMMON QUESTIONS minus, yargılar açık). Pixel değişmedi.  
Öneri: leftover — toggle doğrulanamadı  
Karar: onay bekliyor

---

ADAY: beardbrand-pdp-featured-in  
Gerekçe: PDP/PLP “FEATURED IN…” custom_liquid ~109px (yayın logoları). social-proof-brand-logos adayı; bu walk’ta claim edilmedi.  
Öneri: leftover — ince logo band  
Karar: onay bekliyor

---

## İnce / tekrar

- Home / PDP / PLP scrollable fragrance promo aynı aile; home claim.  
- About Hunger / Trust rich_text — Freedom claim, diğerleri leftover.  
- PLP Benefits / How Do I Use rich_text — Safe for All Skin Types claim.  
- PLP 4 Key Ingredients `#product-snaps` — uses claim.  
- Blog kategori kartları (9) — hub intro + Latest Articles claim.  
- Article alt quiz “WHAT TYPE OF BEARDSMAN ARE YOU?” — PII/quiz, yapılmayacak.  
- Newsletter / contact submit — PII, yapılmayacak.  
- Currency selector footer “United States (USD $)” — header locale yok.  
