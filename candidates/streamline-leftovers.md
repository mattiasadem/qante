# Streamline leftovers / adaylar

*Store:* https://streamline-theme-core.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Streamline v6.6.1 final published** · `schema_name` **Streamline** · `schema_version` **6.6.1** · `theme_store_id` **null** · role `main` · id `127083937874`  
*Theme Store listing:* https://themes.shopify.com/themes/streamline — $420 · by Archetype  
*Tarih:* 2026-08-20

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: streamline-no-cart-drawer  
Gerekçe: Core vitrinde `#CartDrawer` DOM'da yok. `aria-controls="CartDrawer"` referansları var ama drawer render edilmiyor. Sepete ekleme sonrası `#StickyCart.sticky-cart--open` alt bar açılıyor. Walk `cart-page-main` ile kapandı; `global-cart-drawer` observation açılmadı.  
Örnekler: PDP Add to cart → sticky bar 108px  
Öneri: leftover — Core preset cart drawer kapalı; sticky cart ayrı aday  
Karar: onay bekliyor

---

ADAY: streamline-sticky-cart-bar  
Gerekçe: Add to cart sonrası `#StickyCart` thumb + subtotal + checkout bar. `global-cart-drawer` şemasına uymuyor.  
Örnekler: https://streamline-theme-core.myshopify.com/collections/leggings/products/bolt-legging-grey (add to cart)  
Öneri: leftover veya commerce overlay adayı  
Karar: onay bekliyor

---

ADAY: streamline-plp-collection-filters  
Gerekçe: `/collections/leggings` sibling `#…__collection-filters` (Size XS–L + Sort). `product-showcase-grid-plp` observation yalnız `#…__main-collection` grid.  
Örnekler: collection-filter section type  
Öneri: leftover — filtre şeridi PLP şemasına delta mı ayrı mı  
Karar: onay bekliyor

---

ADAY: streamline-hero-animated  
Gerekçe: `data-section-type="hero-animated"` tek promosyon metni + Shop Now; ok/dot yok. Observation `hero-slideshow` + delta.  
Örnekler: `#…__1659389830b144a407`  
Öneri: mevcut şema + delta  
Karar: observation yazıldı

---

ADAY: streamline-search-mobile-menu-chain  
Gerekçe: 375/768'de header search ikonu gizli; predictive search SlideNav → Search link ile açılır. `capture-observation.mjs` tek prepareClick ile zincirlenemiyor — 375/768 PNG manuel chain ile alındı.  
Örnekler: `global-predictive-search` evidence  
Öneri: interact veya capture script multi-step  
Karar: observation yazıldı (delta)

---

ADAY: streamline-menu-drawer-1440  
Gerekçe: Masaüstünde SlideNav drawer yok; inline dropdown nav. 1440 `global-menu-drawer` PNG force-open ile alındı (gerçek UX değil).  
Örnekler: 1440 `.site-nav__dropdown` hover nav  
Öneri: leftover — 1440 drawer kanıtı sentetik  
Karar: onay bekliyor

---

ADAY: streamline-header-section-h0  
Gerekçe: `#shopify-section-…__header` wrapper h=0 (fixed overlay). Observation selector `.header-wrapper`.  
Örnekler: home header  
Öneri: pattern diğer Archetype temalarda da  
Karar: observation yazıldı

---

ADAY: streamline-pdp-empty-sub  
Gerekçe: PDP `#…__sub` boş section (h≈0).  
Örnekler: product template  
Öneri: leftover — boş placeholder  
Karar: onay bekliyor

---

ADAY: streamline-theme-store-id-null  
Gerekçe: Canlı Core vitrin `theme_store_id: null`; Theme Store listing id envantere yazılmadı (uydurulmadı).  
Öneri: bilgi notu  
Karar: onay bekliyor
