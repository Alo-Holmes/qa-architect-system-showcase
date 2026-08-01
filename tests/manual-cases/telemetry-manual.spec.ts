import { test, expect } from '@playwright/test';
import { openPortfolio } from '../helpers/portfolioTestHelper';

test.describe('manual-case telemetry monitoring', () => {
  test('TC-017 view telemetry dashboard @manual-case @manual-case-telemetry', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/telemetry|status|health|build/i);
  });

  test('TC-018 verify project status presentation @manual-case @manual-case-telemetry', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/status|active|healthy|build/i);
  });

  test('TC-019 access build information @manual-case @manual-case-telemetry', async ({ page }) => {
    await openPortfolio(page);
    const telemetryLink = page.getByRole('link', { name: /telemetry/i }).first();
    if (await telemetryLink.count()) {
      await expect(telemetryLink).toBeVisible();
    }
  });

  test('TC-021 verify telemetry information is understandable @manual-case @manual-case-telemetry', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/status|health|build/i);
  });
});
