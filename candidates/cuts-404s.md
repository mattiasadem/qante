# Cuts 404 / boş / dış sayfalar

*Store:* https://www.cutsclothing.com · 2026-08-15

---

## Custom 404

`/pages/this-page-does-not-exist-qante` → **404**  
Başlık: Not Found. Gövde: “Looks like you’re lost” + büyük 404 + Shop All + askıda yelek/hoodie.  
`#mainContent section` yok. Şema yazılmadı.

Ayrıca sitemap’te `/pages/404` var — ayrı şablon adayı, çekilmedi.

---

## 200 ama boş gövde

| URL | Not |
|---|---|
| `/blogs/blog` | Header/footer; article kartı hydrate yok |
| `/pages/store-locator` | Harita/liste yok |

---

## Dış / şema yok

| Hedef | Nereye |
|---|---|
| FAQ | https://cutsclothing.kustomer.help/lang/en_us/ |
| Size + Fit | Kustomer kategori |
| Contact Us | Kustomer contact |
| Order Tracking | `shop.cutsclothing.com/apps/redo/account/login` |
| Cuts Marketplace | https://marketplace.cutsclothing.com/ |

---

## Bilinçli 404 denemesi

Yanlış path custom 404 üretir (Hydrogen). Shopify native `/policies/*` doğrulanmadı — privacy `/pages/privacy-policy`.
