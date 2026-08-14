# page-content-main — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/default contact 1440 · prestige/vogue about 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `left\|center` | KEEP | Hyper Contact sol. Vogue ABOUT orta. |
| `genislik` | `narrow\|wide` | ADD | Vogue gövde dar sütun. Hyper daha geniş sol blok. |

Vogue foto richtext/içerik. İkinci iskelet yok.

## Uygulanacak JSON

```json
"styleKnobs": {
  "hizalama": "left|center",
  "genislik": "narrow|wide"
}
```

Bütçe: 2. `_knobNote` güncellenir.
