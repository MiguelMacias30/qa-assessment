import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Problem user displays incorrect product images', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('problem_user', 'secret_sauce');

  const images = page.locator('.inventory_item_img img');

  const firstImageSrc = await images.nth(0).getAttribute('src');
  const secondImageSrc = await images.nth(1).getAttribute('src');

  expect(firstImageSrc).toBe(secondImageSrc);
});
