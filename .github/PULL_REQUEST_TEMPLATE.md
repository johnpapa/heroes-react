## Description

<!-- What does this PR do? One or two sentences. -->

## Changes

<!-- List the files changed and why. -->

- 

## How to Test

1. `npm install`
2. `npm run quick`
3. Navigate to the affected feature (Heroes/Villains)
4. Verify the change works as expected
5. Run `npm run cypress` to confirm e2e tests pass

## Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Cypress e2e tests pass (`npm run cypress`)
- [ ] Seed data updated in both `db.json` and `db.js` (if data shape changed)
- [ ] Store barrel re-exports updated in `src/store/index.js` (if new store files added)
- [ ] Component barrel updated in `src/components/index.js` (if new shared components added)
