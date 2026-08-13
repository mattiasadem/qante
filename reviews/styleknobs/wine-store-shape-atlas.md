# Wine Store theme.json — tam okuma (şekil atlası)

*Kaynak:* `~/Dev/Kreis - Wine Store kopyası/src/theme.json` (4.54 MB)  
*Ne okundu:* 68 component (props + groups + defaultPropValues), 117 customData (70 ENUM + 43 DYNAMIC_LIST nested field’lara kadar + 3 OBJECT), 33 page placement, INDEX/PRODUCT/CATEGORY propValues.

Önceki tur yalnız ENUM isimlerini saymıştı. Asıl emek **iç içe item şemaları, aynı component’in sayfada iki kez farklı kurulması, ve Header/PDP/Countdown/Offer’ın birden fazla ürün olması.**

---

## 0. Dosya ne

| | |
|---|---|
| `components` | 68 |
| `pages` | 33 (INDEX, PRODUCT, CATEGORY, SEARCH, CART, ACCOUNT, LOGIN… + CUSTOM: contact, faq, brands, b2b, legal, about…) |
| `customData` | 117 |
| `groups` | 390 |
| `settings` | boş (colors=[], fontFamily=null) — tema token’ı component prop’larında |
| `componentJson` / `commonPropValues` | hepsi boş |
| `defaultPropValues` | neredeyse her component dolu (PDP 350/361, Hero 101/102) |

Placement: `{ id, componentId, propValues }`. Şekil kanıtı şemada değil, **sayfa propValues + defaultPropValues**.

---

## 1. INDEX kanıtı — aynı component, iki şekil

Anasayfa 16 placement. Aynı id iki kez, farklı kurulum:

**Hero Slider ×2**
- 1: `optionsAutoplay=true`, `optionsShowDots=true`, `optionsShowArrows=true`, hiza center
- 2: `optionsAutoplay=false`, `optionsShowDots=false`, hiza **left**, kendi `sliderItems` görseli

**Promo Banners ×3**
- iki tanesi `gridColumnsDesktop=4`
- biri `gridColumnsDesktop=3`
- hepsi overlay + textAlign left

**Product Slider ×2** — aynı kart yüzeyi (brand/colors/favorites kapalı, nav açık)

Bu, “bir component milyon şekil” iddiasının **temadaki somut hali**. QANTE’de bu styleKnobs + slot; ayrı schemaId değil.

---

## 2. 68 component — ne işe yarıyor

### Storefront çekirdek (şekil motoru burada)

| Component | Prop | Ne |
|---|---|---|
| Product Detail | 361 | PDP OS: layoutMode + gallery + tabs + bundle + cross-sell + 82 keyword IMAGE |
| Header | 177 | 6 yüzey tek dosyada: nav, info bar, mega menu, search overlay, cart drawer, promo counter |
| Countdown | 156 | `displayMode` ile 3 vitrin: only / +product / +product slider |
| Category Product Grid | 138 | PLP: filtre + view toggle grid/list + infinite scroll + kart yüzeyi |
| Brand Products List | 128 | Category Product Grid **kopyası** (brand binding) |
| Product Slider | 126 | kart yüzeyi + autoplay + soldOut behavior |
| Hero Slider | 102 | section knobs + **slide item mini-tema** (~70 alan/slide) |
| Promo Banners | 92 | grid + overlay + clickArea; item: görsel/başlık/CTA/badge |
| Brands Grid | 94 | Promo Banners **kopyası** (item tipi Brand Grid Item, aynı alanlar) |
| Footer | 89 | kolonlar + info column + QR + social + payments |
| Product Showcase | 85 | tek ürün featured; thumb 4 yön (PDP galeri küçüğü) |
| Product Grid | 95 | homepage grid; `productCardLayoutPreset` 1–4 |
| Category Grid | 67 | koleksiyon kartı + overlay + ok |
| Account | 67 | hesap iskeleti (`isOneLineGridMenu`) |
| LP1 testimonial-slider | 82 | |
| LP1 product-offer | 81 | DTC offer OS (aşağı) |
| LP2 product-offer | 96 | aynı OS, Oudly default’ları |
| LP1 hero | 66 | split hero, mobile `reels9x16` |
| Customer Reviews | 54 | `grid\|list\|split` |
| Search Results | 49 | PLP’nin ince hali |
| Contact / auth formları | 44–48 | split image `left\|right` + `rounded\|split` |
| FAQ | 32 | search + kategori tab + accordion item |
| Cart (sayfa) | 25 | neredeyse yalnız token — şekil Header cart drawer’da |
| Checkout | 40 | kampanya/loyalty/tax toggle |
| Video Showcase | 35 | `videoPosition left\|right`, autoplay, controls |
| Testimonials | 25 | arrows/dots/autoplay + slidesPerView |
| Newsletter | 39 | approval `vertical\|horizontal` |
| About Us | 22 | story/values/stats listeleri |
| Blog List | 37 | excerpt/meta/author/date toggle |
| 404 | 20 | suggestions toggle |
| B2B Landing | 25 | **hepsi TEXT/IMAGE** — knob yok, hardcoded landing |
| Legal Page | 17 | `currentPage` |
| Turkey Wine Regions | 9 | bölge linkleri — mağaza özel |
| primitives | Heading 8, Text 9, Separator 6 | |
| ölü | Basket, Category Products List, Search Product List, Brand Image List = **0 prop** | |

