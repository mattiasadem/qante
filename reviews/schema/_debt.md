# Şema borç raporu

*Üretim: `node scripts/validate-schemas.mjs` · 2026-08-13 · taksonomi v0.1.0.json*

**59 şema · 0 error · 0 warn · 59 temiz**

Sözleşme: [`schema-standard.md`](../../schema-standard.md) · [`styleknobs-standard.md`](../../styleknobs-standard.md)

> `/qante-discover` Mod B (2026-08-13, 2. geçiş): aile taramasıyla uydurulan knob'lar geri alındı. Instance knob'lar mevcut Hyper evidence PNG'lerine (1440 + 375) bakılarak yeniden yazıldı. Validator yeşili “gördüm” demek değil — yeşil, sözleşme + `_knobNote` ile.

## Bu geçişte bilinçli olarak yazılmayanlar

Screenshot'ta görünmeyen family knob'lar **geri alındı**:

- `product-info-main` `sticky` — karede yapışkan davranış yok
- `product-info-tabs` cihaz haritası (`masaustu: tabs|accordion|inline`, `mobil: accordion|dropdown`) — 1440 ve 375 yatay üst sekme
- `social-proof-brand-logos` `layout: static|marquee` — üç preset de still ızgara/satır
- `editorial-highlight-text-image` `gorselKonumu: left|right|background` — görseller satır içi pill
- `collection-banner` `yukseklik` — yalnız sol başlık+metin
- `media-video-hero` `autoplay` — still karede okunmaz
- `promo-banner-tabs` `autoplay: false` — hareket yok
- `cart-page-main` `layout: two-column|stacked` — evidence boş sepet

## `_knobNote` (29 instance + 1 global) — bütçe altında, uydurulmadı

| Şema | Knob | Gerekçe (kısa) |
|---|---|---|
| collection-banner | 1 | Sol başlık+açıklama |
| editorial-highlight-text-image | 1 | Ortalı cümle + inline pill |
| page-content-main | 1 | Contact başlık+paragraf |
| product-showcase-recently-viewed | 1 | Tek ürün kartı |
| blog-post-main | 2 | Dar okuma sütunu |
| cart-page-main | 2 | Boş sepet |
| collection-nav-cards | 2 | 4 kart + ok |
| editorial-layered-images | 2 | Overlap; stack mobil otomatik |
| media-lookbook-banner | 2 | Tek foto + hotspot |
| media-scrolling-gallery | 2 | 5× 1:1 still kiremit |
| navigation-breadcrumbs | 2 | Pipe ayraç; sözlük slash\|chevron |
| blog-list-main | 3 | 3 kolon + kategori tab |
| collection-nav-banners | 3 | Tek Trove kompozisyon |
| collection-nav-tabs | 3 | media-right + yan liste |
| editorial-image-with-text | 3 | sol/sağ + rozet; oran ölçülmedi |
| editorial-image-with-text-overlay | 3 | overlay sol-üst |
| editorial-rich-text | 3 | framed vs düz |
| faq-collapsible-tabs | 3 | Accordion; arama yok |
| features-slider-multicolumn | 3 | Slider+2×2 birlikte |
| lead-capture-form | 3 | form \| Need Help |
| lead-capture-newsletter-band | 3 | Trove split / Pillar inline |
| media-lookbook-slider | 3 | Peek-slider + hotspot + ok |
| media-video-hero | 3 | Overlay center |
| product-info-tabs | 3 | Yalnız yatay tabs |
| product-showcase-related | 3 | 5 kart / mobil slider otomatik |
| product-showcase-tabs | 3 | split+yan / stacked+üst birlikte |
| promo-banner-countdown | 3 | Bant + timer |
| promo-banner-tabs | 3 | Yan sekme + yüzen kart |
| promo-grid-banner | 3 | 2 vs 3 görsel kolon |
| global-cart-drawer | 0 | Overlay; *Goster uydurulmadı |

## Açık soru

1. Breadcrumb ayraç PNG'de **pipe**; sözlük yalnız `slash|chevron`. Sözlüğe `pipe` eklensin mi?
2. `cart-page-main` dolu sepet (satır + özet) henüz yakalanmadı — two-column o zaman mı yazılır?
3. `product-info-tabs`: Wine Store atlas'ta accordion/dropdown var; Hyper'da her iki viewport tabs. Editörde atlas ekseni açılsın mı?
