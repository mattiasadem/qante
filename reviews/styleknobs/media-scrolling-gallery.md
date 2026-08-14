# media-scrolling-gallery — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/default 1440/375 · prestige/allure 1440

## Mevcut

```json
"styleKnobs": {
  "kolon": [4, 5],
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[4, 5]` | KEEP | Hyper / Allure 1440: **5**. 375 Hyper peek. `4` karede yok. |
| `hizalama` | `left\|center` | KEEP | Başlık orta. |
| `kartStili` | `minimal\|framed` | ADD | Hyper: avatar+handle **kart**. Allure: çıplak kare = minimal. |

`autoplay` / `okGoster` karede yok — eklenmedi (`otomatikKaydir` borcu bu PNG’lerde durmuyor).

## Uygulanacak JSON

```json
"styleKnobs": {
  "kolon": [4, 5],
  "hizalama": "left|center",
  "kartStili": "minimal|framed"
}
```

Bütçe: 3.
