# product-showcase-favorites — styleKnobs önerisi

*Evidence:* 6 PNG · hyper/default initial+changed · 1440 ve 375  
*Not:* Ağustos QC `slider\|grid` + `kolon` dedi; şema o zamandan beri split karta çekilmiş. Interact 1/3→2/3 bunu doğruladı.

## Mevcut

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "okGoster": true,
  "swatchSekli": "circle|square",
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselKonumu` | `left\|right` | KEEP | 1440: sol lifestyle+kart, sağ alıntı. `right` karede yok — atlas split + açık soru. |
| `okGoster` | boolean | KEEP | 1440 ve 375 `< 1/3 >` / `< 2/3 >`. Interact Highline’a geçti. |
| `swatchSekli` | `circle\|square` | KEEP | Turn Chair kırmızı/sarı **kare** swatch. Daire görülmedi. |
| `hizalama` | `left\|center` | KEEP | Alıntı ve “Our Favorite Products” solda. |

`layout: split|stacked` **eklenmedi:** 375 istif `responsive` metninde (“kart üstte, alıntı altta”). Otomatik kırılma, merchant seçimi değil (§2.5).

`kolon` / `rozetGoster` yok — grid değil; rozet karede yok (375’te çanta ikonu QV/ATC, knob değil).

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "okGoster": true,
  "swatchSekli": "circle|square",
  "hizalama": "left|center"
}
```

Bütçe: 4. `_knobNote` gerekmez — istif responsive.

## Açık soru

- Kartı sağa almak (`gorselKonumu: right`) bizim editörde olsun mu?
- `swatchSekli: circle` yalnız sözlük; karede kare var.
