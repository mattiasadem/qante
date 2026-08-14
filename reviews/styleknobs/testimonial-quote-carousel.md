# testimonial-quote-carousel — styleKnobs önerisi

*Evidence:* 5 PNG · hyper/default home 1440 · prestige/allure home 1440 · impact/impact home + PDP 1440 · impact/balance home 1440

## Mevcut

```json
"styleKnobs": {
  "kolon": [1, 3],
  "hizalama": "left|center",
  "kartStili": "minimal|framed",
  "okGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[1, 3]` | KEEP | Hyper / Allure / Sound tek alıntı. Balance 3 kart + peek. |
| `hizalama` | `left\|center` | KEEP | Balance başlık+kart sol. Diğerleri orta. |
| `kartStili` | `minimal\|framed` | KEEP | Hyper / Allure / Sound çıplak metin. Balance gri kart. |
| `okGoster` | boolean | KEEP | Sound / Balance ok var. Hyper peek’te yok. |
| `noktaGoster` | boolean | ADD | Sound + Allure 375 nokta. Hyper yok. Balance progress (nokta değil). |

## Uygulanacak JSON

```json
"styleKnobs": {
  "kolon": [1, 3],
  "hizalama": "left|center",
  "kartStili": "minimal|framed",
  "okGoster": true,
  "noktaGoster": true
}
```

Bütçe: 5.
