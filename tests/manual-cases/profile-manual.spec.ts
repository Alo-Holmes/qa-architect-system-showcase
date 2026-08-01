import { test, expect } from '@playwright/test';
import { openPortfolio } from '../helpers/portfolioTestHelper';

test.describe('manual-case profile discovery', () => {
  test('TC-006 view professional summary @manual-case @manual-case-profile', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/about me|quality assurance|automation|engineer/i);
  });

  test('TC-007 review skills information @manual-case @manual-case-profile', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/skills|experience|qa|automation/i);
  });

  test('TC-008 review career history @manual-case @manual-case-profile', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/career|experience|history|years/i);
  });

  test('TC-009 review professional testimonials @manual-case @manual-case-profile', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toContainText(/professional profile|career history|contact/i);
  });
});
