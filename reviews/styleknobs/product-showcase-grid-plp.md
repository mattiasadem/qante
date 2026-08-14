# product-showcase-grid-plp — styleKnobs önerisi

*Evidence:* 5 PNG · hyper/default 1440/375 · prestige/allure 1440 · impulse/fashion 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "grid|list",
  "kolon": [2, 4],
  "filtreGoster": true,
  "sortGoster": true,
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `grid\|list` | KEEP | Hyper 1440/375: ızgara + liste ikonu. Allure’da kolon ikonları (liste yok). |
| `kolon` | `[2, 3, 4]` | KEEP (değer genişlet) | Hyper 1440: 4 kolon. Hyper 375: 2 kolon. Allure üst barda 2 / 3 / 4 ikonu, aktif 4. Eski `[2, 4]` 3’ü kaçırıyordu. |
| `filtreGoster` | boolean | KEEP | Hyper sol sidebar. Allure sağ üst FILTER. |
| `sortGoster` | boolean | KEEP | Hyper “Best selling”. Allure SORT BY. |
| `rozetGoster` | boolean | KEEP | Hyper Sale/New/Best Choice/Sold out. Allure BEST SELLER + SAVE. Impulse New/Sale. |
| `hizliEkleGoster` | boolean | KEEP | Hyper 375 çanta ikonu. Impulse hover Quick View (hover motion değil, buton var/yok). |

`infiniteScroll` yok: Hyper sayfa 1…6. Compare çubuğu action / başka şema, knob değil.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "grid|list",
  "kolon": [2, 3, 4],
  "filtreGoster": true,
  "sortGoster": true,
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

Bütçe: 6.

## Açık soru

- Allure’daki 2/3/4 ikonu `kolon` (evet) — liste görünümü o temada kapalı default.
- Filtre sol sidebar vs üst buton: `side` / ayrı knob uydurulmadı; `filtreGoster` + `responsive`.