Landing 1–2: hero, press-ticker, benefits-split, ugc, usp-ticker, faq, product-offer **çift**. Emek = bir DTC sayfa kiti, iki kez default doldurulmuş.

---

## 3. Asıl altın: nested item şemaları

ENUM’lar section iskeleti. **Item field’ları** her slide/banner/menü öğesinin kendi şekline girmesini sağlıyor. QANTE `slots.array.item`.

### Hero `Slider Item` (~70 alan) — mini tema

İçerik: Image + Mobile/Tablet Image, Title, Description, Subtitle, Eyebrow, Badge, Primary/Secondary CTA, Slide Link, Video URL + Mobile Video + Poster.

Şekil (item-level): `subtitlePosition above|below`, slide hiza yatay/dikey, `mobileImagePosition`, `showTitle/Description/Subtitle/Buttons`, Image Overlay, Video Autoplay/Loop/Muted/Controls.

Token (item-level, QANTE’de **yok** — compiler/slide styleProfile): slide renkleri, font size 3 breakpoint, overlay opacity, button hover seti, animation delay.

Yani merchant **slide başına** ayrı hiza/overlay/video/CTA gizleme yapabiliyor. Section knob’ları (autoplay, dots, aspect) bunun üstüne.

### Promo / Brand banner item

Image, Title, Description, Link, Button Text/Link, Badge + renk, Hide Title/Description/Button, alt/aria.

Section: kolon, overlay type, `clickArea card|button|none`, `contentPosition top|center|bottom`, hover zoom/lift.

### Menu Item → mega menu ağacı

```
Menu Item
  Title, Link, Is Megamenu
  Dropdown (OBJECT)
    Image
    Columns[] → Mega Menu Col
      Title
      Links[] → Label + Link
```

Header’daki emek mega menü **ağacı**, 177 prop’un COLOR kısmı değil.

### Footer Column Item

Title + Links[] (Label, Link). Plus section: info column `start|end`, QR bloğu, payment methods listesi, social OBJECT (6 URL).

### Highlights Info Item (PDP)

Icon ENUM (`truck|return|shield|check|box|clock|warehouse`) + Title + Description + 5 renk. PDP’de USP satırı.

### FAQ Item

Question, Answer, **Category** — FAQ component’inde `showCategories` + `showSearch` bunun için.

### Offer (LP product-offer) — 13 liste tipi tek section

Gallery images · Badges · Bullets · Flavor (label, image, isDefault) · Strength · Package (label, image, badge, isDefault) · Subscription plans (title, prices, topLabel, isDefault) · Frequencies · Highlights · Gifts (image, value, title) · Payment icons · Guarantees · FAQ.

Toggle: trust row, image arrows, payment icons, delivery row, guarantees, FAQ, stock notice, sticky gallery, openFirstFaq.

Bu QANTE’de tek `product-info` değil; **commerce-tools / offer builder** adayı. İki landing aynı iskelet, farklı default içerik (Deep8 vs Oudly).

### Diğer listeler (slot item = içerik, az şekil)

Announcement (bg+text+link) · Badge (icon, title, desc) · Testimonial (image, text, author, rating) · Approval (content, required, newsletter) · Press logos · Benefits (icon, title, desc) · USP ticker text · Ingredients (badge + 3 line + image) · UGC (video URL, poster) · Comparison row (label + 2 bool) · Timeline (label, title, desc) · Stats (value, text) · About story/values/stats · Bento item (span slider’ları + media type + 9’lu content position + hover + button).

