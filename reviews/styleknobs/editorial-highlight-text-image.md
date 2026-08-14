# editorial-highlight-text-image — styleKnobs önerisi

*Evidence:* 1 PNG · hyper/nexvo 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `left\|center` | KEEP | Cümle ortalı; hap görseller satır içi. |

`gorselKonumu` yok — görsel metnin yanında/arkasında değil, satırın içinde. Uydurulmadı.

## Uygulanacak JSON

```json
"styleKnobs": {
  "hizalama": "left|center"
}
```

Bütçe: 1. `_knobNote` duruyor.
