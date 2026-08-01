import { test, expect } from '@playwright/test';
import { openPortfolio } from '../helpers/portfolioTestHelper';

test.describe('manual-case professional networking', () => {
  test('TC-013 contact via email @manual-case @manual-case-networking', async ({ page }) => {
    await openPortfolio(page);
    const emailLink = page.getByRole('link', { name: /email/i }).first();
    await expect(emailLink).toBeVisible();
  });

  test('TC-014 access GitHub profile @manual-case @manual-case-networking', async ({ page }) => {
    await openPortfolio(page);
    const githubLink = page.getByRole('link', { name: /github/i }).first();
    await expect(githubLink).toBeVisible();
  });

  test('TC-015 access LinkedIn profile @manual-case @manual-case-networking', async ({ page }) => {
    await openPortfolio(page);
    const linkedinLink = page.getByRole('link', { name: /linkedin/i }).first();
    await expect(linkedinLink).toBeVisible();
  });

  test('TC-016 contact via WhatsApp @manual-case @manual-case-networking', async ({ page }) => {
    await openPortfolio(page);
    const whatsappLink = page.getByRole('link', { name: /whatsapp/i }).first();
    await expect(whatsappLink).toBeVisible();
  });
});
