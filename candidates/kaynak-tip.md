# Kaynak (website source)

Viewer facet for the three inventoried website sources.  
This is a **kaynak → source** map. Store name stays `kaynak` (Tema). Endüstri stays `endustri`.

*Param:* `kaynakTip` (comma-separated: `shopify`, `dtc`, `ikas`)  
*UI label:* Kaynak  
*Coverage:* **147 / 147** disk `kaynak` mapped · **0 untagged** · **0 awaiting**

Code: `viewer/lib/sources.mjs` (consumed by inventory + facets). Observation JSON is not rewritten.

## Closed list

Do not invent a fourth source.

| id | UI | What it is |
|---|---|---|
| `shopify` | Shopify | Official Theme Store / first-party demo slugs (`*-theme-*.myshopify.com`, `theme-*-demo`) |
| `dtc` | DTC | Live external brands (`dtc-69-brands.md` + any other live-store walk) |
| `ikas` | ikas | Official 12 marketplace themes |

A live store that happens to use a Shopify theme is **DTC**, not Shopify: `beardbrand` (Split), `bleame` (Focal), `flybyjing` (Shapes), `hellobubble` (Baseline).

## Counts

| Source | Stores |
|---|---|
| Shopify | 69 |
| DTC | 66 |
| ikas | 12 |
| Total | 147 |

## ikas (12)

`ali` · `alina` · `asil` · `ata` · `ediz-ege` · `eylul` · `kerem` · `kumsal` · `market` · `selim` · `serel` · `sumru`

## DTC (66)

Live brands from the DTC-69 list plus other live-store walks. Not official theme demos.

`amberjack` · `atoms` · `bachans` · `bandit` · `beardbrand` · `bleame` · `boka` · `brez` · `buckmason` · `chamberlaincoffee` · `chomps` · `cometeer` · `comradsocks` · `cuts` · `cymbiotika` · `davidprotein` · `desoi` · `dieux` · `drinktrip` · `dukecannon` · `fellow` · `flamingoestate` · `flybyjing` · `functionhealth` · `ghia` · `graza` · `greatjonesgoods` · `gruns` · `hellobubble` · `herocosmetics` · `hexclad` · `hiyo` · `im8health` · `javy` · `kettleandfire` · `kizik` · `lemme` · `madeincookware` · `magicmind` · `magicspoon` · `materialkitchen` · `moom` · `moonjuice` · `necessaire` · `novoslabs` · `obvi` · `omsom` · `onceuponafarm` · `onnit` · `pamos` · `partakefoods` · `primalqueen` · `representclo` · `rhone` · `shinesty` · `starface` · `takearecess` · `tenthousand` · `topicals` · `trueclassictees` · `vegamour` · `vessi` · `vollebak` · `waterboy` · `westernrise` · `xeroshoes`

## Shopify (69)

Official Theme Store demo slugs inventoried on disk — including `shopify-themes.md` done official demos and other first-party / Theme Store demo slugs (not live-brand walks).

`atelier` · `atlas` · `awaken` · `be-yours` · `blockshop` · `borders` · `bricks` · `broadcast` · `canopy` · `colorblock` · `combine` · `concept` · `craft` · `crave` · `dawn` · `district` · `dwell` · `eclipse` · `empire` · `envy` · `eurus` · `expanse` · `fabric` · `flow` · `heritage` · `highlight` · `homage` · `horizon` · `hyper` · `impact` · `impulse` · `kingdom` · `local` · `maker` · `minion` · `motion` · `origin` · `palo-alto` · `pebble` · `pipeline` · `pitch` · `prestige` · `publisher` · `purevea` · `refresh` · `ride` · `rise` · `ritual` · `savor` · `sense` · `showcase` · `sleek` · `spotlight` · `stack` · `stiletto` · `stretch` · `studio` · `symmetry` · `taiga` · `taste` · `tinker` · `trade` · `triumph` · `venue` · `vessel` · `warehouse` · `wonder` · `woodstock` · `zest`

## Awaiting user approval

None. Every disk `kaynak` has a default.
