---
name: qante-discover
description: >-
  End-to-end QANTE section discovery: takes a demo URL, a schemaId, or "continue
  from todo", walks the page, draws section boundaries, writes/updates
  sections/*.json schemas + observations, captures 3-viewport evidence, and
  validates against the frozen contract. Use when the user asks to inventory a
  theme/demo/store, add a new section, fill or fix a schema, continue a todo
  file, or says /qante-discover.
---

# QANTE Discover

Bir demo/tema/sayfayı **şema + gözlem + kanıt** olarak envantere geçirir. Kod yazmaz, tema üretmez — sözleşmeyi doldurur.

## Sözleşmeler (önce oku, sırayla)

| # | Dosya | Ne verir |
|---|---|---|
| 1 | `qante/schema-standard.md` | **Şemanın tamamı**: 12 alan, slot tip seti, DataSource listesi, action grameri, scope testi |
| 2 | `qante/styleknobs-standard.md` | `styleKnobs` sözlüğü, karar testi, bütçe (4–8), responsive (§2.5) |
| 3 | `qante/README.md` | Klasör haritası, kimlik kuralları |
| 4 | `qante/taxonomy/v*.json` | Geçerli kategori + sayfa tipi listesi (en yüksek sürüm) |

Yardımcı (gerektiğinde): `qante-ornek-calisma-hyper.md` (sınır çizme + 6 hata) · `reviews/styleknobs/wine-store-shape-atlas.md` (şekil ekseni kanıtı).

**Bu dosyalarla çelişen hiçbir şey yazma.** Sözlükte olmayan bir ad gerekiyorsa uydurma → `Açık soru` olarak raporla.

---

## Giriş biçimleri (hangi moda düşeceğini belirle)

| Kullanıcı der ki | Mod | Ne yap |
|---|---|---|
| bir URL verir | **A · Keşif** | Sayfayı gez, section'ları çıkar, yeni şema/gözlem aç |
| `hero-slideshow` gibi bir id verir | **B · Tek şema** | O şemayı standarda göre onar/tamamla |
| "todo'dan devam" / argümansız | **C · Devam** | `todo/` içindeki açık işi bul, sıradakini yap |
| "hepsini doğrula" / "borç" | **D · Denetim** | Validator koş, borç raporu çıkar |

Mod belirsizse **sor** — yanlış modda 50 dosya değiştirme.

---

## Mod A · Keşif (URL'den envanter)

### A1. Hazırlık
1. Taksonomiyi oku (kategori + pageType listesi).
2. Tema slug'ı belirle → `todo/{tema}.md` var mı? Yoksa `todo/_template.md`'den aç, `todo/README.md` tablosuna satır ekle.
3. Evidence kökü: `evidence/{tema}/{preset}/{sayfa}/`.

### A2. Sayfayı gez
Rota sabit: **home → PDP → collection → search → cart/drawer → content/blog → footer**.
Tarayıcı gerekiyorsa `cursor-ide-browser` araçlarını kullan (navigate → snapshot → screenshot).

**Section sınırı çizme** (scroll ederken sor):
- Tam genişlik / arka plan değişimi → muhtemel sınır
- İçerik tekrar ediyor (3 kart, 4 ikon) → tek section'ın `item`'ları, ayrı section değil
- Kendi başlığı/CTA'sı var → bağımsız section
- Her sayfada mı → `global` adayı

**Granülarite:** buton, kart, input section değildir. Tekrar eden öğenin **kabı** section'dır.

### A3. Her section için karar zinciri
1. **Bu tip `sections/` içinde zaten var mı?** → varsa şemaya DOKUNMA, sadece yeni observation aç. Fark varsa observation `delta`'sına yaz.
2. **Kategori taksonomide var mı?** → yoksa zorlama, `candidates/` altına aday aç.
3. **Scope?** (schema-standard §7)
4. **Feature mı section mı?** Sticky header bir feature'dır → `navigation` şemasının knob'u. (Walkthrough Adım 1 tablosu.)

### A4. Şemayı yaz
`sections/_template.json` kopyala → `sections/{scope}/{id}.json`. Alan alan doldur:

- **slots** — "merchant bunu editörde yazar mı?" testi. Her slot `tip` + `zorunlu`; `text` ise `maxLen`; `array` ise `item` + `min`/`max`; `object` ise `alanlar`; varlık seçimi ise `ref` + `hedef`.
  Demoda 3 kart görmek `max: 3` demek **değil** — makul editör aralığı yaz.
  **Adlar §3.5'ten:** `baslik` · `altBaslik` · `ustEtiket` · `metin` (text) · `icerik` (richtext) · `gorsel` · `ikon` · `cta` · `link` · `etiket` · `items`. Türkçe camelCase; liste kavramsalsa Türkçe çoğul (`slaytlar`, `sekmeler`), değilse `items`. `aciklama`/`slides`/`badge`/`eyebrow` emekli. Meta anahtar adını (`tip`, `zorunlu`, `alanlar`…) slot adı yapma.
- **dataBindings** — üründen/koleksiyondan geleni buraya. Sadece dondurulmuş `DataSource.*`. Platform adı yazma.
- **styleKnobs** — aşağıdaki A5.
- **actions** — tıklanan/kaydırılan her şey. Boş `[]` yasak; yoksa `["yok"]`.
- **hookNoktalari** — en az `mount:section.after`.
- **bagimliliklar** — gerekli global bileşenin schemaId'si.
- **responsive** — yalnız **otomatik** kırılma davranışı (merchant seçmiyorsa). Merchant cihaz başına seçiyorsa knob'a cihaz haritası yaz, `responsive`'i boş bırak.

### A5. styleKnobs
Bu adım için `styleknobs-auditor` skill'inin akışını uygula (screenshot envanteri → karar testi → atlas çaprazı → bütçe). Kısa hali:
- 375 ile 1440'ı karşılaştır → `kolon`, `layout`, responsive ekseni
- Ok/dot/kesik kart → `layout: grid|slider`, `okGoster`, `noktaGoster`
- Aynı schemaId başka preset'te farklı kurulmuşsa → o boyut kesin knob
- Atlas'ta o aile için kanıtlı eksen varsa ekle + `Açık soru` notu
- **Hedef 4–8 knob.** 2'de kalıyorsan gerekçe; 8'i aşarsan `_knobNote`

### A6. Observation + evidence
```bash
# observations/_template.json kopyala → observations/{tema}/{preset}/{sayfa}/{schemaId}.json
# zorunlu: selector (+ url)
cd qante/scripts && node capture-observation.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
```
- `observationId` = `{tema}.{preset}.{sayfa}.{schemaId}`; aynı sayfada ikinci instance → `.2` / dosya `-2.json`
- Drawer/modal: `captureMode: "viewport"` + `prepareClick`
- **Manuel screenshot yok.** Script 375/768/1440 üretir ve `evidence[]`'i günceller.

### A7. Kapat
```bash
node scripts/validate-schemas.mjs {schemaId}
```
Temiz değilse düzelt. Sonra `todo/{tema}.md`'de `[x]`, kapsam satırını güncelle.

---

## Mod B · Tek şema onarımı

1. `node scripts/validate-schemas.mjs {schemaId}` → borcu gör.
2. ERROR'ları düzelt (kaldırılmış tip, action grameri, bilinmeyen alan → standartta karşılığı yazılı).
3. WARN'ları değerlendir: `zorunlu` eksikse ekle; knob sayısı azsa evidence'a bakıp A5'i uygula.
4. Tekrar koş, temizle.

**Şemayı değiştirmeden önce evidence'a bak.** Kanıtsız alan ekleme.

---

## Mod C · Todo'dan devam

1. `qante/todo/README.md` tablosunu oku → durumu `⬜`/kısmi olan tema.
2. O temanın `todo/{tema}.md` dosyasında ilk işaretsiz `[ ]` maddeyi al.
3. Madde bir sayfa/section ise Mod A'yı o kapsamda koştur.
4. Açık iş yoksa `improvements-qc.md` §4 checklist'inden sıradaki maddeyi öner — **kullanıcıya sorup onay al**, kendi başına büyük iş başlatma.

---

## Mod D · Denetim

```bash
node scripts/validate-schemas.mjs               # tamamı
node scripts/validate-schemas.mjs --errors-only # sadece kırmızılar
```
Çıktıyı `qante/reviews/schema/_debt.md`'ye özetle: dosya · error · warn · knob sayısı. Toplu düzeltmeyi **onay almadan** yapma.

---

## Sert kurallar

- **Kanıtsız yazma.** Screenshot/preset/atlas desteği olmayan alan → `Açık soru`.
- **Token şemaya girmez.** Renk/font/spacing/radius/gölge hiçbir alanda yok.
- **Platform adı yasak.** `Shopify collection` değil `DataSource.collection`.
- **Aynı tip = tek şema dosyası.** İkinci tema aynı section'ı gösteriyorsa yeni *observation*, yeni şema değil.
- **Sözlük dışı ad türetme.** Yeni `tip`/`DataSource`/knob adı gerekiyorsa rapor et, standarda PR öner.
- **Toplu değişiklik onay ister.** 1–3 dosya serbest; fazlası için önce plan sun.
- **Boş `[]` actions bırakma**, `["yok"]` yaz.
- İş bitince **her zaman** validator koş.

## Çıktı biçimi

Her koşunun sonunda kısa özet:

```
Mod: A (keşif) · hyper/nexvo/home
Yeni şema:      2  (promo-banner-tabs, collection-nav-tabs)
Güncellenen:    1  (social-proof-brand-logos → +2 knob)
Observation:    3  · evidence 9 PNG
Validator:      0 error · 4 warn
Açık soru:      1  (promo-banner-tabs'ta mobil layout merchant seçimi mi?)
Sıradaki:       todo/hyper-nexvo.md → collection sayfası
```
