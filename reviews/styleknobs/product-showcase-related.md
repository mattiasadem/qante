# product-showcase-related — styleKnobs önerisi

*Evidence:* 4 PNG · hyper/default 1440/375 · prestige/allure 1440 · impulse/fashion 1440

## Mevcut

```json
"styleKnobs": {
  "rozetGoster": true,
  "hizliEkleGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `rozetGoster` | boolean | KEEP | Hyper Best Choice. Impulse Sale. Allure’da rozet yok. |
| `hizliEkleGoster` | boolean | KEEP | Hyper 375 çanta. Impulse Quick View. Allure üstte ADD TO CART çubuğu. |
| `hizalama` | `left\|center` | KEEP | Hyper / Impulse sol. Allure başlık+kart ortalı. |
| `kolon` | `[3, 4, 5]` | ADD | Impulse 3. Allure 4. Hyper 1440 **5** kart, ok yok. |

`layout: grid|slider` **eklenmedi:** 375 Hyper peek + progress = `responsive`. Masaüstü hepsi ızgara.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "kolon": [3, 4, 5],
  "hizalama": "left|center",
  "rozetGoster": true,
  "hizliEkleGoster": true
}
```

Bütçe: 4.

## Açık soru

- Allure seçili ürün + ATC çubuğu ayrı iskelet mi? `hizliEkleGoster` ile geçtim.
