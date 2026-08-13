# styleKnobs Auditor Test — İlk 10 Şema

*Tarih:* 2026-08-12  
*Kapsam:* Viewer `SCHEMA_PRIORITY` ilk 10 şema  
*Kural:* `qante/styleknobs-standard.md` + screenshot evidence. Şemalara dokunulmadı; bu dosya review önerisidir.

## Test Edilen İlk 10

1. `navigation-header-mega`
2. `promo-announcement-bar`
3. `hero-slideshow`
4. `product-info-main`
5. `product-info-tabs`
6. `product-showcase-grid-plp`
7. `product-showcase-grid-featured`
8. `product-showcase-related`
9. `product-showcase-favorites`
10. `product-showcase-recently-viewed`

## Net Sonuç

Agent işe yaradı ama kör güvenilecek seviyede değil. En güçlü tarafı: screenshot'a bakıp "bu knob gerçekten kanıtlı mı?" diye ayıklıyor. En zayıf tarafı: tek preset / tek demo olan yerde bazı enum seçeneklerini kanıtlayamıyor.

Kalite sonucu:

- **3 şema iyi:** `hero-slideshow`, `product-showcase-grid-plp`, `product-info-tabs`
- **4 şema küçük isim/kanıt düzeltmesi istiyor:** `navigation-header-mega`, `promo-announcement-bar`, `product-info-main`, `product-showcase-related`
- **2 şema eksik knob istiyor:** `product-showcase-grid-featured`, `product-showcase-recently-viewed`
- **1 şema ciddi model sorunu yakaladı:** `product-showcase-favorites`

## Before / After Tablosu

| Şema | Before | After önerisi | QC |
|---|---|---|---|
| `navigation-header-mega` | `sticky`, `seffafBaslangic`, `yukseklik` | `sticky`, `yukseklik`; `seffafBaslangic` açık soru | Orta. Screenshot sticky/transparent kanıtlamıyor; height + mobile/header yapısı net |
| `promo-announcement-bar` | `rotasyon`, `kapatilabilir` | `autoplay`; `kapatilabilir` açık soru / drop | Zayıf-orta. Close yok, rotasyon adı standarda ters |
| `hero-slideshow` | `hizalama`, `yukseklik`, `otomatikOynat`, `okGoster`, `noktaGoster` | `hizalama`, `yukseklik`, `autoplay`, `okGoster`, `noktaGoster` | İyi. Sadece isim standardı (`otomatikOynat` → `autoplay`) |
| `product-info-main` | `galeriLayout`, `stickyBuyBox` | `layout`, `sticky` veya standarda yeni `galeriLayout` ekleme kararı | Orta. Screenshot gallery-grid/stack davranışını gösteriyor ama mevcut enum tam denk değil |
| `product-info-tabs` | `layout: tabs|accordion` | Aynı, fakat mobile accordion kanıtı zayıf | İyi-orta. Desktop/mobile screenshot ikisi de tab gibi; accordion opsiyonu editör teyidi ister |
| `product-showcase-grid-plp` | `kolon`, `filtreGoster`, `sortGoster` | Aynı | İyi. 1440'da 4 kolon, 375'te 2 kolon; filter/sort görünür |
| `product-showcase-grid-featured` | `kolon`, `kartStili`, `rozetGoster`, `hizliEkleGoster` | `layout` ekle; mevcutleri koru | İyi. Desktop slider/progress, mobile grid/horizontal davranış var; `layout` eksik |
| `product-showcase-related` | `layout`, `kolon` | Aynı; `kolon` notu: desktop 5 görünür item | Orta. Slider/card count ayrımı net değil; mevcut model yeterli ama kusursuz değil |
| `product-showcase-favorites` | `layout`, `kolon`, `rozetGoster` | `layout: split|stacked`, `gorselKonumu`; `kolon` + `rozetGoster` drop | Zayıf before, güçlü bulgu. Screenshot grid değil; split editorial/product card section |
| `product-showcase-recently-viewed` | `layout` | `layout`; opsiyonel `rozetGoster` | Orta. Tek ürün evidence var; slider/grid enum kanıtlanmıyor, fakat badge görünür |

## Şema Bazlı Detay

### 1. `navigation-header-mega`

**Evidence:** `navigation-header-mega.1440.png`, `navigation-header-mega.375.png`

```json
"styleKnobs": {
  "sticky": true,
  "seffafBaslangic": false,
  "yukseklik": "compact|regular"
}
```

**Öneri:**

```json
"styleKnobs": {
  "sticky": true,
  "yukseklik": "compact|regular"
}
```

**Gerekçe:** 1440 ve 375 header farklı responsive yapı gösteriyor; yükseklik/compact mantıklı. `sticky` static screenshot'tan kanıtlanamaz ama header davranış knob'u olarak kabul edilebilir. `seffafBaslangic` standardın çekirdek sözlüğünde yok ve bu evidence'ta false dışında kanıtı yok. Bunu ya standarda bilinçli ekleyelim ya da header preset/styleProfile tarafına taşıyalım.

