# collection-nav-slider — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/default 1440/375

## Mevcut

```json
"styleKnobs": {
  "kartStili": "circle|rounded|square",
  "gorselBoyut": "sm|md|lg",
  "okGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kartStili` | `circle\|rounded\|square` | KEEP | 1440/375 daire. Kare/rounded karede yok. |
| `gorselBoyut` | `sm\|md\|lg` | KEEP | Masaüstü orta daire; 375 aynı ölçek peek. |
| `okGoster` | boolean | KEEP | Bu iki karede ok yok; `responsive` “desktop’ta ok veya trackpad” diyor. Knob dursun. |
| `hizalama` | `left\|center` | KEEP | Etiketler daire altında ortalı. |

Tek preset. Grid’den farkı tek satır kaydırma — ayrı şema, `layout` yok (zaten slider varyantı).

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "kartStili": "circle|rounded|square",
  "gorselBoyut": "sm|md|lg",
  "okGoster": true,
  "hizalama": "left|center"
}
```

Bütçe: 4. Değişmedi.

## Açık soru

- `okGoster` default false bu demoda mı? Karede ok görünmüyor.
