# faq-collapsible-tabs — styleKnobs önerisi

*Evidence:* 4 PNG · hyper/default FAQ 1440 · prestige/allure FAQ 1440 · impact/impact home + faq-support 1440

## Mevcut

```json
"styleKnobs": {
  "allowMultipleOpen": false,
  "openFirst": true,
  "hizalama": "left|center"
}
```

`_knobNote`: “3 knob — dördüncü uydurulmadı.” Eski not; preset farkı o zamandan beri var.

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `allowMultipleOpen` | boolean | KEEP | Hyper interact: ikinci soru açıldı. Default tek açık. |
| `openFirst` | boolean | KEEP | Hyper 1440 ilk madde `—` açık. Allure / Impact hepsi `+` / chevron kapalı. |
| `hizalama` | `left\|center` | KEEP | Hyper ana başlık ortalı, sorular solda. Impact / Allure sol. |
| `layout` | `stacked\|split\|sidebar` | ADD | Hyper: tek kolon accordion = **stacked**. Impact home + FAQ sayfası: sol metin / sağ accordion = **split**. Allure: sol kategori nav + sağ gruplar = **sidebar**. |
| `kategoriTabGoster` | boolean | ADD | Allure sol Theme Info / Product & Care / Order. Hyper “Orders & Purchases” başlık (slot). Impact’te kategori yok. |

`aramaGoster` karede yok — eklenmedi.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "stacked|split|sidebar",
  "hizalama": "left|center",
  "allowMultipleOpen": false,
  "openFirst": true,
  "kategoriTabGoster": true
}
```

Bütçe: 5.

## Açık soru

- Atlas `aramaGoster` — karede arama kutusu yok. Editörde olsun mu?
- Allure sidebar ile `kategoriTabGoster` biraz örtüşür; ikisi de duruyor çünkü stacked + üst tab da mümkün (görülmedi).
