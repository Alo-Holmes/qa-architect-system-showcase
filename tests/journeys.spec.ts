import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';

test.describe('portfolio journeys', () => {
  test('shows the core profile and experience content', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    await expect(page.locator('main')).toBeVisible();
    const bodyText = await page.locator('body').innerText();
    await expect(bodyText.toLowerCase()).toMatch(/profile|experience|skills|career|engineer/i);
  });

  test('provides CV download and contact links', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    const cvLink = page.locator('a[href*=".pdf"], a[href*="cv" i]').first();
    await expect(cvLink).toBeVisible();

    const contactLinks = page.locator('a[href]');
    await expect(contactLinks.first()).toBeVisible();
  });

  test('renders telemetry health information when present', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    const bodyText = await page.locator('body').innerText();
    await expect(bodyText.toLowerCase()).toMatch(/telemetry|status|build|health/i);
  });
});
