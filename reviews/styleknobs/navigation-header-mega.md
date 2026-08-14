# navigation-header-mega — styleKnobs önerisi

*Evidence:* 5 PNG · hyper/default 1440/375 · prestige/allure 1440 · impact/impact 1440 · impulse featured karesinde header (logo ortalı)

## Mevcut

```json
"styleKnobs": {
  "sticky": true,
  "yukseklik": "compact|regular"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `sticky` | boolean | KEEP | Statik karede yapışma okunmaz; header davranış knob’u. Atlas + ilk QC. |
| `yukseklik` | `compact\|regular` | KEEP | Hyper iki sıra (arama + nav) = regular. Allure / Impulse / Impact tek sıra = compact. |
| `dilGosterim` | `full_label\|short_code\|icon_only\|icon_with_short_code` | ADD | Allure / Impact: bayrak + `USD $` = icon_with_short_code. Hyper karesinde locale yok. |

Logo sol (Hyper / Impact) vs orta (Allure / Impulse) atlas §3.6’da mega = **slot ağacı**, `layout` değil. `seffafBaslangic` sözlükte yok; Impact gradient token.

375 hamburger + arama alta = `responsive`.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "sticky": true,
  "yukseklik": "compact|regular",
  "dilGosterim": "full_label|short_code|icon_only|icon_with_short_code"
}
```

Bütçe: 3 (global 0–4).

## Açık soru

- Logo sol/orta bizim editörde `layout` olsun mu? Atlas hayır diyor; şimdilik slot.
- `dilGosterim` diğer üç değer karede yok — sözlük seti.
