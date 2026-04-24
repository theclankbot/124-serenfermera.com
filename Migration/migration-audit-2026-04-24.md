# Serenfermera migration audit — 2026-04-24

## Inputs checked

- GSC property: `sc-domain:serenfermera.com` on account `apuma`
- GSC page export: `Migration/current_gsc_pages_2026-04-24.csv` — 1,475 rows
- Bing page stats: `Migration/current_bing_pages_2026-04-24.csv` — 500 rows
- Existing migration CSVs in `Migration/`, including `Páginas.csv`, `PageTrafficReport`, `SiteExplorerUrls`, `traffic_urls_to_save.csv`, and `remaining_traffic_urls.csv`

Note: the file named `Páginas.csv` has Search Console-style columns (`Páginas principales`, `Clics`, `Impresiones`, `CTR`, `Posición`). I did not find a Vercel Analytics export with `Page / Visitors / Total` columns in this folder.

## Result

- Candidate URLs merged from GSC/Bing/Migration: 2,685
- URLs with clicks/signals checked live: 905
- Live non-200 among click-bearing URLs: 3

## Escaped URLs found

| URL | Signal | Fix |
| --- | ---: | --- |
| `/agenesia-del-cuerpo-calloso-cuidados-de-enfermeria/` | GSC 1 click / 7 impressions | Restored as a real legacy HTML input page and added to root `sitemap.xml` so Astro imports it into the generated content pipeline. |
| `/salud-mental/page/5/` | GSC/Páginas 1 click / 17 impressions | Added permanent redirect to `/salud-mental/`. This is a paginated legacy archive URL, not worth restoring as a thin nested page. |
| `/dilema-etico-en-/` | GSC 1 click / 1 impression | Added permanent redirect to `/dilema-etico-en-ejemplos-de-enfermeria/`. This is a truncated legacy slug. |

## Verification

- `npm run build` passed.
- Astro importer now reports 2,318 legacy article pages.
- Build generated 2,327 static pages.
- Local static checks passed:
  - `/agenesia-del-cuerpo-calloso-cuidados-de-enfermeria/` → 200
  - `/salud-mental/` → 200
  - `/dilema-etico-en-ejemplos-de-enfermeria/` → 200
  - `/sitemap-index.xml` → 200

## Files changed

- `agenesia-del-cuerpo-calloso-cuidados-de-enfermeria/index.html`
- `sitemap.xml`
- `vercel.json`
- audit CSV/report files under `Migration/`

## Deployment note

Changes are local until committed/pushed. Pushing to GitHub will trigger Vercel deploy.
