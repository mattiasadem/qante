# Şemaya sığmayanlar — Hyper (default)

Gözlemledik ama **yeni section şeması yazmadık**. Her madde için karar önerisi var.

| # | Gözlem | Neden section değil? | Karar önerisi |
|---|---|---|---|
| 1 | Sticky header | Davranış / stil tercihi | `navigation-header-mega` **styleKnob**: `sticky` |
| 2 | Sticky add-to-cart (PDP) | PDP şablon davranışı | `product-info-main` **styleKnob** / davranış knob’u |
| 3 | Infinite scroll (collection) | PLP şablon davranışı | `product-showcase-grid-plp` davranış knob’u — ayrı section yok |
| 4 | Swatch / renk filtreleri | Filtre sistemi özelliği | Collection filtre altyapısı (section değil); hook: `filter:*` |
| 5 | Product badges on card | Kart item’ının parçası | Kart alt-bileşen + `filter:product.badges` — grid section’ı değil |
| 6 | Gift wrap / cart notes | Drawer içi slot | Zaten `global-cart-drawer.slots` |
| 7 | RTL | Platform / token | Şemaya girmez; platform notu |
| 8 | Animation / motion | StyleProfile | `styleProfile.motion` — section şemasına girmez |
| 9 | Combined listing (Shopify Plus) | Platform özelliği | Kapsam dışı; raporda beyan |
| 10 | Bundle builder | Kategori yok | → `candidates/commerce-tools.md` |

**Kural:** Zorlamayla yanlış kategoriye sokma → ya knob/slot/hook, ya aday, ya platform beyanı.
