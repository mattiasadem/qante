# collection-nav-cards — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/pillar 1440/375

## Mevcut

```json
"styleKnobs": {
  "kolon": [3, 4],
  "okGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[3, 4]` | KEEP | Pillar 1440: **4** kart. 3 karede yok. |
| `okGoster` | boolean | KEEP | 1440 sağ üst daire oklar. |
| `hizalama` | `left\|center` | ADD | “Shop By Campaign” sol. |
| `kartStili` | `minimal\|framed` | ADD | Beyaz kutu + ince çerçeve = **framed**. |

375 bir kart + peek = `responsive`, `layout: slider` değil. Kart içi 1+3 mozaik bu varyantın kimliği, ikinci layout değil.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "kolon": [3, 4],
  "kartStili": "minimal|framed",
  "hizalama": "left|center",
  "okGoster": true
}
```

Bütçe: 4.

## Açık soru

- `kolon: 3` yalnız sözlük.
- Başka preset’te çerçevesiz kart var mı? `minimal` açık soru.
