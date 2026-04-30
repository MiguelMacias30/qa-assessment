# 🧪 Psynth — QA Engineer Take-Home Assessment

## 📌 Overview

This repository contains my submission for the QA Engineer take-home assessment for Psynth.
It showcases my approach to end-to-end test automation, test planning, CI/CD integration, and bug reporting, all based on exploratory and automated testing of the SauceDemo application.

The goal of this exercise was not only to automate flows, but to demonstrate quality-driven thinking, maintainability, and real-world QA practices.

---

## 🧰 Tech Stack

The following tools and technologies were selected to ensure reliability, readability, and scalability:

- 🎭 **Playwright** — E2E test automation framework  
- 🟦 **TypeScript** — Strong typing and maintainable test code  
- 🟢 **Node.js** — Test runtime and dependency management  
- ⚙️ **GitHub Actions** — Continuous Integration (CI)
- 📊 **Amikoo QA** — Test execution reporting and coverage tracking

---

## 🚀 Getting Started

### 📦 Install dependencies
```bash
npm install
npx playwright install
```

### ▶️ Run tests locally
```bash
npx playwright test
```

### 🗂️ Project Structure
```bash
tests/                  -->  End-to-end test cases (independent & reusable)
pages/                  -->  Page Object Model abstractions
playwright.config.ts    -->  Playwright configuration
TEST_PLAN.md            -->  Test plan with scope, risks and prioritization
BUG_REPORT.md           -->  Documented bugs found during exploratory testing
.github/workflows/      -->  CI pipeline configuration
```

---

## 📊 Amikoo QA Reporter

This project uses the [Amikoo QA reporter](https://www.npmjs.com/package/@muuktest/amikoo-reporter) to send test execution results to the Amikoo QA dashboard automatically after every run.

### Setup

1. **Install the reporter** (already included in `devDependencies`):
   ```bash
   npm install
   ```

2. **Set your Amikoo API key** as an environment variable:
   ```bash
   export AMIKOO_KEY=your_api_key_here
   ```
   You can find your API key in your Amikoo QA account settings.

   For local runs, you can add it to a `.env` file (make sure it is listed in `.gitignore`):
   ```
   AMIKOO_KEY=your_api_key_here
   ```

3. **Run tests** — results will be reported automatically:
   ```bash
   npx playwright test
   ```

### CI / GitHub Actions

To enable reporting in CI, add `AMIKOO_KEY` as a repository secret in GitHub:

1. Go to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name it `AMIKOO_KEY` and paste your API key
4. Reference it in your workflow:
   ```yaml
   env:
     AMIKOO_KEY: ${{ secrets.AMIKOO_KEY }}
   ```

---

## 🧠 QA Approach & Notes

✅ Tests are independent and can run in any order

🧩 Page Object Model is used to keep selectors and actions reusable

⏱️ No hard-coded waits — relying on Playwright's auto-waits and assertions

🧪 Test scenarios are derived from exploratory testing and aligned with the test plan

🔁 CI runs automatically on every push to main, ensuring fast feedback


## 📈 CI / CD

A GitHub Actions workflow is configured to:

Install dependencies

Run the full Playwright test suite

Upload test artifacts (reports/screenshots) for review

This ensures test results are visible without cloning the repository.


## 🐞 Bug Reporting

Identified issues found during exploratory testing are documented in **BUG_REPORT.md**.

Each bug report includes:
- Severity
- Affected user(s)
- Steps to reproduce
- Expected vs actual behavior
- Evidence or additional notes


## ✅ Final Notes
This submission focuses on quality over quantity: clean tests, clear structure, and realistic QA practices similar to what I would apply in a production environment.

Thanks for reviewing — happy to walk through the implementation or decisions made! 🚀
