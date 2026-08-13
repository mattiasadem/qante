# QANTE — QC bulguları & improvement backlog

*Tarih: 2026-08-13 (güncellendi) · Kaynak: brief + Hyper walkthrough + README + master plan vs canlı envanter*  
*Amaç: review’da çıkanlar kaybolmasın; sıradaki iş buradan seçilir.*

> **2026-08-13 düzenlemesi:** Şema sözleşmesi yazıldı ([`schema-standard.md`](./schema-standard.md)) ve koda döküldü ([`scripts/validate-schemas.mjs`](./scripts/validate-schemas.mjs)). Agent girişi artık `/qante-discover`.
>
> Dondurulan sözlükler: slot **tipleri** (§3.1) · slot **adları** (§3.5) · DataSource (§4) · action grameri (§5) · hook bölge/konum (§6) · styleKnob adları + `layout` tek anahtar kuralı + §2.1 toplama taraması.
>
> Doğrulayıcı koşusu: **45 error · 214 warn · 1 temiz.** Dosya bazlı: [`reviews/schema/_debt.md`](./reviews/schema/_debt.md).

**Anlık envanter (QC anı):** ~59 şema · 104 observation (Hyper default + ceramide/pillar/trove/nexvo) · hepsi 3vp evidence · orphan şema yok.

**Şema ↔ walkthrough:** 5 örnek kayıt (announcement, mega header, grid-featured, cart drawer, before/after) repo ile **bire bir** uyumlu. Otomatik şema QC: **0 kritik hata** (token sızıntısı yok, platform adı dataBindings’te yok, actions boş değil).

---

## Öncelik sırası (önerilen)

| # | İş | Neden | Effort |
|---|---|---|---|
| ~~3~~ | ~~A2 — SectionSchema spec + validate~~ | ✅ **bitti** — `schema-standard.md` + `validate-schemas.mjs` | — |
| ~~0~~ | ~~45 ERROR + 214 WARN~~ | ✅ `/qante-discover` onarım 2026-08-13 — `npm run validate` 59/59 temiz | — |
| 1 | Taksonomi `pageTypes` + `candidateQueue` düzelt → `v0.2.0` | Gözlemler taksonomi dışı sayfa tipi kullanıyor; aday dosyada var, tax’ta yok | S |
| 2 | ~~137 slotta eksik `zorunlu`~~ | ✅ dolduruldu | — |
| 3b | Knob bütçesi: aile taraması + `_knobNote` (uydurma yok) | Evidence ile tek tek auditor hâlâ değerli — şema artık sözleşmeye uyuyor | M |
| 4 | `cta-band` kapat veya bilinçli boşluk beyan et | 18 kategoriden tek boşluk | S |
| 5 | `page-template` scope’u doğrula (breadcrumbs) | Scope modelinin 1/3’ü hiç kullanılmamış | S |
| 6 | A3 — ikinci kaynak **ozy** (ikas) | Hyper tek motor; çapraz satıcı doğrulama yok | L |
| 7 | DTC-69 skor → Tier A/B (ilk 30 = O6/S3) | Havuz kayıtlı; henüz seçim kriteri yok | M |
| 8 | Kapsam raporunu preset + DTC satırlarıyla güncelle | A4 güncel değil (hâlâ “45 şema / 80 obs”) | S |
| 9 | README `observationId` `.2/.3` kuralı — ✅ standarda yazıldı (§8), validator’a taşınabilir | Pratik ile doküman çelişiyordu | S |

---

## 1. Bulunan sorunlar (detay)

### 1.1 Taksonomi `pageTypes` eksik

Gözlemlerde kullanılan ama `taxonomy/v0.1.0.json`’da **olmayan** sayfa tipleri:

- `cart`
- `cart-drawer`
- `search`
- `blog-list` (`blog-post` var)

**Etki:** ~9 observation “PAGE-TAX” uyarısı.  
**Yapılacak:** pageTypes’a ekle; dosyayı `taxonomy/v0.2.0.json` yap (brief A1 zaten v0.2 istiyor). Eski `v0.1.0`’ı arşivle veya symlink/note ile işaretle.

### 1.2 `candidateQueue` boş

- Dosya: `candidates/commerce-tools.md` → durum **bekliyor**
- `taxonomy/v0.1.0.json` → `candidateQueue: []`

**Yapılacak:** queue’ya `commerce-tools` referansı yaz; onayda kategoriye al / reddet kararını checklist’ten geç.

### 1.3 `observationId` kuralı vs pratik

- README: `{tema}.{preset}.{sayfa}.{schemaId}` — “1, 2, 3 yok”
- Pratik: aynı sayfada çoklu instance → `.2` / `.3` soneki (7 observation)

**Yapılacak:** README + observation template: aynı `schemaId` ikinci kez görülürse `….{schemaId}.2` dosya adı `…-2.json`. Health warn’ı buna göre yumuşat veya kuralı enforce et.

### 1.4 `cta-band` = 0 şema

18 kategoriden tek boşluk.  
**Seçenekler:** (a) Hyper/DTC’de bir CTA band instance bul → şema+obs; (b) kapsam raporunda bilinçli boşluk beyan et.

### 1.5 `page-template` scope hiç yok

