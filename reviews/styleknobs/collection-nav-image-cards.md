# collection-nav-image-cards — styleKnobs önerisi

*Evidence:* 5 PNG · hyper/pillar 1440 · hyper/trove 1440 · prestige/allure 1440 · impulse/fashion 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "kolon": [3, 4],
  "metinKonumu": "overlay|below",
  "hizalama": "left|center",
  "okGoster": true,
  "rozetGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[3, 4, 5]` | KEEP (değer +5) | Impulse / Trove / Pillar: **4**. Impact: **5** kare. Allure mozaik, eşit 3 değil. |
| `metinKonumu` | `overlay\|below` | KEEP | Pillar / Allure / Impact: yazı görsel üstünde. Impulse / Trove: başlık **altta**. |
| `hizalama` | `left\|center` | KEEP | Impulse sol. Trove başlık orta. Allure overlay orta. |
| `okGoster` | boolean | KEEP | Pillar alt daire ok + progress. Trove yan ok. Impulse / Allure / Impact’te yok. |
| `rozetGoster` | boolean | KEEP | Pillar CHINO PANT hap. Trove “Fresh Everyday”. Diğerlerinde yok. |
| `layout` | `grid\|slider\|mosaic` | ADD | Impulse / Impact: eşit ızgara. Pillar / Trove: ok’lu **slider**. Allure: 1 büyük + 2 istif = **mosaic**. |

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "grid|slider|mosaic",
  "kolon": [3, 4, 5],
  "metinKonumu": "overlay|below",
  "hizalama": "left|center",
  "okGoster": true,
  "rozetGoster": true
}
```

Bütçe: 6.

## Açık soru

- Allure mozaik `media-mosaic-grid` / `editorial-dynamic-grid` mi? Observation bu id — `mosaic` duruyor.
- `kolon: 3` masaüstünde eşit üç görülmedi.
