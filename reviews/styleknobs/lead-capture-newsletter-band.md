# lead-capture-newsletter-band — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/trove 1440 · hyper/pillar 1440 · prestige/allure 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "split|inline",
  "gorselGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `split\|inline\|overlay` | KEEP (değer +overlay) | Trove görsel\|form. Pillar metin\|form. Allure form görsel üstünde. |
| `gorselGoster` | boolean | KEEP | Trove / Allure var. Pillar yok. |
| `hizalama` | `left\|center` | KEEP | Trove / Pillar sol. Allure orta. |

## Uygulanacak JSON

```json
"styleKnobs": {
  "layout": "split|inline|overlay",
  "gorselGoster": true,
  "hizalama": "left|center"
}
```

Bütçe: 3.
