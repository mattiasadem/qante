# editorial-image-with-text-overlay — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/default about 1440 · prestige/allure home 1440 · impact/impact home 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "left|center|right",
  "dikeyHizalama": "top|center",
  "metinKonumu": "overlay|below"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `left\|center\|right` | KEEP | Hyper / Allure metin sol. |
| `dikeyHizalama` | `top\|center\|bottom` | KEEP (değer +bottom) | Hyper sol-üst. Allure dikey orta. |
| `metinKonumu` | `overlay\|below` | KEEP | Hyper / Allure overlay. Impact home karesinde metin yok (boş overlay veya below). |
| `yukseklik` | `compact\|regular\|tall` | ADD | Üçü de tam kat bant. compact ikinci değer. |

## Uygulanacak JSON

```json
"styleKnobs": {
  "hizalama": "left|center|right",
  "dikeyHizalama": "top|center|bottom",
  "metinKonumu": "overlay|below",
  "yukseklik": "compact|regular|tall"
}
```

Bütçe: 4.
