# promo-scrolling-marquee — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/default home 1440 · prestige/allure 1440 · impact/impact 1440 (kırpık)

## Mevcut

```json
"styleKnobs": {
  "gorselGoster": true,
  "loop": true,
  "yon": "left|right",
  "autoplay": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselGoster` | boolean | KEEP | Hyper: metin yanında sandalye ikonu. Allure: çanta thumb. |
| `loop` | boolean | KEEP | Hyper aynı üç öğe tekrar ediyor. |
| `yon` | `left\|right` | KEEP | Statik karede yön okunmaz; marquee davranışı. |
| `autoplay` | boolean | KEEP | Kayan şerit. |

`hiz` karede ölçülmedi — eklenmedi. Impact karesi başlık kırpığı; kanıt yazılmadı.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "gorselGoster": true,
  "loop": true,
  "yon": "left|right",
  "autoplay": true
}
```

Bütçe: 4. Değişmedi.

## Açık soru

- `hiz: slow\|normal\|fast` atlas’ta var; karede yok.
