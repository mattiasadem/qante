# Todo — tema bazlı envanter takibi

**Şemalar** `sections/` altında (section-first).  
**Saha / ilerleme** burada (theme-first): her tema için bir dosya.

| Tema | Dosya | Durum |
|---|---|---|
| Hyper (Shopify) | [`hyper.md`](./hyper.md) | ✅ **default tamam** — 45 şema · 80 evidence |
| Hyper · Ceramide | [`hyper-ceramide.md`](./hyper-ceramide.md) | ✅ delta — 5 yeni şema · 5 obs |
| Prestige · Allure | [`prestige.md`](./prestige.md) | ✅ Allure 9 sayfa · 65 obs · 4 yeni şema |
| Prestige · Signature | [`prestige-signature.md`](./prestige-signature.md) | ✅ 14 sayfa · 85 obs · 1 yeni şema |
| Prestige · Couture | [`prestige-couture.md`](./prestige-couture.md) | ✅ 11 sayfa · 64 obs · 0 yeni şema |
| Prestige · Vogue | [`prestige-vogue.md`](./prestige-vogue.md) | ✅ 10 sayfa · 40 obs · 0 yeni şema |
| Prestige · Strass | [`prestige-strass.md`](./prestige-strass.md) | ✅ 11 sayfa · 61 obs · 0 yeni şema |
| Impulse · Fashion | [`impulse.md`](./impulse.md) | ✅ Fashion tamam — 11 sayfa · 27 şema · 43 obs · 156 kanıt · 0 yeni şema |
| _(sonraki)_ | `ozy.md` / `marka-….md` | henüz yok |

**QC / improvement backlog:** [`../improvements-qc.md`](../improvements-qc.md)

## Hyper özeti

11 sayfa tipi (home → blog-post) envanterlendi. Ceramide delta: [`hyper-ceramide.md`](./hyper-ceramide.md).

## Yeni tema dosyası

1. `_template.md` kopyala → `todo/{tema-slug}.md`
2. Bu tabloda satır aç
3. Evidence kökü: `evidence/{tema-slug}/…`

## Akış (her bileşen)

1. Sayfa tara → todo’ya roster  
2. Şema yoksa `sections/` JSON  
3. `observations/{tema}/{preset}/{sayfa}/…` + `capture-observation.mjs`  
4. Todo `[x]`
