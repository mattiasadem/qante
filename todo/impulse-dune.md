# Todo — Impulse · Dune (delta)

*Kaynak:* https://impulse-theme-apparel.myshopify.com/  
*Parent:* [`impulse.md`](./impulse.md) (Fashion tamam)  
*Theme Store:* Dune → Apparel demosu

**Şu anki odak:** ✅ sayfa taraması bitti — 8 delta obs, yeni tip yok

**Kural:** Full kopya yok — Fashion’da olmayan / farklı kurulan tipler.

---

## Meta

| | |
|---|---|
| Preset | `dune` ✅ |
| Observation | **8** (7 tam 3vp · recently-viewed kare yok) |
| Evidence PNG | **21** |
| Şema | **8 reuse** · **0 yeni** |
| Taranan sayfa | 8 (home, collection, PDP, search, cart, contact-us, faq, blog) |
| 404 | about · lookbook (`/pages/about`, `/pages/the-lookbook`) |
| Atlandı | theme-features (tema satış sayfası, Fashion’da da yok) |

**Kapsam satırı:**  
`Impulse · Dune · delta · 8 sayfa gezildi · 8 gözlem · 21 kanıt · 0 yeni şema · Shopify`

---

## Home roster → karar

| Impulse section | QANTE | Karar |
|---|---|---|
| announcement | promo-announcement-bar | reuse |
| header | navigation-header-mega | reuse · currency/adres şeridi |
| slideshow | hero-slideshow | reuse |
| featured-collection (toques) | product-showcase-grid-featured | reuse |
| shoppable_hero | media-lookbook-banner | reuse |
| promo-grid ×2 | promo-grid-banner | reuse |
| featured-collections / shop categories | collection-nav-image-cards | reuse |
| logo şeridi | social-proof-brand-logos | ✅ |
| hotspots SHOP THE LOOK | media-lookbook-slider | ✅ |
| background-image-text | editorial-image-with-text-overlay | reuse |
| 5-panel hat | product-showcase-featured | ✅ |
| featured sweatshirts | product-showcase-grid-featured | reuse |
| Black Friday timer | promo-banner-countdown | ✅ |
| görsel ızgara | media-mosaic-grid | ✅ |
| footer | footer-columns-newsletter | reuse |

PDP: testimonial ✅ · recently-viewed denendi (kare yok) · shop-the-look / video / countdown / featured reuse.

---

## Sayfa taraması

| sayfa | URL | Karar |
|---|---|---|
| home | `/` | 5 delta + reuse |
| collection | `/collections/all` | collection-banner ✅ · PLP reuse |
| product-detail | `/products/bear-pocket-tee-black` | testimonial ✅ · RV kare yok |
| search | `/search?q=tee` | reuse (141 sonuç, COLOR/PRICE/SIZE/TYPE/BRAND) |
| cart | `/cart` | reuse (boş + Popular Picks, Fashion ile aynı iskelet) |
| contact | `/pages/contact-us` | reuse (overlay + form). `/pages/contact` 404 |
| faq | `/pages/faq` | reuse |
| blog-list | `/blogs/news` | reuse (tek yazı + collection cards) |
| about | `/pages/about` | 404 |
| lookbook | `/pages/the-lookbook` | 404 |

---

## Capture checklist

| # | schemaId | sayfa | Done |
|---|---|---|---|
| 1 | social-proof-brand-logos | home | [x] |
| 2 | media-lookbook-slider | home | [x] |
| 3 | product-showcase-featured | home | [x] |
| 4 | promo-banner-countdown | home | [x] |
| 5 | media-mosaic-grid | home | [x] |
| 6 | testimonial-quote-carousel | product-detail | [x] |
| 7 | product-showcase-recently-viewed | product-detail | [x] kare yok |
| 8 | collection-banner | collection | [x] |

---

## Şema dokunuşları (reuse + kanıt)

- `product-showcase-featured` — `metin` + `cta` (IT'S BACK bloğu buy box değil)
- `media-lookbook-slider` — responsive: 1440 kart\|look, 375/768 istif

---

## Bilinçli boşluklar

1. Recently viewed — unique id ile de capture zero-size; kart çıkmadı
2. PDP flagship / retail store — IWT + adres, yeni şema açılmadı
3. PDP Fair Trade / video / clearance / reviews app — Fashion tipleri veya uygulama
4. Lookbook hotspot `changed` — interact bu turda yok (kart zaten açık)
5. Newsletter popup / checkout yok
6. `/pages/about` ve lookbook 404
7. Theme Features sayfası envanterlenmedi (tema pazarlama)
