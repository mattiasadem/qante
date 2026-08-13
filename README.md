# QANTE — giriş kapısı

E-ticaret temalarını **şema + kanıtlı envanter** olarak tanımlar. Amaç şu an kod/tema üretmek değil; gerçek sitelerden section dilbilgisini çıkarmak (Sprint 0 / İş Paketi A).

Platform hedefi: önce ikas Studio; IR/şema platform-bağımsız.

**Anlık durum:** 59 şema (49 instance · 10 global) · 105 observation · 312 evidence PNG · taksonomi v0.1.0

---

## Agent buradan başlar

```
/qante-discover            → todo'dan devam
/qante-discover <url>      → yeni tema/sayfa keşfi
/qante-discover <schemaId> → tek şema onarımı
/qante-discover denetim    → tüm envanteri doğrula
```

Komut: `.cursor/commands/qante-discover.md` → skill: `.agents/skills/qante-discover/SKILL.md`

**Elle çalışıyorsan okuma sırası:** bu README → `schema-standard.md` → `styleknobs-standard.md`. Üçü yeterli; gerisi bağlam.

---

## Doküman haritası — her dosyanın **rolü**

Dosyaları rolüne göre oku. Sözleşme bağlar, rehber öğretir, kayıt bilgi verir.

### 🔒 Sözleşme — bunlarla çelişemezsin

| Dosya | Kapsam |
|---|---|
| [`schema-standard.md`](./schema-standard.md) | **Şemanın tamamı**: 12 alan · slot tip seti · DataSource listesi · action grameri · scope testi |
| [`styleknobs-standard.md`](./styleknobs-standard.md) | Yalnız `styleKnobs`: sözlük · karar testi · bütçe (4–8) · responsive |
| [`taxonomy/v0.1.0.json`](./taxonomy/v0.1.0.json) | Geçerli kategori + sayfa tipi (en yüksek sürümü kullan) |
| `sections/_template.json` · `observations/_template.json` | Dosya iskeletleri |
| [`scripts/validate-schemas.mjs`](./scripts/validate-schemas.mjs) | Sözleşmenin **kod hali** — hakem budur |

### 📖 Rehber — nasıl yapılır

| Dosya | Ne öğretir |
|---|---|
| [`qante-ornek-calisma-hyper.md`](./qante-ornek-calisma-hyper.md) | Uçtan uca vaka: sınır çizme, feature≠section, 5 örnek kayıt, **sık düşülen 6 hata** |
| [`scripts/README.md`](./scripts/README.md) | Evidence yakalama (3 viewport, drawer/modal) |
| [`todo/README.md`](./todo/README.md) | Tema bazlı saha takibi nasıl işler |
| [`reviews/styleknobs/wine-store-shape-atlas.md`](./reviews/styleknobs/wine-store-shape-atlas.md) | Eski editörden şekil eksenleri — knob için 3. kanıt |

### 📌 Durum — nerede kaldık

| Dosya | Ne der |
|---|---|
| [`improvements-qc.md`](./improvements-qc.md) | **Sıradaki iş buradan seçilir** — QC bulguları + backlog |
| [`todo/*.md`](./todo/) | Tema başına ilerleme (`hyper.md` bitti, sıradaki `ozy.md`) |
| [`kapsam-raporu-sprint-0.md`](./kapsam-raporu-sprint-0.md) | Resmi kapsam beyanı (A4) |
| [`sprint-0-task-listesi.md`](./sprint-0-task-listesi.md) | Sprint 0 checklist |
| [`candidates/`](./candidates/) | Aday kategoriler + taranacak kaynak havuzu |
| [`reviews/`](./reviews/) | Agent önerileri (şema değil — öneri) |

### 🗺️ Bağlam — sadece gerekince

| Dosya | Ne |
|---|---|
| [`qante-teknik-ekip-brief.md`](./qante-teknik-ekip-brief.md) | 4 iş paketi (A/B/C/D), kapılar, deliverable'lar |
| [`tema-fabrikasi-master-plan-v02.md`](./tema-fabrikasi-master-plan-v02.md) | Büyük vizyon |

