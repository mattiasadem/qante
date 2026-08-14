# media-video-hero — styleKnobs önerisi

*Evidence:* 2 PNG · impulse/fashion home 1440 · prestige/allure home 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "left|center",
  "dikeyHizalama": "top|center",
  "metinKonumu": "overlay|below"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `left\|center` | KEEP | İkisi de metin orta. |
| `dikeyHizalama` | `top\|center` | KEEP | Overlay dikey orta. |
| `metinKonumu` | `overlay\|below` | KEEP | İkisi overlay. `below` karede yok. |
| `autoplay` | boolean | ADD | Impulse: pause (oynuyor). Allure: play (poster). |
| `yukseklik` | `compact\|regular\|tall` | ADD | İkisi tam kat. |

## Uygulanacak JSON

```json
"styleKnobs": {
  "hizalama": "left|center",
  "dikeyHizalama": "top|center",
  "metinKonumu": "overlay|below",
  "yukseklik": "compact|regular|tall",
  "autoplay": true
}
```

Bütçe: 5.
