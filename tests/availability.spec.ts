import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';

test('homepage loads and exposes primary navigation', async ({ page }) => {
  const portfolio = new PortfolioPage(page);

  await portfolio.goto();

  await expect(page).toHaveURL(/.+/);
  await expect(portfolio.heroSection).toBeVisible();
  await expect(portfolio.navigationLinks.first()).toBeVisible();
});
