# collection-nav-grid — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/default 1440/375 · impact/impact PDP 1440

## Mevcut

```json
"styleKnobs": {
  "kolon": [3, 4, 5, 6],
  "kartStili": "image-overlay|image-below",
  "oran": "1:1|4:5|16:9",
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[3, 4, 5, 6]` | KEEP | Hyper 1440: **6×2**. Hyper 375: **3**. Impact: **3** overlay kart. |
| `kartStili` | `image-overlay\|image-below` | KEEP | Hyper: daire + etiket altta = **image-below**. Impact “Explore more”: metin görselin üstünde = **image-overlay**. |
| `oran` | `1:1\|4:5\|16:9` | KEEP | Hyper daire **1:1**. Impact yatay kart ~16:9. |
| `hizalama` | `left\|center` | KEEP | Hyper / Impact başlık sol. Hücre içi etiket orta (kart, section hizası değil). |

Signature home observation `collection-nav-image-cards` karesine bakıyor — bu şemaya yazılmadı.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "kolon": [3, 4, 5, 6],
  "kartStili": "image-overlay|image-below",
  "oran": "1:1|4:5|16:9",
  "hizalama": "left|center"
}
```

Bütçe: 4. Değişmedi.

## Açık soru

- Hyper çerçeveli ızgara `kartStili: framed` mı? Sözlükte overlay/below var; çerçeve token.
