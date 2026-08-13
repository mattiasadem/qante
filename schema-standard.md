# SectionSchema Standardı — v1.0

*Tarih: 2026-08-13 · Brief deliverable **A2** · Kaynak: 59 canlı şema taraması + brief §4 + Hyper walkthrough*

**Bu dosya şemanın tamamının sözleşmesidir.** `styleKnobs` alanının kendi derin sözlüğü ayrı dosyada: [`styleknobs-standard.md`](./styleknobs-standard.md). İkisi çelişirse styleKnobs için o dosya, diğer her şey için bu dosya kazanır.

**Neden var:** styleKnobs donduruldu ama şemanın diğer 11 alanı dondurulmamıştı. Sonuç (ölçüldü): slot `tip`'inde **19 farklı değer** (`toggle+textarea`, `productMiniList`, `menuRef`…), 257 slotun **137'sinde `zorunlu` yok**, `DataSource.navigation` vs `DataSource.navigationMenu`, prefix'siz action'lar. Bu dosya o dağınıklığı kapatır.

**Doğrulama:** `node scripts/validate-schemas.mjs` — bu dosyadaki her kural orada kod olarak var. Prosa ile kod çelişirse **kod bug'dır**, prosa doğrudur.

---

## 1. Katman kuralı (değişmez)

```
İçerik      → slots        (merchant'ın editörde yazdığı/seçtiği şey)
Veri        → dataBindings (mağazadan otomatik gelen şey)
Yapı/davranış → styleKnobs (şekil seçimi)
Davranış çıktısı → actions (tetiklenen/dinlenen olay)
Görsel dil  → token + styleProfile (şemaya GİRMEZ)
```

**Slot mu dataBinding mi?** Tek test: *bu metni merchant mı yazıyor, yoksa üründen mi geliyor?*
Merchant yazıyorsa slot. Üründen/koleksiyondan geliyorsa dataBinding.
→ Bölüm başlığı ("Çok Satanlar") = slot · kartlardaki ürün adları = dataBinding.

---

## 2. Zorunlu üst seviye alanlar

Her şema **tam olarak** bu 12 anahtarı taşır. Eksik olamaz; fazlası `_` ile başlar (`_note`, `_knobNote`).

| Alan | Tip | Kural |
|---|---|---|
| `id` | string | Dosya adıyla birebir aynı (uzantısız). `{kategori}-{varyant}` |
| `kategori` | string | `taxonomy/v*.json` içindeki 18 kategoriden biri |
| `varyant` | string | Serbest ama kısa (`tabs`, `mega`, `grid-featured`) |
| `scope` | enum | `global` \| `page-template` \| `instance` (§7) |
| `amac` | string | **Tek cümle**, ne işe yaradığı. Görünüm anlatma |
| `slots` | object | §3 |
| `styleKnobs` | object | [`styleknobs-standard.md`](./styleknobs-standard.md) |
| `dataBindings` | array | §4 |
| `actions` | array | §5 — boş `[]` yasak, yoksa `["yok"]` |
| `hookNoktalari` | array | §6 |
| `bagimliliklar` | array | Gerekli global bileşenler: `["global-cart-drawer"]`. Yoksa `[]` |
| `responsive` | string | Otomatik kırılma davranışı. Yoksa `""` (styleKnobs §2.5) |

**Örnekler şemada tutulmaz.** Brief Ek-2 `ornekler[]` diyor; biz `observations/` + `evidence/` katmanına aldık — bilinçli sapma, korunur.

---

## 3. `slots` — içerik alanları

### 3.1 Dondurulmuş `tip` seti (13 değer)

Bunun dışında `tip` yazılmaz. Yeni tip gerekirse §9 süreci.