**Slot notu:** Search bar, utility icons, hamburger davranışı slot/action tarafı; styleKnob değil.

### 2. `promo-announcement-bar`

**Evidence:** `promo-announcement-bar.1440.png`, `promo-announcement-bar.375.png`

```json
"styleKnobs": {
  "rotasyon": "static|auto",
  "kapatilabilir": true
}
```

**Öneri:**

```json
"styleKnobs": {
  "autoplay": false
}
```

**Gerekçe:** Standarda göre `rotasyon` yerine `autoplay` kullanılmalı. Screenshot'ta close/kapatma ikonu yok; `kapatilabilir` kanıtlanmadı. 1440'da sol linkler + orta mesaj + sağ locale/social var, 375'te sadece mesaj kalıyor. Bu daha çok slot/responsive konusu, knob değil.

**Açık soru:** Çoklu mesaj varsa autoplay gerçek knob olabilir. Tek evidence ile `autoplay: false` düşük ama makul öneri.

### 3. `hero-slideshow`

**Evidence:** `hero-slideshow.1440.png`, `hero-slideshow.375.png`

```json
"styleKnobs": {
  "hizalama": "center|left|right",
  "yukseklik": "compact|regular|tall",
  "otomatikOynat": true,
  "okGoster": true,
  "noktaGoster": true
}
```

**Öneri:**

```json
"styleKnobs": {
  "hizalama": "center|left|right",
  "yukseklik": "compact|regular|tall",
  "autoplay": true,
  "okGoster": true,
  "noktaGoster": true
}
```

**Gerekçe:** Görsel güçlü: text center, hero yüksekliği, oklar ve dots görünüyor. Tek iş `otomatikOynat` → `autoplay` rename.

### 4. `product-info-main`

**Evidence:** `product-info-main.1440.png`, `product-info-main.375.png`

```json
"styleKnobs": {
  "galeriLayout": "thumbnails-left|thumbnails-bottom|stack",
  "stickyBuyBox": true
}
```

**Öneri:**

```json
"styleKnobs": {
  "layout": "gallery-grid|thumbnail-stack",
  "sticky": true
}
```

**Gerekçe:** 1440 screenshot'ta galeri 2x2 grid solda, buy box sağda. 375'te ana görsel + thumbnail strip + buy box stack. Mevcut `galeriLayout` değerleri screenshot ile tam uyuşmuyor. `stickyBuyBox` static screenshot'ta kanıtlanmıyor ama PDP davranış knob'u olarak değerli; standarda uydurmak için `sticky` daha temiz.

**Açık soru:** `galeriLayout` standarda özel product-info knob'u olarak mı eklensin, yoksa genel `layout` altında mı kalsın? Burada gerçek karar gerekiyor.

### 5. `product-info-tabs`

**Evidence:** `product-info-tabs.1440.png`, `product-info-tabs.375.png`

```json
"styleKnobs": {
  "layout": "tabs|accordion"
}
```

**Öneri:**

```json
"styleKnobs": {
  "layout": "tabs|accordion"
}
```

**Gerekçe:** Desktop kesin tab. Mobile screenshot da hâlâ horizontal tab gibi görünüyor, accordion kanıtı yok. Yine de bu tip section için `tabs|accordion` makul editor knob'u. Not: mobile responsive metni "accordion" diyor ama evidence bunu göstermiyor.

### 6. `product-showcase-grid-plp`

**Evidence:** `product-showcase-grid-plp.1440.png`, `product-showcase-grid-plp.375.png`

```json
"styleKnobs": {
  "kolon": [2, 3, 4],
  "filtreGoster": true,
  "sortGoster": true
}
```

**Öneri:**

```json
"styleKnobs": {
  "kolon": [2, 3, 4],
  "filtreGoster": true,
  "sortGoster": true
}
```

**Gerekçe:** En temiz örneklerden biri. Desktop 4 kolon, mobile 2 kolon; filter/sort görünür. UI'daki compare toggle ve grid/list view user action olabilir, otomatik styleKnob yapmadım.

### 7. `product-showcase-grid-featured`

**Evidence:** 2 observation × 375/1440 (`product-showcase-grid-featured`, `product-showcase-grid-featured-2`)

