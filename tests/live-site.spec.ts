import { test, expect } from '@playwright/test';

test('live portfolio homepage is reachable', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/portfolio|alo|holmes/i);
  await expect(page.locator('main')).toBeVisible();
});
