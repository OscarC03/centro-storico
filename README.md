# Centro Storico — Gestionale Borgata

Webapp per la gestione amministrativa della borgata **"Centro Storico"** di Ceva (CN):
iscritti al Palio, quote di iscrizione, merchandise e cassa comune.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 · shadcn/ui (dalla Fase 1) · Motion · Lucide
- TanStack Query v5 · Supabase (auth + DB, dalla Fase 2)
- i18next (solo italiano) · Prettier 3 · Vitest + Testing Library
- Package manager: **pnpm**

## Prerequisiti

- Node.js ≥ 20 (testato su 24)
- pnpm ≥ 11

## Setup

```bash
pnpm install
cp .env.example .env.local   # valorizzare le chiavi Supabase (Fase 2)
pnpm dev
```

App su http://localhost:3000

## Comandi

| Comando             | Descrizione               |
| ------------------- | ------------------------- |
| `pnpm dev`          | Avvio in sviluppo         |
| `pnpm build`        | Build di produzione       |
| `pnpm start`        | Avvio build di produzione |
| `pnpm lint`         | ESLint                    |
| `pnpm format`       | Prettier (scrittura)      |
| `pnpm format:check` | Prettier (solo verifica)  |
| `pnpm test`         | Vitest (watch)            |
| `pnpm test:run`     | Vitest (single run)       |

## Variabili d'ambiente

Impostare in `.env.local` (mai committare valori reali — vedi `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Struttura

```
app/                 # route App Router (layout, page)
components/
  providers/         # provider client (TanStack Query, i18next)
  ui/                # primitive shadcn (dalla Fase 1)
hooks/               # custom hook (incl. TanStack Query)
services/            # accesso dati (Supabase), no React
lib/                 # query client, i18n, utils
  i18n/              # setup i18next
types/               # tipi di dominio e API
locales/it/          # stringhe UI (solo italiano)
supabase/            # migration SQL, RLS (dalla Fase 2)
docs/plan/           # piano di sviluppo a fasi
```

## Piano di sviluppo

Il progetto avanza per fasi; ogni fase si conclude con una revisione. Vedi
[docs/plan/README.md](docs/plan/README.md).