```json
"styleKnobs": {
  "kolon": [2, 3, 4],
  "kartStili": "minimal|framed",
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

**Öneri:**

```json
"styleKnobs": {
  "layout": "grid|slider",
  "kolon": [2, 3, 4],
  "kartStili": "minimal|framed",
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

**Gerekçe:** Desktop'ta yatay slider/progress ve oklar var; mobile'da 2 kolon/grid veya yatay taşan kartlar var. Bu yüzden `layout` eksik. `rozetGoster` ve `hizliEkleGoster` screenshot'ta net: sale badge ve cart/quick-add ikonu görünüyor.

**Slot notu:** İlk observation'da tab labels (`New Arrivals`, `Hot Items`) ve promo tile var; bu styleKnob değil, schema/slot kapsama sorusu.

### 8. `product-showcase-related`

**Evidence:** `product-showcase-related.1440.png`, `product-showcase-related.375.png`

```json
"styleKnobs": {
  "layout": "slider|grid",
  "kolon": [2, 3, 4]
}
```

**Öneri:**

```json
"styleKnobs": {
  "layout": "slider|grid",
  "kolon": [2, 3, 4]
}
```

**Gerekçe:** Mobile yatay scroll/slider gibi; desktop row/grid gibi. Mevcut model yeterli. Ancak 1440 evidence'ta 5 ürün görünür; `kolon` burada gerçek grid kolonundan çok "visible item count" gibi davranıyor olabilir. Bunu hemen değiştirmedim çünkü tek demo ile `kolon: [2,3,4,5]` demek abartı olur.

### 9. `product-showcase-favorites`

**Evidence:** `product-showcase-favorites.1440.png`, `product-showcase-favorites.375.png`

```json
"styleKnobs": {
  "layout": "slider|grid",
  "kolon": [2, 3, 4],
  "rozetGoster": true
}
```

**Öneri:**

```json
"styleKnobs": {
  "layout": "split|stacked",
  "gorselKonumu": "left|background"
}
```

**Gerekçe:** Bu testin en değerli bulgusu. Screenshot bir ürün grid'i değil: background image + öne bindirilmiş tek product card + sağda testimonial/editorial copy. Mobile'da product card üstte, metin altta. `kolon` kanıtlanmıyor, `rozetGoster` de görünmüyor. Mevcut schema styleKnobs bu section'ın gerçek yapısını yakalamıyor.

**Daha büyük soru:** Bu schema gerçekten `product-showcase-favorites` mı, yoksa `product-showcase-editorial-feature` gibi ayrı varyant mı olmalı? Agent burada sadece knob değil, granülarite problemi de yakaladı.

### 10. `product-showcase-recently-viewed`

**Evidence:** `product-showcase-recently-viewed.1440.png`, `product-showcase-recently-viewed.375.png`

```json
"styleKnobs": {
  "layout": "slider|grid"
}
```

**Öneri:**

```json
"styleKnobs": {
  "layout": "slider|grid",
  "rozetGoster": true
}
```

**Gerekçe:** Evidence sadece 1 ürün gösteriyor; bu yüzden `slider|grid` gerçek farkı kanıtlanmıyor ama recently viewed listeleri için makul. Ürün kartında sale / selling fast rozetleri görünüyor; diğer product-showcase aileleriyle tutarlılık için `rozetGoster` eklenebilir.

**Açık soru:** Tek ürün evidence olduğu için `kolon` eklemiyorum. Daha dolu recently-viewed state yakalanırsa tekrar denetlenmeli.

## Kalite Kontrol: Agent Harbiden Ne Kattı?

**Kattığı gerçek değer:**

1. `product-showcase-favorites` için mevcut modelin zayıf olduğunu yakaladı. Bu, sadece JSON'a bakarak görülmezdi.
2. `product-showcase-grid-featured` için `layout` eksikliğini screenshot kanıtıyla buldu.
3. `promo-announcement-bar` ve `hero-slideshow` gibi isim standardı borçlarını netleştirdi.
4. `product-info-tabs` ve `product-showcase-related` için "değiştirme, sadece soru notu düş" diyebildi. Yani her şeye knob eklemedi.

**Kattığı ama temkinli olunması gereken yer:**

1. Tek demo/preset olan şemalarda enum'un ikinci seçeneğini kanıtlamak zor. Örn. `tabs|accordion`, `slider|grid`.
2. Static screenshot `sticky`, `autoplay`, `kapatilabilir` gibi davranışları kanıtlayamıyor. Bunlar için editör/demo interaction veya DOM state gerekir.
3. Product card içindeki rozet/quick-add bazen global card behavior olabilir; section-level knob mu değil mi Base kararına bağlı.

## Uygulama Sırası Önerisi

1. **Güvenli rename:** `hero-slideshow.otomatikOynat` → `autoplay`
2. **Güvenli add:** `product-showcase-grid-featured.layout = "grid|slider"`
3. **Review gerektiren düzeltme:** `product-showcase-favorites` yeniden sınıflandırma veya knob redesign
4. **Açık soru:** `product-info-main` için `galeriLayout` özel knob olarak standarda eklensin mi, yoksa genel `layout` yeterli mi?
5. **Kanıt bekle:** `promo-announcement-bar.kapatilabilir`, `product-info-tabs.accordion`, `recently-viewed` dolu state

