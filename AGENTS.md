# AGENTS.md — heroes-react

> Guide for AI agents and Copilot working in this repository.

## Project Overview

**Tour of Heroes** is a React single-page application demonstrating CRUD operations for heroes and villains. It uses Redux + Redux-Saga for state management, json-server as a mock REST API, Cypress for end-to-end testing, and Bulma for styling. The app is written in JavaScript (no TypeScript).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 16 (Create React App) |
| Language | JavaScript (JSX) |
| State management | Redux + Redux-Saga + Redux-Thunk |
| HTTP client | Axios |
| Routing | React Router v5 (`react-router-dom`) |
| CSS framework | Bulma, SASS, Font Awesome |
| Mock API | json-server on port 8627 (proxied from CRA dev server) |
| E2E testing | Cypress |
| Linting | ESLint (Airbnb config + Prettier) |
| Formatting | Prettier (single quotes, 2-space tabs) |
| Production server | Express (serves static build) |
| Containerization | Docker (multi-stage) + docker-compose |
| Package manager | npm |

## Repository Structure

```
heroes-react/
├── src/
│   ├── App.js                  # Root component (class-based, routes)
│   ├── index.js                # Entry point — Redux store + saga setup
│   ├── About.js                # Static About page
│   ├── heroes/                 # Hero feature module
│   │   ├── Heroes.js           # Container component (functional)
│   │   ├── HeroList.js         # Presentational list component
│   │   ├── HeroDetail.js       # Edit/add form component
│   │   └── useHeroes.js        # Custom hook — Redux dispatch/selectors
│   ├── villains/               # Villain feature module (mirrors heroes/)
│   │   ├── Villains.js
│   │   ├── VillainList.js
│   │   ├── VillainDetail.js
│   │   └── useVillains.js
│   ├── store/                  # Redux store
│   │   ├── index.js            # combineReducers + re-exports
│   │   ├── config.js           # API base URL from env
│   │   ├── action-utils.js     # Response parsers (parseList, parseItem)
│   │   ├── hero.actions.js     # Action type constants + action creators
│   │   ├── hero.reducer.js     # heroesReducer + selectedHeroReducer
│   │   ├── hero.saga.js        # Saga watchers/workers for hero CRUD
│   │   ├── hero.api.js         # Axios API calls for heroes
│   │   ├── villain.actions.js  # Villain action types + creators
│   │   ├── villain.reducer.js  # Villain reducers
│   │   ├── villain.saga.js     # Villain sagas
│   │   └── villain.api.js      # Axios API calls for villains
│   ├── components/             # Shared presentational components
│   │   ├── ButtonFooter.js
│   │   ├── CardContent.js
│   │   ├── HeaderBar.js
│   │   ├── HeaderBarBrand.js
│   │   ├── HeaderBarLinks.js
│   │   ├── InputDetail.js
│   │   ├── ListHeader.js
│   │   ├── Modal.js
│   │   ├── ModalYesNo.js
│   │   ├── NavBar.js
│   │   ├── NotFound.js
│   │   └── index.js            # Barrel file
│   └── styles.scss             # Global SASS styles
├── cypress/
│   ├── integration/heroes.spec.js  # E2E tests for hero CRUD
│   ├── fixtures/example.json
│   ├── plugins/index.js
│   └── support/
├── public/                     # Static assets (index.html, manifest)
├── db.json                     # json-server seed data (heroes + villains)
├── db.js                       # Programmatic seed data (used by Cypress reset)
├── routes.json                 # json-server route rewrites (/api/* → /*)
├── server.js                   # Express production server
├── Dockerfile                  # Multi-stage build (client + server)
├── docker-compose.yml          # Local Docker setup
├── .env                        # Production env vars
├── .env.development            # Dev env vars (API=api for proxy)
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
└── package.json                # Scripts, dependencies, proxy config
```

## Build & Run

```bash
# Install dependencies
npm install

# Run app + json-server together (dev mode)
npm run quick

# Run only the React dev server (port 3000, proxies API to 8627)
npm start

# Run only the json-server backend (port 8627)
npm run backend

# Production build
npm run build
```

### Proxy Configuration

The CRA dev server proxies API requests to json-server. Configured in `package.json`:

```json
"proxy": "http://localhost:8627/"
```

API calls use the relative path from `REACT_APP_API` env var (set to `api` in `.env.development`).

### Docker

```bash
# Build and run with docker-compose
docker-compose up --build

# App is served on port 8626
```

## Testing

### Cypress E2E Tests

```bash
# Open Cypress interactive runner (requires app + backend running)
npm run cypress

# Or run everything together
npm run e2e
```

Cypress tests live in `cypress/integration/`. They test hero CRUD operations against the running app and use `POST /api/reset` to reset json-server data between tests.

### Unit Tests

```bash
npm test
```

Uses Create React App's built-in Jest setup. Currently minimal test coverage.

## Linting & Formatting

```bash
# Lint
npm run lint

# Format
npm run format
```

ESLint uses Airbnb config with Prettier integration. Prettier enforces single quotes and 2-space indentation.

## Key Architecture Patterns

### Redux Store Pattern

Each entity (hero, villain) follows a consistent four-file pattern:

| File | Purpose |
|---|---|
| `*.actions.js` | Action type constants (`LOAD_HERO`, `LOAD_HERO_SUCCESS`, `LOAD_HERO_ERROR`) and action creators |
| `*.reducer.js` | Reducer with `{ loading, data, error }` state shape |
| `*.saga.js` | Redux-Saga watchers and workers for async CRUD operations |
| `*.api.js` | Axios HTTP calls (CRUD endpoints) |

### Custom Hooks

Feature modules use custom hooks (`useHeroes`, `useVillains`) to encapsulate Redux `useDispatch`/`useSelector` logic. Components call hook methods instead of dispatching actions directly.

### Component Organization

- **Container components** (`Heroes.js`, `Villains.js`) — manage state, effects, and event handlers
- **Presentational components** (`HeroList.js`, `HeroDetail.js`) — receive props, emit events
- **Shared components** (`components/`) — reusable UI elements (buttons, cards, modals)

### API Layer

- All HTTP calls go through Axios
- Base URL comes from `REACT_APP_API` environment variable
- Response parsing uses `parseList` and `parseItem` helpers in `action-utils.js`
- json-server route rewrites: `/api/*` → `/$1`

## Common Pitfalls

- **App.js is a class component** — the root `App` component uses `class extends Component`, unlike the feature components which are functional. Do not convert it without updating all route references
- **`withRouter` HOC is used** — `HeroList`, `HeroDetail`, `VillainList`, `VillainDetail` are wrapped with `withRouter` for `history` access
- **json-server must be running** — the app will show empty lists without the backend. Use `npm run quick` to start both
- **Cypress needs reset endpoint** — E2E tests call `POST /api/reset` which requires `json-server-reset` middleware
- **`console` is aliased as `captains`** — throughout the codebase, `const captains = console` is used as a pattern to avoid ESLint no-console warnings
- **Proxy only works in dev mode** — in production, the Express server in `server.js` serves static files; API must be configured separately
