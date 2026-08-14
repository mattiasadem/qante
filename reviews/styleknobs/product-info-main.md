# product-info-main — styleKnobs önerisi

*Evidence:* 8 PNG · hyper/default 1440/375 · prestige/allure 1440/375 · impulse/fashion 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "varyantGosterim": "swatch|dropdown",
  "miktarGosterim": "stepper|dropdown",
  "rozetGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselKonumu` | `left\|right` | KEEP | Hyper / Impulse / Impact 1440: galeri **sol**, buy box sağ. Ters karede yok. |
| `varyantGosterim` | `swatch\|dropdown` | KEEP | Hyper renk kare + malzeme hap. Allure daire swatch. Impulse beden kutusu. Dropdown karede yok. |
| `miktarGosterim` | `stepper\|dropdown` | KEEP | Hyper / Impact `− 1 +`. Allure 1440’ta miktar yok. Dropdown karede yok. |
| `rozetGoster` | boolean | KEEP | Hyper “Save 4%”. Allure / Impulse / Impact’te rozet yok. |
| `layout` | `default\|stacked\|wide-gallery` | ADD | Hyper 1440: **2×2 ızgara** = wide-gallery. Impulse / Impact: ana görsel + sol thumb = default. Allure 1440: dikey istif + sol thumb = stacked. |
| `swatchSekli` | `circle\|square` | ADD | Hyper 1440 kare. Impact / Allure 1440 daire. |

375 thumbs alta / nokta slider = `responsive`, knob değil. `sticky` karede okunmuyor — eklenmedi.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "default|stacked|wide-gallery",
  "gorselKonumu": "left|right",
  "varyantGosterim": "swatch|dropdown",
  "miktarGosterim": "stepper|dropdown",
  "swatchSekli": "circle|square",
  "rozetGoster": true
}
```

Bütçe: 6.

## Açık soru

- Atlas `layout` değerinde `compact` ve `sticky` (ATC/galeri) var; karede yok. Editörde olsun mu?
- `varyantGosterim: dropdown` / `miktarGosterim: dropdown` yalnız sözlük.
- Thumb `top|bottom` `gorselKonumu` atlas’ta var; 375 alta düşüş otomatik.
