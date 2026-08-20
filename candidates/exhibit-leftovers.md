# Exhibit leftovers

*Kaynak:* https://exhibit-theme-preset-1.myshopify.com/  
*Tema gözlemi:* **v2.0.1 with build** · `schema_name` **Exhibit** · `schema_version` **2.0.1** · `theme_store_id` **null**  
theme id `181132263709` · role `main` · shop `exhibit-theme-preset-1.myshopify.com`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Exhibit** · `schema_version` **2.0.1**. role `main`.
- Preset klasörü `default` = resmi preset-1 vitrin.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `6ce3fa7f-f1a7-4cb2-8971-4429537477f6` | Hero-group boş spacer h=240. İçerik yok — leftover |
| `hero-logo` | SVG logo hero (648px). Metin/CTA yok — şema adayı değil; leftover |
| `92515118-1bd4-4f6e-8866-6db61f0908d7` | Footer-group boş section h=686. İçerik yok — leftover |
| `promo-announcement-bar` | Announcement bar yok |
| `global-predictive-search` | Predictive search overlay/modal yok. Arama yalnız `/search` tam sayfa |
| Header mega panel | `navigation-header-mega` reuse · mega yok · delta |
| 1440 hamburger | Menu butonu `lg:hidden`. 768/375 only — global-menu-drawer |
| 768 menu drawer | 768'de Menu butonu görünür; 1440'da yok |
| Blog post `#header` section | Başlık/yazar/tarih/kapak ayrı section. `blog-post-main` yalnız `#main` gövde |
| PLP filtre interact | Style chip filtreleri DOM'da; walk zorunlu değil |
| PDP Size/Frame variant interact | Swatch DOM'da; Mod A statik capture |
| Quick view drawer | `#quick-view-drawer-slot` var; walk'ta açılmadı |
| Newsletter Subscribe submit | PII — dur |
| Checkout / account / payment | ⛔ dur |
| `/pages/about` | Walk dışı; header link var, Mod A'da capture yok |
| 404 sayfa | Walk dışı leftover |
| reviews / countdown / before-after / bundle / comparison / quiz / FAQ accordion | Observation yok — şema uydurulmadı |

## Sonraki (interact / CRO)

- `global-cart-drawer` filled state (PDP ATC → drawer)
- `global-menu-drawer` 768 viewport
- `product-info-main` Size/Frame variant changed
- `hero-logo` SVG hero — aday mı?
- PLP Style filter changed
- Quick view drawer open
