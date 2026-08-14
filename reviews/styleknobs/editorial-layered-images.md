# editorial-layered-images — styleKnobs önerisi

*Evidence:* 2 PNG · prestige/allure home 1440 · hyper/trove 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "left|center",
  "layout": "overlap|stack"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `left\|center` | KEEP | Allure metin sol. Trove metin **orta**. |
| `layout` | `overlap\|stack` | KEEP | İkisi de örtüşen kartlar = overlap. 375 stack = `responsive`. |
| `gorselKonumu` | `left\|right` | ADD | Allure görseller **sağ**. Trove iki yanda (orta metin). |

## Uygulanacak JSON

```json
"styleKnobs": {
  "layout": "overlap|stack",
  "gorselKonumu": "left|right",
  "hizalama": "left|center"
}
```

Bütçe: 3.
