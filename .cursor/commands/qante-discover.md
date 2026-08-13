# /qante-discover

QANTE section envanteri — keşif, şema onarımı, todo'dan devam, denetim.

**Önce `.agents/skills/qante-discover/SKILL.md` dosyasını oku ve harfiyen uygula.**
Sözleşmeler: `qante/schema-standard.md` + `qante/styleknobs-standard.md`. Bunlarla çelişen hiçbir şey yazma.

## Argüman → mod

Kullanıcının bu komuttan sonra yazdığı şeye göre modu seç:

| Argüman | Mod | İş |
|---|---|---|
| bir URL (`https://…`) | **A · Keşif** | Sayfayı gez, section sınırlarını çiz, şema + observation + 3vp evidence üret |
| bir schemaId (`hero-slideshow`) | **B · Onarım** | O şemayı validator'a sok, standarda göre tamamla |
| boş · "devam" · "todo" | **C · Devam** | `qante/todo/` içindeki ilk açık maddeyi al, kaldığın yerden sür |
| "denetim" · "borç" · "validate" | **D · Denetim** | Tüm envanteri doğrula, borç raporu çıkar |

Mod belirsizse **sor**, tahmin etme.

## Her koşuda değişmeyen

1. Taksonomiyi oku (`qante/taxonomy/` en yüksek sürüm) — kategori uydurma, uymuyorsa `candidates/`.
2. Aynı section tipi zaten varsa **şemaya dokunma** — yeni observation aç, farkı `delta`'ya yaz.
3. Slot mu dataBinding mi: *merchant mı yazıyor, üründen mi geliyor?*
4. styleKnobs hedefi **4–8**; token (renk/font/spacing) hiçbir alana girmez.
5. `actions` boş `[]` bırakma → `["yok"]`.
6. Evidence manuel değil:
   ```bash
   cd qante/scripts && node capture-observation.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
   ```
7. **Bitirmeden** doğrula:
   ```bash
   cd qante && node scripts/validate-schemas.mjs
   ```
8. Kanıtsız alan yazma → `Açık soru` olarak raporla.
9. 3'ten fazla dosya değiştirecekse önce planı sun, onay al.

## Bitişte

SKILL.md'deki özet bloğunu doldur: mod, yeni/güncellenen şema, observation + evidence sayısı, validator sonucu, açık sorular, sıradaki adım.
