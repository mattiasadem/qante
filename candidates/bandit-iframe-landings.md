# ADAY / BLOCKER: Bandit cross-origin landing iframes

**Kaynak:** Bandit (banditrunning.com) · preset `default` · tema `bandit-ecomm/main` · 2026-08-15

Bu sayfalar 200 döner ama Shopify section gövdesi yok. İçerik **cross-origin iframe** (Lovable / alt domain). `about:blank` same-origin değil → pierce yok. Şema icat edilmedi.

| URL | iframe host | Not |
|---|---|---|
| `/pages/the-membership` | `bandit-membership-landing.lovable.app` | Hero + sticky JOIN NOW (host chrome + embed) |
| `/pages/the-summer-26-collection-lookbook` | `gallery-dream-show.lovable.app` | Video lookbook |
| `/pages/flagships` | `flagships.banditrunning.com` | Brooklyn / Chicago / LA / Manhattan kartları |
| `/pages/bandit-world-tour-2026` | `banditworldtour.lovable.app` | World tour LP |
| `/pages/the-program-2026` | `onyx-canvas-builder.lovable.app` | The Program LP |
| `/pages/bandit-performance-fabric-technology` | `fabric-journey-showcase.lovable.app` | Fabric technology LP |

## Karar

- [ ] Iframe same-origin olursa `/qante-discover-interact` ile pierce
- [ ] Şimdilik observation/şema yok — host header dışında tema section yok

## Diğer

- `/cart` → homepage. Sepet yalnız `global-minicart` drawer.
- `global-header-lockdown` ("GET EARLY ACCESS") public walk'ta off-screen.
- Blog article (`/blogs/the-b-mail/*`) Shopify section id taşımıyor; gövde `main#main` / `.article-hero` + `.article-content`.
- FAQ accordion ve PLP ALL FILTERS paneli bu walk'ta açılmadı (statik kare + şerit var).
- Mobil menü alt akordeon (Women's) açılmadı.
