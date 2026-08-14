# product-showcase-grid-featured — styleKnobs önerisi

*Evidence:* 6 PNG · hyper/default featured + featured-2 1440 · hyper 375 · prestige/allure 1440 · impulse/fashion 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "kolon": [2, 3, 4, 5],
  "kartStili": "minimal|framed",
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[2, 3, 4, 5]` | KEEP | Allure / Impact 1440: 4. Impulse: 5. Hyper 375: 2. featured-2’de 5 kart + peek. |
| `kartStili` | `minimal\|framed` | KEEP | Impact beyaz kart + radius = framed. Allure / Impulse / Hyper düz = minimal. |
| `rozetGoster` | boolean | KEEP | Hyper Sale. Impact Sold out / New. Allure BEST SELLER. Impulse New/Sale. |
| `hizliEkleGoster` | boolean | KEEP | Hyper 375 çanta. Impulse / Hyper 1440 hover “Quick View” / “Choose Options”. |
| `layout` | `grid\|slider` | ADD | Hyper New Arrivals + Shop Our Offers: ok + progress = **slider**. Allure / Impulse / Impact: durağan ızgara. 375 Hyper ızgara = `responsive`. |
| `kategoriTabGoster` | boolean | ADD | Hyper: New Arrivals / Hot Items. Diğerlerinde yok. |
| `okGoster` | boolean | ADD | Hyper alt daire oklar. Allure / Impulse / Impact’te yok. |
| `hizalama` | `left\|center` | ADD | Hyper / Impact başlık solda. Allure başlık+kart metni ortalı. |

Promo tile (Soft Stools) slot, knob değil.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "grid|slider",
  "kolon": [2, 3, 4, 5],
  "hizalama": "left|center",
  "kartStili": "minimal|framed",
  "kategoriTabGoster": true,
  "okGoster": true,
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

Bütçe: 8.

## Açık soru

- Hyper progress bar `noktaGoster` değil (sözlükte ayrı ad yok).
- Promo + slider yan yana üçüncü iskelet mi? İki değerle geçtim; `split` uydurulmadı.
