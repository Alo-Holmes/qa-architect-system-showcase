import { test, expect } from '@playwright/test';
import { openPortfolio } from './helpers/portfolioTestHelper';

test('live portfolio homepage is reachable', async ({ page }) => {
  await openPortfolio(page);

  await expect(page).toHaveTitle(/portfolio|alo|holmes/i);
});
