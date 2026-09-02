# Evidence capture

Manuel SS yok. Observation → 3 viewport otomatik.

## Komut

```bash
cd qante/scripts
npm install   # bir kez (playwright)
node capture-observation.mjs ../observations/hyper/default/home/hero-slideshow.json
```

İsteğe bağlı: `--url https://...`

Storefront password (public demo wall): observation `storefrontPassword` / `storePassword` (or `capture.*`), else `QANTE_STOREFRONT_PASSWORD` / `SHOPIFY_STOREFRONT_PASSWORD` / `STOREFRONT_PASSWORD`. `unlock-storefront.mjs` fills the `/password` form and waits out Shopify checkpoint interstitials.

## Ne yapar

1. Observation’dan `selector` + `url` okur  
2. Her viewport için (375 / 768 / 1440 — `viewports.json`):
   - overlay temizle (`dismiss-overlays.mjs`)
   - temiz değilse SS alma
   - varsa `prepareClick` (drawer/modal açmak için) tıkla
   - margin-box kırp (`screenshot-section.mjs`)
   - `evidence/{tema}/{preset}/{sayfa}/{slug}.{viewport}.png` yaz
3. Observation `evidence[]` + `capture` alanını günceller

Drawer örneği:
- `prepareClick: "a.cart-drawer-button[aria-controls='CartDrawer']"`
- `selector: "#CartDrawer .drawer__inner"` (varlık kontrolü)
- `captureMode: "viewport"` — masaüstünde sağ panel + sayfa bağlamı (panel-only kırpma drawer’da yanlış görünür)

## Dosya adı

`hero-slideshow.375.png` · `hero-slideshow.768.png` · `hero-slideshow.1440.png`
