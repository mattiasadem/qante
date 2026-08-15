# ADAY: Cometeer how-to-melt (Iced / Hot)

**Kaynak:** home `#shopify-section-replo_how_to_melt_section_3a6t3J` · how-it-works `replo_how_to_melt_section_QNyQVP`

## Ne görüldü

- Iced / Hot toggle
- Numbered steps (thaw → peel lid → pour 6–8 oz)
- Replo section adı; **iframe yok** (native DOM)
- Home ve How It Works'te tekrar

## Neden ayrı şema değil (şimdilik)

Mevcut `editorial-custom-content` serbest blok + görsel/metin taşıyor. Toggle içerik değişimi `changed` interact; yeni `tip` / kategori yok.

Ayrı varyant ancak Iced/Hot'un merchant editöründe birinci sınıf iskelet olduğu kanıtlanırsa (`layout: iced-hot-toggle` sözlük dışı — uydurulmadı).

## Observation

`observations/cometeer/default/home/editorial-custom-content.json`  
`observations/cometeer/default/how-it-works/editorial-custom-content.json`
