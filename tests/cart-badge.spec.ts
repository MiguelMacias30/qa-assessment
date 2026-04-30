import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test.describe('Cart badge', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Badge count increases as items are added to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addItemToCart('sauce-labs-backpack');
    expect(await inventoryPage.getCartBadgeCount()).toBe(1);

    await inventoryPage.addItemToCart('sauce-labs-bike-light');
    expect(await inventoryPage.getCartBadgeCount()).toBe(2);

    await inventoryPage.addItemToCart('sauce-labs-bolt-t-shirt');
    expect(await inventoryPage.getCartBadgeCount()).toBe(3);
  });

  test('Badge count decreases when an item is removed from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.addItemToCart('sauce-labs-bike-light');
    expect(await inventoryPage.getCartBadgeCount()).toBe(2);

    await inventoryPage.removeItemFromCart('sauce-labs-backpack');
    expect(await inventoryPage.getCartBadgeCount()).toBe(1);
  });

  test('Badge disappears when all items are removed from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addItemToCart('sauce-labs-backpack');
    expect(await inventoryPage.getCartBadgeCount()).toBe(1);

    await inventoryPage.removeItemFromCart('sauce-labs-backpack');
    const badgeCount = await inventoryPage.cartBadge.count();
    expect(badgeCount).toBe(0);
  });
});
