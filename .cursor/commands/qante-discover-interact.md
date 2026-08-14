# /qante-discover-interact

Bir component'in kapalı karesinin sakladığı hâlleri kanıtla (hover, arama, açık menü, dolu sepet, değişen varyant).

**Önce** `.agents/skills/qante-discover-interact/SKILL.md` — oradaki döngüyü uygula.
Sözleşmeler: `qante/schema-standard.md` + `qante/styleknobs-standard.md`.
`qante-discover` dosyalarına **dokunma**.

İlk envanter yoksa bu komut değil, `/qante-discover`. Component + URL belirsizse sor.

## Döngü

1. **Ne denecek** — şema + observation. Unique selector. Anlamsız state’i zorlama.
2. **Tara** — `scan-affordances.mjs`. Taslağı kör koşma. `uyari` / `matches` varsa dur (unique id, `prepareClick`).
3. **Şüphe varsa yokla** — `_probe.mjs` (tıklanınca sayfa değişiyor mu, kutu büyüyor mu). Çıktıyı dosyaya yaz, oku, sil. Başka temanın selector’ını kopyalama.
4. **Yaz, çek** — `interactionSteps` + `etiket` + beklenen değişim. Mega 1440 / hamburger 375+768 ayrı. `capture-interaction.mjs`. `fill` = `katalogSorgu`.
5. **Bak** — PNG’yi bir önceki kareyle karşılaştır. Aynıysa veya yanlış sayfadaysa bir kez `--state` ile düzelt. İkincide olmazsa `missingStates`. Script’in yeşili yetmez.
6. **Yaz** — `stateFindings` gördüğün şey. Şema yalnız yeni merchant alanı / olay / overlay. Validator. Kullanıcıya düz cümle — tablo yok.

```bash
cd qante/scripts
node scan-affordances.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
node capture-interaction.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
node capture-interaction.mjs <obs.json> --state changed
cd ../ && node scripts/validate-schemas.mjs {schemaId}
```

State adları: `initial` · `hover` · `input` · `open` · `filled` · `changed`.
Evidence: `{slug}.{state}.{etiket}.{375|768|1440}.png`. Eski `{slug}.1440.png` = initial.

## Bozulmaz

Kanıtsız şema yok. Ödeme / gerçek form / hesap yok; sepete ekleme serbest. Boş↔dolu aynı component. Hover yalnız renk/gölge ise token. Elle screenshot yok.
