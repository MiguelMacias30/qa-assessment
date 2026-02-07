# Bug Report — SauceDemo

---

## Bug 1 — Incorrect product images displayed

**Severity:** Medium  
**User(s) affected:** problem_user  
**Environment:** Chrome (latest), Windows 11  

### Steps to Reproduce
1. Navigate to https://www.saucedemo.com
2. Log in with username `problem_user` and password `secret_sauce`
3. Observe the product inventory page

### Expected Result
Each product should display its corresponding image.

### Actual Result
All products display the same incorrect image.

### Evidence
Automated test: `tests/problem-user.spec.ts`

### Notes
This issue may be caused by incorrect image mapping or frontend rendering logic for this user profile.

---

## Bug 2 — Performance degradation during inventory load

**Severity:** Medium  
**User(s) affected:** performance_glitch_user  
**Environment:** Chrome (latest), Windows 11  

### Steps to Reproduce
1. Navigate to https://www.saucedemo.com
2. Log in with username `performance_glitch_user` and password `secret_sauce`
3. Wait for the inventory page to load

### Expected Result
The inventory page should load within a reasonable time.

### Actual Result
The page experiences significant delay (~8 seconds) before rendering.

### Evidence
Manual testing observation during exploratory testing.

### Notes
This behavior negatively impacts user experience and may affect conversion rates.
