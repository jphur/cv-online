# CV-ONLINE

A lightweight, responsive online Curriculum Vitae built with Vue 3 and Quasar.  
Designed for easy local development (with or without Docker) and fast hot-reload during development.

Key features

-   Vue 3 + Quasar for UI components and layout.
-   Sass-powered theming in [src/assets/quasar.variables.scss](src/assets/quasar.variables.scss) and [src/assets/style.scss](src/assets/style.scss).
-   Simple component structure under [src/modules](src/modules) and [src/components](src/components).
-   Docker-ready for reproducible dev environments.

Quick start (Docker)

1. Build and run the container:

```sh
docker compose up --build
# or detached
docker compose up --build -d
```

2. Open http://localhost:5173

Files used by Docker:

-   [docker-compose.yml](docker-compose.yml)
-   [Dockerfile](Dockerfile)

Local development

1. Install dependencies:

```sh
npm install
# or
pnpm install
```

2. Start dev server:

```sh
npm run dev
# or
pnpm dev
```

The Vite dev server entry is [src/main.js](src/main.js) which mounts the app defined in [src/App.vue](src/App.vue).

Build for production

```sh
npm run build
# or
pnpm build
```

Project structure (high level)

-   [index.html](index.html) — app entry
-   [package.json](package.json) — scripts & deps
-   [src/](src) — Vue application source
    -   [src/main.js](src/main.js)
    -   [src/App.vue](src/App.vue)
    -   [src/modules/](src/modules) — main sections (e.g. [`Home`](src/modules/home.vue))

Author

-   Jorge Penadés Hurtado — https://github.com/jphur
