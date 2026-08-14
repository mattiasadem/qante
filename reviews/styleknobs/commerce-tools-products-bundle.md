# commerce-tools-products-bundle — styleKnobs önerisi

*Evidence:* 6 PNG · ceramide initial 1440/375 · pillar 1440 · trove 1440 · nexvo 1440  
Preset farkı bu şemada asıl sinyal.

## Mevcut

```json
"styleKnobs": {
  "layout": "grid|slider|split",
  "kolon": [2, 3, 4],
  "hotspotGoster": true,
  "kategoriTabGoster": true,
  "okGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `grid\|slider\|split` | KEEP | Ceramide/Pillar: sol kartlar + sağ görsel = **split**. Trove: 4×2 ızgara + sağ “Your Bundle” = **grid**. Nexvo: yan yana paket kartları + üst ok = **slider**. |
| `kolon` | `[2, 3, 4]` | KEEP | Trove 1440: 4 kolon. Ceramide 1440: 3 kart. 375 Ceramide: 2 kart peek. |
| `hotspotGoster` | boolean | KEEP | Pillar sağ fotoda iki daire hotspot. Ceramide/Trove/Nexvo’da yok. |
| `kategoriTabGoster` | boolean | KEEP | Trove: Vegetables / Fruits / Bread & Cake. Diğerlerinde yok. |
| `okGoster` | boolean | KEEP | Nexvo sağ üst ok. Ceramide/Pillar’da yok. |
| `varyantGosterim` | `swatch\|dropdown` | ADD | Dört preset’te kartta **select/dropdown** (512ml, Beige/XS, Black/128GB). Swatch bu şemada yok. |

Mevcut beş knob uydurma değil — üç Hyper preset üç iskelet.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "grid|slider|split",
  "kolon": [2, 3, 4],
  "varyantGosterim": "swatch|dropdown",
  "hotspotGoster": true,
  "kategoriTabGoster": true,
  "okGoster": true
}
```

Bütçe: 6.

## Açık soru

- `varyantGosterim: swatch` karede yok; dropdown kanıtlı. İkinci değer sözlük + “editörde olsun mu?”
- Trove “Build Your Own Bundle” aynı şema mı kalacak, yoksa ayrı builder mı? Şimdilik tek şema, `kategoriTabGoster` o farkı taşıyor.
- `secimZorunlu` (3/4/5 ürün eşiği) içerik/kural — knob değil, slot veya commerce.
