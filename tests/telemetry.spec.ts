import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';

test.describe('telemetry monitoring', () => {
  test('surfaces telemetry-related content when present', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    const bodyText = (await page.locator('body').innerText()).toLowerCase();
    await expect(bodyText).toMatch(/telemetry|status|health|build/i);
  });

  test('supports visiting the telemetry section when the page exposes it', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    const telemetryLink = page.getByRole('link', { name: /telemetry/i }).first();
    if (await telemetryLink.count()) {
      await expect(telemetryLink).toBeVisible();
      await telemetryLink.click();
    }
  });
});
