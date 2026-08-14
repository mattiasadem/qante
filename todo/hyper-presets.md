# Todo — Hyper preset delta özeti

*Parent:* [`hyper.md`](./hyper.md)  
*Kural:* Full kopya yok — sadece default(+ceramide)’de olmayan tipler + kritik reuse sighting

| Preset | Demo | Home § | NEW şema | Obs | Durum |
|---|---|---|---|---|---|
| default | hyper-theme-demo | ~23 | — | 80 | ✅ |
| ceramide | hyper-ceramide | 24 | 5 | 5 | ✅ [`hyper-ceramide.md`](./hyper-ceramide.md) |
| pillar | hyper-pillar | 22 | +grid/cards/tabs/newsletter… | 7 | ✅ [`hyper-pillar.md`](./hyper-pillar.md) |
| trove | hyper-trove | 19 | +banners/layered… | 5 | ✅ [`hyper-trove.md`](./hyper-trove.md) |
| nexvo | hyper-nexvo | 23 | +highlight/banner-tabs… | 7 | ✅ [`hyper-nexvo.md`](./hyper-nexvo.md) |

## Bu turda eklenen NEW şemalar (9)

1. `promo-grid-banner`
2. `collection-nav-image-cards`
3. `collection-nav-cards`
4. `product-showcase-tabs`
5. `lead-capture-newsletter-band`
6. `collection-nav-banners`
7. `editorial-layered-images`
8. `editorial-highlight-text-image`
9. `promo-banner-tabs`

## REUSE sightings (bundle / logos / comparison / tabs)

Pillar/Trove/Nexvo home’da `commerce-tools-products-bundle`, brand logos, nexvo `comparison-quick-table` + `collection-nav-tabs`.

## Capture notu

Overlay dismiss bazen collection URL’ine kaydırıyordu → `capture-observation.mjs` içinde URL-guard + scroll-hydrate; `isMobile` kapatıldı (Nexvo mobil redirect).

## Sonraki

- [x] Pillar/Trove/Nexvo evidence capture (3vp)
- [ ] Soft-reuse notları (slideshow_with_product, collection_list_with_banner) — isteğe bağlı
