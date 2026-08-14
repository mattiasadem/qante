# Todo — Impulse · Terrain (delta)

*Kaynak:* https://impulse-theme-sports.myshopify.com/  
*Parent:* [`impulse.md`](./impulse.md) · Dune: [`impulse-dune.md`](./impulse-dune.md)  
*Theme Store:* Terrain → Sports demosu

**Şu anki odak:** ⚡ delta + collection-banner + about marquee — harita şemasız

**Kural:** Full kopya yok — Fashion/Dune’da olmayan / farklı kurulan tipler.

---

## Meta

| | |
|---|---|
| Preset | `terrain` ✅ |
| Observation | **5** (3vp) |
| Evidence PNG | **15** |
| Şema | **5 reuse** · **0 yeni** |
| Sayfa | home · product-detail · collection · about-brand |

**Kapsam satırı:**  
`Impulse · Terrain · delta · 5 gözlem · 15 kanıt · 0 yeni şema · Shopify`

---

## Home roster → karar

| Impulse section | QANTE | Karar |
|---|---|---|
| announcement | promo-announcement-bar | reuse |
| video hero NEXT LEVEL | media-video-hero | reuse (Fashion) |
| featured bikes + Customize | product-showcase-grid-featured | reuse |
| shoppable_hero derailleurs | media-lookbook-banner | reuse |
| ACV + 2026 Spider | product-showcase-featured ×2 | reuse (Dune) |
| collection cards | collection-nav-image-cards | reuse |
| Why Riders Choose Us | features-multicolumn | reuse |
| ince metin şeridi | editorial-rich-text | skip (h≈23) |
| Black Friday + görsel | promo-banner-countdown | ✅ |
| testimonials | testimonial-quote-carousel | reuse (Dune PDP) |
| Our blog | blog-list-main | ✅ |
| footer | footer-columns-newsletter | reuse |

PDP: Frame/Wheels/Chain/Casette → product-info-tabs ✅. Video / IWT / countdown / related reuse.

---

## Capture checklist

| # | schemaId | sayfa | Done |
|---|---|---|---|
| 1 | promo-banner-countdown | home | [x] |
| 2 | blog-list-main | home | [x] |
| 3 | product-info-tabs | product-detail | [x] |
| 4 | collection-banner | collection | [x] |
| 5 | promo-scrolling-marquee | about-brand | [x] |

---

## Şema dokunuşları (reuse + kanıt)

- `promo-banner-countdown` — `gorsel`
- `blog-list-main` — `cta` (VIEW ALL) + satır kırılması
- `product-info-tabs` — `gorsel` (hotspot’lu foto)

---

## Bilinçli boşluklar

1. Countdown 1440 ince bant, sticky header üstüne biniyor
2. Spec hotspot `changed` (Wheels/Chain) tıklanmadı
3. Recently viewed — başlık var, kart yok
4. Newsletter “Get 10% off” karesi envanterde yok
5. Video hero / dual featured yeniden çekilmedi