> Brief bir **hedef** dokümanıdır, sözleşme değil. Brief ile `schema-standard.md` çelişirse standart kazanır (bilinçli sapmalar `improvements-qc.md` §2'de yazılı).

---

## Klasör haritası

```
qante/
├── schema-standard.md          ← SÖZLEŞME (şemanın tamamı)
├── styleknobs-standard.md      ← SÖZLEŞME (styleKnobs)
├── taxonomy/v0.1.0.json
├── sections/                   ŞEMA — tip başına TEK dosya
│   ├── _template.json
│   ├── global/                 (10)
│   └── instance/               (49)
├── observations/               GÖZLEM — her sighting ayrı dosya
│   └── {tema}/{preset}/{sayfa}/{schemaId}.json
├── evidence/{tema}/{preset}/{sayfa}/{slug}.{375|768|1440}.png
├── scripts/                    capture-observation · validate-schemas
├── reviews/                    agent önerileri (styleknobs/ · schema/)
├── todo/                       saha takibi (tema başına)
├── candidates/                 aday kategori + kaynak havuzu
└── viewer/                     lokal web UI
```

**İki kimlik — karıştırma:**

| | Nerede | Örnek |
|---|---|---|
| Şema (tip) | `sections/instance/hero-slideshow.json` | `id: hero-slideshow` |
| Gözlem (sighting) | `observations/hyper/default/home/hero-slideshow.json` | `observationId: hyper.default.home.hero-slideshow` |

Aynı tipi başka temada görürsen **şema dosyasına dokunma** — yeni observation aç, farkı `delta`'ya yaz.

---

## Yeni kayıt akışı

1. Demo gez → section sınırını çiz (kart/buton değil, **kabı**).
2. Tip `sections/`'ta var mı?
   - **Yok** → `_template.json`'dan şema aç (`schema-standard.md` §2–7).
   - **Var** → şemaya dokunma.
3. `observations/{tema}/{preset}/{sayfa}/{schemaId}.json` — zorunlu: `selector` (+ `url`).
4. Evidence — **manuel screenshot yok**:
   ```bash
   cd qante/scripts && node capture-observation.mjs ../observations/hyper/default/home/hero-slideshow.json
   ```
5. Doğrula:
   ```bash
   cd qante && node scripts/validate-schemas.mjs hero-slideshow
   ```
6. `todo/{tema}.md` → `[x]`. Kategori uymadıysa `candidates/`.

---

## Sert kurallar

| Yap | Yapma |
|---|---|
| Soyut `DataSource.*` | Platform adı (`Shopify collection`) |
| Yapısal `styleKnobs` (kolon, hizalama, layout) | Renk / font / spacing şemaya |
| `scope`: `global` \| `page-template` \| `instance` | Her şeyi `instance` saymak |
| Action'ları yaz; yoksa `["yok"]` | Boş `[]` bırakmak |
| Her slotta `tip` + `zorunlu` | Tip uydurmak (sözlük 13 değer) |
| Kanıt bağla (observation + 3vp) | Hayali şema |
| Bitirince validator koş | "Herhalde doğrudur" |

**AI/agent rolü:** şema doldurur, envanter çıkarır. Serbest komponent kodu veya stil üretmez.

---

## Sözlük

- **Section** — sayfanın bağımsız yapı taşı (şemayla tanımlı)
- **Slot** — merchant'ın editörde doldurduğu içerik alanı
- **styleKnob** — yapısal/davranışsal seçim (token değil)
- **DataSource** — soyut veri bağı; compiler platforma çevirir
- **Scope** — `global` · `page-template` · `instance`
- **Hook** — `mount:` genişleme noktası
- **Observation** — "bu tipi şu temada gördük" kaydı
- **Preset** — Base üstünde tokens + styleProfile + reçete (şimdilik kapsam dışı)

---

## Viewer

```bash
cd qante && npm run dev        # http://localhost:3456
```
Canlı: https://qante.vercel.app
