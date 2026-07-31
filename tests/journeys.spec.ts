import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';
import { expectPageContains, openPortfolio } from './helpers/portfolioTestHelper';

test.describe('portfolio journeys', () => {
  test('shows the core profile and experience content', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    await expect(portfolio.heroSection).toBeVisible();
    await expectPageContains(page, /profile|experience|skills|career|engineer/i);
  });

  test('provides CV download and contact links', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    const cvLink = page.locator('a[href*=".pdf"], a[href*="cv" i]').first();
    await expect(cvLink).toBeVisible();

    const contactLinks = page.locator('a[href]');
    await expect(contactLinks.first()).toBeVisible();
  });

  test('renders telemetry health information when present', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);
    await expectPageContains(page, /telemetry|status|build|health/i);
  });
});
