# Heroes React — Agent Guide

This is a **React single-page application** (SPA) — a demo/comparison app showing the Tour of Heroes concept in React. It uses a json-server mock backend, Redux with Redux-Saga for state management, and Cypress for end-to-end testing.

Part of a family of comparative apps: [Angular](https://github.com/johnpapa/heroes-angular), [React](https://github.com/johnpapa/heroes-react), [Svelte](https://github.com/johnpapa/heroes-svelte), and [Vue](https://github.com/johnpapa/heroes-vue).

## Repository Structure

```
heroes-react/
├── .github/
│   ├── copilot-instructions.md     # Coding conventions for AI agents
│   ├── workflows/
│   │   ├── ci.yml                  # PR validation (lint + build)
│   │   └── copilot-setup-steps.yml # Cloud agent environment setup
│   ├── ISSUE_TEMPLATE/             # Bug report and feature request forms
│   ├── PULL_REQUEST_TEMPLATE.md    # PR checklist
│   └── dependabot.yml              # Dependency update automation
├── cypress/
│   ├── fixtures/                   # Test fixture data
│   ├── integration/                # E2E test specs (heroes.spec.js)
│   ├── plugins/                    # Cypress plugins
│   └── support/                    # Cypress support files
├── public/                         # Static assets served by CRA
├── src/
│   ├── components/                 # Shared UI components (Modal, NavBar, HeaderBar, etc.)
│   │   └── index.js                # Barrel re-export for all shared components
│   ├── heroes/                     # Heroes feature module
│   │   ├── Heroes.js               # Route container (lazy-loaded)
│   │   ├── HeroList.js             # List display component
│   │   ├── HeroDetail.js           # Edit/add form component
│   │   └── useHeroes.js            # Custom hook bridging Redux to component
│   ├── villains/                   # Villains feature module (mirrors heroes/)
│   │   ├── Villains.js
│   │   ├── VillainList.js
│   │   ├── VillainDetail.js
│   │   └── useVillains.js
│   ├── store/                      # Redux store, actions, reducers, sagas, API calls
│   │   ├── index.js                # combineReducers + barrel re-exports
│   │   ├── config.js               # API base URL from env
│   │   ├── action-utils.js         # Shared response parsers
│   │   ├── hero.actions.js         # Action type constants + action creators
│   │   ├── hero.reducer.js         # Heroes + selectedHero reducers
│   │   ├── hero.saga.js            # Saga side-effects for hero CRUD
│   │   ├── hero.api.js             # Axios HTTP calls for heroes
│   │   ├── villain.actions.js      # Action type constants + action creators
│   │   ├── villain.reducer.js      # Villains + selectedVillain reducers
│   │   ├── villain.saga.js         # Saga side-effects for villain CRUD
│   │   └── villain.api.js          # Axios HTTP calls for villains
│   ├── App.js                      # Root component with routing (class component)
│   ├── About.js                    # About page
│   ├── index.js                    # Entry point — Redux store + saga setup + ReactDOM.render
│   └── styles.scss                 # Global SCSS styles
├── .vscode/
│   ├── launch.json                 # Chrome debug config (port 8626)
│   └── settings.json               # Peacock color + ESLint enabled
├── db.json                         # json-server seed data (heroes + villains)
├── db.js                           # Seed data as JS module (used by Cypress)
├── routes.json                     # json-server route rewrites (/api/* → /*)
├── server.js                       # Express production server (serves built app)
├── cypress.json                    # Cypress config (port 8626)
├── Dockerfile                      # Multi-stage Docker build (Node 10 → production)
├── docker-compose.yml              # Docker compose for running the app
├── docker-compose.debug.yml        # Docker compose debug override
├── .eslintrc.json                  # ESLint config (airbnb-based + prettier)
├── .prettierrc                     # Prettier config (single quotes, 2-space tabs)
├── .env                            # Production env (port 8626, Azure API URL)
├── .env.development                # Dev env (port 8626, proxied API)
├── package.json                    # Dependencies, scripts, proxy config
└── README.md                       # Project overview and getting started
```

## Tech Stack

- **Language:** JavaScript (ES2018, JSX)
- **Framework:** React 16 (class components + hooks)
- **State management:** Redux 4 + Redux-Saga
- **Routing:** React Router v5 with lazy-loaded routes
- **HTTP client:** Axios
- **CSS:** Bulma + SASS + Font Awesome
- **Mock backend:** json-server on port 8627 with route rewriting
- **Bundler:** Create React App (react-scripts 3.x)
- **Production server:** Express (server.js)
- **Container:** Docker multi-stage build

## Build & Run

```bash
# Install dependencies
npm install

# Run frontend + json-server backend concurrently
npm run quick

# Frontend only (requires separate API)
npm start

# Backend only (json-server on port 8627)
npm run backend

# Production build
npm run build

# Production server (serves built app on port 8626)
node server.js
```

**Ports:**
- `8626` — React dev server / production Express server
- `8627` — json-server mock API

The CRA proxy in `package.json` forwards `/api/*` requests from port 8626 to json-server on port 8627 during development.

## Testing

**E2E tests (Cypress):**

```bash
# Open Cypress test runner (interactive)
npm run cypress

# Run everything (app + backend + Cypress)
npm run e2e
```

- Tests live in `cypress/integration/`
- Cypress uses the same seed data from `db.js` and resets via `json-server-reset`
- Configured in `cypress.json` with port 8626

**Unit tests (react-scripts):**

```bash
npm test
```

Uses the built-in CRA test runner (Jest). No unit test files currently exist.

## Key Patterns and Conventions

- **Feature modules** — heroes and villains each get their own directory under `src/` with a container component, list, detail, and a custom hook
- **Redux pattern** — each feature has four store files: `*.actions.js` (constants + creators), `*.reducer.js`, `*.saga.js` (side effects), `*.api.js` (HTTP calls)
- **Barrel exports** — `src/store/index.js` re-exports all actions, reducers, and sagas; `src/components/index.js` re-exports all shared components
- **Action type naming** — `'[Feature] VERB_NOUN'` format (e.g., `'[Heroes] LOAD_HERO'`)
- **Custom hooks** — `useHeroes` and `useVillains` encapsulate `useSelector` + `useDispatch`, providing a clean API to container components
- **Lazy loading** — feature modules are code-split with `React.lazy()` and `Suspense`
- **API config** — base URL comes from `REACT_APP_API` environment variable via `src/store/config.js`

## Adding a New Feature Module

To add a new entity (e.g., "sidekicks"):

1. **Create seed data** — add a `"sidekicks"` array to `db.json` and `db.js`
2. **Add route rewrite** — add `"/sidekick": "/sidekicks"` to `routes.json`
3. **Create store files** in `src/store/`:
   - `sidekick.actions.js` — action types and creators following the `[Sidekicks] VERB_NOUN` pattern
   - `sidekick.api.js` — Axios CRUD functions using the API config
   - `sidekick.reducer.js` — reducer + selectedSidekickReducer
   - `sidekick.saga.js` — saga watchers and workers for each action
4. **Register in store** — update `src/store/index.js`:
   - Add `sidekicksReducer` and `selectedSidekickReducer` to `combineReducers`
   - Re-export all new modules (`export * from './sidekick.actions'`, etc.)
5. **Run the saga** — add `sagaMiddleware.run(sidekickSaga)` in `src/index.js`
6. **Create feature directory** `src/sidekicks/`:
   - `Sidekicks.js` — container component
   - `SidekickList.js` — list display
   - `SidekickDetail.js` — edit/add form
   - `useSidekicks.js` — custom hook
7. **Add route** — add `<Route path="/sidekicks" component={Sidekicks} />` in `App.js` with lazy import
8. **Add nav link** — update `src/components/NavBar.js`
9. **Add Cypress tests** — create `cypress/integration/sidekicks.spec.js`

## Screen Size / Responsive Rules

- Bulma handles responsive layout via its grid system (`columns`, `column`)
- The app uses a sidebar nav (`NavBar`) + main content area pattern
- No custom breakpoints — relies on Bulma defaults

## Common Pitfalls

- **Must run both servers** — `npm run quick` starts both the React dev server and json-server. Running `npm start` alone will fail API calls
- **json-server reset** — Cypress tests reset data via `json-server-reset` POST to `/api/reset`. If tests fail with stale data, restart json-server
- **Port conflicts** — the app expects 8626 (frontend) and 8627 (backend) to be free
- **node-sass version** — `node-sass@4.x` requires Node.js < 15. Use Node 14 for local development
- **Barrel re-exports** — when adding new shared components, update `src/components/index.js`; when adding new store modules, update `src/store/index.js`
- **Docker image is stale** — the Dockerfile uses `node:10.13-alpine` which is very old; update if building Docker images