Bento: item’da birden fazla `Layout` SLIDER — muhtemel grid span. Mosaic motoru item-level.

---

## 4. Composite component’ler (bir dosya = çok ürün)

### Header = 6 yüzey

1. Logo + menuItems (mega ağaç)
2. Info bar: 3 text/link slot, locale picker, service help, mobile show
3. Features: search, account, cart, language switcher `full_label|short_code|icon_only|icon_with_short_code`
4. Search overlay: kart yüzeyi (`showSearchCardBrand/Bundle/Color/Size swatches`)
5. Cart sidebar: empty suggestions PRODUCT_LIST, small slider style, view cart button
6. Promo counter: bitiş tarihi (içerik) + `promoLayoutPreset` 1–5 + mobile ayrı preset + align + sticky

`isSticky` header layout. INDEX’te promo counter kapalı, preset5/preset1 duruyor — yani **kullanılmayan şekil de şemada duruyor**.

QANTE: bunları zaten ayrı global şemalara böldük. Atlas’tan alınacak: her yüzeyin kendi 0–3 knob’u + mega menu slot ağacı + search kartı Base kart.

### Product Detail = PDP OS

Gruplar (token hariç şekil):

| Grup | Şekil |
|---|---|
| Product Layout | `layoutMode default\|stacked\|wide-gallery\|compact`, sticky ATC desktop+mobile ayrı |
| Typography | brand below name, big brand, title as `<p>` — çoğu SEO/token |
| Bundle | show bundle, collapsible, variants in bundle, hide prices |
| Buttons | buy now, full width, hide ATC, hide cart drawer |
| Gallery | zoom, thumbnails, `thumbnailPosition left\|right\|top\|bottom`, sticky gallery, cover vs contain, mobile arrows |
| Display | share, related, breadcrumbs, SKU, rating, tabs, short desc, tax, highlights, quantity **box vs dropdown** |
| Variants | show, swatch circle/square, label, color-only names, **dropdown vs swatch**, hide OOS, scroll options |
| Highlights Info | liste + title |
| Tab & Content | `tabs\|accordion\|inline`, `aboveButtons\|belowButtons\|belowLayout`, attributes `table\|cards\|inline-labels`, desc/details tab toggle |
| Cross sell | show, image ratio/fit |
| Campaigns | show |
| Badges | running out, free shipping pos, discount prefix/suffix + pos, favorites pos |
| Attribute Images | **82 IMAGE** — şarap aroma/food-pairing keyword map. Tema jenerik değil, **mağaza içeriği şemaya gömülmüş**. QANTE’ye 82 prop olarak taşınmaz; gerekirse `attributeImageMap` dataBinding |

Default’lar: `layoutMode=default`, `tabDisplayMode=tabs`, `tabContentPlacement=belowLayout`, `attributeDisplayStyle=table`, `thumbnailPosition=left`, `stickyAddToCart=false`, `isStickyImagesContainer=true`.

### Countdown = 3 component `displayMode` ile

- `countdown_only` — timer + heading + CTA + bg image
- `countdown_product` — + tek ürün kartı (ATC, qty align)
- `countdown_product_slider` — + gömülü product slider (kart yüzeyi tekrar: brand, rating, variants, ATC…)

`countdownPosition left|right` split. Bitiş tarihi slot. Timer unit renkleri token.

### Category Product Grid = PLP OS

`optionsShowFilters/Sorting/ViewToggle/Breadcrumb`, `defaultToListView`, `enableQuickAdd`, `enableInfiniteScroll`, ayrı `listImageAspectRatio` (list view), filtre türleri (category/price/availability), kart yüzeyi kopyası.

QANTE PLP: `filtreGoster`, `sortGoster`, `layout: grid|list` (view toggle), `kolon`, `hizliEkleGoster`. Kart Base.

### Product card yüzeyi (6+ component’te kopya)

Grid, Slider, Showcase, Category Grid, Brand List, Search, Countdown slider, Header search card:

showBrand, showDescription, showRating, showReviewCount, showColors, showVariantSize, showVariantOptionsName, showATC, showQty, qty align, addToCartFullWidth, showFavorites + 4 köşe, discount badge prefix/suffix + 4 köşe, free shipping badge + 4 köşe, secondImage hover, imageHoverZoom, cardShadow, showBorder, `productCardLayoutPreset` 1–4, `imageAspectRatio square|portrait|landscape|wide|auto`, soldOut `disabled|goToProduct|notifyMe`.

