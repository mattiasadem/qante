# İş Paketi A — Örnek Uygulama: Hyper (Shopify) Vakası
*Teknik Ekip Brief'inin ekidir · Aynı terimler ve şema alanları kullanılır · Amaç: "bu ne, nereye bakacağım" sorusunu tek örnekle kapatmak*

Bu doküman, bir tema+demo'nun baştan sona nasıl envanterleneceğini **Hyper** teması üzerinden gösterir. Hyper'ı seçtik çünkü: FoxEcom yapımı, $400'lık premium bir tema; **tek motor üstünde 5 hazır preset** sunuyor (Hyper, Ceramide-kozmetik, Trove-market, Pillar-moda, Nexvo-teknoloji) — yani bizim Base+preset modelimizin piyasada satılan kanıtı. Siz envanteri çıkarırken bunu da gözlemleyeceksiniz: beş demo, aynı section'ların farklı token/styleKnob kombinasyonları.

---

## Adım 0 — Masaya koyacakların

1. `taxonomy/v0.1.0.json` açık (18 kategori — brief Ek-1)
2. Şema şablonu (brief Ek-2 formatı) + boş kayıt dosyası
3. Ekran görüntüsü klasörü: `evidence/hyper/{preset}/{sayfa}/`
4. Adlandırma kuralı: `sections/{scope}/{kategori}-{varyant}.json` (ör. `sections/global/navigation-header-mega.json`)

---

## Adım 1 — Kaynağı tanı: tema sayfası ve feature sözlüğü

Tema sayfasını aç (themes.shopify.com → Hyper). Önce künye: geliştirici, fiyat, preset sayısı, hedef segment (Hyper B2B/toptan eğilimli). Sonra **Features bölümü** — Shopify'ın standart sözlüğüyle yazılmıştır (Cart and checkout / Marketing and conversion / Merchandising / Product discovery) ve bizim için altın madenidir. Ama kritik ders şu:

> **Feature ≠ Section.** Feature listesi pazarlama sözlüğüdür; bizim şemamızda her feature farklı bir yere düşer. Aşağıdaki tablo Hyper'ın gerçek feature listesinin çevirisidir — her temada bu çeviriyi siz yapacaksınız.

| Hyper feature'ı | Bizim şemada karşılığı |
|---|---|
| Sticky header | `navigation` global bileşeninin **styleKnob**'u (`sticky: true`) |
| Mega menu | `navigation` kategorisinde **varyant** (`header-mega`) |
| Slide-out cart | **Global bileşen** (`cart-drawer`) — section değil (bkz. Adım 3 kararı) |
| Sticky cart | PDP şablonunda **davranış knob'u** (sticky add-to-cart) |
| Quick view | **Action** (`emit:product.quickView`) + global overlay bileşeni |
| Quick buy | Ürün kartı **action**'ı (`emit:cart.add`) |
| Stock counter | PDP section'ında **slot** (`stokGostergesi`) |
| Trust badges | İki yer: `trust` section'ı VEYA PDP'de slot — ikisini de kaydet, notla |
| Promo banners / tiles / popups | `promo` kategorisinde üç **varyant**; popup `global` scope + trigger |
| Product badges | Ürün kartı slot'u + **filter hook'u** (`filter:product.badges`) |
| Recently viewed / Recommended | `product-showcase` varyantları; fark **dataBindings** kaynağında (`recentlyViewed` / `recommended`) |
| Infinite scroll | Collection şablonunda **davranış knob'u** |
| Breadcrumbs | `page-template` scope'lu küçük bileşen |
| Enhanced search | Global bileşen (`search-overlay`) + `emit:search.open` action'ı |
| Swatch filters | Collection filtre sisteminin özelliği (section değil) |
| Gift wrapping / Cart notes | `cart-drawer` bileşeninin **slot**'ları |
| Right-to-left | Token/platform seviyesi — şemaya girmez, nota girer |
| Animation | `styleProfile.motion` — section şemasına girmez |
| Combined listing (Plus) | Platform özelliği — kapsam dışı, raporda beyan edilir |

Bu tabloyu doldurmak ~20 dk sürer ve temanın haritasını kafanda kurar.

---

## Adım 2 — Demo mağazayı gez: rota ve sınır çizme

Tema sayfasından demo'yu aç (View demo). **Rota sabittir:** Home → bir PDP → bir collection → arama → sepete ürün at (drawer'ı incele) → footer. Her preset için aynı rota; ilk çalışmada tek preset yeter (Hyper default), ikinci preset'i hızlı geçip *aynı section'ların nasıl farklılaştığını* not et.

**Section sınırı nasıl çizilir** (scroll ederken sor):
1. Tam genişlik ya da arka plan değişti mi? → muhtemel sınır
2. İçerik yapısı tekrar ediyor mu (3 kart, 4 ikon…)? → tek section'ın item'ları
3. Kendi başlığı/CTA'sı var mı? → bağımsız section sinyali
4. Sayfadan bağımsız her yerde mi (header, duyuru, drawer)? → `global` adayı

