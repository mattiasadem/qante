# hero-slideshow — styleKnobs önerisi

*Evidence:* 8 PNG · hyper/default (initial+changed 1440/375) · impulse/fashion 1440 · prestige/allure 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "hizalama": "center|left|right",
  "yukseklik": "compact|regular|tall",
  "autoplay": true,
  "okGoster": true,
  "noktaGoster": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `hizalama` | `center\|left\|right` | KEEP | Hyper metin ortalı. Impact “Premium Audio” solda. Allure “BEAUTIES” ortalı. |
| `yukseklik` | `compact\|regular\|tall` | KEEP | Hepsi tam kat hero; compact/tall ikinci değer atlas §3.6 + açık soru. |
| `autoplay` | boolean | KEEP | Hyper interact: initial bazen sonraki slayta kaymış (Spoke/Dining yarışı). |
| `okGoster` | boolean | KEEP | Hyper ok var. Fashion’da ok/nokta yok. Impact’te numaralı nokta, ok yok. |
| `noktaGoster` | boolean | KEEP | Hyper hap+daire. Impact 1/2/3 halka. Fashion’da yok. |
| `dikeyHizalama` | `top\|center\|bottom` | ADD | Overlay dikey orta (Hyper/Impact). Atlas hero seti. Sağ/sol zaten `hizalama`. |

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "hizalama": "center|left|right",
  "dikeyHizalama": "top|center|bottom",
  "yukseklik": "compact|regular|tall",
  "autoplay": true,
  "okGoster": true,
  "noktaGoster": true
}
```

Bütçe: 6.

## Açık soru

- `gecis: slide|fade` — atlas’ta var, karede geçiş tipi okunmuyor. Şimdilik ekleme.
- `oran` — hepsi tam genişlik kırpma; merchant 16:9 vs 9:16 seçsin mi? Atlas §3.6.
- Fashion tek slayt / gizli changer: `okGoster`/`noktaGoster` default false o temada, knob olarak dursun.
