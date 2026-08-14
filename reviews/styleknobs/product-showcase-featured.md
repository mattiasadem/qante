# product-showcase-featured — styleKnobs önerisi

*Evidence:* 5 PNG · allure / vogue / couture / impact home 1440 · dune 1440 (buy box yok)

## Mevcut

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "varyantGosterim": "swatch|dropdown",
  "miktarGosterim": "stepper|dropdown",
  "noktaGoster": true,
  "rozetGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselKonumu` | `left\|right` | KEEP | Allure / Vogue / Couture / Impact görsel sol. `right` karede yok. |
| `varyantGosterim` | `swatch\|dropdown` | KEEP | Hepsi swatch. |
| `miktarGosterim` | `stepper\|dropdown` | KEEP | Allure / Vogue / Couture stepper. |
| `noktaGoster` | boolean | KEEP | Allure / Vogue nokta. Couture thumb altta. Impact dikey thumb. |
| `rozetGoster` | boolean | KEEP | Allure NEW. Dune New+$159. |
| `swatchSekli` | `circle\|square` | ADD | Impact daire. Allure / Vogue / Couture kare. |

Dune metin+CTA (buy box yok) — slot boş, ikinci `layout` uydurulmadı.

## Uygulanacak JSON

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "varyantGosterim": "swatch|dropdown",
  "miktarGosterim": "stepper|dropdown",
  "swatchSekli": "circle|square",
  "noktaGoster": true,
  "rozetGoster": true
}
```

Bütçe: 6.
