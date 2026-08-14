# Todo — Impulse · Apothecary (delta)

*Kaynak:* https://impulse-theme-jewelry.myshopify.com/  
*Parent:* [`impulse.md`](./impulse.md)  
*Theme Store:* Apothecary → Jewelry demosu

**Şu anki odak:** ✅ delta + before-after yoklandı (drag action yok)

**Kural:** Full kopya yok — Fashion/Dune/Terrain’de olmayan tipler.

---

## Meta

| | |
|---|---|
| Preset | `apothecary` ✅ |
| Observation | **2** (3vp) |
| Evidence PNG | **6** |
| Şema | **2 reuse** · **0 yeni** |
| Sayfa | home · collection |

**Kapsam satırı:**  
`Impulse · Apothecary · delta · 2 gözlem · 6 kanıt · 0 yeni şema · Shopify`

---

## Home roster → karar

| Impulse section | QANTE | Karar |
|---|---|---|
| header | navigation-header-mega | reuse |
| shoppable_hero scent | media-lookbook-banner | reuse |
| text_with_icons | features-multicolumn | reuse |
| featured oils / tonka | product-showcase-grid-featured | reuse |
| promo_grid | promo-grid-banner | reuse |
| scent collection cards | collection-nav-image-cards | reuse |
| image_grid | media-mosaic-grid | reuse (Dune) |
| scrolling_text | promo-scrolling-marquee | ✅ |
| footer | footer-columns-newsletter | reuse |

PDP: HOW TO USE, icons, IWT, testimonial, aynı marquee, related — reuse.

---

## Capture checklist

| # | schemaId | sayfa | Done |
|---|---|---|---|
| 1 | promo-scrolling-marquee | home | [x] |
| 2 | before-after-slider | collection | [x] |

---

## Bilinçli boşluklar

1. Sticky header ince şeridi örtüyor — kare header gizlenerek alındı
2. PDP’deki ikinci marquee ayrıca çekilmedi
3. Add to Cart kart butonu / shoppable hero yeniden envanterlenmedi
4. before-after `changed` — yalnız sürükleme; action setinde drag yok, tıklama tutamacı oynatmıyor
