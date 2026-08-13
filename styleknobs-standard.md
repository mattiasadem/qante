# styleKnobs Standardı — v1.2

*Tarih: 2026-08-13 · Kaynaklar: QANTE brief §4 + Hyper walkthrough · eski editör (`Kreis - Wine Store/docs/0-PROFESSIONAL-PROPS-STANDARD.md`, `1-COMPONENT-PROPS-IMPLEMENTATION-GUIDE.md`, `src/theme.json` 68 component / 3438 prop) · yeni editör (Studio Code mode, `kreis-km/CLAUDE.md`) · 59 şemalık canlı envanter taraması*

**Kapsam:** Bu dosya yalnız `styleKnobs` alanını tanımlar. Şemanın diğer 11 alanı (slots, dataBindings, actions, hooks, scope…) → [`schema-standard.md`](./schema-standard.md). Doğrulama: `node scripts/validate-schemas.mjs`.

**Amaç:** styleKnobs için tek sözlük. Ne QANTE'nin bugünkü aşırı minimalizmi (izlenimsel, şemadan şemaya değişen adlar) ne eski editörün 50–100+ prop maksimalizmi. **Hedef: tabanın biraz üstü — bölümün gerçek şekillerini kapsa, sadece 1-2 knob'la geçme.**

**Bütçe (v1.2 gevşetildi):** instance section başına **4–8 knob** tipik, global overlay 0–4. Alt sınır artık "olabildiğince az" değil; **bölüm kaç şekle giriyorsa o kadar knob**. Bir bölümün 2 knob'u varsa gerekçesi olmalı (gerçekten o kadar sade). Üst sınır 8'i aşıyorsa `_knobNote` ile neden. `{}` yalnız gerçekten şekilsiz overlay/global için meşru.

Wine Store `theme.json` bir şişirme değil, **şekil motoru**: aynı component onlarca merchant kombinasyonuyla bambaşka vitrin olur. QANTE o emeği **sözlük + aile değer setleri** olarak taşır (prop sayısını değil). Atlas: `reviews/styleknobs/wine-store-shape-atlas.md`.

---

## 1. Üç kaynak, üç öğreti

| Kaynak | Yaklaşım | Alınan ders |
|---|---|---|
| **Eski editör** (Wine Store) | Bir component, birçok şekil: layout/align/ratio/tabs/sticky ENUM’ları + 43 DYNAMIC_LIST slot tipi + ~%63 COLOR/SLIDER token | **Şekil eksenlerini sonuna kadar kullan** (layout değer setleri, konum, oran, sticky, autoplay, üç’lü countdown, reviews grid/list/split, bento). Token motorunu (renk, px, fontWeight, hover) taşıma. Kör `preset1–5` yok — aynı emek isimli `layout` / `kartStili` |
| **Yeni editör** (Studio Code mode) | CLI ile TEXT/COLOR/BOOLEAN/ENUM/SLIDER prop'ları; prop groups; "No Static Text"; section'a zorunlu `backgroundColor` | Prop tipleri = knob değer biçimlerimizin karşılığı (ENUM→pipe, BOOLEAN→bool, SLIDER→sayı). `backgroundColor` gibi zorunlu renk prop'ları **compiler seviyesinde token'dan** üretilir, şemaya girmez. Knob'lar editörde tek "Appearance/Layout" grubuna map olur |
| **QANTE şeması** (mevcut) | Yapısal seçim, token yasak, `{}` = knob yok | Doğru katman; eksik olan **dondurulmuş sözlük** — 50 anahtarın 35'i tek şemada geçiyor, aynı kavram 3–4 farklı adla yazılmış |

**Katman kuralı (değişmez):**

```
İçerik      → slots           (başlık, görsel, CTA…)
Yapı/davranış → styleKnobs    (kolon, layout, autoplay…)     ← BU DOSYA
Görsel dil  → token + styleProfile (renk, font, spacing, radius, shadow, motion)
```

---

## 2. Knob mu değil mi? — karar testi

Sırayla sor; ilk "evet"te dur:

