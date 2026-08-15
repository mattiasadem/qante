# Kizik leftovers / adaylar

*Store:* https://kizik.com · *Tema (görülen):* Proteus - Production - Metafield Cleanup · schema_name **Impact** 6.5.0 · custom (`theme_store_id` null) · `kizik-design.myshopify.com` · theme id `156765749405`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: kizik-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 “Page not found / CONTINUE SHOPPING.” Taksonomide 404 pageType yok. Observation `page-content-main` reuse.  
Örnekler: https://kizik.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: kizik-reviews-app  
Gerekçe: PDP `#…__17504889423079e129` + `custom_liquid_NDNbJq` “✨ Reviews Summary” / “Perfect shoe” yıldız dağılımı. `/pages/reviews` tek section `17737243472e97663c` (~6920px) üçüncü parti widget. Taksonomide reviews-app yok.  
Örnekler: https://kizik.com/products/womens-vegas-2-bright-white · https://kizik.com/pages/reviews  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: kizik-store-locator  
Gerekçe: `/pages/store-locator` custom_html harita + mağaza listesi (Sprong / Tenni Moc). Taksonomide store-locator yok.  
Örnekler: https://kizik.com/pages/store-locator  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: kizik-rewards-pii  
Gerekçe: `/pages/rewards` “Kizik Loyalty Program / Join or Login” + FAQ. Login/PII dur.  
Örnekler: https://kizik.com/pages/rewards  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: kizik-shogun  
Gerekçe: PDP `shogun-helper` / `shogun-above` / `shogun-below` / `shogun-optimizer` 0px.  
Örnekler: https://kizik.com/products/womens-athens-golf-white-surf-the-web  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: kizik-golf-30day  
Gerekçe: Golf PDP `image_with_text_overlay_rmqMC6` “Test it for 30-days”. Vegas 2 PDP’de yok.  
Örnekler: https://kizik.com/products/womens-athens-golf-white-surf-the-web  
Öneri: leftover — ürün-özel overlay  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Home `custom_html_i4hHpp` 0px
- PDP `video_grid_Wdfb8g` 24px
- PDP `custom_liquid_mnJxPa` display:none (golf)
- `/pages/about` ince “ABOUT” (asıl hikâye `/pages/about-us`)
- `/pages/faq` 404 — gerçek `/pages/faqs`
- `/pages/contact-us` 404 — gerçek `/pages/contact`
- `/pages/privacy-policy` 404 — gerçek `/policies/privacy-policy`
- About-us custom_html timeline (2009 Pratt) / Press / mission quote — observation yazılmadı
- Innovation ikinci `featured_collection_cJzURp` + ekstra video/custom_html
- Size chart Men’s / Kids tabloları (Women’s `page-content-main` alındı)
- Shipping `/pages/kizik-shipping-information-v2` — page main, FAQ ile aynı template
- Accessibility `/pages/accessibility/`
- HSA/FSA `/pages/hsa-fsa-eligibility-kizik-shoes` — 429 bot-wall
- Tracking `/pages/tracking`
- Newsletter / contact submit / account — PII stop
- Gift card PDP
