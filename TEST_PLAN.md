# Test Plan — SauceDemo (Psynth QA Assessment)

## Scope
This test plan covers the core user journeys of the SauceDemo e-commerce application, focusing on the most business-critical flows:

- Authentication (login)
- Product browsing
- Cart management
- Checkout process

These areas were selected because they directly impact the user’s ability to complete a purchase, which is the primary goal of the application.

## In Scope
- Login page
- Products inventory page
- Cart page
- Checkout (information, overview, completion)
- Behavior differences between user types

## Out of Scope
- Backend/API validation (no API access available)
- Cross-browser testing (limited by time constraints)
- Accessibility testing
- Visual regression testing beyond obvious UI defects

---

## Test Cases (Prioritized)

### P0 — Critical
1. Successful login with valid credentials (`standard_user`)
2. Locked out user cannot log in and receives an error message (`locked_out_user`)
3. User can add a product to the cart and complete checkout successfully
4. Checkout cannot proceed when required user information is missing

### P1 — High
5. Product images render correctly and match the product description (`standard_user`)
6. Cart badge updates correctly when items are added or removed

### P2 — Medium
7. Product images are incorrect for `problem_user`
8. Application experiences significant loading delay for `performance_glitch_user`
9. User can remove items from the cart
10. Sorting products by name works correctly

---

## Cross-User Scenarios
- Compare product image rendering between `standard_user` and `problem_user`
- Compare page load performance between `standard_user` and `performance_glitch_user`

---

## Risk Assessment
- **Performance risks:** Slow page load may lead to user abandonment.
- **UI data binding risks:** Incorrect product images can confuse users and reduce trust.
- **Authentication risks:** Improper handling of locked users may expose security issues.
- **Checkout risks:** Missing validation could allow incomplete orders.

---

## Notes
Due to the limited time constraint (2–3 hours), the test plan prioritizes high-impact user flows and known problematic areas of the application.
