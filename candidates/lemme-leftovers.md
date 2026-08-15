# Lemme leftovers / adaylar

*Liste URL:* https://lemme.com · *Canlı vitrin:* https://lemmelive.com  
*Tema (görülen):* RC Theme 7/30 - Promo Banner · schema_name null · custom (`theme_store_id` null) · `lemmelive.myshopify.com` · theme id `162263105750`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: lemme-listed-domain  
Gerekçe: DTC-69 #53 `https://lemme.com` → 301 `https://www.epicbrokers.com/about/epic-companies/lemme/` (Epic Brokers sigorta, WordPress). Alt yollar Cloudflare 530 / 1016. Shopify vitrin `https://lemmelive.com`.  
Örnekler: https://lemme.com · https://www.lemme.com  
Öneri: leftover — listed domain storefront değil  
Karar: onay bekliyor

---

ADAY: lemme-empty-search-page  
Gerekçe: `/search?q=reset` title “Search: 7 results found” ama `#siteContent` 0px; sonuç ızgarası yok. Asıl UX search drawer. `search-results` observation yazılmadı. Drawer input `reset` yazınca kategori pill kayboluyor; ürün listesi karede yok.  
Örnekler: https://lemmelive.com/search?q=reset  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: lemme-no-cart-page  
Gerekçe: `/cart` → `/?cart_redirect` home. Görünür sepet Rebuy `.rebuy-cart__flyout`. Theme `ajax-cart` offscreen. `cart-page-main` yok.  
Örnekler: https://lemmelive.com/cart  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: lemme-store-locator  
Gerekçe: `/pages/find-us` “lemme show you where to find us · 6164 locations found”. Taksonomide store-locator yok.  
Örnekler: https://lemmelive.com/pages/find-us  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: lemme-okendo-reviews  
Gerekçe: PDP `#…__product-reviews` Okendo (Chill 4.7 / 1064; Reset 4.3 / 1180). ~2200px iframe/widget.  
Örnekler: https://lemmelive.com/products/chill · https://lemmelive.com/products/lemme-glp-1  
Öneri: leftover / commerce-tools  
Karar: onay bekliyor

---

ADAY: lemme-ugc-reel  
Gerekçe: Home `ugc_reel_WyJiAT` 0px (6 img DOM’da). Firework/UGC hydrate olmadı.  
Örnekler: https://lemmelive.com/  
Öneri: leftover — 0px / üçüncü parti  
Karar: onay bekliyor

---

ADAY: lemme-404-pagetype  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 “lemme be honest... this page doesn’t exist”. Taksonomide 404 pageType yok. Observation `page-content-main` reuse.  
Örnekler: https://lemmelive.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- `lemme.com` / `www.lemme.com` storefront değil
- `/pages/about` 404
- Home 0px: `quicklinks_xcdUMY`, `email-sms-popup` (PII), `ajaxcart` kapalı, `social`
- `#shopify-section-promobar` wrapper 0px — görünür çocuk `.promobar` artık `promo-announcement-bar.2` (gizli değil)
- PDP Reset: `section_navigation_6J6K77` (TIMELINE/COMPARE/CLINICAL), `clinical_results`, `capsule_info`, `ingredients`, seals, reviews
- PDP Chill: marquee (home ile aynı), Notify-me, upsell bundle, Rebuy post-ATC modal
- PLP marquee + “lemme get real results” (home tekrarı)
- FAQ `faq_page_bxcaHy` NY Dietary Supplement Age Restriction
- Blog featured hero + kategori 85px şerit; article hero + `similar_reads`
- Loyalty: JOIN NOW marquee, earn points, redeem ikiz, comparison tiers, custom_liquid, START EARNING
- Düzinelerce 5-reasons / burn / purr / creatine LP
- `/pages/reviews`, ambassador, waitlist, subscribe-page varyantları
- Clarip cookie + Do Not Sell
- Newsletter / contact / account / loyalty JOIN — PII stop
- ES / EN-CA / EN-AU / EN-GB locale kopyaları
- Statik uzun crop’larda `dismiss-overlays` boş bag / SHOP mega açabiliyor (script’e dokunulmadı). Interact kareleri overlay kanıtı; eksik 3vp sayılmaz
