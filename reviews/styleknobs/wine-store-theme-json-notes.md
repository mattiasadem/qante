# Wine Store `theme.json` — prop notları

*Kaynak:* `~/Dev/Kreis - Wine Store kopyası/src/theme.json` (4.3 MB, 28 Jul 2026)  
*Amaç:* Eski ikas editöründeki gerçek prop enflasyonu **ve** şekil motoru. Ham sayılar burada; tam okuma + nested item + sayfa kanıtı: `wine-store-shape-atlas.md`.

## Ham sayı

| | |
|---|---|
| Component | **68** (4’ü 0 prop: Basket, Category Products List, Search Product List, Brand Image List — ölü/placeholder) |
| Toplam prop | **3438** |
| Groups | 390 |
| customData ENUM | 70 |

**Tip dağılımı (asıl hikâye):**

| Tip | Adet | QANTE’de nereye gider |
|---|---|---|
| SLIDER | 1262 | neredeyse hepsi token (px, font-size, padding, gap) |
| COLOR | 946 | token |
| BOOLEAN | 427 | bir kısmı knob (`showX`, sticky, autoplay), çoğu kart detayı |
| CUSTOM (ENUM) | 357 | karışık: layout knob + fontWeight/textTransform token |
| TEXT / RICH_TEXT / IMAGE / LINK | ~422 | **slot / içerik** |
| PRODUCT_LIST / PRODUCT_DETAIL / CATEGORY… | ~20 | **dataBinding** |

Kabaca: **~%63 token (renk+ölçü)** · **~%13 içerik/data** · **~%24 “belki knob”** (bool+enum).  
Knob adayı 780 gibi duruyor ama içinden fontWeight, hover, shadow, badge rengi elenince gerçek yapısal knob **component başına 3–8**.

## Component başına şişme

| Component | Prop | Not |
|---|---|---|
| Product Detail | **361** | En uç. 93 COLOR + 82 IMAGE (attribute görselleri) + 74 BOOLEAN |
| Header | 177 | 76 COLOR |
| Countdown | 156 | 3 display mode tek component’te (only / product / slider) |
| Category Product Grid | 138 | PLP + kart stilleri birleşik |
| Brand Products List | 128 | Category Product Grid kopyası |
| Product Slider | 126 | |
| Hero Slider | 102 | |
| Product Grid | 95 | |
| Promo Banners | 92 | |
| Footer | 89 | |
| FAQ | 32 | görece sakin |
| Heading / Text / Separator | 6–9 | primitive |

Landing page 1–2 kopyaları (hero, ticker, FAQ split…) aynı prop setini **iki kez** taşıyor. Tema değil, kampanya sayfası şişmesi.

## PDP’de tabs/accordion — bizim tartışmaya kanıt

Wine Store Product Detail’de **editör seçeneği var:**

```
tabDisplayMode: tabs | accordion | inline
tabContentPlacement: aboveButtons | belowButtons | belowLayout
layoutMode: default | stacked | wide-gallery | compact
thumbnailPosition: left | right | top | bottom
stickyAddToCart: boolean
```

Yani eski editörde “Tabs mı Accordion mu?” **merchant seçimi**. Otomatik mobile dönüşüm değil.

QANTE kararıyla uyumlu: `product-info-tabs` → `layout: "tabs|accordion"` **styleKnob olsun**. (`inline` üçüncü değer; şimdilik bütçeyi şişirmesin, gerekirse sonra.)

## ENUM’lardan alınacaklar vs atılacaklar

**Al (yapısal — styleKnob adayı):**

- Tab Display Mode → `layout: tabs|accordion`
- Layout Mode / Bento Layout / Countdown Display Mode → `layout`
- Thumbnail Position → `gorselKonumu` / galeri layout
- Content Alignment → `hizalama`
- Aspect Ratio → `oran`
- Arrow/Dot Position → fazla detay; bizde sadece `okGoster` / `noktaGoster`
- Badge Position → `rozetKonumu` (nadiren)
- Swatch Shape → kart stili gri bölge; Base kart işi olabilir
- Info Column Position / Login Image Position → `gorselKonumu` / `side`
- Press Ticker Direction → `yon`
- Customer Reviews Layout: grid|list|split → `layout`
- Attribute Display Style: table|cards|inline-labels → `layout` (PDP)

**At (token / motion / içerik):**

- Font Weight, Text Transform, Heading Tag
- Hover Effect, Animation, Easing, Slider Effect (cube/flip)
- Overlay Type + Gradient Direction + renkler
- Countdown End Month/Day/Year/Time → **içerik/slot**, knob değil
- `sliderItems` / `banners` / `faqItems` / `menuItems` → DYNAMIC_LIST = slot

**Gri / abartı:**

- `productCardLayoutPreset: preset1–4` — isimsiz preset. QANTE’de `kartStili: minimal|framed` yeter; 4 kör preset yok.
- `promoLayoutPreset` + `promoLayoutPresetMobile` ayrı — mobile ayrı knob değil, `responsive` veya tek `layout`.
- Hero’da 3 ayrı aspect ratio (desktop/tablet/mobile) — token/compiler; şemada tek `oran`.
- `showSearchCardBrand`, `showSearchCardBundleBadge`, `showSearchCardVariantSwatches`… Header’da 10+ kart toggle. Section knob değil, **ürün kartı alt bileşeni**.

## BOOLEAN kalıbı

Hepsi `showX` / `isX` / `enableX`. Üç kova:

1. **Section knob:** `isSticky`, `optionsAutoplay`, `optionsShowArrows`, `optionsShowDots`, `showTabs`, `stickyAddToCart`
2. **Slot `zorunlu: false`:** `showTitle`, `showDescription`, `showButton`, `showBrand` — içerik yoksa gizlenir
3. **Kart/mikro UI (şemaya girmez):** `showSearchCardColorSwatches`, `cardShadow`, `imageHoverZoom`, `kenBurnsEnabled`

Eski kural “görünüyorsa prop” burayı patlatmış. QANTE: yalnız (1).

## Gruplar

390 group — çoğu `{component}-typo-grp`, `-colors-`, `-card-`, `-layout-`.  
Yeni Studio’daki “Content / Appearance” ayrımının şişmiş hali. QANTE şemasında group yok; compiler Appearance grubuna knob’ları, Content’e slot’ları basar.

## QANTE için tek cümlelik ders

Wine Store bir şişirme değil, **şekil motoru + token motoru**. Token’ı (~%63 COLOR+SLIDER) compiler’a bırakıyoruz. Şekil motorunu (layoutMode, tabs/accordion/inline, thumbnail 4 yön, countdown üç vitrin, reviews grid/list/split, bento, 43 DYNAMIC_LIST) sözlük §3.6 ve slot’lara taşıyoruz.

2–6 knob bütçesi **şema başına** kesim; sözlük **zengin**. Prop listesi kopyalanmaz. Atlas: `wine-store-shape-atlas.md`.
