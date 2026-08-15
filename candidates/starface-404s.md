# Starface 404s

*Store:* https://starface.world  
*Tarih:* 2026-08-15

HTTP 404 (custom template “404 error oh no!…”):

| Path | Not |
|---|---|
| `/pages/support` | Custom 404 — `page-content-main` yazıldı |
| `/pages/about-us` | 404 (gerçek about: `/pages/about`, o da boş main) |
| `/collections/pimple-patches` | 404 |

HTTP 200 ama içerik yok / SPA / üçüncü parti (404 değil):

| Path | Not |
|---|---|
| `/pages/about` | 200, main section yok |
| `/pages/quiz` | 200, yalnız H1 |
| `/pages/star-corner` | 200, Vite 0×0 |
| `/blogs/news` | 200, boş liste |
| `/blogs.json` | 404 (Shopify blogs.json kapalı; sitemap_blogs var) |
