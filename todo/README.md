# Todo — tema bazlı envanter takibi

**Şemalar** `sections/` altında (section-first).  
**Saha / ilerleme** burada (theme-first): her tema için bir dosya.

| Tema | Dosya | Durum |
|---|---|---|
| Hyper (Shopify) | [`hyper.md`](./hyper.md) | ✅ **default tamam** — 45 şema · 80 evidence · compare dolu |
| Hyper · Ceramide | [`hyper-ceramide.md`](./hyper-ceramide.md) | ✅ delta — 5 yeni şema · 5 obs |
| Prestige · Allure | [`prestige.md`](./prestige.md) | ✅ Allure 9 sayfa · 66 obs · 4 yeni şema · dolu cart |
| Prestige · Signature | [`prestige-signature.md`](./prestige-signature.md) | ✅ 14 sayfa · 85 obs · 1 yeni şema |
| Prestige · Couture | [`prestige-couture.md`](./prestige-couture.md) | ✅ 11 sayfa · 64 obs · 0 yeni şema |
| Prestige · Vogue | [`prestige-vogue.md`](./prestige-vogue.md) | ✅ 10 sayfa · 40 obs · 0 yeni şema |
| Prestige · Strass | [`prestige-strass.md`](./prestige-strass.md) | ✅ 11 sayfa · 61 obs · 0 yeni şema |
| Impulse · Fashion | [`impulse.md`](./impulse.md) | ✅ Fashion tamam — 11 sayfa · 27 şema · 43 obs · 156 kanıt · 0 yeni şema |
| Impulse · Dune | [`impulse-dune.md`](./impulse-dune.md) | ✅ delta — 8 sayfa · 8 obs · 21 kanıt |
| Impulse · Terrain | [`impulse-terrain.md`](./impulse-terrain.md) | ✅ delta — 5 obs · 15 kanıt · spec hotspot interact |
| Impulse · Apothecary | [`impulse-apothecary.md`](./impulse-apothecary.md) | ✅ delta — 2 obs · 6 kanıt · before-after drag yoklandı |
| Impact · default (Sound) | [`impact.md`](./impact.md) | ✅ 14 sayfa · 99 obs · 97 kare · 0 yeni şema · home interact |
| Impact · Balance | [`impact-balance.md`](./impact-balance.md) | ✅ delta — 4 obs · 24 kanıt · hotspot + PDP accordion |
| Impact · Cocoon | [`impact-cocoon.md`](./impact-cocoon.md) | ✅ delta — 2 obs · 12 kanıt · hotspot interact |
| Stretch · Snow / Sand / Diffuse | [`stretch.md`](./stretch.md) | Snow ✅ · Sand ✅ · Diffuse ✅ · 86 obs · 365 kare · 0 yeni şema · interact |
| Motion · Motion / Satchel / Memo | [`motion.md`](./motion.md) | ✅ 69 obs · 213 kare · 0 yeni şema · WEAR/CARRY |
| Symmetry · 5 preset | [`symmetry.md`](./symmetry.md) | ✅ 145 obs · 447 kare · 0 yeni şema · hotspot + FAQ |
| Obvi (Platter custom) | [`obvi.md`](./obvi.md) | ✅ kapalı — 51 obs · community/team/FAQ/contact/policy · 404/scratch kayıtlı · **main'e merge yok** |
| Bandit Running | [`bandit.md`](./bandit.md) | ✅ default — `bandit-ecomm/main` · DTC-69 #2 · statik 3vp + mega/search/cart/menu · 0 yeni şema |
| Local (Krown) | [`local.md`](./local.md) | ✅ default — `local-build/light` · resmi 3vp + interact · 45 obs · 154 PNG · 0 yeni şema |
| Seed (Cultured) | [`seed.md`](./seed.md) | ⬜ delta — listicle-gi-tips · 3 obs · DTC non-Shopify |

**Interact (discover sonrası derinlik):** [`interact.md`](./interact.md) — kapalı kare yalanı; Stretch + Cocoon/Balance shop-the-look kapandı.

**Bitince Vercel:** bir tema veya preset kapanınca `main`'e push → https://qante.vercel.app

**QC / improvement backlog:** [`../improvements-qc.md`](../improvements-qc.md)

## Yeni tema bildirimi

`main`’e push + yeni `observations/{tema}/` (veya yeni preset) → GitHub Action Slack/e-posta atar.

1. Slack: kanal → Incoming Webhook → repo secret `SLACK_WEBHOOK_URL`
2. E-posta (opsiyonel): [Resend](https://resend.com) → secret `RESEND_API_KEY` + `NOTIFY_EMAIL`

Secret yoksa job sessiz geçer. Workflow: `.github/workflows/notify-theme.yml`

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