Kural: **section başına 1 tam ekran görüntüsü**, dosya adı kayıt id'siyle aynı.

---

## Adım 3 — Sınıflandır: iki karar örneği

**Karar 1 — "Section mı, global bileşen mi?" (cart drawer):** Hyper'ın slide-out cart'ı free-shipping ilerleme çubuğu ve cross-sell önerileri taşıyor. Sayfa akışında bir yeri yok, her yerden tetikleniyor → bu bir **section değil, Base'in global bileşeni**. Taksonomiye section olarak girmez ama **şeması yine de yazılır** (aşağıda Örnek 4) — çünkü Base (İş Paketi C) onu implemente edecek.

**Karar 2 — Aday kategori (bundle builder):** Hyper/Trove'daki bundle builder ("kendi paketini kur") 18 kategoriden hiçbirine temiz oturmuyor — `product-showcase` satış vitrini, bu ise etkileşimli bir satın alma aracı. Doğru hamle: **aday kuyruğuna kayıt**:

```
ADAY: commerce-tools
Gerekçe: bundle builder, quick order list, ürün karşılaştırma gibi
"etkileşimli satın alma araçları" mevcut kategorilere oturmuyor.
Örnekler: Hyper/Trove bundle builder, Hyper/Nexvo compare, quick order list
Öneri: yeni kategori "commerce-tools" · Karar: haftalık taksonomi onayında
```

Kararsız kaldığında kural bu: **zorlamayla yanlış kategoriye sokma, aday aç.**

---

## Adım 4 — Şemayı doldur: beş tam örnek

*(Format brief Ek-2 ile birebir. `emit:` yayınlanan, `listen:` dinlenen olaydır.)*

### Örnek 1 — Kolay global: announcement bar

```json
{
  "id": "promo-announcement-bar",
  "kategori": "promo", "varyant": "announcement-bar", "scope": "global",
  "amac": "Site genelinde tek satırlık duyuru/kampanya şeridi",
  "slots": {
    "mesajlar": { "tip": "array", "min": 1, "max": 3,
                  "item": { "metin": { "tip": "text", "maxLen": 90 },
                            "link": { "tip": "link", "zorunlu": false } } }
  },
  "styleKnobs": { "rotasyon": "static|auto", "kapatilabilir": true },
  "dataBindings": [], "actions": ["navigate"],
  "hookNoktalari": ["mount:announcement.after"],
  "responsive": "Mobilde tek mesaj, otomatik rotasyon",
  "ornekler": ["hyper/default/home ss-01", "+2 farklı sektör kaynağı"]
}
```

### Örnek 2 — Zengin global: mega menü header

```json
{
  "id": "navigation-header-mega",
  "kategori": "navigation", "varyant": "header-mega", "scope": "global",
  "amac": "Ana gezinme; çok koleksiyonlu mağazada menüyü merchandising alanına çevirir",
  "slots": {
    "logo": { "tip": "image" },
    "menu": { "tip": "menuRef" },
    "megaPaneller": { "tip": "array", "max": 6,
      "item": { "kolonlar": "menuRef", "gorsel": { "tip": "image", "zorunlu": false },
                "promoKarti": { "tip": "promoRef", "zorunlu": false } } }
  },
  "styleKnobs": { "sticky": true, "seffafBaslangic": false, "yukseklik": "compact|regular" },
  "dataBindings": [ { "name": "menu", "source": "DataSource.navigation" } ],
  "actions": ["emit:search.open", "emit:cart.open", "navigate"],
  "hookNoktalari": ["mount:header.before", "mount:header.utility", "mount:header.after"],
  "bagimliliklar": ["cart-drawer", "search-overlay"],
  "responsive": "Mobilde hamburger + tam ekran menü; mega paneller akordeon olur",
  "ornekler": ["hyper/default/home ss-02", "hyper/nexvo/home ss-02 (ikon-grid varyasyonu)"]
}
```

### Örnek 3 — Instance + veri + aksiyon: quick view'lı ürün gridi

```json
{
  "id": "product-showcase-grid-featured",
  "kategori": "product-showcase", "varyant": "grid-featured", "scope": "instance",
  "amac": "Seçili ürün listesini kartlarla vitrine çıkarmak",
  "slots": {
    "baslik": { "tip": "text", "maxLen": 60 },
    "altBaslik": { "tip": "text", "maxLen": 120, "zorunlu": false },
    "cta": { "tip": "button", "zorunlu": false }
  },
  "styleKnobs": { "kolon": [2, 3, 4], "kartStili": "minimal|framed",
                  "rozetGoster": true, "hizliEkleGoster": true },
  "dataBindings": [
    { "name": "urunler", "source": "DataSource.productList",
      "params": { "kaynak": "collection|manual|recommended|recentlyViewed", "limit": 8 } }
  ],
  "actions": ["emit:product.quickView", "emit:cart.add", "navigate"],
  "hookNoktalari": ["mount:productCard.badge", "mount:productCard.footer", "mount:section.after"],
  "responsive": "Mobil 2 kolon; hızlı ekle butonu her zaman görünür",
  "ornekler": ["hyper/default/home ss-04", "+2"]
}
```
**Granülarite dersi:** Ürün kartı section DEĞİLDİR — grid'in item'ıdır. Kart, Base'de alt bileşen olarak bir kez tanımlanır; tüm showcase varyantları onu kullanır.