| tip | Ne | Zorunlu meta | Not |
|---|---|---|---|
| `text` | Tek satır düz metin | `maxLen` | Başlık, etiket, buton yazısı |
| `richtext` | Biçimli çok satır | — | Paragraf, açıklama |
| `image` | Görsel | — | |
| `video` | Video dosyası/embed | — | |
| `icon` | İkon seçimi | — | Görsel yükleme değilse; yüklemeyse `image` |
| `link` | URL / iç hedef | — | Tek başına link |
| `button` | Etiket + hedef çifti | — | `link` + metin birlikteyse. Ayrı slot açma |
| `number` | Sayı | — | Puan, adet, eşik |
| `boolean` | Evet/hayır **içerik alanı** | — | Nadir. Form alanının "zorunlu mu" gibi. UI toggle'ı ise **knob** |
| `datetime` | Tarih/saat | — | Countdown bitişi |
| `ref` | Mağaza varlığı seçimi | `hedef` | §3.3 |
| `object` | Sabit alan grubu | `alanlar` | §3.2 |
| `array` | Tekrarlayan liste | `item`, `min`, `max` | §3.2 |

**Kaldırılan tipler ve karşılıkları** (envanterde bulundu, artık yasak):

| Eski | Yerine |
|---|---|
| `product`, `productRef` | `{ "tip": "ref", "hedef": "product" }` |
| `menuRef` | `{ "tip": "ref", "hedef": "menu" }` |
| `promoRef` | `{ "tip": "ref", "hedef": "promo" }` |
| `productMiniList` | `{ "tip": "array", "item": { "urun": { "tip": "ref", "hedef": "product" } } }` veya dataBinding |
| `progress` | İçerik değil: eşik `number` slot + `*Goster` knob |
| `toggle` | İçerik değil → styleKnob (`hediyePaketiGoster`) |
| `toggle+textarea` | Böl: `*Goster` knob + `text`/`richtext` slot |

### 3.2 Meta anahtarları

Sadece bunlar:

| Anahtar | Ne zaman | Kural |
|---|---|---|
| `tip` | **Her slotta** | Yukarıdaki 13'ten biri |
| `zorunlu` | **Her slotta** | `true`/`false`. Atlanamaz — varsayılan yok |
| `maxLen` | `text`/`richtext` | `text`'te zorunlu. Demodaki uzunluk değil, **makul editör sınırı** |
| `min` / `max` | `array` | Demoda 3 kart görmek `max:3` demek değil — makul aralık yaz |
| `hedef` | `ref` | §3.3 |
| `item` | `array` | Liste öğesinin alan haritası |
| `alanlar` | `object` | Sabit grubun alan haritası |
| `not` | serbest | Kısa açıklama. Uzun tartışma observation'a |

**İç içe yazım (tek kural):** `array` → `item` · `object` → `alanlar`. Karıştırma.
Her iç alan yine tam slot'tur — `tip` + `zorunlu` taşır.

```json
"sekmeler": {
  "tip": "array", "zorunlu": true, "min": 1, "max": 8,
  "item": {
    "etiket": { "tip": "text", "zorunlu": true, "maxLen": 40 },
    "icerik": { "tip": "richtext", "zorunlu": true }
  }
}
```

### 3.3 `ref` — varlık seçimi

Merchant editörde mağaza varlığı seçiyorsa (ürün, koleksiyon, menü). Otomatik gelen liste **dataBinding**'dir.

`hedef`: `product` · `collection` · `menu` · `blog` · `page` · `promo` · `brand`

```json
"oneCikan": { "tip": "ref", "hedef": "product", "zorunlu": false }
```

### 3.4 Granülarite

Ürün kartı **slot değildir** — Base'in alt bileşenidir. Grid'in `item`'ı da kartın alanlarını tekrar tanımlamaz; dataBinding'den beslenir. (Walkthrough "Sık düşülecek 6 hata" §2.)

### 3.5 Slot adları

Tip seti donduruldu ama **adlar da tutarlı olmalı** — yoksa aynı kavram üç şemada üç isim alır (envanterde tam olarak bu oldu: `metin` / `aciklama` / `icerik`).

**Genel kurallar**
1. **Türkçe**, camelCase. Tekil kavram tekil ad, liste ise çoğul (`gorsel` / `gorseller`).
2. Ad **ne olduğunu** söyler, nasıl göründüğünü değil: `solGorsel` değil → `gorsel` + `gorselKonumu` knob'u.
3. **Meta anahtar adı slot adı olamaz** (`tip`, `zorunlu`, `min`, `max`, `maxLen`, `hedef`, `item`, `alanlar`, `not`) — okuyan da araç da karıştırır.

**Çekirdek adlar** — bu kavramlar için başka ad kullanılmaz:

