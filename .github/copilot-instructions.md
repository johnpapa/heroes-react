# Copilot Instructions — heroes-react

## Project Context

This is a React SPA (Create React App) using Redux + Redux-Saga for state management, json-server as a mock API, and Cypress for E2E testing. All code is JavaScript (no TypeScript).

## Code Style

- **Formatting**: Prettier — single quotes, 2-space indentation, no tabs
- **Linting**: ESLint with Airbnb config + Prettier plugin
- **Quotes**: Always use single quotes (enforced by both ESLint and Prettier)
- **Semicolons**: Required (Prettier default)
- Verify changes with `npm run lint` before committing

## React Conventions

- Feature components are **functional components** with hooks (`useState`, `useEffect`, `useCallback`)
- `App.js` is a **class component** — do not refactor it to functional without updating all route bindings
- Use `withRouter` HOC when a component needs `history` access (React Router v5 pattern)
- Use **lazy loading** with `React.lazy()` and `Suspense` for route-level code splitting
- Props flow down, events flow up — presentational components receive data via props and call handler functions

## Redux Patterns

### File Organization

Each entity follows this four-file pattern in `src/store/`:

```
<entity>.actions.js   → Action type constants + action creators
<entity>.reducer.js   → Reducer function with { loading, data, error } shape
<entity>.saga.js      → Redux-Saga watchers and workers
<entity>.api.js       → Axios HTTP functions
```

### Action Naming

Action types follow the pattern: `[Entity] VERB_NOUN` with `_SUCCESS` and `_ERROR` suffixes:

```javascript
export const LOAD_HERO = '[Heroes] LOAD_HERO';
export const LOAD_HERO_SUCCESS = '[Heroes] LOAD_HERO_SUCCESS';
export const LOAD_HERO_ERROR = '[Heroes] LOAD_HERO_ERROR';
```

### Reducer State Shape

All entity reducers use this consistent shape:

```javascript
{ loading: false, data: [], error: undefined }
```

### Custom Hooks

Access Redux state through custom hooks (`useHeroes`, `useVillains`), not by connecting components directly:

```javascript
const { heroes, selectedHero, getHeroes, addHero } = useHeroes();
```

Wrap dispatchers that may be called inside `useEffect` with `useCallback`.

### Adding a New Entity

1. Create `src/store/<entity>.actions.js` with LOAD/UPDATE/DELETE/ADD action types and creators
2. Create `src/store/<entity>.reducer.js` with `{ loading, data, error }` state
3. Create `src/store/<entity>.saga.js` with watcher/worker sagas for each action
4. Create `src/store/<entity>.api.js` with Axios CRUD functions
5. Register the reducer in `src/store/index.js` via `combineReducers`
6. Run the saga in `src/index.js` via `sagaMiddleware.run()`
7. Create a `use<Entity>.js` custom hook in the feature directory
8. Add seed data to `db.json` and route rewrites to `routes.json`

## API Conventions

- All HTTP calls use **Axios**
- Base URL comes from `REACT_APP_API` environment variable (`process.env.REACT_APP_API`)
- API functions return parsed data using `parseList`/`parseItem` from `action-utils.js`
- json-server rewrites `/api/*` → `/$1` (configured in `routes.json`)
- The CRA dev server proxies to `http://localhost:8627/` (set in `package.json`)

## Component Structure

### Feature Module Layout

```
src/<feature>/
├── <Feature>.js        # Container — state, effects, handlers
├── <Feature>List.js    # Presentational — renders list of items
├── <Feature>Detail.js  # Presentational — edit/add form
└── use<Feature>.js     # Custom hook — Redux bridge
```

### Shared Components

Reusable components live in `src/components/` and are exported via `src/components/index.js` barrel file. Always add new shared components to the barrel.

## Styling

- Global styles in `src/styles.scss` (SASS)
- Bulma CSS framework for layout and components
- Font Awesome for icons
- No CSS modules or styled-components — all styling is global

## Environment Variables

| Variable | Dev Value | Purpose |
|---|---|---|
| `REACT_APP_API` | `api` | API base path (proxied in dev) |
| `PORT` | `8626` | Express production server port |
| `NODE_ENV` | `development` | Environment mode |

## Testing

- **E2E**: Cypress tests in `cypress/integration/` — test full CRUD flows
- **Unit**: Jest (CRA built-in) — run with `npm test`
- Cypress resets data via `POST /api/reset` before each test
- Always keep json-server running when executing Cypress tests

## Maintenance Matrix

| When you change... | Also update... |
|---|---|
| Redux action types | Corresponding reducer, saga, and API file |
| Store shape (new reducer) | `src/store/index.js` (combineReducers) and `src/index.js` (saga runner) |
| API endpoints | `routes.json`, corresponding `*.api.js`, and Cypress tests |
| Seed data (`db.json`) | `db.js` (used by Cypress reset) and Cypress test assertions |
| Shared components | `src/components/index.js` barrel file |
| Environment variables | `.env`, `.env.development`, `Dockerfile` ARG/ENV, `docker-compose.yml` |
| Package scripts | `README.md` Getting Started section |
| Routes in `App.js` | `NavBar.js` links and Cypress test navigation |
