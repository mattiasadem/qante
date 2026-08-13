---
name: styleknobs-auditor
description: >-
  Audits QANTE section schemas against their evidence screenshots (375/768/1440)
  and proposes styleKnobs per the frozen standard in qante/styleknobs-standard.md.
  Use when the user asks to review, propose, or normalize styleKnobs for one
  schema, a category, or the whole inventory. Proposes to a review file first;
  never edits sections/*.json without explicit approval.
---

# styleKnobs Auditor

Görev: bir şemanın **evidence screenshot'larına bakıp** o component'in hangi styleKnobs'lara sahip olması gerektiğini çıkarmak; mevcut knob'ları standarda göre denetlemek.

## Sözleşme (önce oku)

1. `qante/styleknobs-standard.md` — dondurulmuş sözlük, karar testi, bütçe. **styleKnobs için tek doğruluk kaynağı; bu dosyayla çelişen öneri yazma.**
1b. `qante/schema-standard.md` — şemanın diğer alanları (slots/dataBindings/actions). Bir şeyi knob'dan atıyorsan (`MOVE → slot`) hedef katmanın kuralı orada. Doğrulama: `node scripts/validate-schemas.mjs {schemaId}`.
2. Şema: `qante/sections/{scope}/{schemaId}.json`
3. Gözlemler: `qante/observations/*/*/*/{schemaId}*.json` (tüm preset'ler — preset kanıtı en güçlü sinyal)
4. Evidence: gözlemlerdeki `evidence[]` yolları → `qante/evidence/.../{slug}.{375|768|1440}.png`
5. **Şekil atlası (üçüncü kanıt):** `qante/reviews/styleknobs/wine-store-shape-atlas.md` + standart §3.6. Hyper screenshot tek konfig gösterir; Wine Store’da aynı aile için merchant ENUM’u varsa onu uydurma sayma — `Açık soru: bizim editörde olsun mu?` + atlas satırını Kanıt’a yaz. Kör `preset1–5` önerme; isimli `layout` / `kartStili` kullan.

## Akış (şema başına)

1. **Şemayı oku** — mevcut `styleKnobs`, `slots`, `scope`, `amac`.
2. **Tüm gözlemleri bul** — aynı schemaId'nin kaç preset'te görüldüğünü çıkar.
3. **Screenshot'ları incele** — Read tool PNG okuyabilir:
   - Önce 1440 (yapı en net), sonra 375 (responsive davranış).
   - Birden fazla preset varsa **aynı viewport'u preset'ler arası karşılaştır** — farklılaşan boyut = knob adayı.
4. **Görsel envanter çıkar** — screenshot'ta say/işaretle:
   - Kolon/öğe sayısı (375 vs 1440 farkı → `kolon` aralığı tahmini)
   - Medya-metin dizilimi (yan yana / üst üste / overlay → `gorselKonumu`, `metinKonumu`, `layout`)
   - Slider işaretleri (ok, dot, kesik kart → `layout: grid|slider`, `okGoster`, `noktaGoster`)
   - Hizalama (başlık/CTA sola mı ortaya mı → `hizalama`)
   - Yükseklik/yoğunluk izlenimi (`yukseklik`, `yogunluk`) — yalnız preset'ler arası fark varsa
   - Toggle edilebilir görünen öğeler (rozet, timer, quick-add → `*Goster`)
   - Hareket ipuçları (marquee kayması, countdown → `autoplay`, `hiz`)
5. **Karar testini uygula** (standart §2): içerik→slot, renk/font→token, motion→styleProfile, iskelet/davranış→knob.
5b. **Toplama taramasını uygula (standart §2.1)** — karar testi eleyicidir, tek başına 2 knob'la biter. Beş ekseni sırayla geç: **iskelet · konum · ölçü · davranış · gösterge**. Doğal denge 1+1+1–2+1 ≈ 4–6 knob. Beşini geçtin ve hâlâ 4'ün altındaysan **uydurma** — `_knobNote` ile gerekçe yaz.
5c. **`layout` tek anahtar kuralı (standart §3.1)** — bir şemada `layout` yalnız bir kez. İkinci bir düzen ekseni varsa `{ne}Gosterim` adlandır (`ozellikGosterim`, `miktarGosterim`…). İki `layout` önerirsen JSON birini sessizce yutar.
6. **Atlas ile çaprazla** — screenshot’ta görünmeyen ama §3.6’da o aile için kanıtlı olan eksen: artık kör atma; ADD öner + `Açık soru: bizim editörde olsun mu?` notu. Bütçe gevşedi, aşırı minimalizm hata — bölümün gerçek şekillerini kapsa.
7. **Responsive kararı (standart §2.5):** cihaza göre değişen şekil → otomatikse `responsive` metni; merchant cihaz başına seçiyorsa cihaz haritası knob `{ "masaustu": "...", "mobil": "..." }`. Aynı ekseni hem harita hem `responsive` yazma.
8. **Bütçeyi uygula:** instance **4–8 tipik**, global overlay 0–4. 2'de kalıyorsa gerekçe; 8'i aşıyorsa `_knobNote`. Atlas adayları bütçeye dahil (artık ADD).
9. **Öneriyi yaz** — şemayı DÜZENLEME. Çıktı: `qante/reviews/styleknobs/{schemaId}.md`:

```markdown
# {schemaId} — styleKnobs önerisi

*Evidence:* {bakılan png sayısı} PNG · {preset listesi}

## Mevcut
{şemadaki styleKnobs bloğu}

## Öneri
| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| kolon | [2, 3, 4] | KEEP | 1440'ta 4, 375'te 2 kolon |
| layout | grid\|slider | ADD | nexvo'da ok/dot var, pillar'da grid |
| imagePozisyon | — | RENAME → gorselKonumu | standart §3.2 |
| griTon | — | DROP → token | görsel işlem, yapısal değil |

## Uygulanacak JSON (onay sonrası)
{önerilen styleKnobs bloğu}

## Açık soru
{emin olunamayan noktalar — demoda editör ayarı doğrulanamadı vb.}
{Wine Store §3.6’da bu ailede olup screenshot’ta tek konfig görünen eksenler — merchant seçsin mi?}
```

10. **Toplu koşuda** ayrıca `qante/reviews/styleknobs/_summary.md`'ye tek satır ekle: `{schemaId} · KEEP n / ADD n / RENAME n / DROP n`.

## Sert kurallar

- **Screenshot'ta görmediğin şeyi uydurma.** Demo tek konfigürasyon gösterir; enum'un öbür değerini ancak (a) preset farkı, (b) responsive fark, (c) Wine Store atlası / standart §3.6 + `Açık soru`, (d) yaygın pattern + `Açık soru` ile önerebilirsin. Kaynağını `Kanıt` kolonuna yaz. Atlas = ADD hakkı vermez, soru hakkı verir — ta ki screenshot/preset de destekleyene kadar.
- **Aksiyon kelimeleri sabit:** KEEP · ADD · RENAME · DROP · MOVE (→ token / styleProfile / slot).
- Adlar ve değer biçimleri yalnız standart §3'ten; sözlükte olmayan ad gerekiyorsa öneriyi `Açık soru`ya yaz, kendi başına yeni ad türetme.
- `{}` yalnız gerçekten şekilsiz overlay/global için meşru. Instance bölümde boş bırakma refleksi yanlış — bölümün gerçek şekillerini kapsa (tipik 4–8).
- `sections/*.json` düzenlemesi yalnız kullanıcı onayı sonrası, ayrı bir adım olarak.

## Çağrılma biçimleri

- Tek şema: "hero-slideshow'un knob'larını denetle"
- Kategori: "tüm collection-nav şemalarını geç"
- Tam envanter: `qante/sections/**/*.json` (template hariç) sırayla; uzun koşuda 5'erli batch'le ve `_summary.md`'yi her batch'te güncelle