| Ad | Tip | Ne |
|---|---|---|
| `baslik` | text | Ana başlık |
| `altBaslik` | text | İkincil başlık |
| `ustEtiket` | text | Başlık üstü küçük etiket (eyebrow) |
| `metin` | text | Kısa düz metin |
| `icerik` | richtext | Uzun biçimli metin |
| `gorsel` / `gorseller` | image / array | Görsel |
| `ikon` | icon **veya** image | Seçilen ikon → `icon`; yüklenen görsel → `image` |
| `video` · `poster` | video · image | Video ve kapak karesi |
| `cta` | button **veya** text | Hedef merchant'ın ise `button`; hedef sabitse (form gönder) yalnız etiket → `text` |
| `link` / `linkler` | link / array | Düz bağlantı |
| `items` | array | **Jenerik** liste — kavramsal adı yoksa |
| `etiket` | text | Liste öğesinin adı/başlığı |
| `ad` | text | Kişi/marka adı |
| `rozet` | text | Kart rozeti *(knob tarafı `rozetGoster` — aynı kelime)* |
| `urun` / `urunler` | ref / array | Merchant'ın seçtiği ürün(ler) |

**Liste adlandırma:** kavramsal adı varsa Türkçe çoğul (`sekmeler`, `slaytlar`, `logolar`, `hotspotlar`); yoksa `items`. İngilizce çoğul yazma.

**Emekli adlar** (envanterde bulundu, artık yasak):

| Eski | Yerine |
|---|---|
| `aciklama` | `metin` (text) veya `icerik` (richtext) |
| `slides` | `slaytlar` |
| `badge` | `rozet` |
| `eyebrow` | `ustEtiket` |
| `crossSell` | `oneriler` |
| `localeSwitcher` | `dilSecici` |
| `urunRef` | `urun` |
| `tip` · `alanlar` · `zorunlu` (slot adı olarak) | `tur` · `formAlanlari` · `zorunluMu` |

**Bölüme özel adlar serbesttir** — `soru`/`cevap`, `once`/`sonra`, `bitisZamani`, `kargoEsigi` gibi. Kural: Türkçe olsun, ne olduğunu söylesin, çekirdek bir kavramın eşanlamlısı olmasın.

**Yerleşik istisnalar** (Türkçe kuralının dışında): `cta`, `link`, `logo`, `video`, `poster`, `avatar`, `items`, `placeholder`, `hotspot`, `newsletter`, `copyright`.

---

## 4. `dataBindings` — mağaza verisi

Her eleman obje: `{ "name", "source", "params"? }`

- `name` — şema içinde kullanılan ad (Türkçe: `urunler`, `koleksiyon`)
- `source` — **dondurulmuş** `DataSource.*` listesinden
- `params` — opsiyonel obje

**Dondurulmuş DataSource listesi:**

| Source | Döner |
|---|---|
| `DataSource.product` | Tek ürün (PDP bağlamı) |
| `DataSource.productList` | Ürün listesi — `params: { kaynak, limit }` |
| `DataSource.collection` | Tek koleksiyon |
| `DataSource.collectionList` | Koleksiyon listesi |
| `DataSource.cart` | Sepet |
| `DataSource.customer` | Müşteri |
| `DataSource.navigation` | Menü ağacı *(`navigationMenu` yasak)* |
| `DataSource.searchResults` | Arama sonucu |
| `DataSource.searchSuggest` | Anlık öneri |
| `DataSource.compareList` | Karşılaştırma listesi |
| `DataSource.blogList` / `DataSource.blogPost` | Blog |
| `DataSource.paymentMethods` | Ödeme ikonları |

`productList.params.kaynak`: `collection` · `manual` · `recommended` · `recentlyViewed` · `bestSellers` · `new`

**Platform adı yasak.** `Shopify collection`, `ikas category` yazılmaz — compiler çevirir.

---

## 5. `actions` — olaylar

Dört gramerden biri. Boş `[]` **yasak**; gerçekten etkileşim yoksa `["yok"]` (üzerinden geçildiğini gösterir).

