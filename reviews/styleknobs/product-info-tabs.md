# product-info-tabs — styleKnobs önerisi

*Evidence:* 5 PNG · hyper/default initial+changed 1440 · hyper 375 · impact/balance 1440

## Mevcut

```json
"styleKnobs": {
  "tabPozisyon": "top|side",
  "hizalama": "left|center",
  "gorselKonumu": "left|right"
}
```

`_knobNote` accordion yok diyordu — Balance karesi onu bozuyor.

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `tabPozisyon` | `top\|side` | KEEP | Hyper üst yatay sekme (1440 ve 375). `side` karede yok. |
| `hizalama` | `left\|center` | KEEP | Hyper / Balance metin sol. |
| `gorselKonumu` | `left\|right` | KEEP | Hyper 1440: çizim / marka görseli **sol**, metin sağ. 375 görsel üstte = `responsive`. |
| `layout` | `tabs\|accordion` | ADD | Hyper: Specifications / About Brand / Shipping = **tabs** (interact tab değişti). Balance: Details / Sizing / Care / Sustainability chevron kutu = **accordion**. |

Terrain “tabs” karesi hotspot/lookbook; bu şemaya kanıt yazılmadı.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "tabs|accordion",
  "tabPozisyon": "top|side",
  "hizalama": "left|center",
  "gorselKonumu": "left|right"
}
```

Bütçe: 4.

## Açık soru

- Atlas `inline` ve `icerikYeri` — karede yok.
- `tabPozisyon: side` yalnız sözlük.
