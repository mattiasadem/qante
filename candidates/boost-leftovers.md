# Boost (Clean Canvas) — leftovers

*Walk:* https://spark-theme.myshopify.com/ · preset `default` (Boost Spark)  
*Tema:* boost-v8.1.0 · schema_name Boost 8.1.0 · theme_store_id null

---

## Global / platform

| Bileşen | Durum | Not |
|---|---|---|
| `global-cart-drawer` | ⛔ yok | Header cart `<a href="/cart">` — sepet sayfası (`cart-page-main`). Canopy/Showcase drawer yok. |
| Newsletter popup | gözlemlenmedi | `section-popup` (`#shopify-section-sections--21310314610745__popup`) — Sign up and save. Submit yok (PII). Observation açılmadı. |
| Judge.me reviews | 3rd party | PDP/widget script; QANTE şema dışı. |
| Account / checkout | ⛔ dur | PII / ödeme yok. |

## Section adayları (şemaya yazılmadı)

| Shopify section type | Görüldü | Öneri |
|---|---|---|
| `shopify-section-banner` | boş placeholder | atlandı — içerik yok |
| `section-popup` | overlay newsletter | global overlay adayı; submit test edilmedi |

## Capture notları

| Konu | Not |
|---|---|
| Dismiss overlay | Mobilde dismiss bazen `/cart` redirect — script geri alıyor (hero capture log). |
| Live search | Desktop inline bar; modal yok. Mobilde `.search-bar.mobile-only` ayrı — tek observation desktop bar. |
| Desktop nav | 1440 inline `.site-nav` mega dropdown + hamburger; mega hover interact bu PR'da yok (statik 3vp). |
| `product-showcase-recently-viewed` | ⛔ zero-size | PDP `#…__recent` — `.recently-viewed.hidden` until cookie history; headless warmup 3 PDP ziyareti bile açmadı. Observation yok. |

## Açık soru

- `get-the-look` → `media-lookbook-banner` reuse doğru mu? Hotspot/pin UX Symmetry ile aynı aile; Boost'ta ürün carousel overlay.
- İkinci `promo-scrolling-marquee` home'da iki scrolling banner — aynı schemaId, `.2` observation.
