# comparison-quick-table — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/nexvo home 1440 · impact/impact home 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "stacked|split",
  "kolon": [3, 5],
  "hizalama": "left|center",
  "ikonGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `stacked\|split` | KEEP | İkisi 1440 intro sol / tablo sağ. 375 stacked = `responsive`. |
| `kolon` | `[2, 3, 5]` | KEEP (değer +2) | Impact **2** ürün. Nexvo **3**. `5` karede yok. |
| `hizalama` | `left\|center` | KEEP | Intro sol. |
| `ikonGoster` | boolean | KEEP | Nexvo satır ikonu. Impact satırda yok. |

## Uygulanacak JSON

```json
"styleKnobs": {
  "layout": "stacked|split",
  "kolon": [2, 3, 5],
  "hizalama": "left|center",
  "ikonGoster": true
}
```

Bütçe: 4.
