# ADAY / BLOCKER: Cometeer kırık / test / 404

**Kaynak:** Cometeer (cometeer.com) · preset `default` · 2026-08-15  
**Tema:** Cometeer Theme / Shiro (custom)

## 404 — şema icat yok

| URL | HTTP | Not |
|---|---|---|
| `/pages/faq` | 404 | "Sorry there's no coffee here." |
| `/pages/faqs` | 404 | aynı 404 şablon |
| `/pages/shipping` | 404 | uydurma path |
| `/pages/not-a-real-page-xyz` | 404 | aynı şablon |
| `help.cometeer.com/contact/contact-us-…` | 404 | `/pages/contact` buraya kaçtı |

404 gövde: `#shopify-section-template--21675273879851__main` · `PageNotFound-section` · "Go back to home". Yeni şema yok.

## Test / chrome-dışı

| URL | Durum | Not |
|---|---|---|
| `/collections/all` | 200 | `[Test KH]` / `[KH Test]` satırları — müşteri PLP değil |
| `/cart` | 200→`/?sidecart=true` | tam sayfa sepet yok |
| Careers | dış Paylocity | envanter dışı |
| Refer / My Account | `account.cometeer.com` | PII; dur |

Müşteri katalog: `/pages/coffee-menu` + `/products/build-your-own-box` (Bundle-section).

## Karar

- [ ] 404 URL düzelince retest — şema icat etme
- [ ] `/collections/all` müşteriye açılırsa PLP olarak yeniden gözle
