# trust-icon-row — styleKnobs önerisi

*Evidence:* 4 PNG · hyper/default home + PDP 1440 · prestige/allure 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "horizontal|vertical",
  "kolon": [3, 4],
  "kartStili": "minimal|framed",
  "ikonGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `horizontal\|vertical` | KEEP | Hepsi yatay sıra. `vertical` karede yok. |
| `kolon` | `[3, 4]` | KEEP | Hyper PDP: **3**. Hyper home / Allure / Impact: **4**. |
| `kartStili` | `minimal\|framed` | KEEP | Hyper home: sarı **hap/çerçeve**. PDP / Allure / Impact: düz ikon+metin = minimal. |
| `ikonGoster` | boolean | KEEP | Hepsinde ikon. |
| `hizalama` | `left\|center` | KEEP | Hyper / Allure orta. Impact kolon içi **sol**. |

Aynı temada home hap vs PDP kart — `kartStili` uydurma değil.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "horizontal|vertical",
  "kolon": [3, 4],
  "kartStili": "minimal|framed",
  "ikonGoster": true,
  "hizalama": "left|center"
}
```

Bütçe: 5. Değişmedi.

## Açık soru

- `layout: vertical` yalnız sözlük / 375 istif `responsive` mi?