Walkthrough breadcrumbs’ı `page-template` öneriyor; şema `navigation-breadcrumbs` → `instance`.  
**Yapılacak:** breadcrumbs’ı `page-template`’e taşı (veya bilinçli `instance` notu yaz). Scope üçlüsünün üçünü de en az 1 örnekle kanıtla.

### 1.6 Şema QC’de temiz olanlar (tekrar üretme)

- id = dosya adı
- styleKnobs’ta renk/font/spacing yok
- DataSource soyut
- actions dolu veya `["yok"]`
- 104/104 observation 3vp evidence
- orphan şema yok

---

## 2. Brief deliverable boşlukları

| Deliverable | Brief | Durum |
|---|---|---|
| A1 Taksonomi v0.2 | Genişletilmiş + aday süreci | ⬜ v0.1.0; commerce-tools henüz tax’ta değil |
| A2 Schema spec + JSON Schema | Resmi tanım + validate | ✅ [`schema-standard.md`](./schema-standard.md) + [`validate-schemas.mjs`](./scripts/validate-schemas.mjs) (`npm run validate`) |
| A3 20 örnek + çapraz kaynak | 6+ kategori, 3 global, 3 sektör | 🟡 miktar aşıldı; **ikinci satıcı (ozy) yok** |
| A4 Kapsam raporu | Taranan kaynaklar + sığmayanlar | 🟡 Sprint 0 satırı var; preset/DTC güncel değil |
| B Hook RFC | İnceleme + RFC + PoC | ⬜ Sprint 1 |
| C Base / D Preset | — | ⬜ A+B kapısından sonra |

**Bilinçli mimari sapma (koru):** Brief Ek-2 `ornekler[]`’i şemanın içinde tutuyor; bizde örnekler `observations/` + `evidence/`. Daha temiz — A2 spec’inde “örnekler observation katmanında” diye yaz.

---

## 3. Kaynak seti (ne nerede)

| Kaynak | Rol | Durum |
|---|---|---|
| Hyper default | Ana envanter | ✅ |
| Hyper presets (ceramide/pillar/trove/nexvo) | Aynı motor, sektör delta | ✅ |
| **ozy (ikas)** | İkinci satıcı / A3 kapısı | ⬜ URL + `todo/ozy.md` |
| DTC-69 | Referans marka havuzu (S3/O6) | ✅ liste: [`candidates/dtc-69-brands.md`](./candidates/dtc-69-brands.md) — skor yok |
| Shopify Theme Store adayları | Prestige / Impulse / Horizon… | ✅ liste: [`candidates/shopify-themes.md`](./candidates/shopify-themes.md) |
| Instant/EcomWize vb. | Builder galerileri | ⬜ sonra |

**DTC skor (hatırlatma):** erişim · sayfa seti · section zenginliği · segment · TR/DE yakınlığı · tekrar cezası → Tier A (≥7) / B / atla. 69→~30 (O6) → 8–10 Tier A. Ozy’nin yerine geçmez.

---

## 4. Checklist (iş bitince işaretle)

- [x] SectionSchema sözleşmesi + doğrulayıcı (`schema-standard.md` · `validate-schemas.mjs`)
- [x] Agent girişi: `/qante-discover` komutu + skill
- [x] `reviews/schema/_debt.md` — 0 error / 0 warn (2026-08-13 onarım)
- [x] 137 slotta `zorunlu` alanı
- [x] styleKnobs sözleşme uyumu (aile seti + `_knobNote`; auditor hâlâ isteğe bağlı)
- [ ] `taxonomy/v0.2.0.json` — pageTypes + candidateQueue
- [ ] CI: `npm run validate` pipeline'a bağla
- [ ] `cta-band` şema veya bilinçli boşluk
- [ ] breadcrumbs `page-template` (veya gerekçe notu)
- [ ] `todo/ozy.md` + ilk home roster
- [ ] DTC-69 → ilk 30 skor tablosu
- [ ] `kapsam-raporu-sprint-0.md` sayıları güncelle (preset + DTC)
- [ ] Viewer/todo README’de bu dosyaya link (yapıldıysa)

---

## 5. Bilinçli olarak şimdi yapma

- Full Hyper yeniden tarama
- DTC-69’un tamamını 3vp envanterlemek
- Base / Preset / Hook PoC (Sprint 1+)
- Soft-reuse notları (opsiyonel, düşük öncelik)

---

## Linkler

- **Giriş / doküman haritası:** [`README.md`](./README.md)
- **Sözleşme:** [`schema-standard.md`](./schema-standard.md) · [`styleknobs-standard.md`](./styleknobs-standard.md)
- **Borç raporu:** [`reviews/schema/_debt.md`](./reviews/schema/_debt.md)
- Brief: [`qante-teknik-ekip-brief.md`](./qante-teknik-ekip-brief.md)
- Walkthrough: [`qante-ornek-calisma-hyper.md`](./qante-ornek-calisma-hyper.md)
- Kapsam: [`kapsam-raporu-sprint-0.md`](./kapsam-raporu-sprint-0.md)
- Sprint checklist: [`sprint-0-task-listesi.md`](./sprint-0-task-listesi.md)
- Aday: [`candidates/commerce-tools.md`](./candidates/commerce-tools.md)
- DTC havuz: [`candidates/dtc-69-brands.md`](./candidates/dtc-69-brands.md)
- Viewer: https://qante.vercel.app · lokal `cd viewer && node server.mjs`
