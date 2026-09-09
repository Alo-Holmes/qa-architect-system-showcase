# QA Automation Architecture Showcase

This repository contains a Playwright + TypeScript automation framework for validating the live portfolio site and the local mock portfolio experience.

## Current test packs

The suite now includes two distinct Playwright packs:

1. Smoke / regression pack
   - The existing stable suite for core portfolio validation.
   - Covers homepage reachability, navigation, CV/contact visibility, profile discovery, and telemetry presence.

2. Granular manual-case-aligned pack
   - A more detailed suite that maps closely to the manual test cases.
   - Organized under the tests/manual-cases folder.
   - Intended for deeper validation and traceability to the manual test matrix.

## Test structure

- tests/availability.spec.ts
- tests/contact-and-cv.spec.ts
- tests/journeys.spec.ts
- tests/live-site.spec.ts
- tests/navigation.spec.ts
- tests/telemetry.spec.ts
- tests/manual-cases/availability-manual.spec.ts
- tests/manual-cases/profile-manual.spec.ts
- tests/manual-cases/cv-manual.spec.ts
- tests/manual-cases/networking-manual.spec.ts
- tests/manual-cases/telemetry-manual.spec.ts

## Running the suite

Run the full suite (all tests):

`powershell
npx playwright test
`

Run the smoke / regression pack:

`powershell
npx playwright test --grep "@smoke"
`

Run the granular manual-case pack:

`powershell
npx playwright test --grep "@manual-case"
`

Run a specific journey or tag group:

`powershell
npx playwright test --grep "@manual-case-availability"
npx playwright test --grep "@manual-case-profile"
npx playwright test --grep "@manual-case-cv"
npx playwright test --grep "@manual-case-networking"
npx playwright test --grep "@manual-case-telemetry"
`

## NPM shortcuts

The following convenience scripts are available:

`powershell
npm run test
npm run test:manual
npm run test:smoke
npm run test:headed
`

## Local mock server

The framework uses the local mock portfolio server by default.

`powershell
npm run mock:server
`

Set `TEST_TARGET=live` to run against the published portfolio instead. `BASE_URL`
can be used to override either target URL.

`powershell
$env:TEST_TARGET = 'live'
npx playwright test
Remove-Item Env:TEST_TARGET
`

Use `TEST_TARGET=mock` for deterministic local and CI runs. The mock server is
started automatically for that target and is not started for live runs.

Live Site:

$env:TEST_TARGET = 'live'
npm test
Remove-Item Env:TEST_TARGET

Specific Live Test:

$env:TEST_TARGET = 'live'
npx playwright test tests/live-site.spec.ts
Remove-Item Env:TEST_TARGET

Override the BaseURL:

$env:TEST_TARGET = 'live'
$env:BASE_URL = 'https://example.com'
npm test
Remove-Item Env:TEST_TARGET
Remove-Item Env:BASE_URL

## Notes

- The default test command executes the full suite.
- Tags are provided so specific test packs or journeys can be targeted without changing the default behavior.
- The current stable suite remains the baseline regression/smoke pack.
