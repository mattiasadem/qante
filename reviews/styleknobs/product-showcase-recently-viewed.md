# product-showcase-recently-viewed — styleKnobs önerisi

*Evidence:* 1 PNG · hyper/default cart 1440 (tek ürün)

## Mevcut

```json
"styleKnobs": {
  "rozetGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `rozetGoster` | boolean | KEEP | Arc Chair “Sale” + Selling Fast. |

`layout` / `kolon` / `okGoster` **eklenmedi:** karede tek kart. Slider/ızgara uydurma olur. İlk QC `slider|grid` demişti; hâlâ tek ürün.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "rozetGoster": true
}
```

Bütçe: 1. `_knobNote` zorunlu.

## Açık soru

- Dolu recently-viewed (4–8 ürün) yakalanırsa `kolon` + `layout` tekrar.
