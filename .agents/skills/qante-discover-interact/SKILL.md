---
name: qante-discover-interact
description: >-
  Interaction-based QANTE discovery: takes an already-inventoried component (or a
  demo URL + schemaId) and captures its real behavioural states — hover, typed
  input, opened drawer/dialog, filled cart/compare, changed variant/tab/filter —
  as staged evidence, then writes interactionStates/steps/findings into the
  observation and only upgrades the schema for what was actually observed. Use
  when a component's static screenshot is empty or misleading (cart drawer, cart
  page, predictive search, quick view, product card hover, tabs, filters), when
  the user asks for a component's workflow/states, or says /qante-discover-interact.
---

# QANTE Discover · Interact

Statik screenshot bir component'in **tek karesi**. Bu agent aynı component'i **gerçek kullanıcı gibi kullanır** ve girdiği her hâli ayrı kanıtla yakalar: hover'da ne çıkıyor, arama kutusuna yazınca ne açılıyor, sepete ürün girince drawer neye dönüşüyor, varyant değişince ne güncelleniyor.

**Neden var:** Envanterde cart drawer, cart page, predictive search, compare drawer gibi bileşenler **boş** yakalandı. Boş ekran o component'in dilbilgisini göstermiyor — satır ürün, adet kontrolü, ara toplam, "ödemeye geç" hiç görünmüyor. Bu agent o boşluğu kapatır.

## Bu agent `qante-discover`'ın yerine geçmez

| Agent | İşi |
|---|---|
| `qante-discover` | **Sınır çizme + ilk envanter**: sayfada hangi section var, şema/observation/3vp kanıt aç |
| `qante-discover-interact` (bu) | **Derinlik**: zaten bilinen bir component'in davranışsal state'lerini çıkar |

`qante-discover` skill dosyasına **dokunma**. Onu yalnız okursun (sözleşme + akış dili ortak).

---

## Sözleşmeler (önce oku, sırayla)

| # | Dosya | Ne verir |
|---|---|---|
| 1 | `qante/schema-standard.md` | 12 alan, slot tipleri, action grameri (§5.1 kip, §5.2 overlay wiring), hook bölgeleri |
| 2 | `qante/styleknobs-standard.md` | knob sözlüğü, karar testi, bütçe, responsive (§2.5) |
| 3 | `qante/.agents/skills/qante-discover/SKILL.md` | ortak akış dili (salt okunur) |
| 4 | İlgili `observations/**` + `evidence/**` | o component için bugüne kadar ne yakalandı |

**Bu dosyalarla çelişen hiçbir şey yazma.** Sözlükte olmayan ad gerekiyorsa uydurma → `Açık soru`.

---

## Giriş biçimleri