Bu **section knob değil**. QANTE Base kart + `kartStili` isimleri (preset1–4 çözülür). Section yalnız `kolon` / `layout grid|slider`.

---

## 5. Section-level şekil eksenleri (component → QANTE)

Hero: fullScreen H/W, `useAspectRatio` + 3 breakpoint ENUM (14/6…9/16), hiza H+V, mobile button `horizontal|stacked`, overlay/parallax/kenBurns, secondary CTA, arrows `inside|outside|bottom`, dots `bottom|overlay|outside`, autoplay + pauseOnHover + progressBar + pause button, `slide|fade|cube|coverflow|flip`, content anim, loop, swipe, keyboard.

`cube|coverflow` geometri değiştirir → `layout`/`gecis` adayı, saf motion değil. Ken Burns/parallax → styleProfile.motion.

Promo/Brands: kolon 3 breakpoint (INDEX 4 vs 3), overlay, clickArea, content pos, show title/desc/button.

Video: position left/right, full width, aspect, autoplay, controls, showContent.

Login/Register/Forgot/Contact: `imagePosition left|right`, `imageStyle rounded|split`.

Reviews: `grid|list|split` + show summary/filters/images/verified.

FAQ: showSearch, showCategories (item.category), openFirst — LP2 FAQ ayrıca `allowCollapseAll`.

Blog list: showCategory, excerpt, meta, readMore, date, author.

Footer: infoColumn show + start/end, QR 3 yerleşim, payment icons/labels/box, copyright/legal align.

Auth/newsletter approval: vertical/horizontal.

LP benefits/faq-split: `imageOnLeftDesktop`, `imageOnTopMobile`, `stackOnMobile` — QANTE `gorselKonumu` + responsive.

LP hero mobile: `reels9x16|4:5|3:4|1:1|full`, content `top|center|bottom`, CTA width `content|min|full`.

Account: `isOneLineGridMenu`.

Checkout: tax, loyalty, campaign design toggles (commerce, az şekil).

---

## 6. QANTE’ye ne taşınır (önceki turda kaçanlar)

**Sözlük / aile (şema başına hâlâ 2–6):**

- PLP `layout: grid|list` (view toggle) + `infiniteScroll` boolean adayı
- PDP `miktarGosterim: stepper|dropdown`, `varyantGosterim: swatch|dropdown`
- Hero `gecis: slide|fade` (cube/coverflow açık soru — 3D iskelet)
- FAQ `aramaGoster`, `kategoriTabGoster`
- Footer `side` (info column), `qrGoster`
- Offer builder ayrı şema ailesi: gallery sticky, plan/flavor/package **slots**, `sssGoster`, `garantiGoster`
- Item-level: hero slide `hizalama`/`dikeyHizalama`/`video` toggle’ları slot item’da; section’a kopyalama
- Mega menu slot ağacı Header’da
- Highlights USP: icon ENUM → slot item, PDP’de `highlightGoster`

**Taşınmaz (emek başka yerde):**

- 82 keyword IMAGE (mağaza içeriği)
- COLOR/SLIDER / fontWeight / textTransform / hover px
- 9’lu contentPosition ızgarası
- Kör preset1–5 (isimlendir)
- Promo desktop+mobile ayrı preset (responsive)
- Brands Grid / Promo Banners ve Category Grid / Brand List **çift şema** — QANTE’de tek şema, dataBinding değişir
- LP1/LP2 kopya component’ler — tek aile, iki observation
- B2B/Legal/Turkey Regions hardcoded
- 0-prop stub’lar

**Slot item şablonları (şimdi var, “sonraki tur” değil):**

Hero slide, banner, menu mega, footer col, FAQ (+category), offer flavor/package/plan/gift/guarantee, testimonial, USP, comparison row, timeline, bento (span+media).

---

## 7. Tek cümle

Bu JSON’un emeği prop sayısı değil: **(a)** aynı section’ın sayfada farklı propValues ile ikinci hayat, **(b)** Header/PDP/Countdown/Offer’ın içine gömülmüş birden fazla ürün, **(c)** slide/banner/menü/offer item’ının kendi mini şeması, **(d)** ürün kartı yüzeyinin 6 component’e kopyalanması. QANTE bunu şema başına 2–6 knob + zengin slot item + Base kart + ayrı global yüzeyler olarak taşır; 361 prop olarak değil.
