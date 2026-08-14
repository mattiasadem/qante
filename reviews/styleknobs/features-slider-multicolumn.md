# features-slider-multicolumn — styleKnobs önerisi

*Evidence:* 6 PNG · hyper/default initial+changed · 1440 ve 375  
Tek preset.

## Mevcut

```json
"styleKnobs": {
  "okGoster": true,
  "noktaGoster": true,
  "hizalama": "left|center"
}
```

`_knobNote`: “Sol slider + sağ 2×2 — grid\|slider seçimi yok.”

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `okGoster` | boolean | KEEP | Sol banner altı `< >`. Interact slayt değiştirdi. |
| `noktaGoster` | boolean | KEEP | 1440 üç gösterge; 375 hap+nokta. |
| `hizalama` | `left\|center` | KEEP | Banner metni solda/ortada overlay. |
| `autoplay` | boolean | ADD | Interact: initial bazen “Hot Deals / Bow Chairs”, next “Dining & Kitchen” — autoplay yarışı. |
| `gorselKonumu` | `left\|right` | ADD | Slider her karede **sol**. Sağ 2×2 kart. Ters yerleşim görülmedi. |

`layout` yok: iskelet şemanın kendisi (slider+multicolumn). Tek değerli layout yasak. `kolon` yok: sağ grid hep 2×2, 3–4 kolon karede yok.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "hizalama": "left|center",
  "autoplay": true,
  "okGoster": true,
  "noktaGoster": true
}
```

Bütçe: 5.

## Açık soru

- Slider’ı sağa almak (`gorselKonumu: right`) editörde olsun mu, yoksa sabit sol mu?
- Sağ kart sayısı merchant `kolon` mu, yoksa her zaman 4 mü?