### Örnek 4 — Global bileşen şeması: cart drawer

```json
{
  "id": "global-cart-drawer",
  "tur": "global-bilesen",
  "amac": "Sayfadan çıkmadan sepet yönetimi; momentum kaybettirmeden cross-sell",
  "slots": {
    "kargoBar": { "tip": "progress", "zorunlu": false, "not": "ücretsiz kargo eşiği" },
    "notAlani": { "tip": "toggle+textarea", "zorunlu": false },
    "hediyePaketi": { "tip": "toggle", "zorunlu": false },
    "crossSell": { "tip": "productMiniList", "zorunlu": false }
  },
  "dataBindings": [
    { "name": "sepet", "source": "DataSource.cart" },
    { "name": "oneriler", "source": "DataSource.productList", "params": { "kaynak": "recommended", "limit": 4 } }
  ],
  "actions": ["listen:cart.added", "emit:cart.updated", "emit:checkout.start"],
  "hookNoktalari": ["mount:cartDrawer.aboveItems", "mount:cartDrawer.belowItems"],
  "filterOrnegi": "filter:price.display (KDV/para birimi gösterimi buradan geçer)",
  "platformNotu": "Studio tık-dinleyici davranışı: drawer açan linkler koruma deseni ister",
  "ornekler": ["hyper/default/cart-drawer ss-07"]
}
```

### Örnek 5 — Kısa instance: before/after slider

```json
{
  "id": "before-after-slider",
  "kategori": "before-after", "scope": "instance",
  "amac": "Öncesi/sonrası karşılaştırmasıyla ürün etkisini kanıtlamak (kozmetik, temizlik…)",
  "slots": { "once": { "tip": "image" }, "sonra": { "tip": "image" },
             "baslik": { "tip": "text", "zorunlu": false } },
  "styleKnobs": { "yon": "yatay|dikey", "baslangicKonumu": 50 },
  "dataBindings": [], "actions": [],
  "hookNoktalari": ["mount:section.after"],
  "ornekler": ["hyper/ceramide/home ss-05", "+2"]
}
```

---

## Adım 5 — Kaydet ve rapora işle

1. Dosya: `sections/{scope}/{id}.json` + `evidence/` altına ekran görüntüleri
2. Kapsam raporuna satır: `Hyper (default preset) · home+pdp+collection · 14 section kaydı · 1 aday kategori · 2 platform notu`
3. Şemaya sığmayan her gözlem → "sığmayanlar" listesine, karar önerisiyle

---

## Sık düşülecek 6 hata

1. **Feature'ı section sanmak** — Adım 1 tablosu tam olarak bunun için var.
2. **Granülarite kayması** — buton, kart, input section değildir; tekrar eden item'ın kabı section'dır.
3. **Token'ı styleKnob'a yazmak** — renk/font/spacing şemaya ASLA girmez; onlar preset'in işi. styleKnob yapısal seçimdir (kolon sayısı, hizalama, yoğunluk).
4. **Demo içeriğini kısıt sanmak** — demoda 3 kart görmek `max: 3` demek değildir; editördeki gerçek sınırı bulamıyorsan mantıklı aralık yaz, notla.
5. **Aksiyonları atlamak** — her tıklanabilir şeyin ne tetiklediğini yaz; hook sistemi (İş Paketi B) bu envanterden beslenecek.
6. **Global/instance karıştırmak** — test: "bu blok sayfa akışının bir satırı mı, her yerden erişilen bir katman mı?"

---

## Süre ve çıktı beklentisi

İlk tema (Hyper, tek preset): **2–2,5 saat** → ~12–16 section kaydı + 1–2 aday + kapsam satırı. İkinci preset'in farkını gezmek: +30 dk. Üçüncü temadan itibaren tema başına ~1,5 saate iner. Sprint 0 hedefi (8 örnek section) bu tek vakayla rahat çıkar.

## Kontrol listesi (kayıt kapatmadan önce)

- [ ] Kategori taksonomiden; uymadıysa aday açıldı
- [ ] `scope` kararı verildi ve gerekçesi bir cümleyle yazıldı
- [ ] Tüm slot'lar tip + kısıtla tanımlı; renk/font YOK
- [ ] dataBindings soyut DataSource ile (platform adı geçmiyor)
- [ ] actions listesi dolu (yoksa "yok" yazıldı, boş bırakılmadı)
- [ ] En az 1 ekran görüntüsü + kaynak referansı
- [ ] Hook noktaları önerildi (B paketiyle ortak adlandırma)
