# Todo — Impulse (Shopify) · Fashion

*Kaynak:* https://impulse-theme-fashion.myshopify.com/  
*Preset:* `fashion` · Theme Store Impulse (Modern vitrin)

**Şu anki odak:** ✅ Fashion · ✅ Dune · ✅ Terrain · ✅ Apothecary — Impulse preset turu bitti

**Evidence:** `evidence/impulse/fashion/{sayfa}/` · `capture-observation.mjs` (3vp) · overlay: `capture-interaction.mjs`

---

## Meta

| | |
|---|---|
| Preset | `fashion` ✅ |
| Observation | **43** |
| Evidence PNG | **156** |
| Şema | **27 reuse** · **0 yeni** |
| Sayfa tipleri | home · collection · product-detail · search · cart · about-brand · contact · faq-support · blog-list · blog-post · lookbook |

**Kapsam satırı:**  
`Impulse · Fashion · 11 sayfa · 27 şema · 43 gözlem · 156 kanıt · 0 yeni şema · Shopify`

---

## Faz durumu

- [x] F1 Sayfa haritası
- [x] F2 Home + globals (mega · search · cart drawer · quick view)
- [x] F3 Collection / PLP
- [x] F4 PDP
- [x] F5 Search / cart sayfası
- [x] F6 Blog / about / contact / faq / lookbook / footer
- [x] Interact: mega · search · kart hover · cart drawer · quick view · FAQ · dolu cart · shoppable hero hotspot
- [x] Dune delta — [`impulse-dune.md`](./impulse-dune.md)
- [x] Terrain delta — [`impulse-terrain.md`](./impulse-terrain.md)
- [x] Apothecary delta — [`impulse-apothecary.md`](./impulse-apothecary.md)

---

## Sayfa özeti

| sayfa | Durum |
|---|---|
| `home` | ✅ 16 obs — announcement, shoppable hero, 2× collection cards, 2× featured, promo grid, video, journal IWT, slideshow, icons, footer, mega, search, cart drawer, quick view |
| `collection` | ✅ promo + PLP (`/collections/2026-new`). collection-header yükseklik 0, atlandı |
| `product-detail` | ✅ Wren Coat main + related. recently-viewed ilk ziyarette boş (kare yok) |
| `search` | ✅ `?q=dress` — ürün + yazı karışık |
| `cart` | ✅ boş + dolu sayfa · Popular picks |
| `about-brand` | ✅ `/pages/about` — overlay, story, 3× IWT, video, rich-text, More to Explore kartları |
| `contact` | ✅ overlay + form (gönderilmedi) |
| `faq-support` | ✅ akordeon kapalı + ilk soru açık |
| `blog-list` / `blog-post` | ✅ Journal + Looks we love |
| `lookbook` | ✅ `/pages/the-lookbook` — başlık + 2 mosaic |

---

## Interact

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open, changed | Clothing mega 5 kolon + kolon görseli |
| global-predictive-search | initial, input | sorgu `dress` |
| product-showcase-grid-featured | initial, hover | Quick View yalnız 1440 |
| global-cart-drawer | initial, filled, changed | PRE-ORDER → Wren XS; adet 1→2, $286→$572 |
| global-quick-view | open | Lido Short modal, yalnız 1440 |
| faq-collapsible-tabs | initial, changed | ilk soru açık |
| cart-page-main | initial, filled | sol satır + sağ özet |
| media-lookbook-banner | initial, open | Lena Midi + → ad / fiyat / VIEW PRODUCT popover |

---

## Şema dokunuşları (reuse + kanıt)

- `media-lookbook-banner` — `altBaslik` + `cta`
- `hero-slideshow` / `promo-grid-banner` — slayt/kart `altBaslik`
- `features-multicolumn` — `kolon` 3
- `product-showcase-grid-featured` — `kolon` 5
- `navigation-header-mega` — `kolonlar.max` 6 + kolon `gorsel` (önceki interact)
- `cart-page-main` / `global-quick-view` — dolu sepet + modal notu

---

## Bilinçli boşluklar

1. Newsletter popup — gizli; Prestige gibi aday, şema yok
2. Recently viewed — ilk ziyarette kutu 0
3. Collection header — yükseklik 0
4. PLP filtre açık hâli — statik karede bar var, tıklanmadı
5. Lookbook sayfasındaki mosaic’te hotspot yok; home shoppable hero popover çekildi. VIEW PRODUCT → QV ayrıca tıklanmadı
6. Contact form gönderilmedi · checkout yok
7. Impulse style preset’leri bitti (Dune / Terrain / Apothecary)
8. Policy sayfaları taranmadı

---

## Sonraki

- [x] Dune delta
- [x] Terrain delta
- [x] Apothecary delta
- [ ] Impact (Sound) — `todo/impact.md`
