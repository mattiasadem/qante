# promo-banner-countdown — styleKnobs önerisi

*Evidence:* 4 PNG · hyper/default 1440/375 · prestige/allure 1440 · impulse/dune 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "horizontal|stacked",
  "timerGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `horizontal\|stacked` | KEEP | Hyper 1440 / Dune / Allure yatay. Hyper 375 dikey istif = **stacked** (aynı seçim her cihazda da olabilir; 375 otomatik `responsive` ile de örtüşür — şemada ikisi var, stacked’i merchant’a bırakıyorum çünkü Allure hero istif değil). |
| `timerGoster` | boolean | KEEP | Dört karede timer. |
| `hizalama` | `left\|center` | KEEP | Hyper 375 orta. Dune / Allure metin sol. |
| `yukseklik` | `compact\|regular\|tall` | ADD | Dune ince şerit = compact. Hyper sarı bant = regular. Allure tam kat foto = **tall**. |
| `gorselKonumu` | `left\|right\|background` | ADD | Allure görsel **background**. Hyper / Dune görselsiz bant. |

Atlas `countdown_product` karede yok — eklenmedi.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "horizontal|stacked",
  "yukseklik": "compact|regular|tall",
  "gorselKonumu": "left|right|background",
  "hizalama": "left|center",
  "timerGoster": true
}
```

Bütçe: 5.

## Açık soru

- Dune ince şerit `promo-announcement-bar` + `timerGoster` ile aynı mı? Observation countdown.
- Allure hero ayrı `hero` + timer mı? Observation bu id.
- 375 stacked otomatikse `layout`’tan `stacked` düşer; şimdilik ikisi duruyor çünkü merchant tam katı da istifleyebilir.