| Kullanıcı der ki | Ne yap |
|---|---|
| `global-cart-drawer` gibi bir schemaId | O component için state matrisini çıkar (mevcut observation + URL'sinden) |
| URL + component adı | O sayfada component'i bul, state matrisini çıkar |
| "cart'ı dolu çek" / "hover'ı yakala" | Yalnız istenen state(ler) |
| argümansız | Boş/yetersiz kanıtı olan bileşenleri listele, **hangisi** diye sor |

Belirsizse **sor** — 15 PNG'yi yanlış component için üretme.

---

## Araç

```bash
cd qante/scripts
node capture-interaction.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
node capture-interaction.mjs <obs.json> --state filled,changed   # sadece bu state'leri YAZ
node capture-interaction.mjs <obs.json> --headed                 # tarayıcıyı gör (debug)
```

`interactionSteps[]`'i sırayla koşar, `capture: true` olan her adımda 3 viewport PNG yazar. Bilmen gerekenler:

- Adımlar **her viewport için baştan** koşulur → state sızması yok.
- `--state` yalnız hangi PNG'nin **yazılacağını** filtreler; adımların tamamı yine koşar (çünkü `changed`, `filled` adımlarına bağımlı).
- Bir adım patlarsa koşu ölmez: o state atlanır, sebebi `missingStates`'e yazılır. Diğer viewport'lar yine dener.
- Bitişte observation'ı günceller: `evidence[]` (mevcutları koruyarak), `interactionStates`, `missingStates`, `capture.updatedAt`.
- `addToCart` önce **gerçek UI tıklaması** dener, `/cart.js` sayacıyla doğrular; olmazsa varyant id'yi formdan okuyup `/cart/add.js`'e düşer. Hangi yol kullanıldığını çıktıda `notes` altında söyler — fallback'e düştüyse `interactionNote`'a yaz.

`scripts/capture-observation.mjs` yerinde kalır; tek-state/`initial` işleri için hâlâ o kullanılır. Elle alınan PNG'yi evidence'a koyma — evidence tekrar üretilebilir olmalı.

`action` seti: `goto` · `scrollTo` · `click` · `hover` · `fill` · `select` · `press` · `waitFor` · `addToCart` · `forceOpen`
Adım alanları: `state` · `action` · `selector` · `value` · `capture` · `captureMode` (`section|viewport`) · `captureSelector` · `etiket` · `not`

**`etiket` — kareye insan-okur ad ver.** `capture: true` olan her adıma o anın ne olduğunu anlatan bir etiket yaz: `cart-bos`, `sepete-eklendi`, `adet-artti`, `arama-sonucu`, `varyant-degisti`. Dosya adına gömülür → `{slug}.{state}.{etiket}.{vp}.png`. Türkçe yazabilirsin (script `ş/ı/ğ`'yi ascii'ye çevirir), ama kısa ve fiil/durum bildiren tut. Etiket yoksa dosya `{slug}.{state}.{vp}.png` kalır — ama etiketle yaz, klasöre bakan biri ne olduğunu okuyabilsin.

---

## State taksonomisi (dondurulmuş 6 ad)

Yalnız bu adlar kullanılır. Yeni state gerekiyorsa `Açık soru` olarak raporla.

| # | State | Ne zaman çekilir | Aranan |
|---|---|---|---|
| 1 | `initial` | Her zaman | İlk görünen hâl. 375/768/1440 |
| 2 | `hover` | Kart/buton/nav/product card hover anlamlıysa | İkinci görsel, quick add, quick view butonu, overlay, altçizgi, rozet değişimi |
| 3 | `input` | Search/newsletter/form input varsa | Öneri listesi, sonuç, boş sonuç, loading. Arama sorgusu: `chair` |
| 4 | `open` | Drawer/dialog/modal/dropdown/accordion/tab açılıyorsa | Açık panel + kapatma yolu |
| 5 | `filled` | Veri isteyen bileşen (cart, compare, quick view, recently viewed) | Boş ≠ dolu. Önce veri oluştur, sonra çek |
| 6 | `changed` | Variant/adet/filtre/sıralama/tab/accordion değiştirilebiliyorsa | Değişim sonrası UI: fiyat, görsel, buton, grid, sayaç |

**Kural:** `filled` ile `initial` **aynı component'in state'i** — ikisi için ayrı schemaId açma. Fark observation'a yazılır.

---

## Akış

### 1. Hazırlık
1. Sözleşmeleri oku. Component'in şemasını ve mevcut observation'ını oku.
2. Bugüne kadarki evidence'a bak — hangi state zaten var, hangisi eksik/yanıltıcı.
3. **State matrisi kur:** bu component için 6 state'ten hangileri anlamlı? Anlamsız olanı zorlama (ör. breadcrumb'da `filled` yok).

### 2. Etkileşimi planla
Her state için adımları yaz (selector + aksiyon + beklenen sonuç). Plan observation'ın `interactionSteps` alanına gider — **koşmadan önce** yazılır, sonra doğrulanır.

**Sepeti doldurma (en sık ihtiyaç):** önce PDP'ye git → gerçek "Add to cart" butonuna tıkla → sepet güncellenene kadar bekle → sonra drawer'ı aç / `/cart`'a git. Gerçek UI tıklaması tercih edilir (tema davranışını da yakalar). Buton bulunamazsa fallback: sepet AJAX ucu (`/cart/add.js` benzeri) + varyant id'yi PDP'den oku. Fallback kullandıysan `interactionNote`'a yaz.

### 3. Yakala
`node scripts/capture-interaction.mjs <observation.json>` — her state için 3 viewport.
Bir state alınamadıysa **uydurma**: `missingStates`'e sebebiyle yaz (selector yok, site engelledi, davranış tetiklenmedi…).

### 4. Oku ve yorumla
Her state PNG'sine **gerçekten bak**. `stateFindings`'e ne gördüğünü yaz — izlenim değil, görünen şey.

### 5. Şemaya etkisini karar tablosuyla ver

| Interaction'da görülen | Nereye gider |
|---|---|
| Yeni **içerik alanı** (merchant yazıyor) | `slots` (§3.1 tip seti) |
| Yeni **olay** (tıklanan/açılan/gönderilen) | `actions` (§5 grameri; kip §5.1) |
| Tetiklenen **global overlay** | `bagimliliklar` (§5.2 tablosu — validator ERROR verir) |
| Mağazadan gelen **veri** | `dataBindings` (dondurulmuş `DataSource.*`) |
| **İskelet/davranış** seçimi (açık kalma, konum, kolon) | `styleKnobs` (bütçe 4–8) |
| Yalnız **hover görselliği** (renk, gölge, zoom, easing, lift) | Şemaya **girmez** → token / `styleProfile.motion` notu |
| Boş↔dolu farkı | Yeni şema **değil** → observation `stateFindings` |

### 6. Kapat
```bash
cd qante && node scripts/validate-schemas.mjs {schemaId}   # dokunduğun şema
cd qante && node scripts/validate-schemas.mjs              # tüm envanter
```
Temiz değilse düzelt. Sonra ilgili `todo/{tema}.md` satırını güncelle.

---

## Evidence adlandırma

```
evidence/{tema}/{preset}/{sayfa}/{slug}.{state}.{etiket}.{375|768|1440}.png
```

