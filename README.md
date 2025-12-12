# Wingy Restaurant

Static Next.js (v14) + TypeScript + Tailwind CSS site scaffold.

## Requirements

- Node.js 20+
- pnpm (recommended via Corepack)

## Install

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Then open http://localhost:3000.

## Build (static export)

```bash
pnpm build
```

This outputs a fully static site into `out/` (see `next.config.mjs` where `output: "export"` is configured).

## Serve the built site locally

```bash
pnpm start
```
