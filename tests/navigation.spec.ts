import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';
import { openPortfolio } from './helpers/portfolioTestHelper';

test.describe('portfolio navigation', () => {
  test('exposes main navigation and allows section discovery', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    const navLinks = page.locator('a[href]');
    await expect(navLinks.first()).toBeVisible();

    const linkTexts = await navLinks.allTextContents();
    const joinedLabels = linkTexts.join(' ').toLowerCase();
    expect(joinedLabels).toMatch(/download cv|linkedin|github|whatsapp|about me|key-projects|demos/i);
  });

  test('supports anchor-based section access when present', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await openPortfolio(page);

    const anchors = page.locator('a[href*="#"]');
    const count = await anchors.count();
    if (count > 0) {
      await expect(anchors.first()).toBeVisible();
    }
  });
});
