# Kaynak (website source)

Viewer facet for the three inventoried website sources.  
This is a **kaynak → source** map. Store name stays `kaynak` (Tema). Endüstri stays `endustri`.

*Param:* `kaynakTip` (comma-separated: `shopify`, `dtc`, `ikas`)  
*UI label:* Kaynak  
*Coverage:* **178 / 178** disk `kaynak` mapped · **0 untagged** · **0 awaiting**

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
| Shopify | 81 |
| DTC | 85 |
| ikas | 12 |
| Total | 178 |

## ikas (12)

`ali` · `alina` · `asil` · `ata` · `ediz-ege` · `eylul` · `kerem` · `kumsal` · `market` · `selim` · `serel` · `sumru`

## DTC (85)

Live brands from the DTC-69 list plus other live-store walks. Not official theme demos.

`allbirds` · `amberjack` · `atoms` · `away` · `bachans` · `bandit` · `beardbrand` · `bleame` · `boka` · `brez` · `brooklinen` · `buckmason` · `caraway` · `casper` · `chamberlaincoffee` · `chomps` · `cometeer` · `comradsocks` · `cuts` · `cymbiotika` · `davidprotein` · `desoi` · `dieux` · `drinktrip` · `dukecannon` · `everlane` · `fellow` · `flamingoestate` · `flybyjing` · `functionhealth` · `ghia` · `glossier` · `graza` · `greatjonesgoods` · `gruns` · `hellobubble` · `herocosmetics` · `hexclad` · `hiyo` · `im8health` · `intothegloss` · `javy` · `kettleandfire` · `kizik` · `lemme` · `liquiddeath` · `madeincookware` · `magicmind` · `magicspoon` · `materialkitchen` · `mejuri` · `moom` · `moonjuice` · `necessaire` · `novoslabs` · `obvi` · `olipop` · `omsom` · `onceuponafarm` · `onnit` · `outdoorvoices` · `pamos` · `partakefoods` · `poppi` · `primalqueen` · `rarebeauty` · `representclo` · `ridge` · `rhone` · `rothys` · `seed` · `shinesty` · `skims` · `starface` · `takearecess` · `tenthousand` · `topicals` · `trueclassictees` · `vegamour` · `vessi` · `vollebak` · `vuori` · `waterboy` · `westernrise` · `xeroshoes`

## Shopify (81)

Official Theme Store demo slugs inventoried on disk — including `shopify-themes.md` done official demos and other first-party / Theme Store demo slugs (not live-brand walks).

`alchemy` · `atelier` · `atlas` · `awaken` · `beautify` · `be-yours` · `blockshop` · `boost` · `borders` · `bricks` · `broadcast` · `canopy` · `colorblock` · `combine` · `concept` · `craft` · `crave` · `dawn` · `district` · `drop` · `dwell` · `eclipse` · `empire` · `enterprise` · `envy` · `eurus` · `expanse` · `exhibit` · `fabric` · `flow` · `heritage` · `highlight` · `homage` · `honey` · `horizon` · `hyper` · `ignite` · `impact` · `impulse` · `kingdom` · `local` · `maker` · `minion` · `motion` · `origin` · `palo-alto` · `pebble` · `pipeline` · `pitch` · `prestige` · `publisher` · `purevea` · `refresh` · `ride` · `rise` · `ritual` · `savor` · `sense` · `showcase` · `shrilahome` · `sleek` · `spotlight` · `stack` · `startup` · `stiletto` · `stockist` · `streamline` · `stretch` · `studio` · `symmetry` · `taiga` · `taste` · `tinker` · `trade` · `triumph` · `venue` · `vessel` · `warehouse` · `wonder` · `woodstock` · `zest`

## Awaiting user approval

None. Every disk `kaynak` has a default.
