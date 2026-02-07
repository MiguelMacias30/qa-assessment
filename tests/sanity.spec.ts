import { test, expect } from '@playwright/test';

test('Sanity check - SauceDemo loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