| Biçim | Ne | Örnek |
|---|---|---|
| `navigate` | Sayfa geçişi | `navigate` |
| `emit:{alan}.{olay}` | Bu section yayınlıyor | `emit:cart.add` |
| `listen:{alan}.{olay}` | Bu section dinliyor | `listen:cart.added` |
| `filter:{yol}` | Veri hattı filtresi | `filter:price.display` |
| `yok` | Etkileşim yok | tek başına kullanılır |

**camelCase olay adı, nokta ile alan ayrımı.** Prefix'siz fiil yazma:

| Yasak | Yerine |
|---|---|
| `subscribe` | `emit:newsletter.subscribe` |
| `changeLocale` | `emit:locale.change` |

---

## 6. `hookNoktalari`

Biçim: **`mount:{bolge}.{konum}`** — iki parça zorunlu (Brief İş Paketi B ile ortak dil). `mount:hotspot` gibi tek parçalı yazım geçersiz.

**Dondurulmuş bölgeler:**

| Bölge | Nerede |
|---|---|
| `section` | Her section — genel sarmalayıcı |
| `header` · `footer` · `announcement` | Global bölgeler |
| `menu` · `search` · `spotlight` | Global overlay'ler |
| `cart` · `cartDrawer` | Sepet **sayfası** ve sepet **çekmecesi** — ayrı bölgeler, karıştırma |
| `quickView` · `compare` | Ürün overlay'leri |
| `productCard` · `buyBox` · `gallery` | Ürün alt bileşenleri |
| `form` · `newsletter` | Form bölgeleri |
| `bundle` · `feedItem` · `hotspot` | Özel bileşenler |

**Dondurulmuş konumlar:** `before` · `after` · `aboveItems` · `belowItems` · `badge` · `footer` · `utility`

Her instance section en az `mount:section.after` önerir. Global bileşen kendi bölgesini kullanır. Yeni bölge/konum gerekirse §9 süreci — uydurup yazma.

---

## 7. `scope` kararı

| scope | Test | Örnek |
|---|---|---|
| `instance` | Sayfa akışının bir satırı; merchant sıralıyor | hero, feature grid |
| `page-template` | Sayfa tipine bağlı, sabit yerde | breadcrumbs, PLP gövdesi |
| `global` | Her yerden erişilen katman | header, footer, cart drawer |

Şüphede: *"bu blok sayfanın bir satırı mı, her yerden açılan bir katman mı?"*

---

## 8. Dosya yerleşimi ve kimlik

```
sections/{scope}/{id}.json                             ŞEMA (tip başına TEK dosya)
observations/{tema}/{preset}/{sayfa}/{schemaId}.json   GÖZLEM (her sighting ayrı)
evidence/{tema}/{preset}/{sayfa}/{slug}.{375|768|1440}.png
```

- `observationId` = `{tema}.{preset}.{sayfa}.{schemaId}`
- Aynı sayfada ikinci instance → `...{schemaId}.2`, dosya adı `{schemaId}-2.json`
- Aynı tipi başka temada görürsen **şemaya dokunma**, yeni observation aç. Sapma varsa observation'ın `delta` alanına yaz; sapma büyükse yeni varyant.

---

## 9. Sözlüğe ekleme süreci

Yeni `tip` / `DataSource` / action alanı gerekirse:

1. Mevcut sözlükle ifade etmeyi dene (çoğu zaman mümkün).
2. Olmuyorsa şemaya **yazma** — observation `delta`'sına veya review dosyasına yaz.
3. Bu dosyaya PR + `validate-schemas.mjs` içindeki sabit listeye ekle.

Agent kendi başına yeni tip türetmez; `Açık soru` olarak raporlar.

---

## 10. Kayıt kapatma kontrol listesi

- [ ] 12 üst alan tam, `id` = dosya adı
- [ ] `kategori` taksonomiden (yoksa `candidates/`)
- [ ] `scope` kararı verildi
- [ ] Her slot `tip` + `zorunlu` taşıyor; `text` slotlarda `maxLen`
- [ ] Renk/font/spacing hiçbir yerde yok
- [ ] dataBindings soyut, platform adı geçmiyor
- [ ] actions dolu veya `["yok"]`, gramer doğru
- [ ] styleKnobs bütçesi (instance 4–8) — az ise gerekçe
- [ ] Observation + 3 viewport evidence bağlı
- [ ] `node scripts/validate-schemas.mjs` temiz
