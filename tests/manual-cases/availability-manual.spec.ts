import { test, expect } from '@playwright/test';
import { openPortfolio } from '../helpers/portfolioTestHelper';

test.describe('manual-case availability and navigation', () => {
  test('TC-001 access portfolio homepage @manual-case @manual-case-availability', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('body')).toBeVisible();
    await expect(page).toHaveURL(/https?:\/\//);
  });

  test('TC-002 navigate to primary portfolio sections @manual-case @manual-case-availability', async ({ page }) => {
    await openPortfolio(page);

    const navLinks = page.locator('a[href]');
    const linkTexts = (await navLinks.allTextContents()).join(' ').toLowerCase();
    expect(linkTexts).toMatch(/download cv|linkedin|github|whatsapp|about me|key-projects|demos/i);
  });

  test('TC-003 verify internal navigation integrity @manual-case @manual-case-availability', async ({ page }) => {
    await openPortfolio(page);

    const anchors = page.locator('a[href*="#"]');
    const count = await anchors.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC-005 verify unavailable page handling @manual-case @manual-case-availability', async ({ page }) => {
    await page.goto('/does-not-exist');
    await expect(page.locator('body')).toBeVisible();
  });
});
