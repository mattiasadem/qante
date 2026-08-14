# promo-announcement-bar — styleKnobs önerisi

*Evidence:* 5 PNG · hyper/default 1440/375 · impulse/fashion 1440 · prestige/allure 1440 · impact/impact 1440

## Mevcut

```json
"styleKnobs": {
  "autoplay": true,
  "kapatilabilir": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `autoplay` | boolean | KEEP | Impact: noktalarla ayrılmış **ticker**. Hyper `responsive`: mobilde rotasyon. |
| `kapatilabilir` | — | DROP | Hiçbir karede X yok. |
| `layout` | `static\|marquee` | ADD | Hyper / Impulse / Allure durağan şerit. Impact kayan metin = marquee. |
| `timerGoster` | boolean | ADD | Allure: 99 DAY / 10 HRS countdown. Diğerlerinde yok. |

Hyper 1440 sol link + orta mesaj + locale/sosyal: içerik/slot, ayrı iskelet uydurulmadı. 375 tek mesaj = `responsive`.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "static|marquee",
  "autoplay": true,
  "timerGoster": true
}
```

Bütçe: 3 (global 0–4).

## Açık soru

- Allure timer ayrı `promo-banner-countdown` mu, yoksa bu şeridin knob’u mu? Observation announcement — `timerGoster` duruyor.
- `kapatilabilir` bazı temalarda vardır; bu karelerde yok.
