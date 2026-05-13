# EcoSwitch Showcase

Product showcase and e-commerce site for the EcoSwitch smart plug brand. Built with TanStack Start, React 19, Tailwind CSS v4, and shadcn/ui. Deploys to Cloudflare Workers.

---

## Prerequisites

### Bun

The project uses [Bun](https://bun.sh) as its package manager and runtime.

**macOS**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Linux**
```bash
curl -fsSL https://bun.sh/install | bash
```

After installation, restart your terminal and verify:
```bash
bun --version
```

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd smart-plug-showcase
bun install
```

---

## Running the project

### Development server

```bash
bun run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production build

```bash
bun run build
```

Outputs a Cloudflare Workers-compatible bundle.

### Preview production build locally

```bash
bun run preview
```

---

## Other scripts

| Command | Description |
|---|---|
| `bun run lint` | Run ESLint |
| `bun run format` | Format code with Prettier |
| `bun run build:dev` | Build in development mode |

---

## Deploying to Cloudflare Workers

Install Wrangler globally if you haven't already:
```bash
bun add -g wrangler
```

Authenticate with Cloudflare:
```bash
wrangler login
```

Deploy:
```bash
wrangler deploy
```

---

## Codebase overview

```
smart-plug-showcase/
├── src/
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── __root.tsx      # Root layout
│   │   ├── index.tsx       # Homepage
│   │   ├── shop.tsx        # Product listing
│   │   ├── product.$slug.tsx  # Product detail page
│   │   ├── cart.tsx        # Shopping cart
│   │   ├── checkout.tsx    # Checkout form
│   │   ├── about.tsx       # How it works
│   │   ├── contact.tsx     # Contact form
│   │   ├── shipping.tsx    # Shipping info
│   │   └── privacy.tsx     # Privacy policy
│   ├── components/
│   │   ├── SiteHeader.tsx  # Top navigation
│   │   └── SiteFooter.tsx  # Footer
│   ├── lib/
│   │   ├── products.ts     # Product catalog (5 SKUs)
│   │   ├── cart.tsx        # Cart context + localStorage persistence
│   │   └── utils.ts        # Tailwind class utilities
│   ├── assets/             # Images
│   ├── hooks/
│   │   └── use-mobile.tsx  # Responsive breakpoint hook
│   ├── router.tsx          # Router configuration
│   ├── server.ts           # Cloudflare Workers entry point
│   └── styles.css          # Global styles
├── package.json
├── vite.config.ts
├── wrangler.jsonc          # Cloudflare Workers config
└── tsconfig.json
```

### Key files

- **`src/lib/products.ts`** — static product catalog with 5 SKUs (Mini, Solo, Pack 3, Office Strip, Pro)
- **`src/lib/cart.tsx`** — `CartProvider` context with `localStorage` persistence
- **`src/routes/__root.tsx`** — root layout wrapping all pages with header, footer, and cart provider

### Tech stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start + TanStack Router |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| UI components | shadcn/ui (Radix UI) |
| Build tool | Vite |
| Package manager | Bun |
| Deployment | Cloudflare Workers |
