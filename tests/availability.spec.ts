import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';
import { openPortfolio } from './helpers/portfolioTestHelper';

test('homepage loads and exposes primary navigation', async ({ page }) => {
  const portfolio = new PortfolioPage(page);

  await openPortfolio(page);

  await expect(page).toHaveURL(/https?:\/\//);
  await expect(page.locator('body')).toBeVisible();
  const linkCount = await page.locator('a[href]').count();
  expect(linkCount).toBeGreaterThan(0);
});
