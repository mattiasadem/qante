# media-lookbook-slider — styleKnobs önerisi

*Evidence:* 8 PNG · hyper/default (initial+open 1440/375) · prestige/allure 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "hotspotGoster": true,
  "okGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hotspotGoster` | boolean | KEEP | Hyper “3” chip; Allure beyaz nokta; Impact “+” daire. Interact Shop this look açtı. |
| `okGoster` | boolean | KEEP | Hyper alt daire oklar. Allure yan oklar. Impact karede ok yok. |
| `hizalama` | `left\|center` | KEEP | Hyper / Allure başlık solda. |
| `layout` | `peek-slider\|split` | ADD | Hyper 1440: yatay peek kartlar. Allure 1440: sol look + sağ ürün kartı. Impact: sol metin + orta ürün (split). 375 Hyper istif = `responsive`, ikinci layout değil. |
| `noktaGoster` | boolean | ADD | Allure kart altında iki nokta. Hyper’da progress bar (nokta değil). Impact’te yok. |

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "peek-slider|split",
  "hizalama": "left|center",
  "hotspotGoster": true,
  "okGoster": true,
  "noktaGoster": true
}
```

Bütçe: 5.

## Açık soru

- Impact “Read more” + artı hotspot aynı `split` mi, yoksa overlay üçüncü iskelet mi? İki değerle geçtim; üçüncüyü uydurmadım.
- Hyper progress bar `noktaGoster` değil — ayrı knob yok (sözlükte yok).
