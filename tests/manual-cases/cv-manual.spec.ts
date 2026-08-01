import { test, expect } from '@playwright/test';
import { openPortfolio } from '../helpers/portfolioTestHelper';

test.describe('manual-case CV retrieval', () => {
  test('TC-010 download current curriculum vitae @manual-case @manual-case-cv', async ({ page }) => {
    await openPortfolio(page);
    const cvLink = page.getByRole('link', { name: /download cv/i }).first();
    await expect(cvLink).toBeVisible();
  });

  test('TC-011 validate downloaded curriculum vitae @manual-case @manual-case-cv', async ({ page }) => {
    await openPortfolio(page);
    const cvLink = page.getByRole('link', { name: /download cv/i }).first();
    await expect(cvLink).toHaveAttribute('href', /cv|pdf/i);
  });
});
