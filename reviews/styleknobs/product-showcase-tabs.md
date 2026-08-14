# product-showcase-tabs — styleKnobs önerisi

*Evidence:* 3 PNG · prestige/allure home 1440 · hyper/pillar home 1440 · prestige/vogue home 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "split|stacked",
  "tabPozisyon": "side|top",
  "kategoriTabGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `split\|stacked` | KEEP | Pillar sol metin+sekme / sağ 2 kart. Allure / Vogue üst sekme + ızgara. |
| `tabPozisyon` | `side\|top` | KEEP | Pillar yan. Allure WOMEN/MEN üstte. |
| `kategoriTabGoster` | boolean | KEEP | Sekmeler içerik. |
| `kolon` | `[2, 4]` | ADD | Pillar 2 kart. Allure / Vogue 4 ürün. |

375 stacked+üst sekme = `responsive` (şema notu).

## Uygulanacak JSON

```json
"styleKnobs": {
  "layout": "split|stacked",
  "tabPozisyon": "side|top",
  "kategoriTabGoster": true,
  "kolon": [2, 4]
}
```

Bütçe: 4.
