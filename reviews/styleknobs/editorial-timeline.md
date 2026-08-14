# editorial-timeline — styleKnobs önerisi

*Evidence:* 1 PNG · impact/impact home 1440 (interact 2014→2017)

## Mevcut

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "hizalama": "left|center",
  "layout": "split|stacked"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselKonumu` | `left\|right` | KEEP | 1440 görsel sol. |
| `hizalama` | `left\|center` | KEEP | Metin sol. |
| `layout` | `split\|stacked` | KEEP | 1440 split. 375 istif = `responsive` veya stacked. |
| `okGoster` | boolean | ADD | Yıl şeridi sağında `< >`. Interact slayt değiştirdi. |

Yıllar kartın altında; `tabPozisyon` yalnız top\|side — uydurulmadı.

## Uygulanacak JSON

```json
"styleKnobs": {
  "layout": "split|stacked",
  "gorselKonumu": "left|right",
  "hizalama": "left|center",
  "okGoster": true
}
```

Bütçe: 4.
