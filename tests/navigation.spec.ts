import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';
import { openPortfolio } from './helpers/portfolioTestHelper';

test.describe('portfolio navigation', () => {
  test('exposes main navigation and allows section discovery', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    await expect(portfolio.navigationLinks.first()).toBeVisible();

    const navLabels = await portfolio.navigationLinks.allTextContents();
    const joinedLabels = navLabels.join(' ').toLowerCase();
    expect(joinedLabels).toMatch(/about|profile|experience|contact|cv|telemetry/i);
  });

  test('supports anchor-based section access when present', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    const anchors = page.locator('a[href*="#"]');
    if (await anchors.count()) {
      await expect(anchors.first()).toBeVisible();
    }
  });
});
