import { test, expect } from '@playwright/test';

// ✅ Test 1: Check that the Apple homepage has "Apple" in the title
test('homepage has title', async ({ page }) => {
  // Go to Apple’s homepage
  await page.goto('https://www.apple.com/');

  // Expect the title to include the word “Apple”
  await expect(page).toHaveTitle(/Apple/);
});

// ✅ Test 2: Check that the “Mac” link works
test('navigate to Mac section', async ({ page }) => {
  await page.goto('https://www.apple.com/');

  // Locate the global navigation bar
  const nav = page.locator('nav.globalnav');

  // Click the first Mac link inside the top nav
  await nav.getByRole('link', { name: 'Mac' }).first().click();

  // Verify navigation worked
  await expect(page).toHaveTitle(/Mac/);
});


