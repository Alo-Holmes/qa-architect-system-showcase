import { test, expect } from '@playwright/test';
import { openPortfolio } from './helpers/portfolioTestHelper';

test('live portfolio homepage is reachable', async ({ page }) => {
  await openPortfolio(page);

  await expect(page).toHaveTitle(/angelo holmes|portfolio/i);
  await expect(page.locator('body')).toContainText(/system status|download cv|linkedin|github|whatsapp/i);
});