1. **İçerik mi?** (metin/görsel/link değişiyor) → slot. Knob değil.
2. **Renk / font / spacing / radius / gölge mi?** → token. Knob değil. *(Eski editörün `titleColor`, `buttonHoverBgColor`, `sectionPadding` prop'ları compiler'da token referansına çevrilir.)*
3. **Hover/animasyon hissi mi?** (lift, zoom, easing, süre) → `styleProfile.motion`. Knob değil.
4. **Bloğun iskeletini veya davranışını değiştiriyor mu?** (kolon sayısı, medya konumu, slider↔grid, autoplay, sticky) → **knob.**
5. **Bir alt öğenin var/yok'u mu?** → önce slot'ta `zorunlu: false` ile çözülür mü bak. Demo editöründe *ayrı toggle* olarak sunuluyorsa `*Goster` knob'u yaz.

**Preset kanıtı (en güçlü sinyal):** Aynı şema iki preset'te farklı kuruluyorsa (ör. Pillar 3 kolon, Nexvo 4 kolon) o boyut knob'dur. Tüm preset'lerde sabitse **yine de** o eksen bölümün doğasında bir seçimse (Wine Store'da merchant ENUM'u varsa) knob adayıdır — kör atmak yerine ekle, gözleme "tek preset'te doğrulanamadı" notu düş.

---

## 2.1 Toplama taraması — bütçeye buradan çıkılır

Yukarıdaki test **eleyicidir**: sürekli "bu da knob değil" der. Tek başına uygulanırsa 2 knob'la biter ve §5 bütçesi (4–8) tutmaz. Eleme bittikten sonra **bu tarama yapılır.**

Beş ekseni sırayla geç, her birinde *"bu bölümde bu eksen anlamlı bir seçim mi?"* diye sor. Anlamlıysa §3'ten adını al.

| # | Eksen | Sorulacak soru | Tipik knob |
|---|---|---|---|
| 1 | **İskelet** | Bu blok bambaşka bir kuruluma girebilir mi? | `layout`, `kolon` |
| 2 | **Konum** | Görselin/metnin yeri değişebilir mi? | `gorselKonumu`, `metinKonumu`, `hizalama` |
| 3 | **Ölçü** | Boyut/oran/yoğunluk merchant tercihi mi? | `oran`, `yukseklik`, `yogunluk`, `genislik` |
| 4 | **Davranış** | Hareket/etkileşim açılıp kapanabilir mi? | `autoplay`, `sticky`, `loop`, `infiniteScroll`, `*Gosterim` |
| 5 | **Gösterge** | Editörde ayrı toggle olan bir alt öğe var mı? | `okGoster`, `noktaGoster`, `rozetGoster`… |

**Doğal denge:** 1 iskelet + 1 konum/ölçü + 1–2 davranış + 1 gösterge ≈ **4–6 knob**. Bütçe buradan çıkar, uydurmadan.