Örnek: `global-cart-drawer.initial.cart-bos.1440.png` · `global-cart-drawer.filled.sepete-eklendi.1440.png` · `global-cart-drawer.changed.adet-artti.1440.png`
Etiket opsiyonel ama **önerilir** — `{state}` makinenin gruplaması, `{etiket}` insanın okuması. Etiketsiz: `{slug}.{state}.{1440}.png`.

- Viewer dosya adının **sonundaki** viewport'u okur (`.1440.png`), o yüzden state eki güvenli.
- **Geriye uyum:** state eki olmayan mevcut dosyalar (`{slug}.1440.png`) `initial` sayılır. Onları yeniden adlandırma — dokunmadan bırak, yeni state'leri ek adla yaz.

## Observation alanları (bu agent'ın eklediği)

`observations/_template-interaction.json` şablonundan başla. `qante-discover`'ın alanlarına **ek** olarak:

| Alan | Ne |
|---|---|
| `interactionStates` | Yakalanan state adları: `["initial","hover","filled"]` |
| `interactionSteps` | Sırayla yapılan adımlar (selector + aksiyon + state) — script bunu koşar |
| `stateFindings` | State → o karede görülen fark (düz cümle) |
| `missingStates` | Denendi ama alınamadı + **sebep** |
| `interactionNote` | Emin olunmayan yer, site engeli, fallback kullanımı |

---

## Selector bulma (adım yazmadan önce)

Adımları körlemesine yazma — selector'ları **önce doğrula**, yoksa 3 viewport boyunca aynı hatayı çekersin.

1. Geçici bir yoklama script'i yaz (`scripts/_probe.mjs`), çıktısını JSON dosyasına bas, oku, sonra **sil**. Terminal çıktısına güvenme; uzun JSON kırpılıyor.
2. Yokla: hedef sayfanın URL'si · tıklanacak öğenin görünürlüğü (`offsetParent`) · sepete ekleme sonrası `/cart.js` `item_count` · overlay'in `boundingBox`'ı.
3. `.first()` tuzağı: aynı selector'a gizli varyantlar uyar (mobil/masaüstü kopyaları, kapalı kart formları). Script görünür olanı seçer ama **hangisini** seçtiğini yoklamayla teyit et.
4. Doğrulanmış selector'ları observation'a yaz, sonra koş.

## Bu koşulmuş bir örnek — `global-cart-drawer` (hyper)

Boş drawer 3 viewport kanıtla "tamam" görünüyordu. `filled` çekilince **5 slot** eksik çıktı (`onerilerBasligi`, `bosSepetBasligi`, `bosSepetAltMetni`, `bosSepetKoleksiyonlari`, `bosSepetButonu`) ve `responsive` alanı ilk kez doldurulabildi. `changed` ise satır fiyatının **birim fiyat** olduğunu gösterdi (adet 2 olurken $699 sabit kaldı, yalnız toplam $1.398'e çıktı) — bu ayrımı statik kareyle görmek mümkün değildi.

Adımlar: PDP'ye git → `.product-form__submit` tıkla → home'a dön → cart butonuna tıkla (`capture: filled`) → `#CartDrawer button[name='plus']` tıkla → 3sn bekle (`capture: changed`).

---

## Sert kurallar

- **Kanıtsız yazma.** Görmediğin state'i şemaya işlemezsin; `missingStates`'e yazarsın.
- **Boş state'i tek hâl sanma.** Doldurulabiliyorsa doldur.
- **Yıkıcı etkileşim yok:** ödeme başlatma, gerçek form gönderimi, hesap oluşturma, sipariş verme, kupon tüketme, e-posta gönderimi yok. Sepete ekleme serbest (demo mağaza).
- **Hover ≠ knob.** Hover'da yalnız renk/gölge/zoom değişiyorsa token; yapı değişiyorsa (buton/ikinci görsel çıkıyor) knob veya slot.
- **Aynı tip = tek şema.** Boş/dolu, açık/kapalı aynı component.
- **Token şemaya girmez.** Renk/font/spacing/radius/gölge hiçbir alanda yok.
- **Elle screenshot yok.** Evidence script'ten üretilir, tekrar üretilebilir olmalı.
- **`qante-discover` dosyalarını değiştirme.**
- **3'ten fazla dosya değişecekse** önce plan sun, onay al.
- İş bitince **her zaman** validator koş.

## Çıktı biçimi

```
Mod: interact
Tema/preset/sayfa: hyper/default/cart-drawer
Component:         global-cart-drawer
Yakalanan state:   initial, open, filled, changed  (4/6)
Alınamayan:        hover (drawer'da hover anlamlı öğe yok)
Yeni evidence:     12 PNG
Şema değişti mi:   evet — +2 slot, +1 action, bagimliliklar +1
Validator:         0 error · 0 warn
Açık soru:         1 (adet 0'a düşünce satır siliniyor mu, doğrulanamadı)
Sıradaki:          cart-page-main filled
```
