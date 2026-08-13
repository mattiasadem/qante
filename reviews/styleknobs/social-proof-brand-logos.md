# social-proof-brand-logos — styleKnobs önerisi

*Evidence:* 3 PNG incelendi (pillar 1440 · nexvo 1440 · nexvo 375) · preset: default, pillar, nexvo  
*Auditor:* styleknobs-auditor v1 — pilot koşu, 2026-08-12

## Mevcut

```json
"styleKnobs": {
  "layout": "static|marquee",
  "griTon": true
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `static\|marquee` | KEEP | pillar/nexvo static; default'ta marquee gözlemi (obs notları) |
| `hizalama` | `left\|center` | ADD | pillar: başlık+logolar ortalı; nexvo: başlık solda, "View All" sağda |
| `kartStili` | `plain\|framed` | ADD | pillar: çerçevesiz serbest logolar; nexvo: kenarlıklı hücre grid'i |
| `kolon` | `[2, 3, 6]` | ADD | nexvo 1440: 6 hücre; nexvo 375: 2 kolon grid |
| `griTon` | — | MOVE → token/styleProfile | Görsel işlem (grayscale filtresi), yapısal değil — standart §5 rename borcunda da işaretli |

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "static|marquee",
  "hizalama": "left|center",
  "kartStili": "plain|framed",
  "kolon": [2, 3, 6]
}
```

Bütçe: 4 knob (instance limiti 2–6 içinde ✅)

## Slot notu (knob değil)

Nexvo'da **"View All Brands →"** linki var, pillar'da yok → şemada `cta` slot'u eksik. Öneri: `"cta": { "tip": "link", "zorunlu": false }` slot'una ekle.

## Açık soru

- `kolon` gerçekten editör ayarı mı, yoksa logo sayısından türeyen otomatik akış mı? Demo editöründen doğrulanamadı — Hyper theme editor'da "logos per row" ayarı tipik ama teyitsiz.
- `kartStili: plain|framed` iki preset gözlemine dayanıyor; aynı preset içinde toggle edilebilir mi bilinmiyor. Preset-level fark da olabilir (o durumda yine knob — preset kanıtı standardın en güçlü sinyali).
