# QANTE — Sprint 0 Task Listesi
*Kaynak: `qante-teknik-ekip-brief.md` §8 · Süre: 2 hafta · Çıktı odaklı*

**Sprint 0 hedefi:** A şeması resmi tanımlı + ilk 8 örnek section + taksonomi açık; B inceleme raporu + taslak model kritiği; ortak repo/CI/doküman temeli.

---

## Ortak (repo & disiplin)

| # | Task | Done when |
|---|---|---|
| O1 | Repo/klasör iskeleti: `taxonomy/`, `rfc/hooks/`, `base/`, `sections/`, `evidence/` | Klasörler + README stub’ları var |
| O2 | Doküman şablonu (kapsam raporu, RFC, section kayıt) | Şablonlar `docs/` veya kökte; ekip aynı formatı kullanıyor |
| O3 | Lint/CI temeli (en az: JSON validate + markdown/link check veya minimal CI) | PR’da otomatik koşuyor |
| O4 | Adlandırma kuralları yazılı (`sections/{scope}/{kategori}-{varyant}.json`, evidence path) | Brief + Hyper örneğiyle uyumlu kısa kural dosyası |
| O5 | Sahiplenme tablosu doldurulur (A/B/C/D sahipleri + Sprint 0 tarihleri) | Brief Ek-3 dolu |
| O6 | Referans marka listesi — ilk 30 (kriter + sahip) `[S3]` | 30 URL/marka + seçim kriteri notu |

---

## İş Paketi A — Envanter & Şema

| # | Task | Done when |
|---|---|---|
| A0 | Tohum taksonomi dosyasını aç: `taxonomy/v0.1.0.json` (18 kategori + sayfa tipleri) | Dosya repo’da, versiyonlu |
| A1 | SectionSchema boyutlarının resmi tanımı (brief §4’teki 11 boyut) | Spesifikasyon taslağı + JSON Schema iskeleti |
| A2 | Şema şablonu + boş kayıt dosyası (Hyper Adım 0) | Yeni kayıt 5 dk’da kopyalanıp doldurulabiliyor |
| A3 | Kaynak seti Sprint 0 dilimi: Hyper (default) + 1 ikinci kaynak (ikas ozy veya referans marka) | Kapsam raporuna satır düşmüş |
| A4 | Hyper vakasını uygula (tek preset, sabit rota) | ~12–16 section keşfi notu; Sprint 0 için 8’i tam şema |
| A5 | **İlk 8 örnek section tam doldurulmuş** (en az 3 kategori; en az 2’si `global`) | Her kayıt: slots, styleKnobs, dataBindings, actions, hookNoktaları, ≥1 evidence |
| A6 | Aday-kategori süreci yazılı + ilk aday(lar) (örn. commerce-tools) | ✅ `candidates/commerce-tools.md` |
| A7 | “Şemaya sığmayanlar” listesi + her madde için karar önerisi | ✅ `candidates/sigmayanlar.md` |
| A8 | Kapsam raporu Sprint 0 satırı (taranan kaynak, sektör, aday, platform notu) | ✅ `kapsam-raporu-sprint-0.md` |

**A Sprint 0 kapısı (mini):** 8 örnekte tüm şema alanları dolu · kategori taksonomiden veya aday açılmış · renk/font styleKnob’da yok · DataSource soyut.

---

## İş Paketi B — Hook RFC (Sprint 0 dilimi)

| # | Task | Done when |
|---|---|---|
| B1 | WordPress actions & filters incelemesi (güçlü/zayıf, öncelik, sürümleme) | Rapor bölümü hazır |
| B2 | Shopify theme app extensions incelemesi (app blocks, embeds, şema) | Rapor bölümü hazır |
| B3 | Karşılaştırma tablosu (WP vs Shopify vs bizim taslak model) | Tabloda 3 mekanizma hizalı |
| B4 | **İnceleme raporu v0** (maks ~6 sayfa hedefinin iskeleti; Sprint 0’da tamamlanabilir kısım) | `rfc/hooks/review-v0.md` |
| B5 | Taslak modelin ilk kritiği: mount / event / filter hipotezi | “doğrula / çürüt / açık soru” notları |
| B6 | Adlandırma sözleşmesi taslağı (`mount:{bölge}.{konum}`) — A’nın `hookNoktaları` ile tutarlı | A örneklerindeki hook’larla çakışma yok |
| B7 | Açık sorular işaretle: S1 (dış script/embed), S2 (kod modu kısıtları) — sahip + “Sprint 1’e” | RFC’de kırmızı kalem yok, hepsi sahipli |

**B Sprint 0 kapısı (mini):** İnceleme raporu + taslak model kritiği var; PoC Sprint 1.

---

## Haftalık önerilen sıra

### Hafta 1
1. O1–O5 (iskelet, sahiplik, şablon)
2. A0–A2 (taksonomi + şema tanımı + şablon)
3. B1–B2 (paralel okuma)
4. A3–A4 başla (Hyper gezisi + evidence)

### Hafta 2
1. A5–A8 (8 örnek + aday + kapsam)
2. B3–B7 (rapor birleştir + model kritiği + adlandırma)
3. O3, O6 (CI + referans 30)
4. Sprint 0 demo / kapı kontrolü (aşağıdaki checklist)

---

## Sprint 0 kapanış checklist

- [ ] `taxonomy/v0.1.0.json` açık
- [ ] SectionSchema resmi tanım (taslak OK)
- [ ] 8 section kaydı + evidence
- [ ] Aday-kategori süreci + ≥0 veya ≥1 aday (varsa karar önerili)
- [ ] WP+Shopify inceleme raporu v0
- [ ] Hook taslak model ilk kritiği + adlandırma taslağı
- [ ] Repo klasörleri + doküman şablonu + CI temeli
- [ ] Sahiplenme tablosu dolu
- [ ] Referans marka ilk 30 (veya “kim seçer” kararı + tarih)

---

## Bilinçli olarak Sprint 0 dışı (Sprint 1+)

- A: 20 örneğe tamamlama, A2 JSON Schema final, çapraz sektör doğrulama
- B: RFC v1 (6 başlığın tam cevabı), B-PoC (1 mount + 1 event + 1 filter)
- C: primitives, `tokens/neutral.json`, Studio demo
- D: preset manifest / Tema + UI Kit
