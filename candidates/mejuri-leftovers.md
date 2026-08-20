# Mejuri — leftovers

*Kaynak:* https://mejuri.com/ · *Preset:* default · Mod A first inventory

## Platform

- Custom headless storefront; `#shopify-section-*` yok
- `Shopify.shop` / `Shopify.theme` / `theme_store_id` yok (uydurulmadı)
- Yalnız `@shopify/consent-tracking-api` v0.2 (`customerPrivacy`, `trackingConsent`)

## Sayfa / rota

| Rota | Durum | Not |
|---|---|---|
| `/blogs/journal` | 404 | Blog list `/blog?pageSize=15&page=1` kullanıldı |
| `/blog/styling/*` | 404 | Liste linkleri headless’te post detail açmıyor |
| `/search?q=*` | Kırık | `q=undefined`; NO RESULTS. Asıl arama search modal |
| `/cart` | Ayrı sayfa yok | Mini-cart drawer |
| Checkout / account login | PII | Envantere alınmadı |

## Section adayları (yeni şema yok)

| Görülen blok | Mevcut şema | Not |
|---|---|---|
| `notification-bar-carousel` | promo-announcement-bar | Carousel tek mesaj; timer yok |
| `homepage-services` 3 kart | features-multicolumn | Stores / Piercing / Events |
| `style-with-carousel-slider` | product-showcase-related | PDP “Style With” yatay slider |
| `image-navigation-carousel-slider` | collection-nav-slider | PLP kategori görsel şeridi |
| Blog `sidekick-section-half` kartları | promo-grid-banner / editorial | blog-list içinde tekrar eden sidekick |
| FAQ `quick-links` + `cards-section-still-need-help` | trust-contact-icon-band / lead-capture | Ayrı obs açılmadı (kapsam) |
| PDP `product-gallery` tam yükseklik | media-scrolling-gallery | Galeri ayrı section sınırı net değil |
| Mega menu hover (desktop) | navigation-header-mega knob | Nav butonları `accessibility-label=Menu`; hover panel kanıtı zayıf |

## Açık sorular

1. Blog post URL’leri neden 404? (Geo, auth, veya headless routing?)
2. Desktop mega menu ayrı panel mi yoksa inline nav mı?
3. `/search` query param neden `undefined`?
