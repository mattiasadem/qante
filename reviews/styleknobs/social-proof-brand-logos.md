# social-proof-brand-logos — styleKnobs önerisi

*Evidence:* 6 PNG · pillar / nexvo / ceramide 1440 · nexvo 375 · couture 1440 · dune 1440  
*Not:* 2026-08-12 review bayat (`static\|marquee`, `griTon`). Şema zaten `horizontal\|grid`.

## Mevcut

```json
"styleKnobs": {
  "layout": "horizontal|grid",
  "hizalama": "left|center",
  "kartStili": "minimal|framed",
  "kolon": [2, 3, 5, 6]
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `horizontal\|grid` | KEEP | Pillar / Couture / Dune tek satır. Ceramide 5×2 ızgara. Nexvo 375 2×3. |
| `hizalama` | `left\|center` | KEEP | Pillar / Couture / Dune orta. Nexvo / Ceramide başlık sol. |
| `kartStili` | `minimal\|framed` | KEEP | Pillar / Couture / Dune çıplak. Nexvo / Ceramide çerçeveli hücre. |
| `kolon` | `[2, 3, 5, 6]` | KEEP | 375:2 · Couture:3 · Ceramide/Dune:5 · Pillar/Nexvo:6. |

`griTon` şemada yok — token. Marquee bu karelerde yok.

## Uygulanacak JSON

Mevcut blok. Bütçe: 4. Değişmedi.
