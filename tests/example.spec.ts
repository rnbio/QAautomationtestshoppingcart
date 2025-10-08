import { test, expect } from '@playwright/test';

test('full shopping flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('#checkout').click();

  await page.fill('#first-name', 'Robin');
  await page.fill('#last-name', 'Ng');
  await page.fill('#postal-code', '2009');
  await page.locator('#continue').click();

  await page.locator('#finish').click();
  await expect(page).toHaveURL(/.*checkout-complete.html/);
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  await page.screenshot({ path: 'checkout-success.png', fullPage: true });
});
