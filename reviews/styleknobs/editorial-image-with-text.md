# editorial-image-with-text — styleKnobs önerisi

*Evidence:* 5 PNG · hyper home + about + about-2 1440 · prestige/allure about 1440 · impulse/fashion home 1440

## Mevcut

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "rozetGoster": true,
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `gorselKonumu` | `left\|right` | KEEP | Hyper home / about: görsel **sol**. Hyper about-2 + Allure TRANSPARENCY + Impulse journal: görsel **sağ**. |
| `rozetGoster` | boolean | KEEP | Hyper sarı “DESIGN MEETS FUNCTION” rozet. about-2 / Allure / Impulse’ta yok. |
| `hizalama` | `left\|center` | KEEP | Hepsi metin sol. Allure home “MATERIALS” overlay **ayrı şema** (`editorial-image-with-text-overlay`); buraya `metinKonumu` yazılmadı. |
| `dikeyHizalama` | `top\|center\|bottom` | ADD | Allure / Hyper about: metin bloğu görsele göre **dikey orta**. Hyper home ikon listesi daha üstte. |

375 istif = `responsive`. `oran` ölçülmedi — eklenmedi.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "dikeyHizalama": "top|center|bottom",
  "hizalama": "left|center",
  "rozetGoster": true
}
```

Bütçe: 4.

## Açık soru

- Impulse çift örtüşen görsel `editorial-layered-images` mi, yoksa bu şema mı? Observation bu id — `gorselKonumu: right` ile geçtim.
