import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addBackpackToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async addItemToCart(itemTestId: string) {
    await this.page.locator(`[data-test="add-to-cart-${itemTestId}"]`).click();
  }

  async removeItemFromCart(itemTestId: string) {
    await this.page.locator(`[data-test="remove-${itemTestId}"]`).click();
  }

  async getCartBadgeCount(): Promise<number> {
    const text = await this.cartBadge.textContent();
    return parseInt(text ?? '0', 10);
  }
}
