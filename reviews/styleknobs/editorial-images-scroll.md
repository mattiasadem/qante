# editorial-images-scroll — styleKnobs önerisi

*Evidence:* 2 PNG · prestige/allure home + about 1440

## Mevcut

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "hizalama": "left|center",
  "noktaGoster": true,
  "layout": "split|stacked"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselKonumu` | `left\|right` | KEEP | About #1 görsel sol. Home #1 görsel sol / metin sağ. |
| `hizalama` | `left\|center` | KEEP | Home metin sağa yaslı. About #1/#2 orta. |
| `noktaGoster` | boolean | KEEP | `responsive` 375 nokta. 1440’ta yok. |
| `layout` | `split\|stacked` | KEEP | #1 split. #2 (PRODUCTION) yalnız metin / stacked. |

## Uygulanacak JSON

Mevcut blok. Bütçe: 4. Değişmedi.
