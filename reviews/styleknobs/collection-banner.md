# collection-banner — styleKnobs önerisi

*Evidence:* 4 PNG · hyper/default 1440 · prestige/allure 1440 · impact/impact 1440 · impulse/dune 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `left\|center` | KEEP | Hyper / Impact sol. Allure / Dune orta. |
| `metinKonumu` | `overlay\|below` | ADD | Allure / Impact görsel üstü. Hyper / Dune yalnız metin. |
| `dikeyHizalama` | `top\|center` | ADD | Allure / Impact overlay dikey orta. |
| `yukseklik` | `compact\|regular\|tall` | ADD | Hyper / Dune kısa başlık. Allure / Impact tam bant. |

Impact sağ-alt Featured product kartı — slot/tema, knob uydurulmadı. Görsel zaten `zorunlu: false`.

## Uygulanacak JSON

```json
"styleKnobs": {
  "hizalama": "left|center",
  "dikeyHizalama": "top|center",
  "metinKonumu": "overlay|below",
  "yukseklik": "compact|regular|tall"
}
```

Bütçe: 4. `_knobNote` güncellenir.
