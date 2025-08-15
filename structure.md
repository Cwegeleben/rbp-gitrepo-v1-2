# Monorepo Structure

This document describes the folder and file structure of the `rbp-monorepo-v1-2` repository.

## Root
- `.shopify/` — Shopify configuration and metadata
- `.git/` — Git version control folder
- `shopify.app.toml` — Shopify app configuration
- `docs/` — Documentation
  - `adr/` — Architecture Decision Records
  - `structure.md` — This structure overview
- `src/` — Source code
  - `apps/` — Application code
    - `gateway/api-gateway/` — Remix server (App Proxy)
    - `admin/admin.portal/` — Embedded admin app
    - `storefront/rbp-theme/` — Theme extension (blocks/assets)
  - `packages/` — Shared packages
    - `access/`
    - `catalog/`
    - `builds/`
    - `checkout/`
  - `shared/` — Shared code
    - `sdk/`
    - `ui/`
  - `modules/` — Public UI modules (no "rbp/" prefix)
- `.gitignore` — Git ignore rules

## Notes
- All source code lives under `src/`.
- Documentation is under `docs/`.
- Each app and package is separated for modularity and scalability.

For more details, see individual README files in each subfolder.

## Coding Standards

- **No Hard Coding:** Avoid hard coding values such as API keys, secrets, URLs, or configuration settings. Use environment variables, configuration files, or constants instead. This helps maintain flexibility, security, and scalability across the monorepo.
