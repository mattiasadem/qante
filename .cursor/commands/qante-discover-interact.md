# /qante-discover-interact

QANTE **etkileşimli** component keşfi — bir component'in davranışsal hâllerini (hover, yazılan input, açılan drawer/dialog, dolu sepet, değişen varyant) aşama aşama kanıtla.

**Önce `.agents/skills/qante-discover-interact/SKILL.md` dosyasını oku ve harfiyen uygula.**
Sözleşmeler: `qante/schema-standard.md` + `qante/styleknobs-standard.md`. Bunlarla çelişen hiçbir şey yazma.
`qante-discover` agent dosyalarına **dokunma** — onları yalnız okursun.

## Ne zaman bu, ne zaman `/qante-discover`

| | `/qante-discover` | `/qante-discover-interact` |
|---|---|---|
| İş | Sınır çizme + ilk envanter | Bilinen component'in state derinliği |
| Çıktı | Şema + observation + 3vp `initial` | State ekli evidence + interaction alanları |
| Tipik tetik | "bu demoyu envanterle" | "cart drawer boş çekilmiş, dolu çek" |

## Argüman → kapsam

| Argüman | İş |
|---|---|
| bir schemaId (`global-cart-drawer`) | O component için state matrisini çıkar, eksik state'leri yakala |
| URL + component adı | O sayfada component'i bul, state matrisini çıkar |
| tek state ("hover'ı al", "dolu çek") | Yalnız istenen state |
| boş | Boş/yanıltıcı kanıtı olan bileşenleri listele, **hangisi** diye sor |

Kapsam belirsizse **sor** — 15 PNG'yi yanlış component için üretme.

## State taksonomisi (dondurulmuş 6 ad)

`initial` · `hover` · `input` · `open` · `filled` · `changed`
Anlamsız state'i zorlama; **denenip alınamayanı** `missingStates`'e sebebiyle yaz.

## Her koşuda değişmeyen

1. **Kanıtsız schema yazma.** Boş state'i component'in tek hâli sanma — doldurulabiliyorsa doldur.
2. **Yıkıcı etkileşim yok:** ödeme başlatma, gerçek form gönderimi, hesap açma, sipariş verme. Sepete ekleme serbest.
3. Evidence adı: `evidence/{tema}/{preset}/{sayfa}/{slug}.{state}.{etiket}.{375|768|1440}.png`
   Her `capture:true` adıma okunur `etiket` ver (`cart-bos`, `sepete-eklendi`, `adet-artti`) — klasöre bakan ne olduğunu okusun.
   State eki olmayan eski dosyalar `initial` sayılır — onları yeniden adlandırma.
4. Observation'a `interactionStates` · `interactionSteps` · `stateFindings` · `missingStates` · `interactionNote` ekle (`observations/_template-interaction.json`).
5. Şemaya etkisi karar tablosuyla: yeni içerik alanı → `slots` · yeni olay → `actions` · tetiklenen overlay → `bagimliliklar` · iskelet seçimi → `styleKnobs`. **Yalnız hover görselliği (renk/gölge/zoom) şemaya girmez** → token notu.
6. Boş↔dolu aynı component → **yeni şema açma**, farkı `stateFindings`'e yaz.
7. Evidence elle değil script'ten (`--state a,b` ile daralt, `--headed` ile izle):
   ```bash
   cd qante/scripts && node capture-interaction.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
   ```
   Adımları yazmadan önce selector'ları geçici bir yoklama script'iyle **doğrula**, sonra yoklamayı sil. Elle screenshot evidence olmaz.
8. **Bitirmeden** doğrula:
   ```bash
   cd qante && node scripts/validate-schemas.mjs
   ```
9. Kanıtsız alan yazma → `Açık soru` olarak raporla.
10. 3'ten fazla dosya değiştirecekse önce planı sun, onay al.

## Bitişte

SKILL.md'deki özet bloğunu doldur: mod (`interact`), tema/preset/sayfa, component, yakalanan state'ler, alınamayanlar, yeni evidence sayısı, şema değişti mi, validator sonucu, açık sorular, sıradaki adım.
