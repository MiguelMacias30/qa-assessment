# Psynth — QA Engineer Take-Home Assessment

## Overview
This repository contains the QA take-home assessment for Psynth, including a test plan, automated end-to-end tests, CI integration, and documented bug reports based on exploratory testing of the SauceDemo application.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions

## Setup Instructions

### Install dependencies
```bash
npm install
npx playwright install
```

### Run tests locally
```bash
npx playwright test
```

### Test Structure
tests/                 # End-to-end test cases
pages/                 # Page Object Model abstractions
playwright.config.ts   # Playwright configuration

### Notes
Tests were designed based on exploratory testing of the SauceDemo application and aligned with the provided test plan.
