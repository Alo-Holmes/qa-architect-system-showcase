import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';
import { openPortfolio } from './helpers/portfolioTestHelper';

test.describe('contact and CV requirements', () => {
  test('exposes a visible CV download entry point', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    const cvLink = page.getByRole('link', { name: /download cv/i }).first();
    await expect(cvLink).toBeVisible();
  });

  test('exposes professional contact entry points', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    const contactLinks = page.locator('a[href]');
    await expect(contactLinks.filter({ hasText: /linkedin|github|whatsapp/i }).first()).toBeVisible();
  });
});
