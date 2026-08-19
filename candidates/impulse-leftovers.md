# Impulse leftovers / adaylar

*Store (Fashion):* https://impulse-theme-fashion.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/impulse  
*Tarih:* 2026-08-19 · CRO interact turu (leftover)

Şema icat edilmedi. Gözlem varsa burada tekrarlanmaz.

---

## CRO şemaları — gözlem yok (4 preset turu)

| schemaId | Durum |
|---|---|
| `commerce-tools-products-bundle` | Impulse demo’larda bundle builder yok |
| `lead-capture-newsletter-band` | Sayfa ortası bant yok; footer `footer-columns-newsletter` reuse |
| `comparison-quick-table` | Karşılaştırma tablosu yok |
| `product-finder-quiz` | Quiz / finder yok |
| `media-shop-the-feed` | Shop-the-feed / UGC grid yok |
| `media-scrolling-gallery` | UGC kayan galeri yok (`promo-scrolling-marquee` farklı tip) |

---

ADAY: impulse-newsletter-popup  
Gerekçe: Fashion home’da gizli popup (“Get 10% off”); Prestige gibi aday. `lead-capture-newsletter-band` veya popup şeması yok. Submit durduruldu.  
Örnekler: https://impulse-theme-fashion.myshopify.com/ (overlay gizli)  
Öneri: leftover — popup  
Karar: onay bekliyor

---

ADAY: impulse-recently-viewed-empty  
Gerekçe: Fashion + Dune + Terrain PDP’de başlık var, ilk ziyarette kart h=0. `product-showcase-recently-viewed` observation var (kare yok).  
Örnekler: https://impulse-theme-fashion.myshopify.com/products/wren-coat  
Öneri: leftover — boş hydrate  
Karar: onay bekliyor

---

ADAY: impulse-before-after-drag-only  
Gerekçe: Apothecary collection `before-after-slider` — tutamaç yalnız sürüklenince kayar; action setinde drag yok. `missingStates: changed` dokümante.  
Örnekler: https://impulse-theme-jewelry.myshopify.com/collections/all  
Öneri: leftover — drag capture  
Karar: onay bekliyor

---

ADAY: impulse-countdown-static  
Gerekçe: Dune + Terrain `promo-banner-countdown` — timer otomatik; tıklanabilir kontrol yok (Terrain’de SHOP NOW linki sayfaya gider, state değişmez).  
Örnekler: https://impulse-theme-apparel.myshopify.com/ · https://impulse-theme-sports.myshopify.com/  
Öneri: leftover — yalnız initial  
Karar: onay bekliyor

---

ADAY: impulse-scrolling-marquee-auto  
Gerekçe: Apothecary home + Terrain about `promo-scrolling-marquee` — metin otomatik kayar; kullanıcı kontrolü yok.  
Örnekler: https://impulse-theme-jewelry.myshopify.com/ · https://impulse-theme-sports.myshopify.com/pages/about  
Öneri: leftover — yalnız initial  
Karar: onay bekliyor

---

ADAY: impulse-terrain-testimonials-home  
Gerekçe: Terrain home’da testimonial section var (Dune PDP ile aynı tip) ama ayrı observation çekilmedi; delta reuse.  
Örnekler: https://impulse-theme-sports.myshopify.com/  
Öneri: leftover — delta instance  
Karar: onay bekliyor
