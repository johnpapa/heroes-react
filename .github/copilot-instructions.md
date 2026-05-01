# Copilot Instructions — heroes-react

## Project Type

React 16 SPA (Create React App) with Redux + Redux-Saga for state management, json-server mock backend, and Cypress for e2e testing. JavaScript only (no TypeScript).

## JavaScript Conventions

- Use ES2018+ syntax (arrow functions, destructuring, spread, async/await)
- Single quotes for strings (enforced by Prettier and ESLint)
- 2-space indentation, no tabs
- No semicolons are not enforced — the project uses semicolons
- Prefer `const` over `let`; never use `var`
- Use template literals for string interpolation
- Follow the existing ESLint config in `.eslintrc.json` (extends airbnb + prettier)
- Prettier handles formatting — see `.prettierrc` for config
- `console` usage triggers a warning (`no-console: 1`); use `const captains = console` alias pattern for intentional logging (see `server.js`, API files)

## React Patterns

- **Class components** are used for the root `App.js` — do not convert to functional unless refactoring the whole app
- **Functional components with hooks** are used for feature modules (heroes, villains)
- **Custom hooks** (`useHeroes`, `useVillains`) wrap `useSelector` + `useDispatch` — always use hooks to connect to Redux, never `connect()` HOC
- **Lazy loading** — feature route components use `React.lazy()` + `Suspense` in `App.js`
- **Shared components** live in `src/components/` and are barrel-exported from `src/components/index.js`
- **Props** — `react/prop-types` is disabled; no PropTypes validation is used

## Redux Conventions

- **Action types** follow `'[Feature] VERB_NOUN'` format (e.g., `'[Heroes] LOAD_HERO'`)
- Each feature has four store files: `*.actions.js`, `*.reducer.js`, `*.saga.js`, `*.api.js`
- **Reducers** use switch/case statements (not createSlice or Redux Toolkit)
- **Side effects** are handled by Redux-Saga (generator functions), not thunks
- **API calls** use Axios with a base URL from `REACT_APP_API` env var
- **Store barrel** — `src/store/index.js` re-exports everything and calls `combineReducers`

## Styling

- Use Bulma CSS framework classes for layout and UI components
- Custom styles go in `src/styles.scss` (global SCSS)
- Component-specific CSS is minimal — prefer Bulma utility classes
- Font Awesome for icons

## Testing

- **E2E tests** use Cypress — specs live in `cypress/integration/`
- Test against the running app on port 8626
- Use `cy.request('POST', '/api/reset', data)` in `beforeEach` to reset json-server data
- Import seed data from `../../db` (the `db.js` module)
- No unit tests currently exist — if adding unit tests, use the built-in CRA Jest setup

## File Naming

- React components: `PascalCase.js` (e.g., `HeroDetail.js`, `NavBar.js`)
- Hooks: `camelCase.js` prefixed with `use` (e.g., `useHeroes.js`)
- Store files: `entity.type.js` (e.g., `hero.actions.js`, `villain.saga.js`)
- Config/utility files: `camelCase.js` or `kebab-case.js`

## Environment Variables

- `REACT_APP_API` — API base URL (proxied in dev, full URL in production)
- `PORT` — app server port (default 8626)
- Dev config in `.env.development`, production in `.env`

## Maintenance Matrix

| When this changes... | Also update... |
|---|---|
| New entity/feature module added | `db.json`, `db.js` (seed data), `routes.json` (rewrites), `src/store/index.js` (register reducers + re-exports), `src/index.js` (run saga), `src/App.js` (route + lazy import), `src/components/NavBar.js` (nav link), `cypress/integration/` (add e2e spec) |
| New shared component added | `src/components/index.js` (barrel re-export) |
| Redux action types changed | `*.actions.js`, `*.reducer.js`, `*.saga.js` (all three must stay in sync per feature) |
| API endpoint changed | `src/store/*.api.js` (HTTP calls), `db.json` (data shape), `routes.json` (rewrites), Cypress tests (assertions) |
| Port changed | `.env`, `.env.development`, `cypress.json`, `.vscode/launch.json`, `Dockerfile` (EXPOSE) |
| Styling or CSS framework changed | `src/styles.scss`, `src/App.js` (Bulma import), `package.json` (bulma dep), all component JSX |
| Dependencies updated | `package.json`, verify `node-sass` compatibility with Node version, update Dockerfile base image if needed |
| Docker config changed | `Dockerfile`, `docker-compose.yml`, `docker-compose.debug.yml` |
