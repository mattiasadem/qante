# promo-grid-banner — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/pillar 1440 · hyper/nexvo 1440 · impulse/fashion 1440

## Mevcut

```json
"styleKnobs": {
  "kolon": [2, 3],
  "gorselKonumu": "right|background",
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `equal\|mosaic` | ADD | Fashion 50/50 eşit. Pillar 1+1+2 / Nexvo 1+2 bento. |
| `kolon` | `[2, 3]` | KEEP | Fashion / Nexvo 2. Pillar üç görsel kolon. |
| `gorselKonumu` | `right\|background` | KEEP | Nexvo ürün sağda. Fashion / Pillar overlay. |
| `hizalama` | `left\|center` | KEEP | Pillar / Nexvo sol. Fashion orta. |

## Uygulanacak JSON

```json
"styleKnobs": {
  "layout": "equal|mosaic",
  "kolon": [2, 3],
  "gorselKonumu": "right|background",
  "hizalama": "left|center"
}
```

Bütçe: 4.
