# promo-banner-tabs — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/nexvo home 1440 + 375 (interact Phone Cases)

## Mevcut

```json
"styleKnobs": {
  "tabPozisyon": "top|side",
  "ikonGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `tabPozisyon` | `top\|side` | KEEP | 1440 sol dikey sekmeler. 375 üst chip = `responsive`. |
| `ikonGoster` | boolean | KEEP | Sekmede kulaklık / dalga ikonu. |
| `hizalama` | `left\|center` | KEEP | Etiket + kart metni sol. |

Yüzen beyaz kart tek preset — `kartStili` uydurulmadı. `sekmeKonumu` borcu zaten `tabPozisyon`.

## Uygulanacak JSON

```json
"styleKnobs": {
  "tabPozisyon": "top|side",
  "ikonGoster": true,
  "hizalama": "left|center"
}
```

Bütçe: 3. `_knobNote` duruyor.