**Tarama sırası (kanıt gücüne göre):**
1. Preset farkı → kesin knob, doğrudan ekle
2. 375 ↔ 1440 farkı → responsive ekseni (§2.5'e göre knob mu `responsive` mi karar ver)
3. Ekran görüntüsünde görünen toggle/ok/dot → `*Goster`
4. §3.6 aile setinde o bölüm için kanıtlı eksen → ekle + `Açık soru: bizim editörde olsun mu?`

**Dur kuralı:** Beş ekseni geçtin ve hâlâ 4'ün altındaysan **uydurma.** O bölüm gerçekten sade demektir — `_knobNote` ile gerekçesini yaz (ör. `"_knobNote": "Tek görsel + tek metin; iskelet varyasyonu yok"`). Aşırı minimalizm hata, ama uydurma daha büyük hata.

---

## 2.5 Responsive (cihaza göre değişen şekil)

Bir şekil cihaza göre değişiyorsa üç durumdan biridir:

1. **Otomatik** — mağaza sahibi seçmiyor, ekran küçülünce component kendi değişiyor.
   → styleKnob **değil**. Şemanın `responsive` alanına düz cümle: `"responsive": "Mobilde accordion"`.

2. **Tek seçim, her cihazda aynı** — mağaza sahibi bir şekil seçiyor, hepsinde geçerli.
   → tek pipe-enum knob: `"layout": "tabs|accordion"`. `responsive` boş.

3. **Cihaz başına ayrı seçim** — masaüstü "tabs", mobil "dropdown" bağımsız seçilebiliyor.
   → **cihaz haritası** knob (aşağı §5 değer biçimi):
   ```json
   "styleKnobs": {
     "layout": { "masaustu": "tabs|accordion", "mobil": "accordion|dropdown" }
   }
   ```
   Anahtarlar sabit: `masaustu`, `tablet`, `mobil` (tablet opsiyonel). Değer yine pipe-enum.

**Kural:** Aynı knob için hem cihaz haritası (durum 3) hem `responsive` metni (durum 1) **birlikte yazılmaz** — çelişir. Ya merchant seçiyor (harita) ya otomatik (`responsive`). Tek seçimde (durum 2) `responsive` yalnız otomatik bir *yan* davranışı anlatıyorsa kullanılır, aynı ekseni tekrar etmez.

---

## 3. Dondurulmuş çekirdek sözlük

Bu adlar ve değer biçimleri sabittir. Yeni şema bu tablodan seçer; tabloda olmayan bir kavram gerekirse §5'teki süreçle eklenir.

### 3.1 Yerleşim

| Knob | Değer biçimi | Ne seçer | Yasak eşanlamlılar |
|---|---|---|---|
| `kolon` | `[2, 3, 4]` (sayı dizisi) | Grid kolon seçenekleri | `kolonSayisi`, `gridColumns` |
| `layout` | pipe enum, ≥2 değer (`grid\|slider`, `horizontal\|stacked`) | **Bloğun ana iskeleti** — şema başına yalnız 1 tane (aşağı kural) | tek değerli `layout` yazma; ikinci bir `layout` |
| `hizalama` | `left\|center\|right` (alt küme olabilir) | Yatay içerik hizası | `textAlign`, `contentAlignment` |
| `dikeyHizalama` | `top\|center\|bottom` | Dikey hiza (hero overlay, login, counter) | `verticalAlign` — yalnız yatay yetmezse ekle; ikisi birden nadir |
| `yogunluk` | `compact\|regular\|airy` (alt küme) | Boşluk yoğunluğu | `airy` tek başına ölçek uydurma |
| `yukseklik` | `sm\|md\|lg` **veya** `compact\|regular\|tall` (ikisinden biri, karıştırma) | Section boyu | px değeri; Wine Store `fullScreenHeight` → `yukseklik` enum’una `full` eklenebilir |
| `genislik` | `narrow\|wide` | İçerik genişliği | `containerMaxWidth` px; `buttonWidth: 100%\|auto` → `butonGenislik: full\|auto` (Base buton, şema değil) |
| `oran` | `1:1\|4:5\|16:9` (alt küme; aile seti §3.6) | Medya aspect | `imageAspectRatio`, `square\|portrait\|landscape` — QANTE oran yazımı `W:H` |

**`layout` tek anahtar kuralı:** `layout` **bloğun ana iskeletine** ayrılmıştır ve bir şemada **yalnız bir kez** geçer (JSON'da aynı anahtar iki kez olamaz — ikinci yazım sessizce birinciyi ezer).

Bölümün içinde *ikinci* bir düzen seçimi varsa `layout` deme, ne düzenlediğini adlandır:

| Durum | Yanlış | Doğru |
|---|---|---|
| PDP iskeleti + özellik tablosu | `layout` ×2 | `layout` (iskelet) + `ozellikGosterim` (§3.3) |
| Kart yüzeyi ayrı seçiliyorsa | `layout` ×2 | `layout` + `kartStili` (§3.5) |
| Miktar/varyant UI biçimi | `layout` ×2 | `miktarGosterim` / `varyantGosterim` (§3.3) |

Genel kalıp: ikinci düzen ekseni **`{ne}Gosterim`** olur. Sözlükte karşılığı yoksa §5 süreciyle ekle, `layout`'a doldurma.

### 3.2 Konum

| Knob | Değer biçimi | Ne seçer | Yasak |
|---|---|---|---|
| `gorselKonumu` | `left\|right\|background` (+ galeride `top\|bottom`) | Medyanın yeri | `imagePozisyon`, `thumbnailPosition`, `videoPosition`, `loginImagePosition` |
| `metinKonumu` | `overlay\|below` / `left\|right\|center` | Metnin görsele göre yeri | 9’lu `contentPosition` ızgarası (top-left…bottom-right) **token/compiler** — knob’a 9 değer koyma |
| `tabPozisyon` | `top\|side` | Sekme yeri | `sekmeKonumu` |
| `side` | `left\|right` | Drawer/floating tab kenarı; info column `start\|end` | `infoColumnPosition` |
| `rozetKonumu` | `top-left\|top-right\|bottom-left\|bottom-right` | Badge köşesi | `badgePosition`, `topLeft` camelCase |
| `altBaslikKonumu` | `above\|below` | Subtitle’ın başlığa göre yeri | yalnız başlık+subtitle çifti olan şemada; çoğu yerde slot sırası yeter |
| `icerikYeri` | `aboveButtons\|belowButtons\|belowLayout` | PDP tab içeriğinin butonlara göre yeri | `tabContentPlacement` — başka şemaya koyma |

\* İkisi birden gerekiyorsa: görseli `gorselKonumu`, metni `metinKonumu` yönetir; tek eksen varsa yalnız birini kullan.

### 3.3 Davranış

| Knob | Değer biçimi | Ne seçer | Yasak |
|---|---|---|---|
| `autoplay` | boolean | Otomatik oynatma/kaydırma | `otomatikOynat`, `otomatikKaydir`, `rotasyon: auto`, `isAutoPlay`, `enableAutoplay`, `optionsAutoplay` |
| `pauseOnHover` | boolean | Hover'da durma | — |
| `loop` | boolean | Slider/marquee döngü | `enableLoop` — yalnız demo’da loop farkı görünüyorsa |
| `hiz` | `slow\|normal\|fast` | Marquee/slider hızı | ms değeri (`autoplayDelay` compiler işi) |
| `yon` | `left\|right` / `yatay\|dikey` | Akış/slider yönü | `scrollDirection`, `pressTickerDirection` |
| `sticky` | boolean | Yapışkan davranış | `isSticky`, `stickyAddToCart`, `isStickyImagesContainer`, `showStickyGallery` |
| `kapatilabilir` | boolean | Kullanıcı kapatabilir mi | `dismissible` |
| `allowMultipleOpen` | boolean | Accordion çoklu açılım | `allowCollapseAll` tersi — ikisini birden yazma |
| `openFirst` | boolean | Accordion/FAQ ilk öğe açık | `openFirstFaq`, `openFirstItem` |
| `secimZorunlu` | boolean | Bundle vb. seçim kısıtı | — |
| `miktarGosterim` | `stepper\|dropdown` | PDP/kart miktar UI | `isQuantityBoxDropdown` |
| `varyantGosterim` | `swatch\|dropdown` | PDP varyant UI | `isColorVariantsDropdown` |
| `ozellikGosterim` | `table\|cards\|inline-labels` | Ürün özellik/spec bloğunun biçimi | `attributeDisplayStyle`; **`layout` yazma** — o iskelete ayrılmış (§3.1) |
| `gecis` | `slide\|fade` | Slider geçiş geometrisi | `optionsAnimationEffect`; cube/coverflow açık soru |
| `infiniteScroll` | boolean | PLP sayfalama vs sonsuz | `enableInfiniteScroll` |

### 3.4 Gösterge (`*Goster` boolean ailesi)

Slot `zorunlu: false` ile çözülemiyorsa (editörde ayrı toggle) kullan:

| Knob | Ne |
|---|---|
| `okGoster` | Slider okları |
| `noktaGoster` | Pagination dots |
| `rozetGoster` | Ürün/kart rozetleri |
| `hizliEkleGoster` | Quick add butonu |
| `filtreGoster` / `sortGoster` | PLP filtre/sıralama çubuğu |
| `ikonGoster` / `gorselGoster` | Kart ikonu/görseli |
| `hotspotGoster` | Lookbook hotspot |
| `timerGoster` | Countdown |
| `mobilAccordion` | Mobilde accordion'a düşme |
| `aramaGoster` | FAQ/PLP içi arama |
| `kategoriTabGoster` | FAQ kategori sekmeleri |
| `qrGoster` | Footer QR bloğu |

Kural: ad her zaman `{oge}Goster`, İngilizce `show{X}` yazma. (`badgeGoster` → `rozetGoster`.)

### 3.5 Kart/öğe stili

| Knob | Değer biçimi | Not |
|---|---|---|
| `kartStili` | `minimal\|framed` / `image-overlay\|image-below` / `circle\|rounded\|square` | Yapısal kart iskeleti — renk/gölge değil. Wine Store `productCardLayoutPreset: preset1–4` ve `promoLayoutPreset: preset1–5` **taşınmaz**; aynı emek isimli değerlere çevrilir |
| `gorselBoyut` | `sm\|md\|lg` | Avatar/thumbnail ölçeği |
| `swatchSekli` | `circle\|square` | Varyant swatch — Base kart; section’a yalnız PDP/PLP şeması swatch’i kendi çiziyorsa |
| `separator` | `slash\|chevron` | Breadcrumb ayracı |
| `dilGosterim` | `full_label\|short_code\|icon_only\|icon_with_short_code` | Header locale switcher — başka şemaya koyma |

### 3.6 Aile değer setleri (Wine Store kanıtı)

Çekirdek adlar §3.1–3.5. **Değerler section ailesine göre** — her şemaya tüm seti koyma. Wine Store’da bu ENUM’lar gerçek merchant seçimiydi; Hyper screenshot’ında tek konfig görünse bile auditor “bizim editörde olsun mu?” diye sorar (kör uydurma değil, atlas kanıtı).

Bütçe §5'te (instance 4–8 tipik); set buradan **alt küme** seçilir, tüm satır kopyalanmaz.

| Aile | Knob | Kanıtlı değerler (Wine Store → QANTE) |
|---|---|---|
| **Hero / slider** | `oran` | `14:6\|16:9\|4:3\|1:1\|3:4\|9:16` (desktop); mobile alt küme `9:16\|4:5\|3:4\|1:1\|full` — iki knob yazma, `oran` + `responsive` notu |
| | `gecis` | `slide\|fade` — Wine Store ayrıca `cube\|coverflow\|flip` (3D iskelet). Açık soru; şimdilik iki. Ken Burns/parallax → motion |
| | (davranış) | `autoplay` `pauseOnHover` `loop` `okGoster` `noktaGoster` + `hizalama`/`dikeyHizalama`/`metinKonumu`. Slide başına hiza/video → **slot item**, section’a kopyalama |
| **PDP (`product-info-*`)** | `layout` | `default\|stacked\|wide-gallery\|compact` (`layoutMode`) |
| | `gorselKonumu` | galeri thumb: `left\|right\|top\|bottom` |
| | `layout` (tabs şeması) | `tabs\|accordion\|inline` — `inline` 3. değer, bütçe yetmezse iki |
| | `icerikYeri` | `aboveButtons\|belowButtons\|belowLayout` (`tabContentPlacement`) — yalnız tabs şeması, bütçe 5. knob |
| | `sticky` | sticky ATC / sticky gallery (ikisinden biri; ikisi ayrıysa `_knobNote`) |
| | `ozellikGosterim` | `table\|cards\|inline-labels` — spec bloğu. `layout` ile aynı şemada olabilir, çakışmaz |
| | `miktarGosterim` | `stepper\|dropdown` |
| | `varyantGosterim` | `swatch\|dropdown` |
| **Countdown / promo** | `layout` | `countdown_only\|countdown_product\|countdown_product_slider` — **tek şema üç vitrin**; ayrı schemaId ancak iskeletler paylaşılmıyorsa |
| **Reviews** | `layout` | `grid\|list\|split` |
| **Bento / mosaic editorial** | `layout` | `custom\|hero-left\|hero-right\|mosaic\|equal` — item span slot’ta |
| **Auth / split page** | `layout` | `rounded\|split`; `gorselKonumu: left\|right` |
| **Approval / USP row** | `layout` | `vertical\|horizontal` |
| **Mobile CTA cluster** | `layout` | `horizontal\|stacked` — merchant seçiyorsa knob; cihaz otomatikse `responsive` |
| **Header locale** | `dilGosterim` | `full_label\|short_code\|icon_only\|icon_with_short_code` — yalnız header’da, bütçeden 1 |
| **Header promo** | `layout` / `kartStili` | Wine Store `promoLayoutPreset` 1–5 — isimlendir, kör preset yok; mobile ayrı preset → `responsive` |
| **PLP / product grid** | `kolon` + `layout` | `grid\|list` (view toggle) ve/veya `grid\|slider` (homepage). Kart yüzeyi Base `kartStili` (preset1–4 yok) |
| | `infiniteScroll` | boolean — PLP’de kanıtlı |
| **FAQ** | `aramaGoster` / `kategoriTabGoster` | `*Goster` ailesi; item’da `category` slot alanı. `allowMultipleOpen` / `openFirst` |
| **Footer** | `side` | info column `start\|end`; `qrGoster` |
| **Video / split editorial** | `gorselKonumu` | `left\|right`; LP `imageOnLeftDesktop` aynı eksen, mobile `stack` → `responsive` |
| **Offer builder (LP product-offer)** | ayrı şema ailesi | flavor/package/plan/gift **slots**; `sticky` gallery; `sssGoster` `garantiGoster` `odemeIkonGoster`. PDP değil, commerce-tools |
| **Blog list** | `*Goster` | excerpt, meta, author, date, readMore — çoğu slot `zorunlu:false`; editör toggle ise knob |
| **Mega menu** | slot ağacı | Menu Item → Dropdown(image, columns[]) → Col(title, links[]) — knob değil, Header slot |

**Knob değil (Wine Store’da vardı, QANTE’de başka katman):**

| Wine Store | Neden değil |
|---|---|
| `headingTag` h1–h6 | SEO/içerik — slot veya compiler |
| `mediaType` image\|video | slot (hangi medya duruyor) |
| `fontWeight`, `textTransform`, `hoverEffect`, `easing`, Ken Burns, parallax | token / styleProfile.motion |
| `objectFit` / `imageFit` cover\|contain | compiler |
| `overlayType` none\|solid\|gradient | token overlay |
| `arrowPosition` / `dotPosition` inside\|outside | `okGoster`/`noktaGoster` yeter; konum compiler |
| `contentPosition` 9’lu ızgara | `hizalama` + `dikeyHizalama` veya `metinKonumu` |
| `countdownEndDay/Month/Year/Time` | **içerik** (bitiş anı) — slot |
| `soldOutButtonBehavior` | commerce/action |
| `clickArea` card\|button\|none | action (kartın neresi link) — Base kart |
| `discountBadgeForm` prefix\|suffix | içerik formatı / i18n |
| 82× `keywordImage_*` (PDP) | mağaza içeriği şemaya gömülmüş; `attributeImageMap` dataBinding belki, 82 knob değil |
| DYNAMIC_LIST item COLOR/SLIDER | item token; QANTE item’da yalnız içerik + 1–2 şekil (hiza, hide title) |
| Brands Grid vs Promo Banners; Category Grid vs Brand List; LP1 vs LP2 | **çift şema değil** — tek şema, dataBinding / observation değişir |

---

## 4. Eski editör kategorileri → nereye gider

Eski standardın 16 kategorisinin haritası (referans — tartışma çıkarsa buraya bak):

| Eski kategori | Gittiği yer |
|---|---|
| 1 Layout & dimensions | `yukseklik`/`genislik` enum knob; px slider'ları **compiler** |
| 2 Backgrounds | token (`backgroundColor` compiler'da her section'a bağlanır) |
| 3–4 Typography | token + text style |
| 5 Buttons | token + Base buton bileşeni |
| 6 Cards | yapısal kısmı `kartStili`; renk/gölge token |
| 7 Images | `oran`, `metinKonumu`; zoom/objectFit → styleProfile/compiler |
| 8 Arrows | `okGoster` (tek knob; boyut/renk token) |
| 9 Dots | `noktaGoster` |
| 10 Overlays | `gorselKonumu: background` + token overlay |
| 11 Animations | styleProfile.motion |
| 12 Spacing & grid | `kolon`, `yogunluk`; gap px → token |
| 13 Visibility | `*Goster` ailesi veya slot `zorunlu: false` |
| 14 Badges | `rozetGoster`, `rozetKonumu`; renk token |
| 15 Borders | token |
| 16 Autoplay | `autoplay`, `pauseOnHover`, `loop`, `hiz` |

Token/px/font **compiler’a** iner (~%63 COLOR+SLIDER). Kalan emek iki yerde durur: bu sözlük + §3.6 aile setleri, ve slot listeleri (DYNAMIC_LIST). Prop adedi hedef değil; **aynı component’in kaç şekle girebildiği** hedef.

---

## 5. Bütçe, biçim, süreç

**Bütçe:** instance **4–8 knob tipik** · global overlay 0–4 · 2 knob'ta kalıyorsa gerekçe (bölüm gerçekten sade) · 8'i aşıyorsa `_knobNote`. Aşırı minimalizm hata; bölümün gerçek şekillerini kapsa.

**Değer biçimleri (sadece bunlar):**
- pipe enum: `"a|b|c"` — ≥2 seçenek
- sayı dizisi: `[2, 3, 4]` — kolon gibi ayrık seçenekler
- boolean: gözlemlenen default'la
- tek sayı: yalnız `baslangicKonumu` gibi gerçek sürekli değer (nadir)
- **cihaz haritası:** `{ "masaustu": "a|b", "mobil": "a|b|c" }` — yalnız cihaz başına ayrı seçim (§2.5 durum 3). Anahtarlar `masaustu`/`tablet`/`mobil`, değerler yukarıdaki biçimlerden.

**Yeni knob ekleme süreci:** çekirdek sözlükte yok → önce mevcut bir adla ifade etmeyi dene → Wine Store atlasında (`wine-store-shape-atlas.md` / §3.6) kanıtlı eksen var mı bak → olmuyorsa şemaya yaz + bu dosyanın §3'üne PR'la ekle (tek kaynak burası). Kör `presetN` ekleme.

**Mevcut envanterde rename borcu** (uygulanınca işaretle):

- [ ] `kolonSayisi` → `kolon` (footer-columns-newsletter)
- [ ] `imagePozisyon` → `gorselKonumu` (editorial-image-with-text)
- [ ] `sekmeKonumu` → `tabPozisyon` (promo-banner-tabs)
- [ ] `otomatikOynat` → `autoplay` (hero-slideshow)
- [ ] `otomatikKaydir` → `autoplay` (media-scrolling-gallery)
- [ ] `badgeGoster` → `rozetGoster` (editorial-image-with-text)
- [ ] `trust-contact-icon-band` `layout: "horizontal"` → enum'a çevir veya sil (tek değer)
- [ ] `griTon` (social-proof-brand-logos) → token/styleProfile'a taşınmalı mı karar ver (görsel işlem, yapısal değil)

---

## 6. Screenshot'tan knob çıkarma

Evidence PNG'lerinden (375/768/1440) knob önerisi çıkarma işi **styleknobs-auditor** agent'ına devredildi: `.agents/skills/styleknobs-auditor/SKILL.md`. Agent bu dosyayı sözleşme olarak okur; önerileri şemaya doğrudan yazmaz, review dosyasına çıkarır.
