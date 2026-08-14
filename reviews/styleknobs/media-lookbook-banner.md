# media-lookbook-banner — styleKnobs önerisi

*Evidence:* 2 PNG · impulse/fashion home 1440 · hyper/default PDP 1440

## Mevcut

```json
"styleKnobs": {
  "hotspotGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hotspotGoster` | boolean | KEEP | İkisi `+` pin. |
| `hizalama` | `left\|center` | KEEP | Fashion metin sol-alt. Hyper başlık üstte orta. |
| `metinKonumu` | `overlay\|below` | ADD | Fashion overlay. Hyper başlık görselin üstünde. |
| `yukseklik` | `compact\|regular\|tall` | ADD | Fashion tam kat. Hyper orta bant. |

`dikeyHizalama` yalnız Fashion overlay’de bottom — tek kare, eklenmedi.

## Uygulanacak JSON

```json
"styleKnobs": {
  "hotspotGoster": true,
  "hizalama": "left|center",
  "metinKonumu": "overlay|below",
  "yukseklik": "compact|regular|tall"
}
```

Bütçe: 4.
